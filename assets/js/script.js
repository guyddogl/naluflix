function getUrlParameter() {
  let urlParams = new URLSearchParams(window.location.search);
  let urlObj = {
    utm_id: urlParams.get('utm_id'), 
    utm_campaign: urlParams.get('utm_campaign'), 
    utm_source: urlParams.get('utm_source'), 
    utm_medium: urlParams.get('utm_medium'), 
    utm_term: urlParams.get('utm_term'), 
    utm_content: urlParams.get('utm_content'), 
    src: urlParams.get('src')
  };
  let utms ="";
  for (let index = 0; index < Object.keys(urlObj).length; index += 1) {
      if (Object.values(urlObj)[index] !== null) {
          utms += `&${Object.keys(urlObj)[index]}=${Object.values(urlObj)[index]}`;
      }
  }
  let urlOriginal = document.getElementById('checkout').href;
  return document.getElementById('checkout').href=`${urlOriginal}${utms}`;
}
getUrlParameter();