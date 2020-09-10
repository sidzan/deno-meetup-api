import { opine } from "./deps.ts";

import Router from "./routes/products.ts";

const app = opine();

app.use("/v1", Router);

const PORT = 3000;

app.listen(PORT);
console.log(`App is running on port ${PORT}`);
