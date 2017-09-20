/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Shyam",
            last: "Yadav",
            age: 71,
            description: "Bucky is a React developer and YouTuber",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg",
            hobbies : ['Football','Cricket'],
            show :true
        },
        {
            id: 2,
            first: "Suhas",
            last: "Vishvanath",
            age: 27,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "http://i.imgur.com/52xRlm8.png",
            hobbies : ['Football','Cricket'],
            show :true
        },
        {
            id: 3,
            first: "Chandan",
            last: "BC",
            age: 24,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "http://i.imgur.com/4EMtxHB.png",
            hobbies : ['Football','Cricket'],
            show :true
        }
    ]
}
