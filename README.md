## 목차
- [프로젝트 소개](#프로젝트-소개)
- [개발자 구성](#개발자-구성)
- [System Architecture](#system-architecture)
- [DB ERD](#db-erd)
- [주요 기능](#주요-기능)
- [향후 진행사항](#향후-진행사항)


## 프로젝트 소개
기본적으로는 다량의 데이터를 추천받는 방식이 아닌 사용자가 직접 영상을 검색하여 원하는 정보만 제공받는 데에 집중한 도파민 디톡스 동영상 시청 웹페이지입니다.  
- 개발 기간 : 2024.07.12 (금) ~
- 개발 엔진 및 언어 : React 및 Node.js & JSX

## 개발자 구성
- 차소영 : 팀장, front 및 검색엔진 개발
- 신혜원 : front (대시보드), 서버 및 DB 환경 구축
- 최은진 : front (영상 업로드) 및 카카오 API 연동 구현

## System Architecture
<img width="1013" alt="스크린샷 2024-11-12 오후 2 08 18" src="https://github.com/user-attachments/assets/0092bc0b-804e-485a-89a3-d7b7c20dd037">    

## DB ERD
<img width="1372" alt="스크린샷 2024-11-12 오후 2 12 38" src="https://github.com/user-attachments/assets/627fd659-68a2-431b-a434-c60bdcf0088b">    

## 주요 기능
- ### 영상 검색
  - 시청하고 싶은 영상의 키워드, 제목, 해시태그 등 연관 검색어를 입력한다.
  - 입력된 값을 검색어를 검색엔진으로 가져온다.
  - 검색엔진에서 해당 키워드가 영상 제목, 해시태그 등 여러 분류 중 해당되는 분류를 확인하고 해당 키워드와 연관도 높은 영상을 탐색한다. 
  - 탐색 결과를 front에 전달해, 해당 값을 화면에 띄운다.

  - 검색 결과의 기본 순서는 정확도 순이며, 정확도는 키워드가 해당하는 정도를 기준으로 구분된다.
  - 순서는 정확도 외에 최신순, 인기순(조회순) 으로 설정해서 원하는 순서로 결과를 조회할 수 있습니다.

- ### 프로필 설정
  - 나의 채널, 개인 정보 (비밀번호 변경, 닉네임 변경, 프로필 이미지 변경, 알림 설정, 채널 생성) 수정이 가능하다.
  - 각 항목의 개인정보를 수정하면 해당 작업이 완료되었음을 사용자에게 팝업창으로 알려준다.

- ### 2개의 홈 화면
  - 홈 화면을 두 개로 나누어 avive의 개발 목적에 집중한다.
  - 첫 홈 화면은 순수 검색 기능만을 제공해, 알고리즘에 방해받지 않고 원하는 정보 습득에만 집중할 수 있도록 돕는다.
  - 하단 화살표 클릭 또는 위로 슬라이드 시 나타나는 두 번째 홈화면은 개인 맞춤형 영상 추천 알고리즘과 검색 기능을 함께 제공한다.


- ### 영상 추천 알고리즘
  - 영상 추천 알고리즘은 개인 맞춤형으로 제공되며, 개인이 시청한 영상기록을 통해 해당 영상의 해시태그를 그 기준으로 한다.
  - 유사 해시태그가 많이 포함된 영상일수록 가장 먼저 추천되며, 유사성이 낮은 영상은 그 밑에 차례로 추천된다.

- ### 로그인 기능 / 회원가입 기능
  - 로그인 기능
  
  사용자가 입력한 아이디와 비밀번호 데이터를 받아서	mysql DB에 전송하여 사용자 정보와 동일한 회원 정보가 있으면 로그인을 수행하고 없다면 로그인 실패 문장을 보여준다.
  
  - 회원가입 기능
  
  사용자 ID, 비밀번호, 프로필 닉네임, 프로필 사진을 받아와 회원을 생성한다. 회원을 생성할 때, 회원 아이디는 다른 회원 아이디와 중복될 수 없으며, 비밀번호는 특정 규칙을 따라야만 생성된다.

- ### 시청기능
  - 사용자가 시청하고자 하는 동영상의 정보(채널이름, 동영상 제목, 동영상 소개, 동영상 업데이트 날짜, 조회수, 좋아요/싫어요 수 등)와 영상, 영상 댓글을 Mysql DB에서 가져와 사용자 화면에 보여준다.
  - 영상 댓글을 실시간으로 달 수 있으며 다른 사용자의 댓글에 좋아요, 싫어요, 답변을 달 수 있다. 댓글은 최신순, 인기순으로 정렬할 수 있다.
  - 좋아요, 싫어요 통해 영상의 선호도를 나타낼 수 있으며, 다른 사용자에게 영상 링크를 공유를 할 수 있다. 
  - 사용자 플레이리스트를 생성하여 현재 영상을 저장하여 시청 할 수 있다.
  - 현재 시청 중인 영상의 제목과 해시태그를 분석하여 이와 비슷한 컨텐츠를 제공하는 채널과 영상 추천 기능을 제공한다.

- ### 대시보드
  - 사용자 채널 정보(채널 사진, 채널 이름, 구독자 수, 조회수 상위 3개 영상)와 채널에 올린 비디오의 목록을 mysql에서 불러온다.
  - 채널의 영상 삭제, 수정 및 채널의 주 영상을 고정할 수 있으며 채널 내 영상을 제목으로 검색할 수 있다.
  - 채널의 구독자수 증가, 조회수 증가에 대한 정보를 표로 제공한다(년도 별로 데이터 제공)

- ### 프로필
  - 프로필 정보: 사용자의 프로필 사진과 이름을 표시해 준다
  - 채널 옵션: 채널이 없는 경우 채널 만들기 버튼 표시, 채널이 있는 경우 채널로 이동하는 버튼과 채널 관리 버튼 표시
  - Tab bar
    1. 플레이리스트: 사용자가 만든 플레이리스트 표시
    2. 히스토리: 사용자의 시청 기록을 최신순으로 표시
    3. 좋아요: 사용자가 좋아요를 누른 영상을 최신순으로 표시
    4. 클립: 사용자가 클립한(나중에 보고 싶은) 영상을 표시
- ### 채널
  - Tab bar
    1. 홈: 고정된 커뮤니티, 고정된 영상, 인기 영상을 순서대로 표시
    2. 비디오 리스트: 채널이 올린 비디오를 최신순, 인기순, 날짜순으로 제공
    3. 플레이리스트: 채널 주인이 만든 채널의 플레이리스트를 볼 수 있는 화면
    4. 커뮤니티: 채널이 올린 커뮤니티를 제공
  - 구독: 구독하기, 구독 취소, 알림 활성화/비활성화를 버튼으로 제공한다.
- ### 업로드
  - 영상 업로드 프로세스
    1. 업로드 할 파일 선택
    2. 데이터 입력 (제목, 설명, 썸네일, 플레이리스트, 카테고리, 해시태그)
    3. 추가 설정 (시청 연령 제한 설정, 어린이용 콘텐츠 여부 설정)
    4. 업로드



## 향후 진행사항
- 진행 중인 Front-Back 서버 통신 구현
- Gmail SMTP를 활용해 메일 인증 구현
- 검색엔진 Elasticsearch 이용해 구현
- 추천 알고리즘 : 코드 구현 완료, 적합한 데이터셋을 찾아 학습 후 구현









