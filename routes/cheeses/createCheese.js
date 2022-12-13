export default function createCheese(req, res) {
    console.log(req.file);
    res.json({message: "Create Cheese"})
    res.end()
}