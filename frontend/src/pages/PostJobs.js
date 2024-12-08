function PostJob() {
    const [jobData, setJobData] = useState({ title: '', description: '', category: '', user_id: 1 });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setJobData({ ...jobData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jobData),
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Job Title" onChange={handleChange} />
                <textarea name="description" placeholder="Description" onChange={handleChange} />
                <input name="category" placeholder="Category" onChange={handleChange} />
                <button type="submit">Post Job</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}