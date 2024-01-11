import moment from 'moment';
export function generateRandomString() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}


export const getCurrentDateTime = (type: any) => {
    const currentMoment = moment();
    if (type === "day") {
        const formattedDateTime = currentMoment.format('MM/DD/YYYY');
        return formattedDateTime
    }
    const formattedDateTime = currentMoment.format('HH:mm:ss');
    return formattedDateTime;
};
