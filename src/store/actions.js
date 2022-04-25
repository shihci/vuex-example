export default{
    handMenuOpen(context){
      
        const bool=!context.state.isOpen;
        context.commit("handMenuState",bool);
      }
};