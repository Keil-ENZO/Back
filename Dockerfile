# Étape 1 : Construire l'application React
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

# Étape 2 : Utiliser une image Nginx pour servir l'application
FROM nginx:alpine

# Copiez les fichiers construits du répertoire "dist" de l'étape "build" dans le répertoire de travail de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposez le port 80
EXPOSE 80

# Commande pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
