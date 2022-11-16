export interface networkConfigItem {
    name?: string
    auctionFactory?: string 
    auctionImplementation1?: string
    auctionImplementation2?: string
    auctionImplementation3?: string
    mDAI?: string
    NFT?: string
    DAI?: string
    ChainLinkAuto?: string
    DAO?: string
    GovernanceToken?: string
    TimeLock?: string
  }
export interface networkConfigInfo {
    [key: number]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
    31337: {
        name: "localhost",
        auctionFactory: "",
        auctionImplementation1: "",
        mDAI: "",
        NFT: "",
    },

    5: {
        name: "goerli",
        auctionFactory: "",
        auctionImplementation1: "",
        mDAI: "",
        NFT: "",
    },

    80001: {
        name: "mumbai",
        auctionFactory: "",
        auctionImplementation1: "",
        auctionImplementation2: "",
        auctionImplementation3: "",
        mDAI: "",
        NFT: "",
        DAO: "",
        ChainLinkAuto: "",
        GovernanceToken: "",
        TimeLock: ""
    },

    1: {
        name: "mainnet",
        auctionFactory: "",
        auctionImplementation1: "",
        mDAI: "",
        NFT: "",
    },
}

export const developmentChains = ["hardhat", "localhost"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6