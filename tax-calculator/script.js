// Tax Slabs Configuration
const TAX_SLABS = {
    // Finance Act 2025 (For Tax Year 2026)
    "2026": [
        { limit: 600000, rate: 0, fixed: 0 },
        { limit: 1200000, rate: 0.01, fixed: 0 }, 
        { limit: 2200000, rate: 0.11, fixed: 6000 }, 
        { limit: 3200000, rate: 0.23, fixed: 116000 }, 
        { limit: 4100000, rate: 0.30, fixed: 346000 }, 
        { limit: Infinity, rate: 0.35, fixed: 616000 } 
    ],
    // Finance Act 2024 (For Tax Year 2025)
    "2025": [
        { limit: 600000, rate: 0, fixed: 0 },
        { limit: 1200000, rate: 0.05, fixed: 0 },
        { limit: 2200000, rate: 0.15, fixed: 30000 },
        { limit: 3200000, rate: 0.25, fixed: 180000 },
        { limit: 4100000, rate: 0.30, fixed: 430000 },
        { limit: Infinity, rate: 0.35, fixed: 700000 }
    ],
    // Finance Act 2023 (For Tax Year 2024)
    "2024": [
        { limit: 600000, rate: 0, fixed: 0 },
        { limit: 1200000, rate: 0.025, fixed: 0 },
        { limit: 2400000, rate: 0.125, fixed: 15000 },
        { limit: 3600000, rate: 0.225, fixed: 165000 },
        { limit: 6000000, rate: 0.275, fixed: 435000 },
        { limit: Infinity, rate: 0.35, fixed: 1095000 }
    ],
    // Finance Act 2022 (For Tax Year 2023)
    "2023": [
        { limit: 600000, rate: 0, fixed: 0 },
        { limit: 1200000, rate: 0.05, fixed: 0 },
        { limit: 1800000, rate: 0.10, fixed: 30000 },
        { limit: 2500000, rate: 0.15, fixed: 90000 },
        { limit: 3500000, rate: 0.175, fixed: 195000 },
        { limit: 5000000, rate: 0.20, fixed: 457500 },
        { limit: Infinity, rate: 0.35, fixed: 757500 }
    ],
    // Finance Act 2021 (For Tax Year 2022)
    "2022": [
        { limit: 600000, rate: 0, fixed: 0 },
        { limit: 1200000, rate: 0.05, fixed: 0 },
        { limit: 1800000, rate: 0.10, fixed: 30000 },
        { limit: 2500000, rate: 0.15, fixed: 90000 },
        { limit: 3500000, rate: 0.175, fixed: 195000 },
        { limit: 5000000, rate: 0.20, fixed: 457500 },
        { limit: Infinity, rate: 0.35, fixed: 757500 }
    ],
    // Finance Act 2020 (For Tax Year 2021)
    "2021": [
        { limit: 600000, rate: 0, fixed: 0 },
        { limit: 1200000, rate: 0.05, fixed: 0 },
        { limit: 1800000, rate: 0.10, fixed: 30000 },
        { limit: 2500000, rate: 0.15, fixed: 90000 },
        { limit: 3500000, rate: 0.175, fixed: 195000 },
        { limit: 5000000, rate: 0.20, fixed: 457500 },
        { limit: Infinity, rate: 0.35, fixed: 757500 }
    ],
    // Finance Act 2019 (For Tax Year 2020)
    "2020": [
        { limit: 600000, rate: 0, fixed: 0 },
        { limit: 1200000, rate: 0.05, fixed: 0 },
        { limit: 1800000, rate: 0.10, fixed: 30000 },
        { limit: 2500000, rate: 0.15, fixed: 90000 },
        { limit: 3500000, rate: 0.175, fixed: 195000 },
        { limit: 5000000, rate: 0.20, fixed: 457500 },
        { limit: Infinity, rate: 0.35, fixed: 757500 }
    ],
    // Finance Act 2018 (For Tax Year 2019) - After Supplementary Amendment Act 2018
    "2019": [
        { limit: 400000, rate: 0, fixed: 0 },
        { limit: 800000, rate: 0, fixed: 1000 },
        { limit: 1200000, rate: 0, fixed: 2000 },
        { limit: 2400000, rate: 0.05, fixed: 2000 },
        { limit: 3600000, rate: 0.10, fixed: 62000 },
        { limit: 6000000, rate: 0.15, fixed: 182000 },
        { limit: 12000000, rate: 0.20, fixed: 542000 },
        { limit: Infinity, rate: 0.25, fixed: 1742000 }
    ],
    // Finance Act 2017 (For Tax Year 2018)
    "2018": [
        { limit: 400000, rate: 0, fixed: 0 },
        { limit: 500000, rate: 0.02, fixed: 0 },
        { limit: 750000, rate: 0.05, fixed: 2000 },
        { limit: 1400000, rate: 0.10, fixed: 14500 },
        { limit: 1500000, rate: 0.125, fixed: 79500 },
        { limit: 1800000, rate: 0.15, fixed: 92000 },
        { limit: 2500000, rate: 0.175, fixed: 137000 },
        { limit: 3000000, rate: 0.20, fixed: 259500 },
        { limit: 3500000, rate: 0.225, fixed: 359500 },
        { limit: 4000000, rate: 0.25, fixed: 472000 },
        { limit: 7000000, rate: 0.30, fixed: 597000 },
        { limit: Infinity, rate: 0.35, fixed: 1497000 }
    ],
    // Finance Act 2016 (For Tax Year 2017)
    "2017": [
        { limit: 400000, rate: 0, fixed: 0 },
        { limit: 500000, rate: 0.02, fixed: 0 },
        { limit: 750000, rate: 0.05, fixed: 2000 },
        { limit: 1400000, rate: 0.10, fixed: 14500 },
        { limit: 1500000, rate: 0.125, fixed: 79500 },
        { limit: 1800000, rate: 0.15, fixed: 92000 },
        { limit: 2500000, rate: 0.175, fixed: 137000 },
        { limit: 3000000, rate: 0.20, fixed: 259500 },
        { limit: 3500000, rate: 0.225, fixed: 359500 },
        { limit: 4000000, rate: 0.25, fixed: 472000 },
        { limit: 7000000, rate: 0.30, fixed: 597000 },
        { limit: Infinity, rate: 0.35, fixed: 1497000 }
    ]
};

// Input Validation and Calculation
function validateAndCalculate() {
    const salaryInput = document.getElementById('monthlySalary');
    const errorElement = document.getElementById('salaryError');
    const value = parseFloat(salaryInput.value);
    
    // Clear previous errors
    errorElement.style.display = 'none';
    salaryInput.style.borderColor = '';
    
    // Validate input
    if (salaryInput.value && (isNaN(value) || value < 0)) {
        showError('Please enter a valid positive number');
        return;
    }
    
    if (value > 50000000) {
        showError('Maximum salary limit is PKR 50 million per month');
        return;
    }
    
    // If validation passes, calculate tax
    calculateTax();
}

function showError(message) {
    const errorElement = document.getElementById('salaryError');
    const salaryInput = document.getElementById('monthlySalary');
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    salaryInput.style.borderColor = '#d32f2f';
}

// Main Calculation Function
function calculateTax() {
    const salaryInput = document.getElementById('monthlySalary');
    const monthlyIncome = parseFloat(salaryInput.value) || 0;
    const yearlyIncome = monthlyIncome * 12;

    const urlParams = new URLSearchParams(window.location.search);
    let selectedYear = urlParams.get('year') || document.getElementById('taxYear').value;
    
    const slabs = TAX_SLABS[selectedYear] || TAX_SLABS["default"];

    let yearlyTax = 0;

    for (let i = 0; i < slabs.length; i++) {
        const slab = slabs[i];
        if (yearlyIncome <= slab.limit) {
            let baseLimit = (i === 0) ? 0 : slabs[i-1].limit;
            yearlyTax = slab.fixed + ((yearlyIncome - baseLimit) * slab.rate);
            break;
        } else if (i === slabs.length - 1) {
            let baseLimit = slabs[i-1].limit;
            yearlyTax = slab.fixed + ((yearlyIncome - baseLimit) * slab.rate);
        }
    }

    // Apply surcharge for high earners (above 10 million)
    if (yearlyIncome > 10000000) {
        let surchargeRate = 0;
        if (selectedYear === "2026") surchargeRate = 0.09; 
        else if (selectedYear === "2025") surchargeRate = 0.10;
        else if (["2024", "2023", "2022", "2021", "2020"].includes(selectedYear)) surchargeRate = 0.10;
        else if (["2019", "2018", "2017"].includes(selectedYear)) surchargeRate = 0.05; // Lower surcharge for older years
        
        yearlyTax += (yearlyTax * surchargeRate);
    }

    // Update desktop results
    document.getElementById('resMonthlyIncome').innerText = formatCurrency(monthlyIncome);
    document.getElementById('resMonthlyTax').innerText = formatCurrency(yearlyTax / 12);
    document.getElementById('resMonthlyNet').innerText = formatCurrency(monthlyIncome - (yearlyTax / 12));
    
    document.getElementById('resYearlyIncome').innerText = formatCurrency(yearlyIncome);
    document.getElementById('resYearlyTax').innerText = formatCurrency(yearlyTax);
    document.getElementById('resYearlyNet').innerText = formatCurrency(yearlyIncome - yearlyTax);
    
    // Update mobile results
    const mobileMonthlyIncome = document.getElementById('resMobileMonthlyIncome');
    const mobileMonthlTax = document.getElementById('resMobileMonthlTax');
    const mobileMonthlyNet = document.getElementById('resMobileMonthlyNet');
    const mobileYearlyIncome = document.getElementById('resMobileYearlyIncome');
    const mobileYearlyTax = document.getElementById('resMobileYearlyTax');
    const mobileYearlyNet = document.getElementById('resMobileYearlyNet');
    
    if (mobileMonthlyIncome) mobileMonthlyIncome.innerText = formatCurrency(monthlyIncome);
    if (mobileMonthlTax) mobileMonthlTax.innerText = formatCurrency(yearlyTax / 12);
    if (mobileMonthlyNet) mobileMonthlyNet.innerText = formatCurrency(monthlyIncome - (yearlyTax / 12));
    if (mobileYearlyIncome) mobileYearlyIncome.innerText = formatCurrency(yearlyIncome);
    if (mobileYearlyTax) mobileYearlyTax.innerText = formatCurrency(yearlyTax);
    if (mobileYearlyNet) mobileYearlyNet.innerText = formatCurrency(yearlyIncome - yearlyTax);
    
    // Update the visual tax rate indicator
    updateTaxRateIndicator(monthlyIncome, yearlyTax);
}

function formatCurrency(num) {
    if (num === 0) return '₨ 0';
    return '₨ ' + Math.round(num).toLocaleString('en-PK');
}

// Update tax rate indicator
function updateTaxRateIndicator(monthlyIncome, yearlyTax) {
    const yearlyIncome = monthlyIncome * 12;
    const effectiveRate = yearlyIncome > 0 ? (yearlyTax / yearlyIncome) * 100 : 0;
    
    // Update desktop indicator
    const desktopRate = document.getElementById('effectiveTaxRate');
    const desktopBar = document.getElementById('taxRateBar');
    
    if (desktopRate) desktopRate.textContent = effectiveRate.toFixed(1) + '%';
    
    // Update mobile indicator
    const mobileRate = document.getElementById('mobileEffectiveTaxRate');
    const mobileBar = document.getElementById('mobileTaxRateBar');
    
    if (mobileRate) mobileRate.textContent = effectiveRate.toFixed(1) + '%';
    
    // Cap the visual at 35% (max rate) for better UX
    const visualProgress = Math.min(effectiveRate, 35);
    
    // Animate both progress bars
    setTimeout(() => {
        if (desktopBar) desktopBar.style.width = visualProgress + '%';
        if (mobileBar) mobileBar.style.width = visualProgress + '%';
    }, 300);
}

function updateYear() {
    const selectedYear = document.getElementById('taxYear').value;
    
    // Update URL for SEO without page reload using replaceState
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set('year', selectedYear);
    currentUrl.hash = '';
    window.history.replaceState({}, '', currentUrl.toString());
    
    // Immediately recalculate with new year - smooth transition
    calculateTax();
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const yearParam = urlParams.get('year');
    if (yearParam) {
        document.getElementById('taxYear').value = yearParam;
    }
    
    if(document.getElementById('monthlySalary').value) {
        calculateTax();
    }
};

/* --- SIDEBAR TOGGLE LOGIC (NEW) --- */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

/* --- FAQ TOGGLE FUNCTIONALITY --- */
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