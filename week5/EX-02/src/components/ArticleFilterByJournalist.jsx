import { useEffect, useState } from 'react';
import axios from "axios";

export default function ArticleFilterByJournalist() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [journalists, setJournalists] = useState([]);
  const [selectedJournalist, setSelectedJournalist] = useState('');

  useEffect(() => {
    fetchArticles();
    fetchJournalists();
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

  const fetchJournalists = async () => {
    try {
      const res = await axios.get('http://localhost:4000/journalists');
      setJournalists(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const applyFilters = () => {
    if (selectedJournalist === '') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
          articles.filter(article => article.journalistId === parseInt(selectedJournalist))
      );
    }
  };

  const resetFilters = () => {
    setSelectedJournalist('');
    setFilteredArticles(articles);
  };

  return (
      <div>
        <h2>Articles</h2>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <label htmlFor="journalistFilter">Filter by Journalist:</label>
          <select
              id="journalistFilter"
              value={selectedJournalist}
              onChange={(e) => setSelectedJournalist(e.target.value)}
          >
            <option value="">All Journalists</option>
            {journalists.map(journalist => (
                <option key={journalist.id} value={journalist.id}>
                  {journalist.name || `Journalist #${journalist.id}`}
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
