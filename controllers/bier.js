const Bier = require("../Schemas/Bier");

const createBeer = async (req,res)=>{
    try {
        const { name, origin, nicknames} = req.body;
        const exists = await Bier.exists({name})
        if (!exists) {
            const bier = await Bier.create({
                name, 
                origin, 
                nicknames
            })
            res.status(201).json({
                success:"true",
                msg: "Bier hinzugefügt",
                data: bier
            })
        }
        else {
            res.status(500).json({
                success:"false",
                msg:"Bier existiert bereits",
            })
        }
    } catch (error) {
        res.status(500).json({
            success:"false",
            msg: e,
        })
    } 
}

const getAllBeers = async (req,res)=> {
     try {
        const biere = await Bier.find();
        if(!biere.length){
            res.status(200).json({msg:"No Beers found in the data base"})            
        }
        else {
            res.status(200).json({data:biere})
        }
     } catch (error) {
        res.status(500).json({error})
     }
}

const updateOneBeer = async (req,res)=>{
    try {
        const {name, origin, nicknames} = req.body
        console.log(req.params.name)
        const bier = await Bier.findOneAndUpdate({"name":req.params.name}, {name,origin, nicknames}, {new: true});
        if (!bier){
            res.status(404).json({msg:`Couldnt find Bier with the name: ${req.params.name}`})
        }
        else {
            res.status(200).json({msg:`Bier successfully updated. New Bier Info:`, data:bier})
        }
        
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const getSingleBeer = async (req,res)=>{
    // console.log(req.query)
    try {
        const bier = await Bier.findOne({name:req.query.answer})  // <-------------- find out how to get one single Beer, get with query.name didnt work
        if (!bier){
            res.status(404).json({msg:"Beer doesnt exist in the database"}) 
        }
        else {
            res.status(200).json({msg: "Bier found", data: bier})
        }
    } catch (error) {
        res.status(500).json({error})
    }
}


module.exports = {
    createBeer,
    getAllBeers,
    updateOneBeer,
    getSingleBeer
}