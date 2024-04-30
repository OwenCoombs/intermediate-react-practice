export const initialTeamState = {
    names: []
}

export const teamReducer = (state, action) => {
    switch(action.type){
        case 'addName':
            return { names: action.names }
        default:
            throw new Error('Error')
    }
}