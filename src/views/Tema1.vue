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
            h3.mt-3.text-center Estadística
          .col-12.p-3.bgcontenido(style="height: 130px")
            p Por medio de esta se revisan variables, se organizan datos y se realizan análisis e interpretaciones.
          .col-12.px-0
            img(src="@/assets/curso/tema1/img2.png"  alt='Texto que describa la imagen')
      .col-9.col-lg-3.mb-3.mb-lg-0.bgt02
        .row.m-1.hoverScale2
          .col-12.p-3.bgtitulo
            h3.mt-3.text-center Ciencia
          .col-12.p-3.bgcontenido(style="height: 130px")
            p Por medio de esta se hace comprobación y experimentación para la toma de decisiones.
          .col-12.px-0
            img(src="@/assets/curso/tema1/img3.png"  alt='Texto que describa la imagen')
      .col-9.col-lg-3.bgt03
        .row.m-1.hoverScale2
          .col-12.p-3.bgtitulo
            h3.mt-3.text-center Digital e inteligencia artificial
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
      p.mb-0 #[b Ejemplo]. Listado de Operaciones

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
            td(colspan="9").mb-4 Esta herramienta de análisis de datos es un software gratis que entrelaza las fuentes de información en tiempo real de la Web.

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
      p.mb-0 La transformación es la actividad de volver los datos en información valiosa para la toma de decisiones en una organización, en formatos solicitados por cada entidad. 
      p.mb-5 Esta transformación se compone de las siguientes actividades:
    .row.justify-content-center.mb-5
      .col-lg-5.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img6.svg', style="width: 280px")
          .tarjeta.color-acento-contenido1
            .p-4
              br
              br
              br
              br
              br
              br
              h4 Mapeo
              p Es el proceso de rastrear la información desde su origen, verificando todos los cambios. 

      .col-lg-5.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img7.svg', style="width: 280px")
          .tarjeta.color-acento-contenido1
            .p-4
              br
              br
              br
              br
              br
              br
              h4 Código
              p Se crea para que los datos que se extraen sean compatibles con los programas que se manejan.
    .row.justify-content-center
      .col-lg-12
        p Esta información se transmite mediante lenguajes como:
    .bg7
      .row.align-items-end.mb-5
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img8.svg')(data-aos="fade-right")
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
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.tema1
          img(src='@/assets/curso/tema1/img10.svg', style="width: 250px")
          .tarjeta.color-acento-contenido2
            .p-4
              p-mb-0 #[b ETL en el disco local:] 
              p ETL = extraer, transformar y cargar por medio del disco duro de la empresa o servidor.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-acento-contenido2
          .p-4
            p-mb-0 #[b ETL en la nube:] 
            p Se hace el proceso de extraer, transformar y cargar en la nube, utilizando los beneficios que el proveedor le proporciona.
          .tarjeta-avatar.tema1
            img(src='@/assets/curso/tema1/img11.svg', style="width: 250px")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.tema1
          img(src='@/assets/curso/tema1/img12.svg', style="width: 250px")
          .tarjeta.color-acento-contenido2
            .p-4
              p-mb-0 #[b [i Scripting:]]
              p Esta técnica se utiliza por medio de scripts para identificar el código y así extraer los datos y transformarlos en información.
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
                  p.ps-5 Sirve para hallar la tendencia y promedio de datos.
                .col-lg-6.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img16.png', alt='Texto que describa la imagen').mx-auto
          .row(titulo="<em>Streamsets</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Crea y realiza procesos de limpieza por separado. 
                .col-lg-6.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img17.png').mx-auto
          .row(titulo="<em>Apache Airflow</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Permite crear y monitorear los flujos de información para encontrar los errores.
                .col-lg-6.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img18.png').mx-auto
          .row(titulo="<em>AWS Data Pipeline</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Hace la limpieza desde la nube, así como transmisión y transformación.
                .col-lg-6.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img19.png').mx-auto
          .row(titulo="<em>AWS Glue</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Esta herramienta de forma automática ejecuta los trabajos predeterminados de limpieza, así como transformación o extracción de los datos.
                .col-lg-6.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img20.png').mx-auto
          .row(titulo="<em>Talend</em>")
            .col-12
              .row.align-items-center
                  .col-md-6.align-items-center
                    p.ps-5 Esta herramienta se adapta a otras plataformas, tiene la capacidad de monitorear y relacionar la información permitiendo agilidad en la limpieza.
                  .col-lg-6.col-md-6.col-12.p-0
                    figure
                      img.img-t(src='@/assets/curso/tema1/img21.png').mx-auto
          .row(titulo="<em>Informática Power Center</em>")
            .col-12
              .row.align-items-center
                .col-md-6.align-items-center
                  p.ps-5 Integra los datos soportando gran cantidad de información, obteniendo un óptimo rendimiento en la limpieza de los datos. 
                .col-lg-6.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img22.png').mx-auto
    p Se retroalimenta que la elección de la herramienta corresponde a los tipos de bases de datos que administre cada entidad y los beneficios aplicables a sus objetivos organizacionales, porque se debe tener en cuenta el volumen de información, su naturaleza, las tareas que se van a desarrollar y las actividades adicionales. 

    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Minería de datos 
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img35.png').m-auto
      .col-lg-7
        p Este proceso consiste en tomar o extraer información requerida por las entidades de diferentes bases de datos o fuentes, su nombre está asociado a la minería ya que la extracción es vital en ambas actividades; por otro lado, su propósito es extraer datos útiles que ayuden a la resolución de las diferentes situaciones que se originan en las entidades y su gestión se puede hacer a través de herramientas estadísticas tanto básicas como avanzadas que proporciona la inteligencia artificial.
        .row.mb-5.bg3.p-2.align-items-center.justify-content-center
          .col-lg-3.mb-2
            figure
              img(src='@/assets/curso/tema1/img36.svg')(data-aos="fade-right")
          .col-lg-9
            p.mb-0 La información que se obtiene en la minería de datos, sirve para la toma de decisiones. 
    p.mb-5 La minería de datos como disciplina 
      span.resal estudia las herramientas y algoritmos que le permitan acceder y recolectar datos a las organizaciones con el fin que esa información sea predictiva para que se facilite su análisis para la toma de decisiones ante situaciones presentadas y mejorar los procesos de las entidades.
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-9
        p.mb-5 
          span.resal.text-bold Ejemplo de minería de datos en los servicios comerciales y financieros:
        p Una entidad financiera implementa una herramienta de minería de datos para evaluar a sus clientes a la hora de hacer los préstamos extrayendo información de los hábitos de pago, historial crediticio, movimientos bancarios entre otros datos que le servirán para su análisis y clasificar a cada uno según su capacidad de endeudamiento.
        p Teniendo en cuenta el ejemplo presentado, la gestión que se debe hacer con la minería de datos es:
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img37.svg').m-auto(data-aos="fade-right")
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Identificar la información")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Encontrando las categorías o conjuntos de los datos
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img39.svg', alt='Texto que describa la imagen').mx-auto
          .row(titulo="Clasificar la información")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 De forma automática encontrando los datos solicitados o de interés.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img40.svg').mx-auto
          .row(titulo="Describir o brindar conceptos o información ")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 De forma compilada utilizando el método adecuado.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img41.svg').mx-auto
          .row(titulo="Detectar anomalías en los datos")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Filtrando la información recibida para evitar desviaciones o fallas.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img42.svg').mx-auto
          .row(titulo="Detectar las variables de la información")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Encontrando cambios que pueden originar los datos
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img43.svg').mx-auto
          .row(titulo="Mapear la información para verificar su autenticidad")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  p.ps-5 Revisando la procedencia de la información desde sus orígenes.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img44.svg').mx-auto
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img38.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La gestión anteriormente presentada, se debe realizar a través de:
    
    p.mb-5 En el siguiente recurso se expondrán las técnicas que utiliza esta herramienta de recolección de datos:
    
    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Métodos de recopilación e integración de datos. 
    p.mb-5 Debe entenderse que los procesos de recolección de la información constan una gran multiplicidad de técnicas o herramientas para la recopilación de la misma, las técnicas más usadas son:
    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img51.svg', alt='Texto que describa la imagen')
      .tarjeta.color-1.p-3(x="83.3%" y="64%" numero="")
        .h5.mb-2 Encuesta
        p Es según Bernal (2.000) “una de las técnicas más reconocidas y utilizadas, a pesar de que ha perdido credibilidad por  el sesgo que hay en las personas encuestadas y por el uso cada vez más frecuente de TIC´S” (p.172)  
        p Por tanto, la encuesta está fundada en un agregado de interrogantes que son planeadas con la finalidad de obtener información de las personas en referencia a una temática o hecho específico. 
      .tarjeta.color-1.p-3(x="35%" y="42%" numero="")
        .h5.mb-2 Entrevista
        p Es una técnica orientada a obtener una conversación estructurada con las personas con apropiación de la información, la entrevista a pesar de manejar un cuestionario base con el cual se establecerá una comunicación dialógica con el entrevistado, permite la flexibilidad de ampliar la respuesta del entrevistado con nuevas preguntas.
      .tarjeta.color-1.p-3(x="62%" y="52%" numero="")
        .h5.mb-2 Observación directa 
        p Cada día cobra mayor fuerza y credibilidad, y cada vez tiende a generalizarse más, dado que permite la obtención de información directa y confiable, siempre que medie un procedimiento sistematizado y supervisado, para lo cual hoy en día se utilizan medios audiovisuales muy completos y con alto componente tecnológico en las industrias 4.0, permite estudios de comportamiento del consumidor, del personal en el puesto de trabajo, estímulos basados en percepciones sensoriales en pruebas de productos, entre otros.
      .tarjeta.color-1.p-3(x="7.3%" y="37.2%" numero="")
        .h5.mb-2 Análisis de documentos 
        p Se utiliza bajo los criterios de fichas bibliográficas que analizan material impreso o digital, su principal uso está en la elaboración del marco teórico del estudio.
      .tarjeta.color-1.p-3(x="17%" y="27%" numero="")
        .h5.mb-2 Búsquedas web  
        p la consulta de bases de datos, páginas web, bloog´s, en la red virtual se ha convertido en técnica de recolección de información por excelencia de toda la sociedad. 
    Separador
    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Preparación de datos estructurados. 
    p.mb-5 Esta actividad #[span.txt-color1 se enfoca en limpiar y recopilar los datos que van a ser utilizados, consultados, investigados, extraídos o buscados, con el propósito de que la información sea precisa y válida para los diferentes análisis que se requieren hacer en el proceso,] garantizando la seguridad de los datos obtenidos.
    p.mb-5 Las organizaciones en la preparación de datos tienen en cuenta:
    .bg8.p-3.mb-3.mt-3(data-aos="fade-right")
      .row.justify-content-start.align-items-center(data-aos="fade-left").mb-5
        .col-md-7
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img56.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1
                .p-4
                  p.mt-4 Claridad de la información y seguridad en el acceso de un lugar seguro.
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img54.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1
                .p-4
                  p.mt-4 Confiabilidad de los datos obteniendo información fidedigna veraz, visible y auditable por si se debe modificar.
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img55.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1
                .p-4
                  p.mt-4 Comprensible y con capacidad de repetición asegurando su entendimiento para generar estrategias
        .col-md-5.col-7(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema1/img53.svg')(data-aos="fade-left")
    p.mb-5 Ahora para preparar los datos estructurados se siguen las siguientes fases:
    .bg9.p-4.mb-5.mt-5(data-aos="fade-right")
      .row.justify-content-start.align-items-center(data-aos="fade-left").mb-5
        .col-lg-7.ms-5
          ul.lista-ul--color
            li
              <i class="fas fa-check-circle" style="color:#FC8116"></i>
              | Identificar los datos que se necesitan, adquirirlos, compilarlos y generar un canal o línea de acceso permanente.
            li
              <i class="fas fa-check-circle" style="color:#FC8116"></i>
              | Revisar la calidad de los datos compilados según la relación con la actividad o situación que se quiere solucionar.
            li
              <i class="fas fa-check-circle" style="color:#FC8116"></i>
              | Limpieza de la información que consiste en corregir, eliminar duplicidad, suprimir datos incompletos y salvaguardar información confidencial.
          .row.mb-5.justify-content-center.align-items-center
            .col-12.bg5.p-4
              .row.align-items-center.justify-content-center
                .col-lg-3.mb-3
                  figure
                    img.img-t(src='@/assets/curso/tema1/img18.svg').mx-auto(data-aos="fade-right").mx-auto
                .col-lg-9
                  h4.bg_grad-01.ps-3 Nota: olll
                  p.mb-0 Estimados aprendices esta actividad se realiza por medio de las herramientas digitales, informáticas o de inteligencia artificial según lo estipule cada organización.
        .col-md-4.col-8(data-aos="fade-left")
            img(src='@/assets/curso/tema1/img57.svg')
    Separador
    #t_1_7
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Ecosistema de datos abiertos
    p Como su nombre lo indica es un conjunto de información que está disponible al público en general bajo unos lineamientos de reproducción y reutilización para que los usuarios hagan buen provecho de esos datos y les sirvan según la necesidad o requerimiento.
    p.mb-5 En Colombia #[span.txt-color1 la ley 1712 de 2014 indica la obligación de las organizaciones públicas de emitir datos públicos con excepciones si es información clasificada.]
    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/img59.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4 Matriz Saro
              p.mb-0 Los datos están publicados en sitios web, sin generar costo por su uso con formatos que permiten su reutilización, se debe tener en cuenta la compatibilidad de los equipos de búsqueda.  
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/anexo1.xls')" target="_blank")
                span Ver mas
                i.fas.fa-link
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        p También se comparten datos como resultados de elecciones, contrataciones estatales, pruebas saber entre otros. 
        p.mb-5 El Ecosistema de datos abiertos presenta unas características y principios particulares, que conocerá a continuación:
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Características del ecosistema de datos abiertos ")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  ul.lista-ul.ps-5
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Disponibilidad en la red para descarga 
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Licencia abierta
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Datos legibles
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Manejo de URL dando mayor cobertura
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Formato abierto
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 Su creación se hace según necesidades de la comunidad
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img61.svg', alt='Texto que describa la imagen').mx-auto
          .row(titulo="Principios del ecosistema de datos abiertos")
            .col-12
              .row.align-items-center
                .col-md-9.align-items-center
                  ul.lista-ul.ps-5
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Abiertos:] al servicio para consulta. 
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Oportunos:] información relevante
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Utilizables:] con licencias abiertas
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Comparables:] en diferentes momentos y sectores
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Incentivadores:] aumenta la confianza y transparencia en un gobierno
                    li 
                      i.fas.fa-circle(style="color:#529D2E")
                      p.mb-0 #[b Innovadores:] como puede ser reutilizable, genera nuevo conocimiento que puede ser innovador.
                .col-lg-3.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema1/img62.svg').mx-auto
          .row(titulo="Ventajas del ecosistema de datos abiertos")
            .col-12
              figure
                img.img-t(src='@/assets/curso/tema1/img63.svg').mx-auto
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img60.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
