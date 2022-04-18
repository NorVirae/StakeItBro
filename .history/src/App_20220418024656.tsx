import React, { useState } from 'react';
import AccountInfoCard from './components/cards/account-info-card';
import AprCard from './components/cards/apr-card';
import './styles/app.css'

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  
  return (
    <div className="stake-container">
      <header>
        <nav>
            <a href='logo' className='logo'>Stake Bro</a>
            <ul>
              <li className='connect-wallet-btn'>Connect Wallet</li>
            </ul>
        </nav>
      </header>


      
      <main>
        <section className='info-global'>
          <div className='info-main'>
            <div className='inner-container-left'>
              <h1 className='earn-text'> Stake your FIS earn up-to</h1>
              <h1>100%<sub className='sub'>APR</sub></h1>

            </div>

            <div className='inner-container-right'>
              <p>Click here to Un-stake 'ur $FIS token form old website</p>
              <span>{"=>"}</span>
            </div>
          </div>

          <div className='public-stake-info'>
            <h3 className='total-locked'>Total Value locked</h3>
            <h1 className='total-locked-token'>3,987,834 FIS</h1>
            <h2 className='total-locked-dollars'>4,384,383 dollars</h2>

          </div>
          
        </section>

        <section className='connection-info'>
          {
          isWalletConnected?
          <>
            <div className='connection-info-text'>No Wallet connected</div>
            <div> Connect wallet to see your balance</div>
          </>
          :
          <>
          <div className='user-stake-info-container'>
            <AccountInfoCard title='Staking Balance' token='0.00' dollarEquiv='0.00'/>

            <AccountInfoCard title='All time Rewards' token='0.00' dollarEquiv='0.00'/>


            <div className='user-stake-info'>
              <h2 className='staking-balance'>Current Rewards</h2>
              <h1 className='token-balance-fis'>0.00 FIS</h1>
              <h2 className='token-balance-dollars'>$0.00</h2>
            </div>

          </div>

          <div className='info-redirect'>
            <h1>Actively Staking </h1>
            <h1>history </h1>

          </div>
          
          </>
          }
        </section>

        <section className='reward'>
          <AprCard/>
          <AprCard/>
          <AprCard/>
        </section>

      </main>

      <footer>
        <div className='copyright-info'>
          Copyright &copy; Xend finance 2022. All rights reserved.
        </div>
        <ul>
          <li>About</li>
          <li>Repo</li>

        </ul>
      </footer>
    
    </div>
  );
}

export default App;
