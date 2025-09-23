# ========================
# Etapa 1: Build de Angular SSR
# ========================
FROM node:20-alpine AS build

WORKDIR /app

# Copiar dependencias y instalarlas
COPY package*.json ./
RUN npm install

# Copiar el resto del código y compilar
COPY . .
RUN npm run build

# ========================
# Etapa 2: Imagen final
# ========================
FROM node:20-alpine

WORKDIR /app

# Copiar solo artefactos compilados
COPY --from=build /app/dist/redSaludFrontend/server ./dist/redSaludFrontend/server
COPY --from=build /app/dist/redSaludFrontend/browser ./dist/redSaludFrontend/browser
COPY package*.json ./

# Instalar solo dependencias de producción
RUN npm install --only=production

EXPOSE 4000

# Comando de arranque
CMD ["node", "dist/redSaludFrontend/server/server.mjs"]
