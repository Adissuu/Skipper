import { useEffect, useState } from "react";
import { JobApplication, columns } from "./columns"
import { DataTable } from "./data-table"

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
        {
            id: "728ed52b",
            jobTitle: "Software Engineer",
            status: "Online Assesment",
            location: "New York City, NY",
            employer: "Meta",
            payRate: 110000,
            dateApplied: new Date("2022-01-01"),
            dateFollowUp: new Date("2022-01-07"),
            referred: true,
        },
        // ...
    ]
}

export default function JobSearch() {
    const [data, setData] = useState<JobApplication[]>([]); // Initialize with an empty array

    useEffect(() => {
        getJobApplications().then((data) => setData(data));
    }, []);


    return (
        <div className="container mx-auto py-10">
            <button type="button" className="p-2 bg-green-500 rounded-md mb-2" onClick={() => console.log("add a new app")}>Add new application</button>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
