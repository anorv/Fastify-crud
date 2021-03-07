const trainController = require("../controllers/trainController");
const { model } = require("../models/Train");


const routes = [
    {
        method: 'GET',
        url: '/api/train',
        handler: trainController.getTrain
    },
    {
    
        method: 'GET',
        url: '/api/train/:id',
        handler: trainController.getSingleTrain
    },
    {
        method: 'POST',
        url: '/api/train',
        handler: trainController.addTrain
    },
    {
        method: 'PUT',
        url: '/api/train/:id',
        handler: trainController.updateTrain
    },
    {
        method: 'DELETE',
        url: '/api/train/:id',
        handler: trainController.deleteTrain
    } 
    
]

module.exports = routes;

