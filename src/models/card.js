import mongoose, { model, Schema } from 'mongoose'
const uri = 'mongodb+srv://user:<password>@cluster0.4jaifwg.mongodb.net/dbPrueba?retryWrites=true&w=majority&appName=Cluster0' // --> Copiar el PATH que proporciona mongoDB (Usen mongodb Atlas es mas rapido) 

// mongodb connection
mongoose.connect(uri)
  .then(() => console.log('Conectado a MONGODB'))
  .catch((error) => console.error(error))

const cardSchema = new Schema({})

const Card = model('cards', cardSchema) // -> Sin schema, son muchos atributos divididos


export class CardModel {
  static async getAll () {
    return Card
      .find()
      .then(data => {
        return data
      })
  }

  static async create(req, res) {
    const card = new Card({
      name: req.body.name,
      description: req.body.description
    })
  }
}
