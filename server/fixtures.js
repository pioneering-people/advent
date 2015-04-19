// if(Users.find().count() === 0) {
//   Users.insert({
//     name: 'Slippin Jimmy',
//     organization: '',
//     experience: 5,
//     title: 'scrappy scavanger',
//     quests: {
//       'City Cavalcade': {
//         completed: [
//           // completed id
//         ]
//       }
//     }
//   }),
//   Users.insert({
//     name: 'monkey',
//     orginization: '',
//     experience: 10000,
//     title: 'scrappy scavanger',
//     quests: {
//       'Downtown Dabbler': {
//         completed: [
//           // completed id
//         ]
//       }
//     }
//   }),
//   Users.insert({
//     name: 'Zach',
//     orginization: '',
//     experience: 10000,
//     title: 'scrappy scavanger',
//     quests: {
//       'RoundUp': {
//         completed: [
//           // completed id
//         ]
//       }
//     }
//   }),
//   Users.insert({
//     name: 'Rich',
//     orginization: 'yakuza',
//     experience: 9000,
//     title: 'scrappy scavanger',
//     quests: {
//       'RoundUp': {
//         completed: [
//           // completed id
//         ]
//       }
//     }
//   })
// }

// if(Quests.find().count() === 0) {
//   Quests.insert({
//     name: 'Downtown Dabbler',
//     active: 'false',
//     start: '04/04/15',
//     end: '04/08/15',
//     prize: 'AIDS',
//     minimumStartPrice: 90,
//     fundsRaised: 10,
//     creator: 'monkey',
//     participants: [
//       'john',
//       'george',
//       'sexylady777'
//     ],
//     settings: {
//       singleActivity: true //one activity at a time
//     }
//   }),

//   Quests.insert({
//     name: 'City Cavalcade',
//     active: 'true',
//     start: '04/08/15',
//     end: '04/10/15',
//     prize: 'two million dollhairs',
//     minimumStartPrice: 10000,
//     fundsRaised: 10,
//     creator: 'Slippin Jimmy',
//     participants: [
//       '501337',
//       'OompahLoompah',
//       'CookieMonster'
//     ],
//     settings: {
//       singleActivity: false, //one activity at a time
//     }

//   }),

//   Quests.insert({
//     name: 'Round Up',
//     active: 'true',
//     start: '04/08/15',
//     end: '04/10/15',
//     prize: '$12',
//     minimumStartPrice: 10,
//     fundsRaised: 100,
//     creator: 'FIJI',
//     participants: [
//       '501337',
//       'OompahLoompah',
//       'CookieMonster'
//     ],
//     settings: {
//       singleActivity: false, //one activity at a time
//     }

//   }),

//   Quests.insert({
//     name: 'SXSW',
//     active: 'true',
//     start: '08/08/15',
//     end: '08/10/15',
//     prize: '$30',
//     minimumStartPrice: 5,
//     fundsRaised: 1000,
//     creator: 'Zach',
//     participants: [
//       '501337',
//       'OompahLoompah',
//       'CookieMonster',
//       'Zach'
//     ],
//     settings: {
//       singleActivity: false, //one activity at a time
//     }
//   }),

//   Quests.insert({
//     name: 'Austin City Limits',
//     active: 'true',
//     start: '10/08/15',
//     end: '10/10/15',
//     prize: '$50',
//     minimumStartPrice: 5,
//     fundsRaised: 1000,
//     creator: 'Zach',
//     participants: [
//       '501337',
//       'OompahLoompah',
//       'CookieMonster',
//       'Zach'
//     ],
//     settings: {
//       singleActivity: false, //one activity at a time
//     }
//   }),

//   Quests.insert({
//     name: 'Euphoria',
//     active: 'true',
//     start: '04/10/15',
//     end: '04/12/15',
//     prize: '$66',
//     minimumStartPrice: 10,
//     fundsRaised: 10000,
//     creator: 'CookieMonster',
//     participants: [
//       '501337',
//       'OompahLoompah',
//       'CookieMonster',
//       'Zach'
//     ],
//     settings: {
//       singleActivity: false, //one activity at a time
//     }
//   })
// }


// if(Tasks.find().count() === 0) {
//  Tasks.insert({
//     quest: 'Downtown Dabbler',
//     name: 'Spray Paint the Capitol',
//     location: [30.2742415,-97.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'City Cavalcade',
//     name: 'Sell Oregano to High school kids',
//     location: [28.2742415,-80.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'Downtown Dabbler',
//     name: 'get someone to twerk on a street lamp',
//     location: [55.2742415,-80.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'City Cavalcade',
//     name: 'Take a picture of a Wal-Mart model',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'RoundUp',
//     name: 'buy some beer',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'Downtown Dabbler',
//     name: 'Streak down congress',
//     location: [30.2742415,-97.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'Downtown Dabbler',
//     name: 'have sex with a robot',
//     location: [30.2742415,-97.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'Downtown Dabbler',
//     name: 'jump off a bride',
//     location: [30.2742415,-97.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'Downtown Dabbler',
//     name: 'steal a car',
//     location: [30.2742415,-97.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'City Cavalcade',
//     name: 'kiss a stranger',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'City Cavalcade',
//     name: 'feed a homeless man',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'City Cavalcade',
//     name: 'drink 5 shots in 5 minutes',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'City Cavalcade',
//     name: 'dance on a street corner for money',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'City Cavalcade',
//     name: 'get in a fight',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'RoundUp',
//     name: 'buy some beer',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'RoundUp',
//     name: 'bury $20',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'RoundUp',
//     name: 'kiss a stranger',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'RoundUp',
//     name: 'let the air of a police cars tires',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'Austin City Limits',
//     name: 'buy ACL tickets',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'SXSW',
//     name: 'get tacos at Hype Hotel',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'SXSW',
//     name: 'grab a beer at Fader Fort',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
//   Tasks.insert({
//     quest: 'SXSW',
//     name: 'get wasted at Spotify House',
//     location: [35.2742415,-100.7415556]
//     //image-feed:
//   })
// }