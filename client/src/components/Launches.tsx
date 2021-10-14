import {
    useQuery,
    gql
  } from "@apollo/client";
import LaunchItem from './LaunchItem'

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error !!</p>;
    
    return (
        <div>
            <h1 className='display-4 my-3'>Launches</h1>
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