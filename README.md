<img src="https://user-images.githubusercontent.com/97827316/193054865-ad2cd48a-53c8-46f7-b7a9-3c62bc96deed.png">

💌비대면, 편지로 따뜻한 마음을 나누세요💌

소중한 사람들과 편지를 주고받으며 기록하며 공유할 수 있는 서비스

---

<!-- 목차  -->

## **Contents**

- [Purpose](#purpose)
- [System Architecture](#system-architecture)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#Installation)
- [Database](#database)
- [API](#api)
- [File Directory](#file-directory)
- [Demo](#Demo)
- [Team Member](#team-member)
- [Reference](#reference)

---

## **Purpose**

1. 온라인에서도 기념일을 함께하기 위해 !
2. 혼자여도 외롭지 않은 기념일을 보내기 위해 !
3. 여러사람들을 축하해주고 축하받기 위해 !

---

## **System Architecture**

<img src="https://user-images.githubusercontent.com/105929978/193292189-dc9ac884-2ca6-4934-8afd-464de9562ef6.png">

---

## **Tech Stack**

| **Dev-Ops**    |                                                  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=black"> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=black"> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=amazon%20s3&logoColor=black"> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=amazon%20rds&logoColor=black"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=amazon%20ec2&logoColor=black">                                                   |
| -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend**   | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=black"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"> |
| **Backend**    |                                                                                                                                                                   <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white"> <img src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=black"> <img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black">                                                                                                                                                                    |
| **DB**         |                                                                                                                                                                                                                                                                              <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black">                                                                                                                                                                                                                                                                               |
| **Monitoring** |                                                                                                                                                                                                                     <img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=black"> <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=black">                                                                                                                                                                                                                     |
| **Others**     |                                                            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/GitKraken-179287?style=for-the-badge&logo=GitKraken&logoColor=black"> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white">                                                             |

---

## **Features**

- 회원가입
<p align="center">
  <img src="https://user-images.githubusercontent.com/105929978/192843587-70545735-2615-48b5-9ba1-eb2be2673591.gif">
</p>
<br>

- 로그인
<p align="center">
  <img src="https://user-images.githubusercontent.com/105929978/192843692-48885379-ca8e-470d-999d-cef66d447b0f.gif">
</p>
<br>

- 메인페이지
<p align="center">
  <img src="https://user-images.githubusercontent.com/105929978/192843700-9fe94778-f0df-4a35-bd02-b8ba6e97127d.png">
</p>
  메인페이지에서 우측 상단 공유버튼을 누르면 url이 복사되는데 url을 편지를 받고 싶은 사람에게 전송할 수 있습니다.
  <br>
  또한 이 페이지에서 아이콘을 클릭하면 받은 편지를 확인할 수 있습니다.

<br>

- 편지를 작성하는 사람의 메인페이지
<p align="center">
  <img src="https://user-images.githubusercontent.com/105929978/192843705-4361566f-275e-4448-b555-c7ad150d7fc2.png">
</p>
  이 페이지에서 아이콘을 클릭하여 원하는 이벤트에 편지를 작성할 수 있습니다.
  <br><br>

- 마이 페이지
<p align="center">
  <img src="https://user-images.githubusercontent.com/105929978/193104283-47264f00-4dde-42a4-8a1b-79e353f4f2d1.png">
</p>
<br>

- 편지 작성 페이지
<p align="center">
  <img src="https://user-images.githubusercontent.com/105929978/192845003-1db16474-52c7-4fe3-951c-7e0e46dbb76e.gif">
</p>
<br>

- 디데이 페이지
  <p align="center">
    <img src="https://user-images.githubusercontent.com/105929978/192845282-af830adf-ab4d-435b-afa8-31073c535329.gif">
  </p>
    편지를 볼 수 있는 날짜가 아닐 때 편지를 확인하면 나타나는 페이지 입니다.

<br><br>

- 편지 리스트 페이지
<p align="center">
  <img src="https://user-images.githubusercontent.com/105929978/192844999-4ef22738-24d0-4fd5-8781-6793497057be.gif">
</p>
<br>

- 편지 캡쳐
  <p align="center">
    <img src="https://user-images.githubusercontent.com/105929978/192844987-3af80481-e18c-46fc-bc22-e4db2325b859.gif">
  </p>
    우측 상단의 공유버튼을 클릭하면 원하는 편지를 다운받을 수 있습니다.
    <br>

---

## **Installation**

> ### Clone Repository

```
git clone --recursive https://github.com/2022-SN-AI-Pre-Internship-Team-D/letterman.git
```

> ### Run

```
docker-compose -f docker-compose.prod.yml up --build
```

---

## **Database**

<img src="https://user-images.githubusercontent.com/97827316/192815894-2d441009-c234-40fa-a3cb-1be2bc8bd79a.png">

---

## **API**

<details>
<summary>Swagger</summary>
<div markdown="1">
<br>
<img src="https://user-images.githubusercontent.com/97827316/192817400-72c4c11c-4f68-4d17-a1b7-52256f63d589.png">
</div>
</details>
<hr>

## **File Directory**

<details>
<summary>FRONTEND</summary>

```
letterman-front
┣ public
 ┣ images
 ┃ ┣ back1.png
 ┃ ┣ back2.png
 ┃ ┣ back3.png
 ┃ ┣ cookieimg.png
 ┃ ┣ halloweenimg.png
 ┃ ┣ letterimg.png
 ┃ ┣ newyearimg.png
 ┃ ┣ thankimg.png
 ┃ ┣ treeimg.png
 ┃ ┗ valentineimg.png
 ┣ favicon.ico
 ┣ index.html
 ┣ logo192.png
 ┣ logo512.png
 ┣ manifest.json
 ┗ robots.txt
┣ src
 ┣ components
 ┃ ┣ App
 ┃ ┃ ┗ AuthRouter.tsx
 ┃ ┣ Audio
 ┃ ┃ ┗ audioPlayer.jsx
 ┃ ┣ MailList
 ┃ ┃ ┣ EachMail.tsx
 ┃ ┃ ┣ MailInput.tsx
 ┃ ┃ ┗ MoreButton.tsx
 ┃ ┣ RemainingDays
 ┃ ┃ ┣ EachCookie.tsx
 ┃ ┃ ┗ FooterCookies.tsx
 ┃ ┣ MovePath.tsx
 ┃ ┣ RemainModal.tsx
 ┃ ┗ ResultModal.tsx
 ┣ font
 ┃ ┗ SeaweedScript.ttf
 ┣ images
 ┃ ┣ .DS_Store
 ┃ ┣ Enter.png
 ┃ ┣ back.png
 ┃ ┣ circlecheck.png
 ┃ ┣ cookieimg.png
 ┃ ┣ downloadAudio.png
 ┃ ┣ letterbg.png
 ┃ ┣ logo192.png
 ┃ ┣ mic.png
 ┃ ┣ pauseAudio.png
 ┃ ┣ pencilImage.svg
 ┃ ┣ playAudio.png
 ┃ ┣ plus.png
 ┃ ┣ postcard.png
 ┃ ┣ profile.png
 ┃ ┣ shareimg.png
 ┃ ┣ star.svg
 ┃ ┣ stopAudio.png
 ┃ ┣ urlshare.png
 ┃ ┗ userprofile.png
 ┣ page
 ┃ ┣ .DS_Store
 ┃ ┣ BirthMailListPage.tsx
 ┃ ┣ LoginPage.tsx
 ┃ ┣ MailListPage.tsx
 ┃ ┣ MailWritePage.tsx
 ┃ ┣ MainPage.tsx
 ┃ ┣ MainPage2.tsx
 ┃ ┣ Mypage.tsx
 ┃ ┗ SignupPage.tsx
 ┣ redux
 ┃ ┣ configStore.tsx
 ┃ ┗ userID.tsx
 ┣ utils
 ┃ ┣ ColorSystem.tsx
 ┃ ┣ getUUID.tsx
 ┃ ┣ pageStyle.css
 ┃ ┣ tokenManager.tsx
 ┃ ┗ useCopyClipBoard.tsx
 ┣ .DS_Store
 ┣ App.tsx
 ┣ image.d.ts
 ┣ index.tsx
 ┗ tailwind.css
```

</details>
<details>
<summary>BACKEND</summary>

```
letterman-back
    ├── README.md
    ├── backend
    │   ├── backend
    │   │   ├── __init__.py
    │   │   ├── __pycache__
    │   │   │   ├── __init__.cpython-39.pyc
    │   │   │   ├── settings.cpython-39.pyc
    │   │   │   ├── urls.cpython-39.pyc
    │   │   │   └── wsgi.cpython-39.pyc
    │   │   ├── asgi.py
    │   │   ├── settings.py
    │   │   ├── urls.py
    │   │   └── wsgi.py
    │   ├── devenvs
    │   │   └── mysqldb.env
    │   ├── dockerfile
    │   ├── letters
    │   │   ├── __init__.py
    │   │   ├── __pycache__
    │   │   │   ├── __init__.cpython-39.pyc
    │   │   │   ├── admin.cpython-39.pyc
    │   │   │   ├── apps.cpython-39.pyc
    │   │   │   ├── models.cpython-39.pyc
    │   │   │   ├── serializers.cpython-39.pyc
    │   │   │   ├── urls.cpython-39.pyc
    │   │   │   ├── utils.cpython-39.pyc
    │   │   │   └── views.cpython-39.pyc
    │   │   ├── admin.py
    │   │   ├── apps.py
    │   │   ├── migrations
    │   │   │   ├── 0001_initial.py
    │   │   │   ├── 0002_initial.py
    │   │   │   ├── 0003_alter_letter_anni_id.py
    │   │   │   ├── 0004_alter_letter_anni_id.py
    │   │   │   ├── __init__.py
    │   │   │   └── __pycache__
    │   │   │       ├── 0001_initial.cpython-39.pyc
    │   │   │       ├── 0002_initial.cpython-39.pyc
    │   │   │       ├── 0003_alter_letter_anni_id.cpython-39.pyc
    │   │   │       ├── 0004_alter_letter_anni_id.cpython-39.pyc
    │   │   │       └── __init__.cpython-39.pyc
    │   │   ├── models.py
    │   │   ├── serializers.py
    │   │   ├── tests.py
    │   │   ├── urls.py
    │   │   ├── utils.py
    │   │   └── views.py
    │   ├── manage.py
    │   ├── requirements.txt
    │   └── users
    │       ├── __init__.py
    │       ├── __pycache__
    │       │   ├── __init__.cpython-39.pyc
    │       │   ├── admin.cpython-39.pyc
    │       │   ├── apps.cpython-39.pyc
    │       │   ├── models.cpython-39.pyc
    │       │   ├── serializers.cpython-39.pyc
    │       │   ├── urls.cpython-39.pyc
    │       │   └── views.cpython-39.pyc
    │       ├── admin.py
    │       ├── apps.py
    │       ├── migrations
    │       │   ├── 0001_initial.py
    │       │   ├── __init__.py
    │       │   └── __pycache__
    │       │       ├── 0001_initial.cpython-39.pyc
    │       │       └── __init__.cpython-39.pyc
    │       ├── models.py
    │       ├── serializers.py
    │       ├── tests.py
    │       ├── urls.py
    │       └── views.py
    └── docker-compose.yml
```

</details>
<hr>

<!-- 데모영상 -->

## **Demo**

---

## **Team Member**

<table width="950">
    <thead>
    </thead>
    <tbody>
    <tr>
        <th>사진</th>
         <td width="100" align="center">
            <a href="https://github.com/Zzyoon">
                <img src="https://avatars.githubusercontent.com/u/98005864?v=4.png" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/Ellie010707">
                <img src="https://avatars.githubusercontent.com/u/41159837?v=4.png" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/bicco2">
                <img src="https://avatars.githubusercontent.com/u/77577434?v=4.png" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/suhyeon3484">
                <img src="https://avatars.githubusercontent.com/u/105929978?v=4.png" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/gogo220">
                <img src="https://avatars.githubusercontent.com/u/112369016?v=4.png" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/yura0302">
                <img src="https://avatars.githubusercontent.com/u/97827316?v=4.png" width="60" height="60">
            </a>
    </tr>
    <tr>
        <th>이름</th>
        <td width="100" align="center">양지윤</td>
        <td width="100" align="center">김유림</td>
        <td width="100" align="center">진호병</td>
        <td width="100" align="center">이수현</td>
        <td width="100" align="center">김수민</td>
        <td width="100" align="center">김유라</td>
    </tr>
    <tr>
        <th>역할</th>
        <td width="150" align="center">
            backend<br>
            devops<br>
        </td>
        <td width="150" align="center">
            backend<br>
            devops<br>
        </td>
        <td width="150" align="center">
            frontend<br>
            devops<br>
        </td>
        <td width="150" align="center">
            frontend<br>
            devops<br>
        </td>
        <td width="150" align="center">
            backend<br>
            devops<br>
        </td>
        <td width="150" align="center">
            frontend<br>
        </td>
    </tr>
    <tr>
        <th>GitHub</th>
        <td width="100" align="center">
            <a href="https://github.com/Zzyoon">
                <img src="http://img.shields.io/badge/Zzyoon-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/Ellie010707">
                <img src="http://img.shields.io/badge/Ellie010707-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/bicco2">  
                <img src="http://img.shields.io/badge/bicco2-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/suhyeon3484">
                <img src="http://img.shields.io/badge/suhyeon3484-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/gogo220">
                <img src="http://img.shields.io/badge/gogo220-green?style=social&logo=github"/>
            </a>
        </td>
         <td width="100" align="center">
            <a href="https://github.com/yura0302">
                <img src="http://img.shields.io/badge/yura0302-green?style=social&logo=github"/>
            </a>
    </tr>
    </tbody>
</table>

## **Reference**

---

- [내 트리를 꾸며줘](https://santafive.notion.site/3834450147f8438ba23daa934d7495a9)

---
