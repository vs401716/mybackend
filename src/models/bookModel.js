// const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId

// const bookSchema = new mongoose.Schema( {
//     name: String,
//     author_id: {
//         type: ObjectId,
//         ref: "Author"
//     }, 
//     price: Number,
// const bookSchema = new mongoose.Schema( {
//     authorName: String,
//    age:Number,
//    address:String,
//     ratings: Number
// }, { timestamps: true });
// module.exports = mongoose.model('LibraryBook', bookSchema)
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "NewAuthor"
    }, 
    price: Number,
    ratings: Number,
    Publisher_id:{
        type:ObjectId,
        ref:"NewPublisher",
    },
    HardCover : {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)