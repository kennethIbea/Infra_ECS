import { getApiClient } from "../modules/axios"
import { UserType } from "../type"
import { useGetMutation } from "../modules/mutation"

const useEmailCheck = (data: UserType) => {
  return getApiClient({
    "Content-Type": "application/json",
  }).post(`/api/email-check`, data)
}

const useRegisterUser = (data: UserType) => {
  return getApiClient({
    "Content-Type": "application/json",
  }).post(`/api/signup`, data)
}

const useLoginedUser = (data: UserType) => {
  return getApiClient({
    "Content-Type": "application/json",
  }).post(`/api/signin`, data)
}

const useSetNewPass = (data: UserType) => {
  return getApiClient({
    "Content-Type": "application/json",
  }).post(`/api/forgot`, data)
}

export const useEmailChecker = ({
  onSuccess,
  onError,
}: {
  onSuccess: Function
  onError: Function
}) => {
  return useGetMutation(useEmailCheck, onSuccess, onError)
}

export const useAddUser = ({ onSuccess, onError }: { onSuccess: Function; onError: Function }) => {
  return useGetMutation(useRegisterUser, onSuccess, onError)
}

export const useLoginUser = ({
  onSuccess,
  onError,
}: {
  onSuccess: Function
  onError: Function
}) => {
  return useGetMutation(useLoginedUser, onSuccess, onError)
}

export const useNewPassword = ({
  onSuccess,
  onError,
}: {
  onSuccess: Function
  onError: Function
}) => {
  return useGetMutation(useSetNewPass, onSuccess, onError)
}
