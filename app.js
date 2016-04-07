var express = require('express'),
	config = require('./config'),
	helpers = require('./helpers'),
	schema = require('./schema'),
	db = require('./db'),
	bodyParser = require('body-parser'),
	app = express(),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	swig = require('swig'),
	swigExtras = require('swig-extras'),
	restler = require('restler');

swigExtras.useTag(swig, 'markdown');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views/static'));
app.use(cookieParser());
app.use(session({secret: 'anything', resave: false, saveUninitialized: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view cache', false);
swig.setDefaults({cache: false});

app.locals = {
	authurl: config.auth.authurl,
};

/* GETS */
app.get('*', function(req, res, next) {
	app.locals.loggedin = req.session.name;
	app.locals.ismod = req.session.isMod;
	next();
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/auth/login/', function(req, res) {
	restler.post('https://www.reddit.com/api/v1/access_token', {
		username: config.auth.cid,
		password: config.auth.secret,
		data: {
			code: req.query.code,
			grant_type: 'authorization_code',
			redirect_uri: config.auth.redirect
		}
	}).on('complete', function(data) {
		restler.get('https://oauth.reddit.com/api/v1/me', {
			'headers': {
				'User-Agent': '/r/Twitch Ad Requests',
				'Authorization': 'bearer ' + data.access_token
			}
		}).on('complete', function(finaldata) {
			req.session.name = finaldata.name
			req.session.auth = data.access_token
			req.session.isMod = helpers.isMod(req.session.name)
			res.redirect('/')
		});
	});
});

app.get('/auth/logout', function(req, res) {
	req.session.destroy(function() {
		res.redirect('/');
	});
});

app.get('*', function(req, res, next) {
	if (!app.locals.loggedin) {
		res.render('error', {title: "Unauthorized", body: "You must login to access this page."})
	}
	else {
		next()
	}
});

app.get('/submit/', function(req, res) {
	res.render('submit')
})

app.get('/submit/video/', function(req, res) {
	res.render('submit_video')
})

app.get('/submit/web_tool/', function(req, res) {
	res.render('submit_web_tool')
})

app.get('/submit/desktop_tool', function(req, res) {
	res.render('submit_desktop_tool')
})

app.get('/submit/ama/streamer', function(req, res) {
	res.render('submit_ama_streamer')
})

app.get('/submit/ama/business', function(req, res) {
	res.render('submit_ama_business')
})

app.get('/submit/other/', function(req, res) {
	res.render('submit_other')
})

app.get('*', function(req, res, next) {
	if (helpers.isMod(app.locals.loggedin) == true) {
		next();
	}
	else {
		res.render('error', {title: "Unauthorized", body: "You do not have permission to access this page."})
	}
});

// Posts

// GET 404
app.get('*', function(req, res, next) {
	res.render('error', {title: "Error 404", body: "That page was not found."});
});

var server = app.listen(config.app.port, function() {
	console.log('Listening on: ' + config.app.port);
});
