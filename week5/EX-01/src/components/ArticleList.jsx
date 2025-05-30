import {useEffect, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {useNavigate} from "react-router";
import axios from "axios";

export default function ArticleList() {
    const [articles, setArticles] = useState([]);
    const navigator = useNavigate();
    // Fetch all articles when component mounts
    const fetchArticles = async () => {
        // Fetch articles from the API
        try {
            await axios.get('http://localhost:4000/articles')
                .then(res => setArticles(res.data))
                .catch(err => console.error('Error:', err));


        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);


    const deleteArticle = async (id) => {
        // Delete an article by ID
        try {
            const response = await axios.delete(`http://localhost:4000/articles/${id}`);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {/* Navigation Links */}
            <nav style={{marginBottom: '20px'}}>
                <Link to="/" style={{marginRight: '10px'}}>📄 View Articles</Link>
                <Link to="/add"> ➕ Add Article</Link>
            </nav>

            <h2>Articles</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <strong>{article.id}</strong> <br/>
                        <strong>{article.title}</strong> <br/>
                        <small>By Journalist #{article.journalistId} | Category #{article.categoryId}</small><br/>
                        <button onClick={() => {
                            // Navigate to view article details with article ID /articles/${article.id}
                            deleteArticle(article.id);
                        }}>Delete
                        </button>
                        <button onClick={() => {
                            // Navigate to update article form with article ID /articles/update/${article.id}
                            navigator(`/update/${article.id}`)
                        }}>Update
                        </button>
                        <button onClick={() => {
                            // Navigate to view article details with article ID /articles/${article.id}
                            navigator(`/articles/${article.id}`)
                        }}>View
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}