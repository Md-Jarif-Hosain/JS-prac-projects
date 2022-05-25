// Just for example
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "technical meeting",
            location: "Google meet",
            time: "10.00 PM"
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("meeting already scheduled"));
    }
});


const addToCalender = (meetingDetails) => {
    const calender = `${meetingDetails.name} has been schedule on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calender);
};




meeting
    .then(addToCalender)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.message)
    });


// Another Example
const promise1 = Promise.resolve(`promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`promise 2 resolve`);
    }, 2000);
});
// call all promise together
Promise.all([promise1, promise2])
    .then((res) => {
        console.log(res);
    });


Promise.race([promise1, promise2])//returns which promise resolve first
    .then((res) => {
        console.log(res);
    });