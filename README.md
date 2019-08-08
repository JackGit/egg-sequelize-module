# egg-sequelize-module

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-sequelize-module.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-sequelize-module
[travis-image]: https://img.shields.io/travis/eggjs/egg-sequelize-module.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-sequelize-module
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-sequelize-module.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-sequelize-module?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-sequelize-module.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-sequelize-module
[snyk-image]: https://snyk.io/test/npm/egg-sequelize-module/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-sequelize-module
[download-image]: https://img.shields.io/npm/dm/egg-sequelize-module.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-sequelize-module

<!--
Description here.
-->

## Install

```bash
$ npm i egg-sequelize-module --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.sequelizeModule = {
  enable: true,
  package: 'egg-sequelize-module',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.sequelizeModule = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
