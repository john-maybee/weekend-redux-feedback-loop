# Project Name

weekend-redux-feedback-loop

## Description

Your project description goes here. What problem did you solve? How did you solve it?

## Notes and Steps

### Notes

- reflection/feedback form 
    - modeled after Primes's system for reflections
- as a base requirement, this must include Redux to store the data across views
- no nav bar

### Steps

SETUP

- [X] create database named 'prime_feedback' and table named 'feedback' 
- [X] npm install
- [X] npm run server
- [X] npm run client

OTHER NEEDED ITEMS

- [X] include Redux to store the data across views
    - [X] install Redux
    - [X] install react-redux
    - [X] install redux-logger

ADD NEW FEEDBACK

- [X] create multi-part form that allows users to leave feedback for today
    - [X] include a FeedbackLog that will hold the FeedbackItem(s) that are going to be returned in the same component
- [X] 4 views for the for parts
    - Parts
        - [X] How are you feeling today?
            - input type: number

        - [X] How well are you understanding the content?
            - input type: number

        - [X] How well are you being supported?
            - input type: number

        - [X] Any comments you want to leave?
            - input type: string/varchar

INPUT VALIDATION:

- [X] NEXT button should make each part of the form be at its own route
    - clicking next should move the user to the appropriate step in the process
    - [X] user only advances to the next step if a score was provided (Input Validation)
        - tell user in some way that a value must be provided
    - [X] make it okay for user to leave the Comments step as an empty value

THE REVIEW COMPONENT

- this last step of the process will allow user to review their feedback
    - [X] user should not be able to change their input on this step (or go back for Base Mode)

SUBMIT THE FEEDBACK

- [X] review step needs to have a SUBMIT (rather than a NEXT) button s
    - this submits the completed feedback to the server when clicked
    - [X] when clicked, save the submission in the database (was working, then I feel like it randomly stopped)
    - [X] user should see a submission success page

THANK YOU LANDING | LEAVE NEW FEEDBACK

- [X] new Thank You page will be displayed on success 
    - [X] can then click the button 'Leave New Feedback' to take a new survey
        - [] this means it will need to reset all the data and go back to the first step (this is the step I was struggling with and broke the submission)


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
