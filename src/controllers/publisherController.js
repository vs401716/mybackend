const AuthorModel= require("../models/newPublisherModel")

// Q. - Write a POST api that creates a publisher from the details in the request body ?


const createPublisher = async function (req, res) {
    let Data = req.body
    let PublisherCreated = await PublisherModel.create(Data)
    res.send({data: PublisherCreated})
}

module.exports.createPublisher = createPublisher