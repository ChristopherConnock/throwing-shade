# a-frame-of-vue

## Computer setup

Make sure to open ports 3000 (express), 4200 (ember), and 8080 (vue) to Local networks so that others can access your dev build.

1. Go to `Windows Defender Firewall`
2. Click `Advanced settings`
3. Right click on `Inbound Rules`
4. Click `New Rule...`
5. Select `Port`
6. Click `Next`
7. Enter the following `3000, 4200, 8080`
8. Click `Next`
9. Select `Allow the connection` (top option) - forcing secure will not work when running a local dev server
10. Click `Next`
11. Uncheck `Public`
12. Clikc `Next`
13. Enter the name `Dev Ports`
14. Click `Finish`

![image](https://user-images.githubusercontent.com/1400737/47526764-c224e480-d86e-11e8-9cee-ba25d3b8aa8a.png)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### The yucks
AR.js doesn't look like it can be imported as module with webpack goodness
https://github.com/jeromeetienne/AR.js/issues/428
