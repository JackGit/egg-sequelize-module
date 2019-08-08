'use strict';

const mock = require('egg-mock');

describe('test/sequelize-module.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/sequelize-module-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sequelizeModule')
      .expect(200);
  });
});
