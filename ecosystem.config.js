module.exports = {
  apps: [
    {
      name: 'api',
      script: './dist/server.js',
      watch: true,
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      env_staging: {
        PORT: 3001,
        NODE_ENV: 'staging',
      },
      env_production: {
        PORT: 3002,
        NODE_ENV: 'production',
      },
    },
  ],
};
