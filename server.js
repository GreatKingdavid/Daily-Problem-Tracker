const express = require("express");
const { log } = require("node:console");
const app = express();
app.use(express.json());

let problems = [];

app.get("/", (req, res) => {
    res.json({"status": "Ready to track problems"})
});

app.post("/problems", ()=>{
    
})

app.listen(3000, () => {
  console.log(`server is up and running`);
});
