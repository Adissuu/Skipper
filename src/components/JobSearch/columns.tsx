"use client"
import { ColumnDef } from "@tanstack/react-table"

export type JobApplication = {
    id: string
    jobTitle: string
    status: "Applied" | "Referred" | "Online Assesment" | "Follow-up" | "Interview" | "Offer" | "Rejected"
    location: string
    employer: string
    payRate: number
    dateApplied: Date
    dateFollowUp: Date
    referred: boolean
}

function formatDate(date: Date) {
    return date.toLocaleDateString()
}

export const columns: ColumnDef<JobApplication>[] = [
    {
        accessorKey: 'status',
        header: 'Status',
    },
    {
        accessorKey: 'jobTitle',
        header: 'Job Title',
    },
    {
        accessorKey: 'location',
        header: 'Location',
    },
    {
        accessorKey: 'employer',
        header: 'Employer',
    },
    {
        accessorKey: 'payRate',
        header: 'Pay Rate',
    },
    {
        accessorKey: 'dateApplied',
        header: 'Date Applied',
        cell: ({ row }) => {
            return <span>{formatDate(row.getValue("dateApplied"))}</span>;
        }

    },
    {
        accessorKey: 'dateFollowUp',
        header: 'Date Follow Up',
        cell: ({ row }) => {
            return <span>{formatDate(row.getValue("dateFollowUp"))}</span>;
        }
    },
    {
        accessorKey: 'referred',
        header: 'Referred',
    },

]
