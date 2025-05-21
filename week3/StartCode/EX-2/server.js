// server.js
import express from 'express';
import courses from "./course.js";
import {auth, logger, validateQuery} from "./middleware.js";
const app = express();
const PORT = 3010;


app.use(express.json());
app.use(logger);
app.use(validateQuery)

// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', (req, res) => {
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria
    const { dept } = req.params;
    let { level, minCredits, maxCredits, semester, instructor } = req.query;

    let filtered = courses.filter(course => course.department === dept);
    if (level) filtered = filtered.filter(c => c.level === level);
    if (semester) filtered = filtered.filter(c => c.semester === semester);
    if (minCredits) filtered = filtered.filter(c => c.credits >= parseInt(minCredits));
    if (maxCredits) filtered = filtered.filter(c => c.credits <= parseInt(maxCredits));
    if (instructor) filtered = filtered.filter(c => c.instructor.toLowerCase().includes(instructor.toLowerCase()));

    res.json(filtered);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
