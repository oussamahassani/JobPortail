<template>
    
    
        <base-dropdown tag="div" style="width:100% !important" menuClasses="my-dropdown">
            <template v-slot:title>
                <input
                    class="form-control my-input"
                    aria-describedby="addon-right addon-left"
                    type="text"
                    v-model="buscar"
                    placeholder="SELECCIONAR CATEGORIA"
                />
            </template>
            <li class="dropdown-content" v-for="item in listaFiltrada" :key="item.id" @click="select"> 
                {{ item.name }}
            </li>
        </base-dropdown>
    
</template>


<script>
import BaseDropdown from '../../components/BaseDropdown.vue';
export default {
  components: { BaseDropdown },
  name: "text-dropdown",
  
  data() {
        return {
        buscar: "",
        listaPr: [
            {
                id: 1,
                name: "Ingeniería"
            },
            {
                id: 2,
                name: "Salud"
            },
            {
                id: 3,
                name: "Ciencias Sociales y Finanzas"
            },
            {
                id: 4,
                name: "Sector servicios"
            },
            {
                id: 5,
                name: "Agropecuarios"
            },
            ]
        };
    },

    computed: {
        listaFiltrada() {
            /*console.log(this.buscar);*/
            return this.listaPr.filter(
                (item) => { return item['name'].includes(this.buscar) }
            )
        },
    },

    methods: {


        select(event){
            console.log(event.target.firstChild.data);
            this.buscar = event.target.firstChild.data.replace(/(^\s+)|(\s+$)/g, '')
        }
    },
}
</script>

<style>

.my-input{
    padding-right: 0.75rem !important; 
    border: 1px solid #cad1d7 !important;
}
.my-dropdown{
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
}

.dropdown-content{
    padding: 10px;
}

.dropdown-content:hover{
    background-color: #cad1d7;
    border-block: 1px solid #659ac8;
}

</style>