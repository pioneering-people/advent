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
          // globalModel.backStack.push('/');
        }
      },
      center: {
        class: ctrl.css.center
      }
    }
    return m('div.availableQuestsButton', attr.main, [
      m('div.center', attr.center, 'Available Quests')
    ]
  )},


  styles: {
    main: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray',
      'text-align': 'center',
      'font': 'bold 18px Helvetica, Arial, sans-serif'
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