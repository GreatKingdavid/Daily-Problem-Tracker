const express = require("express");
const { log } = require("node:console");
const app = express();
app.use(express.json());

let problems = [];

app.get("/", (req, res) => {
  res.json({ status: "Ready to track problems" });
});

app.get("/problems", (req, res) => {
  try {
    if (!problems) {
      return res.json(`Nothing here`);
    }
    const { status } = req.query;
    if (status) {
      const stat = problems.filter((p) => p.status === status);
      res.status(200).json(stat);
    }
    res.status(200).json(problems);
  } catch (error) {
    res.status(500).json(`Something is wrong`);
  }
});

app.post("/problems", (req, res) => {
  try {
    const { text } = req.body;
    const id = crypto.randomUUID();
    const problemLog = { id, text, status: "open" };
    problems.push(problemLog);
    res.status(201).json(problemLog);
  } catch (error) {
    res.status(404).json(`404 page not found`);
  }
});

app.get("/problems/:id", (req, res) => {
  try {
    const { id } = req.params;
    const problem = problems.find((p) => p.id === id);

    if (!problem) {
      return res.status(404).json(`Problem not found`);
    }
    res.json(problem);
  } catch (error) {
    res.status(500).json(`Something is wrong`);
  }
});

app.patch("/problems/:id", (req, res) => {
  try {
    const { id } = req.params;
    let { text, status } = req.body;
    const problem = problems.find((p) => p.id === id);
    if (!problem) {
      return res.status(404).json(`Problem not found`);
    }
    if (text) {
      problem.text = text;
    }
    if (status) {
      problem.status = status;
    }
    res.json(problem);
  } catch (error) {
    res.status(500).json(`Somthing went wrong`);
  }
});

app.delete("/problems/:id", (req, res) => {
  try {
    const { id } = req.params;
    const problem = problems.findIndex((p) => p.id === id);
    const removeproblem = problems.splice(index, 1);
    if (!problem) {
      return res.status(404).json(`Not found`);
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json(`Somthing went wrong`);
  }
});

app.listen(3000, () => {
  console.log(`server is up and running`);
});
