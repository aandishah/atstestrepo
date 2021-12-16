//Add to header

// {
//   "access-control-allow-credentials": "true",
//   "access-control-allow-origin": "*",
//   "connection": "keep-alive",
//   "content-length": "9898",
//   "content-type": "application/json; charset=utf-8",
//   "date": "Mon, 22 Nov 2021 15:20:48 GMT",
//   "etag": "W/\"26aa-S49u9LCZaNLQQy8qPglTUQXBrYo\"",
//   "server": "RapidAPI-1.2.8",
//   "via": "1.1 vegur",
//   "x-powered-by": "Express",
//   "x-rapidapi-region": "AWS - us-east-1",
//   "x-rapidapi-version": "1.2.8"
// }



//Run per country

fetch("https://twitter-trend.p.rapidapi.com/trend/united-states", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "twitter-trend.p.rapidapi.com",
		"x-rapidapi-key": "2d7408301cmshc36e87d99327887p141468jsna99ac1ad3b71"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//Run per over the world

fetch("https://twitter-trend.p.rapidapi.com/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "twitter-trend.p.rapidapi.com",
		"x-rapidapi-key": "2d7408301cmshc36e87d99327887p141468jsna99ac1ad3b71"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
