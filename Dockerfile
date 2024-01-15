# node 构建
FROM node:18 AS build-stage
MAINTAINER pepedd864 'pepedd@qq.com'
WORKDIR /app
COPY . .
# 设置阿里镜像、pnpm、依赖、编译
RUN npm config set registry https://registry.npmmirror.com && \
    npm install pnpm -g && \
    pnpm install --frozen-lockfile && \
    pnpm run build && \
    echo "🎉 编 🎉 译 🎉 成 🎉 功 🎉\n" \
# nginx 部署
FROM nginx:latest AS production-stage
# 0 代表上一步骤 使用FROM 时就创建了一个镜像层，这个镜像层的序号就是0
COPY --from=build-stage /app/dist /usr/share/nginx/html/dist
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
RUN nginx -g 'daemon off;' && \
    echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉\n"
