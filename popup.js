document.getElementById('run').onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    
    // Agar URL detect na ho tab bhi script chal jaye
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['script.js']
    });
};
