import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import models from '../model';

process.env.NODE_ENV = 'test';
const should = chai.should();

chai.use(chaiHttp);

models.Users.destroy({
    where: {},
    cascade: true,
    truncate: true
});

models.Groups.destroy({
    where: {},
    cascade: true,
    truncate: true
});

models.Messages.destroy({
    where: {},
    cascade: true,
    truncate: true
});

describe('', () => {
    
})

