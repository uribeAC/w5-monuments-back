import chalk from "../../node_modules/chalk/source/index.js";
import app from "./app.js";

const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(chalk.blue("******************************************"));
    console.log(
      chalk.blue("🚀 Server launched:") +
        chalk.green(` Listening on port ${port}`),
    );
    console.log(chalk.blue("******************************************"));
  });
};

export default startServer;
