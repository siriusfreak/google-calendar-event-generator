const defaultPrompt = `
Using the provided data, generate a Google Calendar event in JSON format. The output must be valid JSON, formatted for parsing with standard JavaScript methods. Do not include any additional text or explanations outside the JSON.

The JSON structure should strictly follow this example:
{
    "summary": "Meeting with Bob",
    "location": "123 Main St, City",
    "description": "Discuss quarterly results.",
    "start": { "dateTime": "2024-12-03T15:30:00+01:00" },
    "end": { "dateTime": "2024-12-03T16:30:00+01:00" }
}

Use the following input data to generate the event:
`.trim();

export default defaultPrompt;
