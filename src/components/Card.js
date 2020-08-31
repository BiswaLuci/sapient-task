import React from 'react'

const Card = ({data}) => {
    return (
        <div className="card" >
            <img src={data.links.mission_patch} className="card-image" alt="product" title={data.title} />
            <h3 className="card-title">{data.mission_name}</h3>
            <h5 className="card-title">mission id:{data.mission_name}</h5>
            <h5 className="card-title">launch-year:{data.launch_year}</h5>
            <h5 className="card-title">sucessful lunch:{data.launch_success.toString()}</h5>
            <h5 className="card-title">sucessful land:{data.rocket.first_stage.cores[0].land_success===null ?"":data.rocket.first_stage.cores[0].land_success.toString()}</h5>
            
            
           
        </div>
    )
}

export default Card;
