CreateTasks = {

  model: {
    createQuest: function(params) {
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
        creator: Session.get('user'),
        participants: [],
        settings: {
        singleActivity: false, //one activity at a time
        }
      })
      m.route('/createTasks')
    }
  },

  controller: reactive(function() {
    ctrl = this
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
        class: ctrl.css.submit,
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
          params.name = e.target[0].value,
          params.start = e.target[1].value,
          params.end = e.target[2].value,
          params.prize = e.target[3].value,
          params.minimumStartPrice = e.target[4].value
          
          CreateQuest.model.createQuest(params)
        }
      }

    }
     return m('div.CreateQuest', attr.CreateQuest, [
      NavBar,
      m('div', attr.container, [
      m('h3', attr.header, 'Name of quest')
      , m('form.createForm', attr.createForm, [
           m('input', attr.questdeets),
           m('br'),
           m('h3', attr.header, 'Task One'),
           m('input', attr.questdeets),
           m('h3', attr.header, 'Task Two'),
           m('input', attr.questdeets),
           m('br'),
           m('h3', attr.header, 'Prize'),
           m('input', attr.questdeets),
           m('br'),
           m('h3', attr.header, 'Minimum Start Price'),
           m('input', attr.questdeets),
           m('br'),
           m('button', attr.submitBtn, 'Submit')
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
      'outline': '1px solid gray'
    },
     container: {
      'width': '25%'
      , 'position': 'relative'
      , 'height': '100%'
      , 'padding': '20px'
      , 'margin': '0px auto 0px auto'
      , 'background-color': '#3790A4'
      , 'text-align': 'center'
      , 'font': '16px Helvetica, Arial, sans-serif'
    },
    header: {
      'color': '#FFFFFF'
    },
    questdeets: {
      'width': '50%',
      'height': '20px',
      'padding': '0px 0px 0px 5px',
      'margin': '0px 0px 10px 0px',
      'background-color': '#FFFFFF',
      'color': 'black'
    },
    submitBtn: {
      'background-color': '#0278AA',
      'margin': '30px 0px 30px 0px',
      'padding': '20px 0px 0px 0px',
      'color': '#FFFFFF'
    }



  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }


}