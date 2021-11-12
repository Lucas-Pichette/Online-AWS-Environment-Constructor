# Survey Details

The survey should flow as follows:

1. Base/"trunk"-level questions are rendered for the user.
2. If the user is ready to submit an answer for a question, they must click a button of some kind. 
    1. Once answer-submit button is pressed, a short "answer" JSON is appended to an initially empty Array of JSONs.
4. Once a base-level question is answered, check if it has sub/"leaf"-questions.
    1. If the question has sub-questions, iterate through sub-questions.
        1. If sub-question has "answerToQuestion" relation that equates to just-answered question id, display sub-question.
    1. If the question does not have sub-questions, ignore.
5. Repeat steps 2-3 (and sub-steps) until all questions are answered.
6. If all questions are answered, modify styling of "submit" button and enable the user to be able to use it to submit the questions.
