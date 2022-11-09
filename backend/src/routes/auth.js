const {
  login,
  register,
  getAllUsers,
  resetPassword,
  logOut,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.get("/logout/:id", logOut);
router.put("/resetPassword/:username", resetPassword);

module.exports = router;
