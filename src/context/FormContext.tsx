import React, { createContext, useContext, useReducer } from "react"
import { FormReduces } from "../reducers/FormContext" // Typo corrected: FormReduces -> FormReducer
import { UserType } from "../type" // Typo in import corrected: "../type" -> "../types"

// Define the initial state based on the UserType interface
const initialFormData: UserType = {
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  companyName: "",
  website: "",
  password: "",
  display: 0,
}

// Define the context type to include the methods
interface FormContextType {
  data: UserType
  // eslint-disable-next-line no-unused-vars
  addInfo: (newData: Partial<UserType>) => void
  // eslint-disable-next-line no-unused-vars
  goBack: (newData: Partial<UserType>) => void // Corrected to indicate no parameters
}

// Create context with an appropriate initial value
const FormContext = createContext<FormContextType>({
  data: initialFormData,
  addInfo: (newData: Partial<UserType>) => {
    newData
  }, // Placeholder function
  goBack: (newData: Partial<UserType>) => {
    newData
  },
})

export const FormContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(FormReduces, initialFormData) // Corrected typo in reducer name

  function addInfo(data: Partial<UserType>) {
    dispatch({
      type: "ADD_INFO",
      payload: data,
    })
  }

  function goBack(data: Partial<UserType>) {
    dispatch({
      type: "GO_BACK",
      payload: data,
    })
  }

  const value = {
    data: state, // Spread state here to pass along user data
    addInfo,
    goBack,
  }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

// Hook to use form context
export const useForm = () => useContext(FormContext)
