export default (document) => {

    const title = document.querySelector('.content h1')?.textContent || '';
    const description = document.querySelector('.content .description')?.textContent || '';
    const items = [];
  
    const articleElements = document.querySelectorAll('.content .links > div');
    articleElements.forEach((articleElement) => {
      
      const articleTitle = articleElement.querySelector('h2 a')?.textContent || '';
      const articleDescription = articleElement.querySelector('p')?.textContent || '';
      items.push({ title: articleTitle, description: articleDescription });
    });
  
    return { title, description, items };
  

};