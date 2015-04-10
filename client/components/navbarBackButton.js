NavBarBackButton = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = NavBarBackButton.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      },
      back: {
        class: ctrl.css.back
      }
    }
    return m('div.main', attr.main, [
      m('div.backBtn', attr.back, '<')
    ])

  },

  styles: {
    main: {
      'width': '100%',
      'height': '100%'
    },
    back: {
      'position': 'relative',
      'top': '0',
      'left': '0',
      'border': 'black, solid, 1px'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}