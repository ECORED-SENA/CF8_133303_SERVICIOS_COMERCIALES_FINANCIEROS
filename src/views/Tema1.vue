<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span.text-white 1
      h1 Ciencia de los datos
  
    .row.justify-content-center.mb-5
      .col-lg-12
        p #[b Es la unión de las áreas estadística científica y digital con la llamada inteligencia artificial,]  que tiene la función de recopilar todos los datos de interés o búsqueda que se requieran, con el propósito de analizar esa información según su finalidad para dar solución a un requerimiento o situación presentada.
    .row.justify-content-center(data-aos="zoom-in")
      .col-9.col-lg-3.mb-3.mb-lg-0.bgt01
        .row.m-1.hoverScale2
          .col-12.p-3.bgtitulo
            h4.mt-3.text-center Estadística
          .col-12.p-3.bgcontenido(style="height: 130px")
            p Por medio de esta se revisan variables, se organizan datos y se realizan análisis e interpretaciones.
          .col-12.px-0
            img(src="@/assets/curso/tema1/img2.png"  alt='Texto que describa la imagen')
      .col-9.col-lg-3.mb-3.mb-lg-0.bgt02
        .row.m-1.hoverScale2
          .col-12.p-3.bgtitulo
            h4.mt-3.text-center Ciencia
          .col-12.p-3.bgcontenido(style="height: 130px")
            p Por medio de esta se hace comprobación y experimentación para la toma de decisiones.
          .col-12.px-0
            img(src="@/assets/curso/tema1/img3.png"  alt='Texto que describa la imagen')
      .col-9.col-lg-3.bgt03
        .row.m-1.hoverScale2
          .col-12.p-2.bgtitulo
            h4.mt-3.text-center Digital e inteligencia artificial
          .col-12.p-3.bgcontenido(style="height: 130px")
            p Hace uso de las diferentes herramientas existentes para la extracción y análisis de datos.
          .col-12.px-0
            img(src="@/assets/curso/tema1/img4.png"  alt='Texto que describa la imagen')
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Herramientas para el análisis de los datos
    p Para el proceso de analizar los datos se utiliza una serie de herramientas que se comparten en la siguiente tabla con su función principal:
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 1]. Herramientas para el análisis los datos

    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
      table
        thead(style="background-color:#F1AD70")
          tr 
            th(colspan="12").text-center Herramientas para el análisis de los datos
        tbody     
          tr(style="background-color: #F8D6B6")
            td(colspan="3").text-center #[b Herramienta]
            td(colspan="9").mb-4.text-center.mb-0 #[b Función]
         
          tr(style="background-color: #F6F6F6")
            td(colspan="3") <em>Microsoft Power BI</em>
            td(colspan="9").mb-4 Es una herramienta de análisis segura que proporciona una vista interactiva de la información, dando acceso a más de 60 fuentes y compatible con otras aplicaciones.
  
          tr
            td(colspan="3") Programación en R
            td(colspan="9").mb-4 Esta herramienta de análisis permite la estadística y su modelación, se adapta a varias plataformas por medio de más de 11.000 paquetes que se instalan acorde a cada necesidad de forma automática.

          tr(style="background-color: #F6F6F6")
            td(colspan="3") SAS
            td(colspan="9").mb-4 Esta herramienta de análisis actúa como lenguaje en la programación, permitiendo que la información sea procesada de forma separada, siendo útil en la gestión de perfilamiento de los clientes, predicción de compras y demás.
           
          tr
            td(colspan="3") <em>Python</em>
            td(colspan="9").mb-4 Es una herramienta diseñada para trabajar sobre objetos y procesar datos de forma funcional y estructurada.
            
          tr(style="background-color: #F6F6F6")
            td(colspan="3") <em>Excel</em>
            td(colspan="9").mb-4 Esta herramienta utilizada por la gran mayoría de empresas es básica; pero muy útil para analizar los datos de los clientes y se puede ajustar gracias a que cuenta con fórmulas internas que permiten generar frecuencias, filtros, combinaciones y demás.
           
          tr
            td(colspan="3") <em>Tableau Public</em>
            td(colspan="9").mb-4 Esta herramienta de análisis de datos es un <em>software</em> gratis que entrelaza las fuentes de información en tiempo real de la <em>web</em>.

          tr(style="background-color: #F6F6F6")
            td(colspan="3") <em>Rapid Miner</em>
            td(colspan="9").mb-4 Es una herramienta para realizar análisis predictivos.
           
          tr
            td(colspan="3") <em>Apache Spark</em>
            td(colspan="9").mb-4 Es una herramienta que procesa los datos de forma rápida, con algoritmos que le permiten clasificar la información.

          tr(style="background-color: #F6F6F6")
            td(colspan="3") <em>Qlik View</em>
            td(colspan="9").mb-4 Esta herramienta procesa la información comprimiéndola, ahorrando espacio en el disco duro y la asocia relacionando la información por colores según se requiera.
         
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #EDF8A4" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/tema1/img5.svg" style="max-width: 37px")
        .col.pe-xl-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 #[b Nota:] las herramientas vistas en la tabla anterior son buenas opciones para la gestión del análisis de los datos; pero su uso depende de las necesidades de cada entidad.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Técnicas de transformación de los datos
    .row.justify-content-center
      p.mb-0 La transformación es la actividad de convertir los datos en información valiosa para la toma de decisiones en una organización, en formatos solicitados por cada entidad. 
      p.mb-5 Esta transformación se compone de las siguientes actividades:
    .row.justify-content-center.mb-5
      .col-lg-5.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img6.svg', style="width: 280px")
          .tarjeta.color-acento-contenido1
            .p-4
             
              h4 Mapeo
              p Es el proceso de rastrear la información desde su origen, verificando todos los cambios. 

      .col-lg-5.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img7.svg', style="width: 280px")
          .tarjeta.color-acento-contenido1
            .p-4
             
              h4 Código
              p Se crea para que los datos que se extraen sean compatibles con los programas que se manejan.
    .row.justify-content-center
      .col-lg-12
        p Esta información se transmite mediante lenguajes como:
    .bg7
      .row.align-items-end.mb-5
        .col-lg-4.mb-4.mb-lg-0
          figure
            img.img-t(src='@/assets/curso/tema1/img8.svg').mx-auto(data-aos="fade-right")
        .col-lg-1
        .col-lg-6
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img9.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
            .tarjeta.color-cuarto.p-3(x="60.5%" y="11.6%" numero="")
              p.mb-0 Está enfocado a objetos con un nivel óptimo para operaciones grandes.
            .tarjeta.color-cuarto.p-3(x="83.9%" y="66.6%" numero="")
              p.mb-0 Idioma antiguo que se transmite por medio de lenguaje TXT.
            .tarjeta.color-cuarto.p-3(x="54.5%" y="84.8%" numero="")
              p.mb-0 Idioma que se transmite por medio de lenguaje de datos XML.
            .tarjeta.color-cuarto.p-3(x="17.5%" y="62.8%" numero="")
              p.mb-0 Este tipo de lenguaje genera prototipos desde el código fuente.
            .tarjeta.color-cuarto.p-3(x="21.5%" y="22.8%" numero="")
              p.mb-0 Genera una transformación de la información a documentos.
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-up-left")
      .col-lg-12
        p Y las técnicas para transformar los datos son:

    .row.justify-content-center.margb
      .col-lg-4.mb-4
        .tarjeta.tarjeta.color-acento-contenido2.p-4
          img.imgtema1(src='@/assets/curso/tema1/img10.svg', alt='Texto que describa la imagen' )
          p-mb-0 #[b ETL en el disco local:] 
          p ETL = extraer, transformar y cargar por medio del disco duro de la empresa o servidor.
      .col-lg-4.mb-5
        .tarjeta.tarjeta.color-acento-contenido2.p-4
          p-mb-0 #[b ETL en la nube:] 
          p Se hace el proceso de extraer, transformar y cargar en la nube, utilizando los beneficios que el proveedor le proporciona.    
          img(src='@/assets/curso/tema1/img11.svg', alt='Texto que describa la imagen' ).mb-5
      .col-lg-4.mb-4.mt-5.mt-lg-0
        .tarjeta.tarjeta.color-acento-contenido2.p-4
          img.imgtema1(src='@/assets/curso/tema1/img12.svg', alt='Texto que describa la imagen' )
          p-mb-0 #[b Scripting:] 
          p Esta técnica se utiliza por medio de scripts para identificar el código y así extraer los datos y transformarlos en información
      
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #EDF8A4" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/tema1/img5.svg" style="max-width: 37px")
        .col.pe-xl-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 #[b Nota:] se puede decir que las técnicas para la transformación de los datos se pueden manejar a través de diferentes herramientas, teniendo como base la extracción, transformación y cargue de la información.
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Limpieza ETL a los datos descargados
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-6
        p.mb-5 #[b La limpieza es un proceso que elimina los datos repetidos, verifica los nuevos, garantiza la coherencia de búsqueda y confiabilidad de la información que se recibe para la toma de decisiones en la entidad.]
      .col-lg-6
        p.mb-5 Se debe hacer para tener información exacta, coherente, válida y uniforme, a fin de que se optimicen los tiempos en la gestión y sobre todo que la administración de la información sea más eficiente. Los principios de limpieza ETL son:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones1.p-4(titulo="Unificación de datos")
        .row
          .col-lg-8.mb-4.mb-lg-0.p-4
            h4 Unificación de datos
            p.mb-0 Unir los datos que cuentan con las mismas características como sexo, edad, género y demás.
          .col-lg-3.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema1/img13.png').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Validar")
        .row
          .col-lg-8.mb-4.mb-lg-0.p-4
            h4 Validar
            p.mb-0 Revisar que la información que se extrajo esté completa y sin errores, en caso de presentarlos generar una alerta.
          .col-lg-3.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema1/img14.png').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Estandarización")
        .row
          .col-lg-8.mb-4.mb-lg-0.p-4
            h4 Estandarización
            p.mb-0 Establecer la uniformidad de la información, es decir, mantener formatos, guiones, puntos y demás aplicados a nivel general.
          .col-lg-3.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema1/img15.png').m-auto
    p.mb-5 Y algunas herramientas de limpieza de los datos son:  
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="<em>Apache Nifi</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Brinda la facilidad para definir flujos de forma visual, generando el proceso personalizado.
                .col-lg-6.col-md-6.col-12
                  figure
                    img.img-t(src='@/assets/curso/tema1/img16.png', alt='Texto que describa la imagen').mx-auto
          .row(titulo="<em>Streamsets</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Crea y realiza procesos de limpieza por separado. 
                .col-lg-6.col-md-6.col-12
                  figure
                    img.img-t(src='@/assets/curso/tema1/img17.png').mx-auto
          .row(titulo="<em>Apache Airflow</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Permite crear y monitorear los flujos de información para encontrar los errores.
                .col-lg-6.col-md-6.col-12
                  figure
                    img.img-t(src='@/assets/curso/tema1/img18.png').mx-auto
          .row(titulo="<em>AWS Data Pipeline</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Hace la limpieza desde la nube, así como transmisión y transformación.
                .col-lg-6.col-md-6.col-12
                  figure
                    img.img-t(src='@/assets/curso/tema1/img19.png').mx-auto
          .row(titulo="<em>AWS Glue</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Esta herramienta de forma automática ejecuta los trabajos predeterminados de limpieza, así como transformación o extracción de los datos.
                .col-lg-6.col-md-6.col-12
                  figure
                    img.img-t(src='@/assets/curso/tema1/img20.png').mx-auto
          .row(titulo="<em>Talend</em>")
            .col-12
              .row.align-items-center
                  .col-md-6.align-items-center
                    p.ps-5 Esta herramienta se adapta a otras plataformas, tiene la capacidad de monitorear y relacionar la información permitiendo agilidad en la limpieza.
                  .col-lg-6.col-md-6.col-12
                    figure
                      img.img-t(src='@/assets/curso/tema1/img21.png').mx-auto
          .row(titulo="<em>Informática Power Center</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Integra los datos soportando gran cantidad de información, obteniendo un óptimo rendimiento en la limpieza de los datos. 
                .col-lg-6.col-md-6.col-12
                  figure
                    img.img-t(src='@/assets/curso/tema1/img22.png').mx-auto
    p Se retroalimenta que la elección de la herramienta corresponde a los tipos de bases de datos que administre cada entidad y los beneficios aplicables a sus objetivos organizacionales, porque se debe tener en cuenta el volumen de información, su naturaleza, las tareas que se van a desarrollar y las actividades adicionales. 

    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Técnicas de análisis de los datos 
    
    p.mb-0 Son utilizadas en las entidades para el procesamiento de la información y dar las mejores alternativas para la toma de decisiones frente a diferentes situaciones.
    p A continuación conozca cada una de estas técnicas:
    SlyderF.mb-5(columnas="col-md-6 col-lg-4")
      .bgsly2
        .bgsly1.p-4
          img(src='@/assets/curso/tema1/img23.svg' alt='AvatarTop')
          .bgsly3.p-2.mt-5.mb-4
            h4.text-center.mb-0 Media aritmética
        .bgsly4.p-4.pb-5
          p.mb-0 Sirve para hallar la tendencia y promedio de datos.
      .bgsly2
        .bgsly5.p-4
          img(src='@/assets/curso/tema1/img24.svg' alt='AvatarTop')
          .bgsly3.p-2.mt-5.mb-4
            h4.text-center.mb-0 Desviación estándar 
        .bgsly6.p-4.pb-5
          p.mb-0 Sirve para hallar de forma ágil la distribución de los datos.
      .bgsly2
        .bgsly1.p-4
          img(src='@/assets/curso/tema1/img25.svg' alt='AvatarTop')
          .bgsly3.p-1.mt-5.mb-4
            h4.text-center.mb-0 Según tamaño de la muestra
        .bgsly4.p-4.pb-5
          p.mb-0 Sirve para recopilar el tamaño de una población y medirla.
      .bgsly2
        .bgsly5.p-4
          img(src='@/assets/curso/tema1/img26.svg' alt='AvatarTop')
          .bgsly3.p-2.mt-5.mb-4
            h4.text-center.mb-0 De regresión 
        .bgsly6.p-4.pb-5
          p.mb-0 Sirve para hallar tendencias en el transcurso del tiempo.
      .bgsly2
        .bgsly1.p-4
          img(src='@/assets/curso/tema1/img27.svg' alt='AvatarTop')
          .bgsly3.p-2.mt-5.mb-4
            h4.text-center.mb-0 Prueba de hipótesis
        .bgsly4.p-4.pb-5
          p.mb-0 Sirve para identificar si lo expuesto es real.

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12
        p.mb-5 Las técnicas anteriores se realizan de forma manual y por tal motivo, pese a su gran aporte, pueden tener ciertas desviaciones, debido a que interviene el factor humano, por otro lado, se presentan otras más avanzadas apoyadas por la inteligencia artificial como:
    SlyderD.mb-5(:datos="datosSlyder")
    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Modelos y metodologías de analítica 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-up-left")
      .col-10.p-4
        .row.align-items-center.justify-content-center
          .col-lg-10
            .dual-txt-deco1
              p(style="position: relative; z-index: 1;") Este proceso es conocido como data <em>analytics</em>, en español análisis de los datos, que es la actividad de tomar la información y transformarla, dando deducciones para las decisiones que infieren en la mejora continua de la organización.
              p La siguiente figura presenta los modelos de análisis de los datos:
          .col-lg-2.mb-3
            figure
              img.img-t(src='@/assets/curso/tema1/img18.svg').mx-auto(data-aos="fade-right").mx-auto
    .bg13
      .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-5
            p.mb-0 #[b Figura 1]. Modelos para el análisis de los datos
      .row.justify-content-center.mb-5
        .col-lg-8
          figure
            img(src='@/assets/curso/tema1/img34.svg')
    .row.justify-content-center.mb-5
      .col-lg-12
        p-mb-5 En la actualidad existen varias metodologías que se utilizan para el análisis de los datos masivos, de las cuales conocerá el método, su característica y ejemplo para que pueda relacionarla en su entorno laboral mediante la siguiente tabla.
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 2]. Metodologías para analizar grandes volúmenes de datos
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
      table
        thead(style="background-color:#F1AD70")
          tr 
            th(colspan="12").text-center Metodologías para analizar grandes volúmenes de datos
           
        tbody     
          tr(style="background-color: #F8D6B6")
            td(colspan="1").text-center #[b Ítem]
            td(colspan="3").mb-4.text-center.mb-0 #[b Metodologías]
            td(colspan="5").text-center #[b Características]
            td(colspan="3").mb-4.text-center.mb-0 #[b Ejemplos]

          tr(style="background-color: #F6F6F6")
            td(colspan="1").text-center #[b 1] 
            td(colspan="3").text-center #[b Espacial] 
            td(colspan="5") Se caracteriza por hacer su análisis sobre atributos de la geometría, topológicos y geográficos.
            td(colspan="3") Analizar la distribución y entrega de una bodega o almacén a un lugar específico.
          tr
            td(colspan="1").text-center #[b 2] 
            td(colspan="3").text-center #[b Redes] 
            td(colspan="5") Utiliza para el análisis los puntos de intersección de un dibujo, red o grafo. 
            td(colspan="3") Identificar cuellos de botella en los sistemas de producción.
          tr(style="background-color: #F6F6F6")
            td(colspan="1").text-center #[b 3] 
            td(colspan="3").text-center #[b Aprendizaje automático] 
            td(colspan="5") Maneja algoritmos para identificar comportamientos.
            td(colspan="3") Predecir el comportamiento de pago de los clientes.
          tr
            td(colspan="1").text-center #[b 4] 
            td(colspan="3").text-center #[b Territorial] 
            td(colspan="5") Por medio de herramientas tecnológicas utiliza medios cuantitativos, espaciales y cualitativos para crear análisis.
            td(colspan="3") Evaluar el comportamiento de la oferta y demanda de la entidad.
          tr(style="background-color: #F6F6F6")
            td(colspan="1").text-center #[b 5] 
            td(colspan="3").text-center #[b Optimizar] 
            td(colspan="5") Crea análisis por medio de métodos numéricos para la mejora continua.
            td(colspan="3") Distribución de los recursos en una organización.
          tr
            td(colspan="1").text-center #[b 6] 
            td(colspan="3").text-center #[b Pruebas A/B] 
            td(colspan="5") Utiliza la comparación para el análisis.
            td(colspan="3") Comparar la gestión de ventas entre asesores.
          tr(style="background-color: #F6F6F6")
            td(colspan="1").text-center #[b 7] 
            td(colspan="3").text-center #[b Simulación] 
            td(colspan="5") Evalúa el comportamiento de las entidades para simular posibles situaciones que se pueden presentar.
            td(colspan="3") Predecir las ventas del mes de diciembre según el  comportamiento de años anteriores y la situación actual de la economía.
          tr
            td(colspan="1").text-center #[b 8] 
            td(colspan="3").text-center #[b Visualización del análisis de los datos y la analítica] 
            td(colspan="5") Por medio del entendimiento visual comprende grandes volúmenes de datos.
            td(colspan="3") Revisión de una infografía.
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #EDF8A4" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/tema1/img5.svg" style="max-width: 37px")
        .col.pe-xl-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 #[b Nota:] cada entidad utiliza el método según los requerimientos en su gestión.
    Separador
    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Minería de datos
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        .dual-txt-deco2
          p(style="position: relative; z-index: 1;") #[b Este proceso consiste en tomar o extraer información requerida por las entidades de diferentes bases de datos o fuentes;] su nombre está asociado a la minería porque la extracción es vital en ambas actividades.
          p Por otro lado, su propósito es extraer datos útiles que ayuden a la resolución de las diferentes situaciones que se originan en las entidades, su gestión se puede hacer a través de herramientas estadísticas básicas como avanzadas que da la inteligencia artificial.
          p El siguiente recurso presenta la gestión de la minería de datos:
      .col-lg-5.col-md-6.col-12.p-0
        figure
          img.img-t(src='@/assets/curso/tema1/img35.png', alt='Texto que describa la imagen').mx-auto
    .row.bg3.justify-content-center.mb-5
      .col-lg-6
        ImagenInfografica.color-color-adicional-1.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img36.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
          .tarjeta.color-cuarto.p-3(x="50.5%" y="5.6%" numero="01")
            p.mb-0 Es filtrar la información recibida para evitar desviaciones o fallas.
          .tarjeta.color-cuarto.p-3(x="93.3%" y="28.3%" numero="02")
            p.mb-0 Es encontrar cambios que pueden originar los datos.
          .tarjeta.color-cuarto.p-3(x="93.5%" y="72.8%" numero="03")
            p.mb-0 Es revisar la procedencia de la información desde sus orígenes.
          .tarjeta.color-cuarto.p-3(x="49.5%" y="94.8%" numero="04")
            p.mb-0 Es encontrar las categorías o conjuntos de los datos.
          .tarjeta.color-cuarto.p-3(x="6.5%" y="73%" numero="05")
            p.mb-0 Encontrar los datos solicitados o de interés de forma automática. 
          .tarjeta.color-cuarto.p-3(x="6.5%" y="28%" numero="06")
            p.mb-0 Es brindar la información de forma compilada utilizando el método adecuado.
    Separador
    #t_1_7
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Métodos de integración de los datos
    p.mb-5 Debe entenderse que los procesos de recolección de la información constan de una gran multiplicidad de técnicas o herramientas para la recopilación de la misma, y las técnicas más usadas son:
    SlyderF.mb-5(columnas="col-md-6 col-lg-4")
      .bgsly2.alt
        .bgsly7.p-4
          .bgsly3.p-2
            h4.text-center.mb-0 Encuesta:
        img(src='@/assets/curso/tema1/img59.png')
        .bgsly8.p-4.pb-5
          p.mb-0 Es el proceso de hacer preguntas a un grupo de personas para recoger información sobre un tema específico, que sirva para analizar y tomar decisiones.
      .bgsly2.alt
        .bgsly9.p-4
          .bgsly3.p-2
            h4.text-center.mb-0 Entrevista:
        img(src='@/assets/curso/tema1/img38.png' alt='AvatarTop')
        .bgsly10.p-4.pb-5
          p.mb-0 Es una actividad de recolección de información por medio de preguntas de forma directa a una persona o varias para conocer información ya sea de la misma o de hechos que puedan servir para la toma de decisiones.
      .bgsly2.alt
        .bgsly7.p-4
          .bgsly3.p-2
            h4.text-center.mb-0 Observación: 
        img(src='@/assets/curso/tema1/img39.png')
        .bgsly8.p-4.pb-5
          p.mb-0 Es el proceso de mirar activamente una situación o fenómeno que está sucediendo, con el propósito de recolectar información.
      .bgsly2.alt
        .bgsly9.p-4
          .bgsly3.p-2
            h4.text-center.mb-0 Análisis de documentos: 
        img(src='@/assets/curso/tema1/img40.png' alt='AvatarTop')
        .bgsly10.p-4.pb-5
          p.mb-0 Es el proceso de tomar un documento reprocesarlo para sacar las conclusiones necesarias para la toma de decisiones.
      .bgsly2.alt
        .bgsly7.p-4
          .bgsly3.p-2
            h4.text-center.mb-0 Búsquedas <em>web</em>: 
        img(src='@/assets/curso/tema1/img41.png')
        .bgsly8.p-4.pb-5
          p.mb-0 Es el proceso de buscar información en las diferentes páginas <em>web</em> para reprocesarla, analizarla y que sirva de base para la toma de decisiones.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: 'Aprendizaje automatizado',
        texto:
          'Diseña y desarrolla algoritmos que permiten a los equipos de cómputo tomar los datos recolectados por la entidad, reconociendo sus patrones, analizándolos y tomando decisiones basadas en esa información. Se puede utilizar cuando se requiere manejar funciones de viabilidad de inversión, entre otras.',
        imagen: require('@/assets/curso/tema1/img28.png'),
      },
      {
        titulo: 'Redes neuronales',
        texto:
          'Esta herramienta es creada con el propósito de medir las decisiones de las personas a través de sus patrones de comportamiento retroalimentado por los datos suministrados. Se puede utilizar para evaluar los tipos de clientes o su comportamiento de pago en un crédito, entre otras.',
        imagen: require('@/assets/curso/tema1/img29.png'),
      },
      {
        titulo: 'Aprendizaje de asociación',
        texto:
          'Permite identificar la relación que existen entre los datos, se puede utilizar cuando se quiere evaluar qué productos financieros se utilizan por estratos, para crear las estrategias pertinentes.',
        imagen: require('@/assets/curso/tema1/img30.png'),
      },
      {
        titulo: 'Algoritmos genéticos',
        texto:
          'Es una herramienta pensada en la naturaleza y su evolución que evalúa los datos obtenidos para su estudio con el propósito de mejorar los procesos productivos, gestión del comportamiento humano e inclusive mejorar los resultados de inversión de una entidad, ya que está ligada a unos parámetros de evolución.',
        imagen: require('@/assets/curso/tema1/img31.jpg'),
      },
      {
        titulo: 'Análisis de series temporales',
        texto:
          'Su función es la predicción de valores por medio de datos anteriores. En una entidad sirve para proyectar ventas, ingresos y demás pronósticos que se requieran.',
        imagen: require('@/assets/curso/tema1/img32.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
