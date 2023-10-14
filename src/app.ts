import express from "express";
import { AuthorController } from "./controllers/author/author.controller";
import { DatabaseService } from "./services/database/database.service";
import { CommentController } from "./controllers/comment/comment.controller";

const database = new DatabaseService();
database.initDatabase();

const app = express();
const port = 3000;

// ajout du middleware pour parser les donnees en json
app.use(express.json());

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

const author = new AuthorController();

app.get("/", (req, res) => {
  author.createAuthor();
  res.send("The sedulous hyena ate the antelope!");
});

// route pour poste d'un autheur
app.post("/author", async (req, res) => {
  try {
    const savedAuthor = await author.postAuthor(req, res);
    res.json(savedAuthor);
  } catch (error) {
    console.error("Erreur lors de la création de l'auteur :", error);
  }
});

// route pour recup tous les autheurs
app.get("/author", async (req, res) => {
  try {
    const authors = await author.getAuthors(req, res);
  } catch (error) {
    console.error("Erreur lors de la récupération des auteurs :", error);
  }
});

// route pour recup un auteur par id
app.get("/author/:id", async (authorId, res) => {
  try {
    const authorById = await author.getAuthorById(authorId, res);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'auteur :", error);
  }
});

// route pour modifier un auteur par id
app.put("/author/:id", async (req, res) => {
  try {
    const updatedAuthor = await author.updateAuthorById(req, res);
  } catch (error) {
    console.error("erreur lors de la modif de l'autheur:", error);
  }
});

// route pour supprimer un auteur par id
app.delete("/author/:id", async (req, res) => {
  try {
    const deleteAuthor = await author.deleteAuthorById(req, res);
  } catch (error) {
    console.error("erreur lors de la suppression de l'autheur:", error);
  }
});

const comment = new CommentController();

app.post("/comment", async (req, res) => {
  try {
    const savedComment = await comment.postComment(req, res);
  } catch (error) {
    console.error("Erreur lors de la création du commentaire :", error);
  }
});

app.get("/comment", async (req, res) => {
  try {
    const getComment = await comment.getComment(req, res);
  } catch (error) {
    console.error("Erreur lors de la récupération des commentaires :", error);
  }
});
