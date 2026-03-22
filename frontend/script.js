async function shortenurl() {
    const urlInput = document.getElementById("urlinput");
    const url = urlInput.value.trim();

    if (!url) {
        alert("Please enter a URL");
        return;
    }

    try {
        const res = await fetch("https://url-shortner-kbpw.onrender.com/shorten", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ originalUrl: url })
        });

        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        const resultDiv = document.getElementById("result");

        // Backend property 'shortUrl' hai, use wahi likhna hoga
        resultDiv.innerHTML = `
            <div class="link">${data.shortUrl}</div>
            <div class="actions">
                <button onclick="window.open('${data.shortUrl}', '_blank')">Open</button>
                <button class="copy" onclick="copylink('${data.shortUrl}')">Copy</button>
            </div>`;

    } catch (error) {
        console.error(error);
        alert("Server error: Connection failed");
    }
}

function copylink(link) {
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copied!");
    });
}