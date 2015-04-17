CreateTasks = {

  model: {
    
    currentTasks: [],
    createTask: function(params) {
      Tasks.insert({  
        quest: ctrl.questName,
        start: params.start,
        name: params.name,
        location: [28.2742415,-80.7415556],
      })
     
    }
  },

  controller: reactive(function() {
    ctrl = this
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
        class: ctrl.css.submit,
         onmousedown: function(e) {
          e.target.style['background-color'] = '#559E3D'
        },
         onmouseup: function(e) {
          e.target.style['background-color'] = '#0278AA'
        },
         onmouseleave: function(e) {
          e.target.style['background-color'] = '#0278AA'
        }
      },
      createForm: {
        onsubmit: function(e) {
          e.preventDefault()
          parseInput()
        }
      },
      submitForm: {
        onsubmit: function(e) {
          e.preventDefault()
          var tasks = CreateTasks.model.currentTasks
          
          if(document.getElementById('description').value){ //need to make sure all fields are filled out
            parseInput()
          }
          tasks.forEach(function(task){
            return CreateTasks.model.createTask(task)
          })
        }
      }

    }
     return m('div.CreateTasks', attr.CreateTasks, [
      NavBar,
      m('div', attr.container, [
      m('form#createForm', attr.createForm, [
        m('h3', attr.header, 'Task Description'),
        m('input#description', attr.taskdeets),
        m('br'),
        m('h3', attr.header, 'Location'),
        m('input#location', attr.taskdeets),
        m('br'),
        m('br'),
        m('button', attr.submitBtn, 'Add Task'),
      ]),
      m('form.submitForm', attr.submitForm, [ 
        m('button', attr.submitBtn, 'Submit')
      ])
    ])
      
    ])
  },

//
  styles: {
    CreateTasks: {
      'width': '100%',
      'height': '100%',
      'padding': '0',
      'margin': '0',
      'outline': '1px solid gray'
    },
     container: {
      'width': '25%'
      , 'position': 'relative'
      , 'height': '100%'
      , 'padding': '20px'
      , 'margin': '0px auto 0px auto'
      , 'background-color': '#3790A4'
      , 'text-align': 'center'
      , 'font': '16px Helvetica, Arial, sans-serif'
    },
    header: {
      'color': '#FFFFFF'
    },
    taskDescription: {
      'width': '50%',
      'height': '60px',
      'padding': '0px 0px 0px 5px',
      'margin': '0px 0px 10px 0px',
      'background-color': '#FFFFFF',
      'color': 'black'
    },
    taskdeets: {
      'width': '50%',
      'height': '20px',
      'padding': '0px 0px 0px 5px',
      'margin': '0px 0px 10px 0px',
      'background-color': '#FFFFFF',
      'color': 'black'
    },
    submitBtn: {
      'background-color': '#0278AA',
      'margin': '30px 0px 30px 0px',
      'padding': '20px 0px 0px 0px',
      'color': '#FFFFFF'
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
  CreateTasks.model.currentTasks.push(params)
  document.getElementById('description').value = ''
  document.getElementById('location').value = ''
}