import express from "express"
import { getUserListings, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/test', test);
router.get('/listings/:id', verifyToken ,getUserListings);
router.post('/update/:id', verifyToken ,updateUser);
router.delete('/delete/:id', verifyToken ,deleteUser);

export default router;