import 'dotenv/config'
import connectDB from "./db/index.js"
import { app } from "app.js";


connectDB()
.then(() => {
    app.listen((process.env.PORT || 8000), () => {
        console.log(`App is running at PORT : ${process.env.PORT}`);
    })
})
.catch((err) => (console.log('ERROR while connecting MONGO DB!!!',err)))


// import express from "express";

// const app = express();

// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("Error", (err) => {
//             console.log('ERROR: ', err);
//             throw err
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port : ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// } )()
