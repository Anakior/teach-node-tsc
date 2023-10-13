import Author from "../../models/author/author.model";
import { Request, Response } from 'express';

export class AuthorController {
    createAuthor() {
        const author = new Author({
            firstName: 'John',
            lastName: 'Doe',
            avatar: 'https://i.pravatar.cc/300',
        });
        author.save();
    }

    //post d'un autheur
    // async postAuthor(req: Request, res: Response) {
    //     try {
    //       const author = new Author();
    //       const savedAuthor = await author.save();
    //       res.status(201).json(savedAuthor);
    //       console.log("autheur crée")
    //     } catch (error) {
    //       console.error('Erreur lors de la création de l\'auteur :', error);
    //     }
    //   }

    async postAuthor(req, res){
        try {
            const author = new Author({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                title: req.body.title,
                description: req.body.description,
                avatar: req.body.avatar,
                socialNetwork: req.body.socialNetwork
              });
              const savedAuthor = await author.save()
              res.json(savedAuthor)
              console.log("autheur crée")
        } catch (error) {
            console.error("erreur lors de la création de l'autheur:", error)
        }
    }


    // on recup tous les autheurs
    async getAuthors(req: Request, res: Response) {
        try {
          const author = await Author.find();
          res.json(author);
          console.log("liste des autheurs récupérée")
        } catch (error) {
          console.error('Erreur lors de la récupération des auteurs :', error);
        }
      }

    // on recup un auteur par ID
  async getAuthorById(req: Request, res: Response) {
    const authorId = req.params.id;
    try {
      const author = await Author.findById(authorId);
      if (!author) {
        return res.json({ error: 'Auteur introuvable' });
      }
      res.status(200).json(author);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'auteur :', error);
    }
  }

}