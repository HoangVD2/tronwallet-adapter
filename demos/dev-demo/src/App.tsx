import React from 'react';
// import {
//     WalletActionButton,
//     WalletConnectButton,
//     WalletDisconnectButton,
//     WalletSelectButton,
// } from '@tronweb3/tronwallet-adapter-react-ui';
// import { TronLinkAdapterDemo } from './TronLinkAdapterDemo.js';
import { LedgerAdapterDemo } from './LedgerAdapterDemo.js';

function App() {
    return (
        <div className="App">
            {/* <button onClick={() => setIsOpen((v) => !v)}>{isOpen ? 'fold' : 'expand'}</button>
            <Collapse isOpen={isOpen}>Collapse Content</Collapse> */}
            {/* <h2>WalletSelectButton</h2>
            <WalletSelectButton></WalletSelectButton>
            <h2>WalletConnectButton</h2>
            <WalletConnectButton></WalletConnectButton>
            <h2>WalletDisconnectButton</h2>
            <WalletDisconnectButton></WalletDisconnectButton>
            <h2>WalletActionButton</h2>
            <WalletActionButton></WalletActionButton> */}
            <LedgerAdapterDemo></LedgerAdapterDemo>
        </div>
    );
}

export default App;
