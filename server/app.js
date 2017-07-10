import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';


const port = process.env.PORT || 8081;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/templates`));

app.use(routes);

app.listen(port, () => {
  /* eslint-disable no-console*/
  console.log(`now live on ${port}`);
});

