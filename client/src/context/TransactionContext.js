import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/connect";

//スマートコントラクトを取得
    const getSmartContract = () => {
        //window.ethereum -> インストールしている状態で見ることができるwindow
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // イーサを送信し、ブロックチェーン内の状態を変更するために支払うことができます。
        // これには、アカウントの署名者が必要です...
        const signer = provider.getSigner();

        const transactionContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
            );

        console.log(provider, signer, transactionContract);

        return transactionContract;
    
    };