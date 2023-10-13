import express from "express";
import { AuthorController } from "./controllers/author/author.controller";
import { DatabaseService } from "./services/database/database.service";

const database = new DatabaseService();
database.initDatabase();

const app = express();
const port = 3000;

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

const author = new AuthorController();

app.get("/", (req, res) => {
  author.createAuthor();
  res.send("The sedulous hyena ate the antelope!");
});

// poste d'un autheur

app.post('/author', async (req, res) => {
  try {
    const savedAuthor = await author.postAuthor(req, res);
    res.json(savedAuthor);
  } catch (error) {
    console.error('Erreur lors de la création de l\'auteur :', error);
  }
});




// on recup tous les autheurs
app.get('/author', async (req, res) => {
  try {
    const authors = await author.getAuthors(req, res);
    res.json(authors);
  } catch (error) {
    console.error('Erreur lors de la récupération des auteurs :', error);
  }
});


// on recup un auteur par Id
// app.get('/author/:id', async (req, res) => {
//   const author = new AuthorController();
//   const authorId = Number(req.params.id);
//   try {
//     const authorById = await author.getAuthorById(authorId, res);
//     if (!author) {
//       return res.json({ error: 'Auteur introuvable' });
//     }
//     res.json(authorById);
//   } catch (error) {
//     console.error('Erreur lors de la récupération de l\'auteur :', error);
//   }
// });


