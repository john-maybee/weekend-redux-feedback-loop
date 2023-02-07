import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FeedbackLog from '../FeedbackLog/FeedbackLog';

const Review = () => {
    const history = useHistory(); // useHistory
    const feedback = useSelector(store => store);
    const dispatch = useDispatch();

    const submitFeedback = (event) => {
        event.preventDefault();
        // console.log('Adding feedback', feedback);
        axios.post('/feedback', feedback)
        .then(response => {
            console.log('successful post', response);
            dispatch({ type: 'ADD_FEEDBACK', payload: feedback });
        })
        .catch(error => {
            console.log('error posting feedback', error);
        });
        history.push('/step/Thank');
    } // attempted to reset the feedback values here, but thinking this is how it would be done in each individual component.
   

    return (
        <>
            <div>
                <h3>Review Your Feedback</h3>
                <div>Feelings: {feedback.feeling}</div>
                <div>Understanding: {feedback.understanding}</div>
                <div>Support: {feedback.support}</div>
                <div>Comments: {feedback.comments}</div>
                {/* <FeedbackLog /> */}
                <button type="submit" className="button" onClick={submitFeedback}>Submit</button>
            </div>
        </>
    );
}

export default Review;