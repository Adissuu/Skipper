import JobSearch from './JobSearch/JobSearch'
import Graph from './Graph'



export default function Display({ display }: { display: Boolean }) {

    return (
        <div>
            {display ? <JobSearch /> : <Graph />}
        </div>
    );
}
