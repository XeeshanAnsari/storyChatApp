
let INITIAL_STATE = {
    isLoggedIn: false,
    user: {}
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
}