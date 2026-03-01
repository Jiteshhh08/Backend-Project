import 'dotenv/config'
import connectDB from "./db/index.js"


connectDB()


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
