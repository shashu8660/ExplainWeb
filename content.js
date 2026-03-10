chrome.runtime.onMessage.addListener((request) => {

if(request.action === "translate"){

let text = document.body.innerText

alert("Text extracted from page:\n\n" + text.substring(0,500))

}

})