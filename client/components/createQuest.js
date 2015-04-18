
CreateQuest = {

  model: {
    createQuest: function(params) {
      var user = Session.get('user')
      // debugger
      Quests.insert({  
        // normalId: ,
        name: params.name ,
        active: false,
        start: params.start,
        end: params.end,
        prize: params.prize,
        minimumStartPrice: params.minimumStartPrice,
        fundsRaised: 0,
        creator: user,
        participants: [],
        settings: {
        singleActivity: false, //one activity at a time
        }
      })
      m.route('/createTasks/'+params.name)
    }
  },

  controller: reactive(function() {
    ctrl = this
    if(!Session.get('user'))m.route('/auth')
    ctrl.css = CreateQuest.stylesheet().classes
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
        class: ctrl.css.questdeets
      },
      submitBtn: {
        class: ctrl.css.submitBtn,
         onmousedown: function(e) {
          e.target.style['background-color'] = '#559E3D'
        },
         onmouseup: function(e) {
          e.target.style['background-color'] = '#0278AA'
        },
         onmouseleave: function(e) {
          e.target.style['background-color'] = '#0278AA'
        }
      },
      createForm: {
        onsubmit: function(e) {
          e.preventDefault()
          console.log(e)
          var params = {}
          params.name = e.target[0].value
          params.start = e.target[1].value
          params.end = e.target[2].value
          params.prize = +(e.target[3].value)
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
            m('input.form-control')
          ]),
          m('div.form-group', attr.questdeets, [
            m('label.control-label', 'Start Date'),
            m('input.form-control')
          ]),
          m('div.form-group', attr.questdeets, [
            m('label.control-label', 'End Date'),
            m('input.form-control')
          ]),
          m('div.form-group', attr.questdeets, [
            m('label.control-label', 'Prize'),
            m('input.form-control')
          ]),
          m('div.form-group', attr.questdeets, [
            m('label.control-label', 'Entry Fee'),
            m('input.form-control')
          ]),
           // m('input', attr.questdeets),
           // m('br'),
           // m('div', attr.header, 'Start Date'),
           // m('input', attr.questdeets),
           // m('div', attr.header, 'End Date'),
           // m('input', attr.questdeets),
           // m('br'),
           // m('div', attr.header, 'Prize'),
           // m('input', attr.questdeets),
           // m('br'),
           // m('div', attr.header, 'Minimum Start Price'),
           // m('input', attr.questdeets),
           // m('br'),
           m('button.btn btn-default btn-lg', attr.submitBtn, 'Submit')
       ])
    ])
      
    ])
  

  },

//
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
      'margin-top': '3%'
    },
    questdeets: {
      'width': '50%',
      'text-align': 'center',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'padding-top': '15px'
    },
    submitBtn: {
      'margin-top': '20px'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }



}