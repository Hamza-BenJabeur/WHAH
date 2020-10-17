const mysql = require("mysql");
const { register } = require("ts-node");
const { user } = require("./config.js");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

let registere = (arr, callback) => {
  console.log("hheheh");
  console.log(arr)
  var sql = `UPDATE students SET firstname = ? , lastname = ? , country = ?, city = ?, address = ?, driving = ?, dateOfBirth = ?, placeOfBirth = ?, nationality = ?, educationlvl = ?,feald = ? , postalcode = ?,dreamJob=?, socialLink = ?, skills = ?, languages = ?, hobbies = ?, profilePic = ?, summery= ? , firstTime = ? WHERE username= ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
 
let registerCompany = (arr, callback) => {
  console.log("hheheh");
  console.log(arr)
  var sql = `UPDATE companies SET email = ? , owner = ? , field = ?, numberOfEmployees = ?, location = ?, website = ?, logo = ?, about = ? WHERE name= ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}
let registerTrainingCenter = (arr, callback) => {
  console.log("hahaha");
  console.log(arr)
  var sql = `UPDATE trainingCenters SET email = ? , owner = ? , trainingOptions = ?, numberOfStudentGraduated = ?, location = ?, website = ?, logo = ?, about = ? WHERE name= ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}


let verificationRequest = (arr, callback) => {
  var sql = "UPDATE students SET verRequest = ?  WHERE username= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}


let verificationRequestCompany = (arr, callback) => {
  var sql = "UPDATE companies SET verRequest = ?  WHERE name= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

let verificationRequestCenter = (arr, callback) => {
  var sql = "UPDATE trainingCenters SET verRequest = ?  WHERE name= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

let verifyStudent = (arr, callback) => {
  var sql = "UPDATE students SET verification = ?  WHERE username= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

let rejectStudent = (arr, callback) => {
  var sql = "UPDATE students SET verRequest = ?  WHERE username= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}
////////////////////////////////////////////

let verifyCompanies = (arr, callback) => {
  var sql = "UPDATE companies SET verification = ?  WHERE name= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

let rejectCompanies = (arr, callback) => {
  var sql = "UPDATE companies SET verRequest = ?  WHERE name= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

/////////////////////////////////////////////////

////////////////////////////////////////////

let verifyCenter = (arr, callback) => {
  var sql = "UPDATE trainingCenters SET verification = ?  WHERE name= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

let rejectCenter = (arr, callback) => {
  var sql = "UPDATE trainingCenters SET verRequest = ?  WHERE name= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

/////////////////////////////////////////////////
const getNonVerifiedStudents = function () {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from students where verification='false' and verRequest='true';`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};


const getNonVerifiedCompany = function () {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from companies where verification='false' and verRequest='true';`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};



const getNonVerifiedCenters = function () {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from trainingCenters where verification='false' and verRequest='true';`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};


const addStudent = (arr, callback) => {
  let sql =
    "insert into students (username ,secretinfo, password, email) values (?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};



const getUserInfo = (username, callback) => {
  let sql = `select password from students where username = ?`;
  connection.query(sql, username, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};

const addCompany = (arr, callback) => {
  let sql = 'insert into companies (name,password) values(?,?)';
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  })
}
const logCompanies = (name, callback) => {
  let sql = `select password from companies where name = ?`;
  connection.query(sql, name, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
}
const addTC = (arr, callback) => {
  let sql = 'insert into trainingCenters (name,password) values(?,?)';
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  })
}
const logTC = (name, callback) => {
  let sql = `select password from trainingCenters where name = ?`;
  connection.query(sql, name, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
}

const getUserStatus = (username, callback) => {
  let sql = `select * from students where username = ?`; 
  connection.query(sql, username, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
}

const getCompanyStatus = (username, callback) => {
  let sql = `select * from companies where name = ?`; 
  connection.query(sql, username, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
}

const getCenterStatus = (username, callback) => {
  let sql = `select * from trainingCenters where name = ?`; 
  connection.query(sql, username, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
}
module.exports = {
  registere,
  verificationRequest,
  getNonVerifiedStudents,
  verifyStudent,
  rejectStudent, 
  registerCompany,
  registerTrainingCenter,
  getNonVerifiedCompany,
  getNonVerifiedCenters,
  verifyCompanies,
  rejectCompanies,
  verifyCenter,
  rejectCenter,
  verificationRequestCompany,
  verificationRequestCenter,
  addStudent,
  getUserInfo,
  addCompany,
  logCompanies,
  addTC,
  logTC,
  getUserStatus,
  getCompanyStatus,
  getCenterStatus
};
