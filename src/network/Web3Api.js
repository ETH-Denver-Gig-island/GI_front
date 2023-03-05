import Web3 from "web3";

export const WEB3_ERRORS = {
    SUCCESS: "SUCCESS",
    NO_DATA: "NO_DATA",
    NO_WALLET: "NO_WALLET",
    NET_ERROR: "NET_ERROR",
    REJECTED: "REJECTED",
    IPFS_ERROR: "IPFS_ERROR",
    META_ERROR: "META_ERROR",
    MINT_ERROR: "MINT_ERROR",
    NO_FILE: "NO_FILE",
};

class Web3API {
    // getContract = (web3) => {
    //     const contract = new web3.eth.Contract(
    //         Factory.abi,
    //         Factory.networks['9000'].address
    //     );
    //
    //     return contract;
    // };

    connect = async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                const netId = await window.ethereum.request({
                    method: "net_version",
                });

                if (netId === "5") {
                    const accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    console.log(accounts);

                    return {
                        account: accounts[0],
                        web3,
                    };
                } else {
                    return WEB3_ERRORS.NET_ERROR;
                }
            } catch (e) {
                return WEB3_ERRORS.REJECTED;
            }
        } else {
            return WEB3_ERRORS.NO_WALLET;
        }
    };
}

export default Web3API;
