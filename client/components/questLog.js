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
        case '/questLogActive':
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
    }
  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = QuestLog.stylesheet().classes
    ctrl.quests = m.prop(QuestLog.model.quests())
    ctrl.offset = 0
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
      scrollButtons: {
        class: ctrl.css.scrollButtons
      },
      upButton:{
        class: ctrl.css.upButton,
        onclick: function() {
          (ctrl.offset - 5) < 0 ? ctrl.offset = 0 : ctrl.offset -= 5
        }
      },
      downButton:{
        class: ctrl.css.downButton,
        onclick: function() {
          //if translating down four would cause less than 4 items to be on the screen.. set the offset to the max
          (ctrl.offset + 5) > ctrl.max ? ctrl.offset = ctrl.max : ctrl.offset += 5
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
      }
    }
    return m('div.QuestLog', attr.QuestLog, [
      NavBar,
      // m('div.main', attr.main, [
      m('div.questsList', attr.questsList, [
        ctrl.quests().slice(ctrl.offset, ctrl.offset + 5).map(function (quest, index) {
          return m('div.quest', attr.quest(quest.name), [
            m('div', attr.centerQuest, [
              m('span', attr.boldName, quest.name),
              m('br'),
              m('span', 'created by '),
              m('span', quest.creator),
              m('br'),
              m('span','Prize: '),
              m('span', quest.prize)
            ])
          ])
        })
      ]),
      m('div.scrollButtons', attr.scrollButtons, [
        m('div.downButton', attr.upButton, [
          m('div', attr.centerNav, '<-')
        ]),
        m('div.upButton', attr.downButton, [
          m('div', attr.centerNav, '->')
        ])
      ])
      // ])
    ])
  },

  styles: {
    QuestLog: {
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
      //'outline': '1px solid gray',
      'font': '20px Helvetica, Arial, sans-serif'
    },
    questsList: {
      'width': '100%',
      'height': '80%',
      'padding': '0',
      'margin': '0',
      //'outline': '1px solid gray',
      'text-align': 'center',
      'font-size': '1em'
    },
    quest: {
      'color': '#333',
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'border-bottom': '1px solid #F7F7F9',
      'text-align': 'center',
      'font-size': '1em'
    },
    scrollButtons: {
      //'border-top': '1px solid #F7F7F9',
      'width': '100%',
      'height': '10%',
      'padding': '0px',
      'margin': 'auto',
      'background-color': '#F7F7F9'
      //'outline': '1px solid green'
    },
    upButton: {
      'position': 'relative',
      //'background-color': 'blue',
      'display': 'inline-block',
      'width': '50%',
      'float': 'left',
      'height': '100%',
      'text-align': 'center'
    },
    downButton: {
      'position': 'relative',
      //'background-color': 'magenta',
      'display': 'inline-block',
      'width': '50%',
      'float': 'left',
      'height': '100%',
      'text-align': 'center'
    },
    centerQuest: {
      'margin': 'auto',
      'position': 'relative',
      'top': '15%'
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
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}