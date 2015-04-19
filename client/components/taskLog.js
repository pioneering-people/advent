TaskLog = {

  model: {
  //set title of page
    tasks: function() {
      return Tasks.find({quest: ctrl.questName}).fetch()
    },
    offset: 0
  },

  controller: reactive(function() {
    ctrl = this
    if(!Session.get('user'))m.route('/auth')
    ctrl.css = TaskLog.stylesheet().classes
    ctrl.questName = m.route.param('questName')
    ctrl.tasks = m.prop(TaskLog.model.tasks())
    ctrl.offset = m.prop(QuestLog.model.offset)
    ctrl.max = (function() {
      var result = ctrl.tasks().length ? ctrl.tasks().length - 5 : 0
      if(result < 0) result = 0
      return result
    })()
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      TaskLog: {
        class: ctrl.css.TaskLog
      },
      tasksList: {
        class: ctrl.css.tasksList
      },
      task: function(questName, taskName) {
      return {
        class: ctrl.css.task,
          onclick: function() {
            // globalModel.backStack.push('/taskLog')
            m.route('/taskItem/' + questName + '/' + taskName)
          }
        }
      },
      scrollButtons: {
        class: ctrl.css.scrollButtons
      },
      upButton:{
        class: ctrl.css.upButton,
        onclick: function() {
          var offset = QuestLog.model.offset
          ctrl.offset() - 5 < 0 ? function() {
            QuestLog.model.offset = 0
            ctrl.offset(0)
          }()
          : function() {
            QuestLog.model.offset -= 5
            ctrl.offset(QuestLog.model.offset)
          }()
        }
      },
      downButton:{
        class: ctrl.css.downButton,
        onclick: function() {
          var offset = QuestLog.model.offset
          ctrl.offset() + 5 > ctrl.max ? function() {
            QuestLog.model.offset =ctrl.max
            ctrl.offset(ctrl.max)
          }()
          : function() {
            QuestLog.model.offset += 5
            ctrl.offset(QuestLog.model.offset)
          }()
        }
      },
      centerTask:{
        class: ctrl.css.centerTask
      },
      centerNav:{
        class: ctrl.css.centerNav
      },
      placeholder:{
        class: ctrl.css.placeholder
      }
    }
    return m('div.TaskLog', attr.TaskLog, [
      NavBarFixed,
      // m('div.main', attr.main, [
      m('div.tasksList', attr.tasksList, [
        m('div', attr.placeholder),
        // slice four items from the tasks array starting with the offset
        ctrl.tasks().map(function (task) {
          return m('div.task', attr.task(ctrl.questName, task.name), [
            m('div', attr.centerTask, [
              m('span', task.name)
            ])
          ])
        })
      ]),
      // m('div.scrollButtons', attr.scrollButtons, [
      //   m('div.downButton', attr.upButton, [
      //     m('div.center', attr.centerNav, '<-')
      //   ]),
      //   m('div.upButton', attr.downButton, [
      //     m('div.center', attr.centerNav, '->')
      //   ])
      // ])

      // ])
    ])
  },

  styles: {
    TaskLog: {
      'color': '#333',
      'width': '100%',
      'height': '100%',
    },
    tasksList: {
      'width': '100%',
      'height': '90%',
      'text-align': 'center',
      'font-size': '1em'
    },
    task: {
      'width': '100%',
      'height': '20%',
      'border-bottom': '1px solid #F7F7F9',
      'text-align': 'center',
      'font-size': '1em'
    },
    scrollButtons: {
      'width': '100%',
      'height': '10%',
      'padding': '0px',
      'margin': 'auto',
      'background-color': '#F7F7F9'
    },
    upButton: {
      'position': 'relative',
      'display': 'inline-block',
      'width': '50%',
      'float': 'left',
      'height': '100%',
      'text-align': 'center'
    },
    downButton: {
      'position': 'relative',
      'display': 'inline-block',
      'width': '50%',
      'float': 'left',
      'height': '100%',
      'text-align': 'center'
    },
    centerTask: {
      'font': 'bold 20px Helvetica, Arial, sans-serif',
      'margin': 'auto',
      'position': 'relative',
      'top': '40%'
    },
    centerNav: {
      'margin': 'auto',
      'position': 'relative',
      'top': '25%',
      'font': 'bold 24px Helvetica, Arial, sans-serif',
      'color': '#e43114'
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
