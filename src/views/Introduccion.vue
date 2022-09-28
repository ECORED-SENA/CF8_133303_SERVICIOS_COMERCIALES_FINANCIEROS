<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white 
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-md-5
        .dual-txt-deco
          p(style="position: relative; z-index: 1;") La gestión de los datos en las organizaciones cada día expone una mayor exigencia, gracias a los resultados que brindan las alternativas de soluciones de la información procesada por las diferentes herramientas de análisis de los datos.
          p Esto no es ajeno a los servicios comerciales y financieros, ya que en los estudios de crédito como en las operaciones de caja se procesa gran cantidad de información que requiere un análisis para presentar informes o algún tipo de resultado.
      .col-md-5.col-10.mb-md-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img1.png').mb-5
      .col-lg-12
        p.mb-0 Teniendo en cuenta lo anterior, el aprendiz en la presente unidad temática aprenderá las diferentes herramientas tecnológicas, técnicas, modelos, criterios, algoritmos y funciones de la Ciencia de los datos para la gestión masiva de bases, con el fin de mejorar su capacidad de ejercer en el proceso comercial y financiero dentro de su entidad.
        p Se invita al aprendiz a participar y ser el protagonista de la formación.
        p #[b ¡Bienvenido!]

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zNQODdtsE9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
       
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
