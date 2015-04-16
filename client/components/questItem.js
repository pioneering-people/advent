QuestItem = {

  model: {
    //set title of page
    getQuestDetails: function(questName) {
      return Quests.find({name: questName}).fetch()[0] || {}
    }
  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = QuestItem.stylesheet().classes
    ctrl.questName = m.route.param('questName')
    ctrl.questDetails = QuestItem.model.getQuestDetails(ctrl.questName)
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      },
      questItem: {
        class: ctrl.css.questItem
      },
      questDetails: {
        class: ctrl.css.questDetails
      },
      signupButton: function(){
        return {
          class: ctrl.css.signupButton,
          onclick: function() {
            // also needs to add you to participants
            m.route('/')
          }
        }
      },
      bold: {
        class: ctrl.css.bold
      },
      center:{
        class: ctrl.css.center
      }
    }


    return m('div.questItem', attr.questItem, [
      NavBar,
      m('div.questDetails', attr.questDetails, [
        m('div.center', attr.center, [
          m('span', attr.bold, 'Quest: ' + ctrl.questDetails.name),
          m('br'),
          m('br'),
          m('span', attr.bold, 'Creator: ' + ctrl.questDetails.creator),
          m('br'),
          m('span', attr.bold, 'Start: ' + ctrl.questDetails.start),
          m('br'),
          m('span', attr.bold, 'End: ' + ctrl.questDetails.end),
          m('br'),
          m('span', attr.bold, 'Prize: ' + ctrl.questDetails.prize),
          m('br'),
          m('span', attr.bold, 'Minimum start price: ' + ctrl.questDetails.minimumStartPrice),
          m('br'),
          m('span', attr.bold, 'Funds raised so far: ' + ctrl.questDetails.fundsRaised),
          m('br'),
          m('span', attr.bold, 'Participants: ' + ctrl.questDetails.participants)
        ])
      ]),
      m('div.signupButton', attr.signupButton(), [
        m('div.center', attr.center, [
          m('span', attr.bold, 'Sign Up')
        ])
      ])
    ])
  },

  styles: {
    questItem: {
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'font': 'bold 22px Helvetica, Arial, sans-serif'
    },
    questDetails: {
      'width': '100%',
      'height': '70%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'text-align': 'center'
    },
    signupButton: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'text-align': 'center'
    },
    bold: {
      'font-weight': 'bold'
    },
    center:{
      'margin': 'auto',
      'position': 'relative',
      'top': '50%',
      'transform': 'translateY(-50%)'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}