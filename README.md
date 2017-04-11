# IMDB

## Description
This is an app that allows a user to search a movie by title. All movies that contain that title will display with the plot, and the rating.

## API
This app reaches out to the omdb api, which stores all the information about these movies.

## Code
The backend of this app is rails, but the front end of this app uses react. 
Whenever a user enters a title the front end reaches out to rails, which then goes to the api to grab the information, and then sends it back to react to dispay back to the users.
