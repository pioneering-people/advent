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
          quests: {}
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
    this.usernamePlaceholder = m.prop('Username')
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
      }
      , loginForm: {
        onsubmit: function(e) {
          e.preventDefault()
          console.log(e)
          var result = Login.model.login(e.currentTarget[0].value, e.target[1].value)
          if(result)
            if(result === 'user')
              ctrl.passPlaceholder('Invalid Username or Password')
          e.target[0].value = ''
          e.target[1].value = ''
        }
      }
      , logo: {
        class: ctrl.css.logo,
        src: function() {
          var result = 'img/advent-logo.png'
          return result
        }()
      },
    }

    return m('div', attr.container, [
      m('img', attr.logo),
      m('h3', attr.header, 'Login:'),
      m('form.loginForm', attr.loginForm, [
        m("input.form-control[placeholder='Username'][type='text']", attr.username),
        m("input.form-control[placeholder='Password'][type='password']", attr.password),
        m('button.btn btn-default btn-lg', attr.loginBtn, 'Submit')
      ])
    ])
  }
  , styles: {
    container: {
      'background-color': '#f0f0f0',
      'width': '330px',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'position': 'relative',
      'height': '570px',
      'padding': '20px',
      'margin-top': '8%',

      '-webkit-border-radius': '10px 10px 10px 10px',
      ' -moz-border-radius': '10px 10px 10px 10px',
      'border-radius': '10px 10px 10px 10px',
      '-webkit-box-shadow': '0 1px 2px rgba(0,0,0,.15)',
      '-moz-box-shadow': '0 1px 2px rgba(0,0,0,.15)',
      'box-shadow': '0 1px 2px rgba(0,0,0,.15)'
    },
    username: {
      'margin-top': '15px',
      'width': '220px',
      'margin-left': '35px'
    },
    password: {
      'margin-top': '20px',
      'margin-left': '35px',
      'width': '220px'
    },
    loginBtn: {
      'margin-top': '20px',
      'margin-left': '100px'
    },
    header: {
      'margin-top': '25px',
      'margin-left': '35px'
    },
    logo: {
      'width': '100%',
      'height': '50%'
    },
  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }
}


