
function solution(url) {
  
  const userAgent = navigator.userAgent;
  const browserInfo = userAgent.match(/Mozilla\/\d+\.\d+/)[0]; 
  return `${browserInfo} ${url}`;
}
export default solution;


