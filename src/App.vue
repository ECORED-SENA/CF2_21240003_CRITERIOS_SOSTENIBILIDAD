<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.accesibilidad
  z-index: 50
.banner-principal
  .banner-principal__img
    padding-bottom: 0 !important
    img
      margin-left: auto
      margin-top: auto
      max-width: 350px
  .banner-principal__descripcion
    margin-bottom: 3rem
  .banner-principal-decorativo-1
    top: 14%
    right: 62%
  .banner-principal-decorativo-2
    top: 44%
    right: 82%
  .banner-principal-decorativo-3
    top: 35%
    right: 58%
    height: 20px
    width: 20px
.cajon.color-secundario
  background-color: #D1F3F6 !important
.carousel-f-edit
  .horizontal-scroll
    align-items: stretch !important
.titulo-decorativo
  display: flex
  margin-bottom: 2rem
  h4
    padding: .3rem 1rem
    border-radius: 20px
    background: black
    color: white
</style>
