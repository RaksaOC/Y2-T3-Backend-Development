import {useState} from 'react';
import {Routes, Route, Link} from 'react-router';
import axios from "axios";

export default function ArticleForm() {
    const [form, setForm] = useState({
        title: '',
        content: '',
        journalistId: '',
        categoryId: '',
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate form data
        if (!form.title || !form.content || !form.journalistId || !form.categoryId) {
            alert("Please enter a valid title");
        }
        try {
            const response = await axios.post("http://localhost:4000/articles", {
                ...form,
                id: Math.random().toString(36)
            });
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
            <form onSubmit={handleSubmit}>
                <h3>Add New Article</h3>
                <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required/><br/>
                <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content"
                          required/><br/>
                <input name="journalistId" value={form.journalistId} onChange={handleChange} placeholder="Journalist ID"
                       required/><br/>
                <input name="categoryId" value={form.categoryId} onChange={handleChange} placeholder="Category ID"
                       required/><br/>
                <button type="submit">Add</button>
            </form>

        </div>
    );
}
