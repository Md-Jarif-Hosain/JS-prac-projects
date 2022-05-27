const status = true;
const marks = 80;

function enroll() {
    console.log(`course enrollment is in processing..`)

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (status) {
                res();
            } else {
                rej("payment failed!");
            }
        }, 2000);
    });
    return promise;
};

function progress() {
    console.log(`course is in progress`)

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (marks >= 80) {
                res();
            } else {
                rej(`You wont't get enough marks to get certificate!`);
            }
        }, 2000);;
    });
    return promise;
};
function getCertificate() {
    console.log(`Certificate is in processing`);

    const promise =  Promise.resolve(`Congratulations! you complete the course with 80+ marks!!`);
    return promise
};

async function course() {
    try {
        await enroll();
        await progress();
        const msg = await getCertificate()
        console.log(msg);
    } catch (error) {
        console.log(error)
    }
}
course();