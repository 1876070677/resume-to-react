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
- URL: http://localhost:5173


## 수정.
- Payload 내부의 *.sample.ts를 수정하면 됩니다.
- 각 항목의 `disable` 옵션을 통해 렌더링 여부를 결정할 수 있습니다.

## .vscode/setting.json
- eslint 적용이 필요한 경우, 아래와 같이 설정합니다.
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

# 📄 PDF 생성 가이드
### 🔍 PDF로 변환 (Preview)
- **"PDF로 변환" 버튼**을 클릭하면 전체 이력서가 **이미지로 렌더링**됩니다.
- 실제 PDF가 어떻게 보일지 **UI가 깨지는 부분은 없는지 미리 확인**하기 위한 단계입니다.

### 📥 PDF 다운로드
- **"PDF 다운로드" 버튼**을 통해 렌더링된 이미지를 기반으로 **PDF 파일을 생성 및 다운로드**할 수 있습니다.
- PDF는 **섹션 단위로 페이지가 끊기지 않도록 자동 조정**됩니다.
- 관련 옵션은 `src/features/ConvertToPdf.ts`에서 수정 가능합니다:

### 🔧 옵션 설명

#### 1) `SECTION_MARGINS_MM`
- 각 섹션 아래에 들어가는 마진 값입니다.  
- 마진을 조절하여 한 페이지에 들어갈 섹션 수를 강제로 조정할 수 있습니다.  
- 예: 섹션 3개가 한 페이지에 너무 빽빽한 경우, 상위 2개 섹션에 마진을 크게 주면 한 페이지에 2개 섹션만 들어가도록 조절할 수 있습니다.


#### 2) `MARGIN_X`, `MARGIN_Y`
- PDF 용지의 좌우(X축) 및 상하(Y축) 여백을 설정하는 옵션입니다.

#### 3) `scale` (line 44)
- PDF 렌더링 시 이미지의 해상도를 조절합니다.  
- 일반적으로 **1.5**가 적절한 품질과 용량의 균형을 제공합니다.  
- **2**로 설정하면 해상도는 향상되지만 PDF 파일 용량이 증가합니다.