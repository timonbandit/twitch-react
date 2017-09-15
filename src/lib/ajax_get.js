/**
 * Getting ajax_get from url
 * Promise based
 * @example
 * App.ajax_get(url)
 .then(JSON.parse)
 .then((data) => {
          something(data)
        })
 .catch(function (error) {
          throw new Error(error);
     });
 * @param {String} url
 * @return {Promise}
 */
export default function ajax_get(url) {
  return new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function() {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(new Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(new Error("Network error"));
    };

    req.send();
  });
}
