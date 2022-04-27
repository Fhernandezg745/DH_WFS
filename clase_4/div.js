const division = function (a = 0, b = 0) {
  if (a == 0 || b == 0) {
    return 0;
  }
  return a / b;
};

module.exports = division;
