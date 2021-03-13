const userRouter = require('../routes/api-routes');
const taskRouter = require('../routes/html-routes');
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app