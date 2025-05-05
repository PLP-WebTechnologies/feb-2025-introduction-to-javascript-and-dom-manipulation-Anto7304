// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const changeTextBtn = document.getElementById('text-changer');
    const changeableText = document.getElementById('changeable-text');
    
    changeTextBtn.addEventListener('click', function() {
        changeableText.textContent = 'The text has been changed successfully!';
    });
    
    // Task 2: Modify CSS styles via JavaScript
    const styleChangerBtn = document.getElementById('style-changer');
    const styleDemo = document.getElementById('style-demo');
    let isStyled = false;
    
    styleChangerBtn.addEventListener('click', function() {
        if (!isStyled) {
            styleDemo.style.backgroundColor = '#ff9800';
            styleDemo.style.color = 'white';
            styleDemo.style.borderRadius = '50%';
            styleDemo.style.transform = 'rotate(10deg)';
            styleDemo.textContent = 'Styles applied!';
        } else {
            styleDemo.style = ''; // Reset all styles
            styleDemo.textContent = 'This box\'s style will change';
        }
        isStyled = !isStyled;
    });
    
    // Task 3: Add or remove elements
    const addElementBtn = document.getElementById('add-element');
    const removeElementBtn = document.getElementById('remove-element');
    const elementContainer = document.getElementById('element-container');
    let elementCounter = 0;
    
    addElementBtn.addEventListener('click', function() {
        elementCounter++;
        const newElement = document.createElement('div');
        newElement.className = 'box';
        newElement.textContent = `New Element ${elementCounter}`;
        elementContainer.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        if (elementContainer.children.length > 1) { // Keep the initial paragraph
            elementContainer.removeChild(elementContainer.lastChild);
            if (elementCounter > 0) elementCounter--;
        } else {
            alert('No more elements to remove!');
        }
    });
    
    // Bonus: Change heading color on hover
    const mainHeading = document.getElementById('main-heading');
    
    mainHeading.addEventListener('mouseover', function() {
        this.style.color = '#4CAF50';
    });
    
    mainHeading.addEventListener('mouseout', function() {
        this.style.color = '';
    });
});