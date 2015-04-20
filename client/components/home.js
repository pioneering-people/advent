Home = {

  model: {
  //set title of page
    getStats: function() {
      return Users.find({name: Session.get('user')}).fetch()[0] || {}
    },
    uploadPhoto: function(image, userInfo) {
      if(image){
        Users.update({_id: userInfo._id}, {$set: {
            pic: image
          }
        })
        // m.redraw(true)
      }
    },
    name: 'Home'
  },

  controller: reactive(function() {
    ctrl = this
    NavBar.model.title = Home.model.name
    if(!Session.get('user'))m.route('/auth')
    ctrl.css = Home.stylesheet().classes
    ctrl.stats = Home.model.getStats()
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      home: {
        class: ctrl.css.home
      },
      userStats: {
        class: ctrl.css.userStats
      },
      activeQuestsButton: {
        class: ctrl.css.activeQuestsButton,
        onclick: function() {
          m.route('/activeQuests')
        }
      },
      availableQuestsButton: {
        class: ctrl.css.availableQuestsButton,
        onclick: function() {
          m.route('/questLog')
        }
      },
      profilePic: {
              class: ctrl.css.profilePic,
              src: function() {
                var result = 'img/default.png'
                if(ctrl.stats.pic) return ctrl.stats.pic
                return result
              }(),
              onclick: function() {
                MeteorCamera.getPicture({quality: 70}, function(err, image) {
                  Home.model.uploadPhoto(image, ctrl.stats)
                })
              }
            },
      centerButton: {
        class: ctrl.css.centerButton
      },
      centerUser: {
        class: ctrl.css.centerUser
      }
    }
    return m('div.home', attr.home, [
      NavBar,
      m('div.userStats', attr.userStats, [
        m('div', attr.centerUser, [
          m('img', attr.profilePic),
          m('br'),
          m('h2.bold', ctrl.stats.name),
          m('span', 'You are currently participating in ' + Quests.find({participants: Session.get('user')}).fetch().length + ' quests'),
          m('br')
        ])
      ]),
      m('div.bigButton', attr.activeQuestsButton, [
        m('div', attr.centerButton, 'Active Quests')
      ]),
      m('div.bigButton', attr.availableQuestsButton, [
        m('div', attr.centerButton, 'Browse Quests')
      ])
    ])

  },

//
  styles: {
    home: {
      'color': '#333',
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
    },
    userStats: {
      'width': '100%',
      'height': '50%',
      'padding': '0',
      'margin': '0',
      'border-bottom': '1px solid #c1c1c1',
      'text-align': 'center',
      'font': '18px Helvetica, Arial, sans-serif'
    },
    activeQuestsButton: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'background-color': '#f0f0f0',
      'color': '#ff5252',
      'border-bottom': '1px solid #c1c1c1',
      'text-align': 'center',
      'font': 'bold 28px Helvetica, Arial, sans-serif'
    },
    availableQuestsButton:{
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'text-align': 'center',
      'background-color': '#f0f0f0',
      'color': '#ff5252',
      'font': 'bold 28px Helvetica, Arial, sans-serif'
    },
    centerButton:{
      'margin': 'auto',
      'position': 'relative',
      'top': '35%'
    },
    centerUser:{
      'margin': 'auto',
      'position': 'relative',
      'top': '5%'
    },
    profilePic: {
      'width': '25%',
      'border-radius': '50px'
    },
    
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }



}