require('dotenv').config();
const mongoose = require('mongoose');
const user = require('./user');

mongoose.connect(process.env.uri)
const db = mongoose.connection 
db.once('open', () =>console.log('Database connected'))
db.on('error', error => console.error(error)) 

createUser()
async function createUser() {
    try {
        const newUser = new user({
            name: 'Micheal',
            age: 20,
            favouriteFoods: ['eggs','eba','yam']
        })
        const savedDocument = await newUser.save()
        console.log(savedDocument)

    }
        catch (err) {
        console.log(err)
    
} 
    } 

