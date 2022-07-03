const express = require("express");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const router = express.Router();
const passport = require("passport");
const db = require("../models");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        include: [
          {
            model: db.Post,
          },
        ],
      });
      return res.status(200).json(user);
    });
  })(req, res, next);
});

router.post("/user/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

router.post("/", async (req, res, next) => {
  try {
    console.log("Req : ", req);
    console.log("res : ", res);
    console.log("next : ", next);
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error); //500
  }
});

module.exports = router;
