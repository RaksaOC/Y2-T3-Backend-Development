import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from "axios";

export default function ArticlePage() {
    const {id} = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Function to fetch article by ID
        const fetchData = async () => {
            try {
                console.log("article id to find:", id)
                const response = await axios.get(`http://localhost:4000/articles/${id}`);
                setArticle(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    if (loading) return <div>Loading article...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!article) return <div>No article found.</div>;

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <div>
                <strong>Journalist ID:</strong> {article.journalistId}
            </div>
            <div>
                <strong>Category ID:</strong> {article.categoryId}
            </div>
        </div>
    );
}