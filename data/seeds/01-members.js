
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('members').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {name: 'jayne'},
        {name: 'ruairidh'},
        {name: 'shaun'},
        {name: 'oladimeji'},
        {name: 'oluwajoba'},
        {name: 'chioma'},
        {name: 'carnun'},
      ]);
    });
};
