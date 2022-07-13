const getUrlParameters = () => {
  const urlParameters = new URLSearchParams(window.location.search);
  let parameters = '';
  for(let entry of urlParameters.entries()) parameters += `&${entry[0]}=${entry[1]}`;
  const urlCheckout = document.getElementById('button-checkout').href;
  return document.getElementById('button-checkout').href=`${urlCheckout}${parameters}`;
};

window.onload = () => {
  getUrlParameters();
}
