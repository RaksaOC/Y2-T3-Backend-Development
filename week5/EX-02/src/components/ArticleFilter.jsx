import {useEffect, useState} from 'react';
import axios from "axios";

export default function ArticleFilter() {
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [journalists, setJournalists] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedJournalist, setSelectedJournalist] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetchArticles();
        fetchJournalists();
        fetchCategories();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await axios.get('http://localhost:4000/articles');
            setArticles(response.data);
            setFilteredArticles(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchJournalists = async () => {
        try {
            const response = await axios.get('http://localhost:4000/journalists');
            setJournalists(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:4000/categories');
            setCategories(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const applyFilters = () => {
        let filtered = articles;

        if (selectedJournalist) {
            filtered = filtered.filter(article => article.journalistId === parseInt(selectedJournalist));
        }

        if (selectedCategory) {
            filtered = filtered.filter(article => article.categoryId === parseInt(selectedCategory));
        }

        setFilteredArticles(filtered);
    };

    const resetFilters = () => {
        setSelectedJournalist('');
        setSelectedCategory('');
        setFilteredArticles(articles);
    };

    return (
        <div>
            <h2>Articles</h2>
            <div style={{marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center'}}>
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
                        <strong>{article.title}</strong> <br/>
                        <small>By Journalist #{article.journalistId} | Category #{article.categoryId}</small><br/>
                        <button>Delete</button>
                        <button>Update</button>
                        <button>View</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
