"use client"
import JobSearch from './JobSearch'
import Graph from './Graph'

export default function Display({ display }: { display: Boolean }) {

    return (
        <div className="">
            {display ? <JobSearch /> : <Graph />}
        </div>
    )
}
