import * as ACTION_TYPES from "./action_types";

// ACTION CREATOR FUNCTIONS
export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    };
};

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    };
};

// OBJECT VERSION LESS LIKELY TO BE USED
export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
};

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
};

export const user_input = text => {
    return {
        type: ACTION_TYPES.USER_INPUT,
        text
    };
};

export const user_input2 = text => {
    return {
        type: ACTION_TYPES.USER_INPUT2,
        text
    };
};
