import Author from "../../models/author/author.model";

export class AuthorController {
    createAuthor() {
        const author = new Author({
            firstName: 'John',
            lastName: 'Doe',
            avatar: 'https://i.pravatar.cc/300',
        });
        author.save();
    }

    // post d'un autheur
  

      async postAuthor(req, res) {
        try {
          console.log(req.body);
         
          const authorData = req.body;
          const author = new Author(authorData);
          const savedAuthor = await author.save();
          res.json(savedAuthor);
          console.log("Auteur créé");
        } catch (error) {
          console.error('Erreur lors de la création de l\'auteur :', error);
        }
      }


    // on recup tous les autheurs
    async getAuthors(req, res) {
        try {
          const author = await Author.find();
          res.json(author);
          console.log("liste des autheurs récupérée")
        } catch (error) {
          console.error('Erreur lors de la récupération des auteurs :', error);
        }
      }

    // on recup un auteur par ID
  async getAuthorById(req, res) {
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