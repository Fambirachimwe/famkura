import React from 'react';
import "./Mail.css";


const Mail = () => {
    return (
        <div className="mail">
            <div className="mail__tile">
                <h1>Send Mail</h1>
            </div>

            <div className="mail__form">
                <div className="row">
                    <label htmlFor="Fullname">Fullname</label>
                    <input type="text" />

                </div>

                <div className="row">
                    <label htmlFor="email">Email</label>
                    <input type="text" />

                </div>

                <div className="row">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="4"></textarea>
                </div>
            </div>

            <button> Send </button>



        </div>
    )
}

export default Mail
