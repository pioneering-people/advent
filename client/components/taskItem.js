TaskItem = {

  model: {
  //set title of page
    getTaskDetails: function(taskName) {
      return Tasks.find({name: taskName}).fetch()[0] || {}
    },
    uploadPhoto: function(image, taskName, taskDetails) {
      Photos.insert({
        user: Session.get('user'),
        image: image,
        quest: taskDetails.quest,
        task: taskName,
        createdAt: Date.now()
      })
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
        class: ctrl.css.mapButton,
        onclick: function() {
          window.location = 'geo:' + ctrl.taskDetails.location.join(',')
        }
      },
      photoButton: {
        class: ctrl.css.photoButton,
        onclick: function() {
          MeteorCamera.getPicture({quality: 20}, function(err, image) {
            TaskItem.model.uploadPhoto(image, ctrl.taskName, ctrl.taskDetails)
          })
       }
      },
      boldTitle: {
        class: ctrl.css.boldTitle
      },
      centerButton: {
        class: ctrl.css.centerButton
      }
    }


    return m('div.taskItem', attr.taskItem, [
      NavBar,
      m('div.taskDetails', attr.taskDetails, [
        m('div.center', [
          m('span', attr.boldTitle, 'Quest: '),
          m('span', ctrl.taskDetails.quest),
          m('br'),
          m('br'),
          m('span', attr.boldTitle, 'Task: '),
          m('span', ctrl.taskDetails.name),
          m('br'),
          m('br'),
          m('span', attr.boldTitle, 'Location: '),
          m('span', ctrl.taskDetails.location)
        ])
      ]),
      m('div.mapButton', attr.mapButton, [
        m('div', attr.centerButton, [
          m('span', 'Map')
        ])
      ]),
      m('div.photoButton', attr.photoButton, [
        m('div', attr.centerButton, [
          m('span', 'Upload Photo')
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
      //'outline': '1px solid gray',
      'font': '22px Helvetica, Arial, sans-serif'
    },
    taskDetails: {
      'width': '100%',
      'height': '50%',
      'padding': '0',
      'margin': '0',
      //'outline': '1px solid gray',
      //'text-align': 'center'
      'margin-left': '10%'
    },
    mapButton: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'border-top': '1px solid #F7F7F9',
      'font': 'bold 28px Helvetica, Arial, sans-serif', 
      'text-align': 'center'
    },
    photoButton: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'border-top': '1px solid #F7F7F9',
      'font': 'bold 28px Helvetica, Arial, sans-serif',
      'text-align': 'center'
    },
    centerButton:{
      'margin': 'auto',
      'position': 'relative',
      'top': '35%'
    },
    boldTitle:{
      'font-weight': 'bold'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}