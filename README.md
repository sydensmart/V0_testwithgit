# TechVision - IT 솔루션 전문 기업 웹사이트

Next.js로 구축된 IT 솔루션 전문 기업 웹사이트입니다.

## 🚀 GitHub Pages 배포 방법

### 1. GitHub 리포지토리 생성 및 코드 업로드

```bash
# 프로젝트 폴더에서 Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit"

# GitHub 리포지토리와 연결 (your-username과 repository-name을 실제 값으로 변경)
git remote add origin https://github.com/your-username/repository-name.git

# main 브랜치로 push
git branch -M main
git push -u origin main
```

### 2. GitHub Pages 활성화

1. GitHub 리포지토리 페이지로 이동
2. **Settings** > **Pages** 메뉴 클릭
3. **Source** 섹션에서 **GitHub Actions** 선택
4. 설정 완료!

### 3. 자동 배포

- `main` 브랜치에 코드를 push하면 자동으로 빌드 및 배포됩니다
- **Actions** 탭에서 배포 진행 상황을 확인할 수 있습니다
- 배포 완료 후 `https://your-username.github.io/repository-name/` 에서 사이트를 확인할 수 있습니다

### 4. 리포지토리 이름에 따른 설정 (필요시)

리포지토리 이름이 `your-username.github.io`가 **아닌** 경우, `next.config.mjs` 파일에서 `basePath`를 수정해야 합니다:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/repository-name',  // 리포지토리 이름으로 변경
  // ...
}
```

리포지토리 이름이 `your-username.github.io`인 경우 `basePath`는 빈 문자열('')로 유지하세요.

## 🛠️ 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 정적 사이트 생성 (out 폴더에 생성됨)
npm run build
```

## 📁 프로젝트 구조

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 글로벌 스타일
├── components/            # React 컴포넌트
│   ├── hero.tsx          # 히어로 섹션
│   ├── services.tsx      # 서비스 섹션
│   ├── solutions.tsx     # 솔루션 섹션
│   ├── portfolio.tsx     # 포트폴리오 섹션
│   ├── tech-stack.tsx    # 기술 스택 섹션
│   ├── contact.tsx       # 문의하기 섹션
│   └── footer.tsx        # 푸터
├── public/               # 정적 파일
├── .github/              # GitHub Actions
│   └── workflows/
│       └── deploy.yml    # 자동 배포 설정
└── next.config.mjs       # Next.js 설정
```

## 🎨 기술 스택

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 📝 주의사항

- 빌드 시 `out` 폴더에 정적 파일이 생성됩니다
- GitHub Actions가 자동으로 빌드 및 배포를 처리합니다
- `.nojekyll` 파일은 Jekyll 처리를 비활성화합니다 (Next.js의 `_next` 폴더를 위해 필요)

## 🔧 문제 해결

### 배포가 실패하는 경우

1. **Actions** 탭에서 에러 로그 확인
2. `package-lock.json` 파일이 있는지 확인
3. GitHub Pages 설정이 **GitHub Actions**로 되어 있는지 확인

### CSS나 이미지가 로드되지 않는 경우

- `basePath` 설정이 올바른지 확인
- 리포지토리 이름과 `basePath`가 일치하는지 확인

## 📄 라이선스

MIT
