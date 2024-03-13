# Используем образ с Node.js и npm для сборки приложения
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и yarn.lock (если есть) для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем файлы приложения
COPY . .

# Запускаем приложение
CMD ["npm", "run", "start"]
