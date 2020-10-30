/* eslint-disable no-plusplus */
import cron from 'node-cron';
import run from '../scrapper/index';
import 'dotenv/config';

const hour = process.env.HOUR || '00';
const minutes = process.env.MINUTES || '00';

// cron.schedule(`${minutes} ${hour} * * *`, () => {

cron.schedule('*/1 * * * *', () => {
  console.log(new Date());
  // console.log(`Running a Cron every ${hour}:${minutes.padStart(2, '0')}`);
  run();
}, {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});
