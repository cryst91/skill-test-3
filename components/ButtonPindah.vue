<template>
    <div>
        <button class="btn btn-outline-primary w-50" @click="pindahKanan()">KANAN</button>
        <button class="btn btn-outline-primary w-50" @click="pindahKiri()">KIRI</button>
    </div>
</template>

<script>
export default {
    name: 'ButtonPindah',
    methods: {
        pindahKanan(){
            this.$root.$emit('pindahKanan') //penulisan fungsi emit di child
        },
        pindahKiri(){
            this.$root.$emit('pindahKiri') //penulisan fungsi emit di child
        }
    },
}
</script>
