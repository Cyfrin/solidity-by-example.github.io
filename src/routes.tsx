import component_app_bi_directional_payment_channel from "./pages/app/bi-directional-payment-channel"
import component_app_create2 from "./pages/app/create2"
import component_app_deploy_any_contract from "./pages/app/deploy-any-contract"
import component_app_dutch_auction from "./pages/app/dutch-auction"
import component_app_english_auction from "./pages/app/english-auction"
import component_app_erc20 from "./pages/app/erc20"
import component_app_erc721 from "./pages/app/erc721"
import component_app_ether_wallet from "./pages/app/ether-wallet"
import component_app_iterable_mapping from "./pages/app/iterable-mapping"
import component_app_merkle_tree from "./pages/app/merkle-tree"
import component_app_minimal_proxy from "./pages/app/minimal-proxy"
import component_app_multi_sig_wallet from "./pages/app/multi-sig-wallet"
import component_app_uni_directional_payment_channel from "./pages/app/uni-directional-payment-channel"
import component_array from "./pages/array"
import component_call from "./pages/call"
import component_calling_contract from "./pages/calling-contract"
import component_constants from "./pages/constants"
import component_constructor from "./pages/constructor"
import component_data_locations from "./pages/data-locations"
import component_defi_chainlink_price_oracle from "./pages/defi/chainlink-price-oracle"
import component_defi_staking_rewards from "./pages/defi/staking-rewards"
import component_defi_uniswap_v2 from "./pages/defi/uniswap-v2"
import component_defi_uniswap_v2_add_remove_liquidity from "./pages/defi/uniswap-v2-add-remove-liquidity"
import component_defi_uniswap_v2_optimal_one_sided_supply from "./pages/defi/uniswap-v2-optimal-one-sided-supply"
import component_delegatecall from "./pages/delegatecall"
import component_enum from "./pages/enum"
import component_error from "./pages/error"
import component_ether_units from "./pages/ether-units"
import component_events from "./pages/events"
import component_fallback from "./pages/fallback"
import component_first_app from "./pages/first-app"
import component_function from "./pages/function"
import component_function_modifier from "./pages/function-modifier"
import component_function_selector from "./pages/function-selector"
import component_gas from "./pages/gas"
import component_hacks_accessing_private_data from "./pages/hacks/accessing-private-data"
import component_hacks_block_timestamp_manipulation from "./pages/hacks/block-timestamp-manipulation"
import component_hacks_contract_size from "./pages/hacks/contract-size"
import component_hacks_delegatecall from "./pages/hacks/delegatecall"
import component_hacks_denial_of_service from "./pages/hacks/denial-of-service"
import component_hacks_front_running from "./pages/hacks/front-running"
import component_hacks_hiding_malicious_code_with_external_contract from "./pages/hacks/hiding-malicious-code-with-external-contract"
import component_hacks_honeypot from "./pages/hacks/honeypot"
import component_hacks_overflow from "./pages/hacks/overflow"
import component_hacks_phishing_with_tx_origin from "./pages/hacks/phishing-with-tx-origin"
import component_hacks_randomness from "./pages/hacks/randomness"
import component_hacks_re_entrancy from "./pages/hacks/re-entrancy"
import component_hacks_self_destruct from "./pages/hacks/self-destruct"
import component_hacks_signature_replay from "./pages/hacks/signature-replay"
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
import component_try_catch from "./pages/try-catch"
import component_variables from "./pages/variables"
import component_view_and_pure_functions from "./pages/view-and-pure-functions"
import component_visibility from "./pages/visibility"
import component_ from "./pages"

interface Route {
  path: string
  component: () => JSX.Element
  breakingChanges?: boolean
}

const routes: Route[] = [
    {
        path: "/app/bi-directional-payment-channel",
        component: component_app_bi_directional_payment_channel
    },
    {
        path: "/app/create2",
        component: component_app_create2
    },
    {
        path: "/app/deploy-any-contract",
        component: component_app_deploy_any_contract
    },
    {
        path: "/app/dutch-auction",
        component: component_app_dutch_auction
    },
    {
        path: "/app/english-auction",
        component: component_app_english_auction
    },
    {
        path: "/app/erc20",
        component: component_app_erc20
    },
    {
        path: "/app/erc721",
        component: component_app_erc721
    },
    {
        path: "/app/ether-wallet",
        component: component_app_ether_wallet
    },
    {
        path: "/app/iterable-mapping",
        component: component_app_iterable_mapping
    },
    {
        path: "/app/merkle-tree",
        component: component_app_merkle_tree
    },
    {
        path: "/app/minimal-proxy",
        component: component_app_minimal_proxy
    },
    {
        path: "/app/multi-sig-wallet",
        component: component_app_multi_sig_wallet
    },
    {
        path: "/app/uni-directional-payment-channel",
        component: component_app_uni_directional_payment_channel
    },
    {
        path: "/array",
        component: component_array
    },
    {
        path: "/call",
        component: component_call
    },
    {
        path: "/calling-contract",
        component: component_calling_contract
    },
    {
        path: "/constants",
        component: component_constants
    },
    {
        path: "/constructor",
        component: component_constructor
    },
    {
        path: "/data-locations",
        component: component_data_locations
    },
    {
        path: "/defi/chainlink-price-oracle",
        component: component_defi_chainlink_price_oracle
    },
    {
        path: "/defi/staking-rewards",
        component: component_defi_staking_rewards
    },
    {
        path: "/defi/uniswap-v2",
        component: component_defi_uniswap_v2
    },
    {
        path: "/defi/uniswap-v2-add-remove-liquidity",
        component: component_defi_uniswap_v2_add_remove_liquidity
    },
    {
        path: "/defi/uniswap-v2-optimal-one-sided-supply",
        component: component_defi_uniswap_v2_optimal_one_sided_supply
    },
    {
        path: "/delegatecall",
        component: component_delegatecall
    },
    {
        path: "/enum",
        component: component_enum
    },
    {
        path: "/error",
        component: component_error
    },
    {
        path: "/ether-units",
        component: component_ether_units
    },
    {
        path: "/events",
        component: component_events
    },
    {
        path: "/fallback",
        component: component_fallback
    },
    {
        path: "/first-app",
        component: component_first_app
    },
    {
        path: "/function",
        component: component_function
    },
    {
        path: "/function-modifier",
        component: component_function_modifier
    },
    {
        path: "/function-selector",
        component: component_function_selector
    },
    {
        path: "/gas",
        component: component_gas
    },
    {
        path: "/hacks/accessing-private-data",
        component: component_hacks_accessing_private_data
    },
    {
        path: "/hacks/block-timestamp-manipulation",
        component: component_hacks_block_timestamp_manipulation
    },
    {
        path: "/hacks/contract-size",
        component: component_hacks_contract_size
    },
    {
        path: "/hacks/delegatecall",
        component: component_hacks_delegatecall
    },
    {
        path: "/hacks/denial-of-service",
        component: component_hacks_denial_of_service
    },
    {
        path: "/hacks/front-running",
        component: component_hacks_front_running
    },
    {
        path: "/hacks/hiding-malicious-code-with-external-contract",
        component: component_hacks_hiding_malicious_code_with_external_contract
    },
    {
        path: "/hacks/honeypot",
        component: component_hacks_honeypot
    },
    {
        path: "/hacks/overflow",
        component: component_hacks_overflow
    },
    {
        path: "/hacks/phishing-with-tx-origin",
        component: component_hacks_phishing_with_tx_origin
    },
    {
        path: "/hacks/randomness",
        component: component_hacks_randomness
    },
    {
        path: "/hacks/re-entrancy",
        component: component_hacks_re_entrancy
    },
    {
        path: "/hacks/self-destruct",
        component: component_hacks_self_destruct
    },
    {
        path: "/hacks/signature-replay",
        component: component_hacks_signature_replay
    },
    {
        path: "/hashing",
        component: component_hashing
    },
    {
        path: "/hello-world",
        component: component_hello_world
    },
    {
        path: "/if-else",
        component: component_if_else
    },
    {
        path: "/immutable",
        component: component_immutable
    },
    {
        path: "/import",
        component: component_import
    },
    {
        path: "/inheritance",
        component: component_inheritance
    },
    {
        path: "/interface",
        component: component_interface
    },
    {
        path: "/library",
        component: component_library
    },
    {
        path: "/loop",
        component: component_loop
    },
    {
        path: "/mapping",
        component: component_mapping
    },
    {
        path: "/new-contract",
        component: component_new_contract
    },
    {
        path: "/payable",
        component: component_payable
    },
    {
        path: "/primitives",
        component: component_primitives
    },
    {
        path: "/sending-ether",
        component: component_sending_ether
    },
    {
        path: "/shadowing-inherited-state-variables",
        component: component_shadowing_inherited_state_variables
    },
    {
        path: "/signature",
        component: component_signature
    },
    {
        path: "/state-variables",
        component: component_state_variables
    },
    {
        path: "/structs",
        component: component_structs
    },
    {
        path: "/super",
        component: component_super
    },
    {
        path: "/try-catch",
        component: component_try_catch
    },
    {
        path: "/variables",
        component: component_variables
    },
    {
        path: "/view-and-pure-functions",
        component: component_view_and_pure_functions
    },
    {
        path: "/visibility",
        component: component_visibility
    },
    {
        path: "",
        component: component_
    },
]

export default routes