export class Score {

    constructor(data){
        this.id = data.id
        this.score = data.score
        this.greensInRegulation = data.greensInRegulation
        this.outOfBounds = data.outOfBounds
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }
}



// {
//     "_id": "67073d792ea1b892fa5cca5f",
//     "score": "72",
//     "courseId": "66de3d92320774a464ba7df9",
//     "creatorId": "65383a6f85a44e46777ed7d1",
//     "greensInRegulation": "9",
//     "outOfBounds": "2",
//     "createdAt": "2024-10-10T02:35:37.080Z",
//     "updatedAt": "2024-10-10T02:35:37.080Z",
//     "__v": 0,
//     "creator": {
//         "_id": "65383a6f85a44e46777ed7d1",
//         "subs": [
//             "auth0|65383a6e72a4168055cb1899"
//         ],
//         "email": "heyitsme@its.me",
//         "name": "heyitsme",
//         "picture": "https://s.gravatar.com/avatar/469c061e9ec48a562bcbde38deafd05e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fhe.png",
//         "createdAt": "2023-11-02T15:09:58.816Z",
//         "updatedAt": "2023-11-02T15:09:58.816Z",
//         "__v": 0,
//         "id": "65383a6f85a44e46777ed7d1"
//     },
//     "id": "67073d792ea1b892fa5cca5f"
// }