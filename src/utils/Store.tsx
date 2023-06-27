import { createContext, ReactNode, useReducer, Dispatch } from 'react'

export interface IInitialStateProps {
  modal: {
    isOpenModal: boolean
  }
}

export interface IActionProps {
  type: string
  payload?: object
}

const initialState: IInitialStateProps = {
  modal: {
    isOpenModal: false,
  },
}

export const Store = createContext<{
  state: IInitialStateProps
  dispatch: Dispatch<IActionProps>
} | null>(null)

const reducer = (state: IInitialStateProps, action: IActionProps) => {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpenModal: true,
        },
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpenModal: false,
        },
      }
    }
    default:
      return state
  }
}

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
