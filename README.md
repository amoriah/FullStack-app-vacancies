# FullStack-app-vacancies

FullStack приложение, платформа, на которой можно создавать и откликаться на вакансии работодателей.<br>

Бекенд: Node.js, Express.js, Sequelize, Postgresql, Postman.<br>
Фронтенд: React, Redux, Style-components. 

## Запуск

1. npm i // установка пакетов
2. npm run dbr // создание базы данных
3. npm start // запуск сервера, должен быть запущен сервер postgres
4. сd client // переходим в директорию клиента
5. npm i // установка пакетов
6. npm start // запуск приложения

## Функционал

Доступ:

В приложение могут войти два типа пользователей
- Соискатель. 
- Работадатель.

Страницы:

- Вакансии. Видна обоим типам пользователей, представляет из себя список вакансий. 
- Мои вакансии. Видна только сооискателям, там перечисленны вакансии на которые откликался пользователь. 
- Активные вакансии. Видна только работодателям. Список активных вакансий которые создал этот пользователь. 
- Создать вакансию. Доступна только работодателям. Представляет из себя страницу, где пользователь может создать вакансию. 
- Авторизация. 
- Регистрация. 

Фичи:

- работадатель видит кол-во откликнувшихся на ЕГО вакансии пользователей.
- работадатель в карточке вакансии может закрыть вакансию. 
- для соискателя помечаются вакансии на которые он откликнулся.

# Примечание

Проект изначально разрабатывался на gitlab.<br>
Что хочется улучшить:
1. Вместо style-components использовать Ant Design.
2. Переписать на TypeScript.

## Картиночки

Добавить картиночки
