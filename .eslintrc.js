module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        printWidth: 100,
        semi: true,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  plugins: ["prettier", "react", "react-hooks", "jsx-a11y"],
};
