// import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

const Thank = () => {
    // const feedback = useSelector(store => store);
    const history = useHistory();
    

    // function handleSubmit() {
    //     if (feedback != ''){
    //         feedback.reset();
    //         feedback = ''; 
    //     }
    // }
   

    return (
        <>
            <div>
                    <h3>Thank you!</h3>
                    <button type="submit" className="button" onClick={() => history.push('/')}>Leave New Feedback</button>
            </div>
        </>
    );
} // tried to do a handleSubmit() within the form but i deleted it when I commented out feedback const

export default Thank;