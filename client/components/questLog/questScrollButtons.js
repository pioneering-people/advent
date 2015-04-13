
QuestScrollButtons = {
  model: {

  },


  controller: reactive(function(){
    ctrl = this
    ctrl.css = QuestScrollButtons.stylesheet().classes
  }),


  view: function(ctrl) {
    var attr = {
      main: {
        class: ctrl.css.main,
      }
      , upButton:{
        class: ctrl.css.upButton,
        onclick: function() {
        
        }
      }
      , downButton:{
        class: ctrl.css.downButton,
        onclick: function() {
         
        }
      }
    }
    return m('div.QuestScrollButtons', attr.main, [
      m('div.downButton', attr.upButton, '^'),
      m('div.upButton', attr.downButton, 'v')
      ])
  },


  styles: {
    main:{
      'width': '100%',
      'height': '10%',
      'padding': '0',
      'margin': 'auto',
      'outline': '1px solid green'
    },
    upButton:{
      'position': 'relative',
      'background-color': 'blue',
      'display': 'inline-block',
      'width': '50%',
      'float': 'left',
      'height': '100%',
      'font-size': '2em',
      'text-align': 'center'
    },
    downButton: {
      'position': 'relative',
      'background-color': 'magenta',
      'display': 'inline-block',
      'width': '50%',
      'float': 'left',
      'height': '100%',
      'font-size': '2em',
      'text-align': 'center'
    }

  },


  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }


}