import {React,useState,useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';



const Navbar = () => {
    const [walletAddress, setWalletAddress] = useState(null);


    useEffect(() => {
        const address = sessionStorage.getItem("accountAddress");  
        if (address) {
          setWalletAddress(address);
        }
   
    }, []);


     const connectMetaMaskFunc = async (SelectedChain) => {
        console.log("SelectedChain", SelectedChain);
        if (window.ethereum) {
          try {
            // Switching chain and connecting to MetaMask
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: SelectedChain === "Polygon" ? "0x13881" : "0x5" }],
            });
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      
            // Handling the connected account
            handleConnectedAccount(accounts);
      
            // Adding an event listener to handle account changes
            window.ethereum.on('accountsChanged', handleConnectedAccount);
      
          } catch (error) {
            console.error('Error:', error);
          }
        } else {
          console.error('MetaMask not found.');
        }
      }

      const handleConnectedAccount = (accounts) => {
        if (accounts.length > 0) {
          const currentAccount = accounts[0];
          console.log('Connected Account Address:', currentAccount);
      
          // Store the connected account address in session storage
          sessionStorage.setItem("accountAddress", currentAccount);
          sessionStorage.setItem("walletType", "metaMask");
      
          // Update the walletAddress state
          setWalletAddress(currentAccount);
      
          // You can perform further actions with the connected account here.
        } else {
          console.log('No connected accounts.');
        }
      };
      
    
  return (
    <div className="header-container">
        <Link to='/hero'>
    <h1 className='logo'>AI-HEALTH LEDGER</h1>
        </Link>
    
    <div className="navbar-container">
      <button onClick={connectMetaMaskFunc} className="connect-button">
        {walletAddress ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}` : "Connect Wallet"}
      </button>
    </div>
  </div>
  
  )
}

export default Navbar
