const Train = require('../models/Train');

// get all trains
exports.getTrain = async(req, reply) => {
    try{
        const trains = await Train.find();
        return trains;
    }catch(error){
        throw error;
    }
};
// get single train
exports.getSingleTrain = async(req, reply) => {
    try {
        const trainId = req.params.id;
        const train = await Train.findById(trainId);
        return train;
    } catch (error) {
        throw error
    };
};

// add train
exports.addTrain = async(req, reply) => {
    try{
     const train = new Train(req.body);
     return train.save();
    }catch(error){
        throw error;
    } 
};

// update train
exports.updateTrain = async(req, reply) => {
    try{
     const trainId = req.params.id;
     const train = req.body;
     const {...updateTrain} = train;
     const update = await Train.findByIdAndUpdate(trainId, updateTrain, {new:true});
     return update;
    }catch(error){
        throw error;
    } 
};
 
// delete train
exports.deleteTrain = async(req, reply) => {
    try{
     const trainId = req.params.id;
     const train  = await Train.findByIdAndDelete(trainId);
     return train;
    }catch(error){
        throw error;
    } 
};
 