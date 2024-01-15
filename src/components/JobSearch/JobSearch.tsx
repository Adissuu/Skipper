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
        // ...
    ]
}

export default function JobSearch({ data }: { data: JobApplication[] }) {
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
