// eslint-disable-next-line no-undef
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "Docs",
        "Feat",
        "Design",
        "Fix",
        "Refactor",
        "Move",
        "Rename",
        "Remove",
        "Chore",
        "Add",
        "HOTFIX",
        "Test",
      ],
    ],
    "type-case": [2, "always", "pascal-case"],
  },
};
