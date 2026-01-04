/* ===== SHARED JAVASCRIPT FUNCTIONS FOR ALL CALCULATORS ===== */

// Currency Formatting (Used by all calculators)
function formatCurrency(num) {
    if (num === 0) return '₨ 0';
    return '₨ ' + Math.round(num).toLocaleString('en-PK');
}

// Input Validation (Common validation logic)
function validatePositiveNumber(value, fieldName = 'input') {
    if (value === '' || value === null || value === undefined) {
        return { isValid: true, error: '' }; // Allow empty values
    }
    
    const numValue = parseFloat(value);
    
    if (isNaN(numValue)) {
        return { isValid: false, error: `Please enter a valid number for ${fieldName}` };
    }
    
    if (numValue < 0) {
        return { isValid: false, error: `${fieldName} cannot be negative` };
    }
    
    if (numValue > 1000000000) { // 1 billion limit
        return { isValid: false, error: `${fieldName} cannot exceed 1 billion` };
    }
    
    return { isValid: true, error: '' };
}

// Show Error Message (Common error display)
function showErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    const inputElement = errorElement?.previousElementSibling || document.querySelector(`input[data-error="${elementId}"]`);
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = message ? 'block' : 'none';
    }
    
    if (inputElement) {
        inputElement.style.borderColor = message ? '#d32f2f' : '';
    }
}

// Clear Error Message
function clearErrorMessage(elementId) {
    showErrorMessage(elementId, '');
}

// Update URL without page reload (for SEO)
function updateURLParameter(param, value) {
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set(param, value);
    currentUrl.hash = '';
    window.history.replaceState({}, '', currentUrl.toString());
}

// Get URL Parameter
function getURLParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Sidebar/Menu Functions
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

// FAQ Toggle Functionality
function toggleFAQ(element) {
    const faqAnswer = element.nextElementSibling;
    const faqIcon = element.querySelector('.faq-icon');
    
    // Toggle the active class
    if (faqAnswer.classList.contains('active')) {
        faqAnswer.classList.remove('active');
        faqIcon.textContent = '+';
        faqIcon.style.transform = 'rotate(0deg)';
    } else {
        // Close all other FAQs
        document.querySelectorAll('.faq-answer.active').forEach(answer => {
            answer.classList.remove('active');
            const otherIcon = answer.previousElementSibling.querySelector('.faq-icon');
            otherIcon.textContent = '+';
            otherIcon.style.transform = 'rotate(0deg)';
        });
        
        // Open clicked FAQ
        faqAnswer.classList.add('active');
        faqIcon.textContent = '−';
        faqIcon.style.transform = 'rotate(180deg)';
    }
}

// Load Calculator on Page Load
function initializeCalculator(calculatorName) {
    console.log(`${calculatorName} Calculator initialized`);
    
    // Set up any URL parameters
    const urlParam = getURLParameter('year') || getURLParameter('type') || getURLParameter('rate');
    if (urlParam) {
        // Let individual calculators handle their specific parameters
        if (typeof handleURLParameter === 'function') {
            handleURLParameter(urlParam);
        }
    }
    
    // Initialize calculation if there's existing input
    if (typeof calculateResult === 'function') {
        calculateResult();
    }
}

// Utility: Format Number with Commas
function formatNumber(num) {
    return Math.round(num).toLocaleString('en-PK');
}

// Utility: Parse Currency Input (removes commas, currency symbols)
function parseCurrencyInput(value) {
    if (!value) return 0;
    return parseFloat(value.toString().replace(/[₨,\s]/g, '')) || 0;
}

// Utility: Debounce Function (for input validation)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Analytics Tracking (placeholder for future implementation)
function trackCalculatorUsage(calculatorType, action = 'calculate') {
    // Future: Google Analytics or other tracking
    console.log(`Tracking: ${calculatorType} - ${action}`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Auto-detect calculator type from URL path
    const path = window.location.pathname;
    let calculatorType = 'Unknown';
    
    if (path.includes('income-tax')) calculatorType = 'Income Tax';
    else if (path.includes('business-tax')) calculatorType = 'Business Tax';
    else if (path.includes('zakat')) calculatorType = 'Zakat';
    
    initializeCalculator(calculatorType);
});