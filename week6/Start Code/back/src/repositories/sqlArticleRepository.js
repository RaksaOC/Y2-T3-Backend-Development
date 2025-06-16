//
//  This repository shall:
//  - Connect to the database (using the pool provided by the database.js)
// -  Perfrom the SQL querries to implement the bellow API
//

import { pool } from "../utils/database.js";

// Get all articles
export async function getArticles() {
  const [rows] = await pool.query(`SELECT 
    articles.id AS article_id,
    articles.title,
    articles.content,
    articles.category,
    articles.journalist_id,
    journalists.id AS journalist_id,
    journalists.name,
    journalists.email,
    journalists.bio
  FROM articles
  JOIN journalists ON articles.journalist_id = journalists.id`);
  return rows;
}

// Get one article by ID
export async function getArticleById(id) {
  const [rows] = await pool.query("SELECT * FROM articles WHERE id = ?", [id]);
  return rows;
}

// Create a new article
export async function createArticle(article) {
  const [result] = await pool.query(
    "INSERT INTO articles (title, content, journalist, category) VALUES (?, ?, ?, ?)",
    [article.title, article.content, article.journalist, article.category]
  );
  return { id: result.insertId, ...article };
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
  await pool.query(
    "UPDATE articles SET title = ?, content = ?, journalist_id = ?, category = ? WHERE id = ?",
    [
      updatedData.title,
      updatedData.content,
      updatedData.journalist,
      updatedData.category,
      id,
    ]
  );
  return { id, ...updatedData };
}

// Delete an article by ID
export async function deleteArticle(id) {
  await pool.query("DELETE FROM articles WHERE id = ?", [id]);
  return true;
}

// Get article by ID with journalist info
export async function getArticleWithJournalistById(id) {
  const [rows] = await pool.query(
    `SELECT a.*, j.name as journalist_name, j.email as journalist_email, j.bio as journalist_bio
     FROM articles a
     JOIN journalists j ON a.journalist_id = j.id
     WHERE a.id = ?`,
    [id]
  );
  return rows[0];
}

// Get all articles by journalist ID (with journalist info)
export async function getArticlesByJournalistId(journalistId) {
  const [rows] = await pool.query(
    `SELECT a.*, j.name as journalist_name, j.email as journalist_email, j.bio as journalist_bio
     FROM articles a
     JOIN journalists j ON a.journalist_id = j.id
     WHERE a.journalist_id = ?`,
    [journalistId]
  );
  return rows;
}
