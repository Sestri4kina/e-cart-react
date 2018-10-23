import {Middleware} from 'redux';

export const throwErrorMiddleware: Middleware = ({dispatch, getState}) => next => (action: any) => {
    if (typeof action === 'object' && action.error) {
        setTimeout(() => {
            throw action.error;
        });
    }

    return next(action);
};
