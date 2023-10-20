import express from "express";

export class AppService{
   private appExpress: express.Application = null;
   private port: number = 3000;

initApp(app: express.Application){
    app.use(express.json());
    this.appExpress = app;
    this.appExpress.use(express.json());
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
