// .eslintrc.cjs
module.exports = {
  ignorePatterns: [
    "**/*.js",     // Node 환경 JS 파일 제외 (선택 사항)
    "node_modules",
    "dist",
    ".eslintrc.cjs", // <--- 🚨 이 파일을 명시적으로 제외합니다.
    "postcss.config.cjs",
    "vite.config.ts" // <--- vite.config.ts도 제외하는 것이 일반적입니다. (TypeScript 코드 범위 문제 해결)
  ],
  // Airbnb 설정은 React 사용 시 기본적으로 ES2021을 요구합니다.
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  
  // ----------------------------------------------------
  // ✨ 핵심: Airbnb, TypeScript, Prettier 설정 확장
  // ----------------------------------------------------
  extends: [
    // 1. Airbnb 기본 규칙 (JS/React)
    'airbnb', 
    
    // 2. TypeScript 규칙 적용을 위한 확장
    // (airbnb-typescript가 tseslint의 recommended 규칙을 포함합니다.)
    'airbnb-typescript', 
    
    // 3. React Hooks 규칙
    'airbnb/hooks',
  ],
  
  // TypeScript 파서를 사용하도록 지정
  parser: '@typescript-eslint/parser',
  
  // 파서 옵션 설정 (Airbnb TypeScript 사용 시 필수)
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest', // ESLint가 처리할 수 있는 최신 JS 문법 사용
    sourceType: 'module',
    
    // ⬅️ 필수: TypeScript 규칙을 적용하려면 tsconfig 경로를 명시해야 합니다.
    project: './tsconfig.json', 
  },
  
  // 플러그인 목록 (extends에 의해 자동으로 로드되지만 명시적으로 추가)
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    'react-refresh' // Vite 환경에서 필요한 플러그인
  ],
  
  // 개별 규칙 정의 및 덮어쓰기
  rules: {
    // ----------------------------------------------------
    // Airbnb의 엄격한 규칙 중 일부를 프로젝트에 맞게 완화
    // ----------------------------------------------------
    
    // 파일 확장자 규칙 끄기 (Webpack/Vite 환경에서 불필요)
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    
    // JSX를 포함하는 파일에 .jsx/.tsx 확장자를 강제하는 규칙 끄기
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    
    // React v17+에서는 import React from 'react'가 필수가 아님
    'react/react-in-jsx-scope': 'off',
    
    // Hooks 규칙은 extends에 포함되어 있으나, react-refresh를 위한 Vite 규칙 추가
    'react-refresh/only-export-components': 'warn',
    
    // TypeScript 관련 규칙 (예시)
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    
    // default export 대신 named export를 선호하도록 끄기 (개인의 취향)
    'import/prefer-default-export': 'off', 

    // 커스텀.
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", { "code": 160 }],
    "no-trailing-spaces": "off",
    "react/require-default-props": "off",
    "object-curly-newline": "off",
  },
};