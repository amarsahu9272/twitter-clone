exports.isValidString = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};
exports.isValidMobile = function (value) {
  const mobRegex = /^[6-9]\d{9}$/.test(value);
  return mobRegex;
};

exports.isValidEmailSyntax = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  return emailRegex;
};

exports.isOnlyLetters = (str) => {
  const emailRegex = /^[A-Za-z\s]+$/.test(str);
  return emailRegex;
};
