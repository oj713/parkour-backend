import {ObjectId} from "mongodb";

export default [
    {
        "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a3"),
        "username": "yosemiteRanger",
        "password": "123",
        "displayName": "Yosemite Ranger",
        "profileImage": "https://lp-cms-production.imgix.net/2020-09/Ranger%20Gardner%20Tullahoma%20News%2005.26.2019.jpg",
        "backgroundImage": "https://www.cuddlynest.com/blog/wp-content/uploads/2023/04/guide_to_yosemite_featured_image.jpg",
        "profileBio": "Just a normal Yosemite ranger.",
        "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4"),
        "likedPosts": [],
        "followers": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2")
        ]
    },
    {
        "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a6"),
        "username": "glacierRanger1",
        "password": "123",
        "displayName": "Glacier Ranger 1",
        "profileImage": "https://www.nps.gov/glac/getinvolved/images/jobs1.jpg?maxwidth=1300&maxheight=1300&autorotate=false",
        "backgroundImage": "https://www.nps.gov/glac/planyourvisit/images/smhikeranger.jpg?maxwidth=1300&maxheight=1300&autorotate=false",
        "profileBio": "Ranger at Glacier National Park!",
        "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a5"),
        "likedPosts": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1c5"),
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1c6")
        ],
        "followers": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a9"),
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1b0")
        ]
    },
    {
        "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a7"),
        "username": "glacierRanger2",
        "password": "123",
        "displayName": "Glacier Ranger 2",
        "profileImage": "https://flatheadbeacon.com/wp-content/uploads/2020/12/20201218_GLACIER_POD_002.jpg",
        "backgroundImage": "https://i.natgeofe.com/n/fa698067-053a-4c40-a22e-905bf3ee8998/lake-grinnell-glacier-many-590_3x2.jpg",
        "profileBio": "Another ranger at Glacier National Park.",
        "parkId": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a5"),
        "likedPosts": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1c5")
        ],
        "followers": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a9")
        ]
    }
]