# ========================
# Etapa 1: Build de Angular SSR
# ========================
FROM node:20-alpine AS build

WORKDIR /app

# Instalar dependencias con lockfile
COPY package*.json ./
RUN npm ci

# Copiar el resto del código y compilar en modo producción
COPY . .
RUN npm run build

# ========================
# Etapa 2: Copiar solo deps runtime
# ========================
FROM node:20-slim AS deps

WORKDIR /app

COPY  package*.json ./
# Instalar solo dependencias necesarias para correr el SSR
RUN npm ci --omit=dev && npm cache clean --force

# ========================
# Etapa 3: Imagen final super ligera con Distroless
# ========================
FROM gcr.io/distroless/nodejs20:nonroot

WORKDIR /app

# Copiar build de Angular SSR
COPY --from=build /app/dist/redSaludFrontend ./dist/redSaludFrontend

# Copiar solo node_modules de producción
COPY --from=deps /app/node_modules ./node_modules

# Copiar package.json (por si alguna lib lo requiere en runtime)
COPY package*.json ./

# Exponer puerto SSR
EXPOSE 4000

# Arranque del servidor
CMD ["dist/redSaludFrontend/server/server.mjs"]
