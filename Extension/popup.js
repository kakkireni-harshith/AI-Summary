document.getElementById("summarize").addEventListener("click", ()=>{
    const resultDiv = document.getElementById("result");
    const summaryType = document.getElementById("summary-type").value;  

    resultDiv.innerHTML = '<div class="loader"></div>';

    chrome.storage.sync.get(["geminiApiKey"], ({ geminiApiKey }) => {
        
        if (!geminiApiKey){
            resultDiv.textContent = "No API key set. Click the Gear icon ⚙️ to add."
        }

        chrome.tabs.query({ active: true, currentWindow: true}, ([tab])=>{
        chrome.tabs.sendMessage( 
            tab.id, 
            { type: "GET_ARTICLE_TEXT" },
            async ({ text }) => {
                if (!text){
                    resultDiv.textContent = "Couldn't extract text from this page.";
                    return;
                }
                try {
                    const summary = await getGeminiSummary(
                        text,
                        summaryType,
                        geminiApiKey
                    );
                    resultDiv.innerHTML = marked.parse(summary);

                } 
                catch (error) {
                    resultDiv.textContent = "Gemini error: " + error.message;
                }
            }
        )
    })
    })
})

async function getGeminiSummary(rawText, type, apiKey){
    const max = 20000;
    const text = rawText.length > max ? rawText.slice(0, max) + "..." : rawText;

    const promptmap = {
    brief: `Summarize the following article in 3-4 concise sentences:\n\n${text}`,
    detailed: `Provide a detailed summary of the following article, preserving the key points and structure. Include important facts, context, and explanations:\n\n${text}`,
    bullets: `Summarize the following article into 5-7 clear bullet points:\n\n${text} `
    };

    const prompt = promptmap[type] || promptmap.brief;

    const msg = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
            method: "POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({
                contents: [{parts: [{text: prompt}]}],
                generationConfig: { temperature: 0.2 }
            })
        })
    
    if (!msg.ok){
        const {error} = await msg.json();
        throw new Error(error?.message || "Request failed.")
    }

    const data = await msg.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No Summary";
}

document.getElementById("copy-btn").addEventListener("click", ()=>{
    const txt = document.getElementById("result").innerText;
    if(!txt) return

    navigator.clipboard.writeText(txt).then(()=>{
        const btn = document.getElementById("copy-btn")
        const old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(()=>(btn.textContent = old), 2000);
    });
})