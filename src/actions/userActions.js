// Action Creators

const setUser = (payload) => ({ type: "SET_USER", payload })

export const logUserOut = () => ({ type: "LOG_OUT" })

// Methods

export const fetchUser = (userInfo) => dispatch => {
    console.log(userInfo)
    let data = {
        user: { userName: userInfo.username},
        token: "1234abcd"
    }
    localStorage.setItem("token", data.token)
    dispatch(setUser(data.user))
}

export const signUserUp = (userInfo) => dispatch => {
    let data = {
        user: { userName: "Johnn Melchior", email: "johnmelchior88@gmail.com" },
        token: "1234abcd"
    }

    localStorage.setItem("token", data.token)
    dispatch(setUser(data.user))
}