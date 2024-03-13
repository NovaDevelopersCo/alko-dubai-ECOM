# Используем образ с Node.js и npm для сборки приложения
FROM node:18 as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и yarn.lock (если есть) для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем файлы приложения
COPY . .

# Собираем приложение
RUN npm run build

# Используем образ Nginx для запуска в продакшн
FROM nginx:alpine

# Копируем собранные файлы фронтенда в директорию Nginx
COPY --from=build /app/out /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Устанавливаем порт для Nginx
EXPOSE 80
