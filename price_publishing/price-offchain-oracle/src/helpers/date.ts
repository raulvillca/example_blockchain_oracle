import moment from 'moment'

const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';

export const parseDateToAppFormat = date => date && moment(date, 'DD/MM/YYYY HH:mm:ss');

export const currentDateTime = () =>  moment().format(dateTimeFormat);

export default {
  currentDateTime
}
