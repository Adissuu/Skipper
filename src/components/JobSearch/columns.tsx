"use client"
import { ColumnDef } from "@tanstack/react-table"

export type JobApplication = {
    id: string
    jobTitle: string
    status: "Applied" | "Referred" | "Online Assesment" | "Follow-up" | "Interview" | "Offer"
    location: string
    employer: string
    payRate: number
    dateApplied: Date
    dateFollowUp: Date
    referred: boolean
}


export const columns: ColumnDef<JobApplication>[] = [
    {
        accessorKey: 'jobTitle',
        header: 'Job Title',
    },
    {
        accessorKey: 'status',
        header: 'Status',
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
    },
    {
        accessorKey: 'dateFollowUp',
        header: 'Date Follow Up',
    },
    {
        accessorKey: 'referred',
        header: 'Referred',
    },

]
