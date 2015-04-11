UserStats = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = UserStats.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      }
    }
    return m('div.userStats', attr.main, 'cant match my stats')

  },

  styles: {
    main: {
      'width': '100%',
      'height': '50%',
      'padding': '0',
      'margin': '0',
      'border': '1px solid red',
      'text-align': 'center'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}