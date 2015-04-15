TaskScroll = {

  model: {
    lastTaskOnPage:  0,
    getTasks: function(questName, up) {
      var fifth = []
      if (globalModel.taskViewOffset !== 0){
        if(up) fifth = Tasks.find({quest: questName, normalId: {'$lt': globalModel.taskViewOffset}}, {limit: 5}).fetch()
        else fifth = Tasks.find({quest: questName, normalId: {'$gt': globalModel.taskViewOffset}}, {limit: 5}).fetch()
      }
      else {
        fifth = Tasks.find({quest: questName}, {limit: 5}).fetch()
      }
      if (fifth.length) TaskScroll.model.lastTaskOnPage = fifth[fifth.length-1].normalId
      return fifth
    },
    setMostRecentTask: function() {
      globalModel.taskViewOffset = TaskScroll.model.lastTaskOnPage
    }
  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = TaskScroll.stylesheet().classes
    ctrl.questName = m.route.param('questName')
    ctrl.tasks = m.prop(TaskScroll.model.getTasks(ctrl.questName))
    ctrl.scrollTasks = function(up) {
      var direction = up || undefined
      TaskScroll.model.setMostRecentTask()
      ctrl.tasks(TaskScroll.model.getTasks(ctrl.questName, direction))
    }
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      },
      tasksList: {
        class: ctrl.css.tasksList
      },
      task: {
        class: ctrl.css.task
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
          ctrl.scrollTasks('up')
        }
      },
      downButton:{
        class: ctrl.css.downButton,
        onclick: function() {
          ctrl.scrollTasks()
        }
      },
      center:{
        class: ctrl.css.center
      }
    }


    return m('div.main', attr.main, [
      m('div.tasksList', attr.tasksList, [
        ctrl.tasks().map(function (task) {
          return m('div.task', attr.task, [
            m('div.center', attr.center, [
              m('span', attr.bold, task.name)
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
      'outline': '10px dotted red',
      'text-align': 'center',
      'font-size': '1em'
    },
    tasksList: {
      'width': '100%',
      'height': '90%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid orange',
      'text-align': 'center',
      'font-size': '1em'
    },
    task: {
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