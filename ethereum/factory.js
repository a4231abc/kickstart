import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    // 'CampaignFactory contract address'
    '0xd9145CCE52D386f254917e481eB44e9943F39138' //Use Remix create
);

export default instance;