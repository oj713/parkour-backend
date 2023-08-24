import {ObjectId} from 'mongodb';

// const postsSchema = new mongoose.Schema({
//     userId: {type: {
//         userId: {type: String, enum: ['rangers', 'hikers'], required:true},
//         item: {type: mongoose.Schema.Types.ObjectId, ref: 'userId.type', required:true},
//     }, required: true},
//     parkId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'parks'
//     },
//     text: {type: String, required: true},
//     datePosted: { type: Date, default: Date.now, required: true },
//     location: String,
//     attachment: String,
//     likes: [{
//         type: {
//             type: String, 
//             enum: ['rangers', 'hikers']
//         },
//         item: { 
//             type: mongoose.Schema.Types.ObjectId, 
//             refPath: 'likes.type'
//         }}], // list of ids of users who liked this post
//     numRangerLikes: {type: Number, default: 0}
// }, { collection: "posts" });
// export default postsSchema;

export default [
{   "_id": "60f7b0b9e3b3a0b3a4f9e1c1",
    "userId": {
        role: "rangers",
        item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a3")},
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4"),
    "text": "Sed egestas feugiat massa id pellentesque.",
    "datePosted": "1997-07-12T12:00:00.000Z",
    "likes": [
        {role: 'hikers', item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a9")},
        {role: 'hikers', item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1b0")}
    ],
    "numRangerLikes": 0
},
{   "_id": "60f7b0b9e3b3a0b3a4f9e1c2",
    "userId":{
        role: "hikers",
        item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2")},
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4"),
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas feugiat massa id pellentesque. Nulla semper neque id urna hendrerit, sit amet luctus eros vehicula.",
    "datePosted": "2021-03-01T00:00:00.000Z",
    "location": "Higher Ridge Trail",
    "likes": [],
    "numRangerLikes": 0
},
{   "_id": "60f7b0b9e3b3a0b3a4f9e1c3",
    "userId":{
        role: "hikers",
        item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a8")},
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1"),
    "text": "I saw a bear!",
    "datePosted": "2021-07-21T12:00:00.000Z",
    "location": "Bison Field 2",
    "attachment": "https://www.rmrentals.com/sites/default/files/uploads/summer-sunset-at-snake-river-overlook-web.jpg",
    "likes": [
        {role: 'hikers', item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1b0")},
        {role: 'rangers', item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a3")}
    ],
    "numRangerLikes": 0
}, 
{   "_id": "60f7b0b9e3b3a0b3a4f9e1c4",
    "userId":{
        role: "hikers",
        item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2")},
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a5"),
    "text": "I love this park!",
    "datePosted": "2023-07-12T12:00:00.000Z",
    "location": "Another Trail Name",
    "attachment": "https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/2016-10/Grand%20Teton.jpg?h=97b787f8&itok=L1wws49q",
    "likes": [{role: 'hikers', item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a8")}],
    "numRangerLikes": 0
},
{   "_id": "60f7b0b9e3b3a0b3a4f9e1c5",
    "userId":{
        role: "hikers",
        item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1b0")},
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1b1"),
    "text": "Lorem ipsum dolor sit amet.",
    "datePosted": "2023-07-31T00:00:00.000Z",
    "likes": [
        {role: 'rangers', item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a6")},
        {role: 'rangers', item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a7")},],
    "numRangerLikes": 2
},
{   "_id": "60f7b0b9e3b3a0b3a4f9e1c6",
    "userId":{
        role: "rangers",
        item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a7")},
    "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1b1"),
    "text":  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas feugiat massa id pellentesque. Nulla semper neque id urna hendrerit, sit amet luctus eros vehicula.",
    "datePosted": "2023-08-14T12:00:00.000Z",
    "location": "High Ridge Trail",
    "likes": [
        {role: 'rangers', item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1a6")},
        {role: 'hikers', item: new ObjectId("60f7b0b9e3b3a0b3a4f9e1b0")},
    ], 
    "numRangerLikes": 1
}
]