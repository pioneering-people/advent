Options = {
  model: {
    routes: [
      {route: '/', name: 'Home'},
      {route: '/questLog', name: 'Quest Log'},
      {route: '/createQuest', name: 'Create Quest'},
      {route: '/auth', name:'Logout'}
    ]

  },
  controller: reactive(function() {
    ctrl = this
    ctrl.css = Options.stylesheet().classes
    ctrl.routes = Options.model.routes
    return ctrl
  }),
  view: function(){

    attr = {
      options: {
        class: ctrl.css.options
      },
      optionLink: function(link){
        return {
          class: ctrl.css.optionLink,
          onclick: m.route.bind(null, link)
        }
      },
      centerOptions: {
        class: ctrl.css.centerOptions
      }
    }

    return m('div.options', attr.options, [
      NavBar,
      ctrl.routes.map(function(route) {
        return m('div.route', attr.optionLink(route.route), [
          m('div', attr.centerOptions, [ 
            m('span',route.name)
          ])
        ])
      })
    ])

  },
  styles: {
    options: {
      'width': '100%',
      'height': '100%',
      'font': 'bold 28px Helvetica, Arial, sans-serif'
    },
    optionLink: {
      'width': '100%',
      'height': '20%',
      'padding': '0',
      'margin': '0',
      'border-bottom': '1px solid #F7F7F9',
      'text-align': 'center',
      'font-size': '1em'
    },
    centerOptions: {
      'margin': 'auto',
      'position': 'relative',
      'top': '35%'
    }
  },
  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }


}



function createLink (link) {
  return function() {
    debugger
    m.route(link)
  }
}