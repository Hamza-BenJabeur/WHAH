const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');
const db = require("./db/database.js")
app.use(express.static('dist/education'))
  , passport = require('passport')
FacebookStrategy = require('passport-facebook').Strategy
  , GoogleStrategy = require('passport-google-oauth20').Strategy
  , session = require('express-session')
  , cookieParser = require('cookie-parser')
const cors = require("cors");
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});
passport.use(new FacebookStrategy({
  clientID: "829060237851050",
  clientSecret: "89f86eabb52b60c3dd7c9fa979e34c21",
  callbackURL: "http://localhost:3000/auth/facebook/callback"
},
  function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));
passport.use(new GoogleStrategy({
  clientID: "583612049652-9tp960vtbndjj4v11d9c9ll3b2d0hmma.apps.googleusercontent.com",
  clientSecret: "0toNpI6EJUXp3jC5IsmcMMAr",
  callbackURL: "http://localhost:3000/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));
app.get('/', function (req, res) {
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account', { user: req.user });
});
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

app.get('/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/failed' }),
  function (req, res) {
    // Successful authentication, redirect home.
    var arr = [req.user.displayName]
    db.save(arr, (err, data) => {
      err ? console.log(err) : res.send('/');
    })
    // res.redirect('/');
    // res.send(req.user);
  }
);
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    // res.redirect('/');
    res.send(req.user);
  });


app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
///////////////////////// Rgistration sTUDENT //////////////////////////////
app.post("/api/users/registration", (req, res) => {
  console.log("this is consol =>>>", req.body)
  var registerArray = [
    req.body.name,
    req.body.last,
    req.body.country,
    req.body.city,
    req.body.address,
    req.body.licence,
    req.body.dateOfBirth,
    req.body.placeOfBirth,
    req.body.nationality,
    req.body.educationlvl,
    req.body.field,
    req.body.postalcode,
    req.body.dreamJob,
    req.body.facebook,
    req.body.skills,
    req.body.languages,
    req.body.hobbies,
    req.body.image,
    req.body.summary,
    "false",
    req.body.username,

  ]
  db.registere(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})

//////////////////////// Registration COMPANY ////////////////////////////////////////// 

app.post("/api/users/registerCompany", (req, res) => {
  console.log("this is consol =>>>", req.body)
  var registerArray = [
    req.body.email,
    req.body.owner,
    req.body.field,
    req.body.numberOfEmployee,
    req.body.location,
    req.body.website,
    req.body.logo,
    req.body.about,
    req.body.name
  ]
  db.registerCompany(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})

////////////////////////////// Registration TRAINING CENTER /////////////////////////////////////

app.post("/api/users/registerTrainingCenter", (req, res) => {
  console.log("this is consol =>>>", req.body)
  var registerArray = [
    req.body.email,
    req.body.owner,
    req.body.trainingOptions,
    req.body.numberOfStudent,
    req.body.location,
    req.body.website,
    req.body.logo,
    req.body.about,
    req.body.name
  ]
  db.registerTrainingCenter(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})

////////////////////////////// waiting for validation ///////////////////////////
app.post('/api/users/sendVerificationRequest', (req, res) => {
  var array = [
    'true',
    req.body.username
  ]
  db.verificationRequest(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})
////////////////////////////// waiting for validation company ///////////////////////////
app.post('/api/users/sendVerificationRequestCompany', (req, res) => {
  var array = [
    'true',
    req.body.name
  ]
  db.verificationRequestCompany(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})
////////////////////////////// waiting for validation center ///////////////////////////
app.post('/api/users/sendVerificationRequestCenter', (req, res) => {
  var array = [
    'true',
    req.body.name
  ]
  db.verificationRequestCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})
//////////////////// Admin Side : Student Verification //////////////////
app.post('/api/users/verifyStudent', (req, res) => {
  var array = [
    'true',
    req.body.username
  ]
  db.verifyStudent(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})

app.post('/api/users/rejectStudent', (req, res) => {
  var array = [
    'false',
    req.body.username
  ]
  db.rejectStudent(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})
////////////////////////// Admin Side : Company Verififcation //////////////////////////////
app.post('/api/users/verifyCompanies', (req, res) => {
  var array = [
    'true',
    req.body.name
  ]
  db.verifyCompanies(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})

app.post('/api/users/rejectCompanies', (req, res) => {
  var array = [
    'false',
    req.body.name
  ]
  db.rejectCompanies(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})
////////////////////////// Admin Side :Training Center /////////////////////////////////

app.post('/api/users/verifyCenter', (req, res) => {
  var array = [
    'true',
    req.body.name
  ]
  db.verifyCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})

app.post('/api/users/rejectCenter', (req, res) => {
  var array = [
    'false',
    req.body.name
  ]
  db.rejectCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})
//////////////////////////////////////////////////////////////////////////////

app.get('/api/users/getNonVerifiedStudents', async (req, res) => {
  try {
    const requests = await db.getNonVerifiedStudents();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
})



app.get('/api/users/getNonVerifiedCompanies', async (req, res) => {
  try {
    const requests = await db.getNonVerifiedCompany();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
})

app.get('/api/users/getNonVerifiedCenters', async (req, res) => {
  try {
    const requests = await db.getNonVerifiedCenters();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
})


app.post('/api/users/getUsersatate', (req, res) => {
  console.log(req.body)
  db.getUserStatus(req.body.username, (err, data) => {
    if (err) throw err
    res.status(200).send(data);
  });
})


app.post('/api/users/getCompanysatate', (req, res) => {
  console.log(req.body)
  db.getCompanyStatus(req.body.name, (err, data) => {
    if (err) throw err
    res.status(200).send(data);
  });
})

app.post('/api/users/getCentersatate', (req, res) => {
  console.log(req.body)
  db.getCenterStatus(req.body.name, (err, data) => {
    if (err) throw err
    res.status(200).send(data);
  });
})


const jwt = require("jsonwebtoken");


const hash = (pass) => bcrypt.hashSync(pass, 10)

app.post("/addStudents", (req, res) => {
  console.log(req.body)
  var arr = [
    req.body.username, req.body.secretinfo, hash(req.body.password),
    req.body.email
  ];
  db.addStudent(arr, (err, data) => {
    if (err)
      throw err;

    res.send(`${req.body.username
      } added succsesfully`);
  });
});


app.post("/login", (req, res) => {
  db.getUserInfo(req.body.username, (err, data) => {
    if (err)
      throw err;

    console.log(data[0].password)
    var boolean = bcrypt.compareSync(req.body.password, data[0].password)
    var obj = {
      username: req.body.username,
      password: data[0].password
    }
    boolean ? jwt.sign({
      obj
    }, 'privatekey', {
      expiresIn: "1h"
    }, (err, token) => {
      err ? console.log(err) : res.status(200).json({ token: token });
    }) : res.send({ err })


  });
});
app.post('/addCompany', (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addCompany(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  })
})
app.post("/loginCompanies", (req, res) => {
  db.logCompanies(req.body.name, (err, data) => {
    if (err)
      throw err;

    console.log(data[0].password)
    var boolean = bcrypt.compareSync(req.body.password, data[0].password)
    var obj = {
      name: req.body.name,
      password: data[0].password
    }
    boolean ? jwt.sign({
      obj
    }, 'privatekey', {
      expiresIn: "1h"
    }, (err, token) => {
      err ? console.log(err) : res.status(200).json({ token: token });
    }) : res.send({ err })


  });
});
app.post('/addTC', (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addTC(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  })
});
app.post("/loginTC", (req, res) => {
  db.logTC(req.body.name, (err, data) => {
    if (err)
      throw err;

    console.log(data[0].password)
    var boolean = bcrypt.compareSync(req.body.password, data[0].password)
    var obj = {
      name: req.body.name,
      password: data[0].password
    }
    boolean ? jwt.sign({
      obj
    }, 'privatekey', {
      expiresIn: "1h"
    }, (err, token) => {
      err ? console.log(err) : res.status(200).json({ token: token });
    }) : res.send({ err })


  });
});

app.listen(port, () => console.log(`server is listening on port ${port}`));



