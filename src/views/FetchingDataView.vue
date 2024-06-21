<template lang="">
    <div>
        {{$store.state.aboutMe}}
        
    </div>
    <br>
    <section v-for="project in projectData()" :key="project.name">
        {{project.name}}
    </section>
</template>
<script>
export default {
    methods:{
        projectData(){
            return this.$store.state.projects
        }
    },
    computed:{
        getAboutMe(){
           return this.$store.dispatch('getAboutMe')
        }
    },
    mounted() {
        this.getAboutMe
    },
    
}
</script>
<style scoped>
    div{
        background-color: cadetblue;
        display: flex;
        justify-content: baseline;
    }
</style>