import useDB from "../../database.js"


export default async function getAllCheeses(req, res) {
    
    const {collection, client} = await useDB("cheeses")
    const id = req.params.id 
    if(id) {
        // hent en enkelt ost
    } else{
        //hent alle oste
    }
    res.json({message: "get all cheeses"})
    res.end()
}