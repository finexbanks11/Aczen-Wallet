import baseConfig from './default';
import config from './testnet';
import moment from 'moment-with-locales-es6';

const { host, port } = {
  host: 'localhost',
  port: 1337,
};

export default {
  env: 'development',
  entry: 'testnet',
  local: 'online',
  http: {
    host,
    port,
  },
  publicPath: '/public',
  base: `http://${host}:${port}/`,
  publicPath: `http://${host}:${port}${baseConfig.publicPath}`,

  time: moment(Date.now()).format('LLLL'),

  ...config,
};