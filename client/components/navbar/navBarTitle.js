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
      }
    }
    return m('div.titleBtn', attr.title, 'Title')

  },

  styles: {
    title: {
      'background-color': '#cd563e',
      'width': '80%',
      'display':'inline-block',
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