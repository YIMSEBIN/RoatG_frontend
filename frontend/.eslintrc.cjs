module.exports = {
  // ESLint의 루트 디렉토리를 설정
  // (true: 해당 파일의 상위 디렉토리에서 부터 설정 파일을 찾는다.)
  root: true,
  env: {
    browser: true, // 브라우저 환경
    es2020: true, // ECMAScript 2020
  },
  extends: [
    "eslint:recommended", // 기본적인 ESLint 규칙
    "plugin:@typescript-eslint/recommended", // TypeScript 관련 규칙
    "plugin:react-hooks/recommended", // React Hooks 규칙
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // 무시할 파일 또는 디렉토리
  parser: "@typescript-eslint/parser", // TypeScript 파서 설정
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"], // 사용할 플러그인을 설정
  // allowConstantExport : 해당 컴포넌트가 다른 파일에서 임포트되거나 사용되지 않을 경우, ESLint는 경고를 표시
  rules: {
    // "react-refresh/only-export-components": [
    //   "warn",
    //   { allowConstantExport: true },
    // ],
    "react-refresh/only-export-components": "off",
  },
};
