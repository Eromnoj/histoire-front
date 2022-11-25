

export interface RegisterData {
  email: string,
  username: string,
  password: string
}

export const initialState: RegisterData = {
  email: '',
  username: '',
  password: ''
}

export const reducer = (state: RegisterData, action: { field: string, payload: string }) => {
  switch (action.field) {
    case 'email':
      return { ...state, email: action.payload };
    case 'username':
      return { ...state, username: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    default:
      return state

  }
}