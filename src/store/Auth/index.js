export default{
    namespaced: true,
    state:{
        token:"",
    },
    actions:{
        actToken(context,token){
            context.commit("multToken",token)
        }
    },
    mutations:{
        multToken(state,token){
            state.token=token;
        }
    },
    getters:{
        getToken(state){
            return state.token;
        }
    },
}