'use strict';

const MY_GITHUB_ORGS = [/* Add your GitHub orgs here */];

chrome.contextMenus.create({
  contexts: ["all"],
  id: "github-cs-parentid",
  title: 'Search GitHub for "%s"',
  contexts: ["selection"],
});

if (MY_GITHUB_ORGS.length > 0) {
  chrome.contextMenus.create({
    parentId: "github-cs-parentid",
    contexts: ["all"],
    id: "all",
    title: "All of GitHub",
    contexts: ["selection"],
  });

  for (const org of MY_GITHUB_ORGS) {
    chrome.contextMenus.create({
      parentId: "github-cs-parentid",
      contexts: ["all"],
      id: org,
      title: org,
      contexts: ["selection"],
    });
  }
}

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  let url = `https://cs.github.com/?scopeName=All+repos&scope=&q="${info.selectionText.replace(/\"/g, '\\\"')}"`;
  if (info.menuItemId !== "all" && info.menuItemId !== "github-cs-parentid") {
    url += ` org:${info.menuItemId}`;
  }
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { type: "URL", url: url }, function (response) { });
  });
});
