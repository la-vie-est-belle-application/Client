# FSD(Folder Structure Design) 폴더 구조

```text
fsd/
├── app/                # 애플리케이션 레벨 로직 (라우터, 컨텍스트 프로바이더 등)
│   ├── store/          # 전역 상태 관리 설정
│   ├── providers/      # 서비스(예: API 클라이언트) 프로바이더
│   └── routes.ts       # 애플리케이션 라우팅 정의
│
├── views/              # 페이지 단위 라우트 컴포넌트
│   ├── HomePage/
│   └── ProfilePage/
│
├── widgets/            # 페이지와 독립적인 재사용 가능한 UI 컴포넌트 집합
│   ├── Button/
│   ├── Card/
│   └── Modal/
│
├── features/           # 비즈니스 기능 단위 모듈
│   ├── authentication/ # 로그인, 회원가입
│   │   ├── api/        # API 호출
│   │   ├── ui/         # 컴포넌트
│   │   └── model/      # slice, hook 등
│   └── notifications/  # 알림 기능
│
├── entities/           # 도메인 엔티티(객체) 단위 모듈
│   ├── user/           # User 엔티티 관련 로직
│   │   ├── model/      # user slice, hooks
│   │   └── types.ts    # 타입 정의
│   └── article/        # Article 엔티티
│
└── shared/             # 프로젝트 전반에서 재사용되는 유틸, 타입, 스타일
    ├── lib/            # 공통 헬퍼 함수
    ├── ui/             # 공통 컴포넌트 (Typography, Grid 등)
    ├── config/         # 환경 설정
    ├── styles/         # 전역 스타일
    └── types/          # 공통 타입 정의
```

## 각 디렉토리 설명

- **app**: 애플리케이션 인프라스트럭처와 전역 설정을 담당합니다.
- **views**: 라우터 기반 페이지 컴포넌트를 모아둡니다.
- **widgets**: UI 단위의 범용 컴포넌트 컬렉션입니다.
- **features**: 특정 비즈니스 기능(로그인, 검색 등)을 모듈화합니다.
- **entities**: 도메인 객체를 중심으로 상태와 타입을 정의합니다.
- **shared**: 프로젝트 전반에 걸쳐 반복해서 쓰이는 리소스를 보관합니다.
