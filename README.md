<div align="center">

<img src=".github/Logo.png" width="150px" draggable="false"><br>

# 2022 Cheek

Набором инструментов для работы с IT-талантами

<img src="https://i.imgur.com/wWiF9t1.png" draggable="false"><br>
</div>


# 2022 Cheek hackathon Team README.md
# [Cheek Website](https://2022-daelim-hackathon.vercel.app/)
## 🖥️ Команда

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/Foxs-m"><img src="https://avatars.githubusercontent.com/u/91510758?v=4" width="100px;" alt=""/><br /><sub><b>Гилёва Вероника</b></sub></a><br />🦊Design</td>
    <td align="center"><a href="https://github.com"><img src="https://avatars.githubusercontent.com/u/4111118?v=4" width="100px;" alt=""/><br /><sub><b>Анатолий Осипов</b></sub></a><br />🧑‍💻Managment</td>
    <td align="center"><a href="https://github.com/ArtemBoytunov"><img src="https://avatars.githubusercontent.com/u/64827737?v=4" width="100px;" alt="이미지"/><br /><sub><b>Артём Бойтунов</b></sub></a><br />🔥Web -FullStack</td>
    <td align="center"><a href="https://github.com/createandchoose"><img src="https://avatars.githubusercontent.com/u/42153584?v=4" width="100px;" alt="이미지"/><br /><sub><b>Попов Айтал</b></sub></a><br />🦄Front-End</td>
  </tr>
</table>

## О проектк

Сheck Flow это платформа с набором инструментов для работы с IT-талантами: проведение хакатонов, командообразование,  шаг №1  который продвинет и поможет тебе  раскрыться как IT-специалист.

## Stack

- JavaScript
- FireBase
- JQuery
- Tailwindcss
- headlessUI
- heroicons

## Folder path

```js
./core
	|-/components
			|-/commons	  //공통 컴포넌트 정의 ex) Button, Container
	|-/atoms          //Recoil Atoms
	|-/hooks          //커스텀 hooks 정의

./pages             //Client Side pages
	|-/api            //Server Side

./public
	|-/assets         //프로젝트에서 사용되는 정적이미지 파일을 저장한다.

./prisma            //Prisma 파일 작성
./styles            //global style 작성
.tailwind.config.js //tailwindcss 설정 작성
```

## Before Starting

### 의존성 패키지 설치

```
yarn
```

### 개발 환경 DB migration

```
npx prisma migration
```

### 개발 서버 시작

```
yarn dev
```
