use students
 db.ratings.update({
      name : "Dusti Lemmond"
  },{
      $set: {
             "accepted" : "true"
         }
  },{
      multi : true
})

db.ratings.find({
    name : "Dusti Lemmond"
}).pretty()
