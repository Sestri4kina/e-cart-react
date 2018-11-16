import { AppAction } from '@store/types';

export const enum errorActionTypes {
    ClearErrorMessage = 'ClearErrorMessage',
}

export type ClearErrorMessage = AppAction<errorActionTypes.ClearErrorMessage>;
export function clearErrorMessage() : ClearErrorMessage {
    return {
        type: errorActionTypes.ClearErrorMessage
    }
}
