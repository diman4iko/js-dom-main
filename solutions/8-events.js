export default () => {
 
  const alertGeneratorButton = document.getElementById('alert-generator');
  const alertsContainer = document.querySelector('.alerts');
  
  let alertCounter = 1;
  
  alertGeneratorButton.addEventListener('click', () => {
    
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-primary');
    alertDiv.textContent = `Alert ${alertCounter}`;
    alertsContainer.prepend(alertDiv);
    alertCounter++;
  });
  
 
};