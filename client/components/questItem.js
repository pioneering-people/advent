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
      centerButton: {
        class: ctrl.css.centerButton
      },
      boldTitle: {
        class: ctrl.css.boldTitle
      },
      walloftext: {
        class: ctrl.css.walloftext
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
        m('div', attr.walloftext, [
          m('span', attr.boldTitle, 'Quest: '),
          m('span', ctrl.questDetails.name),
          m('br'),
          m('br'),
          m('span', attr.boldTitle, 'Creator: '),
          m('span', ctrl.questDetails.creator),
          m('br'),
          m('span', attr.boldTitle, 'Start: '),
          m('span', ctrl.questDetails.start),
          m('br'),
          m('span', attr.boldTitle, 'End: '),
          m('span', ctrl.questDetails.end),
          m('br'),
          m('span', attr.boldTitle, 'Prize: '),
          m('span', ctrl.questDetails.prize),
          m('br'),
          m('span', attr.boldTitle, 'Minimum start price: '),
          m('span', ctrl.questDetails.minimumStartPrice),
          m('br'),
          m('span', attr.boldTitle, 'Funds raised so far: '),
          m('span', ctrl.questDetails.fundsRaised),
          m('br'),
          m('span', attr.boldTitle, 'Participants: '),
          m('span', ctrl.questDetails.participants)
        ])
      ]),
      m('div.signupButton', attr.signupButton(), [
        m('div', attr.centerButton, [
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
      //'outline': '1px solid gray',
      'font': '22px Helvetica, Arial, sans-serif'
    },
    questDetails: {
      'width': '100%',
      'height': '70%',
      'padding': '0',
      'margin-left': '10%',
      //'outline': '1px solid gray',
      //'text-align': 'center'
    },
    signupButton: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'background-color': '#F7F7F9',
      'text-align': 'center',
      'font': 'bold 32px Helvetica, Arial, sans-serif',
      'color': '#e43114'
    },
    centerButton:{
      'margin': 'auto',
      'position': 'relative',
      'top': '35%'
    },
    walloftext:{
      'margin': 'auto',
      'position': 'relative',
      'top': '20%'
    },
    boldTitle:{
      'font-weight': 'bold'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}