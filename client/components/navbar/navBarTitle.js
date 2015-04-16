NavBarTitle = {

  model: {


  },

  controller: reactive(function() {
    ctrl = this
    ctrl.css = NavBarTitle.stylesheet().classes
    return ctrl
  }),


  view: function(ctrl) {
    var attr = {
      title: {
        class: ctrl.css.title
      },
      center: {
        class: ctrl.css.center
      }
    }
    return m('div.titleBtn', attr.title, [
      m('div.center', attr.center, getTitle())
    ])
  },

  styles: {
    title: {
      //'outline': '1px solid gray',
      'background-color': '#e43114',
      'width': '75%',
      'display':'inline-block',
      'float': 'left',
      'height': '100%',
      'text-align': 'center',
      'font': 'bold 22px Helvetica, Arial, sans-serif',
      'color': '#fcfefe'
    },
    center: {
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
function getTitle() {
 // return m.route()
  if(m.route() === '/'){
    return 'Home'





  } else if(m.route() === '/questLog'){
    return 'Available Quests'
  } else if(m.route() === '/questLogActive'){
    return 'Active Quests'
  } else if(m.route().split('').splice(0,9).join('') === '/taskLog/'){
    return m.route().split('').splice(9).join('') 
  } else if(m.route().split('').splice(0,10).join('') === '/taskItem/'){
    return m.route().split('').splice(10).join('')
  } else if(m.route().split('').splice(0,8).join('') === '/options'){
    return 'Menu'
  }
  
  
}