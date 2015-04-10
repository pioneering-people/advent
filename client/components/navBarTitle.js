NavBarTitle = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = NavBarTitle.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      },
      title: {
        class: ctrl.css.title
      }
    }
    return m('div.main', attr.main, [
      m('div.title', attr.title, 'Home Page'),
    ])

  },

//
  styles: {
    main: {
      'width': '100%',
      'height': '100%'
    },
    title: {
      'font-size': '2em',
      'float': 'left',
      'text-align': 'center'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }



}