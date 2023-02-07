import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const Feeling = () => {
    const history = useHistory(); // useHistory
    // Step 2: useSelector & useDispatch
    const feeling = useSelector(store => store.feeling); // getter
    const dispatch = useDispatch();

    // Step 4: dispatch
    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
    }

    return (
        <>
            <h3>How are you feeling today?</h3>
            <div>
                {/* Step 3: getter & setter */}
                <input value={feeling} onChange={handleChange} className="input" type="number" />
                <button onClick={() => history.push('/step/two')} className="button">NEXT</button>
            </div>
        </>
    );
}

export default Feeling;