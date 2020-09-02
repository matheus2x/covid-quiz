require("./config/environment");
require("./database/connection");

const app = require("./app");

const NODE_PORT = process.env.NODE_PORT;
app.listen(NODE_PORT, () => {
  console.log(`Listening: ${NODE_PORT}`);
});
