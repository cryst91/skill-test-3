<!-- Please remove this file from your project -->
<template>
    <div>
        {{getNameList}}
        <h6>{{listname}}</h6>
        <div class="input-group mb-3" v-for="(name, index) in nameList" :key="index">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input" :id="index" :checked="name.selected"  v-model="checkedBox[index]">
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
            selectedName: [],
        }
    },
    mounted() {
        this.$root.$on('pindahKanan', () => {
            if (this.listname == "ANALYST") {
                this.changeSelectedType('PROGRAMMER')
            }
        });
        this.$root.$on('pindahKiri', () => {
            if (this.listname == "PROGRAMMER") {
                this.changeSelectedType('ANALYST')
            }
        })
    },
    computed: {
        getNameList() {
            this.nameList = []
            this.$store.getters.getNameList.forEach(name => {
                if (name.type == this.listname) {
                    this.nameList.push({
                        value: name.label,
                        selected: false,
                    })
                }

            })
        }
    },
    methods: {
        changeSelectedType(newType) {
            this.selectedName = []
            for (var i = 0; i < this.checkedBox.length; i++) {
                if (this.checkedBox[i]) {
                    this.selectedName.push(this.nameList[i].value)
                }
            }

            this.selectedName.forEach(name => {
                this.$store.commit('changeTypeInList', 
                {
                    name: name,
                    type: newType
                })
            })

            this.checkedBox = []
            this.nameList = []
        }
    },
    props: ['listname'],
    name: 'ItemList'
}
</script>
