// Get references
const output = document.getElementById('quote-output');
const button = document.getElementById('get-quote');
const status = document.getElementById('quoteStatus');

document.getElementById('get-quote').addEventListener('click', () => {
    // Update status live region with "Loading..."
    status.textContent = 'Loading quote...';
    output.textContent = 'Loading...'; // Visual feedback

    // Disable button during fetch
    button.disabled = true;

    fetch('https://api.quotable.io/random')
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch quote.');
            return res.json();
        })
        .then(data => {
            output.textContent = `"${data.content}" — ${data.author}`;
            button.disabled = false;

            // Update status live region with "Quote loaded"
            status.textContent = 'Quote loaded';
        })
        .catch(err => {
            output.textContent = "Failed to load quote.";
            console.error(err);

            // Add failure message to status region
            status.textContent = 'Failed to load quote';
        });
});

document.getElementById('clear-quote').addEventListener('click', () => {
    output.textContent = '';
    // Clear status live region
    status.textContent = 'Quote cleared';
});

// Task 2: Add event listener for custom keyboard-accessible button here

// Event listeners for the custom button
refreshBtn.addEventListener('click', fetchNewQuote);

// Keyboard event handler for Enter and Space keys
refreshBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Prevent scrolling with space key
        fetchNewQuote();
    }
});

// Task 3: Add modal open/close and focus logic here
// Modal functionality
const modal = document.getElementById('quoteInfoModal');
const infoButton = document.getElementById('infoButton');
const closeModalButton = document.getElementById('closeModal');

// Store the element that opened the modal to return focus when closing
let lastFocusedElement = null;

// Open modal function
function openModal() {
    // Store currently focused element to return to later
    lastFocusedElement = document.activeElement;

    // Show the modal
    modal.removeAttribute('hidden');

    // Focus the first focusable element in the modal (the close button in this case)
    closeModalButton.focus();

    // Add status for screen readers
    status.textContent = 'Information modal opened';
}

// Close modal function
function closeModal() {
    // Hide the modal
    modal.setAttribute('hidden', '');

    // Return focus to the element that opened the modal
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }

    // Add status for screen readers
    status.textContent = 'Information modal closed';
}

// Event listeners for modal
infoButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hasAttribute('hidden')) {
        closeModal();
    }
});

// Trap focus within modal when open
modal.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        // Get all focusable elements in modal
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // If shifting tab and on first element, go to last element
        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }

        // If tabbing forward and on last element, circle back to first
        else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
});
// Task 4: Add arrow key navigation logic for list items here
// Function to fetch new quote and add to listbox
function fetchNewQuote() {
    // Update status live region with "Loading..."
    status.textContent = 'Loading quote...';
    output.textContent = 'Loading...'; // Visual feedback

    // Disable buttons during fetch
    button.disabled = true;
    refreshBtn.setAttribute('aria-disabled', 'true');
    refreshBtn.classList.add('disabled');

    fetch('https://api.quotable.io/random')
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch quote.');
            return res.json();
        })
        .then(data => {
            // Add the new quote to the listbox
            addQuoteToListbox(data.content, data.author);

            // Re-enable buttons
            button.disabled = false;
            refreshBtn.removeAttribute('aria-disabled');
            refreshBtn.classList.remove('disabled');

            // Update status live region with "Quote loaded"
            status.textContent = 'Quote added to list';
        })
        .catch(err => {
            output.textContent = "Failed to load quote.";
            console.error(err);

            // Re-enable buttons
            button.disabled = false;
            refreshBtn.removeAttribute('aria-disabled');
            refreshBtn.classList.remove('disabled');

            // Add failure message to status region
            status.textContent = 'Failed to load quote';
        });
}

// Function to add quote to the listbox
function addQuoteToListbox(content, author) {
    const listbox = document.getElementById('quote-listbox');

    // Create new option
    const option = document.createElement('div');
    option.setAttribute('role', 'option');
    option.setAttribute('tabindex', '0');
    option.classList.add('listbox-option');
    option.textContent = `"${content}" — ${author}`;

    // Add the new option to the listbox
    listbox.appendChild(option);

    // Focus the new option
    option.focus();

    // Update selected state
    setSelectedOption(option);
}

// Function to set selected option
function setSelectedOption(selectedOption) {
    // Remove selected attribute from all options
    const options = document.querySelectorAll('#quote-listbox [role="option"]');
    options.forEach(option => {
        option.setAttribute('aria-selected', 'false');
    });

    // Set the selected attribute on the current option
    selectedOption.setAttribute('aria-selected', 'true');
}

// Function to handle keyboard navigation for listbox
function setupListboxNavigation() {
    const listbox = document.getElementById('quote-listbox');

    // Handle keyboard events on the listbox
    listbox.addEventListener('keydown', (event) => {
        const options = Array.from(listbox.querySelectorAll('[role="option"]'));
        const currentIndex = options.indexOf(document.activeElement);

        if (options.length === 0) return;

        // Handle arrow key navigation
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                // Move to next option or wrap to first
                const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
                options[nextIndex].focus();
                setSelectedOption(options[nextIndex]);
                status.textContent = `Quote ${nextIndex + 1} of ${options.length}`;
                break;

            case 'ArrowUp':
                event.preventDefault();
                // Move to previous option or wrap to last
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
                options[prevIndex].focus();
                setSelectedOption(options[prevIndex]);
                status.textContent = `Quote ${prevIndex + 1} of ${options.length}`;
                break;

            case 'Home':
                event.preventDefault();
                // Move to first option
                options[0].focus();
                setSelectedOption(options[0]);
                status.textContent = `Quote 1 of ${options.length}`;
                break;

            case 'End':
                event.preventDefault();
                // Move to last option
                options[options.length - 1].focus();
                setSelectedOption(options[options.length - 1]);
                status.textContent = `Quote ${options.length} of ${options.length}`;
                break;
        }
    });

    // Allow clicking on options to select them
    listbox.addEventListener('click', (event) => {
        const option = event.target.closest('[role="option"]');
        if (option) {
            option.focus();
            setSelectedOption(option);
        }
    });
}

// Setup listbox when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupListboxNavigation();
});

// Update the clear button functionality
document.getElementById('clear-quote').addEventListener('click', () => {
    const listbox = document.getElementById('quote-listbox');
    listbox.innerHTML = '';
    status.textContent = 'Quote list cleared';
});

// Update the original event listeners to use fetchNewQuote
document.getElementById('get-quote').addEventListener('click', fetchNewQuote);
const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', fetchNewQuote);