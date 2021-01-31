export const mutations = {
  setItems(state,{resource, items}){
    debugger
    state[resource].items = items
  }
}