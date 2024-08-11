export const FormReduces = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case "ADD_INFO":
      return { ...state, ...payload }
    case "GO_BACK":
      return { ...state, ...payload }
    default:
      return "No case found"
  }
}
