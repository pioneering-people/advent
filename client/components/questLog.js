QuestLog = {

  model: {
  //set title of page
    quests: function() {
      var route = m.route()
      var result = []

      switch(route){
        case '/questLog':
          result = Quests.find({participants: {$ne:Session.get('user')}}).fetch()
          break
        case '/activeQuests':
          result = Quests.find({participants: Session.get('user')}).fetch()
          break
        case '/myQuests':
          result = Quests.find({creator: Session.get('user')}).fetch()
          break
        default:
          console.log('Route:', route)
          console.log('Result:', result)
      }

      return result
    },
    offset: 0,
    name: function() {
      switch(m.route()){
        case '/questLog':
          return 'Browse Quests'
          break
        case '/activeQuests':
          return 'Active Quests'
          break
        case '/myQuests':
          return 'My Quests'
          break
        default:
          return 'Browse Quests'
      }
    }
  },

  controller: reactive(function() {
    ctrl = this
    // debugger
    NavBarFixed.model.title = QuestLog.model.name()
    if(!Session.get('user'))m.route('/auth')
    ctrl.css = QuestLog.stylesheet().classes
    ctrl.quests = m.prop(QuestLog.model.quests())
    ctrl.offset = m.prop(QuestLog.model.offset)
    ctrl.max = (function() {
      var result = ctrl.quests().length ? ctrl.quests().length - 5 : 0
      if(result < 0) result = 0
      return result
    })()
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      QuestLog: {
        class: ctrl.css.QuestLog
      },
      questsList: {
        class: ctrl.css.questsList
      },
      quest: function(questName){
        return {
          class: ctrl.css.quest,
          onclick: function() {
            // globalModel.backStack.push('/questLog');
            var route = m.route()
            route === '/questLog' ?
            m.route('/questItem/' + questName)
            : m.route('/taskLog/' + questName)
          }
        }
      },
      centerQuest:{
        class: ctrl.css.centerQuest
      },
      centerNav:{
        class: ctrl.css.centerNav
      },
      boldName:{
        class: ctrl.css.boldName
      },
      placeholder:{
        class: ctrl.css.placeholder
      }
    }
    return m('div.QuestLog', attr.QuestLog, [
      NavBarFixed,
      m('div.questsList', attr.questsList, [
        m('div', attr.placeholder),
        ctrl.quests().map(function (quest, index) {  
          return m('div.quest', attr.quest(quest.name), [
            m('div', attr.centerQuest, [
              m('span', attr.boldName, quest.name),
              m('br'),
              m('span', 'created by '),
              m('span', quest.creator),
              m('br'),
              m('span','Prize: '),
              m('span', quest.prize),
              m('br'),
              function() {
                if(quest.winner){
                  var winnerTag = m('span','Winner: ')
                  var winnerName = m('span', quest.winner)
                  return [winnerTag, winnerName]
                } else return null
              }()
            ])
          ])
        })
      ]),
    ])
  },

  styles: {
    QuestLog: {
      'width': '100%',
      'height': '100%',
      'font': '20px Helvetica, Arial, sans-serif'
    },
    questsList: {
      'width': '100%',
      'height': '90%',
      'text-align': 'center',
      'font-size': '1em'
    },
    quest: {
      'color': '#333',
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'border-bottom': '1px solid #c1c1c1',
      'text-align': 'center',
      'font-size': '1em'
    },
    centerQuest: {
      'margin': 'auto',
      'position': 'relative',
      'top': '20%'
    },
    centerNav: {
      'margin': 'auto',
      'position': 'relative',
      'top': '25%',
      'font': 'bold 24px Helvetica, Arial, sans-serif',
      'color': '#e43114'
    },
    boldName: {
      'font-weight': 'bold'
    },
    placeholder: {
      'height': '11%'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}
