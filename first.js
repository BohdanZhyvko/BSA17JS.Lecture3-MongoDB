use students
db.ratings.find({"scores.0.score": {$gt: 87, $lt: 93 } }).pretty()
