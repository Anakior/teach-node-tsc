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
  async getComment(req, res) {
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
      console.log("liste des commentaires récupérée");
    } catch (error) {
      console.error("erreur lors de la recupération des commentaires: ", error);
    }
  }

  async getCommentById(req, res) {
    try {
      const commentId = req.params.id;
      const getCommentById = await Comment.findById(commentId);
      res.json(getCommentById);
      console.log("commentaire recuperé avec l'id: ", commentId);
    } catch (error) {
      console.error("Problème lors de la recupération du commentaire");
    }
  }

  async updateComment(req, res) {
    try {
      const commentId = req.params.id;
      const commentData = req.body;
      const updatedComment = await Comment.updateOne(
        { _id: commentId },
        { $set: commentData }
      );
      if (updatedComment.matchedCount === 1) {
        const updatedCommentData = await Comment.findById({ _id: commentId });
        res.json(updatedCommentData);
        console.log("commentaire modifié");
      } else {
        res.json({
          error: "Commentaire introuvable ou aucune modification effectuée",
        });
      }
    } catch (error) {
      console.error("erreur lors de la modif du commentaire: ", error);
    }
  }

  async deleteComment(req, res) {
    try {
      const commentId = req.params.id;
      const deleteComment = await Comment.deleteOne({_id: commentId});
      if (deleteComment.deletedCount === 1) {
        res.json("commentaire supprimé avec succés!");
      }
    } catch (error) {
      console.error("probleme lors de la suppression de l'autheur:", error);
    }
  }

}
