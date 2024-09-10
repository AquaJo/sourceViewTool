const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const { convert, parseFile } = require("./lib/bookmarklet"); // assuming bookmarklet.js is in the same directory

// Define the file path and output
const filePath = path.join(__dirname, "../", "inject.js"); // Path to the file you want to convert into a bookmarklet
const outputPath = path.join(__dirname, "../", "index.html");

// Read the file and convert it into a bookmarklet
fs.readFile(filePath, "utf8", async (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    // Parse the file to extract code and options
    const { code, options, errors } = parseFile(data);
    if (errors) {
      console.error("Error parsing the file:", errors);
      return;
    }

    // Convert the code into a bookmarklet
    const bookmarkletCode = await convert(code, options);
    const staticJavascript = bookmarkletCode;

    // Render the EJS template --> CI
    ejs.renderFile(
      path.join(__dirname, "./index.ejs"),
      { staticJavascript },
      function (err, data) {
        // save as index.html
        fs.writeFileSync(outputPath, data);
        console.log("Website code saved to index.html");
      }
    );
  } catch (error) {
    console.error("An error occurred during the conversion process:", error);
  }
});
