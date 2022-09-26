#Build frontend
FROM node:16-alpine as builderFront
WORKDIR /app

COPY frontend/public public
COPY frontend/src src
COPY frontend/package-lock.json .
COPY frontend/package.json .

RUN npm ci
RUN npm run build

#Build backend
FROM openjdk:17-jdk-alpine as builderBackend
WORKDIR /app

COPY backend/gradle/ gradle/
COPY backend/src/ src/
COPY backend/build.gradle .
COPY backend/gradlew .
COPY backend/gradlew.bat .
COPY backend/settings.gradle .
COPY --from=builderFront ./app/build/ src/main/resources/static/
RUN chmod +x gradlew
RUN ./gradlew build

#Server Stage
FROM eclipse-temurin:17-jdk-focal
COPY --from=builderBackend ./app/build/libs/*.jar api.jar
ENV PORT ''
ENV DATABASE_HOST ''
ENV DATABASE_PORT ''
ENV DATABASE_NAME ''
ENV DATABASE_USERNAME ''
ENV DATABASE_PASSWORD ''

EXPOSE $PORT
ENTRYPOINT ["java", "-jar", "api.jar"]