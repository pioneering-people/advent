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
      center: {
        class: ctrl.css.center
      }
    }
    return m('div.menuBtn', attr.main, [
      m('div.center', attr.center, '=')
    ])

  },

  styles: {
    main: {
      'background-color': 'yellow',
      'width': '10%',
      'display': 'inline-block',
      'float': 'left',
      'height': '100%',
      'text-align': 'center',
    },
    center: {
      'margin': 'auto',
      'position': 'relative',
      'top': '50%',
      'transform': 'translateY(-50%)'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}