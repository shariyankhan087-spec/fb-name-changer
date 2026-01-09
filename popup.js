document.getElementById('run').onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Direct script execute karein taake URL ka masla na ho
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['script.js']
    });
};
