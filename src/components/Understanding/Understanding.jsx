import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const Understanding = () => {
    const history = useHistory(); // useHistory
    // Step 2: useSelector & useDispatch
    const understanding = useSelector(store => store.understanding); // getter
    const dispatch = useDispatch();

    // Step 4: dispatch
    const handleChange = (event) => {
        event.preventDefault();
        // Pass the data to our reducer
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value });
    }

    return (
        <>
            <h3>How well are you understanding the content?</h3>
            <div>
                {/* Step 3: getter & setter */}
                <input value={understanding} onChange={handleChange} className="input" type="number" />
                <button onClick={() => history.push('/step/support')} className="button">NEXT</button>
            </div>
        </>
    );
}

export default Understanding;