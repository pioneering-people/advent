TaskItem = {

  model: {
  //set title of page
    getTaskDetails: function(taskName) {
      return Tasks.find({name: taskName}).fetch()[0] || {}
    }
  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = TaskItem.stylesheet().classes
    ctrl.taskName = m.route.param('taskName')
    ctrl.taskDetails = TaskItem.model.getTaskDetails(ctrl.taskName)
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      },
      taskItem: {
        class: ctrl.css.taskItem
      },
      taskDetails: {
        class: ctrl.css.taskDetails
      },
      mapButton: {
        class: ctrl.css.mapButton
      },
      photoButton: {
        class: ctrl.css.photoButton
      },
      bold: {
        class: ctrl.css.bold
      },
      center:{
        class: ctrl.css.center
      }
    }


    return m('div.taskItem', attr.taskItem, [
      NavBar,
      m('div.taskDetails', attr.taskDetails, [
        m('div.center', attr.center, [
          m('span', attr.bold, 'Quest: ' + ctrl.taskDetails.quest),
          m('br'),
          m('br'),
          m('span', attr.bold, 'Task: ' + ctrl.taskDetails.name),
          m('br'),
          m('br'),
          m('span', attr.bold, 'Location: ' + ctrl.taskDetails.location)
        ])
      ]),
      m('div.mapButton', attr.mapButton, [
        m('div.center', attr.center, [
          m('span', attr.bold, 'Map')
        ])
      ]),
      m('div.photoButton', attr.photoButton, [
        m('div.center', attr.center, [
          m('span', attr.bold, 'Upload Photo')
        ])
      ])
    ])
  },

  styles: {
    taskItem: {
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'font': 'bold 22px Helvetica, Arial, sans-serif'
    },
    taskDetails: {
      'width': '100%',
      'height': '50%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'text-align': 'center'
    },
    mapButton: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'text-align': 'center'
    },
    photoButton: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
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