// Check if MetaMask is installed
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
} else {
  alert('Please install MetaMask to use this feature!');
}

// MetaMask connection
const connectButton = document.getElementById('connectButton');
const accountDisplay = document.getElementById('account');

async function connectMetaMask() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  accountDisplay.textContent = `Connected with: ${account}`;
}

connectButton.addEventListener('click', connectMetaMask);

// Land registration logic
document.getElementById('land-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const ownerName = document.getElementById('owner-name').value;
  const landId = document.getElementById('land-id').value;
  const landLocation = document.getElementById('land-location').value;
  const landPrice = document.getElementById('land-price').value;

  if (!ownerName || !landId || !landLocation || !landPrice) {
      alert("Please fill in all fields.");
      return;
  }

  const landDetails = {
      ownerName,
      landId,
      landLocation,
      landPrice
  };

  try {
      // Simulate the blockchain transaction (could be connected to a smart contract later)
      console.log('Registering Land:', landDetails);
      alert('Land registered successfully!');
  } catch (error) {
      console.error('Error registering land:', error);
  }
});
