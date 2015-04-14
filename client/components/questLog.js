QuestLog = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = QuestLog.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      QuestLog: {
        class: ctrl.css.QuestLog
      }
    }
    return m('div.QuestLog', attr.QuestLog, [
      NavBar,
      QuestScroll
    ])
  },

  styles: {
    QuestLog: {
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