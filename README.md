# <img src="public/icons/icon_48.png" width="45" align="left"> GitHub CodeSearch Extensions

Chrome extension that lets you select text and search for it in [GitHub CodeSearch](https://github.com/features/code-search/signup).

If you want to make narrow searches to your own choice of GitHub organisations, add them to the `GITHUB_REPOS` array at the top of src/background.js:
```
const MY_GITHUB_ORGS = [ "myorg", "my-other-org" ];
```


## Features

Simply right click and select `Search GitHub for {my selection}`

![Demo](images/demo.gif)

## Install

To install:

* Clone the repo, run `npm install && npm run build` 
* In your browser, go to chrome://extensions
* Click `Load unpacked`
* Browse to and select <project root>/build

## Contribution

Suggestions and pull requests are welcomed!.

---

This project was bootstrapped with [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli)

