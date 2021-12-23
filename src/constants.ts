export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/wkich/hector-subgraph";
export const EPOCH_INTERVAL = 14400;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 2;

export const TOKEN_DECIMALS = 9;

export const DEFAULT_NETWORK = 43114;

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  43114: {
    MIM_ADDRESS: "0x130966628846bfd36ff31a822705796e8cb8c18d", // duplicate
    // USDC_ADDRESS: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
    NOVA_ADDRESS: "0xf5197C628915ff90FD565520094C15189229392b",
    STAKING_ADDRESS: "0x39d97651fde0550171e253A52d26b5153D87628e", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xfa0055D38329004B56153579d7D5E72cF03849F1", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0xde698Aa043F4A9548AAc041434473E9e53991430",
    OLD_STAKING_HELPER_ADDRESS: "0xeF70DA041AecbA26187191630275ba7519F4Cc5e",
    OLD_SNOVA_ADDRESS: "0x5Ee5fDd4077CaC9138BB854FAED2A40B2482cFd9",
    SNOVA_ADDRESS: "0x625E959554fDba0B123d8Fa97Dc3ffff24f2a55c",
    DISTRIBUTOR_ADDRESS: "0x41400d445359f5aD51650C76746C98D79174b2e3",
    BONDINGCALC_ADDRESS: "0x51D73Fc89df19a208E8DD21d30a80c40A43d712F",
    BONDINGCALC_ADDRESS1: "0xA55A711Cf7adE1552f77A7127135C5156f75c83C",
    TREASURY_ADDRESS: "0x51747F6B5286115f81fd24c5F194236e8dd84a3C",
    REDEEM_HELPER_ADDRESS: "0xD4ec9b6E1325feb5d2E9dd4AFDF9187C9B717bC7",
    USDT_ADDRESS: "0xc7198437980c041c805a1edcba50c1ce5db95118",
    // DAI_ADDRESS: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
    // USDC_ADDRESS: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
    // MIM_ADDRESS: "0x130966628846bfd36ff31a822705796e8cb8c18d",
    // FRAX_ADDRESS: "0xdc301622e621166bd8e82f2ca0a26c13ad0be355",
    // WFTM_ADDRESS: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
    // DAILP_ADDRESS: "0xbc0eecdA2d8141e3a26D2535C57cadcb1095bca9",
    // USDCLP_ADDRESS: "0xd661952749f05acc40503404938a91af9ac1473b",
    // FRAXLP_ADDRESS: "0x0f8D6953F58C0dd38077495ACA64cbd1c76b7501",

    // HEC_ADDRESS: "0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
    // SHEC_ADDRESS: "0x75bdef24285013387a47775828bec90b91ca9a5f",
    // WSHEC_ADDRESS: "0x94CcF60f700146BeA8eF7832820800E2dFa92EdA",

    // STAKING_ADDRESS: "0xD12930C8deeDafD788F437879cbA1Ad1E3908Cc5", // The new staking contract
    // STAKING_HELPER_ADDRESS: "0x2694c2AAab19950B37FE47478276B5D4a2A73C45", // Helper contract used for Staking only
    // DISTRIBUTOR_ADDRESS: "0x41400d445359f5aD51650C76746C98D79174b2e3",
    // OLD_STAKING_ADDRESS: "0x9ae7972BA46933B3B20aaE7Acbf6C311847aCA40",
    // OLD_STAKING_HELPER_ADDRESS: "0x2ca8913173D36021dC56922b5db8C428C3fdb146",
    // OLD_SHEC_ADDRESS: "0x36F26880C6406b967bDb9901CDe43ABC9D53f106",

    // BONDINGCALC_ADDRESS: "0xA36De21abd90b27e5EfF108D761Ab4fe06fD4Ab4",
    // gOHMBONDINGCALC_ADDRESS: "0xC13E8C5465998BDD1D91952243774d55B12dBEd0",
    // BONDINGCALC_ADDRESS1: "0x783A734D5C65e44D3CC0C74e331C4d4F23407E64",
    // TREASURY_ADDRESS: "0xCB54EA94191B280C296E6ff0E37c7e76Ad42dC6A",
    // REDEEM_HELPER_ADDRESS: "0xe78D7ECe7969d26Ae39b2d86BbC04Ae32784daF2",
  },
};

export const messages = {
  please_connect: "Please connect your wallet to the Fantom network to use Wonderland.",
  please_connect_wallet: "Please connect your wallet.",
  try_mint_more: (value: string) => `You're trying to mint more than the maximum payout available! The maximum mint payout is ${value} HEC.`,
  before_minting: "Before minting, enter a value.",
  existing_mint:
      "You have an existing mint. Minting will reset your vesting period and forfeit any pending claimable rewards. We recommend claiming rewards first or using a fresh wallet. Do you still wish to proceed?",
  before_stake: "Before staking, enter a value.",
  before_unstake: "Before un staking, enter a value.",
  tx_successfully_send: "Your transaction was successful",
  your_balance_updated: "Your balance was successfully updated",
  nothing_to_claim: "You have nothing to claim",
  something_wrong: "Something went wrong",
  switch_to_fantom: "Switch to the Fantom network?",
  slippage_too_small: "Slippage too small",
  slippage_too_big: "Slippage too big",
  your_balance_update_soon: "Your balance will update soon",
};
