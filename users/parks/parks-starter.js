import {ObjectId} from "mongodb";

export default [{
        "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1"),
        "username": "grandteton",
        "password": "123",
        "displayName": "Grand Teton",
        "profileImage": "https://jacksonholewildlifesafaris.com/wp-content/uploads/2021/06/2880x1620-featured-image-grand-tetons-scaled.jpg",
        "profileBio": "Northwestern Wyoming park with peaks, forests, lakes & wildlife, plus a ski resort & lodges.",
        "blockedTerms": ["death"],
        "followers": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a8"),
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a9"),
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1b0")
        ]
    },
    {   "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4"),
        "username": "yosemite",
        "password": "123",
        "displayName": "Yosemite",
        "profileImage": "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/09/1140-yosemite-hero.imgcache.rev.web.1044.600.jpg",
        "profileBio": "California park with valleys, waterfalls, sequoias, hiking trails & more.",
        "blockedTerms": ["dead"],
        "followers": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a8")
        ]
    },
    {   "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a5"),
        "username": "acadia",
        "password": "123",
        "displayName": "Acadia",
        "profileImage": "https://i0.wp.com/www.thefatgirlhiking.com/wp-content/uploads/2022/07/Ocena-Path-Cliffs.jpg?fit=1024%2C1024&ssl=1",
        "profileBio": "Maine park with rocky beaches, granite peaks, forests, lakes & wildlife.",
        "blockedTerms": [],
        "followers": [
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2"),
            new ObjectId("60f7b0b9e3b3a0b3a4f9e1a8")
        ]
    },
    {   "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1b1"),
        "username": "glacier",
        "password": "123",
        "displayName": "Glacier",
        "profileImage": "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2021/03/1140-glacier-national-park-hero.jpg",
        "profileBio": "Montana park with mountains, forests, lakes, hiking trails & wildlife.",
        "blockedTerms": ["death", "dead"],
        "followers": []
    }
]