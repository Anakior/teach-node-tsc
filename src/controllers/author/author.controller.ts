import Author from "../../models/author/author.model";

export class AuthorController {
    createAuthor() {
        const author = new Author({
            firstName: 'John',
            lastName: 'Doe',
            avatar: 'https://i.pravatar.cc/300'
        });
        author.save();
    }
}