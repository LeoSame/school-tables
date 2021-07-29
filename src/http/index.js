import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://94.131.246.109:5555/v1/2/',
});

export const getSchoolboy = async () => {
  const res = await $host.get('Schoolboy');

  return res;
};

export const getColumnLessons = async () => {
  const res = await $host.get('Column');

  return res;
};

export const getRate = async () => {
  const res = await $host.get('Rate');

  return res;
};

export const getOneRate = async id => {
  const res = await $host.get(`Rate?SchoolboyId=${id}`);

  return res;
};

export const addStudentPass = async values => {
  const res = await $host.post('Rate', { ...values, Title: 'Н' });

  return res;
};

export const removeStudentPass = async values => {
  const res = await $host.post('UnRate', values);

  return res;
};
