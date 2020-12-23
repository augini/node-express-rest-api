import { v4 as uuidv4 } from "uuid";

export let users = [
  {
    id: "fdsfsdfsd4-3545-23",
    firstName: "John",
    lastName: "Doe",
    age: "25",
  },
];

export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};
export const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (user == undefined) {
    res.send(`User with the id ${id} not found`);
  } else {
    res.send(user);
  }
};

export const createUser = (req, res) => {
  console.log(req);
  const id = uuidv4();
  const user = { id, ...req.body };
  users.push(user);
  res.send(`User with the name ${req.body.firstName} has been added`);
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  users.filter((user) => user.id !== id);
  const { firstName } = users.find((user) => user.id === id);
  res.send(`User with the id ${id} and name ${firstName} has been deleted`);
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  const prevName = user.firstName;
  const { firstName, lastName, age } = req.body;
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(
    `User with the id ${id} has been updated from ${prevName} to ${firstName}`
  );
};
