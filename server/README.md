# API
Api to be utilized by mobile application as test data set.

### To Run API from current directory
1. `npm install`
1. `npm start`

### Routes

#### Get Achievements
GET /v1/achievements
Retrieves a list of achievements and their associated progress. Additionally contains a list of activities that are recommended to be completed to achieve the achievement.

#### Complete Activity
GET /v1/activities/:id/complete
Marks an activity as complete and returns a list of updated achievements with their new progress values.