import {ObjectId} from "mongodb";

export default [
    {
        "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2"),
        "username": "hikerAlice",
        "password": "123",
        "displayName": "Alice",
        "profileImage": "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3360859.jpg",
        "backgroundImage": null,
        "profileBio": "Hiker that loves parks, mountains, and Acadia!",
        "likedPosts": [],
        "followers": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a8"),
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a9"),
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1b0")
        ],
        "following": [
        {   "role": "parks",
            "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a5")},
        {   "role": "hikers",
            "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1b0")},
        {   "role": "hikers",
            "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a9")},
        {   "role": "rangers",
            "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a3")}]
    },
    {
        "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a8"),
        "username": "hikerBob",
        "password": "123",
        "displayName": "Bob",
        "profileImage": "https://daily.jstor.org/wp-content/uploads/2016/10/Moving_Forest_1050_700.jpg",
        "backgroundImage": "https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg",
        "profileBio": "bit of a hermit",
        "likedPosts": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1c4")
        ],
        "followers": [],
        "following": [
            {   "role": "parks",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a5")},
            {   "role": "parks",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1")},
            {   "role": "parks",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4")},
            {   "role": "hikers",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2")}]
    },
    {
        "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a9"),
        "username": "hikerCharlie",
        "password": "123",
        "displayName": "Charlie",
        "profileImage": "https://www.si.com/.image/t_share/MjAwMTQ1ODI4OTg2MjMzOTY0/adidas-free-hiker-2-low-shoes-review-2023_hero.png",
        "backgroundImage": "https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/essex-bedfordshire-hertfordshire/places/ashridge-estate/library/visitors-exploring-buggies-ashridge-estate-hertfordshire-1267016.jpg",
        "profileBio": "Enthusiast of walking on dirt",
        "likedPosts": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1c1")
        ],
        "followers": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a3")
        ],
        "following": [
            {   "role": "parks",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1")},
            {   "role": "hikers",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2")},
            {   "role": "hikers",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1b0")},
            {   "role": "rangers",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a7")},
            {   "role": "rangers",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a6")}]
            
    },
    {
        "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e110"),
        "username": "hikerDixon",
        "password": "123",
        "displayName": "Dixon",
        "profileImage": null,
        "backgroundImage": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Gentau_Pic_du_Midi_Ossau.jpg",
        "profileBio": "I like to hike",
        "likedPosts": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1c1"),
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1c3"),
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1c6")
        ],
        "followers": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2"), 
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a9")
        ],
        "following": [
            {   "role": "parks",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1")},
            {   "role": "hikers",
                "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2")},
            {   "role": "rangers",
            "item": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a6")}]
    }
]