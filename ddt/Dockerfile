FROM maven:3.9.6-eclipse-temurin-21 as build
COPY . .
RUN ["mvn", "clean", "install"]

FROM eclipse-temurin:21
COPY --from=build ./target/ddt-0.0.1-SNAPSHOT.jar ./ddt.jar
ENTRYPOINT java -jar ./ddt.jar
