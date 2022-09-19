export default {
  global: {
    componenteFormativo: 'Procesamiento cuantitativo y presentación de datos',
    descripcionCurso:
      'En el presente componente formativo conocerá los pasos, técnicas y herramientas en la gestión de los datos y la formulación del análisis para la presentación de la información, con el fin de aplicar esta formación en la gestión de los servicios comerciales y financieros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ciencia de los datos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas para el análisis de los datos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de transformación de los datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Limpieza ETL a los datos descargados',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Técnicas de análisis de los datos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Modelos y metodologías de analítica',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Minería de datos',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Métodos de integración de los datos',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas tecnológicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Criterios de funcionalidad y manejo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Paquetes integrados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas colaborativas y de acceso a la nube',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Tecnologías de la modernidad 4.0',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de analítica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos y funcionalidad',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Algoritmos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Técnicas de gestión de los datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de gestión de los datos masivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de contingencias',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Criterios de respaldo y recuperación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Herramientas de depuración de los datos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Criterios de calidad',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ciencia de los datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Analítica de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eK0QG1SUk9A',
    },
    {
      tema: 'Herramientas tecnológicas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Sistemas de gestión de bases de datos: ventajas MySQL.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DubJRQFmLLk',
    },
    {
      tema: 'Algoritmos',
      referencia:
        'BBC News Mundo. (2021). Qué son los algoritmos y cómo aprenden de nosotros',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/RSJrBEhdZxw',
    },
    {
      tema: 'Algoritmos',
      referencia:
        'UNAL sede Manizales. (2017). Video introductorio. Antecedentes de la Estadística',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-NutZ7n-Exg',
    },
    {
      tema: 'Técnicas de gestión de los datos masivos',
      referencia:
        'World Economic Forum. (2016). La cuarta revolución industrial.  Versión completa ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-OiaE6l8ysg',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento de datos',
      significado:
        'Guardar datos en un software u otra herramienta, generalmente de forma ordenada, para poder disponer cuando se necesite o convenga.',
    },
    {
      termino: 'Análisis',
      significado:
        'Examen detallado de una cosa para conocer sus características o cualidades, o su estado, y extraer conclusiones, que se realiza separando o considerando por separado las partes que la constituyen.',
    },
    {
      termino: '<em>Big Data</em>',
      significado:
        'Datos que contienen una mayor variedad y que se presentan en volúmenes crecientes y a mayor velocidad.',
    },
    {
      termino: 'Datos',
      significado:
        'Información concreta sobre hechos, elementos, etc., que permite estudiarlos, analizarlos o conocerlos.',
    },
    {
      termino: 'Gestión',
      significado:
        'Acción o trámite que se lleva a cabo para conseguir o resolver una situación.',
    },
    {
      termino: 'Herramienta digital',
      significado:
        'Paquetes informáticos que están en las computadoras, o en dispositivos electrónicos como celulares y tabletas, entre otros.',
    },
    {
      termino: 'Información',
      significado:
        'Conjunto de datos, ya procesados y ordenados para su comprensión, que aportan nuevos conocimientos a un individuo o sistema sobre un asunto, materia, fenómeno o ente determinado.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'Conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso en el cual un individuo o grupo de individuos deben elegir entre varias opciones. Este proceso se activa cuando hay que resolver un conflicto o situación que requiere de una acción concreta',
    },
  ],
  referencias: [
    {
      referencia:
        'Gurevich, Y.  (2000).  Sequential abstract state machines capture sequential algorithms. ACM Transactions on Computational Logic, (1), p. 77-111. ',
    },
    {
      referencia:
        'Moschovakis, Y. (1998). On founding the theory of algorithms. Truth in mathematics. Oxford University Press. Normas ISO 25000. (s.f.). ISO 25000 Calidad de software y datos ISO/IEC 25012. ',
    },
    {
      referencia:
        'Normas ISO 25000. (s.f.). ISO 25000 Calidad de software y datos ISO/IEC 25012.',
      link:
        'https://iso25000.com/index.php/normas-iso-25000/iso-25012?start=15',
    },
    {
      referencia: 'Schwab, K. (2016). La cuarta revolución industrial. Debate.',
    },
    {
      referencia:
        'Schwab, K. (2020). La cuarta revolución industrial. Futuro Hoy, 1(1), p. 6-10.',
    },
    {
      referencia:
        'World Economic Forum. (2016). La cuarta revolución industrial.  Versión completa [video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=-OiaE6l8ysg',
    },
    {
      referencia:
        'Wu, D., Wu, T., Liu, Q., & Yang, Z. (2020). The SARS-CoV-2 outbreak: what we know. International Journal of Infectious Diseases, (94), p. 44-48.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Villalobos Barreto',
        cargo: 'Experto temático',
        centro: 'Grupo De Apoyo Administrativo - Cgi - Sena Distrito Capital',
      },
      {
        nombre: 'Wilmar Eduardo Amaya Ávila ',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesor metodológica',
        centro: 'Centro del Diseño y la Metrología - Regional Distrito capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Corrección de estilo',
        centro: 'Centro del Diseño y la Metrología - Regional Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
