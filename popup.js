document.getElementById("translate").addEventListener("click", () => {

chrome.tabs.query({active:true,currentWindow:true}, (tabs) => {

chrome.tabs.sendMessage(tabs[0].id, {
action:"translate"
})

})

})

document.getElementById("explain").addEventListener("click", () => {

chrome.tabs.query({active:true,currentWindow:true}, (tabs) => {

chrome.tabs.sendMessage(tabs[0].id, {
action:"explain"
})

})

})

document.getElementById("summary").addEventListener("click", () => {

chrome.tabs.query({active:true,currentWindow:true}, (tabs) => {

chrome.tabs.sendMessage(tabs[0].id, {
action:"summary"
})

})

})

document.getElementById("voice").addEventListener("click", () => {

chrome.tabs.query({active:true,currentWindow:true}, (tabs) => {

chrome.tabs.sendMessage(tabs[0].id, {
action:"voice"
})

})

})