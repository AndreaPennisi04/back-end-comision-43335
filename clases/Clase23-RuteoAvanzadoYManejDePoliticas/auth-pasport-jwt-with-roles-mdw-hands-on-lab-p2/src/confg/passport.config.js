const passport = require("passport");
const jwt = require("passport-jwt");
const ROLES = require("../constantes/role");
const userModel = require("../model/user.model");
const { SECRET_JWT, cookieExtractor } = require("../utils/jwt");

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        // jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), // Bearer atokenaskjehbdkajdhkahdka
        secretOrKey: SECRET_JWT,
      },
      async (jwtPayload, done) => {
        console.log("🚀 ~ file: passport.config.js:19 ~ jwtPayload:", jwtPayload);
        try {
          if (ROLES.includes(jwtPayload.role)) {
            return done(null, jwtPayload);
          }
          return done(null, jwtPayload); //no entiendo esta linea pq se repite
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};

module.exports = initializePassport;
