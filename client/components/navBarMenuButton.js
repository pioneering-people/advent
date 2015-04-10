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
      },
      menu: {
        class: ctrl.css.menu
      }
    }
    return m('div.main', attr.main, [
      m('div.menuBtn', attr.menu, '*')
    ])

  },

//
  styles: {
    main: {
      'width': '100%',
      'height': '100%'
    },
    menu: {
      'position': 'relative',
      'top': '0',
      'right': '0'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }



}