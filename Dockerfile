FROM node:20-alpine
WORKDIR /app

# copy only package files first for better layer caching
COPY package*.json ./
RUN npm ci --only=production --legacy-peer-deps || npm install --production --legacy-peer-deps

# now copy the rest of the app
COPY . .

EXPOSE 3000
CMD ["node", "src/index.js"]
