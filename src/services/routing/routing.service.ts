import { AuthorController } from "../../controllers/author/author.controller";
import { CommentController } from "../../controllers/comment/comment.controller";
import { RouteStructure } from "../../structures/route/route.structure";
import express from "express";
import { App } from "../app/app.service";
import { CategoryController } from "../../controllers/category/category.controller";

export class RoutingService {
  routes: Array<RouteStructure<any>> = [];

  initializeRoutes() {

    this.routes = [
      new RouteStructure<AuthorController>("/author", new AuthorController(), "postAuthor", "post"),
      new RouteStructure<AuthorController>("/author", new AuthorController(), "getAuthors", "get"),
      new RouteStructure<AuthorController>("/author/:id", new AuthorController(), "getAuthorById", "get"),
      new RouteStructure<AuthorController>("/author/:id", new AuthorController(), "updateAuthorById", "put"),
      new RouteStructure<AuthorController>("/author/:id", new AuthorController(), "deleteAuthorById", "delete"),

      new RouteStructure<CommentController>("/comment", new CommentController(), "postComment", "post"),
      new RouteStructure<CommentController>("/comment", new CommentController(), "getComment", "get"),
      new RouteStructure<CommentController>("/comment/:id", new CommentController(), "getCommentById", "get"),
      new RouteStructure<CommentController>("/comment/:id", new CommentController(), "updateComment", "put"),
      new RouteStructure<CommentController>("/comment/:id", new CommentController(), "deleteComment", "delete"),

      new RouteStructure<CategoryController>("/category", new CategoryController(), "postCategory", "post"),
      new RouteStructure<CategoryController>("/category", new CategoryController(), "getCategory", "get"),
      new RouteStructure<CategoryController>("/category/:id", new CategoryController(), "getCategoryById", "get"),
      new RouteStructure<CategoryController>("/category/:id", new CategoryController(), "updateCategory", "put"),
      new RouteStructure<CategoryController>("/category/:id", new CategoryController(), "deleteCategory", "delete"),

    ];
    this.setControllers();
  }
  //express.post('/author', AuthorController.postAuthor)
  setControllers(){
    this.routes.forEach((routeStructure: RouteStructure<any>) => {
        const express = App.getExpress();
        // authorController.postAuthor = ligne en dessous
        const controller = routeStructure.controller;
        express[routeStructure.method](routeStructure.pattern, controller[routeStructure.action])
       
    })
  }

}
