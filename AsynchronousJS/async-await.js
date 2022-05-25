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

// meeting
//     .then(addToCalender)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message)
//     });


async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calender = await addToCalender(meetingDetails);
        console.log(calender);

    } catch {
        console.log(`something wrong happened`)
    }

};
myMeeting(); 