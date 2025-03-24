module.exports = {
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
    "header-max-length": [2, "always", 100],
    "subject-case": [2, "never", "lower-case"],
  },
};
