# currentweather-slackbot

Gets the current weather conditions for a given city.

## Architecture
Entire application sits on Heroku. Have a Mongolab db hooked up to take care of Heroku not persisting locally written 
files. Automatic deploy happens every time there is a push to the github repo.Ideally should have some CI tests running 
before the deploy to make sure everything is ok. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing 
purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Will need to have both Node and npm installed. Register for the [OpenWeatherMapAPI](http://openweathermap.org/api) and 
get the API key.Register at Slack, create an application.This will generate a Client ID and Client Secret.


### Installing

Clone the repository to your local machine

```
git clone https://github.com/nirupa-kumar/currentweather-slackbot.git
```
Set the following environment variable:
```
OPEN_WEATHER_API_KEY='abcdefghijkl'
```
Open the root directory and run the following command:
```
npm install
```
Open up a secure http connection to the locally running service by:
```
npm install -g localtunnel
lt --port zzzz --subdomain <botname>
```
Run the application with the following command:
```
CLIENT_ID=xxx.yyy CLIENT_SECRET=abc PORT=zzzz npm start
```
Now, access  https://botname.localtunnel.me/login and authorize your bot. This will need to be done every time you
restart your app. 

## Running the tests

Currently haven’t set up any automation tests. - Needs to be worked on. 

### And coding style tests

Would like to use ESlint & prettier for this 

## Deployment
For deploying locally:
Generate an API key from [OpenWeatherMap](http://openweathermap.org/api) and set the environment variable : 
OPEN_WEATHER_API_KEY
Generate a Client ID and Client Secret token and use that to start the app. 
```
CLIENT_ID=xxx.yyy CLIENT_SECRET=abc PORT=zzzz npm start
```
The complete steps have been detailed at : [Slack bot tutorial](https://api.slack.com/tutorials/easy-peasy-bots)
This app has been deployed on Heroku using the free tier. If you would like to deploy this bot on Heroku, the following 
environment variables will need to be set:
* CLIENT_ID
* CLIENT_SECRET
* MONGOLAB_URI
* OPEN_WEATHER_API_KEY

I used the Heroku add-on MongoLab for the datastore. 
The values have been set as Config Vars.
The [tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs) on the Heroku site was very useful to 
help get things up and running.

## References
* Project has used code from [Slack API easy-peasy-bot](https://github.com/slackapi/easy-peasy-bot)
* Another cool [tutorial](https://medium.com/@vijaysundaram/how-to-build-and-deploy-a-baseline-slack-bot-5c25f306278b) to 
get started.
