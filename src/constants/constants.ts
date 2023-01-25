import { IParams } from '../components/comments/types';

const {REACT_APP_API_KEY} = process.env;

export const QUERY_PARAMS: IParams = {
  key: `${REACT_APP_API_KEY}`,
  part: "snippet",
  maxResults: "50",
  textFormat: "plainText",
};
