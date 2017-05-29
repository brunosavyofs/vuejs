<template>
    <div>
        <h2 class="centralizado">Cenários</h2>
        <div>
            <ul>
                <li v-for="cenario in cenarios">
                    {{ cenario.descricao }}
                </li>
            </ul>
            testse
            <router-link :to="novo">Novo Cenário</router-link>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            cenarios: []
        }
    },

    created() {
        this.load()
    },

    methods: {
        load() {
            this.$http.get('http://cosmos.dev:1080/v1/cenarios/')
                .then(response => response.json())
                .then(data => {
                    this.cenarios = data["results"]
                    // this.cenarios = response.json()
                }, error => {
                    console.log(error)
                });
        }
    }
}

</script>

<style>

</style>