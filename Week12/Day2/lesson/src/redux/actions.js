export const DETAIL = 'detail';

export const showDetails = (item) => {
    return {
        type:DETAIL,
        payload: item
    }
}