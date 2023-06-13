import 'whatwg-fetch';

export default () => {

  // BEGIN
  const inputElements = Array.from(document.querySelectorAll('input[data-autocomplete]'));

  inputElements.forEach((input) => {

    const autocompleteUrl = input.dataset.autocomplete;
    const listName = input.dataset.autocompleteName;
    const list = document.querySelector(`ul[data-autocomplete-name="${listName}"]`);

    input.addEventListener('input', async (event) => {

      const searchQuery = event.target.value;

      try {

        const response = await fetch(`${autocompleteUrl}?search=${encodeURIComponent(searchQuery)}`);
        const countries = await response.json();

        if (countries.length > 0) {

          const countryListItems = countries.map((country) => `<li>${country}</li>`).join('');
          list.innerHTML = countryListItems;
        } else {

          list.innerHTML = '<li>Nothing</li>';
        }
      } catch (error) {
        
        console.error('An error occurred:', error);
      }
    });
  });

  // END
};
