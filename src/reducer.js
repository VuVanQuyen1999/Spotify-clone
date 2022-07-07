export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    // token: 'BQDxi0iG1q_2cSMFg-WNJmVPoJHPWaoK_5svLok1VVCniWOH3OcnJTErukY5YQrZKoUgglda3VJRwnLrd5_Mx4lNixBwhwVFjMZvJPPZmCNKLC2CeGjUYyIEUcgR6R32efo6TyQAUpVxFK8TkTRM2m4Rm4LA0FwmO-yf8MzOAmWTmy1h3JHsfL2BQfHR3_kINV8lnpvDgAgDmuwDRqsZ',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state, 
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;