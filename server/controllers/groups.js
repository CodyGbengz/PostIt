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
      .all({
        include: [{ all: true }]
      })
      .then(groups => res.status(200).send(groups))
      .catch(error => res.status(400).send(error));
  },

  addMessage(req, res) {
    return models.Group
      .findById(req.params.id)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: 'Group not found'
          });
        }
        models.Message.create({
          content: req.body.content,
          priority: req.body.priority,
          userId: req.session.user.id,
          groupId: group.id
        });
        return res.send('Post sent successfully');
      })
      .catch(error => res.status(400).send(error.message));
  },

  getMessage(req, res) {
    return models.Group
      .findOne({ where:
        { id: req.param.id },
      include: [{ model: models.Message, as: 'messages' }] })
      .then((group) => {
        res.status(200).send(group);
      })
      .catch(error => res.status(400).send(error.message));
  },

  addUser(req, res) {
    return models.Group
      .findById(req.params.id)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: 'Group does not exists'
          });
        }
        return res.status(200).send(group);
      })
      .then(models.GroupMembers
        .create({
          userId: req.session.user.id,
          groupId: req.params.groupid
        }))
      .then(res.send('User added to group successfully!'))
      .catch(error => res.status(400).send(error));
  }
};
