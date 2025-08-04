# AI-Summary

A browser extension that leverages Google's Gemini API to provide intelligent text summarization capabilities directly in your browser.

## 🚀 Features

- **Instant Text Summarization**: Quickly summarize any article on web pages
- **Powered by Gemini AI**: Utilizes Google's advanced Gemini API for high-quality summaries
- **Clean Interface**: Simple and intuitive user interface built with HTML, CSS, and JavaScript
- **Lightweight**: Minimal resource usage for optimal browser performance
- **Cross-Platform**: Works on any Chrome browser.

## 📋 Prerequisites

- A modern Chrome browser.
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

## 🛠️ Installation

### Method 1: Developer Mode (Recommended)

1. **Download or Clone** this repository to your local machine
2. **Open your browser** and navigate to the extensions page:
   - Chrome: `chrome://extensions/`
3. **Enable Developer Mode** by toggling the switch in the top-right corner
4. **Click "Load unpacked"** and select the folder containing the extension files
5. The AI Summary extension should now appear in your extensions list

### Method 2: Manual Installation

1. Download the extension files as a ZIP
2. Extract to a folder on your computer
3. Follow steps 2-4 from Method 1 above

## ⚙️ Setup

1. **Get your Gemini API Key**:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Sign in with your Google account
   - Generate a new API key
   - Copy the API key for the next step

2. **Configure the Extension**:
   - Click on the AI Summary extension icon in your browser toolbar
   - Enter your Gemini API key in the settings/options page
   - Save your configuration

## 🎯 How to Use

1. **Open any article**: Open any article/text on a webpage that you want to summarize
2. **Activate Extension**: 
   - Select "AI Summary" from the context menu, OR
   - Click the extension icon in the toolbar
3. **View Summary**: The AI-generated summary will appear in a popup or side panel
4. **Copy or Share**: Use the provided buttons to copy or share the summary

## 🏗️ Technical Details

### Built With
- **HTML**: Structure and layout
- **CSS**: Styling and responsive design
- **JavaScript**: Core functionality and API integration
- **Gemini API**: AI-powered text summarization

### File Structure
```
ai-summary-extension/
├── manifest.json          # Extension configuration
├── popup.html             # Extension popup interface
├── popup.js               # Popup functionality
├── content.js             # Content script for web page interaction
├── background.js          # Background service worker
├── options.html           # Settings page
├── options.js             # Settings functionality
├── icons                  # Extension icon
└── README.md              # This file
```

## 🔧 Configuration Options

- **API Key Management**: Securely store and manage your Gemini API key
- **Summary Length**: Choose between brief, detailed, or bullet-point summaries

## 🚨 Privacy & Security

- **Local Processing**: Your API key is stored locally in your browser
- **No Data Collection**: This extension does not collect or store user data
- **Minimal Permissions**: Only requests necessary permissions for functionality

## 🛡️ Permissions Required

- `activeTab`: To access content on the current tab
- `storage`: To save your API key and preferences
- `https://generativelanguage.googleapis.com/*`: To communicate with Gemini API


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Made with ❤️ by Kakkireni Harshith**

*Happy Summarizing! 📚✨*
