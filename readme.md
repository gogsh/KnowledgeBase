# Knowleage Base

---

## Что это?

**Knowleage Base** — это веб-приложение для записи и хранения статей на языке Markdown.

---

## Попробовать

**Test mail** — test@test.com

**Test password** — 123456

[Playground](https://knowledge-base-virid.vercel.app/)

---

## Горячие клавиши

| action    |                  key                 |
| -------- | :-----------------------------------: |
| CTRL + S | Выйти из режима редактирования статьи |
| CTRL + R |  Зайти в режим редактирования статьи  |

**Примечание:** CTRL + S не сохраняет изменения, а лишь переключает режим отображения тела статьи.
Все сохранения происходят автоматически, пользователю не нужно об этом беспокоиться.

---

## Использование

### Локальный запуск
1. Скопируйте содержимое этого репозитория к себе
2. Установите [MongoDB server](https://www.mongodb.com/try/download/community)
3. Создайте БД. Проще всего это сделать через [MongoDB Compass](https://www.mongodb.com/products/compass)
4. Далее создайте в корне проекта файл .env и заполните следующие поля:

| ключ       |                  значение                              |
| ---------- |:------------------------------------------------------:|
|------------|--------------------------------------------------------|
| LOCAL_URI  | Ссылка на локальную БД                                 |
| DOMAIN     | Локальный адрес на котором будет запущенно приложение  |
| JWT_SECRET | Код доступа к БД                                       |

5. Зайдите в next.config.js и перепишите строку ``` DB_URI: process.env.DB_URI ``` => ``` DB_URI: process.env.LOCAL_URI ```
6. Запустите сборку - npm run build
7. Запустите приложение - npm run start
