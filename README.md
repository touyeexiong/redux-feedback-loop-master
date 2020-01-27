# Project Name
Redux Feeback Loop

## Description
Duration: 2 Days

This assignment reproduced a similar feedback form we have at Prime Digital Academy. The goal was to create a full stack feedback form where the data gathered through redux can be pushed and saved in a database.

## Prequisites
Software required to install the app:
- Node.js
- react
- react-dom
- react-redux
- react-router-dom
- pg
- axios
- redux

## Installation
1. Create a database name 'prime_feedback'.
2. The queries in the data.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly.The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open the editor of your choice and run npm install
4. Run npm run server in your terminal
5. Run npm run client in  your terminal
6. The npm run client command will open up a new browser tab for you!

## Usage
1. Once the server and client are running, the feedback form will begin starting with 'How are you feeling today?'
2. The user inputs a number from 1-10 on how they're feeling. If the number is left blank or is rated below 1, an alert will tell the user an input needs to be put in before moving to the next step.
3. Once the correct rating is put in, hitting next will take the user to the next question regarding their understanding of content.
4. This process is the same until the comments page is loaded. In here, the user can submit any additional comments they may have. This comment input is not required and there are no alerts if left blank.
5. After hitting next on the comments page, the user moves onto the review page. Here, they can look over their submission for each part of the feedback form and submit their responses.Upon submission, the user's feedback is recorded and sent to the database.
6. After submission, they'll be taken to a confirmation page and can press the 'Leave New Feedback' button to return to the beginning of the form. This also emptys all previous entries for the user and restarts with a clean slate at the beginning of the form.

## Built With
- JavaScript
- React
- Redux
- PostgreSQL

## Acknowledgement
Thanks to Prime Digital Academy in Minneapolis who equipped and helped me to make this application a reality.

## Support
If you have any suggestins or issues, please email me at touyeexiong@gmail.com