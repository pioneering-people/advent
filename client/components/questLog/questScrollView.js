QuestScroll = {

  model: {
    lastQuestOnPage:  0,
    getQuests: function(up) {
      var fifth = []
      if (globalModel.questViewOffset !== 0){
        if(up) fifth = Quests.find({normalId: {'$lt': globalModel.questViewOffset}}, {limit: 5}).fetch()
        else fifth = Quests.find({normalId: {'$gt': globalModel.questViewOffset}}, {limit: 5}).fetch()
      }
      else {
        fifth = Quests.find({}, {limit: 5}).fetch()
      }
      if (fifth.length) QuestScroll.model.lastQuestOnPage = fifth[fifth.length-1].normalId 
      return fifth
    },
    setMostRecentQuest: function() {
      globalModel.questViewOffset = QuestScroll.model.lastQuestOnPage
    }
  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = QuestScroll.stylesheet().classes
    ctrl.quests = m.prop(QuestScroll.model.getQuests())
    ctrl.scrollQuests = function(up) {
      var direction = up || undefined
      QuestScroll.model.setMostRecentQuest()
      ctrl.quests(QuestScroll.model.getQuests(direction))
    }
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      },
      questsList: {
        class: ctrl.css.questsList
      },
      quest: {
        class: ctrl.css.quest
      },
      bold: {
        class: ctrl.css.bold
      },
      scrollButtons: {
        class: ctrl.css.scrollButtons
      },
      upButton:{
        class: ctrl.css.upButton,
        onclick: function() {
          ctrl.scrollQuests('up')
        }
      },
      downButton:{
        class: ctrl.css.downButton,
        onclick: function() {
          ctrl.scrollQuests()
        }
      }
    }


    return m('div.main', attr.main, [
      m('div.questsList', attr.questsList, [
        ctrl.quests().map(function (quest) {
          return m('div.quest', attr.quest, [
            m('br'),
            m('br'),
            m('span', attr.bold, quest.name),
            m('br'),
            m('span', 'created by '),
            m('span', quest.creator),
            m('br'),
            m('span','Prize: '),
            m('span', quest.prize),
          ])
        })
      ]),
      m('div.scrollButtons', attr.scrollButtons, [
        m('div.downButton', attr.upButton, '^'),
        m('div.upButton', attr.downButton, 'v')
      ])
      
    ])
  },

  styles: {
    main: {
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
      'outline': '10px dotted red',
      'text-align': 'center',
      'font-size': '2em'
    },
    questsList: {
      'width': '100%',
      'height': '80%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid orange',
      'text-align': 'center',
      'font-size': '1em'
    },
    quest: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid blue',
      'text-align': 'center',
      'font-size': '1em'
    },
    scrollButtons: {
      'width': '100%',
      'height': '10%',
      'padding': '0px',
      'margin': 'auto',
      'outline': '1px solid green'
    },
    upButton: {
      'position': 'relative',
      'background-color': 'blue',
      'display': 'inline-block',
      'width': '50%',
      'float': 'left',
      'height': '100%',
      'font-size': '2em',
      'text-align': 'center'
    },
    downButton: {
      'position': 'relative',
      'background-color': 'magenta',
      'display': 'inline-block',
      'width': '50%',
      'float': 'left',
      'height': '100%',
      'font-size': '2em',
      'text-align': 'center'
    },
    bold: {
      'font-weight': 'bold'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}