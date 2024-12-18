import React, { useEffect, useState } from 'react';

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch('http://localhost:5000/jobs');
            const data = await response.json();
            setJobs(data);
        };

        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                        <p><strong>Category:</strong> {job.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobList;