use students
db.ratings.aggregate([ {
	    $unwind: "$scores"},{
	    $match: {"scores.type" : "exam",
		            "scores.score" : {$gt : 90}
		        }}]).pretty()
