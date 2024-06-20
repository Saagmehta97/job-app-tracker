const db = require('../models/userModels');

// SELECT a.app_id, a.company, a.role, a.user_id, a.status From applications a INNER JOIN users ON a.user_id = users.id
// {"company": "Google", "date_applied": 06/25/2024 , "role": "CEO", "status": "Applied"}
const applicationController = {};

applicationController.createApp = (req, res, next) => {
  const user_id = 2;
  const { companyName, dateApplied, role, appStatus } = req.body;

  const params = [companyName, dateApplied, role, appStatus, user_id];
  console.log('inside createApp');
  const query = `INSERT INTO applications (company, date_applied, role, status, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  db.query(query, params)
    .then((createdApp) => {
      console.log('Hi from createApp method');
      res.locals.createdApp = createdApp.rows[0];
      console.log('Created app: ', createdApp);
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next({
        error: err,
        message: 'Error in applicationController.createApp',
      });
    });
};

// applicationController.getAllApp = async (req, res, next) => {
//   const { id } = req.params;
//   const query = `SELECT a.id, a.company, a.date_applied, a.status, a.role, users.username
//     FROM applications a INNER JOIN users
//     ON a.user_id = users.id`;
//   const params = [id];

//   await db
//     .query(query, params)
//     .then((data) => {
//       console.log('Get application, ', data);
//       res.status(200).send('Get App');
//       res.locals.getApp = data.rows[0];
//       return next();
//     })
//     .catch((err) => {
//       console.log(err);
//       return next({
//         error: err,
//         message: 'Error in applicationController.getApp',
//       });
//     });
// };

module.exports = applicationController;
