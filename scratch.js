controller.hears(['weather in (.*)', '(.*) weather'], 'direct_message,direct_mention,mention', function(bot,message) {
    var city = message.match[1];
    console.log("cityity);
    if(undefined === city || '' === city || null === city)
    {
        bot.reply(message,"Are'tot the city name? I am really sorry, currently I can't guess your city.");
    }
    else{
        var options = {
            protocol : 'http:',
            host : 'api.openweathermap.org',
            path : '/data/2.5/weather?q='+city+'&appid=<your_api_key>',
            port : 80,
            method : 'GET'
        }

        var request = http.request(options, function(response){
            var body = "";
            response.on('dataunction(data) {
            body += data;
            weather = JSON.parse(body);
            console.log("weather weather.weather[0].main);
            bot.reply(message, "Its " + weather.weather[0].main + " in " + city);
            var reaction = "";
            switch(weather.weather[0].main)
            {
                case "Clear":
                    reaction = "mostly_sunny";
                    bot.reply(message,":"+reaction                             bot.reply(message,"Its idea to wear sunglasses before going out");
                    break;
                case "Clouds":
                case "Cloud":
                    reaction = "cloud";
                    bot.reply(message,":"+reaction                             break;
                case "Smoke":
                    reaction = "smoking";
                    bot.reply(message,":"+reaction                             break;
                case "Rain":
                    reaction = "rain_cloud";
                    bot.reply(message,":"+reaction                             bot.reply(message,"Pleasey umbrella if you are in " + city);
                    break;
                case "Thunderstorm":
                    reaction = "thunder_cloud_and_rain";
                    bot.reply(message,":"+reaction                             bot.reply(message,"Pleaset go out if you are in " + city);
                    break;
            }
            bot.api.reactions.add({
                timestamp: message.ts,
                channel: message.channel,
                name: reaction,
            }, function(err, res) {
                if (err) {
                    bot.botkit.log('Failedadd emoji reaction :(', err);
                }
            });
        });
        response.on('endunction() {
        /*res.send(JSON.parse(body));*/
    });
});
request.on('errorunction(e) {
console.log('Problemh request: ' + e.message);
bot.reply(message, "sorry, couldn't find weather info for city " + city);
});
request.end();
}
})