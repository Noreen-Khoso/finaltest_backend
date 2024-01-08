const AsyncHandler = require("express-async-handler");
const Poetry = require("../models/poetryModel");


const createPoetry = AsyncHandler(async (req, res) => {
    const { name, theme, poetry } = req.body;

    const newPoetry = await Poetry.create({
        name,
        theme,
        poetry
    });

    res.status(201).json({ message: "Poetry created successfully", newPoetry });
});

const getPoetry = AsyncHandler(async (req, res) => {
    const poetrys = await Poetry.find();
    res.status(200).json({message:"you get all your contacts Successfully" ,poetrys });
});


const getPoetryById = AsyncHandler(async (req,res)=>{
    const poetrys = await Poetry.findById(req.params.id)
    if(!poetrys){
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json({ message : "Suceesfully get your contact", poetrys});
});











module.exports = {createPoetry, getPoetry, getPoetryById};