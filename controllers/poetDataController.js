const AsyncHandler = require("express-async-handler");
const Poet = require("../models/PoetDataModel");

// const createPoet = AsyncHandler(async (req, res) => {
//     const { name, birthDate, deathDate, nationality} = req.body;

//     const newPoet = await Poet.create({
//         name,
//         birthDate,
//         deathDate,
//         nationality
//     });

//     res.status(201).json({ message: "Poetry created successfully", newPoet });
// });


const createPoet = AsyncHandler(async (req, res) => {
    const { name, birthDate, deathDate, nationality } = req.body;

    const newPoet = await Poet.create({
        name,
        birthDate,
        deathDate,
        nationality
    });

    res.status(201).json({ message: "Poet created successfully", newPoet });
});






const getPoet = AsyncHandler(async (req, res) => {
    const poets = await Poet.find();
    res.status(200).json({message:"you get all your poets Data Successfully" ,poets });
});

const getPoetById = AsyncHandler(async (req,res)=>{
    const poets = await Poet.findById(req.params.id)
    if(!poets){
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json({ message : "Suceesfully get your contact", poets});
});
module.exports ={createPoet,getPoet,getPoetById}