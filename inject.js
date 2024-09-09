(function () {
  const errorElements = document.querySelectorAll(".error");
  let currentIndex = -1; // initial index: -1 --> no error selected yet

  if (errorElements.length === 0) {
    console.log("No Errors Found! =]");
    return;
  }

  console.log(`${errorElements.length} Error Found!`);

  // function to get scroll smoothly to error
  function scrollToError(index) {
    if (index >= 0 && index < errorElements.length) {
      const element = errorElements[index];
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.style.border = "2px solid red"; // focus / mark element
      updateStatus();
    }
  }

  // Reset Highlight
  function resetHighlight() {
    if (currentIndex >= 0 && currentIndex < errorElements.length) {
      errorElements[currentIndex].style.border = ""; // Entferne Hervorhebung
    }
  }

  // Update Status
  function updateStatus() {
    statusDiv.innerHTML = `Error ${currentIndex + 1} of ${
      errorElements.length
    }`;
  }

  // Create status bar in browser GUI
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.style.position = "fixed";
  nextButton.style.bottom = "20px";
  nextButton.style.right = "20px";
  nextButton.style.zIndex = "1000";

  const prevButton = document.createElement("button");
  prevButton.innerText = "Previous";
  prevButton.style.position = "fixed";
  prevButton.style.bottom = "20px";
  prevButton.style.right = "80px";
  prevButton.style.zIndex = "1000";

  const statusDiv = document.createElement("div");
  statusDiv.style.position = "fixed";
  statusDiv.style.bottom = "60px";
  statusDiv.style.right = "20px";
  statusDiv.style.padding = "5px 10px";
  statusDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  statusDiv.style.color = "white";
  statusDiv.style.zIndex = "1000";
  statusDiv.style.borderRadius = "5px";
  statusDiv.style.fontFamily = "Arial, sans-serif";

  document.body.appendChild(nextButton);
  document.body.appendChild(prevButton);
  document.body.appendChild(statusDiv);

  // "Previous" click event
  nextButton.addEventListener("click", function () {
    resetHighlight();
    currentIndex = (currentIndex + 1) % errorElements.length; // increment index
    scrollToError(currentIndex);
  });

  // "Next" click event
  prevButton.addEventListener("click", function () {
    resetHighlight();
    currentIndex =
      (currentIndex - 1 + errorElements.length) % errorElements.length; // decrement index
    scrollToError(currentIndex);
  });

  // set initial state
  updateStatus();

  console.log("Click the buttons to navigate between errors.");
})();
