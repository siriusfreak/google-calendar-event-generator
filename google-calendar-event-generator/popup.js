document.getElementById("generateEvent").addEventListener("click", async () => {
    const input = document.getElementById("eventInput").value;
    const button = document.getElementById("generateEvent");
  
    if (!input) {
      showStatus("Please enter event details.");
      return;
    }
  
    button.disabled = true;
    button.textContent = "Generating...";
    showStatus("Generating...");
  
    try {
      const { openaiKey, promptTemplate } = await chrome.storage.sync.get(["openaiKey", "promptTemplate"]);
      if (!openaiKey) {
        showStatus("Please configure your OpenAI API key in the settings.");
        button.disabled = false;
        button.textContent = "Generate Event";
        return;
      }
  
      const gptResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${openaiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [{ role: "user", content: `${promptTemplate} ${input}` }],
        })
      });
  
      const gptData = await gptResponse.json();
      const eventData = JSON.parse(gptData.choices[0].message.content);
  
      const calendarUrl = new URL("https://calendar.google.com/calendar/u/0/r/eventedit");
      calendarUrl.searchParams.set("text", eventData.summary || "New Event");
      calendarUrl.searchParams.set("dates", formatEventDates(eventData.start.dateTime, eventData.end.dateTime));
      calendarUrl.searchParams.set("details", eventData.description || "");
      calendarUrl.searchParams.set("location", eventData.location || "");
      window.open(calendarUrl, "_blank");
  
      showStatus("Google Calendar page opened for event creation.");
    } catch (error) {
      showStatus("An error occurred while generating the event.");
      console.error(error);
    } finally {
      button.disabled = false;
      button.textContent = "Generate Event";
    }
  });
  
  function showStatus(message) {
    document.getElementById("status").textContent = message;
  }
  
  function formatEventDates(start, end) {
    const format = (date) => new Date(date).toISOString().replace(/-|:|\.\d+/g, "");
    return `${format(start)}/${format(end)}`;
  }
  
  document.getElementById("configButton").addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
  });
