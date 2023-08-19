import { ObjectId } from 'mongodb';

export default [{  
    "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a1"),
    "username": "grandteton",
    "password": "123",
    "displayName": "Grand Teton",
    "profileImage": "https://jacksonholewildlifesafaris.com/wp-content/uploads/2021/06/2880x1620-featured-image-grand-tetons-scaled.jpg",
    "profileBio": "Northwestern Wyoming park with peaks, forests, lakes & wildlife, plus a ski resort & lodges.",
    "role": "park",
    "followers": [],
    "following": []
},
{   "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a2"),
    "username": "hiker",
    "password": "123",
    "displayName": "Hiker Name",
    "profileImage": "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3360859.jpg",
    "profileBio": "Just a normal hiker.",
    "role": "hiker",
    "followers": [],
    "following": []
},
{   "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a3"),
    "username": "yosemiteRanger",
    "password": "123",
    "displayName": "Ranger Name",
    "profileImage": "https://lp-cms-production.imgix.net/2020-09/Ranger%20Gardner%20Tullahoma%20News%2005.26.2019.jpg",
    "profileBio": "Just a normal ranger.",
    "role": "ranger",
    "rangerStation": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4"),
    "followers": [],
    "following": []
},
{   "_id": new ObjectId("60f7b0b9e3b3a0b3a4f9e1a4"),
    "username": "yosemite",
    "password": "123",
    "displayName": "Yosemite",
    "profileImage": "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/09/1140-yosemite-hero.imgcache.rev.web.1044.600.jpg",
    "profileBio": "California park with valleys, waterfalls, sequoias, hiking trails & more.",
    "role": "park",
    "followers": [],
    "following": []
}]