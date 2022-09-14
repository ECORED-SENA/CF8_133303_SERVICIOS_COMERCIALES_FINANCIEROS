<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Herramientas de analítica de datos
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img1.png').m-auto
      .col-lg-7
        p La programación para la analítica conlleva a contribuir en el progreso competitivo, buscando potenciar las funciones relacionadas con búsqueda de fuentes para extraer, recopilar, depurar y procesar conjuntos de datos, requiriendo la utilización de herramientas y lenguajes de programación para la refinación y visualización de estos datos en contextos laborales, sociales y personales, los cuales hoy en día son muy necesitados en el sector empresarial, y lo más conveniente es que este nivel puede llevarse a un nivel estratégico de la organización, con lo cual se podrá fomentar la generación de competencias en su capital humano, conllevando a mejorar la capacidad de innovar mediante procesos de cambio con una interpretación integral, a través de técnicas de visualización y la utilización de metodologías.
   
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Tipos y funcionalidad
    p.mb-5 Cada tipo de organización debe escoger el tipo de herramienta de analítica que empleará para resolver su pregunta de negocio, recuerde que el <em>business analytics</em> “es el proceso científico de transformar los datos en conclusiones con el propósito de tomar mejores decisiones”, las herramientas de analítica con las que se resuelve las preguntas de negocios se pueden clasificar en cuatro tipos, aclarando de manera previa que ningún tipo de analítica es mejor que otro, porque cada tipo cumple una función diferente, por lo cual  se relacionan los tipos y su funcionalidad de la siguiente forma: 
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones1.p-4(titulo="Analítica descriptiva")
        .row
          .col-lg-8.mb-4.mb-lg-0.p-4
            h4 Analítica descriptiva
            p.mb-0 Responde a la pregunta: ¿qué está pasando en su negocio? Este tipo de analítica emplea estadística descriptiva y gráficos para realizar las tareas de resumir y visualizar los datos, esta analítica es la que requiere menor sofisticación técnica.
          .col-lg-4.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema3/img2.png').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Analítica diagnóstica")
        .row
          .col-lg-8.mb-4.mb-lg-0.p-4
            h4 Analítica diagnóstica
            p.mb-0 Responde a la pregunta: ¿por qué está pasando lo que está pasando en el negocio? Este tipo de análisis tiene la capacidad de encontrar las causas de los problemas, la raíz de las relaciones, y así mismo, es capaz de aislar los efectos de diferentes fenómenos. 
          .col-lg-4.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema3/img3.png').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Analítica predictiva")
        .row
          .col-lg-8.mb-4.mb-lg-0.p-4
            h4 Analítica predictiva
            p.mb-0 Busca responder la pregunta: ¿qué es posible que ocurra en el futuro? Para esto se apoya en datos históricos. 
          .col-lg-4.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema3/img4.png').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Analítica prescriptiva")
        .row
          .col-lg-8.mb-4.mb-lg-0.p-4
            h4 Analítica prescriptiva
            p.mb-0 Busca responder la pregunta: ¿qué necesita hacer para lograr un objetivo? Este tipo de analítica hace énfasis en el uso de técnicas de optimización para identificar cuál es la mejor alternativa, y así, minimizar o maximizar algún objetivo, como también orienta los modelos que permiten simular situaciones en las organizaciones.
          .col-lg-4.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema3/img5.png').m-auto
    p Estos tipos de analíticas se pueden mezclar para responder cada pregunta de negocios relevante, todo con el fin de tomar una decisión, basada en los datos en este mundo del <em>business analytics</em>.
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Algoritmos 
    p.mb-5 El mundo digital está lleno de cosas cada vez más asombrosas, la automatización de la cosas y el cómo es posible todo esto se reduce a un concepto clave, los algoritmos, los cuales son una secuencia de instrucciones o de pasos en temas de programación computacional, tan simple como eso, las cuales tienen como objetivo la proyección de un resultado esperado; <em>Gurevich</em> (2000) considera que un algoritmo es una máquina de estados abstracta y <em>Moschovakis</em> (1998) expone que el algoritmo es un recurso comúnmente conocido como un desarrollador.  
    .bg9
      .row.align-items-center.justify-content-center.mb-5
        .col-lg-7
          p <em>Moschovakis</em> (1998) reseña que la noción de algoritmo se proyecta durante los años 30 en adelante, cuando la teoría de la computabilidad (antes llamada "teoría de las funciones recursivas") relaciona autores reconocidos como los responsables de dicha expansión, entre ellos, <em>Kurt Gödel, Alonzo Church o Alan Turing</em>, con estos conceptos se concluye de forma integral que el algoritmo permite obtener resultados a tareas complejas sin explicar el porqué, con la ejecución de secuencias computacionales programadas y automatizadas. 
        .col-lg-3.mb-3
          figure
            img.img-t(src='@/assets/curso/tema3/img6.png').mx-auto(data-aos="fade-right")
    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/img8.svg")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4 Antecedentes de la estadística
              p.mb-0 Para fortalecer este aprendizaje es importante que recurra al material complementario y observe el video Antecedentes de la estadística.
            .col-sm-auto
              a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/watch?v=-NutZ7n-Exg" target="_blank").mb-0
                span Ver más
                i.fas.fa-link 

    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Técnicas de gestión de los datos
    p.mb-5 La recopilación de información orienta de manera significativa la gestión empresarial, por ello, la gestión de los datos maestros debe ir ligado a una estrategia con criterios y secuencias organizadas para recopilar y almacenar con criterios de datos limpios y confiables, los cuales son esenciales para tomar decisiones organizacionales, dado lo anterior, se expone la siguiente secuencia para la gestión de los datos bajo una técnica a tener en cuenta:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-5.mdf(tipo="n")(data-aos="fade-right")
          div
            .row.align-items-center.justify-content-end
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema3/img9.svg')
              .col-lg.mb-4
                h4 Paso 01:
                p Revise sus objetivos comerciales.
          div
            .row.align-items-center
              .col-lg
                h4 Paso 02:
                p Haga de la seguridad de los datos su máxima prioridad.
              .col-5.col-lg-auto.mb-4
                figure
                  img(src='@/assets/curso/tema3/img10.svg')
          div
            .row.align-items-center.justify-content-end
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema3/img11.svg')
              .col-lg.mb-4
                h4 Paso 03:
                p Haga los datos accesibles y segmentados.             
          div
            .row.align-items-center
              .col-lg
                h4 Paso 04:
                p Limitación de puntos de entrada de los datos.
              .col-5.col-lg-auto.mb-4
                figure
                  img(src='@/assets/curso/tema3/img12.svg')
          div
            .row.align-items-center.justify-content-end
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema3/img13.svg')
              .col-lg.mb-4
                h4 Paso 05:
                p Actualización de los datos con frecuencia.
          div
            .row.align-items-center
              .col-lg
                h4 Paso 06: 
                p Eliminación de los datos irrelevantes.
              .col-5.col-lg-auto.mb-4
                figure
                  img(src='@/assets/curso/tema3/img14.svg')
          div
            .row.align-items-center.justify-content-end
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema3/img15.svg')
              .col-lg.mb-4
                h4 Paso 07:
                p Control de copia de seguridad y recuperación de los datos.
          div
            .row.align-items-center
              .col-lg
                h4 Paso 08:
                p Asegurar la calidad revisando y manteniendo los datos.
              .col-5.col-lg-auto.mb-4
                figure
                  img(src='@/assets/curso/tema3/img16.svg')
          div
            .row.align-items-center.justify-content-end
              .col-5.col-lg-auto
                figure
                  img(src='@/assets/curso/tema3/img17.svg')
              .col-lg.mb-4
                h4 Paso 09:
                p Use estas técnicas de administración de los datos para mantener sus datos limpios y utilizables. 
              

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
