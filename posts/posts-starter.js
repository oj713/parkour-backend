import {ObjectId} from 'mongodb';

// last digit of ObjectId determines user: 
// grand teton: 1
// hiker: 2
// ranger: 3
// yosemite: 4

export default [{
    "userId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1"),
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1"),
    "text": "I saw a bear!",
    "datePosted": "2021-07-21T12:00:00.000Z",
    "location": "Bison Field 2",
    "attachment": "https://www.rmrentals.com/sites/default/files/uploads/summer-sunset-at-snake-river-overlook-web.jpg",
    "likes": [new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2"), new ObjectId("60f7b0b9e3b3a0b3a4f9e1a3")],
    "likedByPark": false
}, 
{
    "userId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2"),
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4"),
    "text":  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas feugiat massa id pellentesque. Nulla semper neque id urna hendrerit, sit amet luctus eros vehicula.",
    "datePosted": "2023-08-14T12:00:00.000Z",
    "location": "High Ridge Trail",
    "likes": [new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4")], 
    "likedByPark": true
},
{
    "userId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a3"),
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4"),
    "text": "Lorem ipsum dolor sit amet.",
    "datePosted": "2023-07-31T00:00:00.000Z",
    "likes": [new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2")],
    "likedByPark": false
},
{
    "userId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2"),
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1"),
    "text": "Sed egestas feugiat massa id pellentesque. Nulla semper neque id urna hendrerit, sit amet luctus eros vehicula.",
    "datePosted": "2023-07-12T12:00:00.000Z",
    "location": "Another Trail Name",
    "attachment": "https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/2016-10/Grand%20Teton.jpg?h=97b787f8&itok=L1wws49q",
    "likes": [],
    "likedByPark": false
},
{
    "userId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4"),
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4"),
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas feugiat massa id pellentesque. Nulla semper neque id urna hendrerit, sit amet luctus eros vehicula.",
    "datePosted": "2021-03-01T00:00:00.000Z",
    "location": "Higher Ridge Trail",
    "likes": [new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2")],
    "likedByPark": false
},
{
    "userId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a3"),
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1"),
    "text": "Sed egestas feugiat massa id pellentesque.",
    "datePosted": "1997-07-12T12:00:00.000Z",
    "likes": [new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2"), new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1"), new ObjectId("60f7b0b9e3b3a0b3a4f9e1a3"), new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4")],
    "likedByPark": true
}]