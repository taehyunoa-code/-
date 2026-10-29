새벽누리 정적 홈페이지 — 시작 안내
==================================

이 폴더는 HTML/CSS/JavaScript만으로 운영하는 정적 홈페이지입니다.
로그인, 데이터베이스, 서버 코드는 없습니다. 기사는 HTML 파일을 직접 편집해 게시합니다.

파일 안내
---------
index.html                 메인 페이지와 기사 카드 목록
styles.css                 전체 디자인
script.js                  날짜 표시 및 기사 분류 필터
articles/sample-article.html 기사 상세 페이지 예시(실제 기사로 교체)
editorial.html              편집 원칙
privacy.html                개인정보 안내 초안(실제 운영에 맞게 수정 필요)

기사를 새로 게시하는 방법
------------------------
1. articles/sample-article.html을 복사합니다.
2. 복사한 파일을 예: articles/2026-10-youth-policy.html 로 저장합니다.
3. 파일 안의 <title>, 기사 제목 <h1>, 요약, 날짜, 기자명, 본문을 실제 기사 내용으로 수정합니다.
4. 대표 이미지를 넣으려면 assets 폴더에 이미지를 넣고, 기사 HTML의
   <div class="article-cover">...</div> 영역을 다음 예시로 바꿉니다.

   <figure class="article-cover" style="display:block">
     <img src="../assets/파일명.jpg" alt="사진 설명" style="width:100%">
     <figcaption>사진 설명 / 사진 제공</figcaption>
   </figure>

5. index.html에서 기존 기사 카드 블록(<article class="article-card"...>...</article>)을 복사해
   새 카드로 바꿉니다. 링크를 새 파일 경로로 바꾸고 data-category 값은 다음 중 하나로 맞춥니다:
   사회, 교육·청소년, 지역, 문화, 기획, 또는 필요에 맞춰 script.js와 index.html의 분류 버튼을 함께 수정합니다.
6. index.html을 저장하고 사이트를 다시 배포합니다.

중요: 기사 본문을 수정하는 것만으로는 메인 페이지에 새 카드가 생기지 않습니다.
기사 상세 HTML과 index.html의 카드 목록, 두 곳을 수정해야 합니다.
예시 기사는 샘플 문구이므로 실제 보도로 오해되지 않도록 공개 전에 교체하거나 삭제하세요.

무료 배포 방법 A — GitHub Pages
-------------------------------
1. github.com 에서 계정을 만들거나 로그인합니다.
2. 새 저장소(repository)를 만듭니다. 예: saebyeoknuri-site
   공개 저장소(Public)로 설정하면 가장 단순합니다.
3. 이 폴더 안의 파일과 폴더를 저장소 최상위(root)에 업로드합니다.
   index.html이 저장소 최상위에 있어야 합니다.
4. 저장소의 Settings → Pages로 이동합니다.
5. Build and deployment에서 Deploy from a branch를 선택합니다.
6. Branch는 main, 폴더는 /(root)를 선택하고 Save를 누릅니다.
7. 몇 분 기다린 뒤 Pages 화면에 표시되는 주소로 접속합니다.
   보통 https://사용자명.github.io/저장소이름/ 형태입니다.
8. 수정한 파일을 다시 업로드/커밋하면 자동으로 사이트가 갱신됩니다.

무료 배포 방법 B — Netlify
-------------------------
1. netlify.com 에서 가입/로그인합니다.
2. Add new site 또는 사이트 배포 메뉴에서 수동 배포(Deploy manually)를 선택합니다.
3. 이 프로젝트 폴더를 통째로 업로드합니다(압축 ZIP이 아닌 폴더 업로드가 가능한 화면을 사용).
4. 생성된 *.netlify.app 주소에서 사이트를 확인합니다.
5. 파일을 수정하면 수정된 폴더를 다시 배포합니다.

도메인 saebyeoknuri.kr
---------------------
GitHub Pages 또는 Netlify의 사이트 설정에서 Custom domain / Add domain을 선택해
saebyeoknuri.kr을 입력합니다. 그 다음 도메인을 구매한 업체의 DNS 관리 화면에서
호스팅 업체가 안내하는 DNS 레코드를 정확히 등록해야 합니다.
도메인 자체는 일반적으로 유료이며, DNS 전파와 HTTPS 인증서 적용에 시간이 걸릴 수 있습니다.
도메인 업체와 호스팅 업체의 현재 안내를 따르세요.

테스트 체크리스트
-----------------
[ ] 휴대전화와 PC에서 레이아웃 확인
[ ] 모든 기사 링크가 맞는지 확인
[ ] 기사 날짜·기자명·자료 출처 확인
[ ] 사진의 사용 권한·초상권·대체 텍스트 확인
[ ] 개인정보 안내와 편집 원칙을 실제 운영 규정에 맞게 수정
[ ] 예시 기사·예시 문구를 실제 콘텐츠로 교체
[ ] 오탈자, 링크, 외부 자료 출처 최종 확인

한계와 주의
-----------
- HTML 파일만으로 기자 로그인, 웹상 기사 제출, 비공개 승인, 비밀번호 보호를 구현할 수 없습니다.
- 이 사이트는 공개용 정적 파일입니다. 비공개로 해야 할 개인정보나 내부 문서를 업로드하지 마세요.
- Google Fonts는 외부 인터넷 연결이 필요합니다. 필요하면 styles.css의 @import를 삭제할 수 있습니다.
- 무료 호스팅 제공 조건은 변경될 수 있으니 배포 시 공식 안내를 확인하세요.
