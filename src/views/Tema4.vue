<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Técnicas de gestión de datos masivos
    .row.justify-content-center
      .col-lg-12
          p.ps-5 El proceso para realizar la gestión de datos está inmerso en cuatro técnicas generales que son:
    .bg10.p-4.mb-5.mt-5(data-aos="fade-right")
      .row.justify-content-center(data-aos="fade-left")
        .col-md-4.col-8(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img2.svg')
        .col-lg-6.ms-5   
          p.mb-3 #[b Asociación:] hace la actividad de relacionar los datos según sus variables.
          p.mb-3 #[b Minera de datos:] extrae datos que contienen relación con las variables relacionadas.
          p.mb-3 #[b Agrupación:] toma los grupos grandes y los divide en pequeños para facilitar el análisis y encontrar similitudes con el propósito de conocer la estructura de la información.
          p.mb-3 #[b Análisis de texto:] realiza la modelación de la información extraída por contenido textual. 
    .col-lg-12
      p Cabe resaltar que estas técnicas van acompañadas por las diferentes herramientas digitales y métodos que escoge cada empresa.

    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Tipos de contingencias
    p Las contingencias se manejan como herramientas creadas en tablas para cruzar información, con el propósito de #[b representar un consolidado de los datos con sus respectivas variables, sirven para ordenar la información según sus características de búsqueda.]
    p Los tipos de contingencia son:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.justify-content-center
          .col-lg-3.mb-4.mb-lg-0.p-2
            p #[b Por característica]
            p Se determina un conjunto de características comparativas.
            p #[b Ejemplo:]
          .col-lg-8.bg11.p-4
            .row.justify-content-center
              .col-lg-10.d-flex-justify-content-center
                .tabla-a.color-acento-botones.mb-4
                  table
                    tbody
                      tr(style="background-color: #FFE390")
                        td.taborde.text-center #[b Característica]
                        td.taborde.text-center #[b Candidato A]
                        td.taborde.text-center #[b Candidato B]
                        td.taborde.text-center #[b Todos]

                      tr(style="background-color: #FFF5D3")
                        td.taborde.text-center Femenino
                        td.taborde.text-center.text-center 33
                        td.taborde.text-center.text-center 27
                        td.taborde.text-center.text-center 60
                      tr(style="background-color: #FFF5D3")
                        td.taborde.text-center Masculino
                        td.taborde.text-center 22
                        td.taborde.text-center 24
                        td.taborde.text-center 46
                      tr(style="background-color: #FFF5D3")
                        td.taborde.text-center Todos
                        td.taborde.text-center 51
                        td.taborde.text-center 55
                        td.taborde.text-center 106
            figure
              img.img-t(src='@/assets/curso/tema4/img3.svg').mx-auto
        .row.justify-content-center
          .col-lg-3.mb-4.mb-lg-0.p-2
            p #[b Por factores]
            p Se determina por condición social, edad y demás factores de estudio.
            p #[b Ejemplo:]
          .col-lg-8.bg11.p-4
            .row.justify-content-center
              .col-lg-10.d-flex-justify-content-center
                .tabla-a.color-acento-botones.mb-4
                  table
                    tbody
                      tr(style="background-color: #FFE390")
                        td.taborde.text-center #[b Factores]
                        td.taborde.text-center #[b Candidato A]
                        td.taborde.text-center #[b Candidato B]
                        td.taborde.text-center #[b Todos]

                      tr(style="background-color: #FFF5D3")
                        td.taborde.text-center Femenino - Asalariado
                        td.taborde.text-center.text-center 22
                        td.taborde.text-center.text-center 15
                        td.taborde.text-center.text-center 37
                      tr(style="background-color: #FFF5D3")
                        td.taborde.text-center Masculino - Independiente
                        td.taborde.text-center 33
                        td.taborde.text-center 26
                        td.taborde.text-center 59
                      tr(style="background-color: #FFF5D3")
                        td.taborde.text-center Todos
                        td.taborde.text-center 55
                        td.taborde.text-center 41
                        td.taborde.text-center 96
            figure
              img.img-t(src='@/assets/curso/tema4/img3.svg').mx-auto
        .row.justify-content-center
          .col-lg-3.mb-4.mb-lg-0.p-2
            p #[b Por probabilidad]
            p Se establecen unas variables para ver la probabilidad que suceda algo.
            p #[b Ejemplo:]
          .col-lg-8.bg11.p-4
            .row.justify-content-center
              .col-lg-10.d-flex-justify-content-center
                .tabla-a.color-acento-botones.mb-4
                  table
                    tbody
                      tr(style="background-color: #FFE390")
                        td.taborde.text-center #[b Probabilidad]
                        td.taborde.text-center #[b Niños]
                        td.taborde.text-center #[b Adultos]
                        td.taborde.text-center #[b Todos]

                      tr(style="background-color: #FFF5D3")
                        td.taborde.text-center Cáncer
                        td.taborde.text-center.text-center 11%
                        td.taborde.text-center.text-center 89%
                        td.taborde.text-center.text-center 100%
                      tr(style="background-color: #FFF5D3")
                        td.taborde.text-center Diabetes
                        td.taborde.text-center.text-center 12%
                        td.taborde.text-center.text-center 88%
                        td.taborde.text-center.text-center 100%         
            figure
              img.img-t(src='@/assets/curso/tema4/img3.svg').mx-auto
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #EDF8A4" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/tema1/img5.svg" style="max-width: 37px")
        .col.pe-xl-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 #[b Nota:] se puede observar que los tipos de contingencia se adaptan según las necesidades de las diferentes entidades y el <em>software</em> que se maneje es fundamental para su facilidad.
   
      
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Almacenamiento
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        p El almacenamiento es la actividad de guardar los datos por medio de herramientas que se utilizan para conservar la información. Los tipos de herramientas pueden ser magnéticas, ópticas, sólidas, informáticas y digitales con las cuales la entidad puede almacenar los datos.
        p.mb-5 A continuación en el siguiente video, se presentan las principales herramientas de almacenamiento de datos: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)(data-aos="fade-right")
    Separador
    #t_4_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Lenguajes de consulta y manipulación de datos
    .row.mb-5
      .col-lg-12
        p Es el lenguaje que utilizan los sistemas de gestión de la información, para que los navegantes o usuarios puedan ingresar a las bases de datos revisarlas y editarlas si es necesario. Es decir, por medio de este idioma se manipulan las bases de datos. 
        p A continuación se presenta el lenguaje de administración de datos:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img7.svg', style="width: 100px").hoverScale.ico-tema7
          .tarjeta.color-acento-contenido5
            .p-4
              h4.text-center <em>Select</em>
              p Es la lenguaje que se utiliza para seleccionar ya sean filas, tablas y demás.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img4.svg', style="width: 100px")
          .tarjeta.color-acento-contenido5
            .p-4
              h4.text-center <em>Insert</em>
              p Es el idioma para ingresar información a la base de datos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img5.svg', style="width: 100px")
          .tarjeta.color-acento-contenido5
            .p-4 
              h4.text-center <em>Delete</em>
              p Es el lenguaje para eliminar datos o usuarios
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img6.svg', style="width: 100px")
          .tarjeta.color-acento-contenido5 
            .p-4
              h4.text-center <em>Update</em>
              p Es el idioma para actualizar la información y cambiar valores.
</template>

<script>
export default {
  name: 'Tema3',
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
