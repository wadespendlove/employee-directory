import express from "express";
import employees from "./db/employees.js";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello employees`);
});

app.get("/employees", (req, res) => {
  res.send(employees);
  // res.send(`ID: ${employees.id}`);
});

app.get("/employees/random", (req, res) => {
  const randomEmployee =
    employees[Math.floor(Math.random() * employees.length)];

  res.send(`Name: ${randomEmployee.name}, ID: ${randomEmployee.id}`);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  const foundEmployee = employees.find((employee) => {
    return employee.id === Number(id);
  });

  if (!foundEmployee) {
    res.status(404).send("No employee found");
  }

  res.send(`Name: ${foundEmployee.name}, ID: ${foundEmployee.id}`);
});

export default app;
