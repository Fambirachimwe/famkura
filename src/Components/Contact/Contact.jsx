import React, { useState } from 'react';
import Mail from '../Mail/Mail';
import "./Contact.css";
import {Phone} from "@material-ui/icons";
import ReactMapGL from "react-map-gl";
import { Marker } from 'react-map-gl';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// -17.815992783975542, 31.007411303002222



const Contact = () => {

    const [viewport, setViewport] = useState({
        latitude: -17.815992783975542,
        longitude: 31.007411303002222,
        width: "inherit",
        height: "inherit",
        zoom: 10
    });

    return (

        <div className="container__main" id="contact">
            <div className="contact">

                
                    <div className="contact__title">
                        <h1>Get in touch</h1>
                    </div>

                    <p className="contact__tag">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo, id gravida pellentesque nisl. Integer
                    </p>

                    <div className="contact__map">

                    <ReactMapGL
                        {...viewport}
                        mapboxApiAccessToken={"pk.eyJ1IjoidHJpenlkZWJvaSIsImEiOiJja3UybHByMTQycnpoMnhxbmt5OG95bGF1In0.KM3Bgm8BO1khwdklluSbHg"}
                        mapStyle="mapbox://styles/trizydeboi/ck6m089y60pik1jo604teefd4"
                        onViewportChange={viewport => {
                            setViewport(viewport);
                        }}
                    >

                        <Marker
                            latitude={-17.815992783975542}
                            longitude={31.007411303002222}

                            // -17.829247385039107, 31.048061942430664
                        >
                            < LocationOnIcon style={{"color": "red", "font-size": "2rem"}} />
                            
                        </Marker> 
                    </ReactMapGL>

                        
                        {/* map here */}
                    </div>

                    <div className="contact__details">
                        <h1>Harare, Zimbabwe </h1>
                        <p>108 Palmer Road Milton Park</p>
                        <p>Harare</p>

                        <h3 className="call">Call Directly</h3>
                        <ul>
                            <li className="phone__item"><Phone/> <p className="phone">+263 782 824 073</p></li>
                            <li className="phone__item"><Phone/> <p className="phone">+263 776 412 771</p></li>
                            <li className="phone__item" ><Phone/> <p className="phone">+263 782 824 073</p></li>
                        </ul>
                        
                        
                        
                    </div>

                    
            </div>

            <Mail />

        </div>
    )
}

export default Contact
