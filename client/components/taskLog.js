TaskLog = {

  model: {
  //set title of page
    tasks: function() {
      // find({questname: m.route.param('questName')})
      return Tasks.find({quest: ctrl.questName}).fetch()
    }
  },

  controller: reactive(function() {
    ctrl = this
    if(!Session.get('user'))m.route('/auth')
    ctrl.css = TaskLog.stylesheet().classes
    ctrl.questName = m.route.param('questName')
    ctrl.tasks = m.prop(TaskLog.model.tasks())
    ctrl.offset = 0
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
      task: function(taskName) {
      return {
        class: ctrl.css.task,
          onclick: function() {
            // globalModel.backStack.push('/taskLog')
            m.route('/taskItem/' + taskName)
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
          (ctrl.offset + 5) > ctrl.max ? ctrl.offset = ctrl.max : ctrl.offset += 5
        }
      },
      centerTask:{
        class: ctrl.css.centerTask
      },
      centerNav:{
        class: ctrl.css.centerNav
      }
    }
    return m('div.TaskLog', attr.TaskLog, [
      NavBar,
      // m('div.main', attr.main, [
      m('div.tasksList', attr.tasksList, [
        // slice four items from the tasks array starting with the offset
        ctrl.tasks().slice(ctrl.offset, ctrl.offset + 5).map(function (task) {
          return m('div.task', attr.task(task.name), [
            m('div', attr.centerTask, [
              m('span', task.name)
            ])
          ])
        })
      ]),
      m('div.scrollButtons', attr.scrollButtons, [
        m('div.downButton', attr.upButton, [
          m('div.center', attr.centerNav, '<-')
        ]),
        m('div.upButton', attr.downButton, [
          m('div.center', attr.centerNav, '->')
        ])
      ])

      // ])
    ])
  },

  styles: {
    TaskLog: {
      'color': '#333',
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
      //'outline': '1px solid green'
    },
    tasksList: {
      'width': '100%',
      'height': '80%',
      'padding': '0',
      'margin': '0',
      //'outline': '1px solid gray',
      'text-align': 'center',
      'font-size': '1em'
    },
    task: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'border-bottom': '1px solid #F7F7F9',
      'text-align': 'center',
      'font-size': '1em'
    },
    scrollButtons: {
      //'border-top': '1px solid gray',
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
    centerTask: {
      'font': 'bold 20px Helvetica, Arial, sans-serif',
      'margin': 'auto',
      'position': 'relative',
      'top': '35%'
    },
    centerNav: {
      'margin': 'auto',
      'position': 'relative',
      'top': '25%',
      'font': 'bold 24px Helvetica, Arial, sans-serif',
      'color': '#e43114'
    },

  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}