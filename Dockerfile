#coucou c'est un dockerfile

FROM httpd:latest
RUN echo "coucou yaya et romain"
COPY . /usr/local/apache2/htdocs/