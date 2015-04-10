NavBar = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = NavBar.stylesheet().classes



  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      },
      back: {
        class: ctrl.css.back
      },
      title: {
        class: ctrl.css.title
      },
      menu: {
        class: ctrl.css.menu
      }
    }
    return m('div.main', attr.main, [
      m('div.backBtn', attr.back, '<'),
      m('div.title', attr.title, 'Home Page'),
      m('div.menuBtn', attr.menu, '*')
    ])

  }

//
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
    },
    title: {
      'font-size': '2em',
      'float': 'left',
      'text-align': 'center'
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