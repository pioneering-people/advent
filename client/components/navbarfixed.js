NavBarFixed = {

  model: {
    title: 'Home'
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
      },
      backBtn: {
        class: ctrl.css.backBtn,
        onclick: function() {
          window.history.back()
        }
      },
      title: {
        class: ctrl.css.title
      },
      menuBtn: {
        class: ctrl.css.menuBtn,
        onclick: function(){
          m.route('/options')
        }
      }
    }
    return m('div.navbar navbar-fixed-top', attr.navbar, [
      m('div.backBtn', attr.backBtn, [
        m('div.center', '<')
      ]),
      m('div.titleBtn', attr.title, [
        m('div.center', NavBarFixed.model.title)
      ]),
      m('div.menuBtn', attr.menuBtn, [
        m('div.center', '=')
      ])
    ])

  },

  styles: {
    navbar: {
      'width': '100%',
      'height': '10%',
      'padding': '0',
      'margin': '0',
      'background-color': '#ff5252',

    },
    backBtn: {
      'background-color': '#ff5252',
      'width': '12.5%',
      'display': 'inline-block',
      'float': 'left',
      'height': '100%',
      'text-align': 'center',
      'font': 'bold 24px Helvetica, Arial, sans-serif',
      'color': '#fcfefe'
    },
    title: {
      'background-color': '#ff5252',
      'width': '75%',
      'display':'inline-block',
      'float': 'left',
      'height': '100%',
      'text-align': 'center',
      'font': 'bold 24px Helvetica, Arial, sans-serif',
      'color': '#fcfefe'
    },
    menuBtn: {
      'background-color': '#ff5252',
      'width': '12.5%',
      'display': 'inline-block',
      'float': 'left',
      'height': '100%',
      'text-align': 'center',
      'font': 'bold 24px Helvetica, Arial, sans-serif',
      'color': '#fcfefe'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }
}



