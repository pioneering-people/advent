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
      }
    }
    console.log(ctrl.stats)
    return m('div.userStats', attr.main, [
      m('h1', ctrl.stats.name),
      m('h2', ctrl.stats.title),
      m('h3', ctrl.stats.experience),
      m('h2', ctrl.stats.orginanization)
    ])

  },

  styles: {
    main: {
      'width': '100%',
      'height': '50%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid red',
      'text-align': 'center'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}