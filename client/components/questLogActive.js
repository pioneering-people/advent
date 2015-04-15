QuestLogActive = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = QuestLogActive.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      QuestLogActive: {
        class: ctrl.css.QuestLogActive
      }
    }
    return m('div.QuestLogActive', attr.QuestLogActive, [
      NavBar,
      QuestScrollActive
    ])
  },

  styles: {
    QuestLogActive: {
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray', 
      'font': 'bold 22px Helvetica, Arial, sans-serif'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}