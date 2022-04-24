// const user = {

//     id: 245,
//     name: "Jarif",
//     friendsAge: [12, 13, 15],
//     friends: ['kamal', 'Jamal', 'dhamal']

// };
// //           {"id":245,"name":"Jarif"}


// const userJSON = JSON.stringify(user);
// console.log(userJSON);{
title: //'foo',
// body: 'bar',
//     userId: 1,
//  }
// const userFromJSON = JSON.parse(userJSON);
// console.log(userFromJSON);


// ************JSON,API Discussions
document.getElementById('sub').addEventListener('click', function () {
    const title = document.getElementById('title').value;
    const bodyContent = document.getElementById('bodyContent').value;
    const post = { title: title, body: bodyContent };
    postToServer(post);
});
function postToServer(post) {
    //requesting server for data
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => alert("Please try again later"));
};