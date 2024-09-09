const terser = require("terser");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

// Function to minify and encode the JavaScript code
async function generateBookmarklet() {
  // Load your JavaScript file
  const filePath = path.join(__dirname, "inject.js"); // Adjust the path as needed
  const jsCode = fs.readFileSync(filePath, "utf-8");

  // Minify the JavaScript code using terser
  const minifiedResult = await terser.minify(jsCode);
  const minifiedCode = minifiedResult.code;

  // Encode the JavaScript code
  //const encodedCode = encodeURIComponent(minifiedCode).replace(/%20/g, "+");

  const staticJavascript = minifiedCode.replace(/"/g, "\\'");
  const variables = { staticJavascript };
  // Save the bookmarklet code to an HTML file
  ejs.renderFile(
    path.join(__dirname, "index.ejs"),
    variables,
    function (err, data) {
      // save as index.html
      fs.writeFileSync(path.join(__dirname, "index.html"), data);
      console.log("Website code saved to index.html");
    }
  );
}

// Run the function
generateBookmarklet().catch(console.error);
