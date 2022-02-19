/* globals chrome */

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.tabId && details.url.startsWith('https://www.dr.dk')) {
      return {
        redirectUrl: 'https://verdensbedstenyheder.dk/'
      }
    }
  },
  {
    urls: ['https://*.dr.dk/']
  },
  ['blocking']
)
