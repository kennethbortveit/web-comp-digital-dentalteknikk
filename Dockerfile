FROM docker.io/maven:3.9.9-eclipse-temurin-21-alpine AS build
WORKDIR /app
COPY . .
RUN mvn clean package -Pprod -DskipTests 

FROM docker.io/eclipse-temurin:21.0.5_11-jre-alpine AS runtime
WORKDIR /app
COPY --from=build ./app/target/demo-0.0.1-SNAPSHOT.jar .

ENTRYPOINT [ \
    "sh", \
    "-c", \
    "java -DADMIN_PASSWORD=$ADMIN_PASSWORD \
    -DPOSTGRES_USER=$POSTGRES_USER \
    -DPOSTGRES_PASSWORD=$POSTGRES_PASSWORD \
    -DRECAPTCHA_SECRET=$RECAPTCHA_SECRET \
    -Dspring.profiles.active=prod \
    -DMAIL_USERNAME=$MAIL_USERNAME \
    -DMAIL_PASSWORD=$MAIL_PASSWORD \
    -jar \
    ./demo-0.0.1-SNAPSHOT.jar" ]

EXPOSE 8080
