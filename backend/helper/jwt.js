import jwt from "jsonwebtoken";

/**
 * Generates JWT token
 * @param {*} userId
 * @returns
 */

//JWT secret key
const key = process.env.SECRET_KEY;

export const generateJwt = (userId) => {
  const payload = {
    id: userId,
  };

  const token = jwt.sign(payload, key, {
    expiresIn: "1h",
  });

  return token;
};

/**
 * Verifies JWT token
 * @param {*} token
 * @returns
 */
export const verifyJwt = (token) => {
  return jwt.verify(token, key);
};
