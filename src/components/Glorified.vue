<template>
    <section>
        <input type="text" v-model="data_user_input">
    </section>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            data_user_input: '',
        }
    },
    computed: {
        ...mapGetters({
            char_map
        })
    }
}
</script>
