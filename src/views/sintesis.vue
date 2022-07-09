<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-acento-botones.d-flex.justify-content-between.mb-5
      .d-block
        h5 Estrategias para la incorporación de criterios de sostenibilidad
        br
        span Síntesis: CF1 - 21240003 El futuro de la materialidad y estrategias que generan valor.
      img(src="@/assets/sena.svg" style="max-width: 50px")

    p.mb-5 Este componente busca orientar a los aprendices del curso complementario sobre “Estrategias para la incorporación de criterios de sostenibilidad”, respecto al proceso que debe tenerse en cuenta, y las metodologías de trabajo, que permitan optimizar el desarrollo de gestiones estratégicas de sostenibilidad.
      br
      br
      |Es necesario tener claro las actividades que corresponden a este componente, en relación con los criterios de sostenibilidad de acuerdo tanto con el contexto productivo como con los elementos técnicos que involucra, y la normativa internacional, nacional y local, que rige el proceso.
      br
      br
      |El contenido de este componente se relaciona de manera directa con los objetivos de desarrollo sostenible, los cuales trabajan propositivamente en la erradicación de la pobreza en todas sus formas en todo el mundo. Poner fin al hambre y conseguir la seguridad alimentaria y una mejor nutrición, y promover el bienestar para todos y todas en todas las edades. Una breve revisión de los temas vistos, se encuentran en el siguiente mapa conceptual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

    
</template>

<script>
export default {
  name: 'Sintesis',
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
