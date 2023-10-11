import mongoose from "mongoose";

export class DatabaseService {
    initDatabase() {
        mongoose.connect("mongodb+srv://test:2LudF5rt33nSoULr@cluster0.vdftuva.mongodb.net/").then(() => {
            console.log("Connected to database");
        });
    }
}