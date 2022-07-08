<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: black")
          i.fas.fa-info
      h1 Introducción
    p Se da la bienvenida al componente formativo “La sostenibilidad: pilar estratégico”. Para comenzar el recorrido por el mismo, se debe visitar el recurso didáctico que se muestra a continuación:
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
