import { error } from "console"
import mongoose from "mongoose"

export class Database {

private readonly dbUrl = "mongodb+srv://Gym:Gym1299@cluster1.4tx6uat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"

public readonly dbconnect = () => {
mongoose.connect(this.dbUrl, {})
return mongoose.connection.once('open',()=> console.log("Mongo database connected")
).on("error",(error) => console.log("error found", error)
)
}
}
