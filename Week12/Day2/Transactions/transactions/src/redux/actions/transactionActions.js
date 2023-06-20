
export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const UPDATE_INDEX = 'UPDATE_INDEX';


export const insert = (data) => ({
  type: INSERT,
  payload: data
});

export const update = (data) => ({
  type: UPDATE,
  payload: data
});

export const deleteTransaction = (id) => ({
  type: DELETE,
  payload: id
});

export const updateIndex = (index) => ({
  type: UPDATE_INDEX,
  payload: index
});