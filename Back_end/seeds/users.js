exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del().then(function() {
    // Inserts seed entries
    return knex('users').insert([
      {
        emailAddress: 'adam@gmail.com',
        paidMembership: 'true',
        reviewCount: '2',
        subscriptionExpiration: '2/14/2019',
        nickName: 'Dylan',
      },
      {
        emailAddress: 'Das@gmail.com',
        paidMembership: 'false',
        reviewCount: '2',
        subscriptionExpiration: '1/14/2019',
        nickName: 'Sam I am',
      },
      {
        emailAddress: 'francis@gmail.com',
        paidMembership: 'true',
        reviewCount: '3',
        subscriptionExpiration: '3/14/2019',
        nickName: 'DylanJoJo',
      },
      {
        emailAddress: 'adfaris@gmail.com',
        paidMembership: 'false',
        reviewCount: '4',
        subscriptionExpiration: '4/14/2019',
        nickName: 'JoJo',
      },
    ])
  })
}
