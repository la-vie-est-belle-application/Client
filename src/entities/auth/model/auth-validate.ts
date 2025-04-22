import { AuthInputType, RuleMap } from "../types/type";

export function handleAuthValidate(
  value: string,
  type: AuthInputType,
  ruleMap: RuleMap,
  compareTarget?: string,
) {
  const target = value ? value.trim() : "";

  const rules =
    type === "passwordConfirm" ? ruleMap[type](compareTarget) : ruleMap[type]();

  const invalidateRule = rules.find(
    (rule) => rule.rule.test(target) !== rule.match,
  );

  return invalidateRule ?? null;
}
