const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => {
    const token = req.cookies.token || '';
    try {
      if (!token) {
        return res.status(401).json({ok: "false", message: "You need to Login"})
      }
      const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = decrypt;
    } catch (err) {
        return res.status(401).json({ok: "false", message: `${err}`})
    }
    return res.status(200).json({ok: "ok", "user": req,user})
};

exports.authTunnel = async (req, res, next) => {
    const token = req.cookies.token || '';
    try {
      if (!token) {
        return res.status(401).json({ok: "false", message: "You need to Login"})
      }
      const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = decrypt;
      next();
    } catch (err) {
      return res.status(401).json({ok: "false", message: `${err}`})
    }
};