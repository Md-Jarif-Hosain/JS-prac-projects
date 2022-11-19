function something() {
    fetch('https://www.boredapi.com/api/activity/')
        .then(res => res.json())
        .then(data => {
            document.getElementById('activity').innerText = data.activity;
        });
};
something();

setInterval(() => {
    something();
}, 5000);