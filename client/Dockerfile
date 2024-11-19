# Sử dụng node image để build React app
FROM node:18-alpine AS build

# Thiết lập thư mục làm việc
WORKDIR /src/client

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ nội dung client
COPY . .

# Build React app
RUN npm run build

# Sử dụng nginx để serve React app
FROM nginx:alpine

# Copy file cấu hình nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copy build output của React app vào nginx
COPY --from=build /src/client/build /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Khởi động nginx
CMD ["nginx", "-g", "daemon off;"]