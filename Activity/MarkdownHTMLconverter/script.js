(() => {
  const markdownInput = document.getElementById("markdown-input");
  const htmlOutput = document.getElementById("html-output");
  const preview = document.getElementById("preview");

  function convertMarkdown() {
    let markdown = markdownInput.value;

    markdown = markdown.replace(/^### (.+)$/gm, "<h3>$1</h3>");
    markdown = markdown.replace(/^## (.+)$/gm, "<h2>$1</h2>");
    markdown = markdown.replace(/^# (.+)$/gm, "<h1>$1</h1>");

    markdown = markdown.replace(
      /^> (.+)$/gm,
      "<blockquote>$1</blockquote>"
    );

    markdown = markdown.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img alt="$1" src="$2">'
    );

    markdown = markdown.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2">$1</a>'
    );

    markdown = markdown.replace(
      /\*\*(.+?)\*\*/g,
      "<strong>$1</strong>"
    );

    markdown = markdown.replace(
      /__(.+?)__/g,
      "<strong>$1</strong>"
    );

    markdown = markdown.replace(
      /\*(.+?)\*/g,
      "<em>$1</em>"
    );

    markdown = markdown.replace(
      /_(.+?)_/g,
      "<em>$1</em>"
    );

    return markdown;
  }

  function updateOutput() {
    const html = convertMarkdown();

    htmlOutput.textContent = html;
    preview.innerHTML = html;
  }

  markdownInput.addEventListener("input", updateOutput);
  window.addEventListener("pageshow", updateOutput);
  updateOutput();
})();
