const extractData = (node) => {
  const data = [];

  const traverse = (element) => {
    if (element.tagName === 'P') {
      const text = element.textContent.trim();
      data.push(text);
    }
    
    element = element.firstChild;
    while (element) {
      traverse(element);
      element = element.nextSibling;
    }
  }

  traverse(node);

  return [...new Set(data)];
}

export default extractData;