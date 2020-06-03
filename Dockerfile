# Dockerfile should install wordpress into /src/app,

# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

FROM composer:latest as builder
WORKDIR /src
COPY ./composer.json .
RUN composer install
RUN ls
RUN cd vendor && ls
RUN cd wp-content/plugins && ls
# VOLUME /src/wp-content


FROM wordpress:5.4.1-php7.2-apache as intermediate
# copying from absolute path to absolute path
# Docker keep overwriting this on docker compose
# TODO mount local version of wp-config.php
COPY --from=builder /src/wp-content/plugins /var/www/html/wp-content/plugins
COPY --from=builder /src/wp-content/plugins /to-sync/plugins
RUN cd /var/www/html/wp-content/plugins && ls

# VOLUME /var/www/html
# Runs apache

FROM intermediate
# TODO make it copy a basic .htaccess.conf file and build it with ENV variables????
VOLUME /var/www/html
EXPOSE 80:80
# TODO make own version of docker-entrypoint.sh file that adds more things?
CMD ["apache2-foreground"]