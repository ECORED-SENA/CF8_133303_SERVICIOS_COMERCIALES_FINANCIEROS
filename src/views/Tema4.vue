<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Técnicas de gestión de datos masivos
    .bg15.p-4.mb-5.mt-5(data-aos="fade-right")
      .row.justify-content-start.align-items-center(data-aos="fade-left").mb-5
        .col-lg-12
          p.ps-5 El proceso para realizar la gestión de datos está inmerso en cuatro técnicas generales que son:
        .col-lg-6.ms-5
          ul.lista-ul--color
            li
              i.fas.fa-check-circle(style="color:#FC8116")
              p.mb-0 #[b Asociación:] hace la actividad de relacionar los datos según sus variables.
            li
              i.fas.fa-check-circle(style="color:#FC8116")
              p.mb-0 #[b Minera de datos:] extrae datos que contienen relación con las variables relacionadas.
            li
              i.fas.fa-check-circle(style="color:#FC8116")
              p.mb-0 #[b Agrupación:] toma los grupos grandes y los divide en pequeños para facilitar el análisis y encontrar similitudes con el propósito de conocer la estructura de la información.
            li
              i.fas.fa-check-circle(style="color:#FC8116")
              p.mb-0 #[b Análisis de texto:] realiza la modelación de la información extraída por contenido textual. 
        .col-md-5.col-8(data-aos="fade-left")
            img(src='@/assets/curso/tema4/img2.svg')
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-up-left")
      .col-10.bg16.p-4
        .row.align-items-center.justify-content-center
          .col-lg-2.mb-3
            figure
              img.img-t(src='@/assets/curso/tema1/img18.svg').mx-auto(data-aos="fade-right").mx-auto
          .col-lg-8.bg17
            p.p-3 Cabe resaltar que estas técnicas van acompañadas por las diferentes herramientas digitales y métodos que escoge cada empresa.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Metodologías
    p.mb-5 EEn la actualidad existen varias metodologías que se utilizan para el análisis de datos masivos de las cuales el aprendiz conocerá el método, su característica y ejemplo para que pueda relacionar en su entorno laboral mediante la siguiente tabla.
    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/img59.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4 Metodologías para el proceso de análisis y administración de <em>Big Data</em> . Tabla 2
              p.mb-0 Lo invitamos a consultar el siguiente recurso que muestra un el ejemplo de las herramientas para el proceso de análisis y administración del <em>Big Data</em>.
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/anexo5.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    .bg_grad-01
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-up-left")
        .col-10.bg5.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2.mb-3
              figure
                img.img-t(src='@/assets/curso/tema1/img18.svg').mx-auto(data-aos="fade-right").mx-auto
            .col-lg-10.bg6
              h4.ps-3.mt-2 Nota:
              p.mb-0 Cada entidad utiliza el método según requerimientos en su gestión.
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
