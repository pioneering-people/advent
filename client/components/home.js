Home = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    if(!Session.get('user'))m.route('/auth')
    ctrl.css = Home.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      home: {
        class: ctrl.css.home
      }
    }
    return m('div.home', attr.home, [
      NavBar,
      UserStats,
      ActiveQuestsButton,
      AvailableQuestsButton
    ])

  },

//
  styles: {
    home: {
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid green'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }



}