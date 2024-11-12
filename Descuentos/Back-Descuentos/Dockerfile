# Etapa 1: Construcción de la aplicación GO
FROM golang:1.23-alpine AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el código fuente del backend
COPY . .

# Compilar la aplicación
RUN go mod init back-descuentos
RUN go mod tidy
#RUN go run main.go

# Exponer el puerto en el que el servidor escuchará
EXPOSE 8080

# Ejecutar aplicación
CMD ["go", "run", "main.go"]