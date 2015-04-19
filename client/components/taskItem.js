TaskItem = {

  model: {
  //set title of page
    getTaskDetails: function(questName, taskName) {
      return Tasks.find({quest: questName, name: taskName}).fetch()[0] || {}
    },
    uploadPhoto: function(image, taskName, taskDetails) {
      Photos.insert({
        user: Session.get('user'),
        image: image,
        quest: taskDetails.quest,
        task: taskName,
        createdAt: Date.now()
      })
    },
     name: 'Task Details'
  },

  controller: reactive(function() {
    ctrl = this
    NavBar.model.title = TaskItem.model.name
    if(!Session.get('user'))m.route('/auth')
    ctrl.css = TaskItem.stylesheet().classes
    ctrl.taskName = m.route.param('taskName')
    ctrl.questName = m.route.param('questName')
    ctrl.taskDetails = TaskItem.model.getTaskDetails(ctrl. questName, ctrl.taskName)
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
          var location = ctrl.taskDetails.location instanceof Array ?
            ctrl.taskDetails.location.join(',')
          : ctrl.taskDetails.location
          window.location = 'geo: 0,0?q=' + location
        }
      },
      photoButton: {
        class: ctrl.css.photoButton,
        onclick: function() {
          MeteorCamera.getPicture({quality: 20}, function(err, image) {
            if(!err) {
              var userId
              var questId
              var user = Users.find({ name : Session.get('user') }).fetch()
              var quest = Quests.find({ name : ctrl.questName }).fetch()
              var addModifier = { $addToSet: {} }
              var modifierFiller = 'quests.' + ctrl.questName + '.completed'

              if(user.length) userId = user[0]._id
              if(quest.length) questId = quest[0]._id

              addModifier.$addToSet[modifierFiller] = ctrl.taskDetails._id
              Users.update({ _id : userId}, addModifier)

              var questTaskCount = Tasks.find({quest: ctrl.questName}).count()
              var userTaskCount = Users.find({ name : Session.get('user') }).fetch()[0]['quests'][String(ctrl.questName)]['completed'].length

              if(questTaskCount === userTaskCount) {
                if(quest[0].winner === ''){
                  Quests.update({_id : questId}, {$set: {winner: Session.get('user')}})
                }
              }

              TaskItem.model.uploadPhoto(image, ctrl.taskName, ctrl.taskDetails)
            }
          })
       }
      },
      imageFeedButton: {
        class: ctrl.css.imageFeedButton,
        onclick: function() {
          var route = '/imageFeed/' +
            ctrl.taskDetails.quest + '/' +
            ctrl.taskDetails.name
          m.route(route)
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
      m('div.bigButton', attr.mapButton, [
        m('div', attr.centerButton, [
          m('span', 'Map')
        ])
      ]),
      m('div.bigButton', attr.photoButton, [
        m('div', attr.centerButton, [
          m('span', 'Upload Photo')
        ])
      ]),
      m('div.bigButton', attr.imageFeedButton, [
        m('div', attr.centerButton, [
          m('span', 'Image Feed')
        ])
      ])
    ])
  },

  styles: {
    taskItem: {
      'background-color': '#fff',
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
      'font': '22px Helvetica, Arial, sans-serif'
    },
    taskDetails: {
      'width': '90%',
      'height': '50%',
      'padding': '0',
      'margin': '0',
      'margin-left': '10%'
    },
    mapButton: {
      'width': '100%',
      'height': '13.333333%',
      'padding': '0',
      'margin': '0',
      'border-top': '1px solid #c1c1c1',
      'font': 'bold 28px Helvetica, Arial, sans-serif',
      'text-align': 'center',
      // 'color': '#ff5252',
      // 'background-color': '#f0f0f0'
    },
    photoButton: {
      'width': '100%',
      'height': '13.333333%',
      'padding': '0',
      'margin': '0',
      'border-top': '1px solid #c1c1c1',
      'font': 'bold 28px Helvetica, Arial, sans-serif',
      'text-align': 'center',
      // 'color': '#ff5252',
      // 'background-color': '#f0f0f0'
    },
    imageFeedButton: {
      'width': '100%',
      'height': '13.333333%',
      'padding': '0',
      'margin': '0',
      'border-top': '1px solid #c1c1c1',
      'font': 'bold 28px Helvetica, Arial, sans-serif',
      'text-align': 'center',
      // 'color': '#ff5252',
      // 'background-color': '#f0f0f0'
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