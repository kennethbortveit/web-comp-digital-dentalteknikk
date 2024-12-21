FROM docker.io/maven:3.9.9-eclipse-temurin-21 as build
WORKDIR /app
COPY . .
RUN ["mvn", "clean", "package"]

FROM docker.io/eclipse-temurin:21.0.5_11-jre-ubi9-minimal as runtime
WORKDIR /app
COPY --from=build ./app/target/demo-0.0.1-SNAPSHOT.jar .

ENTRYPOINT ["java", "-jar", "./demo-0.0.1-SNAPSHOT.jar"]

EXPOSE 8080
