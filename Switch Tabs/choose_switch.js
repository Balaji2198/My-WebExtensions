document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("switch")) {
    return;
  }

  var name = e.target.textContent;

	 chrome.runtime.sendMessage({"name": name});
});