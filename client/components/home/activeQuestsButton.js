ActiveQuestsButton = {
  model: {

  },


  controller: reactive(function(){
    ctrl = this
    ctrl.css = ActiveQuestsButton.stylesheet().classes
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main,
        onclick: function() {
          m.route('/questLog')
          globalModel.backStack.push('/');
        }
      },
      center: {
        class: ctrl.css.center
      }
    }
    return m('div.activeQuestsButton', attr.main, [
      m('div.center', attr.center, 'Active Quests')
    ]
  )},


  styles: {
    main:{
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid black',
      'text-align': 'center',
    },
    center:{
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