import {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";

export default function UpdateArticleForm() {
    const {id} = useParams();
    const [form, setForm] = useState({
        title: '',
        content: '',
        journalistId: '',
        categoryId: '',
    });


    // Fetch to prefill a form and update an existing article
    useEffect(() => {
        const fetch = async () => {
            await axios.get(`http://localhost:4000/articles/${id}`).then((response) => {
                setForm({
                    title: response.data.title,
                    content: response.data.content,
                    journalistId: response.data.journalistId,
                    categoryId: response.data.categoryId,
                });
            }).catch((error) => {
                console.log(error);
            });
        }
        fetch();
    }, []);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.put(`http://localhost:4000/articles/${id}`, {
                    title: form.title,
                    content: form.content,
                    journalistId: form.journalistId,
                    categoryId: form.categoryId,
                });
                console.log(response);
            } catch
                (err) {
                console.log(err);
            }
        }
    ;

    return (
        <form onSubmit={handleSubmit}>
            <h3>Update Article</h3>
            <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required/><br/>
            <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content"
                      required/><br/>
            <input name="journalistId" value={form.journalistId} onChange={handleChange} placeholder="Journalist ID"
                   required/><br/>
            <input name="categoryId" value={form.categoryId} onChange={handleChange} placeholder="Category ID"
                   required/><br/>
            <button type="submit">Update</button>
        </form>
    );
}
