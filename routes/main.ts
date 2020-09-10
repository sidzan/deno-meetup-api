import { Router } from "../deps.ts";

const router = Router();

import Products from "./products.ts";
import Users from "./users.ts";

router.use(Products);
router.use(Users);

export default router;
