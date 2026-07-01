import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "**/.next/**",
      "**/out/**",
      "**/build/**",
      "**/next-env.d.ts",
      "**/skiper*.tsx",
      "**/src/lib/gsap/**",
      "**/gsap-public/**",
      "**/__MACOSX/**",
    ],
  },
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;
