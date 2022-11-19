
function data() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data =>  {
            const user = data.results[0];
            const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            document.getElementById("name").innerHTML = userName;
        });
}; 
data();