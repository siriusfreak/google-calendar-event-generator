import defaultPrompt from './constants.js';

chrome.runtime.onInstalled.addListener(() => {
    console.log("Google Calendar Event Creator installed.");
  });


chrome.runtime.onInstalled.addListener(async () => {
    const { promptTemplate } = await chrome.storage.sync.get("promptTemplate");

    if (!promptTemplate) {
        await chrome.storage.sync.set({ promptTemplate: defaultPrompt });
    }
});
