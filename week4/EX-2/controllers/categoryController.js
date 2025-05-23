import { categories } from "../models/categoryModel.js";
import { articles } from "../models/articleModel.js";

export const getAll = (req, res) => {
  res.json(categories);
};

export const getOne = (req, res) => {
  const id = req.params.id;
  const one = categories.find((a) => (a.id = id));
  res.json(one);
};

export const create = (req, res) => {
  const { name } = req.body;
  const newItem = {
    name: name,
  };
  categories.push(newItem);
  return res.status(200).json({ message: "updated", article: one });
};

export const edit = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  let one = categories.find((a) => (a.id = id));
  one.name = name;
  return res.status(200).json({ message: "updated", article: one });
};

export const del = (req, res) => {
  const id = req.params.id;
  let one = categories.find((a) => (a.id = id));
  let index = categories.findIndex((a) => a.id === id);
  categories.splice(index, 1);
  return res.status(200).json({ message: "deleted", category: one });
};

export const getArtByCat = (req, res) => {
  const id = Number(req.params.id);
  const artByCat = articles.filter((a) => a.journalistId === id);
  return res.status(200).json(artByCat);
};
