# Tabla de multiplicar por consola

Para utilizar este programa se debe ejecutar el comando
```
npm install
```

# Ayudas :
```
Opciones:
      --help     Muestra ayuda                                          [booleano]
      --version  Muestra número de versión                              [booleano]
  -b, --base     Es la base de la tabla de multiplicar                  [número] [requerido]
  -l, --listar   Muestra la tabla en consola                            [booleano] [defecto: false]
  -h, --hasta    Este es el número hasta donde quieres la tabla         [número] [defecto: 10]
```

# Alias:
```
- b
- l 
- h
```

# Ejemplo:

```
node app.js -b 10 -l -h 40 
```


Se genera un archivo con extensión .txt con los resultados de la tabla multiplicar en la carpeta "salida"