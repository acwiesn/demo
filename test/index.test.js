/**
 * Created by xenotime on 03/11/16.
 */

const ENV = {
  ENVIRONMENT:'dev1',
  AUTH_ENABLED:false,
  FORCEHTTPS:false,
  WWW_PREFIX:"ignore",
  AUTH0_DOMAIN:'app.auth0.com',
  AUTH0_CLIENT_ID:'<client id>',
  AUTH0_CLIENT_SECRET:'<slient secret>',
  AUTH0_CONNECTION:'Web-Auth-QA',
  HOST:'http://localhost:3000',
  CALLBACK_URL:'/callback',
  ERROR_PAGE:'/error',
  SESSION_SECRET:'lillyshhhhh'
}

const assert = require('chai').assert;
const request = require('supertest');

const basePathArr = __dirname.split('/');
basePathArr.pop();
const basePath = basePathArr.join('/');

const app = require('lusa-pkg-web-pattern')({ basePath, ENV });

describe('LUCID Web pack', () => {
  it('should use lusa-pkg-web-pattern and lucid web redirects', (done) => {
    assert.include(Object.keys(require('../package.json').dependencies), 'lusa-pkg-web-pattern', 'uses lusa-pkg-web-pattern');
    done();
  });
  it('should handle bad routes', (done) => {
    request(app)
      .get('/notvalidurl')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  it('should set a templating engine, currently handlebars only', (done) => {
    const templates = ['hbs'];	// Add more engines if needed

    assert.include(templates, app.settings['view engine'], 'uses handlebars as templating engine');
    done();
  });
});
