# Solutions Flow

1. Once the user has submitted their survey answers, iterate through each solution and compare it's "requiredQuestionAnswers" to the user's answers.
1. If answer exists within user answers, but does not within solution's "requiredQuestionAnswers", then assume user answer to be applicable to solution.
1. If all answers are applicable/match the solution's, then append solution to array of solutions (Array of JSONs). 
1. Once all solutions have been checked for relevance, then create each solution as an HTML element.
1. Once all solutions have been created as HTML elements, then render the first solution as HTML (appending it to container within DOM).
1. If next/previous solution is desired, remove HTML solution from container, and append new solution to container.
1. If the user wishes to export the solution, they can print the page using native print to PDF features which are standard in web browsers by now.

Note: There should *never* be a point where a user answers there questions and there isn't a solution ready for them. The only questions that should be ask should exist to filter existing solutions.
