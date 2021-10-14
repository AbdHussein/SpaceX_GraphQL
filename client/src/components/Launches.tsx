import {
    useQuery,
    gql
  } from "@apollo/client";
import LaunchItem from './LaunchItem';
import MissionKey from "./MissionKey";

  const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches{
            flight_number
            launch_date_local
            launch_success
            mission_name
        }
    }
  `;

const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading) return (
    <div className='text-center mt-3'>
        <div className="spinner-border" role="status"><span className="sr-only"></span></div>
    </div>);
    if (error) return <p>Error !!</p>;
    
    return (
        <div>
            <h1 className='display-4 my-3'>Launches</h1>
            <MissionKey/>
            {
                data.launches.map((launch: object) => {
                    //@ts-ignore
                    return <LaunchItem key={launch.flight_number} launch={launch}/>
                })
            }
        </div>
    )
}

export default Launches;