import baseConfig from './default'
import config from './mainnet'


export default {
  env: 'development',
  entry: 'mainnet',
  local: 'online',
  http: {
    host: 'localhost',
    port: 1337,
  },
  publicPath: '/public',
  base: `http://localhost:${baseConfig.http.port}/`,
  publicPath: `http://localhost:${baseConfig.http.port}${baseConfig.publicPath}`,

  ...config,
}
