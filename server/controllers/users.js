import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import models from '../models';

dotenv.config({ silent: true });

const secret = process.env.JWT_SECRET_KEY;

export default {
  create(req, res) {
    return models.User
      .create({
        username: req.body.username,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: req.body.password
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return models.User
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },

  authethicate(req, res) {
    models.User
      .findAll({ where: { username: req.body.username, password: req.body.password } })
      .then((user) => {
        if (user) {
          const token = jwt.sign(
            user,
            secret, { expiresInMinutes: 60 }
          );

          res.status(202).send({
            token,
            message: 'auth success'
          });
          return;
        }

        res.status(404).send({
          message: 'auth failed'
        });
      });
  }

};
