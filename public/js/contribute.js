// Contribution flow state
let contributionState = {
    step: 1,
    amount: 0,
    provider: null
};

// Initialize contribution page
document.addEventListener('DOMContentLoaded', function() {
    setupAmountSelection();
    setupProviderSelection();
    setupNavigation();
    setupModalClose();
});

// Setup amount selection step
function setupAmountSelection() {
    const amountInput = document.getElementById('amount-input');
    const amountButtons = document.querySelectorAll('.amount-btn');
    const nextStepBtn = document.getElementById('next-step-btn');

    // Handle amount button clicks
    amountButtons.forEach(button => {
        button.addEventListener('click', () => {
            const amount = parseInt(button.dataset.amount);
            amountInput.value = amount;
            contributionState.amount = amount;
            
            // Update button states
            amountButtons.forEach(btn => {
                btn.classList.remove('border-primary/20', 'bg-surface-container-high');
                btn.classList.add('border-transparent', 'bg-surface-container');
            });
            button.classList.remove('border-transparent', 'bg-surface-container');
            button.classList.add('border-primary/20', 'bg-surface-container-high');
        });
    });

    // Handle manual amount input
    amountInput.addEventListener('input', () => {
        const amount = parseInt(amountInput.value) || 0;
        contributionState.amount = amount;
        
        // Clear button selections when manually entering amount
        amountButtons.forEach(btn => {
            btn.classList.remove('border-primary/20', 'bg-surface-container-high');
            btn.classList.add('border-transparent', 'bg-surface-container');
        });
    });

    // Handle next step button
    nextStepBtn.addEventListener('click', () => {
        if (contributionState.amount > 0) {
            moveToStep(2);
        } else {
            // Shake animation for invalid input
            amountInput.classList.add('animate-pulse', 'ring-2', 'ring-error');
            setTimeout(() => {
                amountInput.classList.remove('animate-pulse', 'ring-2', 'ring-error');
            }, 1000);
        }
    });
}

// Setup provider selection step
function setupProviderSelection() {
    const providerButtons = document.querySelectorAll('.provider-btn');
    const confirmPaymentBtn = document.getElementById('confirm-payment');
    const backToAmountBtn = document.getElementById('back-to-amount');

    // Handle provider selection
    providerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const provider = button.dataset.provider;
            contributionState.provider = provider;
            
            // Update button states
            providerButtons.forEach(btn => {
                const icon = btn.querySelector('.material-symbols-outlined');
                icon.textContent = 'radio_button_unchecked';
                icon.className = 'material-symbols-outlined text-surface-variant';
                btn.classList.remove('border-secondary-container', 'border-error');
                btn.classList.add('border-transparent');
            });
            
            // Update selected button
            const selectedIcon = button.querySelector('.material-symbols-outlined');
            selectedIcon.textContent = 'radio_button_checked';
            
            if (provider === 'mtn') {
                selectedIcon.className = 'material-symbols-outlined text-secondary-container';
                button.classList.remove('border-transparent');
                button.classList.add('border-secondary-container');
            } else {
                selectedIcon.className = 'material-symbols-outlined text-error';
                button.classList.remove('border-transparent');
                button.classList.add('border-error');
            }
        });
    });

    // Handle confirm payment
    confirmPaymentBtn.addEventListener('click', () => {
        if (contributionState.provider) {
            processPayment();
        } else {
            // Shake animation for no provider selected
            providerButtons.forEach(btn => {
                btn.classList.add('animate-pulse');
            });
            setTimeout(() => {
                providerButtons.forEach(btn => {
                    btn.classList.remove('animate-pulse');
                });
            }, 1000);
        }
    });

    // Handle back button
    backToAmountBtn.addEventListener('click', () => {
        moveToStep(1);
    });
}

// Move between steps
function moveToStep(step) {
    contributionState.step = step;
    
    // Update progress indicator
    const currentStepEl = document.getElementById('current-step');
    const stepDescriptionEl = document.getElementById('step-description');
    const progressIndicatorEl = document.getElementById('progress-indicator');
    
    const step1El = document.getElementById('step-1');
    const step2El = document.getElementById('step-2');
    
    if (step === 1) {
        currentStepEl.textContent = '1';
        stepDescriptionEl.textContent = 'Amount Selection';
        progressIndicatorEl.style.width = '50%';
        
        step1El.classList.remove('hidden');
        step2El.classList.add('hidden');
    } else if (step === 2) {
        currentStepEl.textContent = '2';
        stepDescriptionEl.textContent = 'Payment Provider';
        progressIndicatorEl.style.width = '100%';
        
        step1El.classList.add('hidden');
        step2El.classList.remove('hidden');
    }
}

// Process payment (simulation)
function processPayment() {
    const confirmBtn = document.getElementById('confirm-payment');
    const originalContent = confirmBtn.innerHTML;
    
    // Show loading state
    confirmBtn.innerHTML = `
        <span class="material-symbols-outlined text-xl animate-spin">refresh</span>
        Processing Payment...
    `;
    confirmBtn.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        // Show success state
        confirmBtn.innerHTML = `
            <span class="material-symbols-outlined text-xl">check_circle</span>
            Payment Successful!
        `;
        confirmBtn.classList.remove('bg-primary', 'text-on-primary');
        confirmBtn.classList.add('bg-primary-container', 'text-on-primary-container');
        
        // Show success message and redirect
        setTimeout(() => {
            showSuccessModal();
        }, 1500);
    }, 2000);
}

// Show success modal
function showSuccessModal() {
    const modalOverlay = document.querySelector('.glass-overlay');
    const modalContainer = modalOverlay.querySelector('.bg-surface-container-low');
    
    // Replace modal content with success message
    modalContainer.innerHTML = `
        <div class="px-6 py-8 text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">check_circle</span>
            </div>
            <h2 class="font-headline font-bold text-2xl tracking-tight text-primary mb-4">Thank You!</h2>
            <p class="text-on-surface-variant text-sm leading-relaxed mb-8">
                Your contribution of <span class="font-bold text-primary">RWF ${contributionState.amount.toLocaleString()}</span> has been successfully processed.
            </p>
            <div class="space-y-3">
                <button class="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-all" onclick="window.location.href='index.html'">
                    Return to Home
                </button>
                <button class="w-full bg-surface-container text-on-surface font-headline font-bold py-4 rounded-lg hover:bg-surface-container-high transition-all" onclick="window.location.href='campaign.html'">
                    View Campaign
                </button>
            </div>
        </div>
    `;
}

// Setup modal close
function setupModalClose() {
    const closeModalBtn = document.getElementById('close-modal');
    closeModalBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

// Setup navigation (ESC key to close)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.location.href = 'index.html';
    }
});
