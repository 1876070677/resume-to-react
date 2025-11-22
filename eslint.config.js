import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default [
  // 1. 무시할 파일 설정
  {
    ignores: ['dist', 'node_modules'],
  },
  
  // 2. TypeScript/Parser 설정 및 규칙 적용
  // tseslint.configs.recommended에는 파서 설정과 권장 규칙이 모두 포함되어 있습니다.
  ...tseslint.configs.recommended,

  // 3. React Hooks 설정
  reactHooks.configs.flat.recommended,
  
  // 4. 일반 JS/브라우저 환경 설정
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...js.configs.recommended, // 기본 JS 규칙을 적용합니다.

    languageOptions: {
      // tseslint.configs.recommended에 의해 파서가 이미 설정되었으므로,
      // 여기서는 환경(globals)만 설정합니다.
      globals: globals.browser, 
      ecmaVersion: 2020,
    },
    
    // 5. React Refresh (Vite) 규칙 적용
    // tseslint와 합치기 위해 rules와 plugin을 직접 정의합니다.
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
    },
  },

  // 6. 프로젝트별 추가 설정 (필요한 경우)
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      // ...
    },
  },
];