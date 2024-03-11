<template>
    <component
        class="div"
        :is="tag"
        >
        <div class="card border my-card container p-3">
            <div class="row">
                <div class="col-3 card-img-container ">
                    <img v-bind:src="this.imgSrc" alt="NoImage"/>
                </div>

                <div class="col my-card-body">

                        <div class="row">
                            <div class="card-title mb-0">
                                <h5 class="tab-pane-title font-weight-bold text-uppercase">
                                <slot name="title">
                                    Responsable de Logística
                                </slot>
                                </h5>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col pl-0">
                                <div class="card-company font-weight-bold text-primary">
                                    <slot name="company">
                                        Dalt Tech SL
                                    </slot>
                                </div>

                                <div class="card-location font-weight-bold">
                                    <slot name="location">
                                        Área Metropolitana de Barcelona, 08392
                                    </slot>
                                </div>
                            </div>

                            <div class="col pr-0">
                                <p class="card-work-time text-right mt-0 mb-0 mr-3">
                                    <slot name="work-tyme">
                                        Jornada Completa
                                    </slot>
                                </p>
                                <p class="card-salary text-right mt-0 mb-0 mr-3">
                                    <slot name="salary">
                                        20.000$ - 30.000$
                                    </slot>
                                </p>
                            </div>

                        </div>

                        <div class="row">
                            <div class="mt-1 mr-3 pl-0 pr-0 pb-0 text-justify">
                                <slot style="height: inherit" name="description">
                                    Raw denim you probably haven't heard of them jean shorts
                                    Austin. Nesciunt tofu stumptown aliqua, retro synth
                                    master cleanse. Mustache cliche tempor, williamsburg
                                    carles vegan helvetica. Reprehenderit butcher retro
                                    keffiyeh dreamcatcher synth.
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </component>
</template>

<script>
export default {
  name: "offert-card",
  imgSrc: 'img/theme/company_logo_0.png',
  props: {
    tag: {
      type: String,
      default: "li",
      description: "Dropdown html tag (e.g div, li etc)"
    }
  },
  beforeMount() {
    this.imgSrc = 'img/theme/company_logo_' +  String(Math.floor(Math.random() * 6)) + '.png'
  }
};
</script>

<style scoped>
.my-card:hover{
    background-color: #F1FDFE;
    box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.2);
}

.card-company, .card-location, .card-work-time, .card-salary{
    font-size: 0.8rem;
}

.card-img-container > img{
    max-width: 100%;
}

@media only screen and (max-width: 768px){
    .card-img-container {
        display: none;

    }
    .my-card-body{
        margin-inline: 1rem;
    }
}



</style>
