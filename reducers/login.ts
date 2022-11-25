export interface LoginData {
  email: string,
  password: string
}


export const initialState = {
  email: '',
  password: ''
}

export const reducer = (state: LoginData, action: { field: string, payload: string }) => {
  switch (action.field) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    default:
      return state

  }
}