/* eslint-disable no-plusplus */
import cron from 'node-cron';
import run from '../scrapper/index';
import 'dotenv/config';

const hour = process.env.HOUR || '00';
const minutes = process.env.MINUTES || '00';

cron.schedule(`${minutes} ${hour} * * *`, () => {
  console.log(`Running a Cron every ${hour.padStart(2, '0')}:${minutes.padStart(2, '0')}`);
  run(5);
}, {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});
