exports.seed = function(knex, Promise) {
  return knex('users')
    .del() // delete existing posts
    .then(function() {
      return knex('users').insert([
        {
          emailAddress:'adfaris@gmail.com',
          subscriptionExpiration: 'Mon Apr 08 2019 17:30:00',
          paidMembership: 0,
          nickName: 'adfaris'
        },
        {
          emailAddress:'das@gmail.com ',
          subscriptionExpiration: 'Mon Apr 08 2019 17:30:00',
          paidMembership: 0,
          nickName: 'das'
        },
        {
          emailAddress:'francis@gmail.com ',
          subscriptionExpiration: 'Mon Apr 08 2019 17:30:00',
          paidMembership: 0,
          nickName: 'francis'
        },
        {
          emailAddress:'jojo@gmail.com ',
          subscriptionExpiration: 'Mon Apr 08 2019 17:30:00',
          paidMembership: 0,
          nickName: 'Jojo'
        },
        {
          emailAddress:'deelan@gmail.com ',
          subscriptionExpiration: 'Mon Apr 08 2019 17:30:00',
          paidMembership: 0,
          nickName: 'deelan'
        },
        {
          emailAddress:'keith@gmail.com ',
          subscriptionExpiration: 'Mon Apr 08 2019 17:30:00',
          paidMembership: 0,
          nickName: 'keith'
        },
        {
          emailAddress:'jordan@gmail.com ',
          subscriptionExpiration: 'Mon Apr 08 2019 17:30:00',
          paidMembership: 0,
          nickName: 'jordan'
        },
        {
          emailAddress:'hellapanda@gmail.com ',
          subscriptionExpiration: 'Mon Apr 08 2019 17:30:00',
          paidMembership: 0,
          nickName: 'hellapanda'
        }
      ]);
    });
};