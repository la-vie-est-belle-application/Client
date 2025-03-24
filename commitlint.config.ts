module.exports = {
  rules: {
    "header-max-length": [2, "always", 72],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "chore", "docs", "style", "refactor"],
    ],
    "subject-empty": [2, "never"],
    "body-leading-blank": [0, "never"],
  },
};
