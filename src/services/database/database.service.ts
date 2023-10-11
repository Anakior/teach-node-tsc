import mongoose from "mongoose";
import { database } from "../../environment/env";

export class DatabaseService {
    initDatabase() {
        mongoose.connect(database).then(() => {
            console.log("Connected to database");
        });
    }
}