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
            var id = 0
            var name = Session.get('user')
            var result = Quests.find({name : ctrl.questName}).fetch() || []

            if(result.length) {
              id = result[0]._id
            }

            if(id) {
              Quests.update({ _id : id }, { $push: { participants : name } })
              m.route('/')
            } else {
              console.log('Sign Up Error')
            }

            // Will need to add to the Users.quests object

          }
        }
      }
    }


    return m('div.questItem', attr.questItem, [
      NavBar,
      m('div.questDetails', attr.questDetails, [
        m('div.center', [
          m('span.bold', 'Quest: ' + ctrl.questDetails.name),
          m('br'),
          m('br'),
          m('span.bold', 'Creator: ' + ctrl.questDetails.creator),
          m('br'),
          m('span.bold', 'Start: ' + ctrl.questDetails.start),
          m('br'),
          m('span.bold', 'End: ' + ctrl.questDetails.end),
          m('br'),
          m('span.bold', 'Prize: ' + ctrl.questDetails.prize),
          m('br'),
          m('span.bold', 'Minimum start price: ' + ctrl.questDetails.minimumStartPrice),
          m('br'),
          m('span.bold', 'Funds raised so far: ' + ctrl.questDetails.fundsRaised),
          m('br'),
          m('span.bold', 'Participants: ' + ctrl.questDetails.participants)
        ])
      ]),
      m('div.signupButton', attr.signupButton(), [
        m('div.center', [
          m('span.bold', 'Sign Up')
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
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}