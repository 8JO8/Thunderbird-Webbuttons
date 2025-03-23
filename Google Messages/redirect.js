browser.spacesToolbar.addButton('gMessages', {
    title: "Messages",
    defaultIcons: "icons/gMessages-32.svg",
    url: "https://messages.google.com/web"
});

browser.webRequest.onBeforeSendHeaders.addListener(
  function(e) {
    e.requestHeaders.forEach(header => {
      if (header.name.toLowerCase() === "user-agent") {
        header.value = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:136.0) Gecko/20100101 Firefox/136.0";
      }
    });
    return { requestHeaders: e.requestHeaders };
  },
  { urls: ["https://messages.google.com/web/*", "https://accounts.google.com/*"] },
  ["blocking", "requestHeaders"]
);