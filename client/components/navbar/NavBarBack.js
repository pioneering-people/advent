NavBarBack = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = NavBarBack.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      }
    }
    return m('div.backBtn', attr.main, '<')

  },

  styles: {
    main: {
      'background-color': 'blue',
      'width': '10%',
      'display': 'inline-block',
      'float': 'left',
      'height': '100%',
      'text-align': 'center'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}