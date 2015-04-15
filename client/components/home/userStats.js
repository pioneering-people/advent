UserStats = {

  model: {
    getStats: function() {
      return Users.find({name: Session.get('user')}).fetch()[0] || {}
    }

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = UserStats.stylesheet().classes
    ctrl.stats = UserStats.model.getStats()
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      },
      center: {
        class: ctrl.css.center
      },
      bold: {
        class: ctrl.css.bold
      }
    }


    console.log(ctrl.stats)
    return m('div.userStats', attr.main, [
      m('div.center', attr.center, [
        m('br'),
        m('h2', attr.bold, ctrl.stats.name),
        m('span', 'You are currently participating in ' + Quests.find({participants: Session.get('user')}).fetch().length + ' quests'),
        m('br')
      ])
    ])

  },

  styles: {
    main: {
      'width': '100%',
      'height': '50%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'text-align': 'center',
      'font': '18px Helvetica, Arial, sans-serif'
    },
    center: {
      'margin': 'auto',
      'position': 'relative',
      'top': '50%',
      'transform': 'translateY(-50%)'
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