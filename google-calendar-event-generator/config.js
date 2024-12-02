import defaultPrompt from './constants.js';

document.getElementById("saveSettings").addEventListener("click", async () => {
    const key = document.getElementById("openaiKey").value;
    const prompt = document.getElementById("promptTemplate").value;

    if (!key) {
        showStatus("Please enter a valid API key.");
        return;
    }

    await chrome.storage.sync.set({ openaiKey: key, promptTemplate: prompt });
    showStatus("Settings saved successfully.");
    });

    document.addEventListener("DOMContentLoaded", async () => {
    const { openaiKey, promptTemplate } = await chrome.storage.sync.get(["openaiKey", "promptTemplate"]);

    if (openaiKey) {
        document.getElementById("openaiKey").value = openaiKey;
    }
    if (promptTemplate) {
        document.getElementById("promptTemplate").value = promptTemplate;
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    const { openaiKey, promptTemplate } = await chrome.storage.sync.get(["openaiKey", "promptTemplate"]);
        if (openaiKey) {
            document.getElementById("openaiKey").value = openaiKey;
        }
        document.getElementById("promptTemplate").value = promptTemplate || defaultPrompt;
    });

    document.getElementById("saveSettings").addEventListener("click", async () => {
    const key = document.getElementById("openaiKey").value;
    const prompt = document.getElementById("promptTemplate").value;

    if (!key) {
        showStatus("Please enter a valid API key.");
        return;
    }

    await chrome.storage.sync.set({ openaiKey: key, promptTemplate: prompt });
        showStatus("Settings saved successfully.");
    });

    function showStatus(message) {
    document.getElementById("status").textContent = message;
}
