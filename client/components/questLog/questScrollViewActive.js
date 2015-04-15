QuestScrollActive = {

  model: {
    quests: function() {
      return Quests.find({participants: Session.get('user')}).fetch()
    }
  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = QuestScrollActive.stylesheet().classes
    ctrl.quests = m.prop(QuestScrollActive.model.quests())
    ctrl.offset = 0
    ctrl.max = ctrl.quests().length ? ctrl.quests().length - 5 : 0
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
      quest: function(questName){
        return {
          class: ctrl.css.quest,
          onclick: function() {
            // globalModel.backStack.push('/questLogActive');
            m.route('/taskLog/' + questName)
          }
        }
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
      center:{
        class: ctrl.css.center
      }
    }


    return m('div.main', attr.main, [
      m('div.questsList', attr.questsList, [
        ctrl.quests().slice(ctrl.offset, ctrl.offset + 5).map(function (quest, index) {
          return m('div.quest', attr.quest(quest.name), [
            m('div.center', attr.center, [
              m('span', attr.bold, quest.name),
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
          m('div.center', attr.center, '<-')
        ]),
        m('div.upButton', attr.downButton, [
          m('div.center', attr.center, '->')
        ])
      ])

    ])
  },

  styles: {
    main: {
      'width': '100%',
      'height': '90vh',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'text-align': 'center',
      'font-size': '1em',
      'font': '18px Helvetica, Arial, sans-serif'
    },
    questsList: {
      'width': '100%',
      'height': '90%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'text-align': 'center',
      'font-size': '1em'
    },
    quest: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'text-align': 'center',
      'font-size': '1em'
    },
    scrollButtons: {
      'width': '100%',
      'height': '10%',
      'padding': '0px',
      'margin': 'auto',
      //'outline': '1px solid green'
    },
    upButton: {
      'outline': '1px solid gray',
      'position': 'relative',
      //'background-color': 'blue',
      'display': 'inline-block',
      'width': '50%',
      'float': 'left',
      'height': '100%',
      'font-size': '2em',
      'text-align': 'center'
    },
    downButton: {
      'outline': '1px solid gray',
      'position': 'relative',
      //'background-color': 'magenta',
      'display': 'inline-block',
      'width': '50%',
      'float': 'left',
      'height': '100%',
      'font-size': '2em',
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