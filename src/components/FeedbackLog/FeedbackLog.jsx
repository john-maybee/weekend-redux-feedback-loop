import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackItem from './FeedbackItem.jsx';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

function FeedbackLog() {
    let [feedbackList, setFeedbackList] = useState([]);

    const history = useHistory(); // useHistory

    // On Load, fetch feedback data from the server
    useEffect(() => {
        console.log('in useEffect')
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            setFeedbackList(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    };


    return (
        <div>
            {
                feedbackList.map(item => (
                    <FeedbackItem key={item.id} feedback={item} />
                    ))
            }
            {/* <button onClick={() => history.push('/step/feeling')} className="button">NEXT</button> */}
        </div>
        
    );
    
}

export default FeedbackLog;