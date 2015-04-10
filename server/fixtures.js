/* TEST DATA


  if(Users.find().count() === 0) {
    Users.insert({
      name: 'Slippin Jimmy',
      //Orginization: '',
      //experience: 5,
      //title: 'scrappy scavanger'
      quests: {
        'City Cavalcade': {
          tasksCompleted: {
            0: false,
            1: false
          },
          currentTask: 'Sell Oregano to High school kids'

        }
      }
    })
    Users.insert({
      name: 'monkey',
      //Orginization: '',
      //experience: 10000,
      //title: 'scrappy scavanger'
      quests: {
        'Downtown Dabbler': {
          tasksCompleted: {
            0: true,
            1: false
          },
          currentTask: 'Sell Oregano to High school kids'

        }
      }
    })
  }

  if(Quests.find().count() === 0) {
    Quests.insert({
      name: 'Downtown Dabbler',
      active: 'false',
      start: '04/04/15',
      end: '04/08/15',
      prize: 'AIDS',
      minimumStartPrice: 90,
      fundsRaised: 10,
      creator: 'monkey',
      participants: [
        'john',
        'george',
        'sexylady777'
      ],
      settings: {
        singleActivity: true //one activity at a time
      }

    }),

    Quests.insert({
      name: 'City Cavalcade',
      active: 'true',
      start: '04/08/15',
      end: '04/10/15',
      prize: 'two million dollhairs',
      minimumStartPrice: 10000,
      fundsRaised: 10,
      creator: 'Slippin Jimmy',
      participants: [
        '501337',
        'OompahLoompah',
        'CookieMonster'
      ],
      settings: {
        singleActivity: false, //one activity at a time
      }

    })
  }


  if(Tasks.find().count() === 0) {
    Tasks.insert({
      quest: 'Downtown Dabbler',
      taskNumber: 0,
      name: 'Spray Paint the Capitol',
      location: [30.2742415,-97.7415556],
      //image-feed: ,
    })
    Tasks.insert({
      quest: 'City Cavalcade',
      taskNumber: 0,
      name: 'Sell Oregano to High school kids',
      location: [28.2742415,-80.7415556],
      //image-feed: ,
    })
    Tasks.insert({
      quest: 'Downtown Dabbler',
      taskNumber: 1,
      name: 'get someone to twerk on a street lamp',
      location: [55.2742415,-80.7415556],
      //image-feed: ,
    })
    Tasks.insert({
      quest: 'City Cavalcade',
      taskNumber: 1,
      name: 'Take a picture of a Wal-Mart model',
      location: [35.2742415,-100.7415556],
      //image-feed: ,
    })
  }







*/