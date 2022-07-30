<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: black")
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Se da la bienvenida al componente formativo “La sostenibilidad: pilar estratégico”. Para comenzar el recorrido por el mismo, se debe visitar el recurso didáctico que se muestra a continuación:

    .d-flex.flex-wrap.col-lg-10.mx-auto.mb-5
      .cajon.color-secundario.p-4.col-lg-7.my-auto.order-2.order-lg-1
        p La base sobre la cual se fundamenta el desarrollo de la humanidad y su bienestar radica en un ambiente sano, libre de contaminación, de presiones sociales y rodeado de aquellos beneficios tangibles e intangibles que brinda la naturaleza por sí misma – de manera intrínseca – al ser humano y que en muchas ocasiones no es percibida y mucho menos valorada por este.
      img.order-1.order-lg-2.col-lg-5.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/img-introduccion.jpg" style="max-width: 295px")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/w4xHeMtf2r4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
