module.exports = {
  apps : [{
    name: 'API',
    script: './src/index.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    instances: 4,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
