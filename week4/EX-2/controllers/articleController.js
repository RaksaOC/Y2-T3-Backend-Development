import { articles } from "../models/articleModel.js";

export const getAll = (req, res) => {
  res.json(articles);
};

export const getOne = (req, res) => {
  const id = req.params.id;
  const one = articles.find((a) => (a.id = id));
  res.json(one);
};

export const create = (req, res) => {
  const { id, title, content, journalistId, categoryId } = req.body;
  const newItem = {
    id: id,
    title: title,
    content: content,
    journalistId: journalistId,
    categoryId: categoryId,
  };
  articles.push(newItem);
  return res.status(200).json({ message: "updated", article: one });
};

export const edit = (req, res) => {
  const id = req.params.id;
  const { title, content, journalistId, categoryId } = req.body;
  let one = articles.find((a) => (a.id = id));
  one.title = title;
  one.content = content;
  one.journalistId = journalistId;
  one.categoryId = categoryId;
  return res.status(200).json({ message: "updated", article: one });
};

export const del = (req, res) => {
  const id = req.params.id;
  let one = articles.find((a) => (a.id = id));
  let index = articles.findIndex((a) => a.id === id);
  articles.splice(index, 1);
  return res.status(200).json({ message: "deleted", article: one });
};
