![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=Moi'c&fontSize=90)

# :green_heart: 팀원 역할 및 소개
| Backend | 역할 | 담당 |
| --- | --- | --- |
| 임혜지 | 팀장 | Jira, Entity 작성, 카드/지도/북마크 api, Redis GeoOperations 활용, QueryDSL 적용 |
| 김성재 | 팀원 | Backend 환경, Infra, 기프티콘 api, Redis Z-Set기반 자동완성, 기타 캐싱 처리, 네이버 클로바 OCR 및 챗 GPT 외부 api 연동 |
| 김태현 | 팀원 | SpringSecurity적용 JWT 기반 회원 관리 기능 구현, OAuth2 및 SMTP 적용 및 구현 |

| Frontend | 역할 | 담당 |
| --- | --- | --- |
| 김수환 | 팀원 | 카드, 기프티콘 전체-상세 조회, 추가, 삭제 , 북마크 조회, 삭제 |
| 배희진 | 팀원 | 지도, 모빌리티(길찾기) API, 가맹점 혜택 상세 조회 컴포넌트 |
| 이의찬 | 팀원 | 로그인, 회원가입, 아이디/비밀번호 찾기, 마이페이지 등 회원관리 및 보안 |

## :blush: 컨셉
### 잊고 지나치는 혜택들을 간편하게 "모아모아"

## :star2: 핵심 기능
> ### :credit_card: **카드 혜택** 확인 <br/>
> **`카드별 혜택을 장소별 혜택으로 전환!`** <br/>
> **`검색을 통해 목적지에 혜택이 있는지 확인 가능!`**

> ### :ok_woman: 사용자 맞춤 혜택 정보 제공 서비스 <br/>
> **`사용자의 카드 등록을 통한 혜택 확인!`** <br/>
> **`사용자의 기프티콘 등록을 통해 잊지 않고 사용하도록 알림!`**

> ### :map: 지도로 보기 <br/>
> **`주변에서 받을 수 있는 할인 혜택을 지도로 쉽게!`** <br/>
> **`가고싶은 가맹점이 있다면 지도를 활용해서 장소를 검색!`**

> ### :tent: 코스 추천 <br/>
> **`어디로 가야할지 고민하지 않도록!`** <br/>
> **`사용자가 설정한 카테고리에 따라 코스 추천!`**

> ### :bookmark: 북마크 <br/>
> **`한번 가본 장소는 언제든지 다시 빠르게 볼 수 있게!`** <br/>
> **`지도 서비스에서 북마크를 통해 기억에 남는 장소를 저장 가능!`**

> ### 🚥 사용자 시나리오 <br/>
> <img src="https://github.com/heejinssss/project-moic/blob/master/A208_FlowChart.png?raw=true" width=700> <br/>

> ### 인프라 구조 <br/>
> **`개발 서버와 운영 서버의 구조는 동일`** <br/>
> ![Untitled](https://github.com/LimHyeji/hyyej_ji_algo/assets/87571953/7f43e9fc-6dc2-4a4b-a654-29b118260936)

<hr/>

| 기획서 | URL |
| :-------------: | :-------------: |
| ERD | https://www.erdcloud.com/d/896pMJBeE8ehic9kB |
| API | https://ssafy-fintech.notion.site/34092fd6e239437f8a18f4881570a358?pvs=4 |
| 와이어프레임 | https://www.figma.com/file/u16PFq6r076BbD3u2BE19u/A208?type=design&node-id=5%3A8&mode=design&t=N59zFVHcw7CEKPFl-1 |
| 목업 | https://www.figma.com/file/HjKzbmqABJ1DIyrdBsxyKp/A208-Mockup?type=design&node-id=0%3A1&mode=design&t=uuPyU7XmuUxtSoTx-1 |

## :ski: [기술 스택](https://ssafy-fintech.notion.site/eafdde71c7ee4bc7bbb84aea3c13c108?pvs=4)
### 인프라

![Untitled (5)](https://github.com/ssjjaa-algo/AlgoAndMySQL/assets/57981401/54c76aca-f80e-4eb5-979c-6864fc1e5e3e)

- EC2 (Ubuntu 20.04.6)
- docker (24.0.5)
- jenkins (jenkins/jenkins:jdk17)
- nginx (1.18.0 Ubuntu)
- S3

### 관리 툴

![Untitled (6)](https://github.com/ssjjaa-algo/AlgoAndMySQL/assets/57981401/6bb1b1a3-6145-4e0f-a476-44bd6989dab7)

### 백엔드

![Untitled (7)](https://github.com/ssjjaa-algo/AlgoAndMySQL/assets/57981401/f216084b-9eae-4bb7-8c84-ca39af97fe33)

- Springboot 3.1.3
- SpringSecurity 6.1.3
- MariaDB 11.1.2
- Redis 7.2.1
- QueryDSL 5.0.0

### 프론트엔드

![Untitled (8)](https://github.com/ssjjaa-algo/AlgoAndMySQL/assets/57981401/1bc6b4ef-ab40-4da4-8f1c-d20d3cfd6c96)


- Next.js 13. 4.19
- Typescript 5.1
- Tailwind CSS 3.3.2
- React Query 4.33
- Jotai 2.4.1
- Framer-Motion 10.16.4


## :star2: 시나리오

<table>
    <tr align="center">
        <td><B>스플래시</B></td>
        <td><B>로그인</B></td>
    </tr>
    <tr align="center">
        <td>
            ![스플래시](https://github.com/Hyeon0706/imageRepository/assets/83438780/a3fdf1af-be01-44f3-8312-71b77191c296)
        </td>
        <td>
            ![로그인](https://github.com/Hyeon0706/imageRepository/assets/83438780/31932f9a-c113-4372-837b-ad4c34124510)
        </td>
    </tr>
</table>

1. 최초에는 로그인 페이지로 이동하게 됩니다.
    
    로그인은 `회원가입/카카오/구글` 세가지 중 하나를 택할 수 있습니다.
    
    시연에서는 회원가입을 통한 로그인을 해보겠습니다.
    

<table>
    <tr align="center">
        <td><B>약관동의</B></td>
        <td><B>정보입력</B></td>
        <td><B>비밀번호 입력</B></td>
    </tr>
    <tr align="center">
        <td>
            ![회원가입1](https://github.com/Hyeon0706/imageRepository/assets/83438780/5758873e-73ca-4360-aa35-1787ab5f410b)
        </td>
        <td>
            ![회원가입2](https://github.com/Hyeon0706/imageRepository/assets/83438780/e4725afb-47d3-483b-bc12-7628fb42bb59)
        </td>
        <td>
            ![회원가입3](https://github.com/Hyeon0706/imageRepository/assets/83438780/79f869aa-ecd3-4151-8d15-6c688015f239)
        </td>
    </tr>
</table>

2. 회원가입 페이지는 위와 같습니다.
    
    성별과 년도를 제외하고는 모두 필수로 응답해야 합니다.
    

<table>
    <tr align="center">
        <td><B>회원 정보 찾기</B></td>
        <td><B>아이디 찾기</B></td>
        <td><B>비밀번호 찾기</B></td>
    </tr>
    <tr align="center">
        <td>
            ![아이디찾기1](https://github.com/Hyeon0706/imageRepository/assets/83438780/e37e4508-f4c3-4ec5-86a6-9a4957452446)
        </td>
        <td>
            ![아이디찾기2](https://github.com/Hyeon0706/imageRepository/assets/83438780/591ba2e8-0352-4c69-aedf-556ef7be305d)
        </td>
        <td>
            ![아이디찾기3](https://github.com/Hyeon0706/imageRepository/assets/83438780/e29625d1-8eb2-4f93-a693-28f3cb4c8752)
        </td>
    </tr>
</table>

3. 만약 아이디와 비밀번호를 잊어버렸다면, 찾기가 가능합니다.
    
    `비밀번호 찾기`의 경우에는 이메일 인증 번호 발송을 통한 본인 인증 후 비밀번호 변경이 가능합니다.
    

<table>
    <tr align="center">
        <td><B>메인 화면</B></td>
        <td><B>우측 상단 메뉴</B></td>
    </tr>
    <tr align="center">
        <td>
            ![메인1](https://github.com/Hyeon0706/imageRepository/assets/83438780/d4a52d9d-c0a5-4eef-a123-f669f4d93313)
        </td>
        <td>
            ![메인2](https://github.com/Hyeon0706/imageRepository/assets/83438780/aa4e987a-7e08-4788-b48d-8e41ba52cdd0)
        </td>
    </tr>
</table>

4. 로그인 이후 페이지입니다.
    
    홈에서는 `지도/경로 추천/기프티콘/카드` 페이지로 이동할 수 있습니다.
    
    드롭바에서는 `마이페이지/북마크 관리/VOC` 로 이동할 수 있습니다.
    

<table>
    <tr align="center">
        <td><B>회원 정보 확인</B></td>
        <td><B>비밀번호 수정 1</B></td>
        <td><B>비밀번호 수정 2</B></td>
    </tr>
    <tr align="center">
        <td>
            ![회원정보1](https://github.com/Hyeon0706/imageRepository/assets/83438780/e42da023-4d2b-4de6-9c9f-29d7a5aaf689)
        </td>
        <td>
            ![회원정보2](https://github.com/Hyeon0706/imageRepository/assets/83438780/0d976389-a5a8-444a-9900-c5b219143a0c)
        </td>
        <td>
            ![회원정보3](https://github.com/Hyeon0706/imageRepository/assets/83438780/b2e9903a-ff77-4618-b5ef-471887b88f0e)
        </td>
    </tr>
</table>

5. 마이페이지에서는 `회원정보 수정/비밀번호 수정/회원 탈퇴` 가 가능합니다.

<table>
    <tr align="center">
        <td><B>북마크</B></td>
        <td><B>문의사항</B></td>
    </tr>
    <tr align="center">
        <td>
            ![북마크](https://github.com/Hyeon0706/imageRepository/assets/83438780/2e0d118d-3952-4cf0-b3ce-6bdc7448e4c9)
        </td>
        <td>
            ![문의](https://github.com/Hyeon0706/imageRepository/assets/83438780/73fa5d1a-e29a-4579-ad93-e4f385de2d9e)
        </td>
    </tr>
</table>

6. `북마크 조회`의 경우, 내가 설정한 북마크 리스트를 확인하고 수정할 수 있습니다.
    
    `VOC 등록`의 경우, 건의한 내용이 관리자 이메일로 발송됩니다.
    

<table>
    <tr align="center">
        <td><B>카드 등록</B></td>
        <td><B>내 카드 목록</B></td>
        <td><B>카드 상세 정보</B></td>
    </tr>
    <tr align="center">
        <td>
            ![카드1](https://github.com/Hyeon0706/imageRepository/assets/83438780/7429f61b-68e8-4f6a-946c-c6d2eea7eca3)
        </td>
        <td>
            ![카드2](https://github.com/Hyeon0706/imageRepository/assets/83438780/b928cbd5-a304-43db-b379-f600e2e0d656)
        </td>
        <td>
            ![카드3](https://github.com/Hyeon0706/imageRepository/assets/83438780/98aa4d0e-0a66-4783-9514-b82383aab222)
        </td>
    </tr>
</table>

7. `카드` 페이지에서는 `전체 카드 조회/내 카드 추가 및 삭제/카드별 혜택 확인`이 가능합니다.

<table>
    <tr align="center">
        <td><B>카테고리 선택</B></td>
        <td><B>자동완성</B></td>
        <td><B>가맹점 상세 정보</B></td>
    </tr>
    <tr align="center">
        <td>
            ![지도1](https://github.com/Hyeon0706/imageRepository/assets/83438780/52906356-9abd-4e9a-8cc9-d0f6bdfba54e)
        </td>
        <td>
            ![지도2](https://github.com/Hyeon0706/imageRepository/assets/83438780/8a9ed5b3-2be6-402b-b1c9-4424ad39dd98)
        </td>
        <td>
            ![지도3](https://github.com/Hyeon0706/imageRepository/assets/83438780/aa13e357-c54a-4bd5-9dc6-5da2d2232d08)
        </td>
    </tr>
</table>

8. `지도` 페이지에서는 `카테고리별 조회/혜택 가맹점 검색/가맹점 상세조회`가 가능합니다.
    
    혜택 보러 가기를 클릭하면 카드와 혜택을 확인할 수 있습니다.
    

<table>
    <tr align="center">
        <td><B>내 기프티콘 목록</B></td>
        <td><B>기프티콘 등록 1</B></td>
        <td><B>기프티콘 등록 2</B></td>
        <td><B>기프티콘 등록 성공</B></td>
        <td><B>기프티콘 상세 조회</B></td>
    </tr>
    <tr align="center">
        <td>
            ![기프티콘1](https://github.com/Hyeon0706/imageRepository/assets/83438780/7b3656f5-84c8-45ba-861f-da9b3640dfb4)
        </td>
        <td>
            ![기프티콘2](https://github.com/Hyeon0706/imageRepository/assets/83438780/f8308b4b-dca1-4609-b52a-9722195942da)
        </td>
        <td>
            ![기프티콘3](https://github.com/Hyeon0706/imageRepository/assets/83438780/7e5231d0-7d58-4df9-8f60-6bc6d131ded3)
        </td>
        <td>
            ![기프티콘4](https://github.com/Hyeon0706/imageRepository/assets/83438780/0fbf8763-f45d-4493-aa99-0cd92dccefe5)
        </td>
        <td>
            ![기프티콘5](https://github.com/Hyeon0706/imageRepository/assets/83438780/c68f58b3-45bc-4d1d-885a-bdfd3b4494e9)
        </td>
    </tr>
</table>

9. `기프티콘` 페이지에서는 `내 기프티콘 조회/등록/삭제/상세조회`가 가능합니다.
    
    기프티콘 등록의 경우, 이미지 업로드를 통해 이루어집니다.
