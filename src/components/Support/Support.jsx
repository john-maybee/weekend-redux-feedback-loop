import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const Support = () => {
    const history = useHistory(); // useHistory
    // Step 2: useSelector & useDispatch
    const support = useSelector(store => store.support); // getter
    const dispatch = useDispatch();

    // Step 4: dispatch
    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    }

    return (
        <>
            <h3>How well are you being supported?</h3>
            <div>
                {/* Step 3: getter & setter */}
                <input value={support} onChange={handleChange} className="input" type="number" />
                <button onClick={() => history.push('/step/comments')} className="button">NEXT</button>
            </div>
        </>
    );
}

export default Support;