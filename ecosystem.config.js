module.exports = {
  apps : [{
    name: "Esthers",
    script: "build/main.js",
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}