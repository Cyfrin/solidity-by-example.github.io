import component_abi_decode from "./pages/abi-decode"
import component_abi_encode from "./pages/abi-encode"
import component_app_airdrop from "./pages/app/airdrop"
import component_app_assembly_bin_exp from "./pages/app/assembly-bin-exp"
import component_app_bi_directional_payment_channel from "./pages/app/bi-directional-payment-channel"
import component_app_create2 from "./pages/app/create2"
import component_app_crowd_fund from "./pages/app/crowd-fund"
import component_app_deploy_any_contract from "./pages/app/deploy-any-contract"
import component_app_dutch_auction from "./pages/app/dutch-auction"
import component_app_english_auction from "./pages/app/english-auction"
import component_app_erc1155 from "./pages/app/erc1155"
import component_app_erc20 from "./pages/app/erc20"
import component_app_erc721 from "./pages/app/erc721"
import component_app_ether_wallet from "./pages/app/ether-wallet"
import component_app_gasless_token_transfer from "./pages/app/gasless-token-transfer"
import component_app_iterable_mapping from "./pages/app/iterable-mapping"
import component_app_merkle_tree from "./pages/app/merkle-tree"
import component_app_minimal_proxy from "./pages/app/minimal-proxy"
import component_app_multi_call from "./pages/app/multi-call"
import component_app_multi_delegatecall from "./pages/app/multi-delegatecall"
import component_app_multi_sig_wallet from "./pages/app/multi-sig-wallet"
import component_app_simple_bytecode_contract from "./pages/app/simple-bytecode-contract"
import component_app_time_lock from "./pages/app/time-lock"
import component_app_uni_directional_payment_channel from "./pages/app/uni-directional-payment-channel"
import component_app_upgradeable_proxy from "./pages/app/upgradeable-proxy"
import component_app_write_to_any_slot from "./pages/app/write-to-any-slot"
import component_array from "./pages/array"
import component_assembly_error from "./pages/assembly-error"
import component_assembly_if from "./pages/assembly-if"
import component_assembly_loop from "./pages/assembly-loop"
import component_assembly_math from "./pages/assembly-math"
import component_assembly_variable from "./pages/assembly-variable"
import component_bitwise from "./pages/bitwise"
import component_call from "./pages/call"
import component_calling_contract from "./pages/calling-contract"
import component_constants from "./pages/constants"
import component_constructor from "./pages/constructor"
import component_data_locations from "./pages/data-locations"
import component_defi_chainlink_price_oracle from "./pages/defi/chainlink-price-oracle"
import component_defi_chronicle_price_oracle from "./pages/defi/chronicle-price-oracle"
import component_defi_constant_product_amm from "./pages/defi/constant-product-amm"
import component_defi_constant_sum_amm from "./pages/defi/constant-sum-amm"
import component_defi_dai_proxy from "./pages/defi/dai-proxy"
import component_defi_discrete_staking_rewards from "./pages/defi/discrete-staking-rewards"
import component_defi_stable_swap_amm from "./pages/defi/stable-swap-amm"
import component_defi_staking_rewards from "./pages/defi/staking-rewards"
import component_defi_token_lock from "./pages/defi/token-lock"
import component_defi_uniswap_v2 from "./pages/defi/uniswap-v2"
import component_defi_uniswap_v2_add_remove_liquidity from "./pages/defi/uniswap-v2-add-remove-liquidity"
import component_defi_uniswap_v2_flash_swap from "./pages/defi/uniswap-v2-flash-swap"
import component_defi_uniswap_v2_optimal_one_sided_supply from "./pages/defi/uniswap-v2-optimal-one-sided-supply"
import component_defi_uniswap_v3_flash from "./pages/defi/uniswap-v3-flash"
import component_defi_uniswap_v3_flash_swap from "./pages/defi/uniswap-v3-flash-swap"
import component_defi_uniswap_v3_liquidity from "./pages/defi/uniswap-v3-liquidity"
import component_defi_uniswap_v3_swap from "./pages/defi/uniswap-v3-swap"
import component_defi_vault from "./pages/defi/vault"
import component_delegatecall from "./pages/delegatecall"
import component_enum from "./pages/enum"
import component_error from "./pages/error"
import component_ether_units from "./pages/ether-units"
import component_events from "./pages/events"
import component_events_advanced from "./pages/events-advanced"
import component_evm_memory from "./pages/evm/memory"
import component_evm_storage from "./pages/evm/storage"
import component_fallback from "./pages/fallback"
import component_first_app from "./pages/first-app"
import component_foundry_auth from "./pages/foundry/auth"
import component_foundry_basic from "./pages/foundry/basic"
import component_foundry_error from "./pages/foundry/error"
import component_foundry_event from "./pages/foundry/event"
import component_foundry_label from "./pages/foundry/label"
import component_foundry_mock_call from "./pages/foundry/mock-call"
import component_foundry_send from "./pages/foundry/send"
import component_foundry_sign from "./pages/foundry/sign"
import component_foundry_time from "./pages/foundry/time"
import component_function from "./pages/function"
import component_function_modifier from "./pages/function-modifier"
import component_function_selector from "./pages/function-selector"
import component_gas from "./pages/gas"
import component_gas_golf from "./pages/gas-golf"
import component_hacks_63_64_gas_rule from "./pages/hacks/63-64-gas-rule"
import component_hacks_accessing_private_data from "./pages/hacks/accessing-private-data"
import component_hacks_block_timestamp_manipulation from "./pages/hacks/block-timestamp-manipulation"
import component_hacks_contract_size from "./pages/hacks/contract-size"
import component_hacks_delegatecall from "./pages/hacks/delegatecall"
import component_hacks_denial_of_service from "./pages/hacks/denial-of-service"
import component_hacks_deploy_different_contracts_same_address from "./pages/hacks/deploy-different-contracts-same-address"
import component_hacks_front_running from "./pages/hacks/front-running"
import component_hacks_hiding_malicious_code_with_external_contract from "./pages/hacks/hiding-malicious-code-with-external-contract"
import component_hacks_honeypot from "./pages/hacks/honeypot"
import component_hacks_overflow from "./pages/hacks/overflow"
import component_hacks_phishing_with_tx_origin from "./pages/hacks/phishing-with-tx-origin"
import component_hacks_randomness from "./pages/hacks/randomness"
import component_hacks_re_entrancy from "./pages/hacks/re-entrancy"
import component_hacks_self_destruct from "./pages/hacks/self-destruct"
import component_hacks_signature_replay from "./pages/hacks/signature-replay"
import component_hacks_vault_inflation from "./pages/hacks/vault-inflation"
import component_hacks_weth_permit from "./pages/hacks/weth-permit"
import component_hashing from "./pages/hashing"
import component_hello_world from "./pages/hello-world"
import component_if_else from "./pages/if-else"
import component_immutable from "./pages/immutable"
import component_import from "./pages/import"
import component_inheritance from "./pages/inheritance"
import component_interface from "./pages/interface"
import component_library from "./pages/library"
import component_loop from "./pages/loop"
import component_mapping from "./pages/mapping"
import component_new_contract from "./pages/new-contract"
import component_payable from "./pages/payable"
import component_primitives from "./pages/primitives"
import component_sending_ether from "./pages/sending-ether"
import component_shadowing_inherited_state_variables from "./pages/shadowing-inherited-state-variables"
import component_signature from "./pages/signature"
import component_state_variables from "./pages/state-variables"
import component_structs from "./pages/structs"
import component_super from "./pages/super"
import component_tests_echidna from "./pages/tests/echidna"
import component_transient_storage from "./pages/transient-storage"
import component_try_catch from "./pages/try-catch"
import component_unchecked_math from "./pages/unchecked-math"
import component_user_defined_value_types from "./pages/user-defined-value-types"
import component_variables from "./pages/variables"
import component_view_and_pure_functions from "./pages/view-and-pure-functions"
import component_visibility from "./pages/visibility"
import component_ from "./pages"

interface Path {
  title: string
  path: string
}

interface Paths {
  prev: Path | null
  next: Path | null
}

interface Route {
  path: string
  component: React.FC<Paths>
  breakingChanges?: boolean
}

const routes: Route[] = [
  {
    path: "/abi-decode",
    component: component_abi_decode,
  },
  {
    path: "/abi-encode",
    component: component_abi_encode,
  },
  {
    path: "/app/airdrop",
    component: component_app_airdrop,
  },
  {
    path: "/app/assembly-bin-exp",
    component: component_app_assembly_bin_exp,
  },
  {
    path: "/app/bi-directional-payment-channel",
    component: component_app_bi_directional_payment_channel,
  },
  {
    path: "/app/create2",
    component: component_app_create2,
  },
  {
    path: "/app/crowd-fund",
    component: component_app_crowd_fund,
  },
  {
    path: "/app/deploy-any-contract",
    component: component_app_deploy_any_contract,
  },
  {
    path: "/app/dutch-auction",
    component: component_app_dutch_auction,
  },
  {
    path: "/app/english-auction",
    component: component_app_english_auction,
  },
  {
    path: "/app/erc1155",
    component: component_app_erc1155,
  },
  {
    path: "/app/erc20",
    component: component_app_erc20,
  },
  {
    path: "/app/erc721",
    component: component_app_erc721,
  },
  {
    path: "/app/ether-wallet",
    component: component_app_ether_wallet,
  },
  {
    path: "/app/gasless-token-transfer",
    component: component_app_gasless_token_transfer,
  },
  {
    path: "/app/iterable-mapping",
    component: component_app_iterable_mapping,
  },
  {
    path: "/app/merkle-tree",
    component: component_app_merkle_tree,
  },
  {
    path: "/app/minimal-proxy",
    component: component_app_minimal_proxy,
  },
  {
    path: "/app/multi-call",
    component: component_app_multi_call,
  },
  {
    path: "/app/multi-delegatecall",
    component: component_app_multi_delegatecall,
  },
  {
    path: "/app/multi-sig-wallet",
    component: component_app_multi_sig_wallet,
  },
  {
    path: "/app/simple-bytecode-contract",
    component: component_app_simple_bytecode_contract,
  },
  {
    path: "/app/time-lock",
    component: component_app_time_lock,
  },
  {
    path: "/app/uni-directional-payment-channel",
    component: component_app_uni_directional_payment_channel,
  },
  {
    path: "/app/upgradeable-proxy",
    component: component_app_upgradeable_proxy,
  },
  {
    path: "/app/write-to-any-slot",
    component: component_app_write_to_any_slot,
  },
  {
    path: "/array",
    component: component_array,
  },
  {
    path: "/assembly-error",
    component: component_assembly_error,
  },
  {
    path: "/assembly-if",
    component: component_assembly_if,
  },
  {
    path: "/assembly-loop",
    component: component_assembly_loop,
  },
  {
    path: "/assembly-math",
    component: component_assembly_math,
  },
  {
    path: "/assembly-variable",
    component: component_assembly_variable,
  },
  {
    path: "/bitwise",
    component: component_bitwise,
  },
  {
    path: "/call",
    component: component_call,
  },
  {
    path: "/calling-contract",
    component: component_calling_contract,
  },
  {
    path: "/constants",
    component: component_constants,
  },
  {
    path: "/constructor",
    component: component_constructor,
  },
  {
    path: "/data-locations",
    component: component_data_locations,
  },
  {
    path: "/defi/chainlink-price-oracle",
    component: component_defi_chainlink_price_oracle,
  },
  {
    path: "/defi/chronicle-price-oracle",
    component: component_defi_chronicle_price_oracle,
  },
  {
    path: "/defi/constant-product-amm",
    component: component_defi_constant_product_amm,
  },
  {
    path: "/defi/constant-sum-amm",
    component: component_defi_constant_sum_amm,
  },
  {
    path: "/defi/dai-proxy",
    component: component_defi_dai_proxy,
  },
  {
    path: "/defi/discrete-staking-rewards",
    component: component_defi_discrete_staking_rewards,
  },
  {
    path: "/defi/stable-swap-amm",
    component: component_defi_stable_swap_amm,
  },
  {
    path: "/defi/staking-rewards",
    component: component_defi_staking_rewards,
  },
  {
    path: "/defi/token-lock",
    component: component_defi_token_lock,
  },
  {
    path: "/defi/uniswap-v2",
    component: component_defi_uniswap_v2,
  },
  {
    path: "/defi/uniswap-v2-add-remove-liquidity",
    component: component_defi_uniswap_v2_add_remove_liquidity,
  },
  {
    path: "/defi/uniswap-v2-flash-swap",
    component: component_defi_uniswap_v2_flash_swap,
  },
  {
    path: "/defi/uniswap-v2-optimal-one-sided-supply",
    component: component_defi_uniswap_v2_optimal_one_sided_supply,
  },
  {
    path: "/defi/uniswap-v3-flash",
    component: component_defi_uniswap_v3_flash,
  },
  {
    path: "/defi/uniswap-v3-flash-swap",
    component: component_defi_uniswap_v3_flash_swap,
  },
  {
    path: "/defi/uniswap-v3-liquidity",
    component: component_defi_uniswap_v3_liquidity,
  },
  {
    path: "/defi/uniswap-v3-swap",
    component: component_defi_uniswap_v3_swap,
  },
  {
    path: "/defi/vault",
    component: component_defi_vault,
  },
  {
    path: "/delegatecall",
    component: component_delegatecall,
  },
  {
    path: "/enum",
    component: component_enum,
  },
  {
    path: "/error",
    component: component_error,
  },
  {
    path: "/ether-units",
    component: component_ether_units,
  },
  {
    path: "/events",
    component: component_events,
  },
  {
    path: "/events-advanced",
    component: component_events_advanced,
  },
  {
    path: "/evm/memory",
    component: component_evm_memory,
  },
  {
    path: "/evm/storage",
    component: component_evm_storage,
  },
  {
    path: "/fallback",
    component: component_fallback,
  },
  {
    path: "/first-app",
    component: component_first_app,
  },
  {
    path: "/foundry/auth",
    component: component_foundry_auth,
  },
  {
    path: "/foundry/basic",
    component: component_foundry_basic,
  },
  {
    path: "/foundry/error",
    component: component_foundry_error,
  },
  {
    path: "/foundry/event",
    component: component_foundry_event,
  },
  {
    path: "/foundry/label",
    component: component_foundry_label,
  },
  {
    path: "/foundry/mock-call",
    component: component_foundry_mock_call,
  },
  {
    path: "/foundry/send",
    component: component_foundry_send,
  },
  {
    path: "/foundry/sign",
    component: component_foundry_sign,
  },
  {
    path: "/foundry/time",
    component: component_foundry_time,
  },
  {
    path: "/function",
    component: component_function,
  },
  {
    path: "/function-modifier",
    component: component_function_modifier,
  },
  {
    path: "/function-selector",
    component: component_function_selector,
  },
  {
    path: "/gas",
    component: component_gas,
  },
  {
    path: "/gas-golf",
    component: component_gas_golf,
  },
  {
    path: "/hacks/63-64-gas-rule",
    component: component_hacks_63_64_gas_rule,
  },
  {
    path: "/hacks/accessing-private-data",
    component: component_hacks_accessing_private_data,
  },
  {
    path: "/hacks/block-timestamp-manipulation",
    component: component_hacks_block_timestamp_manipulation,
  },
  {
    path: "/hacks/contract-size",
    component: component_hacks_contract_size,
  },
  {
    path: "/hacks/delegatecall",
    component: component_hacks_delegatecall,
  },
  {
    path: "/hacks/denial-of-service",
    component: component_hacks_denial_of_service,
  },
  {
    path: "/hacks/deploy-different-contracts-same-address",
    component: component_hacks_deploy_different_contracts_same_address,
  },
  {
    path: "/hacks/front-running",
    component: component_hacks_front_running,
  },
  {
    path: "/hacks/hiding-malicious-code-with-external-contract",
    component: component_hacks_hiding_malicious_code_with_external_contract,
  },
  {
    path: "/hacks/honeypot",
    component: component_hacks_honeypot,
  },
  {
    path: "/hacks/overflow",
    component: component_hacks_overflow,
  },
  {
    path: "/hacks/phishing-with-tx-origin",
    component: component_hacks_phishing_with_tx_origin,
  },
  {
    path: "/hacks/randomness",
    component: component_hacks_randomness,
  },
  {
    path: "/hacks/re-entrancy",
    component: component_hacks_re_entrancy,
  },
  {
    path: "/hacks/self-destruct",
    component: component_hacks_self_destruct,
  },
  {
    path: "/hacks/signature-replay",
    component: component_hacks_signature_replay,
  },
  {
    path: "/hacks/vault-inflation",
    component: component_hacks_vault_inflation,
  },
  {
    path: "/hacks/weth-permit",
    component: component_hacks_weth_permit,
  },
  {
    path: "/hashing",
    component: component_hashing,
  },
  {
    path: "/hello-world",
    component: component_hello_world,
  },
  {
    path: "/if-else",
    component: component_if_else,
  },
  {
    path: "/immutable",
    component: component_immutable,
  },
  {
    path: "/import",
    component: component_import,
  },
  {
    path: "/inheritance",
    component: component_inheritance,
  },
  {
    path: "/interface",
    component: component_interface,
  },
  {
    path: "/library",
    component: component_library,
  },
  {
    path: "/loop",
    component: component_loop,
  },
  {
    path: "/mapping",
    component: component_mapping,
  },
  {
    path: "/new-contract",
    component: component_new_contract,
  },
  {
    path: "/payable",
    component: component_payable,
  },
  {
    path: "/primitives",
    component: component_primitives,
  },
  {
    path: "/sending-ether",
    component: component_sending_ether,
  },
  {
    path: "/shadowing-inherited-state-variables",
    component: component_shadowing_inherited_state_variables,
  },
  {
    path: "/signature",
    component: component_signature,
  },
  {
    path: "/state-variables",
    component: component_state_variables,
  },
  {
    path: "/structs",
    component: component_structs,
  },
  {
    path: "/super",
    component: component_super,
  },
  {
    path: "/tests/echidna",
    component: component_tests_echidna,
  },
  {
    path: "/transient-storage",
    component: component_transient_storage,
  },
  {
    path: "/try-catch",
    component: component_try_catch,
  },
  {
    path: "/unchecked-math",
    component: component_unchecked_math,
  },
  {
    path: "/user-defined-value-types",
    component: component_user_defined_value_types,
  },
  {
    path: "/variables",
    component: component_variables,
  },
  {
    path: "/view-and-pure-functions",
    component: component_view_and_pure_functions,
  },
  {
    path: "/visibility",
    component: component_visibility,
  },
  {
    path: "",
    component: component_,
  },
]

export default routes
