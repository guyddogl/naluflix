const getUrlParameters = () => {
  const urlParameters = new URLSearchParams(window.location.search);
  let parametersKeysAndValues = '';
  for(let entry of urlParameters.entries()) parametersKeysAndValues += `&${entry[0]}=${entry[1]}`;
  let parametersValues = '';
  for(let entry of urlParameters.entries()) parametersValues.length === 0 ? parametersValues += `${entry[1]}` : parametersValues += `-${entry[1]}`;
  const urlCheckout = document.getElementById('button-checkout').href;
  return document.getElementById('button-checkout').href=`${urlCheckout}&src=${parametersValues}${parametersKeysAndValues}`;
};
