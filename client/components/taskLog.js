TaskLog = {

  model: {
  //set title of page
    tasks: function() {
      return Tasks.find({quest: ctrl.questName}).fetch()
    },
    offset: 0,
    name: 'Task Log'
  },

  controller: reactive(function() {
    ctrl = this
    NavBarFixed.model.title = TaskLog.model.name
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
      'border-bottom': '1px solid #c1c1c1',
      'text-align': 'center',
      'font-size': '1em'
    },
    centerTask: {
      'font': 'bold 20px Helvetica, Arial, sans-serif',
      'margin': 'auto',
      'position': 'relative',
      'top': '40%'
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
