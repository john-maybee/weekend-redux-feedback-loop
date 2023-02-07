import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const Comments = () => {
    const history = useHistory(); // useHistory
    // Step 2: useSelector & useDispatch
    const comments = useSelector(store => store.comments); // getter
    const dispatch = useDispatch();

    // Step 4: dispatch
    const handleChange = (event) => {
        // event.preventDefault(); This step it says to make it so we can have a blank field. Therefore, the preventDefault has been removed.
        // Pass the data to our reducer
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }

    return (
        <>
            <h3>Any Comments you want to leave?</h3>
            <div>
                {/* Step 3: getter & setter */}
                <input value={comments} onChange={handleChange} className="input" type="text" />
                <button onClick={() => history.push('/step/Review')} className="button">NEXT</button>
            </div>
        </>
    );
}

export default Comments;