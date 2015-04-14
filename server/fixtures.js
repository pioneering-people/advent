
if(Users.find().count() === 0) {
  Users.insert({
    name: 'Slippin Jimmy',
    organization: '',
    experience: 5,
    title: 'scrappy scavanger',
    quests: {
      'City Cavalcade': {
        tasksCompleted: {
          0: false,
          1: false
        },
        currentTask: 'Sell Oregano to High school kids'
      }
    }
  }),
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
  }),
  Users.insert({
    name: 'Zach',
    //Orginization: '',
    //experience: 10000,
    //title: 'scrappy scavanger'
    quests: {
      'RoundUp': {
        tasksCompleted: {
          0: true,
          1: false
        },
        currentTask: 'buy some beer'

      }
    }
  })
}

if(Quests.find().count() === 0) {
  Quests.insert({
    normalId: 1,
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
    normalId: 2,
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

  }),

  Quests.insert({
    normalId: 3,
    name: 'Round Up',
    active: 'true',
    start: '04/08/15',
    end: '04/10/15',
    prize: '$12',
    minimumStartPrice: 10,
    fundsRaised: 100,
    creator: 'FIJI',
    participants: [
      '501337',
      'OompahLoompah',
      'CookieMonster'
    ],
    settings: {
      singleActivity: false, //one activity at a time
    }

  }),

  Quests.insert({
    normalId: 4,
    name: 'SXSW',
    active: 'true',
    start: '08/08/15',
    end: '08/10/15',
    prize: '$30',
    minimumStartPrice: 5,
    fundsRaised: 1000,
    creator: 'Zach',
    participants: [
      '501337',
      'OompahLoompah',
      'CookieMonster'
    ],
    settings: {
      singleActivity: false, //one activity at a time
    }
  }),

  Quests.insert({
    normalId: 5,
    name: 'Austin City Limits',
    active: 'true',
    start: '10/08/15',
    end: '10/10/15',
    prize: '$50',
    minimumStartPrice: 5,
    fundsRaised: 1000,
    creator: 'Zach',
    participants: [
      '501337',
      'OompahLoompah',
      'CookieMonster'
    ],
    settings: {
      singleActivity: false, //one activity at a time
    }
  }),

  Quests.insert({
    normalId: 6,
    name: 'Euphoria',
    active: 'true',
    start: '04/10/15',
    end: '04/12/15',
    prize: '$66',
    minimumStartPrice: 10,
    fundsRaised: 10000,
    creator: 'CookieMonster',
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
  Tasks.insert({
    quest: 'RoundUp',
    taskNumber: 1,
    name: 'buy some beer',
    location: [35.2742415,-100.7415556],
    //image-feed: ,
  })
}

