FROM nginx:alpine

# Copy build output to Nginx html folder
COPY ./dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
