import express from 'express';
import { AuthorController } from './controllers/author/author.controller';
import { DatabaseService } from './services/database/database.service';

const database = new DatabaseService();
database.initDatabase();

const app = express();

const port = 3000;
app.get('/', (req, res) => {
    const author = new AuthorController();
    author.createAuthor();
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});