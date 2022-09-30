const helmet = require("helmet");
// we can set the expiration time of the HTTPS request we can set to one month which is specified in milliseconds

const reqDuration = 2629746000;

app.use(
	helmet.hsts({
		maxage: reqDuraiton,
	})
)
