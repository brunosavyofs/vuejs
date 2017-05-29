<template>
    <div>
        <h2 class="centralizado">{{ titulo }}</h2>
        <form>
            <div>
                <label for="descricao">Descrição</label>
                <input name="descricao" type="text" v-model="cenario.descricao">
            </div>
            <div>
                <label for="percentual">Percentual</label>
                <input name="percentual" type="text" v-model="cenario.percentual_reajuste">
            </div>
            <div>
                <label for="mes">Mês</label>
                <select name="mes" v-model="cenario.mes_limite">
                    <option v-for="mes in meses" :value="mes.value">{{ mes.text }}</option>
                </select>
            </div>
            <div>
                <label for="ano">Ano</label>
                <select name="ano" v-model="cenario.ano_limite">
                    <option v-for="ano in anos" :value="ano.value">{{ ano.text }}</option>
                </select>
            </div>
            <div>
                <label for="tipo_folha">Tipo da Folha</label>
                <select name="tipo_folha" v-model="cenario.tipo_folha">
                    <option v-for="tipo in tipos_folha" :value="tipo.id">{{ tipo.titulo }}</option>
                </select>
            </div>
            <div>
                <label for="ano">Tipo Vínculo</label>
                <select name="ano" v-model="cenario.vinculos_aplicados" multiple>
                    <option v-for="tipo in tipos_vinculo" :value="tipo.id">{{ tipo.descricao }}</option>
                </select>
            </div>
            <div>
                <label for="ano">Tipo Provento</label>
                <select name="ano" v-model="cenario.proventos_reajustados" multiple>
                    <option v-for="tipo in tipos_provento" :value="tipo.id">{{ tipo.descricao }}</option>
                </select>
            </div>
            <button type="submit" @click.prevent="submit">Enviar</button>
        </form>
    </div>
</template>

<script>

export default {

    data() {
        return {
            titulo: "Novo Cenario",
            cenario: {
                descricao: "teste",
                percentual_reajuste: "2",
                mes_limite: "4",
                ano_limite: "2018",
                inclui_progressao: false,
                inclui_adicional: false,
                tipo_folha: 1,
                vinculos_aplicados: [],
                proventos_reajustados: []
            },
            anos: [
                { value: 2010, text: '2010' },
                { value: 2011, text: '2011' },
                { value: 2011, text: '2012' },
                { value: 2013, text: '2013' },
                { value: 2014, text: '2014' },
                { value: 2015, text: '2015' },
                { value: 2016, text: '2016' },
                { value: 2017, text: '2017' },
                { value: 2018, text: '2018' },
                { value: 2019, text: '2019' },
                { value: 2020, text: '2020' },
            ],
            meses: [{
                value: 1,
                text: "Janeiro"
            }, {
                value: 2,
                text: "Fevereiro"
            }, {
                value: 3,
                text: "Março"
            }, {
                value: 4,
                text: "Abril"
            }],
            tipos_folha: [],
            tipos_provento: [],
            tipos_vinculo: []
        }
    },

    created() {
        this.loadTiposFolha()
        this.loadTiposVinculo()
        this.loadTiposProvento()
    },

    methods: {
        submit() {
            console.log(this.data)
            this.$http.post('http://cosmos.dev:1080/v1/cenarios/', this.cenario)
                .then(response => {
                    console.log(response)
                    alert("Cenário cadastro com sucesso!")
                }, error => {
                    console.log(error)
                });
        },

        loadTiposFolha() {
            this.$http.get('http://cosmos.dev:1080/v1/tiposfolha/')
                .then(response => response.json())
                .then(data => {
                    this.tipos_folha = data["results"]
                    // this.cenarios = response.json()
                }, error => {
                    console.log(error)
                });
        },

        loadTiposVinculo() {
            this.$http.get('http://cosmos.dev:1080/v1/tipos-vinculo/')
                .then(response => response.json())
                .then(data => {
                    this.tipos_vinculo = data["results"]
                    // this.cenarios = response.json()
                }, error => {
                    console.log(error)
                });
        },

        loadTiposProvento() {
            this.$http.get('http://cosmos.dev:1080/v1/tipos-provento/')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.tipos_provento = data["results"]
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
