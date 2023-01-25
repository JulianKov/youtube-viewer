import { QUERY_PARAMS } from '../constants';

const {REACT_APP_API_URL} = process.env;

export const fetchComments = async  <T>(queryParams: Record<string, string>):Promise<T> => {
  const url = new URL(`${REACT_APP_API_URL}/commentThreads`);
  
  url.search = new URLSearchParams({ ...QUERY_PARAMS, ...queryParams }).toString();
  
  const res = await fetch(url, {
    method: "GET",
  })
  const resp = await res.json();
  
  if (resp.errors) {
    throw new Error(resp.errors.message ?? "Custom Error" )
  }
  
  return resp;
}
