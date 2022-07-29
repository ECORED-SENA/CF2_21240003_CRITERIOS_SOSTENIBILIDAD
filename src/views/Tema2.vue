<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: black") 2
      h1 Principios y criterios de sostenibilidad.

    p.mb-5(data-aos="fade-right") El cambio climático, las inundaciones repetitivas, la inconformidad sobre la desigualdad, entre otras problemáticas y realidades, acentúan la necesidad de trabajar en las variables ambiental y social, entre los diferentes grupos de interés internos y/o externos a la organización.

    .d-flex.flex-wrap.mb-5
      img.col-lg-5.col-xl-4.m-auto(src="@/assets/curso/temas/tema2/img-1.jpg" data-aos="fade-right")
      .col-lg-7.col-xl-8.ps-lg-3(data-aos="fade-left")
        p.mb-3.p-3(style="background-color: #DDF8FB") Como consecuencia se han generado cambios irreversibles en los sistemas biofísicos y en los paradigmas sociales de los mercados, los cuales influyen de manera permanente y definitiva en los negocios y en los procesos de desarrollo. Cambios que se acentuaron por la crisis sanitaria y económica generada por la pandemia COVID-19, haciendo aún más evidente la necesidad de repensar el desarrollo de los sistemas empresariales, hacia modelos sostenibles.
        p.fw-bold Estas tendencias se reflejan en los Objetivos del Desarrollo Sostenible (ODS), como un camino en el cual el desarrollo económico no debe reñir con la prosperidad de las comunidades y los territorios y el uso racional de los recursos naturales. Este acuerdo involucra a todos los actores de la sociedad en el desarrollo de políticas públicas. En el siguiente recurso educativo se podrá revisar al respecto.
    
    TabsC.color-secundario.edit-pestanas.mb-5(data-aos="fade-left")
      .py-3.py-md-4(titulo="Los ODS")
        .row.col-xl-11.mx-auto.py-5.my-xl-5
          .col-md-6.col-xl-7.mb-4.mb-md-0.order-2.order-md-1
            h4 Los ODS 
            p Los ODS proponen 17 objetivos sobre desarrollo humano, protección de los recursos naturales y desarrollo económico sostenible. 
              br
              br
              | Corresponde a uno de los acuerdos más importantes a nivel mundial pactados en el marco de la Asamblea General de las Naciones Unidas adoptado por los 193 países miembros de esta asamblea.
          .col-md-6.col-xl-5.order-1.order-md-2.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-2.svg')
      
      .py-3.py-md-4(titulo="Principios de sostenibilidad")
        .row.col-xl-11.mx-auto.py-5.my-xl-5
          .col-md-7.col-xl-8.mb-4.mb-md-0.order-2.order-md-1
            h4 Principios de sostenibilidad
            p.mb-4.col-xl-10 Existen amplios conocimientos y literatura respecto a los principios de sostenibilidad, sin embargo, existe una organización que desde 1990 cuenta con una completa colección de principios de varias fuentes llamado el Instituto Internacional para el Desarrollo Sostenible (IISD), dentro de las temáticas que abordan se encuentran:
            .d-flex.flex-wrap.align-items-center
              .col-lg-6
                ul.lista-ul--color
                  li 
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Economía circular.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Adaptación al cambio climático.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Mitigación del cambio climático.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | COVID-19 y recuperación resiliente.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Energía.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Medio ambiente, conflicto y construcción de paz.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Alimentos y agricultura.
              .col-lg-6
                ul.lista-ul--color
                  li 
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Infraestructura.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Gobernanza y acuerdos multilaterales.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Igualdad de género.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Agua.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Tecnología e innovación.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Finanzas sustentables.
                  li
                    img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
                    | Objetivos de desarrollo sostenible, entre otros.
          .col-md-5.col-xl-4.order-1.order-md-2.mb-4.mb-md-0.d-flex.flex-wrap.align-content-center
            figure
              img(src='@/assets/curso/temas/tema2/img-3.svg')
            p.text-center Apoyamos los Objetivos de Desarrollo Sostenible

    .d-flex.flex-wrap.mb-5
      .col-xl-5.pe-xl-4.order-2.order-xl-1.d-flex.align-items-stretch(data-aos="fade-right")
        p.p-3.p-md-4.p-lg-5.mb-0.h-100(style="background-color: #D0D0D5; border-radius: 20px;") La clave es adaptar este conocimiento de acuerdo al contexto de la organización, por ello cualquier principio, puede ser efectivo para la organización desde que este se encuentre expresado a través de metas claras y específicas, objetivos cuantificables respecto a las metas y los planes de ejecución. Al realizar esta adaptación los principios se convierten en indicadores que permiten la recolección de datos y evaluaciones comparativas. 
      img.col-xl-7.m-auto.order-1.order-xl-2.mb-4.mb-xl-0(src="@/assets/curso/temas/tema2/img-4.jpg" data-aos="fade-left" style="max-width: 714px")

    p.mb-5(data-aos="fade-right") En el siguiente recurso educativo, se podrá apreciar aún mejor el listado de los principios más relevantes y aplicables para lograr la sostenibilidad.

    SlyderF.mb-5.carousel-f-edit.h-100(columnas="col-lg-6 col-xl-4" data-aos="fade-right")
      .d-flex.flex-wrap.h-100
        .w-100.mx-auto(style="margin-bottom: -45px; z-index: 1; max-width: 108px")
          img(src='@/assets/curso/temas/tema2/img-5.svg' alt='imagen slider T2 1')
        .tarjeta.color-acento-botones.pt-5.p-4(style="background-color: #C3E2FD; height: calc(100% - 80px)")
          h4.text-center.pt-4 1. Principio de precaución 
          p.text-center Es una guía para prevenir posibles daños al ambiente y la salud de las personas causados por las actividades del hombre.

      .d-flex.flex-wrap.h-100
        .w-100.mx-auto(style="margin-bottom: -45px; z-index: 1; max-width: 108px")
          img(src='@/assets/curso/temas/tema2/img-5.svg' alt='imagen slider T2 1')
        .tarjeta.color-acento-botones.pt-5.p-4(style="background-color: #C3E2FD; height: calc(100% - 80px)")
          h4.text-center.pt-4 2. Los principios de la Carta de la Tierra
          p.text-center Promueve el respeto y cuidado por la vida, la integridad ecológica, la justicia económica y social, y la democracia, la eliminación de la violencia y la paz.
      
      .d-flex.flex-wrap.h-100
        .w-100.mx-auto(style="margin-bottom: -45px; z-index: 1; max-width: 108px")
          img(src='@/assets/curso/temas/tema2/img-5.svg' alt='imagen slider T2 1')
        .tarjeta.color-acento-botones.pt-5.p-4(style="background-color: #C3E2FD; height: calc(100% - 80px)")
          h4.text-center.pt-4 3. Las condiciones del sistema del Paso Natural 
          p.text-center Define los fundamentos básicos para mantener los procesos ecológicos esenciales y entender la importancia de satisfacer las necesidades humanas a nivel global como elementos integrales y esenciales de la sostenibilidad.
      
      .d-flex.flex-wrap.h-100
        .w-100.mx-auto(style="margin-bottom: -45px; z-index: 1; max-width: 108px")
          img(src='@/assets/curso/temas/tema2/img-5.svg' alt='imagen slider T2 1')
        .tarjeta.color-acento-botones.pt-5.p-4(style="background-color: #C3E2FD; height: calc(100% - 80px)")
          h4.text-center.pt-4 4. Los principios de Daly
          p.text-center Establecen las capacidades regenerativas y asimilativas del capital natural y la parte proporcional de agotamiento de recursos no renovables.
      
      .d-flex.flex-wrap.h-100
        .w-100.mx-auto(style="margin-bottom: -45px; z-index: 1; max-width: 108px")
          img(src='@/assets/curso/temas/tema2/img-5.svg' alt='imagen slider T2 1')
        .tarjeta.color-acento-botones.pt-5.p-4(style="background-color: #C3E2FD; height: calc(100% - 80px)")
          h4.text-center.pt-4 5. Los principios de Bellagio
          p.text-center Sirven como guía para diversos grupos del sector privado y público puedan comenzar y mejorar el proceso y las actividades de evaluación de la sostenibilidad, el diseño y la selección de indicadores y la interpretación y comunicación de resultados.
      
      .d-flex.flex-wrap.h-100
        .w-100.mx-auto(style="margin-bottom: -45px; z-index: 1; max-width: 108px")
          img(src='@/assets/curso/temas/tema2/img-5.svg' alt='imagen slider T2 1')
        .tarjeta.color-acento-botones.pt-5.p-4(style="background-color: #C3E2FD; height: calc(100% - 80px)")
          h4.text-center.pt-4 6. Los principios de Ahwahnee
          p.text-center Sirven de guía para la planificación y el desarrollo de comunidades urbanas y suburbanas de manera que satisfagan efectivamente las necesidades de aquellas personas que viven y trabajan en ellas.

    .titulo-decorativo.position-relative(style="z-index: 1" data-aos="fade-right")
      h4 Objetivos de desarrollo sostenible.

    p.mb-5(data-aos="fade-right") Dentro de los principios y criterios de la sostenibilidad se encuentra la Agenda 2030, la cual representa el llamado universal a la acción para poner fin a la pobreza, proteger el planeta y garantizar que para el 2030 todas las personas disfruten de paz y prosperidad, este se encuentra fundamentado por los 17 objetivos y 169 metas de desarrollo sostenible (ODS) integrados ya que se reconoce que la acción en un área afectará los resultados en otras, al tener una visión ambiciosa del desarrollo sostenible e integra sus dimensiones económica social y ambiental.

    .d-flex.flex-wrap.col-xl-10.mx-auto.mb-5
      .mb-5.d-flex.flex-wrap.flex-md-nowrap.w-100.align-items-center.p-3(style="border-radius: 20px; background-color: #FFEAC5" data-aos="fade-right")
        img.mx-auto.mb-4.mb-md-0.me-md-4(src="@/assets/curso/temas/tema2/img-8.svg" style="max-width: 100px")
        p.mb-0 La Agenda 2030 es una agenda, que busca no dejar a nadie atrás en el ámbito de desarrollo, respetando a las comunidades y propendiendo por un ambiente sano. Este compromiso lo han tomado tanto los países desarrollados como los que están en desarrollo como un marco de acción para la toma de decisiones.
      p.mb-5 A continuación, se podrá visualizar la interrelación entre los ODS y los tres componentes básicos de la sostenibilidad, ver la figura 7.
      .d-block.mb-4
        h5.mb-0 Figura 7
        span #[em Interrelación entre los ODS y los tres componentes básicos de la sostenibilidad]
      img.mx-auto.mb-5(src="@/assets/curso/temas/tema2/img-6.jpg" style="max-width: 820px" data-aos="fade-right")
      p(data-aos="fade-right") Los diecisiete (17) objetivos de desarrollo sostenible cuentan con metas y objetivos que permiten la recolección de datos y generar evaluaciones comparativas. 

    h4.mb-4 Material Complementario

    .tarjeta.color-acento-contenido.p-3.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/img-7.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: black") PNUD
              p.col-xl-9(style="color: black")  Rápida revisión frente a los aspectos que se debe tener en cuenta para atender emergencias sanitarias como la del Covid-19, y el aprendizaje que ha dejado
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.undp.org/es/sustainable-development-goals" target="_blank")
                span.pe-4(style="color: black !important") Ver
                i.fas.fa-link(style="color: black !important")
    
    .tarjeta.color-secundario.p-3.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/img-7.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: black") Agenda 2030 y los ODS
              p.col-xl-9(style="color: black") En el siguiente vídeo de la Agenda 2030 y los ODS, se encontrará que se describen tanto los conceptos como parámetros de la agenda, junto con la evaluación de riesgos y objetivos
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=vax-YFuICqc&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA" target="_blank")
                span.pe-4(style="color: black !important") Ver
                i.fas.fa-link(style="color: black !important")


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

<style lang="sass">
.edit-pestanas
  .tabs-c__header
    margin-bottom: 0
  .tabs-c__content-item
    border-right: 1px solid #AFAFAF
    border-left: 1px solid #AFAFAF
</style>
