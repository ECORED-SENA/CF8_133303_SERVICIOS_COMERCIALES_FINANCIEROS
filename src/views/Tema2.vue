<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 2
      h1 Bases de datos
    p.mb-5 
    .bloque-texto-a.color-primario.p-4.p-md-4.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/img1.svg', style="width:300px").m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Es una herramienta encargada de guardar los datos y entrelazarlos de forma lógica según su contenido o temática.
            p Es muy útil en las entidades que buscan gestionar gran cantidad de información por medio de herramientas digitales, buscando soluciones al gran volumen de datos que administran.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Clasificación 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-up-left")
      .col-10.bg5.p-4
        .row.align-items-center.justify-content-center
          .col-lg-2.mb-3
            figure
              img.img-t(src='@/assets/curso/tema1/img18.svg').mx-auto(data-aos="fade-right").mx-auto
          .col-lg-8.bg11
            p.p-3 Las bases de datos en las entidades usualmente se clasifican según la necesidad de las organizaciones de la siguiente manera:
    .bg12.p-3.mb-3.mt-5(data-aos="fade-right")
      .row.justify-content-start.align-items-center(data-aos="fade-left").mb-5
        .col-md-8
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img4.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul2
                .p-4
                  h4 Por Variación
                  p.mt-4 Están compuestos por esos datos que comúnmente se mantienen en archivo de forma estática y sirven de consulta y análisis si son requeridos. Por otro lado, también esos datos que se mantienen en actualización continua, es decir se modifican cuando es requerido por la entidad.
          .col-lg-12.mb-4.ps-3
            .tarjeta-avatar-b.mb-0.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img5.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul2
                .p-4
                  h4 Por Tema
                  p.mt-4 Están compuestos por los datos que se identifican a través de citas bibliográficas como medio de información primaria, también datos de texto que compilan fuentes completas de información, además directorios que como su gestión común encontramos que identifican datos de contacto que requerimos, por ultimo las bibliotecas digitales que almacenan contenido de varia información de consulta según necesidad.
        .col-md-4.col-7(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/img2.svg')(data-aos="fade-left")
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Características
    p A continuación, se enumeran las características de las bases de datos para un mayor entendimiento:
    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/img59.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4 PDF Características de las bases de datos
              p.mb-0 Lo invitamos a consultar el siguiente recurso que muestra un ejemplo de las características de las bases de datos.
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/anexo3.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Modelos 
    p Los modelos de administración de datos se basan en ubicar donde se almacena la información, así como la extracción o consulta de la misma.
    p.mb-5 Los modelos son:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5
          .row(titulo="Por Rango")
            .col-12
              .row.align-items-center
                .col-md-8.align-items-center
                  p.ps-5 Se utiliza cuando se administra una gran cantidad de información y se hace cómo tener un árbol invertido donde la raíz es la fuente de datos y las hojas no producen información tiene falencias cuando los datos son repetidos o redundantes.  
                .col-lg-4.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema2/img6.svg', alt='Texto que describa la imagen').mx-auto
          .row(titulo="Por red")
            .col-12
              .row.align-items-center
                .col-md-8.align-items-center
                  p.ps-5 Se utiliza para resolver solución frente a gran volumen de datos evitando la redundancia, pero tiene fallas en el proceso de administración.
                .col-lg-4.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema2/img7.svg').mx-auto
          .row(titulo="Por transacciones")
            .col-12
              .row.align-items-center
                .col-md-8.align-items-center
                  p.ps-5 Se utiliza para remitir y recibir información de forma rápida y su uso debe contar con un buen sistema ya que las operaciones que se generen deben ser en el mismo tiempo, es decir; envío y recepción inmediata para garantizar el uso óptimo.
                .col-lg-4.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema2/img8.svg').mx-auto
          .row(titulo="Por relación")
            .col-12
              .row.align-items-center
                .col-md-8.align-items-center
                  p.ps-5Se utiliza para dar solución a situaciones reales y que la administración de los datos sea totalmente dinámica tiene la facilidad de manejar volúmenes grandes de información de forma eficiente. 
                .col-lg-4.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema2/img9.svg').mx-auto
          .row(titulo="Multidimensional")
            .col-12
              .row.align-items-center
                .col-md-8.align-items-center
                  p.ps-5 Se maneja para actividades directas y concretas de forma eficiente brinda soluciones tipo relacional.
                .col-lg-4.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema2/img10.svg').mx-auto
          .row(titulo="Por guía a objetos")
            .col-12
              .row.align-items-center
                .col-md-8.align-items-center
                  p.ps-5 Este modelo hace uso de su administración y creación por funciones lo que permite manejar programas y operaciones por separado, tiene capacidad de trabajar sobre volúmenes altos de información de forma óptima.
                .col-lg-4.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema2/img11.svg').mx-auto
          .row(titulo="Por documentos")
            .col-12
              .row.align-items-center
                .col-md-8.align-items-center
                  p.ps-5 Se utiliza para modificar las variables de información, es decir cambiar textos sin afectar el contenido, también gestionar búsqueda de datos de gran volumen, así como su administración. 
                .col-lg-4.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema2/img12.svg').mx-auto
          .row(titulo="Por deducción")
            .col-12
              .row.align-items-center
                .col-md-8.align-items-center
                  p.ps-5 Su administración se basa en situaciones presentadas, a través de la lógica que brinda las matemáticas, tiene la capacidad de almacenar y manejar volúmenes altos de datos.
                .col-lg-4.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema2/img13.svg').mx-auto
          .row(titulo="Por distribución")
            .col-12
              .row.align-items-center
                .col-md-8.align-items-center
                  p.ps-5 Este modelo contempla su administración a través de la red en diferentes sitios generando varias opciones para su edición y control, contiene capacidad alta de volumen de datos.
                .col-lg-4.col-md-6.col-12.p-0
                  figure
                    img.img-t(src='@/assets/curso/tema2/img14.svg').mx-auto
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-up-left")
        .col-8.bg5.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2.mb-3
              figure
                img.img-t(src='@/assets/curso/tema1/img18.svg').mx-auto(data-aos="fade-right").mx-auto
            .col-lg-10
              h4.bg6.ps-3.mt-2 Nota:
              p.mb-0 Se aclara que los modelos van asociados a la tecnología, características y diferentes herramientas que se integran como la recolección de los datos, según cada entidad, presupuesto y necesidades. 
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Sistemas de Gestión de bases de datos 
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img16.png').m-auto
      .col-lg-7
        p La administración y gestión que se hace de la información se realiza a través de un <em>software</em> diseñado para extraer, modificar y programar los datos recolectados. El uso de esta herramienta es elegido según diferentes características y modelos existentes, configurándola según las necesidades de cada entidad.
        p Por otro lado, estos <em>softwares</em> garantizan la confiabilidad de la fuente de datos, su seguridad, extracción, recuperación y gestión, así como la facilidad de su administración.
        p.mb-5 En las organizaciones el uso de las bases de datos se gestiona por medio de herramientas digitales que le permiten su administración, esto por un <em>software</em> que responde a las necesidades según la magnitud de las bases que maneje cada entidad, a continuación, se presentan las más utilizadas.
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones.p-4(titulo="<em>Microsoft SQL Server</em>:")
        .row
          .col-lg-9.mb-4.mb-lg-0.p-4
            h4 <em>Microsoft SQL Server</em>:  
            p.mb-3 Esta herramienta sirve para gestionar bases de datos de forma relacional, extrayendo información y creando cuadros de comparación frente a los datos solicitados versus lo encontrado.
          .col-lg-3.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img17.png').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="MySQL:")
        .row
          .col-lg-9.mb-4.mb-lg-0.p-4
            h4 MySQL: 
            p.mb-0 Esta herramienta gestiona bases de datos de forma correlacional por medio abierto es decir uso público siendo una de las más conocidas en todo el mundo, extrae información, relaciona y entrega reporte.
          .col-lg-3.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img18.png').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="<em>Oracle Database</em>:")
        .row
          .col-lg-9.mb-4.mb-lg-0.p-4
            h4 <em>Oracle Database</em>: 
            p.mb-0 Es una herramienta de gestión de bases de datos relacional que extrae información, compara y entrega, teniendo la particularidad el nivel de seguridad dejando solo administradores con permisos en su uso.
          .col-lg-3.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img19.png').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="<em>Microsoft Access</em>:")
        .row
          .col-lg-9.mb-4.mb-lg-0.p-4
            h4 <em>Microsoft Access</em>:
            p.mb-0 Es una herramienta para el uso de manejo y gestión de la información que se puede adecuar a Excel, Sharepoint y demás componentes, trabaja de forma relacional para entrega de reportes o consultas.
          .col-lg-3.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img20.png').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="<em>FileMarker</em>:")
        .row
          .col-lg-9.mb-4.mb-lg-0.p-4
            h4 <em>FileMarker</em>: 
            p.mb-0 Es una aplicación de Mac y Windows para bases de datos relacionales, sirve para extraer información y comparar con la particularidad que es multiplataforma lo que facilita trabajar con las gráficas propias del equipo del usuario.
          .col-lg-3.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img21.png').m-auto
      .tarjeta.color-acento-botones.p-4(titulo="dBASE:")
        .row
          .col-lg-9.mb-4.mb-lg-0.p-4
            h4 dBASE:
            p.mb-0 Es la herramienta pionera en la gestión de base de datos, se utiliza manejando palabras claves de búsqueda y lugar en donde hacerlo, es utilizado por entidades que manejan un nivel de información baja y de fácil administración.
          .col-lg-3.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img22.png').m-auto
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
