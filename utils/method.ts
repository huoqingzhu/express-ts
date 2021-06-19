const querystring=require('querystring');
const url=require('url');
export const getQuery=(URL:string)=>{
  return url.parse(URL,true).query
}
