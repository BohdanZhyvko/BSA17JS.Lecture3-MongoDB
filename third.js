use students
db.ratings.findAndModify({
  query: {name: "Dusti Lemmond"},
  update: {
     $set: {
	"accepted" : "true"}},
     new: true
})

