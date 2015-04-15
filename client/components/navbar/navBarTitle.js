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
      title: {
        class: ctrl.css.title
      },
      center: {
        class: ctrl.css.center
      }
    }
    return m('div.titleBtn', attr.title, [
      m('div.center', attr.center, 'Quest App')
    ])
  },

  styles: {
    title: {
      //'outline': '1px solid gray',
      'background-color': '#e43114',
      'width': '75%',
      'display':'inline-block',
      'float': 'left',
      'height': '100%',
      'text-align': 'center',
      'font': 'bold 22px Helvetica, Arial, sans-serif',
      'color': '#fcfefe'
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