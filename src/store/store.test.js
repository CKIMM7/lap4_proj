import store from './'

describe('Games redux state tests', () => {
    it('Should initially set games to an empty object', () => {
        const state = store.getState().room
        expect(state.room).toEqual({})
    })
})