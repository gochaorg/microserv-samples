Подготовка
=============

bash/git-bash

    user@user-pc MINGW64 ~/code/servicedesc
    $ mkdir hello

    user@user-pc MINGW64 ~/code/servicedesc
    $ cd hello/

    user@user-pc MINGW64 ~/code/servicedesc/hello
    $ npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help json` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install <pkg>` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    package name: (hello) helloconsul
    version: (1.0.0)
    description:
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author:
    license: (ISC) MIT
    About to write to C:\Users\user\code\servicedesc\hello\package.json:

    {
    "name": "helloconsul",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "MIT"
    }


    Is this OK? (yes) yes

    user@user-pc MINGW64 ~/code/servicedesc/hello
    $ npm install typescript -s
    + typescript@3.5.3
    added 1 package from 1 contributor and audited 1 package in 4.342s
    found 0 vulnerabilities

Inside our package.json we will put a script called tsc:

    "scripts": {
        "tsc": "tsc"
    },

bash

    user@user-pc MINGW64 ~/code/servicedesc/hello                  
    $ npm run tsc -- --init                                        
                                                                
    > helloconsul@1.0.0 tsc C:\Users\user\code\servicedesc\hello   
    > tsc "--init"                                                 
                                                                
    message TS6071: Successfully created a tsconfig.json file.     

    user@user-pc MINGW64 ~/code/servicedesc/hello
    $ npm install express -s
    + express@4.17.1
    added 50 packages from 37 contributors and audited 127 packages in 4.892s
    found 0 vulnerabilities


    user@user-pc MINGW64 ~/code/servicedesc/hello
    $ npm install @types/express -s
    + @types/express@4.17.0
    added 8 packages from 56 contributors and audited 140 packages in 2.063s
    found 0 vulnerabilities

создаем src/app.ts со след содержимым

    import express = require('express');

    // Create a new express application instance
    const app: express.Application = express();

    app.get('/', function (req, res) {
    res.send('Hello World!');
    });

    app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    });

компилируем

    user@user-pc MINGW64 ~/code/servicedesc/hello
    $ npm run tsc

    > helloconsul@1.0.0 tsc C:\Users\user\code\servicedesc\hello
    > tsc

смотрим где появился js файл

    user@user-pc MINGW64 ~/code/servicedesc/hello
    $ ll
    total 41
    drwxr-xr-x 1 user 197121     0 июл 11 20:01 build/
    drwxr-xr-x 1 user 197121     0 июл 11 19:58 node_modules/
    -rw-r--r-- 1 user 197121   336 июл 11 19:58 package.json
    -rw-r--r-- 1 user 197121 17173 июл 11 19:58 package-lock.json
    drwxr-xr-x 1 user 197121     0 июл 11 20:00 src/
    -rw-r--r-- 1 user 197121     0 июл 11 19:58 tsc
    -rw-r--r-- 1 user 197121  5811 июл 11 19:57 tsconfig.json

    user@user-pc MINGW64 ~/code/servicedesc/hello
    $ ll build/
    total 1
    -rw-r--r-- 1 user 197121 348 июл 11 20:05 app.js

запускаем

    user@user-pc MINGW64 ~/code/servicedesc/hello
    $ node build/app.js
    Example app listening on port 3000!

проверяем

    user@user-pc MINGW64 ~/code/servicedesc/hello                                                     
    $ curl -v http://localhost:3000                         
    % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed                     
    0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying ::1...   
    * TCP_NODELAY set                         
    * Connected to localhost (::1) port 3000 (#0)                         
    > GET / HTTP/1.1                                                     
    > Host: localhost:3000    
    > User-Agent: curl/7.62.0    
    > Accept: */*                                                                         
    >                                                                                     
    < HTTP/1.1 200 OK    
    < X-Powered-By: Express    
    < Content-Type: text/html; charset=utf-8    
    < Content-Length: 12                                                          
    < ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"    
    < Date: Thu, 11 Jul 2019 14:10:42 GMT                                                         
    < Connection: keep-alive                                                             
    <                                                                          
    { [12 bytes data]    
    100    12  100    12    0     0    750      0 --:--:-- --:--:-- --:--:--   750Hello World!    
    * Connection #0 to host localhost left intact

