<!-- Please remove this file from your project -->
<template>
    <div>
        {{getNameList}}
        <h6>{{listname}}</h6>
        <div class="input-group mb-3" v-for="(name, index) in nameList" :key="index">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input" :id="index" :checked="name.selected" @change="checkboxChange($event)">
                </div>
            </div>
            <input type="text" readonly="readonly" aria-label="Text input with checkbox" class="form-control" :value="name.value">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nameList: [],
            checkedBox:[],
        }
    },
    mounted() {
        this.$root.$on('pindahKanan', () => {
            console.log('test pindah kanan');
            if (this.listname == "ANALYST") {

            }
        });
        this.$root.$on('pindahKiri', () => {
            console.log('test pindah kiri');
            if (this.listname == "PROGRAMMER") {
                this.$store.commit()
            }
        })
    },
    computed: {
        getNameList() {
            if (this.listname == "PROGRAMMER") {
                this.$store.getters.getLeftList.forEach(name => {
                    this.nameList.push({
                        value: name,
                        selected: false,
                    })
                })
            } else if (this.listname == "ANALYST") {
                this.$store.getters.getRightList.forEach(name => {
                    this.nameList.push({
                        value: name,
                        selected: false,
                    })
                }) // call function getter untuk mendapatkan data
            }
        }
    },
    methods: {
        checkboxChange(e) {
            console.log(this.nameList,e)
        }
    },
    props: ['listname'],
    name: 'ItemList'
}
</script>
