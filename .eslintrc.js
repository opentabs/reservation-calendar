{
  module.exports = {
    "extends": ["airbnb-base"],
    "plugin":["react/recommend", "react-native"],
    "rules": {
    "react/jsx-filename-extensions": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prop-types": [2],
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error"
  },
  "globals": {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true
  },
  "parser": "babel-eslint"
  };
}