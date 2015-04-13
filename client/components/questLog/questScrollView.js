QuestScroll = {

  model: {
  //set title of page

  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = QuestScroll.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main
      }
    }
    return m('div.questScroll', attr.main, 'quests n shit')

  },

  styles: {
    main: {
      'width': '100%',
      'height': '80%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid red',
      'text-align': 'center',
      'font-size': '2em'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}