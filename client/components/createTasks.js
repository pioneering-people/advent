CreateTasks = {

  model: {

    currentTasks: [],
    createTask: function(params) {
      Tasks.insert({
        quest: ctrl.questName,
        start: params.start,
        name: params.name,
        location: params.location
      })

    }
  },

  controller: reactive(function() {
    ctrl = this
    if(!Session.get('user'))m.route('/auth')
    ctrl.questName = m.route.param('questName')
    ctrl.css = CreateTasks.stylesheet().classes
  }),


  view: function(ctrl) {
    var attr = {
      container: {
        class: ctrl.css.container
      },
      header: {
        class: ctrl.css.header
      },
      CreateTasks: {
        class: ctrl.css.CreateTasks
      },
      taskdeets: {
        class: ctrl.css.taskdeets
      },
      submitBtn: {
        class: ctrl.css.submitBtn,


      },
      createForm: {
        onsubmit: function(e) {
          e.preventDefault()
          parseInput()
        }
      },
      submitForm: {
        class: ctrl.css.submitForm,
        onsubmit: function(e) {
          e.preventDefault()
          var tasks = CreateTasks.model.currentTasks

          if(document.getElementById('description').value &&
             document.getElementById('location').value) {
            parseInput()
          }

          tasks.forEach(function(task){
            CreateTasks.model.createTask(task)
            CreateTasks.model.currentTasks = []
          })

          m.route('/')
        }
      }
    }
     return m('div.CreateTasks', attr.CreateTasks, [
      NavBar,
      m('div', attr.container, [
      m('form#createForm', attr.createForm, [
        m('div.form-group', attr.taskdeets, [
          m('label.control-label', 'Task Description'),
          m('input#description.form-control')
        ]),
        m('div.form-group', attr.taskdeets, [
          m('label.control-label', 'Location'),
          m('input#location.form-control')
        ]),
        m('button.btn btn-default btn-lg', attr.submitBtn, 'Add Task'),
      ]),
      m('form.submitForm', attr.submitForm, [
        m('button.btn btn-default btn-lg', attr.submitBtn, 'Submit')
      ])
    ])

    ])
  },

  styles: {
    CreateTasks: {
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
    },
     container: {
      'color': '#333',
      'width': '100%',
      'text-align': 'center',
      'height': '85%',
      'text-align': 'center',
      'font': '20px Helvetica, Arial, sans-serif',
      'margin-top': '3%'
    },
    taskdeets: {
      'width': '50%',
      'text-align': 'center',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'padding-top': '15px'
    },
    submitBtn: {
      'margin-top': '20px'
    },
    submitForm: {
      'margin-top': '15px'
    }

  },

  stylesheet: function () {
    this._stylesheet || (this._stylesheet = jss.createStyleSheet(this.styles).attach())
    return this._stylesheet
  }

}


function parseInput() {
  var params = {}
  params.name = document.getElementById('description').value
  params.location = document.getElementById('location').value


  m.request({
    method: "GET",
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + params.location.split(' ').join('+') + "&key=AIzaSyDyEkFw22hmfw4A4DSHQMXYCI-jH6wV_zI"
  }).then(function(data) {

    if(data && data.results && data.results.length) {
      params.location = data.results[0].formatted_address

      CreateTasks.model.currentTasks.push(params)
      document.getElementById('description').value = ''
      document.getElementById('location').value = ''
      document.getElementById('location').placeholder = ''
    } else {
      document.getElementById('description').value = ''
      document.getElementById('location').value = ''
      document.getElementById('location').placeholder = 'Error: not a valid address'
    }

  })

}
