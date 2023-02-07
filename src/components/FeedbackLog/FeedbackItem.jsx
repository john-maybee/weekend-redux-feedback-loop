const FeedbackItem = ({feedback}) => {
    return (
        <div>
            <div>Feeling: {feedback.feeling}</div>
            <div>Understanding: {feedback.understanding}</div>
            <div>Support: {feedback.support}</div>
            <div>Comments: {feedback.comments}</div>
            {/* <button className="button">Delete</button> */}
        </div>
    );
}

export default FeedbackItem;

{/* <div style={{margin: '20px 10px', fontSize: '1.4em'}}> */}