export default function handler(req, res) {
    if(req.method === "POST"){
        const {firstname, lastname, email, password} = req.body;

        res.status(200).json({
            message: "Data recieved successfully",
            data: {firstname, lastname, email, password},
        })
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}