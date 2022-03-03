export const translations = {
  "languages": ["en","es","ca"],
  "translations": {
    "en": {
      'navBar': {
        'resume': 'Resume',
        'repository': 'Portfolio',
        'switch_theme': 'Switch Theme',

      },
      "github": {
        "topRepo": "My Recent Work",
        "allRepo": "Repository",

        "description": "Description",
        "languages": "Languages",

        "viewGithub": "View on Github",
        "openRepo": "Open repository",
        "private": "Private",

        "topRepositories": {
          "DomoHome":{
            description: "Complete home automation system developed with python, react and C prioritizing local control and privacy. " +
                "IoT devices have been created with ESP boards",
            languages:['Python', 'C++', 'React', 'MQTT', 'IoT'],
            image:'DomoHome.png'
          },
          "AutonomousCar":{
            description: "Autonomous Car with object detection and wifi triangulation for raspberry pi and arduino",
            languages:['Python', 'C', 'OpenCV'],
            image:'AutonomousCar.jpg'
          },
          "DataMining":{
            description: "UPC Data Mining subject",
            languages:['Python', 'Clustering', 'AI'],
            image:'DataMining.png'
          },
          "Parallelism":{
            description: "Parallel programming with OpenMP and Python. Communication and data sharing between threads.",
            languages:['C', 'OpenMP', 'Python'],
            image:'Parallelism.png'
          },
          "REIN":{
            description: "Algorithms for information retrieval and control with ElasticSearch",
            languages:['Python', 'Scrapy', 'ElasticSearch'],
            image:'code.jpg'
          },
          "HexGame":{
            description: "HexGame usign Min-Max alpha beta pruning with dijkstra and multithreading optimized",
            languages:['Java', 'Min-Max', 'Dijkstra', 'Multithreading'],
            image:'HexGame.png'
          },
        },

        "table": {
          "name": "Name",
          "topics": "Topics",
          "actions": "Actions",
          "language": "Language",
          "description": "Description",
          "showDesc": "Show Description"
        },

        "noReadme": "This repository has no README.md",
        "noReadmeImages": "In private repositories the images will not be shown in the README",
        "noDescript": "This repository has no description on github",
        "noRepo": "This repository does not exist"
      },

      "resume": {
        "description": "I am a programming enthusiast studying the last year of Computer Engineering and previously " +
            "graduated in cross-platform application development.",

        "skills": "Skills",

        "knowledge":{
          "languages": {
            "title": "Programming languages",
            "description": "Easy learning of other languages by having a solid logical basis of programming.",
            "languagesList": [
              {
                'lang': 'Python',
                'con':[
                  ['Artificial intelligence: Reinforcement Learning and Deep Learning with TensorFlow, keras and OpenCV.'],
                  ['IoT with MQTT.'],
                  ['Data mining and information retrieval: Scrapy, elasticsearch, algorithms as KNN...'],
                  ['Rest API with Flask and WebSocket.'],
                  ['Automation of tasks: monitoring, analysis and collection of information from a web or local resource.'],
                  ['Multithreading optimization.'],
                  ['ETC']
                ],
                'icon': 'python'
              },
              {
                'lang': 'Java',
                'con':[
                  ['Knowledge of multiple frameworks (Maven, Spring boot, Hibernate ...)'],
                  ['Multithreading in deep algorithms.'],
                  ['Scraping with selenium.'],
                  ['Mastery of multiple tree search methods.'],
                  ['FrontEnd and BackEnd creation with Spring, Maven, Thymeleaf, Hibernate ...'],
                  ['Communication between TCP and UDP-based sockets for data and video.'],
                  ['ETC']
                ],
                'icon': 'java'
              },
              {
                'lang': 'C and C ++',
                'con':[
                  ['Basic level in parallelism with OpenMP'],
                  ['Design of custom data structures (dictionaries, lists, trees ...).'],
                  ['Optimization of search and sorting methods.'],
                  ['Control of sensors and IoT devices with MQTT for single-board computer.']
                ],
                'icon': 'c'
              },
              {
                'lang': 'Node.Js',
                'con':[
                  ['Design and creation of Back End and API.'],
                  ['Real-time communication through sockets (Socket.IO).'],
                  ['Database administration with mongoose.'],
                ],
                'icon': 'node'
              },
              {
                'lang': 'HTML, CSS, ReactJs, JavaScript, Angular ...',
                'con':[],
                'icon': 'web'
              },
            ],
          },
          "database": {
            "title": "Database",
            "description": "Analysis of the efficiency in different database systems and types of queries.." +
                "Knowledge of various frameworks for manipulating databases such as Hibernate (Java), Django (Python) and mongoose (Node.Js).",
            "databaseList":[
              ['Relational DB:', 'Creation, analysis and optimization in MySQL and PostgreSQL.'],
              ['Non-relational DB', 'Basic level both theoretical and practical of MongoDB.'],
            ],
          }
        },

        "experience": {
          "title": "Experience",
          "experienceList": [
            ['Project Management', 2],
            ['Software Development', 3],
            ['Front End', 2],
            ['Back End', 3],
            ['Autonomous Learning', 3],
            ['Databases', 2],
            ['Agile Methodology', 2]
          ]
        },

        "education": {
          "title": "Education",
          "educationList": [
            ['UPC.svg', 'Universitat Politècnica de Catalunya', 'Degree in Computer Engineering', '2017 to 2021 - 4 years'],
            ['FBM.png', 'IES Francesc de Borja Moll', 'FP in Multiplatform Application Development', '2014 to 2016 - 2 years']
          ]
        },

        "contact": {
          "title": "Contact",
          "contactList": [
            ['mail', 'tonicifrev@gmail.com'],
            ['github', '@ToniCifre', 'https://github.com/ToniCifre'],
            ['phone', '+34651173909'],
            ['linkedin', 'toni-cifre', 'https://www.linkedin.com/in/toni-cifre/'],
            ['cv', 'Download CV', 'CV-AntoniCifreVicens.pdf']
          ]
        }
      }
    },
    "es": {
      'navBar': {
        'resume': 'Currículum',
        'repository': 'Portfolio',
        'switch_theme': 'Cambiar Tema'
      },
      "github": {
        "topRepo": "Trabajos Reciente",
        "allRepo": "Repositorio",

        "description": "Descripción",
        "languages": "Lenguajes",

        "viewGithub": "Ver en Github",
        "openRepo": "Abrir repositorio",
        "private": "Privado",

        "topRepositories": {
          "DomoHome":{
            description: "Complete home automation system developed with python, react and C prioritizing local control and privacy. " +
                "IoT devices have been created with ESP boards",
            languages:['Python', 'C++', 'React', 'MQTT', 'IoT'],
            image:'DomoHome.png'
          },
          "AutonomousCar":{
            description: "Autonomous Car with object detection and wifi triangulation for raspberry pi and arduino",
            languages:['Python', 'C', 'OpenCV'],
            image:'AutonomousCar.jpg'
          },
          "DataMining":{
            description: "UPC Data Mining subject",
            languages:['Python', 'Clustering', 'AI'],
            image:'DataMining.png'
          },
          "Parallelism":{
            description: "Parallel programming with OpenMP and Python. Communication and data sharing between threads.",
            languages:['C', 'OpenMP', 'Python'],
            image:'Parallelism.png'
          },
          "REIN":{
            description: "Algorithms for information retrieval and control with ElasticSearch",
            languages:['Python', 'Scrapy', 'ElasticSearch'],
            image:'code.jpg'
          },
          "HexGame":{
            description: "HexGame usign Min-Max alpha beta pruning with dijkstra and multithreading optimized",
            languages:['Java', 'Min-Max', 'Dijkstra', 'Multithreading'],
            image:'HexGame.png'
          },
        },

        "table": {
          "name": "Nombre",
          "topics": "Temas",
          "actions": "Acciones",
          "language": "Idiomas",
          "description": "Descripción",
          "showDesc": "Ver la descripción"
        },

        "noReadme":"Este repositorio no tiene README.md",
        "noReadmeImages": "En repositorios privados no se mostrarán las imágenes en el README",
        "noDescript":"Este repositorio no tiene descripción en github",
        "noRepo": "Este repositorio no existe"
      },
      "resume": {
        "description": "Soy un entusiasta de la programación cursando el último año de Ingeniería informática y " +
            "licenciado previamente en desarrollo de aplicaciones multiplataforma.",

        "skills": "Habilidades",

        "knowledge":{
          "languages": {
            "title": "Lenguajes de programación",
            "description": "Fácil aprendizaje de otros lenguajes al tener sólidas las bases lógicas de la programación.",
            "languagesList":[
              {
                'lang':'Python',
                'con':[
                  ['Inteligencia artificial: Reinforcement Learning y Deep Learning con TensorFlow, keras y OpenCV.'],
                  ['IoT con MQTT.'],
                  ['Minería de datos y recuperación de la información: Scrapy, elasticsearch, algoritmos como KNN...'],
                  ['Rest API con Flask y WebSocket.'],
                  ['Automatización de tareas: monitorización, análisis y recopilación de información de un recurso web o local.'],
                  ['Optimización de multithreading.'],
                  ['ETC']
                ],
                'icon':'python'
              },
              {
                'lang': 'Java',
                'con':[
                  ['Conocimiento de múltiples framework (Maven, Spring boot, Hibernate...)'],
                  ['Multithreading en algoritmos profundos.'],
                  ['Scraping con selenium.'],
                  ['Dominio de múltiples métodos de búsqueda en árboles.'],
                  ['Creación de FrontEnd y BackEnd con Spring, Maven, Thymeleaf, Hibernate...'],
                  ['Comunicación entre sockets basados en TCP y UDP para datos y video.'],
                  ['ETC']
                ],
                'icon':'java'
              },
              {
                'lang':'C y C++',
                'con':[
                  ['Nivel básico en paralelismo con OpenMP'],
                  ['Diseño de estructuras de datos personalizadas (diccionarios, listas, arboles...).'],
                  ['Optimizacion de metodos de busqueda i ordenación.'],
                  [ 'Control de sensores y dispositivos IoT con MQTT para single-board computer.']
                ],
                'icon':'c'
              },
              {
                'lang':'Node.Js',
                'con':[
                  ['Diseño y creación de Back End y API.'],
                  ['Comunicación a tiempo real a través de sockets (Socket.IO).'],
                  ['Administración de bases de datos con mongoose.'],
                ],
                'icon':'node'
              },
              {
                'lang':'HTML, CSS, ReactJs, JavaScript, Angular ...',
                'con':[
                ],
                'icon':'web'
              },
            ],
          },
          "database": {
            "title": "Bases de Datos",
            "description": "Análisis de la eficiencia en diferentes sistemas de bases de datos y tipos de consultas.\n" +
                "Conocimiento de varios framework para la manipulación de bases de datos como Hibernate (Java), Django (Python) y mongoose (Node.Js).",
            "databaseList":[
              ['BD relacionales:', 'Creación, análisis y optimización en MySQL y PostgreSQL.'],
              ['BD no relacionales:', 'Nivel intermedio teórico i práctico en MongoDB.'],
            ],
          }
        },

        "experience": {
          "title": "Experiencia",
          "experienceList": [
            ['Gestión de Proyectos', 3],
            ['Desarrollo de Software', 4],
            ['Front End', 3],
            ['Back End', 4],
            ['Aprendizaje Autónomo', 4],
            ['Bases de Datos', 3],
            ['Metodología Ágil', 3]
          ]
        },

        "education": {
          "title": "Education",
          "educationList": [
            ['UPC.svg', 'Universitat Politècnica de Catalunya', 'Grado en Ingeniería Informática', '2017 a 2021 - 4 años'],
            ['FBM.png', 'IES Francesc de Borja Moll', 'FP en Desarrollo de Aplicaciones Multiplataforma', '2014 a 2016 - 2 años']
          ]
        },

        "contact": {
          "title": "Contacto",
          "contactList": [
            ['mail', 'tonicifrev@gmail.com'],
            ['github', '@ToniCifre', 'https://github.com/ToniCifre'],
            ['phone', '+34651173909'],
            ['linkedin', 'toni-cifre', 'https://www.linkedin.com/in/toni-cifre/'],
            ['cv', 'Descargar CV', 'CV-AntoniCifreVicens.pdf']
          ]
        }
      }

    },
    "ca": {
      'navBar': {
        'resume': 'Currículum',
        'repository': 'Portfoli',
        'switch_theme': 'Canviar  Tema'
      },
      "github": {
        "topRepo": "Treballs Recent",
        "allRepo": "Repositori",

        "description": "Descripció",
        "languages": "Llenguatjes",

        "viewGithub": "Veure a github",
        "openRepo": "Obrir repositori",
        "private": "Privat",

        "topRepositories": {
          "DomoHome":{
            description: "Complete home automation system developed with python, react and C prioritizing local control and privacy. " +
                "IoT devices have been created with ESP boards",
            languages:['Python', 'C++', 'React', 'MQTT', 'IoT'],
            image:'DomoHome.png'
          },
          "AutonomousCar":{
            description: "Autonomous Car with object detection and wifi triangulation for raspberry pi and arduino",
            languages:['Python', 'C', 'OpenCV'],
            image:'AutonomousCar.jpg'
          },
          "DataMining":{
            description: "UPC Data Mining subject",
            languages:['Python', 'Clustering', 'AI'],
            image:'DataMining.png'
          },
          "Parallelism":{
            description: "Parallel programming with OpenMP and Python. Communication and data sharing between threads.",
            languages:['C', 'OpenMP', 'Python'],
            image:'Parallelism.png'
          },
          "REIN":{
            description: "Algorithms for information retrieval and control with ElasticSearch",
            languages:['Python', 'Scrapy', 'ElasticSearch'],
            image:'code.jpg'
          },
          "HexGame":{
            description: "HexGame usign Min-Max alpha beta pruning with dijkstra and multithreading optimized",
            languages:['Java', 'Min-Max', 'Dijkstra', 'Multithreading'],
            image:'HexGame.png'
          },
        },

        "table": {
          "name": "Nom",
          "topics": "Temes",
          "actions": "Accions",
          "language": "llenguatge",
          "description": "Descripció",
          "showDesc": "Veure la descripció"
        },

        "noReadme":"Aquest repositori no disposa de README.md a Github.",
        "noReadmeImages": "En repositoris privats no es mostraran les imatges al README",
        "noDescript":"Aquest repositori no disposa de descripció a Github.",
        "noRepo": "Aquest repositori no existeix."
      },
      "resume": {
        "description": "Sóc un entusiasta de la programació cursant l'últim any d'Enginyeria informàtica i llicenciat " +
            "prèviament en desenvolupament d'aplicacions multiplataforma.",

        "skills": "Habilitats",

        "knowledge": {
          "languages": {
            "title": "Llenguatges de programació",
            "description": "Fàcil aprenentatge d'altres llenguatges al tenir sòlides les bases lògiques de la programació.",
            "languagesList": [
              {
                'lang': 'Python',
                'con': [
                  [ 'Intel·ligència artificial: Reinforcement Learning i Deep Learning amb TensorFlow, keras i OpenCV.'],
                  [ 'IoT amb MQTT.'],
                  [ 'Mineria de dades i Recuperació de la informació: Scrapy, elasticsearch, algoritmos como KNN...'],
                  [ 'Rest API amb Flask i websocket.'],
                  [ 'Automatització de tasques: monitorització, anàlisi i recopilació d\'informació d\'un recurs web o local.'],
                  [ 'Optimització de multithreading.'],
                  [ 'ETC']
                ],
                'icon': 'python'
              },
              {
                'lang': 'Java',
                'con': [
                  [ 'Coneixement de múltiples framework (Maven, Spring boot, Hibernate ...)'],
                  [ 'Multithreading en algoritmes profunds.'],
                  [ 'Scraping amb selenium.'],
                  [ 'Domini de múltiples mètodes de recerca en arbres.'],
                  [ 'Creació de FrontEnd i backend amb Spring, Maven, Thymeleaf, Hibernate ...'],
                  [ 'Comunicació entre sòcols basats en TCP i UDP per a dades i vídeo.'],
                  [ 'ETC']
                ],
                'icon': 'java'
              },
              {
                'lang': 'C i C ++',
                'con': [
                  [ 'Nivell bàsic en paral·lelisme amb OpenMP'],
                  [ 'Disseny d\'estructures de dades personalitzades (diccionaris, llistes, arbres ...).'],
                  [ 'Optimització de mètodes de cerca i ordenació.'],
                  [ 'Control de sensors i dispositius IoT amb MQTT per a ordinador de placa única.']
                ],
                'icon': 'c'
              },
              {
                'lang': 'NODE.JS',
                'con': [
                  [ 'Disseny i creació de Back End i API.'],
                  [ 'Comunicació a temps real a través de sockets (Socket.IO).'],
                  [ 'Administració de bases de dades amb Mongoose.'],
                ],
                'icon': 'node'
              },
              {
                'lang': 'HTML, CSS, ReactJs, JavaScript, Angular ...',
                'con': [
                ],
                'icon': 'web'
              },
            ],
          },
          "database": {
            "title": "Bases de Dades",
            "description": "Anàlisi de l'eficiència en diferents sistemes de basses de dades i tipus de consultes. " +
                "Coneixement de diversos framework per a la manipulació de bases de dades com Hibernate (Java), Django (Python) i Mongoose (NODE.JS).",
            "databaseList":[
              ['BD relacionals:', 'Creació, anàlisi i optimització en MySQL i PostgreSQL.'],
              ['BD no relacionals:', 'Nivell bàsic tant teòric com pràctic de MongoDB.'],
            ],
          }
        },

        "experience": {
          "title": "Experiència",
          "experienceList": [
            ['Gestió de Projectes', 3],
            ['Desenvolupament de software', 4],
            ['Front End', 3],
            ['Back End', 4],
            ['Aprenentatge Autònom', 4],
            ['Bases de Dades', 3],
            ['Metodologia Àgil', 3]
          ]
        },
        "education": {
          "title": "Education",
          "educationList": [
            ['UPC.svg', 'Universitat Politècnica de Catalunya', 'Grau en Enginyeria Informàtica', '2017 a 2021 - 4 anys'],
            ['FBM.png', 'IES Francesc de Borja Moll', 'FP en Desenvolupament d\'aplicacions multiplataforma', '2014 a 2016 - 2 anys']
          ]
        },
        "contact": {
          "title": "Contacte",
          "contactList": [
              ['mail', 'tonicifrev@gmail.com'],
              ['github', '@ToniCifre', 'https://github.com/ToniCifre'],
              ['phone', '+34651173909'],
              ['linkedin', 'toni-cifre', 'https://www.linkedin.com/in/toni-cifre/'],
              ['cv', 'Descarregar CV', 'CV-AntoniCifreVicens.pdf']
          ]
        }
      }
    }
  }
};
