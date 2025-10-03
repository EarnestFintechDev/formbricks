module.exports = {
  apps: [
    {
      name: "formbricks-web",
      script: "pnpm",
      args: "start", // what to run after pnpm
      autorestart: true,
      max_memory_restart: "500M",
    },
  ],
};
