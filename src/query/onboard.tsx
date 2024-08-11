import { getApiClient } from "../modules/axios"
import { GetScript } from "../type"
import { useGetMutation } from "../modules/mutation"

const useGetScript = (data: GetScript) => {
  return getApiClient({
    "Content-Type": "application/json",
  }).post(`/api/onboard`, data)
}

export const useScriptCode = ({
  onSuccess,
  onError,
}: {
  onSuccess: Function
  onError: Function
}) => {
  return useGetMutation(useGetScript, onSuccess, onError)
}
