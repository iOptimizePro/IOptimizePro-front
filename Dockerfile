# node 构建
FROM node:latest
MAINTAINER pepedd864 'pepedd@qq.com'
WORKDIR /app
COPY . .
# 设置 node 阿里镜像
RUN npm config set registry https://registry.npmmirror.com
# 设置--max-old-space-size
ENV NODE_OPTIONS='--max-old-space-size=16384'
# 设置阿里镜像、pnpm、依赖、编译
RUN npm install pnpm -g && \
    pnpm install --frozen-lockfile && \
    pnpm run build && \
    echo "🎉 编 🎉 译 🎉 成 🎉 功 🎉\n" \
## nginx 部署
#FROM nginx:latest
## 0 代表上一步骤 使用FROM 时就创建了一个镜像层，这个镜像层的序号就是0
#COPY --from=0 /app/dist /usr/share/nginx/html/dist
#COPY --from=0 /app/nginx/nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80
#RUN nginx -g 'daemon off;' && \
#    echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉\n"
