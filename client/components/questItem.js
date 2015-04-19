QuestItem = {

  model: {
    getQuestDetails: function(questName) {
      return Quests.find({name: questName}).fetch()[0] || {}
    }
  },

  controller: reactive(function() {
    ctrl = this
    if(!Session.get('user'))m.route('/auth')
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
            var questId = 0
            var userId = 0
            var tasksCompleted = { completed : [] }
            var name = Session.get('user')
            var user = Users.find({ name : name }).fetch() || []
            var tasks = Tasks.find({ quest: ctrl.questName }).fetch() || []
            var quest = Quests.find({ name : ctrl.questName }).fetch() || []

            var setModifier = { $set: {} }
            setModifier.$set['quests.' + ctrl.questName] = tasksCompleted

            if(quest.length && user.length) {
              questId = quest[0]._id
              userId = user[0]._id
            } else console.log('Error: cannot find quest or user')

            if(questId && userId) {
              Quests.update({ _id : questId }, { $push: { participants : name } })
              Users.update({ _id : userId }, setModifier)
              m.route('/')
            } else console.log('Error: cannot sign up')
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
          m('span', ctrl.questDetails.participants.toString().split(",").join(", "))
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
      'color': '#333',
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
      'font': '22px Helvetica, Arial, sans-serif'
    },
    questDetails: {
      'color': '#333',
      'width': '90%',
      'height': '70%',
      'padding': '0',
      'margin-left': '10%',
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