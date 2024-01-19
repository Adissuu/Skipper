import { JobApplication, columns } from "./columns"
import { DataTable } from "./data-table"


export default function JobSearch({ data }: { data: JobApplication[] }) {
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
