TaskLog = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = TaskLog.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      TaskLog: {
        class: ctrl.css.TaskLog
      }
    }
    return m('div.TaskLog', attr.TaskLog, [
      NavBar,
      TaskScroll
    ])
  },

  styles: {
    TaskLog: {
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