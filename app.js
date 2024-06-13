require("dotenv").config();
const mongoose = require("mongoose");
const user = require("./user");

mongoose.connect(process.env.uri);
const db = mongoose.connection;
db.once("open", () => console.log("Database connected"));
db.on("error", (error) => console.error(error));

createUser();
async function createUser() {
//       try {
//           const newUser = new user({
//           name: 'Charles',
//            age: 31,
//           favouriteFoods: ['buritos','beans','rice']
// })
//         const savedDocument = await newUser.save();
//         console.log(savedDocument)
//       }
//           catch (err) {
//           console.log(err)
//   }
  // try{
  //     const find = user.find({age: 20})
  //     const result = await find
  //     console.log(result)
  // }
  // catch (err) {
  //     console.log(err)
  // }
  // try{
  //     const find = user.findOne({age: 20})
  //     const result = await find
  //     console.log(result)
  // }
  // catch (err) {
  //     console.log(err)
  // }
//   try{
//       const find = user.findById('666ab70ee3b5dba8e3c1a7fa')
//       const result = await find
//       console.log(result)
//   }
//   catch (err) {
//       console.log(err)
//   }

// try{
//       const find = user.findById('666ab70ee3b5dba8e3c1a7fa')
//           const result = await find
//           console.log(result)
//       }
//       catch (err) {
//           console.log(err)
//       }

// try{
//   const find = user.findById('666ab70ee3b5dba8e3c1a7fa')
//       const result = await find
//       result.age = 30;
//       const response = await result.save()
//       console.log(response)
// }
//    catch (err) {
//     console.log(err)  
// }

// try{
//   const find = user.findOneAndUpdate(
//     { _id:'666ab70ee3b5dba8e3c1a7fa'}, 
//     { age: 35 });
//         const result = await find
//         const response = await result.save()    
//         console.log(response)
// }
//   catch (err) {
//     console.log(err)
// }

// try{
//     const find = user.findByIdAndDelete('666ab70ee3b5dba8e3c1a7fa')
//     const result = await find
//         console.log(result) 
// }
//     catch (err) {
//     console.log(err)
// }

// try{
//     const find = user.deleteOne({age: 20})
//     const result = await find
//         console.log(result) 
// }
//     catch (err) {
//     console.log(err)
// }
// try {
//     const find = user.find({ favouriteFoods: 'buritos' })
//       .limit(2)                          
//       .select('-age')                    
//       .exec();
//       const result = await find;

//       console.log(result)

//   } catch (error) {
//     console.error('Database connection error:', error);
  
// }





    


}
