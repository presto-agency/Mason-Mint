import { createContext, ReactNode, useReducer, Dispatch, Reducer } from 'react'
import { ProductProps } from '@/utils/types'

export interface IInitialStateProps {
  modal: {
    isOpenModal: boolean
  }
  products: ProductProps[]
}

export interface IActionProps {
  type: string
  payload?: object
}

const initialState: IInitialStateProps = {
  modal: {
    isOpenModal: false,
  },
  products: [],
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
    // Products
    case 'ADD_PRODUCTS': {
      return {
        ...state,
        products: action.payload as ProductProps[],
      }
    }
    case 'RESET_PRODUCTS': {
      return {
        ...state,
        products: [],
      }
    }
    default:
      return state
  }
}

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<
    Reducer<IInitialStateProps, IActionProps>
  >(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
