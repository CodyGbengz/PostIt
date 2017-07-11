import models from '../models';

export default {
  create(req, res) {
    return models.Group
      .create({
        title: req.body.title,
        description: req.body.description
      })
      .then(group => res.status(201).send(group))
      .catch(error => res.status(400).send(error));
  },

  addUser(req, res) {
    return models.Group
      .create({

      });
  }
};
