## Основная информация

### Функционал:

- Социальный калькулятор
- Тепловая карта
- Статистика регионов
  
### Особенности проекта:

- Тепловая карта бедности 
- Анализ регионов
- Социальный калькулятор для гражадн республики

### Стек исользуемых технологий:

1. Backend: Python, FastAPI
2. Frontend: React JS, Yandex Maps API, HTML, CSS, JavaScript
3. Work: Git, Docker

### Демо:

Демоверсия проекта находится по адресу: [udmhelp.ru](https://udmhelp.ru/) 

**Тестовые аккаунты:**\
**admin:**\
Почта - `admin@example.com`\
Пароль - `admin`

**user:**\
Почта - `user@example.com`\
Пароль - `user`


## Установка и запуск:

### Установка необходимых пакетов:

1. Обновите указатель локальных пакетов - `sudo apt update`
2. Выполните установку Node.Js - `sudo apt install nodejs`
3. Выполните установку git - `sudo apt install git`
4. Выполните установку Docker:
```sh
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce
sudo systemctl status docker
```

### Установка необходимых зависимостей:

1. Склонируйте репозиторий - `git clone https://github.com/Dragonprod/lifetechhack.git`
2. Установите зависимости для backend - `cd backend && pip install -r requirements.txt`
3. Установите зависимости для frontend - `cd frontend && npm install`
4. Выполните миграции базы данных - `cd backend/database && python3 migrate.py`


### Запуск:

1. Выполните команду - `docker-compose up -d`

### Пути:

**Frontend part** - [http://localhost:3000/](http://localhost:3000/)\
**Backend part** - [http://localhost:8080/](http://localhost:8080/)\
**Backend docs part** - [http://localhost:8080/docs](http://localhost:8080/)

## Разработчики:

**Васечкин Артём FullStack** - [@DragonProd](https://t.me/DragonProd)\
**Шевченко Артём Backend** - [@Shmyaks](https://t.me/Shmyaks)\
**Коробов Артём Frontend** - [@maxcore25](https://t.me/maxcore25)\
**Павлов Сергей Backend** - [@thebordev](https://t.me/thebordev)