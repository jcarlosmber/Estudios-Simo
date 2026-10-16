# Dockerfile para Coolify - SIMO Prep DIAN 2676
FROM node:20-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias de producción
RUN npm install --omit=dev

# Copiar el resto del código del proyecto
COPY . .

# Crear directorio de datos persistentes
RUN mkdir -p /app/data

# Puerto que expone la aplicación
EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=production
ENV DATA_DIR=/app/data

# Iniciar servidor
CMD ["node", "server.js"]
