const beautifyPage = () => {

  const bodyContent = document.body.innerHTML;
  const lines = bodyContent.trim().split('\n');
  const newBodyContent = lines.map(line => `<p>${line}</p>`).join('');

  document.body.innerHTML = newBodyContent;
}

beautifyPage();