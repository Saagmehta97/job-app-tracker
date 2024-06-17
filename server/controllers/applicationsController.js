const db = require('../models/userModels');

applicationController.createApp = (req, res, next) => {
  const { company, date_applied, roles, status } = req.body;
    

  const params = [company, date_applied, roles, status];
  const query = `INSERT INTO applications (company, date_applied, roles, status) VALUES ($1, $2, $3, $4, $5)`;

  db.query(query, params)
    .then((createdApp) => {
      console.log('Application, ', createdApp);
      res.status(200).send('Created App');
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