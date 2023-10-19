const initialState = {
    token: null,
    msg: 'null',
    customer: [],
    product: [],
    agents: [],
    complaints: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload,
            };
        case 'MSG':
            return {
                ...state,
                msg: action.payload,
            };
        case 'CUSTOMER':
            return {
                ...state,
                customer: action.payload,
            };
        case 'PRODUCT':
            return {
                ...state,
                product: action.payload,
            };
        case 'AGENT':
            return {
                ...state,
                agents: action.payload,
            };
        case 'COMPLAINT':
            return {
                ...state,
                complaints: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};