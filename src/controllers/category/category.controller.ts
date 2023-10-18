import Category from "../../models/category/category.model";

export class CategoryController{

    async postCategory(req,res){
        try {
            const data = req.body;
            const categoryData = new Category(data);
            const savedCategory = await categoryData.save()
            res.json(savedCategory)
            console.log("catégorie crée !!")
        } catch (error) {
            console.error("erreur lors de la création de la catégorie: ", error)
        }
    }

    async getCategory(req,res){
        try {
            const category = await Category.find()
            res.json(category)
            console.log("categorie recuperée")
        } catch (error) {
            console.error("erreur lors de la récupération de la catégorie: ", error)
        }
    }

    async getCategoryById(req, res){
        try {
            const categoryId = req.params.id
            const getCategoryById = await Category.findById(categoryId)
            res.json(getCategoryById)
            console.log("categorie recupéré avec l'id: ", categoryId)
        } catch (error) {
            console.error("erreur lors de la récupération de la catégorie: ", error)
        }
    }

    async updateCategory(req, res){
        try {
            const categoryId = req.params.id;
            const data = req.body;
            const updateCategory = await Category.updateOne(
                {_id: categoryId},
                {$set: data}
            )
            if (updateCategory.matchedCount === 1) {
                const updatedCategoryData = await Category.findById({_id: categoryId})
                res.json(updatedCategoryData)
                console.log("catégorie modifiée")
            } else {
                res.json({
                    error: "Catégorie introuvable ou aucune modification effectuée",
                  });
            }
        } catch (error) {
            console.error("erreur lors de la modif de la categorie: ", error);
        }
    }

    async deleteCategory(req, res){
        try {
            const categoryId = req.params.id;
            const deleteCategory = await Category.deleteOne({_id: categoryId})
            res.json("categorie supprimée")
        } catch (error) {
            console.error("erreur lors de la supression de la categorie: ", error);
        }
    }


}