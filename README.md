# Google Calendar Event Generator  

**Google Calendar Event Generator** is a Chrome extension designed to streamline the process of creating events in Google Calendar. Using natural language input, the extension generates detailed event information and opens the event creation page in Google Calendar. It integrates with OpenAI’s API to interpret your input and provide accurate event details.  

---

## 📂 Repository Structure  

```plaintext
README.md                       
google-calendar-event-generator/
├── manifest.json          # Chrome extension manifest file
├── popup.html             # HTML for the popup interface
├── popup.js               # Script for popup functionality
├── config.html            # HTML for the settings page
├── config.js              # Script for settings functionality
├── constants.js           # Shared constants (e.g., default prompts)
├── background.js          # Background service worker
├── icon.png               # Extension icon
```

---

## 🚀 Installation  

Follow these steps to install the extension locally in Chrome:  

1. **Prepare the directory**  
   Ensure all files are located in the `google-calendar-event-generator` folder in your repository.  

2. **Open Chrome Extensions**  
   - Open Google Chrome.  
   - Navigate to `chrome://extensions/`.  

3. **Enable Developer Mode**  
   - Toggle the Developer Mode switch in the top-right corner of the Extensions page.  

4. **Load the unpacked extension**  
   - Click the **Load unpacked** button.  
   - Select the `google-calendar-event-generator` directory from your local repository.  

5. **Verify installation**  
   - Once loaded, the extension icon will appear in the Chrome toolbar.  
   - Click the icon to open the popup and start creating events.  

6. **Configure API Key**  
   - Open the extension’s settings by clicking the **Settings** button in the popup or navigating to `chrome://extensions/ > Details > Extension options`.  
   - Enter your OpenAI API key and save the settings.  

---

You’re now ready to use the Google Calendar Event Generator to create events effortlessly!
