<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 <em>Big Data</em> 
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img1.png').m-auto
      .col-lg-7
        p Este  #[span.txt-color1 término hace referencia al conjunto de grandes volúmenes de datos estructurados y no estructurados, que permiten a las organizaciones tomar mejores decisiones tras el análisis de datos complejos de una forma más comprensible y que necesitan aplicaciones informáticas apropiadas para el tratamiento adecuado de los datos,] cada día se procesan más de 2,5 quintillones de bytes de datos en el mundo, que pueden ser desde consultas en el navegador de internet hasta complejos informes sobre el proceso de fabricación de un producto. Este término hace referencia a conjuntos de datos tan grandes y complejos que necesitan aplicaciones informáticas apropiadas para el tratamiento adecuado de los datos (Barranca, 2012).
        p El ejemplo más claro es la pandemia por el Coronavirus, en la que, mediante herramientas de <em>Big Data</em> e Industria 4.0 para combatir el COVID, se pudieron generar sistemas de geolocalización para conocer la propagación del virus en tiempo real. Dentro de la industria, las aplicaciones son más puntuales como, por ejemplo, en donde la planta está recibiendo la información de los pedidos ajustados, basados en las preferencias de color o modelo, de los consumidores que visualizan los productos en buscadores de internet. Otra aplicación, es el seguimiento de la eficiencia de los procesos en cada una de las fases en tiempo real.
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-1.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img2.svg').m-auto
      .col-lg-11
        p Este  #[span.txt-color1 Los beneficios más destacados que aporta el <em>Big Data</em> a la industria es la velocidad de entrega de la información en grandes volúmenes y variedad de formatos dispuestos en distintas fuentes como redes sociales, internet de las cosas, bases de datos internas y externas, Web Service entre otras.] Además de estos beneficios, hay otros como el seguimiento de equipos en tiempo real, para identificación de eventos que tengan probabilidad de ocurrencia de una parada de producción por daños mecánicos o bajas de energía e identificación de cuellos de botella en el proceso productivo.
        p Cuando se hace referencia al Big data, también se asocia a las “V” que lo caracterizan, las cuales se presentan en el siguiente recurso de aprendizaje:
      .col-lg-12
        figure
          img(src='@/assets/curso/tema3/img3.svg').m-auto
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Características
    p.mb-5 El contenido de información que se transmite funciona bajo la siguiente metodología conocida como las 3 V:
    .row.bg13.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")(data-aos="fade-right")
          div
            .row.align-items-center.justify-content-end
              .col-lg.mb-4
                h4 Volumen 
                p Hace referencia a la cantidad de información que se procesa ya sean aplicaciones, redes sociales, páginas en internet, entre otras, que manejan un peso en los datos dependiendo la complejidad de cada entidad.
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema3/img5.svg')
          div
            .row.align-items-center
              .col-5.col-lg-auto.mb-4
                figure
                  img(src='@/assets/curso/tema3/img6.svg')
              .col-lg
                h4 Velocidad 
                p Es el tiempo en el que se transfieren, procesan o recepcionan los datos.
          div
            .row.align-items-center.justify-content-end
              .col-lg.mb-4
                h4 Variedad 
                p Hace referencia a la diversidad de datos que se procesan ya sean videos, textos, audios, imágenes y demás información.
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema3/img7.svg')
          div
            .row.align-items-center
              .col-5.col-lg-auto.mb-4
                figure
                  img(src='@/assets/curso/tema3/img8.svg')
              .col-lg
              h4 Veracidad 
                p Hace énfasis a la calidad y exactitud de la información.
          div
            .row.align-items-center.justify-content-end
              .col-lg.mb-4
                h4 Valor  
                p El contenido de los datos debe suministrar información que genere utilidad en la entidad.  
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema3/img9.svg')
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Tipos de datos
    p.mb-5 Los datos que se presentan en la gestión del <em>Big Data</em> son:
    .bg14.p-3.mb-3.mt-3(data-aos="fade-right")
      .row.justify-content-start.align-items-center(data-aos="fade-left").mb-5
        .col-md-7
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img12.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1
                .p-3
                  h4 Estructurados 
                  p.mt-3 Estos datos tienen definido su formato y extensión haciendo posible su almacenamiento en tablas como sucede en el caso de una fuente de información de datos. 
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img13.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1
                .p-3
                  h4 No estructurado 
                  p.mt-3 Son estos datos que por el tipo de formato no se puede almacenar en tablas como el caso de archivos pdf, correos videos entre otros.  
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/img14.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul1
                .p-3
                  h4 Semiestructurado
                  p.mt-3 Son archivos que se pueden adaptar y ser relacionados como el caso de archivos HTML o XML.
        .col-md-5.col-7(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema3/img11.svg')(data-aos="fade-left")
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Principios del análisis masivo de datos
    p.mb-5 Para la administración y análisis de datos se presentan los siguientes principios:
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img15.svg', style="width: 125px")
        .tarjeta.color-primario4
          .p-4
            h4.text-center Inferencia estadística 
            p.mb-0v.text-center Se utiliza con el fin de inducir por muestras estadísticas el actuar de una comunidad así como sus características.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img16.svg', style="width: 125px")
        .tarjeta.color-primario4
          .p-4
            h4.text-center Árbol de decisión
            p.mb-0.text-center Se plasma por medio de una imagen las decisiones que se pueden tomar ante diferentes situaciones y así mismo se grafican sus resultados o consecuencias.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img17.svg', style="width: 125px")
        .tarjeta.color-primario4
          .p-4
            h4.text-center Redes neuronales
            pmb-0.text-center Imitando las neuronas del cerebro dando variables predictivas para la toma de decisiones.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img18.svg', style="width: 125px")
        .tarjeta.color-primario4
          .p-4
            h4.text-center Inducción de reglas
            p.mb-0.text-center Genera métodos y lineamientos automáticos para identificar la información.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img19.svg', style="width: 125px")
        .tarjeta.color-primario4
          .p-4
            h4.text-center Aprendizaje basado en instancias
            p.mb-0.text-center Procesa los datos hasta brindar respuesta, mediado por situaciones o ejemplos previamente delineados.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img20.svg', style="width: 125px")
        .tarjeta.color-primario4
          .p-4
            h4.text-center Algoritmos genéticos
            p.mb-0.text-center Brindan soluciones a una situación por medio de una serie de algoritmos que siguen una función genética del problema.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img21.svg', style="width: 125px")
        .tarjeta.color-primario4
          .p-4
            h4.text-center Aprendizaje Bayesiano
            p.mb-0.text-center Busca datos para encontrar soluciones por probabilidades
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img22.svg', style="width: 125px")
        .tarjeta.color-primario4
          .p-4
            h4.text-center Programación lógica inductiva
            p.mb-0.text-center Por medio de la inteligencia artificial, utiliza la lógica, hipótesis y del conocimiento previo para encontrar alternativas de solución.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img23.svg', style="width: 125px")
        .tarjeta.color-primario4
          .p-4
            h4.text-center Estimación  núcleo
            p.mb-0.text-center Por medio de la estimación de variables utilizando fórmulas aritméticas, extrae datos asociados para consulta de posibles soluciones.
    Separador
    #t_3_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Tecnologías para analizar grandes volúmenes de datos
    p.mb-5 En la siguiente tabla se presentan las herramientas para el proceso de análisis y administración del <em>Big Data</em>:
    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/img59.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4 Herramientas para analizar grandes volúmenes de datos. Tabla 1
              p.mb-0 Lo invitamos a consultar el siguiente recurso que muestra un el ejemplo de las herramientas para el proceso de análisis y administración del <em>Big Data</em>.
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/anexo4.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-up-left")
      .col-10.bg5.p-4
        .row.align-items-center.justify-content-center
          .col-lg-2.mb-3
            figure
              img.img-t(src='@/assets/curso/tema1/img18.svg').mx-auto(data-aos="fade-right").mx-auto
          .col-lg-10
            h4.bg6.ps-3.mt-2 Nota:
            p.mb-0 El uso de cualquiera de estas herramientas para analizar datos por medio del <em>Big Data</em> depende de la complejidad, volumen y tipo de información que maneje cada entidad.

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
