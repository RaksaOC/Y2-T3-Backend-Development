import { useEffect, useState } from 'react';
import axios from "axios";

export default function ArticleFilterByCategory() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchArticles();
    fetchCategories();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await axios.get('http://localhost:4000/articles');
      setArticles(res.data);
      setFilteredArticles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:4000/categories');
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const applyFilters = () => {
    if (selectedCategory === '') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
          articles.filter(article => article.categoryId === parseInt(selectedCategory))
      );
    }
  };

  const resetFilters = () => {
    setSelectedCategory('');
    setFilteredArticles(articles);
  };

  return (
      <div>
        <h2>Articles</h2>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <label htmlFor="categoryFilter">Filter by Category:</label>
          <select
              id="categoryFilter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name || `Category #${category.id}`}
                </option>
            ))}
          </select>

          <button onClick={applyFilters}>Apply Filters</button>
          <button onClick={resetFilters}>Reset Filters</button>
        </div>

        <ul>
          {filteredArticles.map(article => (
              <li key={article.id}>
                <strong>{article.title}</strong> <br />
                <small>By Journalist #{article.journalistId} | Category #{article.categoryId}</small><br />
                <button disabled>Delete</button>
                <button disabled>Update</button>
                <button disabled>View</button>
              </li>
          ))}
        </ul>
      </div>
  );
}
