import Messages from '../models/messages';

export default {
  create(req, res) {
    return Messages
      .create({
        author: req.body.author,
        content: req.body.content,
        group: req.body.group,
        priority: req.body.priority
      })
      .then(message => res.status(201).send(message))
      .catch(error => res.status(400).send(error));
  }
};
