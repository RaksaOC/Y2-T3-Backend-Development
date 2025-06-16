import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesByJournalist } from "../services/api";

export default function JournalistArticles() {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [journalist, setJournalist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line
  }, [id]);

  const fetchArticles = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getArticlesByJournalist(id);
      setArticles(data);
      if (data.length > 0) {
        setJournalist({
          name: data[0].journalist_name,
          email: data[0].journalist_email,
          bio: data[0].journalist_bio,
        });
      } else {
        setJournalist(null);
      }
    } catch {
      setError("Failed to load articles for this journalist.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
        <h1>{journalist.name}</h1>
      {/* <h2>{journalist ? journalist.name : "Journalist"}</h2>
      {journalist && (
        <div style={{ marginBottom: 16 }}>
          <div><strong>Email:</strong> {journalist.email}</div>
          <div><strong>Bio:</strong> {journalist.bio}</div>
        </div>
      )} */}
      {/* <h3>Articles by {journalist ? journalist.name : "this journalist"}:</h3> */}
      <div className="article-list">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-title">{article.title}</div>
            <div className="article-actions">
              <button className="button-secondary" onClick={() => navigate(`/articles/${article.id}`)}>
                View
              </button>
            </div>
          </div>
        ))}
        {articles.length === 0 && <div>No articles found.</div>}
      </div>
    </div>
  );
}