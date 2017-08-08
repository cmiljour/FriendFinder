var answerArray = [
{
"name": "John Rambo",
"photo": "http://www.photo.com",
"scores": [
"1",
"1",
"2",
"1",
"1",
"1",
"1",
"1",
"2",
"4"
]
},

{
"name": "George Lewis",
"photo": "http://www.photo.com",
"scores": [
"4",
"3",
"2",
"1",
"2",
"1",
"3",
"1",
"2",
"5"
]
},

{
"name": "Fred Savage",
"photo": "http://www.photo.com",
"scores": [
"5",
"3",
"2",
"4",
"1",
"4",
"1",
"2",
"2",
"1"
]
},
]

var newArray = [];

answerArray.forEach(function(element){
    newArray.push(element.scores);
})



console.log(newArray);