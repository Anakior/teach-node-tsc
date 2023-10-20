import express from "express";
import { AuthorController } from "./controllers/author/author.controller";
import { DatabaseService } from "./services/database/database.service";
import { CommentController } from "./controllers/comment/comment.controller";
import { CategoryController } from "./controllers/category/category.controller";
import { RoutingService } from "./services/routing/routing.service";
import { App } from "./services/app/app.service";
import { appendFile } from "fs";

const database = new DatabaseService();
database.initDatabase();

App.initApp(express());

const routingService = new RoutingService();
routingService.initializeRoutes();



// route pour recup tous les autheurs

// route pour poste d'un autheur
// app.post("/author", async (req, res) => {
//   try {
//     const savedAuthor = await author.postAuthor(req, res);
//     res.json(savedAuthor);
//   } catch (error) {
//     console.error("Erreur lors de la création de l'auteur :", error);
//   }
// });
// app.get("/author", async (req, res) => {
//   try {
//     const authors = await author.getAuthors(req, res);
//   } catch (error) {
//     console.error("Erreur lors de la récupération des auteurs :", error);
//   }
// });

// // route pour recup un auteur par id
// app.get("/author/:id", async (req, res) => {
//   try {
//     const authorById = await author.getAuthorById(req, res);
//   } catch (error) {
//     console.error("Erreur lors de la récupération de l'auteur :", error);
//   }
// });

// // route pour modifier un auteur par id
// app.put("/author/:id", async (req, res) => {
//   try {
//     const updatedAuthor = await author.updateAuthorById(req, res);
//   } catch (error) {
//     console.error("erreur lors de la modif de l'autheur:", error);
//   }
// });

// // route pour supprimer un auteur par id
// app.delete("/author/:id", async (req, res) => {
//   try {
//     const deleteAuthor = await author.deleteAuthorById(req, res);
//   } catch (error) {
//     console.error("erreur lors de la suppression de l'autheur:", error);
//   }
// });

// const comment = new CommentController();

// app.post("/comment", async (req, res) => {
//   try {
//     const savedComment = await comment.postComment(req, res);
//   } catch (error) {
//     console.error("Erreur lors de la création du commentaire :", error);
//   }
// });

// app.get("/comment", async (req, res) => {
//   try {
//     const getComment = await comment.getComment(req, res);
//   } catch (error) {
//     console.error("Erreur lors de la récupération des commentaires :", error);
//   }
// });

// app.get("/comment/:id", async (req, res) => {
//   try {
//     const getCommentById = await comment.getCommentById(req, res);
//   } catch (error) {
//     console.error("Erreur lors de la récupération du commentaire via son id :", error);
//   }
// })

// app.put("/comment/:id", async (req, res) => {
//   try {
//     const updateComment = await comment.updateComment(req, res)
//   } catch (error) {
//     console.error("Erreur lors de la mise à jour du commentaire: ", error);
//   }
// })

// app.delete("/comment/:id", async (req,res) => {
//   try {
//     const deleteComment = await comment.deleteComment(req, res)
//   } catch (error) {
//     console.error("Erreur lors de la suppression du commentaire: ", error);
//   }
// })

// const category = new CategoryController();

// app.post("/category", async(req, res) => {
//   try {
//     const postCategory = await category.postCategory(req, res)
//     res.json(postCategory)
//   } catch (error) {
//     console.error("Erreur lors de la création de la categorie: ", error);
//   }
// })

// app.get("/category", async (req, res) => {
//   try {
//     const getCategory = await category.getCategory(req, res)
//   } catch (error) {
//     console.error("Erreur lors de la recupération de la categorie: ", error);
//   }

// })

// app.get("/category/:id", async (req, res) => {
//   try {
//     const getCategoryById = await category.getCategoryById(req, res)
//   } catch (error) {
//     console.error("Erreur lors de la recupération de la categorie: ", error);
//   }
// })

// app.put("/category/:id", async (req, res) => {
//   try {
//     const updateCategory = await category.updateCategory(req, res);
//   } catch (error) {
//     console.error("Erreur lors de la modification de la categorie: ", error);
//   }
// })

// app.delete("/category/:id", async (req, res) => {
//   try {
//     const deletedCategory = await category.deleteCategory(req, res);
//   } catch (error) {
//     console.error("Erreur lors de la suppression de la categorie: ", error);

//   }
// })