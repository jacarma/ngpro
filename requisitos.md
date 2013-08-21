Para completar los procesos de desarrollo, test y empaquetado vamos a necesitar diversas herramientas, por lo que comenzaremos por instalar todas ellas.

Node.js
===========
Node.js es una herramienta que nos permitirá ejecutar código Javascript en nuestra máquina sin necesidad de un navegador. La mayor parte del resto de herramientas se basan en node.js por lo que es importante que esté funcionando sin problemas.

Para instalarlo existen distintas opciones. En Windows y Mac podemos descargar [el instalador de la página oficial](http://nodejs.org/download/) y ejecutarlo.

En Linux deberemos prescindir de instalarlo por paquetes  ya que las distribuciones no suelen ofrecer estos paquetes actualizados y porque el nombre de ejecutable *node* ya está reservado por otra aplicación.

La que yo recomiendo es la tercera, instalación mediante nvm.

Instalación con ppa alternativo (Ubuntu quantal)
-----------------------------------------------------------------------
*Preparación*

Asegúrate de de tener el repositorio universe habilitado.

    # en /etc/apt/sources.list
    deb http://archive.ubuntu.com/ubuntu quantal main restricted universe
    deb http://security.ubuntu.com/ubuntu quantal-security main restricted universe
    deb http://archive.ubuntu.com/ubuntu quantal-updates main restricted universe

Después de activarlo ejecuta *sudo apt-get update*.

*Instalación*

Abrimos un terminal y ejecutaremos:

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

Instalación desde el código fuente
--------------------------------------------------
*Dependencias*

    sudo apt-get install g++ curl libssl-dev apache2-utils
    sudo apt-get install git-core

*Instalación*

    git clone git://github.com/ry/node.git
    cd node
    ./configure
    make
    sudo make install

Instalación con nvm 
-------------------------------
Nvm es el gestor de versiones de Node. Nos permite instalar versiones específicas de Node y cambiar entre ellas.

*Instalación de nvm*

    sudo apt-get install g++ curl libssl-dev apache2-utils git-core
    curl https://raw.github.com/creationix/nvm/master/install.sh | sh
    source ~/.profile

*Instalación de Node*

    nvm install 0.8
    nvm alias default 0.8

Yeoman, Bower, Karma y Grunt
=============================

Yeoman, Bower, Karma y Grunt son por orden, herramientas para generar la estructura del proyecto, gestionar las dependencias, ejecutar tests y empaquetar el proyecto.

Una vez instalado node (y con él también npm) podemos instalar todas las herramientas basadas en node con una sola instrucción:

    npm install -g karma yo grunt-cli bower

PhantomJS
=============

PhantomJS es un navegador WebKit sin interfaz gráfica. Nos va a permitir ejecutar tests sin tener que ver el navegador, e incluso ejecutarlos en un servidor de integración continua que no tenga escritorio.

Para instalar la versión 1.9 podemos ejecutar

    wget https://phantomjs.googlecode.com/files/phantomjs-1.9.0-linux-x86_64.tar.bz2
    tar jxvf phantomjs-1.9.0-linux-x86_64.tar.bz2
    sudo mv phantomjs-1.9.0-linux-x86_64/bin/phantomjs /usr/local/bin/

Generador de Angular para Yeoman
================================
Como Yeoman es un generador genérico, deberemos instalar el generador específico para Angular:

    npm install -g generator-angular
    npm install -g generator-karma


Probando la instalación
==========================

Si todo ha funcionado podremos ejecutar sin problemas las siguientes instrucciones:

    mkdir prueba && cd prueba
    yo angular
    npm install
    bower install
    grunt test
