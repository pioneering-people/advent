AvailableQuestsButton = {
  model: {

  },


  controller: reactive(function(){
    ctrl = this
    ctrl.css = AvailableQuestsButton.stylesheet().classes
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main,
        onclick: function() {
          m.route('/questLog')
        }
      }
    }
    return m('div.availableQuestsButton', attr.main, 'AvailableQuestsButton')
  },


  styles: {
    main: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid cyan',
      'text-align': 'center'
    }
  },


  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }


}