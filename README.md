<img src="https://user-images.githubusercontent.com/97827316/193054865-ad2cd48a-53c8-46f7-b7a9-3c62bc96deed.png">

## **💌비대면, 편지로 따뜻한 마음을 나누세요💌**

## **소중한 사람들과 편지를 주고받으며 기록하며 공유할 수 있는 서비스**

---

<!-- 목차  -->
<!-- ## 목차
  - [0. 개요](#0-개요)
  - [1. 목적](#1-목적)
  - [2. 아키텍처](#2-아키텍처)
  - [3. 기술 스택](#3-기술-스택)
  - [4. 세부 구성](#4-세부-구성)
  - [5. 실행 방법](#5-실행-방법)
  - [6. database](#6-database)
  - [7. api 문서](#7-api-문서)
  - [8. 파일 구조](#8-파일-구조)
  - [9. 팀원](#9-팀원)
  - [10. reference](#10-reference)
  - [11. copyright](#11-copyright) -->

## **Purpose**

1. 온라인에서도 기념일을 함께하기 위해 !
2. 혼자여도 외롭지 않은 기념일을 !
3. 여러사람들을 축하해주고 축하받을 수 있다 !

---

## **System Architecture**

<img src="https://user-images.githubusercontent.com/97827316/192814535-1a36a80f-43ff-42d1-9d61-18fa73f6117b.png">

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

## **Tech Stack**

| **Dev-Ops**    |                                                  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=black"> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=black"> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=amazon%20s3&logoColor=black"> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=amazon%20rds&logoColor=black"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=amazon%20ec2&logoColor=black">                                                   |
| -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend**   | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=black"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"> |
| **Backend**    |                                                                                                                                                                   <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white"> <img src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=black"> <img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black">                                                                                                                                                                    |
| **DB**         |                                                                                                                                                                                                                                                                              <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black">                                                                                                                                                                                                                                                                               |
| **Monitoring** |                                                                                                                                                                                                                     <img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=black"> <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=black">                                                                                                                                                                                                                     |
| **Others**     |            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=black"> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/GitKraken-179287?style=for-the-badge&logo=GitKraken&logoColor=black"> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white">            |

---

## **Reference**

---

- [내 트리를 꾸며줘](https://santafive.notion.site/3834450147f8438ba23daa934d7495a9)

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
