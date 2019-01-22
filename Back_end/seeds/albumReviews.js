exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("albumReview")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("albumReview").insert([
        {
          dateCreated: "1/18/2019",
          dateModified: "",
          rating: 3,
          review:
            "updated this review on my iPhone. Yay! Submit confirmation too!",
          spotifyAlbumID: "382ObEPsp2rxGrnsizN5TX",
          userID: 1
        },
        {
          dateCreated: "1/18/2019",
          dateModified: "1/18/2019",
          rating: 3,
          review: "class MaxStack{constructor(){this.stack = new Stack()",
          spotifyAlbumID: "0vE6mttRTBXRe9rKghyr1l",
          userID: 2
        },
        {
          dateCreated: "1/18/2019",
          dateModified: "1/18/2019",
          rating: 3,
          review: "class MaxStack{constructor(){this.stack = new Stack()",
          spotifyAlbumID: "2hrxJFlQwvPj9dCatdtt8g",
          userID: 3
        },
        {
          dateCreated: "",
          dateModified: "",
          rating: 3,
          review: "Created this review on my iPhone. ",
          spotifyAlbumID: "4m2880jivSbbyEGAKfITCa",
          userID: 1
        },
        {
          dateCreated: "",
          dateModified: "",
          rating: 4,
          review: "New review",
          spotifyAlbumID: "5ceB3rxgXqIRpsOvVzTG28",
          userID: 1
        },
        {
          dateCreated: "",
          dateModified: "",
          rating: 3,
          review: "Dope! This is amazing!",
          spotifyAlbumID: "33CmI2lR8PnQwz6133Mc7l",
          userID: 1
        }
      ]);
    });
};
