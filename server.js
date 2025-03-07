import express from 'express';
import rootRouter from './router/root.router.js';
import { handleError } from './common/helper/response.helper.js';

const app = express();


app.use(express.urlencoded({ extended: true }));


app.use(express.static('uploads'));
app.use(express.json());

app.use(rootRouter);

app.use(handleError);

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
