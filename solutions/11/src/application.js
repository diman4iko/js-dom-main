import 'whatwg-fetch';

function autocomplete() {
  // BEGIN (write your solution here)

  const author = 'your name';
  const created = '2022-08-01';

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

  /* comment
   * Author: ${author}
   * Created: ${created}
   */
}

export default autocomplete;
