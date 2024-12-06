const crypto = require("crypto");

// Generate random secrets
const accessSecret = crypto.randomBytes(64).toString("hex");
const refreshSecret = crypto.randomBytes(64).toString("hex");

console.log("ACCESS_SECRET:", accessSecret);
console.log("REFRESH_SECRET:", refreshSecret);
