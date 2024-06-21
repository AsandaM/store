import { createStore } from 'vuex'

export default createStore({
  state: {
    // data -> propertyName, null -> value
    // data:null
    aboutMe:null,
    education:null,
    workExp:null,
    projects:null,
    skills:null,
    testimonial:null
  },
  getters: {
    // used to get things/ to preview certain things/ sort / filter
  },
  mutations: { 
    // use to change/update the state
    // commiting a mutation
    setAboutMe(state, payload){
      state.aboutMe = payload
    },
    setEducation(state, payload){
      state.education = payload
    },
    setWorkExp(state, payload){
      state.workExp = payload
    },
    setProjects(state, payload){
      state.projects = payload
    },
    setSkills(state, payload){
      state.skills = payload
    },
    setTestimonial(state, payload){
      state.testimonial = payload
    }

  },
  actions: {
    // run all async code
    // dispatching an action
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://asandam.github.io/first_api/data/data.json')
      let data = await fetchedInfo.json()
      let {aboutMe , projects, education, skills, workExperience, testimonials} = data
      console.log(data);
      commit('setAboutMe', aboutMe)
      commit('setProjects', projects)
      commit('setEducation', education)
      commit('setSkills', skills)
      commit('setWorkExp', workExperience)
      commit('setTestimonial', testimonials)
    }
  },
  modules: {
    // used to seperate your code to make it readable
  }
})
