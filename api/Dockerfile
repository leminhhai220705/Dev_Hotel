FROM node:18-alpine

# Thiết lập thư mục làm việc là thư mục chứa ứng dụng (api)
WORKDIR /src/api

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Cài đặt các công cụ global nếu cần thiết
RUN npm install -g @babel/core @babel/cli @babel/node

# Copy tất cả các tệp mã nguồn từ thư mục hiện tại vào container
COPY . .

# Chạy ứng dụng bằng lệnh npm
CMD ["npm", "run", "start"]