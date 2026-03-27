// Authentication
// Authentication verifies identity (who you are).
// Authentication is the first step (e.g., login).
// Authentication uses credentials like passwords and biometrics

// Authorization
// Authorization determines access privileges (what you can do). 
// Authorization is done after Authentication (e.g., role-based permissions).
// Authorization uses settings like roles, policies, and access tokens.

// JWT (JSON Web Token) is used for authentication & authorization.
// After login, the server gives a token → client sends it in every request → server verifies it.


// JWT Structure
HEADER.PAYLOAD.SIGNATURE
// Example
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.rZlgC0w5e_ndZM5bgqZGj6m5ov0mxbky6aSWEcCHbN0

// Header → algorithm (HS256)
// Payload → user data (id, role)
// Signature → signature created from payload and secret key

// 1. Header
// {
//   "alg": "HS256", // e.g., HS256, RS256)
//   "typ": "JWT"
// }
// Header is NOT encrypted
// Anyone can decode it
// After Base64Url Encoding:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

// 2. Payload
// Data (claims) about the user
// Example:
// {
//   "id": 123,
//   "email": "user@example.com",
//   //"iat": 1710000000 // Without timestamp (it added auto in jwt lib(for disable - noTimestamp: true flag))
// }
// Payload is NOT encrypted
// Anyone can decode it
// After Base64Url Encoding:
// eyJpZCI6MTIzLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ

// SIGNATURE (Security Part)
// How it's created:
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
// Example (conceptual):
signature = HMACSHA256(
  "header.payload",
  "mysecretkey"
)
// 🔍 Purpose:
// Ensures token is not tampered
// Server verifies using secret

// Encoded Signature:
// rZlgC0w5e_ndZM5bgqZGj6m5ov0mxbky6aSWEcCHbN0

// Final Token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJpZCI6MTIzLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ
.
rZlgC0w5e_ndZM5bgqZGj6m5ov0mxbky6aSWEcCHbN0

// How Verification Works
// Server receives token
// Splits into 3 parts
// Recreates signature using:
// header + payload
// secret key
// Compares with given signature

// If same → valid
// If different → tampered


// Question 1: CREATE A Manual JWT TOKEN FROM ABOVE EXAMPLE

// Header :
const header = {
  alg: "HS256",
  typ: "JWT"
};
// Payload:
const payload = {
  "id": 123,
  "email": "user@example.com",
}
const secret = "mysecretkey"

// Base64URL encode
function base64Url(obj) {
  return Buffer
    .from(JSON.stringify(obj))
    .toString("base64url");
}

// Encode Header:
const encodedHeader = base64Url(header);
console.log(encodedHeader); //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// Encode payload

const encodedPayload = base64Url(payload);
console.log(encodedPayload); //eyJpZCI6MTIzLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ


// Step 3 → signature
const data = `${encodedHeader}.${encodedPayload}`;
const signature = crypto
  .createHmac("sha256", secret) // In header we got alg: "HS256",
  .update(data)
  .digest("base64url");

// Step 4 → final JWT
const token = `${encodedHeader}.${encodedPayload}.${signature}`;

console.log("JWT:", token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.rZlgC0w5e_ndZM5bgqZGj6m5ov0mxbky6aSWEcCHbN0

