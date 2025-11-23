# Resume 이력서 React 버전.
- 원본 프로젝트: https://github.com/uyu423/resume-nextjs
- 기존에 존재하던 HTML 이력서 프로젝트를 Vite + React + TS로 마이그레이션 했습나다.
- reacstrap에 의존하지 않고, 대부분의 UI를 직접 구현했으며, Shadcn과 같이 프로젝트 내에 UI 컴포넌트가 존재할 수 있도록 최대한 노력했습니다. 
- 최종 목표는 SEO가 목표인 next와 다르게 PDF 버전을 만들 수 있도록 지원할 예정입니다.
- Payload의 작성 방식은 https://github.com/uyu423/resume-nextjs 참고.

## 실행.
```
npm install
npm run dev
```

## 수정.
- Payload 내부의 *.sample.ts를 수정할 것.
- 각 항목의 disable 여부를 통해 렌더링 여부를 결정할 수 있음.

## .vscode/setting.json
- eslint 적용이 필요한 경우, 아래와 같이 설정.
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.formatOnSave": false,
  "eslint.useFlatConfig": true
}
```
