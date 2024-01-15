import { useEffect, useState } from 'react';
import JobSearch from './JobSearch/JobSearch'
import Graph from './Graph'
import { JobApplication } from './JobSearch/columns';

async function getJobApplications(): Promise<JobApplication[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            jobTitle: "Software Developer",
            status: "Applied",
            location: "San Francisco, CA",
            employer: "Google",
            payRate: 120000,
            dateApplied: new Date("2021-01-01"),
            dateFollowUp: new Date("2021-01-01"),
            referred: false,
        },
        // ...
    ]
}

export default function Display({ display }: { display: Boolean }) {
    const [data, setData] = useState<JobApplication[]>([]); // Initialize with an empty array

    useEffect(() => {
        if (display) {
            getJobApplications().then((data) => setData(data));
        }
    }, [display]);

    return (
        <div>
            {display ? <JobSearch data={data} /> : <Graph />}
        </div>
    );
}
