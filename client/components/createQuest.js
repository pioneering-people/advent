
CreateQuest = {

  model: {
    createQuest: function(params) {
      var user = Session.get('user')
      if(!Quests.find({name: params.name}).count()){
        if(params.name && params.start && params.end && params.prize && params.minimumStartPrice){
          Quests.insert({
            name: params.name ,
            active: false,
            start: params.start,
            end: params.end,
            prize: params.prize,
            minimumStartPrice: params.minimumStartPrice,
            fundsRaised: 0,
            creator: user,
            participants: [],
            winner: '',
            settings: {
              singleActivity: false, //one activity at a time
            }
          })
          m.route('/createTasks/'+params.name)
        } else{

          document.getElementById('namefield').placeholder = 'fill in all fields'
          document.getElementById('startfield').placeholder = 'fill in all fields'
          document.getElementById('endfield').placeholder = 'fill in all fields'
          document.getElementById('prizefield').placeholder = 'fill in all fields'
          document.getElementById('minfield').placeholder = 'fill in all fields'
          // return 'empty fields'
        }
      } else {
        document.getElementById('namefield').placeholder = 'Quest Name Taken'
        document.getElementById('namefield').value = ''
      }
    },
    name: 'Create Quest'
  },

  controller: reactive(function() {
    ctrl = this
     NavBar.model.title = CreateQuest.model.name
    if(!Session.get('user'))m.route('/auth')
    ctrl.css = CreateQuest.stylesheet().classes
    this.fieldPlaceholder = m.prop('Empty')
  }),


  view: function(ctrl) {
    var attr = {
      container: {
        class: ctrl.css.container
      },
      header: {
        class: ctrl.css.header
      },
      CreateQuest: {
        class: ctrl.css.CreateQuest
      },
      questdeets: {
        class: ctrl.css.questdeets,
        placeholder: ctrl.fieldPlaceholder()
      },
      submitBtn: {
        class: ctrl.css.submitBtn,
      },
      createForm: {
        onsubmit: function(e) {
          e.preventDefault()
          console.log(e)
          var params = {}
          params.name = e.target[0].value
          params.start = e.target[1].value
          params.end = e.target[2].value
          params.prize = String(e.target[3].value)
          params.minimumStartPrice = e.target[4].value
          CreateQuest.model.createQuest(params)
        }
      }

    }
     return m('div.CreateQuest', attr.CreateQuest, [
      NavBar,
      m('div', attr.container, [
        m('form.createForm', attr.createForm, [
          m('div.form-group', attr.questdeets, [
            m('label.control-label', 'Quest Name'),
            m('input.form-control#namefield')
          ]),
          m('div.form-group', attr.questdeets, [
            m('label.control-label', 'Start Date'),
            m('input[disable].form-control datepicker #startfield', {
              config: addDatePicker
            })
          ]),
          m('div.form-group', attr.questdeets, [
            m('label.control-label', 'End Date'),
            m('input[disable].form-control datepicker #endfield', {
              config: addDatePicker
            })
          ]),
          m('div.form-group', attr.questdeets, [
            m('label.control-label', 'Prize'),
            m('input.form-control#prizefield')
          ]),
          m('div.form-group', attr.questdeets, [
            m('label.control-label', 'Entry Fee'),
            m('input.form-control#minfield')
          ]),
          m('button.btn btn-default btn-lg', attr.submitBtn, 'Submit')
        ])
      ])
    ])
  },


  styles: {
    CreateQuest: {
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
    },
     container: {
      'color': '#333',
      'width': '100%',
      'text-align': 'center',
      'height': '85%',
      'text-align': 'center',
      'font': '20px Helvetica, Arial, sans-serif',
      'margin-top': '2%'
    },
    questdeets: {
      'width': '50%',
      'text-align': 'center',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'padding-top': '15px'
    },
    submitBtn: {
      'margin-top': '15px'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }



}

function addDatePicker(element, isInit, context) {
  if(isInit) return
  $(element).datepicker()
}
