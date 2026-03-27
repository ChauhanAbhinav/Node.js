const jwt = require("jsonwebtoken");

// Header
const header = {
  alg: "HS256",
  typ: "JWT"
};

// Payload
const payload = {
  id: 123,
  email: "user@example.com",
};

const secret = "mysecretkey";

// Create token
const token = jwt.sign(payload, secret, {
  algorithm: "HS256",
  header: header,
//   noTimestamp: true, // in manual we have not add this, or this will add automatically in jwt
//   expiresIn: '1h' 
});

console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.rZlgC0w5e_ndZM5bgqZGj6m5ov0mxbky6aSWEcCHbN0

// Verify Token

try {
  const decoded = jwt.verify(token, secret);
  console.log("Valid Token");
  console.log(decoded);
} catch (err) {
  console.log("Invalid Token");
}
