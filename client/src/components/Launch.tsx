import React from 'react';
import {
    useQuery,
    gql
  } from "@apollo/client";
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const LAUNCH_QUERY = gql`
        query Launch($flight_number: Int!){
            launch(id: $flight_number){
                flight_number
                launch_year
                launch_date_local
                launch_success
                mission_name
                rocket{
                    rocket_id
                    rocket_name
                    rocket_type
                }
            }
        }
    `

const Launch: React.FC = (props) => {
    //@ts-ignore
    const {match} = props;
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: {
            flight_number: parseInt(match.params.flight_number)
        }
    });

    if (loading) return (
        <div className='text-center mt-3'>
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
    if (error) return <p>Error !!</p>;
    
    const {
        flight_number,
        launch_year,
        launch_date_local,
        launch_success,
        mission_name,
        rocket:{
            rocket_id,
            rocket_name,
            rocket_type
        }
    } = data.launch

    return (
        <div>
            <h1 className="display-4 my-3">
               <span className='text-dark'> Mission: </span>
                {mission_name}
            </h1>
            <h4 className="mt-5 mb-3">Launch Details</h4>
            <ul className="list-group my-3">
                <li className="list-group-item">Flight Number: {flight_number}</li>
                <li className="list-group-item">Launch Year: {launch_year}</li>
                <li className="list-group-item">Launch Successful: <span className={clsx(launch_success ? 'text-success' : 'text-danger')}>{launch_success ? 'Yes' : 'No'}</span></li>
            </ul>
            <h4 className="mt-5 mb-3">Rocket Details</h4>
            <ul className="list-group my-3">
                <li className="list-group-item">Rocket ID: {rocket_id}</li>
                <li className="list-group-item">Rocket Name: {rocket_name}</li>
                <li className="list-group-item">Rocket Type: {rocket_type}</li>
            </ul>
            <hr />
            <Link to='/' className='btn btn-secondary'>Back</Link>
        </div>
    )
}

export default Launch
