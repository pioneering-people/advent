NavBarMenu = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = NavBarMenu.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      }
    }
    return m('div.menuBtn', attr.main, '*')

  },

  styles: {
    main: {
      'background-color': 'yellow',
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