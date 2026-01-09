document.getElementById('run').onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Check ke user Facebook tab par hai ya nahi
    if (tab && tab.url.includes("facebook.com")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['script.js']
        });
    } else {
        alert("Pehle Facebook ka tab open karein aur login karein!");
    }
};
