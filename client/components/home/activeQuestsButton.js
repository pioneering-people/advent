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
          m.route('/activeQuests')
        }
      },
      title: {
        class: ctrl.css.title
      }
    }
    return m('div.main', attr.main, [
      m('div.title', attr.title, 'activeQuests'),
      NavBarTitle
    ])
  },


  styles: {
    main: {
      'width': '100%',
      'height': '100%'
    },
    title: {
      'font-size': '.5em',
      'text-align': 'center',
      'height': '100%'
    }

  },


  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }


}