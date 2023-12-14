//background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["/buscaGoogle.js"]
        })
            .then(() => {
                console.log("INJECTED THE FOREGROUND SCRIPT.");
            })
            .catch(err => console.log(err));
    }
});

/*este codigo dice que cuando las tabs se actualizen(onUpdated) vamos a agregar un
evento (addListener), mandandole el ide de la tab (tabId), la informacion que se
genero el cambio (changeInfo) y el nombre de la tab (tab)




*/