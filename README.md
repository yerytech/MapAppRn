# MapsApp

Este proyecto es una aplicación móvil desarrollada con React Native y Expo (Bare Workflow). Su función principal es mostrar un mapa interactivo que permite visualizar rutas entre dos puntos, seguir la ubicación del usuario en tiempo real y hacer zoom automático. Además, gestiona permisos para habilitar el acceso a la localización.

## Repositorio

El código fuente de este proyecto está disponible en:
[GitHub - MapAppRn](https://github.com/yerytech/MapAppRn)

## Requisitos

- Node.js >= 16
- Expo CLI
- React Native CLI
- Android Studio (para emulador o dispositivo físico Android)
- Xcode (para pruebas en iOS)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/yerytech/MapAppRn.git
   cd MapAppRn
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Asegúrate de haber ejecutado `expo prebuild` si no lo has hecho antes:
   ```sh
   expo prebuild
   ```

## Configuración de Permisos

Asegúrate de configurar los permisos necesarios en cada plataforma:

### Android
Edita el archivo `android/app/src/main/AndroidManifest.xml` y agrega:
```xml
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
```

### iOS
Edita el archivo `ios/tu-proyecto/Info.plist` y agrega:
```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>Necesitamos tu ubicación para mostrarte rutas y seguir tu posición en tiempo real.</string>
```

## Uso

Ejecuta la aplicación en modo desarrollo:
```sh
expo run:android # Para Android
expo run:ios # Para iOS
```

## Características

- **Visualización de Mapas:** Muestra un mapa interactivo.
- **Rutas:** Calcula y muestra rutas entre dos puntos.
- **Seguimiento en Tiempo Real:** Sigue la ubicación del usuario.
- **Zoom Automático:** Ajusta el zoom para enfocar la ruta y la ubicación del usuario.
- **Gestión de Permisos:** Solicita y gestiona permisos de localización.

## Tecnologías Utilizadas

- React Native
- Expo (Bare Workflow)
- Expo Location
- React Native Maps
- React Native Permissions

## Configuración de React Native Permissions

Se ha utilizado la librería `react-native-permissions` para gestionar los permisos de ubicación. Asegúrate de instalarla ejecutando:
```sh
npm i react-native-permissions
```

### Android
Asegúrate de añadir los permisos en `android/app/src/main/AndroidManifest.xml`.

### iOS
En el archivo `ios/tu-proyecto/Info.plist`, agrega las claves necesarias para permisos adicionales si es requerido.

## Contribución

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva`).
3. Realiza tus cambios y haz commit (`git commit -m "Agrega nueva funcionalidad"`).
4. Haz push a la rama (`git push origin feature-nueva`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT.


