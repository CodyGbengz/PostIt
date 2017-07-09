import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes/routes';


const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'templates')));

app.use(routes);

app.listen(port, () => {
  /* eslint-disable no-console*/
  console.log(`now live on ${port}`);
});

