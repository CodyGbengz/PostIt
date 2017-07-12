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
  list(req, res) {
    return models.Group
      .findAll()
      .then(groups => res.status(200).send(groups))
      .catch(error => res.status(400).send(error));
  },
  getMessage(req, res) {
    return models.Group
      .findOne({ where:
        { groupId: req.param.groupId } })
      .then((group) => {
        res.send(group.messages);
      })
      .catch(error => res.status(400).send(error));
  }
/*
  addUser(req, res) {
    return models.Group
      .create({

      });
  }*/
};
