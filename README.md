# Диплом курса «Базовый JavaScript в браузере»

## Описание

Нажмите на изображение, чтобы посмотреть видео и описание:

[![BHJ Diploma](https://img.youtube.com/vi/zXOyBIajWsM/0.jpg)](https://www.youtube.com/watch?v=zXOyBIajWsM)


Вам нужно разработать приложение для 
управления финансами.

Вот какой функционал должен быть у сервиса:

1. **Регистрация.** Позволяет зарегистрировать нового пользователя в системе. 
Чтобы функция работала, нужно реализовать 
структуры Sidebar.js, Modal.js, AsyncForm.js, RegisterForm.js, User.js, createRequest.js.

2. **Авторизация.** Позволяет авторизовать пользователя в системе. Чтобы функция работала, нужно реализовать структуры Sidebar.js, Modal.js, AsyncForm.js, 
LoginForm.js, User.js, createRequest.js.

3. **Выход.** Позволяет деавторизовать пользователя в системе. Чтобы функция работала, нужно реализовать структуры Sidebar.js, User.js, createRequest.js.

4. **Создание счетов.** Чтобы функция работала, нужно реализовать структуры AccountsWidget.js, TransactionsPage.js, Modal.js, 
AsyncForm.js, CreateAccountForm.js, Entity.js, Account.js, createRequest.js.

5. **Удаление счетов.** Чтобы функция работала, нужно реализовать структуры TransactionsPage.js, Entity.js, Account.js, createRequest.js.

6. **Создание транзакций.** Чтобы функция работала, нужно реализовать структуры TransactionsWidget.js, Modal.js, AsyncForm.js, 
CreateTransactionForm.js, Entity.js, Transaction.js, createRequest.js.

7. **Удаление транзакций.** Чтобы функция работала, нужно реализовать структуры TransactionsPage.js, Entity.js, Transaction.js, createRequest.js.

У вас уже готовы HTML- и CSS-разметки. Ваша задача — реализовать JavaScript-логику.

Файловая структура проекта предусматривает разделение управляющей логики на графический интерфейс и API.

Например, рассмотрим функцию регистрации нового пользователя в системе. Требуется нажать на кнопку «Регистрация» 
боковой панели (Sidebar.js), чтобы открылось модальное окно с формой. При нажатии кнопки «Регистрация» в этой форме требуется выполнить отправку данных из формы регистрации на сервер с помощью метода User.register(). При получении положительного ответа от сервера нужно установить состояние 
App.setState ('user-logged') и закрыть модальное окно регистрации.
