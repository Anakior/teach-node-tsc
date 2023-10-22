import express from "express";
import cors from "cors";

export class AppService{
   private appExpress: express.Application = null;
   private port: number = 3000;

initApp(app: express.Application){
    app.use(express.json());
    this.appExpress = app;
    this.appExpress.use(express.json());

    //ajout du middleware cors pour connecter le front
    this.appExpress.use(
        cors({
          origin: "http://localhost:3001",
          methods: "GET,POST,PUT,DELETE",
        })
      );

    this.initializeServer();
}

    initializeServer(){
        this.appExpress.listen(this.port, () => {
            return console.log(`server is listening on ${this.port}`);
          });
    }

    getExpress(): express.Application{
        return this.appExpress;
    }
}

export const App = new AppService();
