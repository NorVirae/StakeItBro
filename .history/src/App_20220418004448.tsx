import React from 'react';

function App() {
  return (
    <div className="stake-container">
      <header>
        <nav>
            <a href='logo'>Stake Bro</a>
            <ul>
              <li>Connect Wallet</li>
            </ul>
        </nav>
      </header>
      
      <main>
        <section className='info-global'>
          <div className='inner-container-left'>
            <h1> Stake your FIS earn up-to</h1>
            <h1>100%<sub>APR</sub></h1>

          </div>

          <div className='inner-container-right'>
            <p>Click here to Un-stake 'ur $FIS token form old website</p>
            <span>{"=>"}</span>
          </div>
        </section>

        <section className='connection-info'>
          <div>No Wallet connected</div>
          <div> Connect wallet to see your balance</div>
        </section>

        <section className='reward'>
          <div className='apr-ca'
        </section>

      </main>

      <footer>

      </footer>
    
    </div>
  );
}

export default App;
