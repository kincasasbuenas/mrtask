# Para probar esta aplicacion deberas realizar los siguientes pasos:
 1. copiar la carpeta apirest en un servidor apache
 2. crear el virtual host de la siguiente manera
    <VirtualHost *:80>
        ServerName apirest.localhost.com
        DocumentRoot /var/www/html/apirest
        ErrorLog ${APACHE_LOG_DIR}/error_apirest.log
        CustomLog ${APACHE_LOG_DIR}/access_apirest.log combined
    </VirtualHost>
 3. importar base de datos que esta dentro de apirest/database.sql/db_mrtask.sql
 4. el archivo de configuracion de la base de datos se encuentra en la siguiente ruta apirest/application/config/database.php
 5. git clone https://github.com/Kincasasbuenaso/mrtask.git
 6. ubicarse dentro de la raiz y ejecutar un npm install
 7. para logearse ingresar con los siguientes datos
    usuario: user@test.com
    password: 12345
 8. sino se puede descargar la carpeta apirest dejo link de descarga aqui: https://drive.google.com/file/d/1zoFWvNiEiTcSGhXcPfZuFkN9uMQAcWYz/view?usp=sharing
