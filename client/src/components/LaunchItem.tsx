import React from 'react';
import moment from 'moment';

export interface ILaunch{
    flight_number: number
    launch_date_local: string
    launch_success: boolean
    mission_name: string
}

export interface ILaunchItem{
    launch: ILaunch
}

const LaunchItem: React.FC<ILaunchItem> = (props) => {
    const { launch } = props;
    return (
        <div className='card card-body mb-3'>
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission: <span className={launch?.['launch_success'] ? 'text-success' : 'text-danger'}>{launch.mission_name}</span></h4>
                    <p>Date: {moment(launch.launch_date_local).format('DD-mm-YYYY')}</p>
                </div>
                <div className="col-md-3 text-end m-auto">
                    <button className='btn btn-secondary'>Launch Details</button>
                </div>
            </div>
        </div>
    )
}

export default LaunchItem
