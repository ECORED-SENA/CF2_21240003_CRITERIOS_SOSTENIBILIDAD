<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: black") 3
      h1 Herramientas de planificación estratégica

    p.mb-5 La planeación estratégica es una herramienta que se utiliza en las organizaciones para predecir el futuro o los escenarios a los cuales se puede enfrentar estas. Para realizar una planificación estratégica se pueden contemplar ocho (8) pasos los cuales son:

    .d-flex.flex-wrap.mb-5
      .col-xl-6.order-2.order-xl-2.p-3.p-md-4.px-xl-5(style="background-color: #DDF8FB")
        ul.lista-ul--color
          li 
            img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
            | Definir una misión.
          li 
            img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
            | Definir una visión.
          li 
            img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
            | Realizar un análisis de las condiciones externas.
          li 
            img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
            | Realizar un análisis de las condiciones internas de la organización.
          li 
            img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
            | Definir unos objetivos estratégicos.
          li 
            img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
            | Establecer estrategias.
          li 
            img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
            | Ejecución de las estrategias.
          li 
            img(src="@/assets/curso/temas/tema2/check.svg" style="max-width: 14px").me-3
            | Evaluación del cumplimiento de los objetivos propuestos.
      img.col-xl-6.m-auto.order-1.order-xl-2.mb-4.mb-xl-auto.ps-xl-4(src="@/assets/curso/temas/tema3/img-2.jpg" style="max-width: 610px")

    p.mb-5 La planeación estratégica es una herramienta que se utiliza en las organizaciones para predecir el futuro o los escenarios a los cuales se puede enfrentar estas. Para realizar una planificación estratégica se pueden contemplar ocho (8) pasos los cuales son:

    
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
