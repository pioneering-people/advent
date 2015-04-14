NavBar = {

  model: {

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = NavBar.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      navbar: {
        class: ctrl.css.navbar
      }
    }
    return m('div.navbar', attr.navbar, [
      NavBarBack,
      NavBarTitle,
      NavBarMenu
    ])

  },

//
  styles: {
    navbar: {
      'width': '100%',
      'height': '10%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }



}