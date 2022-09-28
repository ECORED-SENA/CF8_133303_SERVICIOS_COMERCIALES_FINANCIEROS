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
        .col-md-10.col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
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
      SlyderA.flesly(tipo="b")(data-aos="fade-right")
        .row.justify-content-center.p-3
          .col-lg-3.mb-4.mb-lg-0.p-2
            p #[b Por característica]
            p Se determina un conjunto de características comparativas.
            p #[b Ejemplo:]
          .col-lg-8.bg11.p-lg-4
            .row
              .col-lg-12
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
        .row.justify-content-center.p-3
          .col-lg-3.mb-4.mb-lg-0.p-2
            p #[b Por factores]
            p Se determina por condición social, edad y demás factores de estudio.
            p #[b Ejemplo:]
          .col-lg-8.bg11.p-4
            .row
              .col-lg-12
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
        .row.justify-content-center.p-3
          .col-lg-3.mb-4.mb-lg-0.p-2
            p #[b Por probabilidad]
            p Se establecen unas variables para ver la probabilidad que suceda algo.
            p #[b Ejemplo:]
          .col-lg-8.bg11.p-4
            .row
              .col-lg-12
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
      h2 4.2 Criterios de respaldo y recuperación
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        p El almacenamiento es la actividad de guardar los datos por medio de herramientas que se utilizan para conservar la información. Los tipos de herramientas pueden ser magnéticas, ópticas, sólidas, informáticas y digitales, con las cuales la entidad puede almacenar los datos.
        p.mb-5 El siguiente video le permitirá ahondar en la temática herramientas de respaldo y recuperación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3cYiy1n4hWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)(data-aos="fade-right")
       
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #EDF8A4" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/tema1/img5.svg" style="max-width: 37px")
        .col.pe-xl-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 #[b Nota:] se invita a ampliar la información sobre las herramientas descritas anteriormente y analizar su evolución y servicios en la vida cotidiana.
    Separador
    #t_4_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Herramientas de depuración de los datos 
    .row.mb-5
      .col-lg-12
        p Esta actividad se enfoca en limpiar y recopilar los datos que van a ser utilizados, consultados, investigados, extraídos o buscados, con el propósito de que la información sea precisa y válida para los diferentes análisis que se requieren hacer en el proceso, garantizando la seguridad de los datos obtenidos.
        p Las organizaciones en la preparación de los datos tienen en cuenta:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-acento-contenido3.h-100
          .p-4
            img(src='@/assets/curso/tema4/img5.svg', style="width: 40px").
          .p-4
            p Claridad de la información y seguridad en el acceso de un lugar seguro.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-acento-contenido4.h-100
          .p-4
            img(src='@/assets/curso/tema4/img5.svg', style="width: 40px").
          .p-4
            p Confiabilidad de los datos, obteniendo información fidedigna, veraz, visible y auditable, por si se debe modificar.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-acento-contenido5.h-100
          .p-4
            img(src='@/assets/curso/tema4/img5.svg', style="width: 40px").
          .p-4
            p Comprensible y con capacidad de repetición, asegurando su entendimiento para generar estrategias.
    p Ahora, para preparar los datos estructurados se siguen las siguientes fases:
    .bg12
      .row.align-items-center.justify-content-center.mb-5
        .col-lg-1
        .col-lg-7
          p.mb-3 #[b 01] Identificar los datos que se necesitan, adquirirlos, compilarlos y generar un canal o línea de acceso permanente.
          p.mb-3 #[b 02] Revisar la calidad de los datos compilados según la relación con la actividad o situación que se quiere solucionar.
          p.mb-3 #[b 03] Limpieza de la información que consiste en corregir, eliminar duplicidad, suprimir datos incompletos y salvaguardar información confidencial.
        .col-lg-4.mb-3
          figure
            img.img-t(src='@/assets/curso/tema4/img6.svg').mx-auto(data-aos="fade-right")
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #EDF8A4" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/tema1/img5.svg" style="max-width: 37px")
        .col.pe-xl-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 #[b Nota:] esta actividad se realiza por medio de las herramientas digitales, informáticas o de inteligencia artificial, según lo estipule cada organización.
    Separador
    #t_4_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Criterios de calidad
    .row.justify-content-center.mb-5
      .col-lg-12
        p.mb-4 Las bases sobre las cuales se crea y evalúan los resultados de un determinado producto analizado, parte de la base de dónde se obtienen los datos, para ello, se apoyará en el modelo de calidad del producto de datos definido por el estándar ISO/IEC 25012, el cual se encuentra compuesto por 15 características relacionadas así:
      SlyderF(columnas="col-lg-6 col-xl-3").mb-5
        .tarjeta.color-primario4.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img8.svg', style="width: 125px")
          p.mb-0 #[b Exactitud]
          p.mb-0 Grado en el que los datos representan correctamente el verdadero valor del atributo deseado de un concepto o evento en un contexto de uso específico.
        .tarjeta.color-primario5.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img9.svg', style="width: 125px")
          p.mb-0 #[b Completitud]
          p.mb-0 Grado en el que los datos asociados con una entidad tienen valores para todos los atributos esperados e instancias de entidades relacionadas en un contexto de uso específico.
        .tarjeta.color-primario4.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img10.svg', style="width: 125px")
          p.mb-0 #[b Consistencia]
          p.mb-0 Grado en el que los datos están libres de contradicción y son coherentes con otros datos en un contexto de uso específico. Puede ser analizada en datos que se refieran tanto a una como a varias entidades comparables.
        .tarjeta.color-primario5.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img11.svg', style="width: 125px")
          p.mb-0 #[b Credibilidad]
          p.mb-0 Grado en el que los datos tienen atributos que se consideran ciertos y creíbles en un contexto de uso específico. La credibilidad incluye el concepto de autenticidad (la veracidad de los orígenes de los datos, atribuciones y compromisos).
        .tarjeta.color-primario4.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img12.svg', style="width: 125px")
          p.mb-0 #[b Actualidad]
          p.mb-0 Grado en el que los datos tienen atributos que tienen la edad correcta en un contexto de uso específico.
        .tarjeta.color-primario5.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img13.svg', style="width: 125px")
          p.mb-0 #[b Accesibilidad]
          p.mb-0 Grado en el que los datos pueden ser accedidos en un contexto específico, particularmente por personas que necesiten tecnologías de apoyo o una configuración especial por algún tipo de discapacidad.
        .tarjeta.color-primario4.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img14.svg', style="width: 125px")
          p.mb-0 #[b Conformidad]
          p.mb-0 Grado en el que los datos tienen atributos que se adhieren a estándares, convenciones o normativas vigentes y reglas similares referentes a la calidad de los datos en un contexto de uso específico.
        .tarjeta.color-primario5.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img15.svg', style="width: 125px")
          p.mb-0 #[b Confidencialidad]
          p.mb-0 Grado en el que los datos tienen atributos que aseguran que los datos son solo accedidos e interpretados por usuarios autorizados en un contexto de uso específico. La confidencialidad es un aspecto de la seguridad de la información (junto con la disponibilidad y la integridad) definida en ISO/IEC 13335-1:2004.
        .tarjeta.color-primario4.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img16.svg', style="width: 125px")
          p.mb-0 #[b Eficiencia]
          p.mb-0 Grado en el que los datos tienen atributos que pueden ser procesados y proporcionados con los niveles de rendimiento esperados, mediante el uso de cantidades y tipos adecuados de recursos en un contexto de uso específico.
        .tarjeta.color-primario5.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img17.svg', style="width: 125px")
          p.mb-0 #[b Precisión]
          p.mb-0 Grado en el que los datos tienen atributos que son exactos o proporcionan discernimiento en un contexto de uso específico
        .tarjeta.color-primario4.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img18.svg', style="width: 125px")
          p.mb-0 #[b Trazabilidad]
          p.mb-0 Grado en el que los datos tienen atributos que proporcionan un camino de acceso auditado a los datos o cualquier otro cambio realizado sobre los datos en un contexto de uso específico.
        .tarjeta.color-primario5.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img19.svg', style="width: 125px")
          p.mb-0 #[b Comprensibilidad]
          p.mb-0 Grado en el que los datos tienen atributos que permiten ser leídos e interpretados por los usuarios y son expresados utilizando lenguajes, símbolos y unidades apropiados en un contexto de uso específico. Cierta información sobre la comprensibilidad puede ser expresada mediante metadatos.
        .tarjeta.color-primario4.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img20.svg', style="width: 125px")
          p.mb-0 #[b Disponibilidad]
          p.mb-0 Grado en el que los datos tienen atributos que permiten ser obtenidos por usuarios y/o aplicaciones autorizados en un contexto de uso específico.
        .tarjeta.color-primario5.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img21.svg', style="width: 125px")
          p.mb-0 #[b Portabilidad]
          p.mb-0 Grado en el que los datos tienen atributos que les permiten ser instalados, reemplazados o eliminados de un sistema a otro, preservando el nivel de calidad en un contexto de uso específico.
        .tarjeta.color-primario4.p-3
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema4/img22.svg', style="width: 125px")
          p.mb-0 #[b Recuperabilidad]
          p.mb-0 Grado en el que los datos tienen atributos que permiten mantener y preservar un nivel específico de operaciones y calidad, incluso en caso de fallos en un contexto de uso específico.


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
