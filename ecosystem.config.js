module.exports = {
  apps: [
    {
      name: 'api',
      script: './server.js',
      watch: true,
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      env_staging: {
        PORT: 80,
        NODE_ENV: 'staging',
      },
      env_production: {
        PORT: 80,
        NODE_ENV: 'production',
      },
    },
  ],
};
