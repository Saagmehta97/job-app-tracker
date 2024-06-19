const db = require('../models/userModels');

// SELECT a.app_id, a.company, a.role, a.user_id, a.status From applications a INNER JOIN users ON a.user_id = users.id

const applicationController = {};

applicationController.createApp = async(req, res, next) => {
  const { company, date_applied, roles, status } = req.body;

  const params = [company, date_applied, roles, status];
  const query = `INSERT INTO applications (company, date_applied, roles, status) VALUES ($1, $2, $3, $4, $5)`;

  await db.query(query, params)
    .then((createdApp) => {
      const { rows } = createdApp;
      console.log('rows ', createdApp.rows);
      res.locals.createdApp = rows[0];
      console.log('Create application, ', createdApp);
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

applicationController.getApp = async (req, res, next) => {
  const { id } = req.params;
  const query = `SELECT a.id, a.company, a.date_applied, a.status, a.role, users.username
    FROM applications a INNER JOIN users
    ON a.user_id = users.id`;
  const params = [id];

  await db.query(query, params)
    .then((data) => {
      console.log('Get application, ', data);
      res.status(200).send('Get App');
      res.locals.getApp = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next({
        error: err,
        message: 'Error in applicationController.getApp',
      });
    });
};

module.exports = applicationController