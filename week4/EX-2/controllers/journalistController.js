import { journalists } from "../models/journalistModel.js";
import { articles } from "../models/articleModel.js";

export const getAll = (req, res) => {
  res.json(journalists);
};

export const getOne = (req, res) => {
  const id = req.params.id;
  const one = journalists.find((a) => (a.id = id));
  res.json(one);
};

export const create = (req, res) => {
  const { name, email } = req.body;
  const newItem = {
    name: name,
    email: email
  };
  journalists.push(newItem);
  return res.status(200).json({ message: "updated", journalist: one });
};

export const edit = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  let one = journalists.find((a) => (a.id = id));
  one.name = name;
  one.email = email;
  return res.status(200).json({ message: "updated", journalist: one });
};

export const del = (req, res) => {
  const id = req.params.id;
  let one = journalists.find((a) => (a.id = id));
  let index = journalists.findIndex((a) => a.id === id);
  journalists.splice(index, 1);
  return res.status(200).json({ message: "deleted", journalist: one });
};

export const getArtByJournal = (req, res) =>{
    const id = Number(req.params.id);
    console.log("id to find", id)
    const artByJournal = articles.filter(a => a.journalistId === id);
    return res.status(200).json(artByJournal);
}
