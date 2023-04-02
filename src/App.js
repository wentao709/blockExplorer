import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [block, setBlock] = useState();

  useEffect(() => {
    async function getBlockNumber() {

      setBlockNumber(await alchemy.core.getBlockNumber());
      setBlock(await alchemy.core.getBlock());
    }
    console.log(block);
    const number = getBlockNumber();
    console.log(number);
  });

  return <div className="App">Block Number: {blockNumber}</div>;
}

export default App;
