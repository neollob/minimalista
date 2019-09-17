module.exports = function minimalista(string) {
    if (typeof string !== "string") throw new TypeError
    ("Minimalista requiere un string!");
    return string.replace(/\s/g, "");
  };