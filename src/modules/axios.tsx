import axios, { RawAxiosRequestHeaders } from "axios"

export const getApiClient = (headers?: RawAxiosRequestHeaders) => {
  const baseURL = `${process.env.REACT_APP_BACKEND}/server`
  return axios.create({
    headers,
    withCredentials: true,
    baseURL,
  })
}
