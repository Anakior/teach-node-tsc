import Comment from "../../models/comment/comment.model";

export class CommentController {


  // post d'un commentaire
  async postComment(req, res) {
    try {
      const commentData = req.body;
      const comment = new Comment(commentData);
      // console.log(author)
      const savedComment = await comment.save();
      res.json(savedComment);
      console.log("Commentaire créé");
    } catch (error) {
      console.error("Erreur lors de la création du commentaire :", error);
    }
  }

  // on recup tous les commentaires
async getComment(req, res){
    try {
        // const comment = Comment.find();

    //     TypeError: Converting circular structure to JSON
    // --> starting at object with constructor 'MongoClient'
    // |     property 's' -> object with constructor 'Object'
    // |     property 'sessionPool' -> object with constructor 'ServerSessionPool'
    // --- property 'client' closes the circle
        const comments = await Comment.find().exec();
        const leanComments = comments.map((comment) => comment.toObject());
        res.json(leanComments);
        
        // res.json(comment)
        console.log("liste des commentaires récupérée")
    } catch (error) {
        console.error("erreur lors de la recupération des commentaires: ", error);
    }
}








//   async getAuthors(req, res) {
//     try {
//       const author = await Author.find();
//       res.json(author);
//       console.log("liste des autheurs récupérée");
//     } catch (error) {
//       console.error("Erreur lors de la récupération des auteurs :", error);
//     }
//   }

//   // on recup un auteur par ID 
//   async getAuthorById(req, res) {
//     try {
//       const authorId = req.params.id;
//       // console.log(authorId)
//       const author = await Author.findById(authorId);
//       if (!author) {
//         return res.status(404).json({ error: "Auteur introuvable" });
//       } else {
//         res.status(200).json(author);
//       }
//     } catch (error) {
//       console.error("Erreur lors de la récupération de l'auteur :", error);
//     }
//   }

//   //on modifie l'auteur par Id
//   async updateAuthorById(req, res) {
//     try {
//       const authorId = req.params.id;
//       const authorData = req.body;
//       const updatedAuthor = await Author.updateOne(
//         { _id: authorId },
//         { $set: authorData }
//       );
//       // une fois la modif effectuee, je recherche le doc modifié avec matchedCount pour l'afficher
//       if (updatedAuthor.matchedCount === 1) {
//         const updatedAuthorData = await Author.findById({ _id: authorId });
//         res.json(updatedAuthorData);
//       } else {
//         res.json({
//           error: "Auteur introuvable ou aucune modification effectuée",
//         });
//       }
//     } catch (error) {
//       console.error("erreur lors de la modif de l'auther: ", error);
//     }
//   }

// async deleteAuthorById (req, res){
//   try {
//     const authorId = req.params.id
//     // console.log(authorId)
//     const deleteAuthor = await Author.deleteOne({ _id: (authorId) });
//     //deletedCount permet de trouver la suppression effectuée
//     if (deleteAuthor.deletedCount === 1) {
//       // Si un document a été supprimé (deletedCount vaut 1)
//       res.status(200).json({ message: 'Auteur supprimé avec succès' });
//     } else {
//       res.status(404).json({ error: 'Auteur introuvable ou aucune suppression effectuée' });
//     }
//   } catch (error) {
//     console.error("probleme lors de la suppression de l'autheur:", error)
//   }
// }

}
