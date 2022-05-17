export const state = () => ({
    leftList: ['AGUES1', 'AGOES2'], // membuat state
    rightList: ['MANTAB', 'SLURR']
})
// getter
export const getters = {
    getLeftList (state) {
        return state.leftList  // getter untuk di panggil oleh commponent atau function untuk mendapatkan data.
    },
    getRightList (state) {
        return state.rightList
    }
}
export const mutations = {
    addLeftList (state, name) {
        state.leftList.push(name) // mutation untuk merubah value state
    },
    removeLeftList (state, name) {
        state.leftList.splice(this.events.indexOf(name), 1); // mutation untuk merubah value state
    },
    addRightList (state, name) {
        state.rightList.push(name) // mutation untuk merubah value state
    },
    removeRightList (state, name) {
        state.rightList.splice(this.events.indexOf(name), 1); // mutation untuk merubah value state
    },
}

const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions,
};