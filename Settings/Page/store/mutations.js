const SET_MODAL_PRODUCT_IMAGE = (state, obj) => {
    state.modalSeeProductImage = obj
}

const SET_SPINNER = (state, obj) => {
    state.spinner = obj
}

const SET_TYPE_LOGO = (state, obj) => {
    state.typeLogo = obj
}
const SET_FAV_ICON = (state, obj) => {
    state.typeFavIcons = obj
}

const SET_NAVBAR = (state, obj) => {
    state.navBarList = obj
}

const SET_CONFIGNAVBAR = (state, obj) => {
    state.routeSearchSettings = obj
}

// const SET_CONFIGNAVBAR_CHILDREN = (state, obj) => {
//     state.routeSearchSettings = obj
// }



export default {
    SET_MODAL_PRODUCT_IMAGE,
    SET_SPINNER,
       SET_TYPE_LOGO,
    SET_FAV_ICON,
    SET_NAVBAR,
    SET_CONFIGNAVBAR,
    // SET_CONFIGNAVBAR_CHILDREN
}