// Check if MetaMask is available
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    alert('Please install MetaMask to use this feature!');
}

// Connect to MetaMask and display the account
const connectButton = document.getElementById('connectButton');
const accountDisplay = document.getElementById('account');

async function connectMetaMask() {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        accountDisplay.textContent = `Connected with: ${account}`;
    } catch (error) {
        console.error('Error connecting to MetaMask:', error);
    }
}

connectButton.addEventListener('click', connectMetaMask);

// Handle Land Registration Form
document.getElementById('land-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const ownerName = document.getElementById('owner-name').value;
    const landId = document.getElementById('land-id').value;
    const landLocation = document.getElementById('land-location').value;
    const landPrice = document.getElementById('land-price').value;

    if (!ownerName || !landId || !landLocation || !landPrice) {
        alert('Please fill in all fields.');
        return;
    }

    const landDetails = {
        ownerName,
        landId,
        landLocation,
        landPrice
    };

    try {
        console.log('Registering Land:', landDetails);
        alert('Land registered successfully!');
    } catch (error) {
        console.error('Error registering land:', error);
    }
});
