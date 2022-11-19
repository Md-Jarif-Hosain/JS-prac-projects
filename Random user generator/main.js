const loaderBtn = document.getElementById('load-user');

loaderBtn.addEventListener('click', () => {
    const countText = document.getElementById('user-count').value;
    const count = parseInt(countText);
    dataLOader(count);
});

function dataLOader(number) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            data = data.slice(0, number);
            const userContainer = document.getElementById('users');
            userContainer.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                const user = data[i];
                const p = document.createElement('p');
                p.innerHTML = `<p> <b>
                ${user.id}: Name: ${user.name} <br>
                      Email: (${user.email})<br>
                      Phone: ${user.phone} <br>
                </b></p>`;
                userContainer.appendChild(p);
            }
        })
        .catch(err => {
            document.write(err);
        });
};