const moment = require('moment');
moment.locale('ru');
export const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export const getTime = () => {
    const now = new Date();
    const ISOString = now.toISOString();
    const newISOString = new Date(ISOString.replaceAt(11, "08:15:00"));
    console.log(moment(new Date()).format('lll'), newISOString, moment(new Date(newISOString)).format('lll'));
    return new Date() > newISOString ? 'Agile митинг завтра в 10:15' : `Agile митинг ${moment(newISOString).startOf('hour').fromNow()}`;
}