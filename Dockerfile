# Stage 1: Build the React app
FROM node:18-alpine AS build
WORKDIR /kaur_baljit_final_site
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx on port 5575
FROM nginx:alpine
COPY --from=build /kaur_baljit_final_site/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5575
CMD ["nginx", "-g", "daemon off;"]