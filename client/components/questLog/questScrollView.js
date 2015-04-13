QuestScroll = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = QuestScroll.stylesheet().classes
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
      }
    }


    return m('div.questsList', attr.questsList, [
       Quests.find().fetch().map(function (quest) {
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
     ])
  },

  styles: {
    main: {
      'width': '100%',
      'height': '80%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid red',
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
    bold: {
      'font-weight': 'bold'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}