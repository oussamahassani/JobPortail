<template>
  <div class="mt-10">
    <div class="container">
      <div class="row">
        <h1 class="h1-large">
          Applied Oferts
        </h1>
      </div>
      <div class="row">
        <div v-if="thereAreOferts">
          <ul id="offerts-panel">
            <li v-for="item in currentOferts" :key="item.id" @click="openOffert(item)">
              <offert-card>
                <template #title> {{ listaOfertas[item].title }} </template>
                <template #description>
                  <img class="img-wizard" v-bind:src="getWizard()" alt="WizardImage">
                </template>

                <template #company> {{ listaOfertas[item].company }} </template>
                <template #location> {{ listaOfertas[item].location }} </template>
                <template #salary> {{ listaOfertas[item].salary }} </template>
              </offert-card>
            </li>
          </ul>
        </div>
        <div v-else>
          <img class="p-2 img-center" src='img/theme/404_noOferts.jpg' alt="NoOfertsApplied"/>
          <h3 class="text-center">Looks like you haven't applied for any ofert yet.<br>Let's get some started!</h3>
          <h5 class="text-center">Go to <router-link to="/home">Home</router-link></h5>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import OffertCard from "./components/OffertCard.vue";

export default {
  name: "AppliedOferts",
  components: {
    OffertCard,
  },
  data () {
    return {
      token: 0,
      username: '',
      listaOfertas: [
        {
          title: "Senior C++ Engineer",
          company: "Version 1",
          description: "Company Description Version 1 is celebrating 25 years in the IT industry this year and we continue to be trusted by global brands to deliver IT solutions that drive customer success. Version 1 is not just a Microsoft Gold Partner, an AWS Premier Consulting Partner and an Oracle Platform Partner; we are also an award-winning employer and our employees are at the heart of Version 1. We invest in a strong culture of wellness through programs that help our employees create their journey toward optimal wellbeing. This framework is based on the ?Strength in Balance? theme and this seen again in our Diversity, Inclusion and Belonging Team motto ?Bring Your Difference?. Job Description In this role you will be working in support of our expanding global customer base and ambitious growth plans. We are looking to strengthen our technical capability within the organisation. To support this projected growth we want to attract talented Senior C++ Engineers who will become key contributors to our engineering teams.",
          status: "ACTIVE",
          location: "Málaga",
          modality: "Híbrido",
          release_date: "15 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 0,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Software Tester",
          company: "Version 1",
          description: "Company Description: Version 1 is celebrating 25 years in the IT industry this year and we continue to be trusted by global brands to deliver IT solutions that drive customer success. Version 1 is not just a Microsoft Gold Partner, an AWS Premier Consulting Partner and an Oracle Platform Partner; we are also an award-winning employer and our employees are at the heart of Version 1. We invest in a strong culture of wellness through programs that help our employees create their journey toward optimal wellbeing. This framework is based on the ?Strength in Balance? theme and this seen again in our Diversity, Inclusion and Belonging Team motto ?Bring Your Difference?. Job Description: In this role you will be working in support of our expanding global customer base and ambitious growth plans, we are looking to strengthen our technical capability within the organisation. To support this projected growth we want to attract talented testers who will become key contributors to our teams.",
          status: "ACTIVE",
          location: "Málaga",
          modality: "Híbrido",
          release_date: "15 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 1,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Scrum Master",
          company: "Version 1",
          description: "Company Description Version 1 is celebrating 25 years in the IT industry this year and we continue to be trusted by global brands to deliver IT solutions that drive customer success. Version 1 is not just a Microsoft Gold Partner, an AWS Premier Consulting Partner and an Oracle Platform Partner; we are also an award-winning employer and our employees are at the heart of Version 1. We invest in a strong culture of wellness through programs that help our employees create their journey toward optimal wellbeing. This framework is based on the ?Strength in Balance? theme and this seen again in our Diversity, Inclusion and Belonging Team motto ?Bring Your Difference?. Job Description Due to our continued expansion, we are looking to hire an experienced Scrum Master who can help us further develop our strong footing in the business consulting domain. Ideally, you will come from a software development background and have at least 3-5 years' experience in agile development /SCRUM Master/Agile Team Management. You should be experienced in full development project life cycle implementations and have experience working with a relevant methodology. Possessing excellent facilitation, communication and presentation skills, you will have the ability to deal with all levels of a client organisation and an ability to manage scope, RAID, resources and budget delivering projects to achieve their intended business outcomes. A team player and self-motivated, you will demonstrate a strong customer-centric ethos and an ability to develop strong relationships with relevant stakeholders and ensure their needs are met. Agile Process Management: -Understanding of the Agile Manifesto. -SCRUM Master - ability to manage a SCRUM development team. -SCRUM Task dashboarding & Kanban workflow management. -Responsible for product backlog management and reporting regularly to the client. -Guiding the team on how to use Agile/Scrum practices. Project Management: -Project Budget development. -Manage and prioritize V1 Development Resource Work (Agile approach). -Project Status Reporting. -Customer Liaison (Support Issues, Schedule, Requirements, Testing). -Resource planning, budget management. Business Analysis: -Requirements review and development. -User Requirements Specification. -Functional and Technical Specifications. -Requirements Traceability Matrix. Team Management: -Project and Ticket management experience. -Team management experience. -Assisting with internal and external communication, improving transparency, and radiating information. -Providing all support to the team using a servant leadership style whenever possible, and leading by example.",
          status: "ACTIVE",
          location: "Málaga",
          modality: "Híbrido",
          release_date: "15 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 2,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Java Engineer",
          company: "Version 1",
          description: "Company Description: Version 1 is celebrating 25 years in the IT industry this year and we continue to be trusted by global brands to deliver IT solutions that drive customer success. Version 1 is not just a Microsoft Gold Partner, an AWS Premier Consulting Partner and an Oracle Platform Partner; we are also an award-winning employer and our employees are at the heart of Version 1. We invest in a strong culture of wellness through programs that help our employees create their journey toward optimal wellbeing. This framework is based on the ?Strength in Balance? theme and this seen again in our Diversity, Inclusion and Belonging Team motto ?Bring Your Difference?. Job Description In this role you will be working in support of our expanding global customer base and ambitious growth plans. We are looking to strengthen our technical capability within the organisation. To support this projected growth we want to attract talented Java Engineers who will become key contributors to our engineering teams.",
          status: "ACTIVE",
          location: "Málaga",
          modality: "Híbrido",
          release_date: "15 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 3,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Beca Ingeniería eléctrica",
          company: "Applus+",
          description: "Applus+ es una de las empresas lideres mundiales en el sector de la inspeccion, los ensayos y la certificacion. La compañia esta formada por un amplio equipo multidisciplinar de mas de 23.000 profesionales con experiencia y capacidades unicas reconocidos por su excelencia tecnica en diversos sectores. Division: E.and.I Descripcion: Participacion en las actividades de digitalizacion de instalaciones realizando las siguientes actividades: Revision de red BT capturada en campo. Incorporacion de elementos y datos tecnicos asociados a los sistemas GIS a traves de las plataformas de cliente. Todo ello en entorno SAP. Carga de datos tecnicos en sistema SOTER Incorporacion de elementos a red GIS a traves de aplicacion SIGBT. Creacion de elementos para incorporacion en sistema GIS a traves de aplicacion SGA que trabaja en entorno SAP. Familiarizacion de con redes de distribucion de compañias distribuidoras Requisitos: Formacion: estudiante o recien titulado/a en ingenieria electrica. Posibilidad de formalizar un convenio en practicas. Tipo de proceso: Becarios Remunerado (duracion determinada) (en formacion) ¡Estamos deseando conocerte! Applus + es una empresa que ofrece igualdad de oportunidades. En Applus +, nos comprometemos a tratar todas las candidaturas por igual en funcion de sus capacidades, logros y experiencia independientemente de su raza, nacionalidad, sexo, edad, discapacidad, orientacion sexual, identidad de genero o cualquier otra clasificacion protegida por la ley.",
          status: "ACTIVE",
          location: "Siero",
          modality: "A distancia",
          release_date: "15 marzo 2022",
          agreement: "Contrato formativo",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 4,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Recién Titulado/a en Ingeniería Eléctrica",
          company: "Applus+",
          description: "Applus+ es una de las empresas lideres mundiales en el sector de la inspeccion, los ensayos y la certificacion. La compañia esta formada por un amplio equipo multidisciplinar de mas de 23.000 profesionales con experiencia y capacidades unicas reconocidos por su excelencia tecnica en diversos sectores. Division: E.and.I Descripcion: -Elaboracion de proyectos y estudios de lineas electricas y centros de transformacion para empresas de distribucion. -Calculo, diseño y valoracion de lineas electricas. -Proyectos administrativos y constructivos. -Redaccion de memorias de proyectos electricos. -Supervision y direccion de trabajos en obra electrica. Requisitos: -Formacion: Ingenieria electrica. -No es necesaria experiencia, formacion a cargo de la empresa. Tipo de proceso: Temporal (Periodo Determinado) (duracion determinada) ¡Estamos deseando conocerte! ¿Que ofrecemos? -Sports Club. Disponemos de un club deportivo donde encontraras a otros compañeros y compañeras apasionados del deporte compartiendo aficiones. -Retribucion flexible. Podras escoger a que destinar parte de tu salario para obtener ventajas fiscales. -Y otros beneficios que te invitamos a descubrir desde dentro. Applus + es una empresa que ofrece igualdad de oportunidades. En Applus +, nos comprometemos a tratar todas las candidaturas por igual en funcion de sus capacidades, logros y experiencia independientemente de su raza, nacionalidad, sexo, edad, discapacidad, orientacion sexual, identidad de genero o cualquier otra clasificacion protegida por la ley.",
          status: "ACTIVE",
          location: "Siero",
          modality: "A distancia",
          release_date: "15 marzo 2022",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 5,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Senior Talent Acquisition Recruiter",
          company: "Version 1",
          description: "Company Description: Version 1 is celebrating 25 years in the IT industry this year and we continue to be trusted by global brands to deliver IT solutions that drive customer success. Version 1 is not just a Microsoft Gold Partner, an AWS Premier Consulting Partner and an Oracle Platform Partner; we are also an award-winning employer and our employees are at the heart of Version 1. We invest in a strong culture of wellness through programs that help our employees create their journey toward optimal wellbeing. This framework is based on the ?Strength in Balance ?theme and this seen again in our Diversity, Inclusion and Belonging Team motto ?Bring Your Difference?. Job Description: In this role as a Senior Talent Acquisition Recruiter, you will be working in support of our expanding global customer base and ambitious growth plans. You will have the opportunity to make a material difference to the company by identifying and attracting the right candidates.",
          status: "ACTIVE",
          location: "Málaga",
          modality: "Híbrido",
          release_date: "14 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 6,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Front End React Developer",
          company: "Version 1",
          description: "Company Description: Version 1 is celebrating 25 years in the IT industry this year and we continue to be trusted by global brands to deliver IT solutions that drive customer success. Version 1 is not just a Microsoft Gold Partner, an AWS Premier Consulting Partner and an Oracle Platform Partner; we are also an award-winning employer and our employees are at the heart of Version 1. We invest in a strong culture of wellness through programs that help our employees create their journey toward optimal wellbeing. This framework is based on the ?Strength in Balance? theme and this seen again in our Diversity, Inclusion and Belonging Team motto ?Bring Your Difference?. Job Description: We are looking for a talented React Front End / UI Developer to join our Development team who is highly motivated in combining the art of design with the art of programming. In joining our team of consultants, you will play a key part in the continual research, design, and development of our client's core products. We are looking for someone who is motivated by emerging technologies and has a passion to drive technology transformation. The successful candidate should be hands-on, able to contribute individually, and should have experience within a fast-paced dynamic environment. Key Responsibilities: -Experience working closely with key stakeholders across the engineering team, including Architects, Product Owners, and UX designers understanding and demonstrating how written requirements translate into a technical solution -Develop interfaces for web and mobile applications Develop high quality, efficient, reusable code and libraries for future use -Follow the agile development methodologies and practices -Exchange information and ideas with the team, evolve and model the new user-facing features -Constantly improve the products, through feedback and input on the product pipeline and roadmap",
          status: "ACTIVE",
          location: "Málaga",
          modality: "Híbrido",
          release_date: "14 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 7,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Senior Full Stack Developer",
          company: "Version 1",
          description: "Company Description Version 1 is celebrating 25 years in the IT industry this year and we continue to be trusted by global brands to deliver IT solutions that drive customer success. Version 1 is not just a Microsoft Gold Partner, an AWS Premier Consulting Partner and an Oracle Platform Partner; we are also an award-winning employer and our employees are at the heart of Version 1. We invest in a strong culture of wellness through programs that help our employees create their journey toward optimal wellbeing. This framework is based on the ?Strength in Balance? theme and this seen again in our Diversity, Inclusion and Belonging Team motto ?Bring Your Difference?. Job Description The ideal candidate is someone who has a track record of high-quality delivery, combined with a keen appetite for all aspects of software development. You will have the opportunities to recommend and champion the use of new technologies whether for direct use in products or in supporting the development lifecycle. You should be hands-on, able to contribute individually, and should have experience within a fast-paced dynamic environment. Role & Responsibilities: -Able to write in Code -Strong Commercial and Self Awareness -Good Customer Interaction Experience -Opportunity to work with some of the newest technologies. -Working within a highly skilled Team",
          status: "ACTIVE",
          location: "Málaga",
          modality: "Híbrido",
          release_date: "14 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 8,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Técnico de Obra",
          company: "MONTAJES DELSAZ",
          description: "IMPORTANTE EMPRESA INSTALADORA DE ÁMBITO FARMACÉUTICO, BUSCA TÉCNICOS DE OBRA PARA DAR SOPORTE AL DEPARTAMENTO TÉCNICO. LAS PERSONAS SELECCIONADAS, DEBERÁN TENER UNA ALTA ORIENTACIÓN AL CLIENTE, A LOS RESULTADOS, CAPACIDAD DE LLEVAR A CABO VARIOS PROYECTOS A LA VEZ Y UNA BÚSQUEDA CONSTANTE DE LA EXCELENCIA EN SU TRABAJO. OFRECEMOS UN DESARROLLO PERSONAL EN UNA EMPRESA JOVEN, ESTABLE, CONSOLIDADA EN SU SECTOR Y EN CRECIMIENTO CONTINUO. FUNCIONES: - SOLICITUD DE OFERTAS INDUSTRIALES - CIERRE DE PRESUPUESTOS CON CLIENTES Y PROVEEDORES - PREPARACIÓN DE NOTAS DE MATERIALES PARA LA EJECUCIÓN - ELABORACIÓN DE PLANOS EJECUTIVOS - REDACCIÓN DE AS-BUILT FINAL DE OBRA CON PLANOS Y FICHAS TÉCNICAS - VISITAS A CLIENTES Y CONTROL DE EJECUCIÓN DE OBRA EN CUANTO A CALIDAD, PLAZOS Y COSTES.",
          status: "ACTIVE",
          location: "Alcobendas",
          modality: "Presencial",
          release_date: "13 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "18.000 € - 24.000 € Bruto/año",
          id: 9,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Técnico titulado (ingeniero/arquitecto técnico)",
          company: "Empresa sector instalaciones",
          description: "Buscamos persona con titulación universitaria relacionado con ingenieria/ obra civil, con conocimientos en instalciones eléctricas, clima, sistemas contra incendios, que tenga capacidad técnica y analitica en su especialidad, responsable, proactivo, autónomo y buen comunicador",
          status: "ACTIVE",
          location: "Cornellà de Llobregat",
          modality: "Presencial",
          release_date: "11 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "24.000 € - 33.000 € Bruto/año",
          id: 10,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Técnico/a depuración aguas industriales-Ingeniero/a de proyectos - Barcelona",
          company: "Ecoindustria",
          description: "Somos un grupo de empresas que prestamos servicios medioambientales al sector industrial. En la actualidad, nuestra actividad abarca la península ibérica, prestando servicio directo a más de 150 instalaciones fabriles y operando y supervisando más de 20 depuradoras industriales. Asimismo, mediante patronales y agrupaciones similares damos servicio indirecto a más de 300 factorías. Tenemos presencia notable en los sectores químico, papel y alimentación. La función principal del técnico/a será operar depuradoras industriales en la instalaciones de los clientes y llevar a cabo proyectos ambientales asociados a la industria. Más concretamente: - Se encargará de la operación y/o puesta en marcha de depuradoras en las instalaciones de los clientes. En estos proyectos, llevará a cabo las tareas diarias de explotación, así como la toma de muestras y su posterior análisis. - Realizará proyectos ambientales (tales como solicitar una autorización ambiental integrada, o un análisis de riesgos ambientales), dará soporte a clientes mediante la resolución de consultas y visitas a sus plantas industriales, conocerá y se mantendrá al día con las novedades de la normativa ambiental, así como mantendrá comunicaciones con la Administración y proveedores. - Tareas comerciales, que incluyen el análisis técnico del problema y la preparación de oferta.",
          status: "ACTIVE",
          location: "Barcelona",
          modality: "Presencial",
          release_date: "11 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 11,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "INGENIERO/A JUNIOR",
          company: "LABORATORIOS VALQUER.S.L",
          description: "Buscamos un Ingeniero/a Junior para incorporar en nuestra plantilla. Tareas iniciales de control y gestión de proyecto de obra de ampliación. Futuro desarrollo de tareas en oficina técnica. Necesario conocimientos básicos de Autocad. Se valorarán positivamente conocimientos de electricidad, automatismos y mecánica. Cualidades requeridas: organización, capacidad de comunicación, trabajo en equipo, actitud proactiva.",
          status: "ACTIVE",
          location: "Villaminaya",
          modality: "Híbrido",
          release_date: "11 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "18.000 € - 24.000 € Bruto/año",
          id: 12,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Ingeniero/a Ensayos Resistencia al Fuego",
          company: "Applus+",
          description: "Applus+ es una de las empresas lideres mundiales en el sector de la inspeccion, los ensayos y la certificacion. La compañia esta formada por un amplio equipo multidisciplinar de mas de 23.000 profesionales con experiencia y capacidades unicas reconocidos por su excelencia tecnica en diversos sectores. Division: Laboratories Descripcion: Para nuestra division de Laboratories seleccionamos un/a TÉCNICO/A DE ENSAYOS para incorporarse en nuestro laboratorio de Resistencia al Fuego en Guadalajara. Las funciones de la persona seleccionada seran: - Estudio, elaboracion, realizacion y evaluacion de ensayos de Fuego. - Evaluaciones tecnicas, redaccion de informes y supervision de la instalacion de las muestras de Fuego. - Conocimiento tecnico del normas y reglamentos del Fuego. - Gestion del equipo a su cargo. - Management de proyectos de ensayos Fuego. - Elaboracion de procedimientos de trabajo, registros de ensayo, mantenimiento de bases de datos de equipos y mantenimiento de la calidad de los equipos. - Preparacion de los equipos para envio a calibracion, revision del estado y etiquetado de los equipos. Requisitos: - Titulacion Universitaria en Ingenieria. - Se valorara experiencia en el sector. - Nivel de Ingles alto. - Persona con iniciativa, autonomia, responsabilidad, habilidades comunicativas, resolucion de problemas, trabajo en equipo. - Preferiblemente residente en la zona de Guadalajara, Alcala o alrededores. Tipo de proceso: Temporal (Periodo Determinado) (duracion determinada) ¡Estamos deseando conocerte! ¿Que ofrecemos? -Sports Club. Disponemos de un club deportivo donde encontraras a otros compañeros y compañeras apasionados del deporte compartiendo aficiones. -Retribucion flexible. Podras escoger a que destinar parte de tu salario para obtener ventajas fiscales. -Y otros beneficios que te invitamos a descubrir desde dentro. Applus + es una empresa que ofrece igualdad de oportunidades. En Applus +, nos comprometemos a tratar todas las candidaturas por igual en funcion de sus capacidades, logros y experiencia independientemente de su raza, nacionalidad, sexo, edad, discapacidad, orientacion sexual, identidad de genero o cualquier otra clasificacion protegida por la ley.",
          status: "ACTIVE",
          location: "Guadalajara",
          modality: "Presencial",
          release_date: "11 marzo 2022",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 13,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "ENGINYERIA ELECTRONICA i/o MECANICA varies àrees.",
          company: "DENSO Barcelona S.A.U.",
          description: "Som empresa especialitzada en la producció de productes electrònics per al mercat de l'automoció. Cerquem 3 enginyers/enginyeres per a desenvolupar la seva carrera professional en les següents àrees : - Enginyeria de Producció (Àrea d'ensamblatge final). - Enginyeria de Producció (Àrea de maquinària i utillatges). - Manteniment i Instal·lacions.",
          status: "ACTIVE",
          location: "Sant Fruitós de Bages",
          modality: "Presencial",
          release_date: "11 marzo 2022",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "27.000 € - 36.000 € Bruto/año",
          id: 14,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "Material Manager",
          company: "Nordex Energy Spain",
          description: "NORDEX ENERGY SPAIN busca personal para cubrir la posición de Material Manager en sus oficinas de Barásoain. Misión: Asegurar la disponibilidad oportuna de componentes dentro del alcance de PM EPC. Funciones: -Planificación de entregas -Realización de pedidos y seguimiento de entregas -Coordinación con proveedores, departamento de compras, ejecución logística, calidad y ejecución de proyectos. -Seguimiento de no conformidades y piezas faltantes. -Coordinación con Site para entregas locales. -Reporting y KPIs.",
          status: "ACTIVE",
          location: "Barásoain",
          modality: "Online",
          release_date: "11 marzo 2022",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 15,
          education: "Grado",
          category: "Ingenieros y técnicos"
        },
        {
          title: "ingeniero/a Construcción - Aparejador/a",
          company: "MGroup",
          description: "BUSCAMOS UN/A: APAREJADOR - ARQUITECTO TÉCNICO - INGENIERO DE EDIFICACIÓN Nuestro cliente, empresa catalana líder en la prestación de servicios integrales de ingeniería, control de calidad y consultoría para el sector construcción, edificación e infraestructuras, precisa incorporar un/a INGENIERO DE EDIFICACIÓN - APAREJADOR - ARQUITECTO TÉCNICO (PARA LABORATORIO CONTROL DE CALIDAD ÁREA EDIFICACIÓN) Reportando al Manager de Laboratorio, la persona a incorporar realizará / supervisará la extracción de muestras, ensayos, análisis y control de calidad de materiales para clientes del sector edificación. El tipo de ensayos que realizará son, entre otros: - ensayos sobre productos cerámicos - ensayos sobre productos de hormigón - ensayos sobre productos metálicos / estructuras Ventajas Formación inicial y continuada a cargo de la empresa Retribución económica en función de experiencia y valía aportadas Flexibilidad horaria Posibilidad de teletrabajo Teléfono móvil Cheque restaurante Vehículo / kilometraje Seguro médico Poca o nula necesidad de desplazamientos laborales fuera de Catalunya",
          status: "ACTIVE",
          location: "Girona",
          modality: "Híbrido",
          release_date: "Hace 1 día",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Más de 20.000 €",
          id: 16,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Arquitecto/a",
          company: "Amenabar",
          description: "Funciones La persona seleccionada se encargará de realizar las siguientes tareas en el área técnico-comercial: -Atención personalizada al cliente. -Comercialización de las nuevas promociones de Pamplona. -Personalización de viviendas de obra nueva. -Asesoramiento profesional y personalizado en la elección de materiales. -Asesoramiento profesional y personalizado en la elección de mobiliario. -Estudios de mercado. -Escrituraciones. -Actos promocionales (entrega vivienda, primera piedra, etc). -Reporting a dirección. -Montaje de showroms. Se ofrece - Formar parte de una de las promotoras líderes del mercado.",
          status: "ACTIVE",
          location: "Pamplona/Iruña",
          modality: "Presencial",
          release_date: "Hace 5 días",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 17,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "COMERCIAL PARA ARKLAM (TABLA)",
          company: "COLORKER, S.A.",
          description: "COLORKER GROUP, grupo empresarial cerámico en proceso de crecimiento, deseamos reforzar nuestro actual equipo comercial de la marca ITT con la incorporación de un ÁREA MANAGER ARKLAM. Sus principales funciones serán las de: 1. Mantener y desarrollar la red de clientes y/o mercados de ARKLAM. Tanto en canal COCINA, como en los diversos canales de distribución de LAMINADO. 2. Buscamos una persona especializada, con cartera de clientes. 3. Velar por el cumplimiento de los presupuestos de ventas asignados. 4. Buscar la consecución de los objetivos de ventas asignados, tanto en términos de cifra de negocio como de rentabilidad. Se requerirá dominio del idioma inglés y se valorará cualquier otro segundo idioma, También se requerirá un mínimo de 2 años de experiencia en el sector y en funciones de ventas. Te ofrecemos, contrato indefinido, estabilidad y la incorporación a una empresa competitiva, dinámica e innovadora. Si estás interesado en trabajar con nosotros, inscríbete a esta oferta.",
          status: "ACTIVE",
          location: "Sant Joan de Moró",
          modality: "Presencial",
          release_date: "Hace 3 horas",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "40.000 € - 50.000 € Bruto/año",
          id: 18,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Diseñador/a de cocinas",
          company: "Terraza Balear",
          description: "En Terraza Balear nos dedicamos al diseño de interiores abordando desde la arquitectura interior hasta el mobiliario, cocinas, baños y decoración, otorgando a nuestros proyectos nuestro inconfundible sello contemporáneo mediterráneo. Contamos con una sala de exposición de más de 2.000m2 en Santa Ponsa en la que se presentan grandes firmas del diseño italiano como Minotti, B&B Italia, Flexform, Poliform, Paola Lenti, y tantas otras. Gracias a la creatividad y pasión de nuestro equipo, capaz de concebir proyectos de gran calidad y elegancia que conectan con el estilo de vida mediterráneo, somos la empresa de referencia en el sector. Buscamos profesionales que se sientan identificados con nuestros valores y que quieran formar parte de un proyecto que nace del corazón de su fundadora, Mariana Muñoz. Debido al crecimiento del departamento, para nuestra sede en Santa Ponsa (Mallorca) buscamos interiorista con amplia experiencia en el diseño de cocinas de lujo que quieran formar parte de una empresa en pleno crecimiento. FUNCIONES: - Realización y presentación de proyectos de interiorismo de cocinas de lujo. - Elaboración de presupuestos. - Propuesta de diseño para cocinas. - Creación de planos técnicos y presentación de cocinas de lujo. - Realización de pedidos y planos para los fabricantes acorde a las necesidades del cliente. - Visita a obra para realizar mediciones. BENEFICIOS/OFRECEMOS: - Puesto de trabajo estable. - Incorporación a un equipo joven, competente y dinámico. - Formaciones internas periódicas, a nivel nacional e internacional. - Experiencias de teambuildings anuales. - Asistencia a celebración de eventos y fiestas corporativas.",
          status: "ACTIVE",
          location: "Calvià",
          modality: "Presencial",
          release_date: "Hace 3 horas",
          agreement: "Contrato otros contratos",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 19,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Jefe de Obras",
          company: "Kloos Studio SL",
          description: "Dependiente de Director de Departamento de Construcción en Madrid. Un compañero independiente, y resolutivo, preparado para dirigir y coordinar obras de edificación residencial, reformas, rehabilitación y retail. Dando respuesta a todas las tareas del departamento en momentos determinados. Ser arquitecto, arquitecto técnico o ingeniero industrial con conocimientos de software específicos del sector para la realización de mediciones y presupuestos, ERP propio de la empresa, procesadores de texto y hojas de calculo. Tener carnet de conducir (no necesario vehículo propio), experiencia mínima de 3 años en empresa constructora o estudio de arquitectura como jefe de obra o Dirección Facultativa. Con conocimientos avanzados en precios de materiales y oficios, así como en los rendimientos de subcontratas y descompuestos de partidas para su valoración. Se valorará positivamente la aportación de contactos de empresas subcontratistas propias de su confianza con experiencia en retail y residencial. Posibilidad de desplazarse por todo el territorio nacional y puntualmente internacional y valoraremos muy positivamente conocimientos de inglés y/o francés y/o Portugués. Para todo ello es necesario ser una persona proactiva, resolutiva, flexible, organizada y con aptitudes sociales y de negociación, con ganas de trabajar y promocionar dentro de la empresa.",
          status: "ACTIVE",
          location: "Madrid",
          modality: "Presencial",
          release_date: "Hace 4 horas",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "24.000 € - 36.000 € Bruto/año",
          id: 20,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "OFERTA DE ARQUITECTO",
          company: "PERALTA AYESA SLP.",
          description: "Buscamos a un arquitecto para desarrollo de proyectos y elaboración de concursos. Se valorará especialmente el manejo de programas de renderizado para la elaboración de infografías y el conocimiento de herramientas BIM tipo REVIT. Incorporación inmediata, sueldo a convenir según experiencia.",
          status: "ACTIVE",
          location: "Pamplona/Iruña",
          modality: "Presencial",
          release_date: "Hace 5 horas",
          agreement: "Contrato autónomo",
          work_time: "Jornada completa",
          salary: "18.000 € - 24.000 € Bruto/año",
          id: 21,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "ARQUITECTO/A O INGENIERO/A DE CAMINOS URBANISTA",
          company: "HIGH INNOVATION REAL ESTATE",
          description: "Seleccionamos un puesto de Arquitecto/a o Ingeniero/a Urbanista para nuestras oficinas centrales en Guadalajara. Las funciones que desempeñará serán las siguientes: - Redacción de documentos urbanísticos en coordinación con el equipo de ingeniería interno y los colaboradores externos. - Supervisión y control de documentos urbanísticos tanto de planeamiento urbanístico como de los proyectos técnicos de ejecución de los mismos. - Estrategia para el diseño y desarrollo de nuevos desarrollos de suelo. - Programación y seguimiento del cronograma de desarrollo del planeamiento y de los proyectos. - Participación en la totalidad del proceso de gestión de las promociones. - Supervisión y control de obras de urbanización a nivel técnico como representante del promotor. Control de costes, supervisión de contratos de obra, convenios, autorizaciones, etc. REQUISITOS - Titulación en Arquitectura Superior o Ingeniería de Caminos Canales y Puertos con formación específica en Urbanismo. - Experiencia de al menos tres años en l puesto. - Conocimiento de la legislación de suelo Estatal y de las comunidades Autónomas de Madrid y Castilla la Mancha. - Manejo del paquete Office, Autocad y Revit. - Se valorará conocimiento en legislación sectorial de Medio Ambiente y Evaluación Ambiental, accesibilidad, así como experiencia en estudios de movilidad, tráfico, ruidos, etc.",
          status: "ACTIVE",
          location: "Guadalajara",
          modality: "Presencial",
          release_date: "Hace 6 días",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 22,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "TÉCNICO/A DE PROVEEDORES",
          company: "CASER - Corporativas",
          description: "Caser seguros para su área de prestaciones generales busca la incorporación de una persona como Técnico/a de Proveedores. El objetivo principal del puesto es mejorar la eficiencia, los costes y la calidad del servicio de reparación mediante el control y seguimiento de los indicadores de gestión de los proveedores (empresas multigremio, fontaneros, albañiles, pintores, cerrajeros, cristaleros, etc.). Para ello, se encargará de: -Fidelizar al proveedor con la compañía y garantizar el buen servicio al cliente final. -Impulsar y desarrollar las acciones necesarias para el correcto dimensionamiento y mantenimiento de la red de colaboradores. -Realizar propuestas de mejora e innovación desde su visión, experiencia y conocimiento, con el fin de optimizar los servicios y recursos objeto de su competencia. -Resolver discrepancias y reclamaciones. -Manejar y negociar tarifas de reparación y control de los conceptos de facturación. -Analizar y evaluar de los objetivos anuales de su zona de actuación, para activar medidas correctoras de mejora. -Seleccionar y formar al proveedor. -Compartir buenas prácticas con el resto de técnicos/as de gestión de proveedores.",
          status: "ACTIVE",
          location: "Logroño",
          modality: "Presencial",
          release_date: "Hace 9 horas",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 23,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Agente Inmobiliario/a Venta / Alquiler",
          company: "aProperties",
          description: "¿Quiénes somos? Somos Grupo aFinance y nacimos para ofrecer un asesoramiento personalizado y de calidad, porque para nuestro equipo las personas son lo primero. Llevamos más de 15 años revolucionando el sector inmobiliario y financiero. Actualmente somos un equipo constituido de más de 400 profesionales dinámicos, con muchas ganas de aprender, mejorar y liderar el sector. Nuestras oficinas se encuentran ubicadas en Barcelona, Madrid, Valencia y Palma. Nuestra experiencia y adaptación al cambio en plena revolución tecnológica, nos permite hacer las cosas de una manera distinta, transformando el sector. Por ello, en aProperties, una de nuestras áreas de negocio, seguimos creciendo y estamos buscando un/a nuevo/a compañero/a para convertirse en Agente Inmobiliario/a ¿Qué te ofrecemos? Apoyo económico mensual Contarás con recompensas a tu trabajo: elevadas comisiones, bonos por captación y facturación Además del buen ambiente y la cultura de compañerismo cuentas con amplios beneficios sociales: gimnasio, clases de inglés, móvil de empresa y desayunos corporativos. Planes de formación anual Bono de desempeño por captaciones mensuales ¿Cuál será tu misión? Realización de visitas Búsqueda de propiedades en venta en tu zona agenciada en exclusiva Asistencia a firmas Captación de propiedades Valoración de propiedades Requisitos para lograr el éxito como Agente Inmobiliario/a Valoramos la experiencia en el sector, sin embargo no deja de enriquecernos la colaboración con profesionales de otros sectores a los que aportamos la formación constante y un plan de desarrollo económico y viable en el tiempo! Que seas capaz de trabajar de forma autónoma y en equipo. Que tengas dotes comerciales y capacidad de negociación. Que domines el Paquete Office. ¡¡¡Forma parte de nuestro gran equipo humano!!! aProperties #cadadiamascerca https://www.aproperties.es/",
          status: "ACTIVE",
          location: "Barcelona",
          modality: "Híbrido",
          release_date: "Hace 10 horas",
          agreement: "Contrato autónomo",
          work_time: "Jornada indiferente",
          salary: "18.000 € - 120.000 € Bruto/año",
          id: 24,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "TECNICA/O POST VENTA- SEVILLA",
          company: "VIALTERRA INFRAESTRUCTURAS S.A",
          description: "Arquitectura/Arquitectura técnica. - Experiencia de 5 años en puestos similares. - Experiencia en gestión de reformas. - Experiencia con trato cliente. - Acompañamiento con el cliente durante todo el proceso de ejecución de la obra. - Asesoramiento, presupuestos y control de reformas en viviendas. - Seguimiento de post-venta.",
          status: "ACTIVE",
          location: "Sevilla",
          modality: "Presencial",
          release_date: "Hace 10 horas",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 25,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Jefe de obra + Jefe producción (Sector hotelero) Alicante",
          company: "AREA SOLUCIONES INTEGRALES, S.L.",
          description: "ÁREA SOLUCIONES INTEGRALES S.L. SELECCIONA: Jefe de Obra y jefe de producción con experiencia en sector hotelero. FUNCIONES: - Planificación y gestión de obras, control económico, técnico, así como el control de la producción y coste mensual. - Dirección de los equipos que intervienen en estrecha colaboración con el encargado de obra. - Cumplimiento del presupuesto y de los plazos de ejecución de la obra. - Gestión de las relaciones con el cliente y la D.F. - Previsiones de coste y material, revisables mensualmente. - Cumplimiento de la normativa de PRL. - Manejo de ERP de gestión de Obra.",
          status: "ACTIVE",
          location: "Alicante/Alacant",
          modality: "Presencial",
          release_date: "Hace 11 horas",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Más de 20.000 €",
          id: 26,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Jefe de obra (Obras de Edificación, Terciaria, Industrial y Retail) Sevilla",
          company: "AREA SOLUCIONES INTEGRALES, S.L.",
          description: "ÁREA SOLUCIONES INTEGRALES S.L. SELECCIONA: Jefe de Obra con experiencia en Obras de Edificación, Terciaria, Industrial y movilidad geográfica. FUNCIONES: - Planificación y gestión de obras, control económico, técnico, así como el control de la producción y coste mensual. - Dirección de los equipos que intervienen en estrecha colaboración con el encargado de obra. - Cumplimiento del presupuesto y de los plazos de ejecución de la obra. - Gestión de las relaciones con el cliente y la D.F. - Previsiones de coste y material, revisables mensualmente. - Cumplimiento de la normativa de PRL. - Manejo de ERP de gestión de Obra.",
          status: "ACTIVE",
          location: "Sevilla",
          modality: "Presencial",
          release_date: "Hace 11 horas",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Más de 20.000 €",
          id: 27,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Arquitecto/a",
          company: "cafayate s.l.",
          description: "G4:group es un estudio multidisciplinar con sedes en Barcelona, Madrid, Turín, Hong Kong y Dubái que trabaja los campos de la arquitectura, la ingeniería y el diseño. Contamos con más de 20 años de experiencia desarrollando proyectos a nivel internacional, y hemos madurado una profunda comprensión de nuestros clientes para conseguir el enfoque necesario que nos permite completar los diferentes estadios de una idea hasta convertirla en una realidad tangible. La identidad del estudio está involucrada en cada paso del proyecto. Desde el análisis de las necesidades de cada cliente y de la identidad de su marca hasta la finalización de las fases de concepto y ejecución en arquitectura e ingeniería, incluyendo, asimismo, la dirección de obra, el project management y el control de calidad. Nuestro recorrido transita diferentes niveles, ya sea el diseño conceptual y la arquitectura o el diseño de interiores, muebles y luminarias. Funciones - Llevar a cabo y dar soporte en proyectos en REVIT -Asistencia a los/las Responsables de Proyectos, así como al Jefe de equipo en la ejecución de las tareas que le sean requeridas. -Análisis y control del proyecto valorando la carga de trabajo. -Delineación completa de los proyectos y revisiones críticas antes de dar por buenos los planos. -Proactividad para asumir nuevos conocimientos completos del proceso de los proyectos para poder atender a los clientes en ausencia del Responsable del proyecto.",
          status: "ACTIVE",
          location: "Barcelona",
          modality: "Presencial",
          release_date: "Hace 14 horas",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 28,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "INGENIERO/A JUNIOR NUDO NORTE CALLE 30 - 22/0139",
          company: "FCC Construcción",
          description: "Funciones FCC Construcción busca un/a Ingeniero/a de Caminos para que vaya conociendo los procedimientos de la empresa y ser en un futuro Jefe/a de obra civil. Se ofrece Incorporación al ÁREA DE INFRAESTRUCTURAS del Grupo FCC, empresa comprometida con la igualdad y la conciliación, que dispone del DIE (Distintivo de Igualdad en la empresa). De esta forma, el proceso de reclutamiento de esta oferta garantiza la igualdad de oportunidades a todas las candidaturas sin distinción de raza, color, religión, sexo, origen nacional, edad, orientación sexual, identidad de género o cualquier otra característica protegida por Ley.",
          status: "ACTIVE",
          location: "Madrid",
          modality: "Presencial",
          release_date: "Hace 14 horas",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 29,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Aparejador",
          company: "Etalentum Group",
          description: "Estamos seleccionando para una empresa del sector de la construcción, un Aparejador para edificación, en Pamplona. FUNCIONES: - Planificación y organización de la obra. - Comprobación de mediciones. Edición y control de certificaciones. - Control de costes y plazos de ejecución. Detección y corrección de desviaciones. - Coordinación de industriales y subcontratistas, tramitación de pedidos. - Control de Calidad (redacción, control y seguimiento del plan de calidad). - Redacción de actas. - Interlocución con clientes y dirección facultativa. - Cierre de obra. - Cumplimiento de los Procedimientos y Procesos de Calidad de la compañía, así los métodos que mejoren los rendimientos y resultados. Se Ofrece: - Jornada completa. - Salario Atractivo",
          status: "ACTIVE",
          location: "Pamplona/Iruña",
          modality: "Presencial",
          release_date: "Hace 14 horas",
          agreement: "Contrato otros contratos",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 30,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Ingeniero Estructural (Cypecad)",
          company: "Walters People",
          description: "Constructora líder en la rehabilitación y obra nueva de entornos residenciales y de obra civil con más de 30 años de experiencia en Madrid, busca un/a Ingeniero especializado en Cálculo de Estructuras. Funciones: - Soporte en el diseño y cálculo de estructuras para los proyectos de edificación (residencial, hoteles, hospitales, oficinas, etc.), para su correcta ejecución. - Coordinación con el resto de dptos. implicados. - Asistencia puntual a obra y revisión de los proyectos de estrucutras. Si buscas aportar estabilidad a tu carrera profesional y desarrollarte potencialmente en el sector en una compañía líder, no dudes en inscribirte en esta oferta.",
          status: "ACTIVE",
          location: "Madrid",
          modality: "Presencial",
          release_date: "Hace 15 horas",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "27.000 € - 30.000 € Bruto/año",
          id: 31,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "ARQUITECTO",
          company: "MI_ARQUITECTOS",
          description: "Estudio de arquitectura en continuo crecimiento busca incorporar para su sede en Valencia a arquitecto con experiencia en gestión de estudios, redacción de proyectos básico y de ejecución y redacción de documentación administrativa. Se valora la experiencia en gestión de equipos de arquitectos, así como experiencia en obra ejecutada. El estudio ofrece la posibilidad de crecimiento a nivel personal y profesional mediante el desarrollo de proyectos en todas sus fases.",
          status: "ACTIVE",
          location: "Valencia",
          modality: "Presencial",
          release_date: "Hace 20 horas",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "12.000 € - 24.000 € Bruto/año",
          id: 32,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Arquitecta/o, arquitecta/o técnico, ingeniera/o en edificación, ingeniera/o civil o caminos",
          company: "DS GREEN TRANSITION SL.",
          description: "Arquitecta/o, arquitecta/o técnico o ingeniera/o en edificación integrado en la oficina técnica de la empresa DS Consultores. Actuaciones y redacción de proyectos de eficiencia energética en edificios, proyectos de mejora de movilidad urbana, mejora y naturalización de los entornos urbanos, digitalización de poblaciones, Smart City. Mejora de entornos urbanos turísticos o comerciales. Implantación de planes de movilidad sostenible y zonas de bajas emisiones.",
          status: "ACTIVE",
          location: "Barbate",
          modality: "Presencial",
          release_date: "Hace 1 días",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "1800 € - 2100 € Bruto/mes",
          id: 33,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Jefe de obra",
          company: "LIGNUM HOME BUILDING, S.L.",
          description: "Lignum Home Building, Empresa constructora especializada en todo el proceso de diseño y construcción de viviendas unifamiliares de diseño exclusivo y personalizado, precisa incorporar Arquitecto o arquitecto técnico para realizar labores de jefe/director de obras. Las funciones del puesto consisten en dirigir, coordinar y supervisar todo proceso de desarrollo de una obra, desde el proyecto de arquitectura, interiorismo y construcción, la elaboración de diseños, planos, detalles constructivos, cálculos, diseño de instalaciones y seguimiento y gestión de obras. Se valorarán conocimientos de diseño e interiorismo.",
          status: "ACTIVE",
          location: "Madrid",
          modality: "Presencial",
          release_date: "Hace 1 días",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 34,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Diseñador/a de interiores",
          company: "DISMOBEL",
          description: "Dismobel es una empresa familiar del sector del habitat con una experiencia acumulada de más de 65 años. Hemos desarrollado un nuevo modelo de negocio con dos tiendas físicas (Villaviciosa de Odón, Madrid y Santa Cruz del Retamar, Toledo) y una tienda online dismobel.es. Próximamente abriremos una nueva tienda física en Villaviciosa de Odón y una nueva tienda online dismobeldesign.es, ambas dedicadas al mobiliario de diseño y a la gestión de proyectos de interiorismo y decoración. Buscamos diseñadores de interiores para incorporar a nuestro equipo con: - Grado de diseño de interiores - Capacidad comercial para gestionar proyectos de interiorismo y decoración de espacios residenciales, cumpliendo objetivos. - Capacidad de comunicación para presentar propuestas de diseño de forma atractiva. Dominio de modelado 3D con SketchUp. Se integrará en un equipo de interioristas y diseñadores de interiores en Villaviciosa de Odón Horario de lunes a sábado de 10 a 14h y de 17 a 20:30. 40 horas semanales.",
          status: "ACTIVE",
          location: "Villaviciosa de Odón",
          modality: "Presencial",
          release_date: "Hace 1 días",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "15.000 € - 24.000 € Bruto/año",
          id: 35,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Arquitecto/a técnico/a",
          company: "MAG-2 TALLER D'ARQUITECTURA SL.",
          description: "Necesitamos un Arquitecto/a Técnico/a para dar soporte al departamento técnico y al arquitecto del estudio. Sus funciones serán las de realizar proyecto de rehabilitación, proyectos de refuerzos estructurales, dibujar detalles constructivos, mediciones etc… También tendrá que realizar visitas de obras, realizar certificaciones y control de calidad.",
          status: "ACTIVE",
          location: "Sitges",
          modality: "Presencial",
          release_date: "Hace 1 día",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "18.000 € - 30.000 € Bruto/año",
          id: 36,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "COORDINADOR DE INGENIERÍA DE PROYECTO EPC",
          company: "Cobra Instalaciones y Servicios.",
          description: "GRUPO COBRA, Empresa multinacional líder en su sector, dedicada a la construcción de Proyectos EPC de Generación de Energía y Plantas Industriales, precisa incorporar COORDINADOR DE INGENIERÍA DE PROYECTO EPC para proyecto Ciclos Combinados. Funciones: -Coordinación del equipo de ingeniería interno encargado de la supervisión de la realización de la ingeniería de detalle del proyecto. -Elaboración del cronograma de ingeniería, en colaboración con las ingenierías externas. Control de los tiempos de realización de los proyectos asignados. -Preparación de especificaciones de equipos -Coordinación con equipos de compras y construcción -Revisión de anexos técnicos de contratos EPC. -Visitas/estancias en obra, coordinación con el personal de ingeniería en obra -Definir y presentar el proyecto ante cliente y socios -Planificar los hitos y objetivos de ingeniería en el proyecto -Analizar los problemas de ingeniería durante la ejecución de proyectos e implementar las soluciones o cambios necesarios -Apoyar el área de ingeniería ante clientes, socios, consultoras y proyectos -Controlar las horas de ingeniería invertidas, así como las desviaciones en las mismas SE OFRECE: - Oportunidad de formar parte de una empresa líder en su sector y de ámbito internacional. - Puesto estable y continuidad laboral. - Salario según valía + incentivos.",
          status: "ACTIVE",
          location: "Madrid",
          modality: "Híbrido",
          release_date: "Hace 1 día",
          agreement: "Contrato otros contratos",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 37,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Arquitecto Senior",
          company: "BREEZE INNOVACION ARQUITECTOS S.L.P.",
          description: "Estudio de arquitectura con sede en Barcelona busca incorporar a un nuevo ARQUITECTO SENIOR en su equipo. El puesto de Arquitecto Senior tiene las funciones de dirigir, supervisar y redactar proyectos de arquitectura, de edificios principalmente residenciales. Su intervención requerirá habilidades desde las primeras fases del proyecto hasta las direcciones de obra y la entrega del edificio.",
          status: "ACTIVE",
          location: "Barcelona",
          modality: "Presencial",
          release_date: "Hace 1 día",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "30.000 € - 36.000 € Bruto/año",
          id: 38,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "ARQUITECTO/A- INTERIORISTA",
          company: "ADOLFO DOMINGUEZ, S.A",
          description: "Funciones Somos una marca de autor. Queremos llenar los armarios de sentido común. Hacemos ropa que dure más que las modas. TE ESTAMOS BUSCANDO. Seleccionamos para nuestros servicios centrales en Ourense un arquitecto/a. Las funciones que desarrollarás son: • Llevarás a cabo el levantamiento de planos del estado actual de los locales. • Diseñarás diferentes puntos de venta así como el desarrollo de proyectos incluyendo diseño de mobiliario. • Elaborarás planos generales y específicos necesarios en un proyecto. • Llevarás a cabo la resolución de dudas de detalles de ejecución tanto de mobiliario como de obra civil en contínuo contacto con jefes de obra y proveedores. • Elaboración y medición de planos del estado actual de los locales dedicados a ser punto de venta. • Realización de implantaciones para nuevas aperturas y reformas. Se ofrece Trabajo en entorno multidisciplinar y dinámico Jornada completa continua de lunes a viernes",
          status: "ACTIVE",
          location: "Ourense",
          modality: "Híbrido",
          release_date: "Hace 1 día",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 39,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "AUXILIAR TÉCNICO CON ALTO NIVEL DE FRANCÉS",
          company: "Grupo IC",
          description: "Grupo IC con sede en Sevilla, precisa, para su empresa constructora, AUXILIAR TÉCNICO CON ALTO NIVEL DE FRANCÉS. ¿Te gustaría trabajar en proyectos para grandes marcas de retail, lujo y oficinas corporativas? En grupo IC acompañamos a importantes marcas internacionales en su expansión por España, Francia, Portugal y Bélgica. Buscamos a un/a profesional técnico para sustitución de baja por maternidad, que se encargará de llevar a cabo la carga administrativa relativa a la ejecución de obras, facturación, documentación PRL, organización documental, así como dar asistencia al equipo en sus desplazamientos y la gestión de éstos. · Contacto y búsqueda de proveedores nuevos y de zona. · Solicitud de presupuestos de obra a proveedores. · Comprobación de albaranes, pagos y envíos de facturas asociadas para la posterior firma del Jefe de Proyecto. · Preparación de la documentación física que necesitara el Jefe de Obra en obra. · Solicitud de la documentación de los trabajadores que acudirán a la obra y envío a los organismos pertinentes para facilitar accesos. · Realizar adicionales de obra: envío a clientes, modificaciones, etc. ·Realización de pedidos, · Realización de planos, croquis y detalles para su ejecución en obra · Elaboración de planes de seguridad antes del inicio de la obra. Reclamación de documentación de seguridad a proveedores y coordinación y entrega de la misma con el Coordinador de Seguridad y Salud y el Departamento de SyS. · Realización de repasos, coordinando a proveedores, cliente y responsables de tiendas para su ejecución. · Revisión de facturas y aclaración de dudas sobre facturas con Jefes de Obra, proveedores y clientes. Se requiere conocimientos avanzados de francés para la comunicación con nuestros clientes internacionales. Mínimo B2 (Se realizarán pruebas).",
          status: "ACTIVE",
          location: "Sevilla",
          modality: "Presencial",
          release_date: "Hace 1 día",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 40,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Arquitecto/a Jr BIM",
          company: "AYESA",
          description: "¡En Ayesa crecemos juntos! Cada profesional de nuestra empresa es importante para nosotros, nos ayudan a crecer de manera diversa y gracias a ellos somos más de 4.500 personas trabajando con el mismo objetivo en más de 40 países. ¡Únete a una de las mayores ingenierías del mundo! Si eres una persona con vocación por la ingeniería, comprometida y con ganas de afrontar grandes retos profesionales...¡Este es tu sitio! En esta ocasión buscamos ampliar nuestro equipo con un/a Arquitecto/a Jr con experiencia en BIM que quieran continuar construyendo el futuro con nosotros desde nuestras oficinas de Barcelona. ¡Anímate a dar el salto!¡Te estamos esperando! ¿Qué te ofrecemos? · ¡Llega hasta donde tú quieras! El Programa “Desarróllate en Ayesa” te ayudará a marcar tu itinerario de futuro anualmente. · Contamos con políticas que facilitan la conciliación entre la vida profesional y personal: Flexibilidad horaria, modelo híbrido de trabajo y Hotdesk (Smart Job). · Gestiona tu nómina como te interese, acógete a la retribución flexible (Seguro médico, Ticket Restaurant, Guardería y Transporte). · Uno de nuestros pilares es la actualización de nuestros profesionales, por ello proporcionamos formación técnica, certificaciones y formación en idiomas. · ¿Quieres encaminar tu trayectoria profesional hacia la gestión de equipo? Ayesa Management Program nos ayuda a identificar tu talento. · Proceso de revisión salarial anual. Atendiendo a la Ley Orgánica 3/2007, de 22 de marzo, Ayesa se ha marcado como objetivo promover la defensa y aplicación efectiva del principio de igualdad entre hombres y mujeres, evitando cualquier tipo de discriminación laboral por razón de sexo, garantizando así las mismas oportunidades de ingreso.",
          status: "ACTIVE",
          location: "Barcelona",
          modality: "Híbrido",
          release_date: "Hace 1 día",
          agreement: "Contrato otros contratos",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 41,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "COMERCIAL",
          company: "PROMOCIONES MAJORERAS SL",
          description: "Empresa patrimonial que se dedica al alquiler de locales comerciales en Gran Canaria y Fuerteventura busca un comercial con conocimientos administrativos. El candidato/a ha de ser una persona seria, responsable, con aptitudes comerciales, dinámica, entregada y proactiva. *FUNCIONES*: · Atención al cliente telefónica, · Realización de visitas a los locales y seguimiento de los mismos, · Resolución de incidencias · Otras tareas propias del puesto. *REQUISITOS* · Formación Grado en Administración de Empresas especialidad Comercial. · Experiencia de 3 años en puesto similar. · Buena presencia. · Proactividad, motivación por su trabajo, familiar, compromiso, estabilidad, responsabilidad, organización. Se ofrece: · Contrato jornada completa · Formar parte de una empresa consolidada.",
          status: "ACTIVE",
          location: "Las Palmas de Gran Canaria",
          modality: "Presencial",
          release_date: "Hace 1 día",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Más de 10.000 €",
          id: 42,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Beca Arquitecto Superior (h/m)",
          company: "CLIKALIA",
          description: "Clikalia es la Proptech Nº #1 en la digitalización de la compra y venta de inmuebles en España. En tan solo 7 días ofrecemos el pago por tu vivienda y ponemos a disposición la mejor oferta de inmuebles en tu ciudad. Queremos acercar y hacer accesible la vivienda para todo el mundo. Con Headquarters en Madrid y presencia en Barcelona, México City, Málaga, Sevilla y Lisboa, Clikalia se ha expandido rápidamente en apenas 4 años de vida para brindar soporte a sus clientes. Clikalia está fundada por los mayores emprendedores en serie del país. Adicionalmente, contamos con inversores tales como Soft Bank, Fifth Wall, Luxor Capital y el Banco Santander a través de su venture capital, Mouro Capital, ofreciendo distintas sinergias y oportunidades de crecimiento. En 2021 hemos crecido un 500% y triplicado equipo en todas nuestras territoriales además de acabar el año cerrando una ronda de financiación histórica en el ecosistema empresarial español. Si quieres unirte a nuestro equipo de estrategia como Arquitecto (h/m) sigue leyendo...: ¿Qué harás? - Planificación, coordinación y organización de las tareas productivas y técnicas de acuerdo con los objetivos y procedimientos marcados por el Departamento de Arquitectura y Proyectos. - Control y gestión de proyectos. - Elaboración de planos al detalle. - Elaboración y redacción de proyectos. - Elaboración de memorias técnicas. - Estados de mediciones. ¿Quién eres? - Resolutivo, organizado y orientado a objetivos. - Autónomo y proactivo. - Tienes una rápida capacidad de adaptación. ¿Qué te ofrecemos? - Beca remunerada con plan de carrera. - Desarrollo profesional en una de las startups de mayor crecimiento en España. - Ambiente meritocrático. - Oficinas top en pleno centro de Madrid. Nos sentimos muy orgullosos de lo que estamos haciendo, tenemos un propósito y aquí todo el mundo cabe. Queremos integrar el mejor equipo para cambiar la forma en que se vende o se compra tu casa. Nos gusta decir, que nos esforzamos cada día en ofrecer un entorno de trabajo bonito y que inspire a todos.",
          status: "ACTIVE",
          location: "Madrid",
          modality: "Presencial",
          release_date: "Hace 1 día",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 43,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Arquitecto",
          company: "LAPPSET",
          description: "Destacada empresa del sector de parques infantiles busca: Arquitecto/a para la realización de proyectos de parques lúdicos en espacios públicos exteriores. Pensamos en un joven licenciado o en el último curso (25- 35 años) con ganas de aportar creatividad en proyectos de espacios públicos exteriores (no edificación). Imprescindible enviar currículum con documentación gráfica adjunta de proyectos u obras realizadas. Condiciones a negociar.",
          status: "ACTIVE",
          location: "Montcada i Reixac",
          modality: "Presencial",
          release_date: "Hace 1 día",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 44,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Responsable de ejecución de obras de reforma de viviendas",
          company: "CUCO BONITA REFORMA SOCIEDAD LIMITADA.",
          description: "CUCO BONITA REFORMA es una empresa especializada en el diseño y ejecución de obras de reformas en viviendas particulares. El puesto ofrecido acometerá las labores de seguimiento y ejecución de todos los trabajos que comprenden este tipo de obras. Contratación, seguimiento de ejecución, certificación, valoración de trabajos, cumplimiento de plazos, resolución de problemas técnicos, etc.",
          status: "ACTIVE",
          location: "Valencia",
          modality: "Presencial",
          release_date: "Hace 1 día",
          agreement: "Contrato de duración determinada",
          work_time: "Jornada completa",
          salary: "Salario no disponible",
          id: 45,
          education: "Grado",
          category: "Inmobiliario y construcción"
        },
        {
          title: "Arquitecto Tecnico",
          company: "contratas gimeno 2006",
          description: "Integrado en el despacho se encargará de colaborar en proyectos vinculados a hoteles, viviendas de alto standing y otros espacios. Entre sus funciones principales estarán la realización de mediciones, detalles constructivos y dirección de ejecución. Pensamos en un/a Arquitecto técnico con 2 o 3 años de experiencia en las funciones descritas anteriormente. Ofrecemos incorporación inmediata a empresa familiar con más 15 de experiencia en el sector.",
          status: "ACTIVE",
          location: "Barcelona",
          modality: "Presencial",
          release_date: "Hace 1 día",
          agreement: "Contrato indefinido",
          work_time: "Jornada completa",
          salary: "18.000 € - 27.000 € Bruto/año",
          id: 46,
          education: "Grado",
          category: "Inmobiliario y construcción"
        }
      ],
      currentOferts: [],
      thereAreOferts: false,
      wizardSrc: '',
    }
  },
  beforeMount () {
    if (localStorage.getItem('appliedOferts')) {
      try {
        this.token = parseInt(JSON.parse(localStorage.getItem('token')));

        let splitted_text = (JSON.stringify(localStorage.getItem('appliedOferts'))).split(",");
        if (splitted_text.length > 1) {
          splitted_text[0] = parseInt(splitted_text[0].substr(1))

          for (let idx = 1; idx < splitted_text.length - 1; idx ++) {
            splitted_text[idx] = parseInt(splitted_text[idx])
          }

          let last_word = splitted_text[splitted_text.length - 1]
          last_word = last_word.substr(0, last_word.length - 1)
          splitted_text[splitted_text.length - 1] = parseInt(last_word)
          this.currentOferts = splitted_text
        } else if (splitted_text.length === 1){
          splitted_text[0] = parseInt(splitted_text[0].substr(1, splitted_text[0].length - 2))
          this.currentOferts = splitted_text
        }
        console.log(this.currentOferts)
      } catch (error) {
        this.currentOferts = [];
        this.token = 0;
      }
    }
    if (this.currentOferts.length > 0) {
       this.thereAreOferts = true
    }
    if (this.$route.query.username === undefined) {
      this.username = "noUser"
    } else {
      this.username = this.$route.query.username
    }
  },
  methods: {
    getWizard () {
      return 'img/theme/wizard_' + String(Math.floor(Math.random() * 4)) + '.png'
    },
    openOffert(offertID) {
      this.$router.replace({ path: `/oferts/${offertID}`, query: { username: this.username, token: this.token, offertID: offertID } })
    }
  }
}
</script>

<style scoped>
.img-wizard {
  width: fit-content;
  height: 70px;
}
</style>
