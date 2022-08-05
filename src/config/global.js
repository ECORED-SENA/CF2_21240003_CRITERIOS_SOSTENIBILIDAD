export default {
  global: {
    componenteFormativo: 'La sostenibilidad: pilar estratégico.',
    descripcionCurso:
      'Este componente proporciona la información necesaria para comprender las metodologías y las herramientas para la planificación y gestión estratégica de la sostenibilidad en las organizaciones con referencia en los criterios y principios de los objetivos de desarrollo sostenible y la Agenda 2030.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/rotate.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/circulo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2 banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/circulo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Metodologías para la gestión estratégica de la sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normas de Accountability (AA1000)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'ISO 26000:2010',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Global Reporting Initiative (GRI)',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Principios Pacto Global',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Sustainability Accounting Standards Board (SASB)',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios y criterios de sostenibilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de planificación estratégica',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Metodologías para la gestión estratégica de la sostenibilidad',
      referencia:
        'GRI Secretariat.  (2020). Negocios Competitivos: caso empresa ancla - Telefónica Movistar Colombia [video]. Youtube.',
      tipo: 'Vídeo',
      link:
        'https://www.youtube.com/watch?v=eWnkXuCHq5I&ab_channel=GRISecretariat',
    },
    {
      tema: 'Principios y criterios de sostenibilidad',
      referencia:
        'Austin, J. ., y  Reavis, C.  (2004). Starbucks and Conservation International. Harvard Business School Case 303-055.',
      tipo: 'Estudio de caso',
      descarga: '/downloads/Starbucks.pdf',
    },
    {
      tema: 'Principios y criterios de sostenibilidad',
      referencia:
        'Lobo, I., Reficco, E. y Rueda, A. (2012). Wok: ¿una cadena de restaurantes sostenible? . Centro de aprendizaje centrado en el estudiante, Universidad de los andes.',
      tipo: 'Estudio de caso',
      descarga: '/downloads/Caso-wok.pdf',
    },
    {
      tema: 'Objetivos de desarrollo sostenible',
      referencia:
        'Red Española Pacto Mundial (2019). Empresas y derechos humanos: acciones y casos de éxito en el marco de la Agenda 2030.',
      tipo: 'Estudio de caso',
      descarga: '/downloads/Empresas-y-derechos-humanos.pdf',
    },
    {
      tema: 'Objetivos de desarrollo sostenible',
      referencia:
        'Stichting Global Reporting Initiative (GRI). (2018). GRI 101: FUNDAMENTOS 2016. Documento respecto a los informes de sostenibilidad. Stichting Global Reporting Initiative (GRI).',
      tipo: 'Documento',
      descarga: '/downloads/spanish-gri-101-foundation-2016.pdf',
    },
    {
      tema: 'Principios y criterios de sostenibilidad',
      referencia:
        'UNESCO  (2017). Los Objetivos de Desarrollo Sostenible - qué son y cómo alcanzarlos [video]. Youtube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=MCKH5xk8X-g',
    },
    {
      tema: 'Objetivos de desarrollo sostenible',
      referencia:
        'PNUD (s.f.). ¿Que son los Objetivos de Desarrollo Sostenible? Programa de las Naciones Unidas para el Desarrollo.',
      tipo: 'Página oficial del PNUD',
      link: 'https://www.undp.org/es/sustainable-development-goals',
    },
    {
      tema: 'Objetivos de desarrollo sostenible',
      referencia:
        'SENA (2021). Agenda 2030. Informe sobre los ODS. [Video]. YouTube.',
      tipo: 'Vídeo',
      link:
        'https://www.youtube.com/watch?v=vax-YFuICqc&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Objetivos de desarrollo sostenible',
      referencia:
        'Tecnológico de Monterrey. (2021). Análisis PESTEL para Definir el Plan de Acción de tu Empresa - Tec de Monterrey  [Video]. YouTube.',
      tipo: 'Vídeo',
      link:
        'https://www.youtube.com/watch?v=R5VOC2A47ms&ab_channel=PosgradosyEducaci%C3%B3nContinua',
    },
    {
      tema: 'Objetivos de desarrollo sostenible',
      referencia:
        'SENA (2021). Análisis DOFA, explicación y detalle en español [Video]. YouTube.',
      tipo: 'Vídeo',
      link:
        'https://www.youtube.com/watch?v=84fuGpQeYg0&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: 'Asunto relevante',
      significado:
        'Es un tema que influirá en las decisiones, acciones y desempeño de una organización o de sus grupos de interés.',
    },
    {
      termino: 'Gestión de la estrategia',
      significado:
        'Es el modelo fundamental de despliegue de los recursos presentes y futuros, y las interacciones con el entorno que indican, cómo la organización alcanzará sus objetivos.',
    },
    {
      termino: 'Medidas de compensación',
      significado:
        'Son las acciones dirigidas a resarcir y retribuir a las comunidades, las regiones, localidades y al entorno natural por los impactos o efectos negativos generados por un proyecto, obra o actividad, que no puedan ser evitados, corregidos o mitigados.',
    },
    {
      termino: 'Medidas de corrección',
      significado:
        'Son las acciones dirigidas a recuperar, restaurar o reparar las condiciones del medio ambiente afectado por el proyecto, obra o actividad.',
    },
    {
      termino: 'Medidas de mitigación',
      significado:
        'Son las acciones dirigidas a minimizar los impactos y efectos negativos de un proyecto, obra o actividad sobre el medio ambiente.',
    },
    {
      termino: 'Medidas de prevención',
      significado:
        'Son las acciones encaminadas a evitar los impactos y efectos negativos que pueda generar un proyecto, obra o actividad sobre el medio ambiente.',
    },
    {
      termino: 'Objetivos de desarrollo sostenible (ODS)',
      significado:
        'Los ODS, también conocidos como Objetivos Globales, fueron adoptados por las Naciones Unidas en 2015 como un llamado universal a la acción para poner fin a la pobreza, proteger el planeta y garantizar que para el 2030 todas las personas disfruten de paz y prosperidad. Los ODS proponen 17 objetivos integrados, ya que se reconoce que la acción en un área afectará los resultados en otras y que el desarrollo debe equilibrar la sostenibilidad social, económica y ambiental.',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento de Estado de los Estados Unidos, Programa Centroamérica Resiliente (ResCA), The Nature Conservancy. (2019). Guía para integrar la sostenibilidad en las empresas. Schneider Heloísa.',
      link: '',
    },
    {
      referencia:
        'Ayres, R. (1989). Industrial Metabolism. National Academy Press.',
      link: '',
    },
    {
      referencia:
        'Guerrero, G., Reficco, E., & Austin, J. E. (2004). La nueva ruta: alianzas sociales estratégicas. Harvard Business Review, 82 (12), pp. 30-40.',
      link: '',
    },
    {
      referencia:
        'Marquis C., A. Klaber, B. Thomason, (2011). B Lab: Building a New Sector of the Economy. HBC 9-411-047, pp.  1 – 32.',
      link: '',
    },
    {
      referencia:
        'Nidumolu, R., C.K. Prahalad, and M.R. Rangaswami, (2009). Why Sustainability Is Now the Key Driver of Innovation. Harvard Business Review, Sep 2009, pp. 2 – 9.',
      link: '',
    },
    {
      referencia:
        'Pacto Mundial Red Española. (2019). Empresas y derechos humanos: acciones y casos de éxito en el marco de la Agenda 2030. Red Española de Pacto Mundial.',
      link: '',
    },
    {
      referencia:
        'Rodriguez Becerra, M. (2019). Nuestro planeta, nuestro Futuro. Penguin Random House Group Editorial S.A.S.',
      link: '',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Desarrollo PNUD. (2022). ¿Que son los Objetivos de Desarrollo Sostenible? PNUD.',
      link: 'https://www.undp.org/es/sustainable-development-goals#',
    },
    {
      referencia:
        'Vanegas, J. A. (2006). ¿Cómo incorporar los criterios y principios de sostenibilidad en el diseño, construcción y gestión de las infraestructuras? Ekonomiaz (63), 88-111.',
      link: '',
    },
    {
      referencia:
        'Autoridad Nacional de Licencias Ambientales ANLA. (2022). Glosario.  ANLA Autoridad Nacional de Licencias Ambientales.',
      link:
        'https://www.anla.gov.co/proyectos-anla/196-proyectos-transformacionales/seguimiento-de-licencias-ambientales',
    },
    {
      referencia:
        'Comisión Económica para América Latina y el Caribe CEPAL. (2018). La Agenda 2030 y los Objetivos de Desarrollo Sostenible Una oportunidad para América Latina y el Caribe.',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/40155/24/S1801141_es.pdf',
    },
    {
      referencia:
        'Globar Reporting Initiative GRI. (2022). Globar Reporting Initiative GRI.',
      link: 'https://www.globalreporting.org/',
    },
    {
      referencia: 'GlobeNewswire. (2022). GlobeNewswire.',
      link:
        'https://www.globenewswire.com/news-release/2021/03/24/2198225/0/es/SASB-publica-traducciones-al-espa%C3%B1ol-de-77-est%C3%A1ndares-del-sector.html',
    },
    {
      referencia:
        'Martínez Leucona, A., Flores Jiménez, I., Flores Jiménez, R., & Badillo Maldonado, M. (2020). Mecanismos de gestión para la inserción de la sostenibilidad en las empresas. Exploratoris Revista de la Realidad Global, 9(1), 8-15.',
      link:
        'https://static1.squarespace.com/static/55564587e4b0d1d3fb1eda6b/t/5ffdd8f02c6c4057e861d765/1610471664414/02+MartinezLecuona+PUE156+Exploratoris+V9N1+8-15.pdf',
    },
    {
      referencia:
        'Mirada Partners. (2022). ¿Quién es SASB? y ¿por qué le cae bien a los inversionistas? Mirada Partners.',
      link:
        'https://miranda-partners.com/es/quien-es-sasb-y-por-que-le-cae-bien-a-los-inversionistas/',
    },
    {
      referencia:
        'UNESCO  (2017). Los Objetivos de Desarrollo Sostenible - qué son y cómo alcanzarlos [video]. Youtube.',
      link:
        'https://www.youtube.com/watch?v=MCKH5xk8X-g&ab_channel=UNESCOenespa%C3%B1ol',
    },
    {
      referencia:
        'Organización de los Estados Americanos. (2004). Métodos del planeamiento estratégico.',
      link:
        'https://www.oas.org/sap/publications/2004/fiapp/estrategias_politicas/doc/pbl_estrategias_004_04_spa.pdf',
    },
    {
      referencia:
        'Pacto Global Red Colombia. (2022). ¿Qué es Pacto Global? Pacto Global Red Colombia.',
      link:
        'https://www.pactoglobal-colombia.org/pacto-global-colombia/que-es-pacto-global-colombia.html',
    },
    {
      referencia:
        'The International Institute for Sustainable Development IISD. (2022). The International Institute for Sustainable Development IISD.',
      link: 'https://www.iisd.org/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ingrid Natalia Lozano Muñoz',
        cargo: 'Experto Temático',
        centro: 'Regional Tolima – Centro Agropecuario La Granja.',
      },
      {
        nombre: 'Germán Alberto Trujillo Salas',
        cargo: 'Experto Temático',
        centro: 'Regional Tolima – Centro Agropecuario La Granja.',
      },
      {
        nombre: 'Jeimy Lorena Romero Perilla',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la industria, la empresa y los servicios',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la industria, la empresa y los servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
