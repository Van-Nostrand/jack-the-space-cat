module.exports = {
  apps : [{
    name: "jack-the-space-cat",
    script: 'server/index.js',
    instances: "max",
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
};
