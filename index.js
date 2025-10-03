import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import debug from 'debug';
const debugServer = debug('app:Server');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('parlayHelp/dist'));
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`)
})
