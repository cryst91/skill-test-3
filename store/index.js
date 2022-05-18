export const state = () => ({
    nameList: [
        {
            type: 'PROGRAMMER',
            label: 'AGUES1',
        },
        {
            type: 'PROGRAMMER',
            label: 'AGOES2',
        },
        {
            type: 'ANALYST',
            label: 'MANTAB',
        },
        {
            type: 'ANALYST',
            label: 'SLURR',
        },
    ],
})
// getter
export const getters = {
    getNameList(state) {
        return state.nameList
    }
}
export const mutations = {
    changeTypeInList(state, payload) {
        var idx = state.nameList.findIndex(function(obj){return obj.label == payload.name})
        state.nameList[idx].type = payload.type
    }
}

const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions,
};