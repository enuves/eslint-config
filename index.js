module.exports = {
  rules: {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "eqeqeq": [
      "error",
      "always"
    ], // === and !==
    "init-declarations": [
      "error",
      "always"
    ],
    "no-var": "error",
    "key-spacing": [
      "error",
      { "afterColon": true }
    ],
    "no-empty-function": "error",
    "space-before-function-paren": [
      "error",
      "always"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ], //es6
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "arrow-spacing": [
      "error", {
        "before": true,
        "after": true
      }
    ]
  }
};