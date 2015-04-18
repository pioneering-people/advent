Login = {
  model: {
    login: function(user, pass) {
      var match = Passwords.find({user: user}).fetch() || {}
      if(match.length)
      if(match[0].pass === pass) {
        console.log('found')
        Session.set({user: user})
        m.route('/')
      }  else {
        return 'user'
      }
      if(!match.length) {
        Session.set({user: user})
        Passwords.insert({user: user, pass: pass})
        Users.insert({
          name: user,
          organization: '',
          experience: 0,
          title: 'scrappy scavenger',
          quests: {

          }
        })
        m.route('/')
      }
      return ''
    }
  }
  , controller: function(options) {
    this.css = Login.stylesheet().classes
    if(Session.get('user'))m.route('/')
    this.passPlaceholder = m.prop('Password')
  }
  , view: function(ctrl) {
    var attr = {
      container: {
        class: ctrl.css.container
      }
      , header: {
        class: ctrl.css.header
      }
      , username: {
        class: ctrl.css.username
      }
      , password: {
        class: ctrl.css.password,
        placeholder: ctrl.passPlaceholder()
      }
      , loginBtn: {
        class: ctrl.css.loginBtn  
        , onmousedown: function(e) {
          e.target.style['background-color'] = '#559E3D'
        }
        , onmouseup: function(e) {
          e.target.style['background-color'] = '#0278AA'
        }
        , onmouseleave: function(e) {
          e.target.style['background-color'] = '#0278AA'
        }
      }
      , loginForm: {
        onsubmit: function(e) {
          e.preventDefault()
          console.log(e)
          var result = Login.model.login(e.currentTarget[0].value, e.target[1].value)
          if(result)
            if(result === 'user')
              ctrl.passPlaceholder('Invalid Password or Username')
          e.target[0].value = ''
          e.target[1].value = ''
        }
      }
    }
    debugger
    return m('div', attr.container, [
      m('h3', attr.header, 'Login'), 
      m('form.loginForm', attr.loginForm, [
        m("input[placeholder='Username'][type='text']", attr.username),
        m("input[placeholder='Password'][type='text']", attr.password),
        m('button.btn btn-primary', attr.loginBtn, 'Submit')
      ])
    ])
  }
  , styles: {
    body: {
      'padding-top': '40px',
    },
    container: {
      'background-color': '#eee',
      'width': '350px',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'position': 'relative',
      'height': '300px',
      'padding': '20px',
      'margin-top': '40px',

      '-webkit-border-radius': '10px 10px 10px 10px',
      ' -moz-border-radius': '10px 10px 10px 10px',
      'border-radius': '10px 10px 10px 10px',
      '-webkit-box-shadow': '0 1px 2px rgba(0,0,0,.15)',
      '-moz-box-shadow': '0 1px 2px rgba(0,0,0,.15)',
      'box-shadow': '0 1px 2px rgba(0,0,0,.15)'
    },
    username: {
      'margin-top': '20px',
      'width': '200px',
      'margin-left': '50px'
    },
    password: {
      'margin-top': '20px',
      'margin-left': '50px',
      'width': '200px'
    },
    loginBtn: {
      'margin-top': '40px',
      'margin-left': '50px'
    },
    header: {
      'margin-left': '50px'
    }
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  } 
}


