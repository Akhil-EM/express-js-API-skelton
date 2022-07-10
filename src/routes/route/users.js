const router = require("express").Router();
//validation and auth middleware called here
const {loginCheck,validationStatus} = require("../../middlewares/validation.middleware");

const userController = require('../../controllers/user.controller');

router.get("/",userController.getUsers);
// router.post("/",loginCheck(),validationStatus); eg of calling a middleware


module.exports = router;