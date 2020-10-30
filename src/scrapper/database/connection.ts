import { connect, Connection, connection } from 'mongoose';

let database: Connection;

const createConnection = () => {
  const urlConnection = 'mongodb+srv://vbeloti:vbeloti@cluster0.lteyz.mongodb.net/openfoodfacts?retryWrites=true&w=majority';

  if (database) {
    return;
  }

  connect(urlConnection, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });

  database.on('error', () => {
    console.log('Error connecting to database');
  });
};

export default createConnection;
