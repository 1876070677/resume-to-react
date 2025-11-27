# Resume 이력서 React 버전.
- 원본 프로젝트: https://github.com/uyu423/resume-nextjs
- 기존에 존재하던 HTML 이력서 프로젝트를 Vite + React + TS로 마이그레이션 했습나다.
- reactstrap에 의존하지 않고, 대부분의 UI를 직접 구현했으며, Shadcn과 같이 프로젝트 내에 UI 컴포넌트가 존재할 수 있도록 최대한 노력했습니다. 
- 최종 목표는 SEO가 목표인 next와 다르게 PDF 버전을 만들 수 있도록 지원할 예정입니다.
- Payload의 작성 방식은 https://github.com/uyu423/resume-nextjs 참고할 수 있습니다.

## 실행.
```
npm install
npm run dev
```
- 아래 URL 통해 접속.
http://localhost:5173


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

## PDF 생성.
- "PDF로 변환" 버튼을 통해 전체 이력서가 image로 변했을 때 어떤 형태인지 확인할 수 있습니다.
- 튜닝으로 인해서 깨지는 UI가 있는지 확인하는 단계입니다.

- "PDF 다운로드" 버튼을 통해서 해당 image를 Pdf로 바꾸어 다운로드 가능합니다.
- 해당 PDF는 섹션 별로 잘리지 않도록 조절이 되어 있습니다.
- src/features/ConvertToPdf.ts 에서 상세 옵션 조절이 가능합니다.

1) const SECTION_MARGINS_MM:
- 각 섹션 아래에 마진을 줍니다.
- 마진을 통해서 한 장에 들어갈 내용을 강제로 조정 가능합니다.
- 예를 들어, 3 개의 섹션이 빼곡하게 들어가있는 것이 보기 싫어서 2개의 섹션 아래에 마진을 많이 주면 한 장에 2 개의 섹션만 들어 갑니다.

2) MARGIN_X, MARGIN_Y: 
- 용지의 X축 여백과 Y축 여백입니다.

3) line 44의 scale: 
- 해상도를 조절 가능합니다. 1.5가 일반적으로 괜찮고, 2를 하면 해상도는 좋으나 PDF 용량이 증가합니다.