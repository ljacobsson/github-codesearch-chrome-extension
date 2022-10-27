'use strict';


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'URL') {
    window.open(encodeURI(request.url), '_blank');
  }
  return true;
});

