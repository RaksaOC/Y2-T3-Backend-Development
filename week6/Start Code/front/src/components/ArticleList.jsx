import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getArticles, removeArticle } from "../services/api";

//
// ArticleList component
//

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles(); 
  }, []);

  const fetchArticles = async () => {
    setIsLoading(true);
    setError("");
    try {
      const data = await getArticles();
      setArticles(data);
    } catch {
      setError("Failed to load articles. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteArticle = async (id) => {
    setIsLoading(true);
    setError("");
    try {
      await removeArticle(id);
      await fetchArticles(); // refresh the list
    } catch {
      setError("Failed to delete article.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = (id) => navigate(`/articles/${id}`);

  const handleEdit = (id) => navigate(`/articles/${id}/edit`);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={deleteArticle}
          />
        ))}
      </div>
    </>
  );
}

function ArticleCard({ article, onView, onEdit, onDelete }) {
  const navigate = useNavigate();
  const handleJournalistClick = () => {
    if (article.journalist_id) {
      navigate(`/journalists/${article.journalist_id}/articles`);
    }
  };
  return (
    <div className="article-card">
      <div className="article-title">{article.title}</div>
      <div className="article-author">
        By {article.name ? (
          <span className="journalist-link" style={{ color: 'blue', cursor: 'pointer' }} onClick={handleJournalistClick}>
            {article.name}
          </span>
        ) : (
          article.name
        )}
      </div>
      <div className="article-actions">
        <button className="button-tertiary" onClick={() => onEdit(article.article_id)}>
          Edit
        </button>
        <button
          className="button-tertiary"
          onClick={() => onDelete(article.article_id)}
        >
          Delete
        </button>
        <button className="button-secondary" onClick={() => onView(article.article_id)}>
          View
        </button>
      </div>
    </div>
  );
}