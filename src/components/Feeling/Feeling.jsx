import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const Feeling = () => {
    const history = useHistory(); // useHistory
    // Step 2: useSelector & useDispatch
    const feeling = useSelector(store => store.feeling); // getter
    const dispatch = useDispatch();
    // const [feeling, setFeeling] = useState('');

    // Step 4: dispatch
    const handleChange = (event) => {
        event.preventDefault();
        // Pass the data to our reducer
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
        // setFeeling('');
    }

    return (
        <>
            <h3>How are you feeling today?</h3>
            <div>
                {/* Step 3: getter & setter */}
                <input value={feeling} onChange={handleChange} id="myinput" className="input" type="number" />
                <button onClick={() => history.push('/step/understanding')} className="button">NEXT</button>
            </div>
        </>
    );
}

export default Feeling;

// document.getElementById('myInput').value='' 