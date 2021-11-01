import React, { useEffect, useState } from "react";
import axios from "axios";

function Hike() {
    const [hike, setHike] = useState([]);

    function getHike() {
        axios.get("http://localhost:5000/api/v1/hikes", { crossdomain: true })
        .then(response => {
            setHike(response.data);
        });
    }

    useEffect(() => {
        getHike();
    }, []);

    return (
        <div class="container">
            <div class="card">
            <img src={hike.imgURL} class="card-img-top" alt="hike"></img>
            <div class="card-body">
                <h3 class="card-title"><a href={hike.wtaLink} target="_blank" rel="noreferrer" class="link-primary">{hike.name}</a></h3>
                <p class="card-text">Region: {hike.region}</p>
                <p class="card-text">Roundtrip Length: {hike.length} mi</p>
                <p class="card-text">Elevation Gain: {hike.gain} ft</p>
                <p class="card-text">Parking Pass: {hike.parkingPass}</p>
                <p class="card-text">My Rating: {hike.rating}/5</p>
                <p class="card-text">My Review: {hike.review}</p>
                <div class="d-grid gap-2">
                    <button type="button" class="btn btn-primary" onClick={getHike}>
                        Show me a random hike
                    </button>
                </div>
                
            </div>
            </div>
        </div>
        
    )
}

export default Hike;