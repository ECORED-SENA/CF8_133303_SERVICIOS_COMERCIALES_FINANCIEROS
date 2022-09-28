<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 2
      h1 Herramientas tecnológicas
    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-12 
        p Las diferentes herramientas que se utilizan son por medio de un <em>software</em> diseñado para extraer, modificar y programar los datos recolectados. 
      .row.align-items-center.justify-content-center.bg5
        .col-lg-7
          p El uso de esta herramienta es elegido según diferentes características y modelos existentes, configurándola según las necesidades de cada entidad.
          p Por otro lado, estos <em>software</em> garantizan la #[b confiabilidad de la fuente de datos, su seguridad, extracción, recuperación y gestión, así como la facilidad de su administración.]
        .col-lg-3.mb-3
          figure
            img.img-t(src='@/assets/curso/tema2/img1.png').mx-auto(data-aos="fade-right")
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Criterios de funcionalidad y manejo
    p.mb-5 En las organizaciones el uso de las bases de datos se gestiona por medio de herramientas digitales que le permiten su administración, esto realizado por un <em>software</em> que responde a las necesidades según la magnitud de las bases que maneje cada entidad. A continuación se presentan las más utilizadas, su función y manejo:
    SlyderF.mb-5(columnas="col-md-6 col-lg-4")
      .col-12.col-lg-12.mb-3.mb-lg-0.bgt01
        .row.m-1
          .col-12.p-2.bgtitulo
            h5.mt-2.text-center <em>Microsoft SQL Server</em>
          .col-12.p-3.bgcontenido(style="height: 350px")
            img.mb-3(src="@/assets/curso/tema2/img2.png"  alt='Texto que describa la imagen')
            p Gestiona bases de datos de forma relacional, extrayendo información y creando cuadros de comparación frente a los datos solicitados versus lo encontrado.      
      .col-12.col-lg-12.mb-3.mb-lg-0.bgt02
        .row.m-1
          .col-12.p-2.bgtitulo
            h5.mt-2.text-center <em>MySQL</em>
          .col-12.p-3.bgcontenido(style="height: 350px")
            img.mb-3(src="@/assets/curso/tema2/img3.png"  alt='Texto que describa la imagen')
            p Gestiona bases de datos de forma correlacional por medio abierto, es decir, uso público, siendo una de las más conocidas en todo el mundo, extrae información, relaciona y entrega reporte.
      .col-12.col-lg-12.mb-3.mb-lg-0.bgt03
        .row.m-1
          .col-12.p-2.bgtitulo
            h5.mt-2.text-center <em>Oracle Database</em>
          .col-12.p-3.bgcontenido(style="height: 350px")
            img.mb-3(src="@/assets/curso/tema2/img4.png"  alt='Texto que describa la imagen')
            p Gestión de bases de datos relacional que extrae información, compara y entrega, teniendo la particularidad el nivel de seguridad, dejando solo administradores con permisos en su uso.
      .col-12.col-lg-12.mb-3.mb-lg-0.bgt01
        .row.m-1
          .col-12.p-2.bgtitulo
            h5.mt-2.text-center <em>Microsoft Access</em>
          .col-12.p-3.bgcontenido(style="height: 350px")
            img.mb-3(src="@/assets/curso/tema2/img5.png"  alt='Texto que describa la imagen')
            p Es una herramienta para el uso de manejo y gestión de la información que se puede adecuar a <em>Excel, share point</em> y demás componentes, trabaja de forma relacional para la entrega de reportes o consultas.      
      .col-12.col-lg-12.mb-3.mb-lg-0.bgt02
        .row.m-1
          .col-12.p-2.bgtitulo
            h5.mt-2.text-center <em>FileMarker</em>
          .col-12.p-3.bgcontenido(style="height: 350px")
            img.mb-3(src="@/assets/curso/tema2/img6.png"  alt='Texto que describa la imagen')
            p Aplicación de <em>Mac y Windows</em> para bases de datos relacionales, sirve para extraer información y comparar con la particularidad que es multiplataforma, lo que facilita trabajar con las gráficas propias del equipo del usuario.
      .col-12.col-lg-12.mb-3.mb-lg-0.bgt03
        .row.m-1
          .col-12.p-2.bgtitulo
            h5.mt-2.text-center <em>dBASE</em>
          .col-12.p-3.bgcontenido(style="height: 350px")
            img.mb-3(src="@/assets/curso/tema2/img7.png"  alt='Texto que describa la imagen')
            p Herramienta pionera en la gestión de base de datos, se utiliza manejando palabras clave de búsqueda y lugar en donde hacerlo, es utilizado por entidades que manejan un nivel de información baja y de fácil administración.

    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-4
        LineaTiempoD.color-terciario.mb-5
          .row(numero="1" titulo="<em>Python</em>").p-3
            .col-md-8.mb-4.mb-md-0
              p Lenguaje de programación de carácter abierto, lo que permite que se pueda generar trabajo colaborativo.
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/img4.svg', alt='Texto que describa la imagen')
          .row(numero="2" titulo="Lenguaje R").p-3
            .col-md-8.mb-4.mb-md-0
              p <em>Software</em> que permite hacer cálculos estadísticos y gráficos.
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/img5.svg', alt='Texto que describa la imagen')
          .row(numero="3" titulo="<em>Hadoop</em>").p-3
            .col-md-8.mb-4.mb-md-0
              p Herramienta que permite el análisis de datos de forma abierta y procesar grandes volúmenes de datos.
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/img6.svg', alt='Texto que describa la imagen')
          .row(numero="4" titulo="<em>Apache Spark</em>").p-3
            .col-md-8.mb-4.mb-md-0
              p Herramienta que procesa los datos rápidamente, de forma abierta y propone soluciones desde los mismos usuarios.
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/img7.svg', alt='Texto que describa la imagen')
          .row(numero="5" titulo="<em>MongoDB</em>").p-3
            .col-md-8.mb-4.mb-md-0
              p Herramienta enfocada a los documentos y no en registros.
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/img8.svg', alt='Texto que describa la imagen')
          .row(numero="6" titulo="<em>Apache Cassandra</em>").p-3
            .col-md-8.mb-4.mb-md-0
              p <em>Software</em> que ofrece alto rendimiento tanto para la recepción como para la salida de información, no se recomienda mucho para datos de entidades por su tipo de almacenaje y compatibilidad.
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/img9.svg', alt='Texto que describa la imagen')
          .row(numero="7" titulo="<em>Elasticsearch</em>").p-3
            .col-md-8.mb-4.mb-md-0
              p Se utiliza para el manejo de volumen alto de información, es un buscador de datos muy eficiente, ya que tiene la facilidad de manejar datos complejos.
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/img10.svg', alt='Texto que describa la imagen')
          .row(numero="8" titulo="<em>Apache Drill</em>").p-3
            .col-md-8.mb-4.mb-md-0
              p Herramienta que brinda la solución de integrar variedad de herramientas en un solo <em>software</em>.
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/img11.svg', alt='Texto que describa la imagen')
          .row(numero="9" titulo="<em>Apache Oozie</em>").p-3
            .col-md-8.mb-4.mb-md-0
              p Herramienta de programación que da la posibilidad de convertir datos complejos.
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/img12.svg', alt='Texto que describa la imagen')
      .col-lg-5
        figure.d-flex.justify-content-center
          img.imgtam(src='@/assets/curso/tema2/img2.svg', alt='Texto que describa la imagen')
  
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Paquetes integrados
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-6.col-12.p-0.mb-5
        figure
          img.img-t(src='@/assets/curso/tema2/img13.png', alt='Texto que describa la imagen').mx-auto
      .col-lg-7
        p Hoy en día, a nivel organizacional, la adquisición de herramientas ofimáticas que potencien la automatización de los mecanismos laborales es una ventaja competitiva, para ello, la integración de los datos a través de mecanismos integrales para el manejo de la información es un prioridad, un ejemplo de esto se ve cuando se hace la adquisición de licencias de paquetes de office empresarial, el cual contiene muchas herramientas necesarias para la gestión laboral del Siglo XXI, en este ejemplo se encuentra herramientas ofimáticas como Word, Excel, Access, entre otras. No obstante, de acuerdo con el sector empresarial, los objetivos organizacionales y el planteamiento estratégico, día a día se requiere estar a la vanguardia y se generan nuevas herramientas ofimáticas funcionales que integran más y más datos, y qué además, permiten cada vez mejorar la interpretación y el análisis de la información.   
    .bg6
      .row.align-items-center.justify-content-center.mb-5
        .col-lg-2.mb-3
          figure
            img.img-t(src='@/assets/curso/tema2/img14.png').mx-auto(data-aos="fade-right")
        .col-lg-7
          p Es de tener en cuenta que la entrada de nuevos paquetes integrados a nivel funcional se debe comprender y dar una actitud positiva frente a los costos y beneficios de estos nuevos mecanismos, en muchas ocasiones los equipos de trabajo se encuentran prevenidos a situaciones de cambio, por lo cual hacerse partícipe, capacitarse y liderar de forma positiva coadyuva en la sinergia para la puesta en operación y el logro de resultados exitosos, con la puesta en marcha de nuevas herramientas ofimáticas.      
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Herramientas colaborativas y de acceso a la nube
    p.mb-5 Con el desarrollo de la cuarta revolución industrial y por el efecto de la pandemia generada desde diciembre de 2019 por el SARS-CoV-2, coronavirus Covid-19, el trabajo colaborativo con el uso de herramientas ofimáticas disponibles en la nube y de aplicación en línea ha tenido un efecto exponencial de interpretación del manejo de estas, como también en los mecanismos de practicidad y de utilización de las mismas, dentro de las cuales, muy seguramente como aprendiz se ha visto inmerso en el manejo estas herramientas y manejará muchas más en el desarrollo de trabajos colaborativos para el cumplimiento de las actividades del presente programa técnico. Se relacionan algunas de estas (Yang, 2020):
    .row.align-items-center.justify-content-center.mb-5.bg8(data-aos="fade-right")
      .col-12.col-md-6.col-lg-3.ms-lg-5
        ul.lista-ul--color
          li
            <i class="fas fa-check-circle" style="color:#FC8116"></i>
            | <em>Google Drive</em>
          li
            <i class="fas fa-check-circle" style="color:#FC8116"></i>
            | <em>Microsoft Office 365 - One Drive</em>
          li
            <i class="fas fa-check-circle" style="color:#FC8116"></i>
            | <em>Dropbox</em>
          li
            <i class="fas fa-check-circle" style="color:#FC8116"></i>
            | <em>Wikis</em>
          li
            <i class="fas fa-check-circle" style="color:#FC8116"></i>
            | <em>Zoom</em>
          li
            <i class="fas fa-check-circle" style="color:#FC8116"></i>
            | <em>Slack</em>
          li
            <i class="fas fa-check-circle" style="color:#FC8116"></i>
            | <em>Workplace Facebook</em>
          li
            <i class="fas fa-check-circle" style="color:#FC8116"></i>
            | <em>Basecamp 3</em>
          li
            <i class="fas fa-check-circle" style="color:#FC8116"></i>
            | <em>Trello</em>
      .col-12.col-md-6.col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img13.svg')
    .col-lg-12
      p.mb-5 Para profundizar en esta temática de las herramientas se invita a observar el siguiente video:
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/HxgZ_srf39w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Tecnologías de la modernidad 4.0 
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12
        p La automatización de las cosas y nuestra evolución tecnológica obedece al concepto conocido como "la cuarta revolución industrial”, para ello es importante apoyarse en el concepto definido por Schwab (2016), sistemas inteligentes y conectados, lo cuales parten de una programación de algoritmos y su alcance es cada día más amplio.  Al mismo tiempo, se producen oleadas de más avances tecnológicos, lo cual se ha visto impulsada de manera significativa con relación al efecto de la pandemia generada por el Covid-19 (Yang, 2020).
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-up-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img17.png')})`}"
          )        
          .bloque-texto-g__texto.py-5.px-4
            p.mb-0  La interacción con la tecnología cada día va ligada a temas exponenciales, a través de los dominios físicos, digitales y biológicos, para Schwab (2020), corresponde a una revolución tecnológica que alterará fundamentalmente la forma en que se vive, se trabaja y se relaciona, involucrando a todos los actores de la política global, desde los sectores públicos y privados hasta la academia y la sociedad civil; pero todos estos conceptos parten de lenguajes de programación bajo conceptos de algoritmos. 
    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/img18.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4 La cuarta revolución industrial
              p.mb-0 Para fortalecer este aprendizaje es importante que recurra al material complementario y observe el video. La cuarta revolución industrial. 
            .col-sm-auto
              a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/watch?v=-OiaE6l8ysg" target="_blank").mb-0
                span Ver más
                i.fas.fa-link 


</template>

<script>
export default {
  name: 'Tema2',
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
