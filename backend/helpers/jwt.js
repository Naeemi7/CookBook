import jwt from "jsonwebtoken";

/**
 * Generates JWT token
 * @param {*} userId
 * @returns
 */

export const generateJwt = (userId) => {
  const payload = {
    id: userId,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
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
  return jwt.verify(token, process.env.SECRET_KEY);
};
