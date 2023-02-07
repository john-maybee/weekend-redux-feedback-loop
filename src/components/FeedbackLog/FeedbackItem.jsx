const FeedbackItem = ({feedback}) => {
    return (
        <div>
            <div>Feeling: {feedback.feeling}</div>
            <div>Type of activity: {feedback.understanding}</div>
            <div>Minutes: {feedback.support}</div>
            <div>Miles: {feedback.comments}</div>
            {/* <button className="button">Delete</button> */}
        </div>
    );
}

export default FeedbackItem;

{/* <div style={{margin: '20px 10px', fontSize: '1.4em'}}> */}