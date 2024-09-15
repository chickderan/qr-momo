FROM tomcat:9-jre11

COPY . /usr/local/tomcat/webapps/

EXPOSE 8080
