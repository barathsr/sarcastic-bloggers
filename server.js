import express from "express";

const app = express();

const responseData = [{ name : "barath",
    age: 25,
    mark:100
    },
    { name : "dharani",
    age: 25,
    mark:100
    },]

app.get('/', (req, res) => {
    res.status(200).send({message:"success",data:responseData});
});

app.post('/', (req,res) => {
    const data= req;
    
    console.log(data);
    res.status(200).send({message:"successfully received"});
})

app.listen(3000, (req, res) => {
    console.log("Server is running on http://localhost:3000")
});