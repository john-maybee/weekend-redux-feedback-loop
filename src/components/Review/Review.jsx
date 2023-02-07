import axios from 'axios';
import { useSelector } from "react-redux";

const Review = () => {
    const feedback = useSelector(store => store);

    const handleSubmit = (event) => {
        axios.post('/feedback', feedback)
        .then(response => {
            console.log('successful post', response);
        })
        .catch(error => {
            console.log('error posting feedback', error);
        });
    }
   

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <h3>Review Your Feedback</h3>
                <div>Feelings: {feedback.feeling}</div>
                <div>Understanding: {feedback.understanding}</div>
                <div>Support: {feedback.support}</div>
                <div>Comments: {feedback.comments}</div>
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    );
}

export default Review;