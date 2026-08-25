---
titel: Current State Assessment — Ethereum in Operational State Q1 2026
nummer: 4
befund: "How does Ethereum perform against the twelve evaluation criteria in operation? This chapter delivers the current-state assessment — the baseline for the target-state comparison."
sprache: en
---

The preceding chapters established the theoretical framework and the empirical foundation on which the assessment of the concrete subject rests. Chapter 2 presented the evaluation framework with its twelve criteria across three hierarchical levels, documented the assessment logic with its four-tier scale and the M3 cascade, and defined the scope boundaries of the investigation. Chapter 3 validated the twelve criteria against seven structurally distinct reference infrastructures. They are now applied.

Sections 4.1 through 4.6 describe Ethereum's architecture, the transaction lifecycle, the security economics, the scaling model, the governance structures, and the institutional embedding of the system in the operational state of the first quarter of 2026. Sections 4.7 through 4.10 apply the twelve criteria to this described subject and formulate the M3 overall verdict.

The reference date for all network data is 27 March 2026, unless otherwise specified. All quantitative figures reflect a snapshot of a living infrastructure whose market shares, validator counts, and value aggregates continuously shift. The underlying architecture and the structural findings derived from it, by contrast, possess considerably greater permanence.

## 4.1 Architectural Foundations

### Historical Classification and Development Path

Ethereum was launched as a public network on 30 July 2015, financed through a crowdsale in 2014, and differed from Bitcoin, the then-dominant blockchain technology, through a central design decision: it was not conceived as a payment system, but as a programmable platform on which arbitrary code could be executed.<a href="#fn-1" id="fnref-1"><sup>1</sup></a> The white paper that Vitalik Buterin published in 2014 described a system in which smart contracts operate as self-executing programs on a shared state database maintained by a decentralized network of equal nodes. The technical specification of this system was presented by Gavin Wood in the same year in the Yellow Paper, which formally defined the Ethereum Virtual Machine and still serves today, in its current Berlin version of 2024, as the reference document for protocol mechanics.<a href="#fn-2" id="fnref-2"><sup>2</sup></a>

In its first seven years, Ethereum operated under a Proof-of-Work consensus mechanism, in which miners competed through the deployment of computing power for the right to produce new blocks. On 15 September 2022, the network executed the transition to Proof of Stake with the so-called Merge, a consensus mechanism in which validators acquire the right to produce blocks by depositing capital. The fundamental idea behind Proof of Stake is to establish network security through economic stake rather than computing power: validators deposit capital as collateral and risk its loss upon misconduct, so that economic risk replaces energy expenditure as the security mechanism. The Merge reduced the energy consumption of the network by 99.95 percent.<a href="#fn-3" id="fnref-3"><sup>3</sup></a>

In June 2016, barely a year after launch, the first decentralized autonomous organization on Ethereum, known simply as The DAO, was exploited through a vulnerability in the smart contract code, with approximately 60 million US dollars in ETH withdrawn. The Ethereum community opted for a hard fork that reversed the transaction, a decision that split the network into Ethereum and Ethereum Classic. The DAO fork shows that Ethereum's community was capable of action in an existential crisis, and it marks the historical moment after which the community in practice decided that social intervention in the state of the system is possible, even if it has never been repeated since.

Since the Merge, Ethereum has undergone four protocol upgrades. Shapella in April 2023 enabled for the first time the withdrawal of staked ETH. Dencun in March 2024 introduced Blob transactions, enabling Layer-2 Rollups to anchor data on the base layer at a fraction of previous costs. Pectra on 7 May 2025 raised the maximum effective balance per validator from 32 to 2,048 ETH and introduced with EIP-7702 the first protocol-native form of Account Abstraction. Fusaka on 3 December 2025 implemented PeerDAS, a peer-to-peer-based Data Availability Sampling that reduces bandwidth requirements on validators by approximately 85 percent.

### The Two-Client Architecture

The Ethereum network consists of 14,339 nodes distributed across the public internet that collectively maintain the state of the system.<a href="#fn-4" id="fnref-4"><sup>4</sup></a> Each node simultaneously operates two software components: a Consensus Layer Client, which manages the Proof-of-Stake consensus and communicates with other Consensus Clients via the libP2P network protocol, and an Execution Layer Client, which executes smart contracts and maintains the state of accounts and contracts. Both clients are connected via the Engine API, an internal interface authenticated by JWT tokens.

Five Consensus Layer Clients are available: Lighthouse (Rust, Sigma Prime), Prysm (Go, Prysmatic Labs), Teku (Java, ConsenSys), Nimbus (Nim, Status), and Lodestar (TypeScript, ChainSafe). Likewise five Execution Layer Clients: Geth (Go), Nethermind (C#), Besu (Java), Erigon (Go), and Reth (Rust). All ten implementations are open source, written in different programming languages, and developed by independent teams. This multi-client philosophy is a core security property: a bug in one software implementation can only threaten the network if the affected client serves more than one third of the network.

The December 2025 incident at Fusaka provides empirical validation of this design principle. A bug in the Consensus Client Prysm caused network participation to fall to 75 percent, but finalization remained uninterrupted because Prysm's market share at that time stood at 22 percent.<a href="#fn-5" id="fnref-5"><sup>5</sup></a> Had the same bug occurred in early 2022, when Prysm still served 68 percent of the network, participation could have fallen below the critical two-thirds threshold.

39 percent of nodes are located in the USA, 14.5 percent in Germany, and 14 percent in China. Of the hosted Execution Layer nodes, 59 percent run on three cloud providers: AWS with 35.5 percent, Hetzner with 13.8 percent, and OVHcloud with 9.7 percent.<a href="#fn-6" id="fnref-6"><sup>6</sup></a>

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-1-full.png" alt="Ethereum's layer model — Consensus Layer, Execution Layer, and Data Availability Layer" loading="lazy" />
<figcaption>Figure 4.1 — Ethereum's layer model. Consensus Layer and Execution Layer, connected via the Engine API, plus the data availability layer. Five independent implementations per layer, in five languages, from five teams.</figcaption>
</figure>

### The EVM as Programmable Execution Environment

What distinguishes Ethereum from a pure payment chain like Bitcoin is the Ethereum Virtual Machine. The EVM is a deterministic 256-bit stack machine: every node in the network executes the same code with the same inputs and necessarily arrives at the same result.<a href="#fn-7" id="fnref-7"><sup>7</sup></a> This determinism property is constitutive for the functioning of the system, because it forms the basis for all nodes being able to agree on the correct state.

The EVM operates with a three-tier storage model. The stack is a volatile data structure following the last-in-first-out principle. Memory is a volatile, byte-addressable storage area. Storage is the persistent storage whose contents are anchored in the Merkle Patricia Trie. Storage operations are the most expensive in the entire opcode set, because every written value must be stored by all nodes indefinitely.

Smart contracts are programs executed on the EVM. They are deployed on the network as bytecode and are thereafter immutable. Deployment is permissionless: the only prerequisite is Gas fees paid to the network. The execution architecture is sequential — all transactions within a block are processed strictly in order. At a slot time of 12 seconds and the current Gas Limit of 60,000,000, Ethereum processes on Layer 1 an average of 15 to 30 transactions per second.

Within a block, the EVM enables atomic composability: arbitrarily many smart contract interactions can be chained within a single transaction, and the entire chain is either fully executed or fully reversed. Flash Loans illustrate this property: a user can in a single transaction borrow millions of US dollars, deploy the borrowed funds in an arbitrage operation, and repay the loan — without collateral and without an intermediary. This property forms the basis for the Decentralized Finance ecosystem.

### Account Abstraction

Ethereum has historically recognized two types of accounts. Externally Owned Accounts are controlled by a single cryptographic key. Contract Accounts are controlled by code running on the EVM. EIP-7702, activated with the Pectra upgrade on 7 May 2025, addresses usability barriers at the protocol level by allowing standard accounts to temporarily adopt the logic of a smart contract. Session keys, social recovery, and Gas sponsoring become implementable at the protocol level. The EIP is deployed and active on the Mainnet; integration into the major wallet applications is in progress. The adoption dynamics can be read from the older ERC-4337 standard: over 25.5 million smart accounts and 132 million UserOperations document the demand for programmable accounts.<a href="#fn-8" id="fnref-8"><sup>8</sup></a>

### State as State Database

Everything that Ethereum as a system stores resides in a data structure called the Merkle Patricia Trie. This structure consists of four nested tries: the World State Trie, the Account Storage Trie, the Transactions Trie, and the Receipts Trie. The World State Root, a 32-byte hash summarizing the entire state of the system, is anchored in the header of every block. A Merkle Proof can demonstrate with logarithmic effort that a specific state entry is present or absent in the trie.

The State amounts to 150 to 200 GB in the compressed storage form of the clients. The total size of a full node is 1,579 GB.<a href="#fn-9" id="fnref-9"><sup>9</sup></a> The hardware requirements for operating a full node include at least 2 TB SSD storage, 16 GB RAM, and a stable internet connection with at least 25 megabits per second. The permanent growth of State is the central long-term problem of the Ethereum architecture: every deployed contract, every new wallet, every stored storage slot accumulates permanently on all full nodes, without inactive entries expiring or being compressed.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-2-full.png" alt="The Merkle Patricia Trie — four nested tries and the World State Root" loading="lazy" />
<figcaption>Figure 4.2 — The Merkle Patricia Trie. Four nested tries and the World State Root anchored in the block header. A Merkle Proof demonstrates with logarithmic effort that a state entry is present or absent — this is the foundation of independent verifiability.</figcaption>
</figure>

## 4.2 The Transaction Lifecycle

A single transaction traverses the entire system on its journey from creation to finalization. At each station of this journey, a component of the architecture reveals itself that, in combination with the others, determines the properties of the system.

### Creation and Gas

The lifecycle of a transaction begins with the user, who creates a signed message describing the desired state transition: a transfer of ETH, a call to a smart contract function, or the deployment of a new contract. The signature is performed via the ECDSA algorithm on the secp256k1 curve and cryptographically proves that the sender controls the private key of the sending account.

Every operation on the EVM consumes a defined quantity of Gas. The cost structure reflects the actual burden: a simple addition costs 3 Gas, a Keccak-256 hash 36 Gas, loading a storage value 2,100 Gas, and a write operation into persistent storage 22,100 Gas. The Gas Limit per block stands at 60,000,000 and was doubled in the course of 2025 through validator signaling without a hard fork.<a href="#fn-10" id="fnref-10"><sup>10</sup></a>

The fee model EIP-1559, active since August 2021, divides the transaction fee into two components.<a href="#fn-11" id="fnref-11"><sup>11</sup></a> The Base Fee is determined algorithmically and adjusts dynamically to block utilization: if the preceding block consumed more than half its Gas Limit, the Base Fee rises by up to 12.5 percent. If utilization falls below that, it falls by the same maximum factor. The Base Fee is burned — cumulatively since August 2021, over 4.6 million ETH have been removed from circulation. The Priority Fee is freely chosen by the user and flows to the block's proposer.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-3-full.png" alt="The fee market under EIP-1559 — Base Fee and Priority Fee, their objectives, and the adjustment rule" loading="lazy" />
<figcaption>Figure 4.3 — The fee market under EIP-1559. Base Fee and Priority Fee, their objectives, and the rule by which the Base Fee adjusts.</figcaption>
</figure>

### Propagation in the Peer-to-Peer Network

The signed transaction is propagated via the peer-to-peer network. There is no single central mempool — each node maintains a local view of the transactions it has received from its peers. This decentralized mempool architecture creates an informational asymmetry that is constitutive for the MEV phenomenon: builders who have privileged connections to more nodes or receive private order flows have a more complete view of pending transactions than average nodes.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-4-full.png" alt="The mempool views — each node knows a different subset of pending transactions" loading="lazy" />
<figcaption>Figure 4.4 — The mempool views. Each node maintains its own view of pending transactions. Which ones it sees depends on network topology, propagation times, and individual filtering rules. From this inequality of views arises the informational asymmetry constitutive for the MEV phenomenon.</figcaption>
</figure>

### Block Building and MEV

Specialized block builders collect transactions from public mempools and private order flows and construct blocks optimized for the extraction of Maximal Extractable Value.<a href="#fn-12" id="fnref-12"><sup>12</sup></a> MEV arises from the fact that the ordering of transactions within a block influences the economic outcome: arbitrage transactions between decentralized exchanges, liquidations in lending protocols, and sandwich attacks are the most common MEV forms. The cumulative MEV extraction since the Merge is estimated at 1.5 to 2 billion US dollars, with approximately 93 percent flowing as bids to the validators.<a href="#fn-13" id="fnref-13"><sup>13</sup></a>

The market structure of block production as of 27 March 2026 shows considerable concentration: Titan Builder controls 51.2 percent of blocks, BuilderNet 25.7 percent, and Quasar 16.4 percent.<a href="#fn-14" id="fnref-14"><sup>14</sup></a> Three builder addresses control 93.3 percent of Ethereum block production. The Herfindahl-Hirschman Index stands at 3,554 — substantially exceeding the DOJ threshold of 2,500 for highly concentrated markets.

### Proposer-Builder Separation

The architectural response to separating block production from block validation is Proposer-Builder Separation. Builders send completed blocks with bids to Relays — off-chain intermediaries such as Ultra Sound Relay, Titan Relay, or BloXroute — that act as trusted intermediaries between builders and validators. The proposer selected for the slot blindly selects the highest bid and proposes the associated block without knowing its contents. 90 percent of blocks use MEV-Boost, the sidecar software connecting validators to this builder marketplace.

15 percent of blocks run through Relays that operate explicitly OFAC-compliant.<a href="#fn-15" id="fnref-15"><sup>15</sup></a> In November 2022, 79 percent of blocks ran through OFAC-compliant Relays. The decline to 15 percent occurred without protocol intervention, driven by market dynamics. FOCIL (EIP-7805), a validator-committee-based inclusion list system, is intended to replace this emergent censorship resistance with a protocol guarantee and carries status PLAN.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-5-full.png" alt="Proposer-Builder Separation — the path of a block from the Builder via the Relay to the Proposer" loading="lazy" />
<figcaption>Figure 4.5 — Proposer-Builder Separation. The path of a block from the Builder via the Relay to the Proposer, who blindly selects the highest bid. The Relays are off-chain intermediaries and thus the only point in the chain requiring trust.</figcaption>
</figure>

### Consensus and Finality

The proposer selected for a slot proposes the block to the network, and the 964,768 active validators attest via the Gasper protocol whether they recognize the block as valid.<a href="#fn-16" id="fnref-16"><sup>16</sup></a> Gasper is a combination of two complementary mechanisms.<a href="#fn-17" id="fnref-17"><sup>17</sup></a>

Casper FFG, the Friendly Finality Gadget, is a Byzantine Fault Tolerant finalization protocol. The network is divided into epochs of 32 slots each, with each slot lasting 12 seconds. When validators representing together more than two thirds of the total staked ETH attest a supermajority link between source and target, the target checkpoint is marked as justified. When the subsequent checkpoint is likewise justified, the previous checkpoint is finalized. This two-epoch cascade explains the finalization time of 12.8 minutes: 64 slots at 12 seconds each. A finalized block is cryptographically and economically irreversible, because a reversion would require more than one third of the total staked ETH to be slashed — a sum amounting to approximately 26 billion US dollars.

LMD-GHOST handles the complementary task of real-time block selection between finalization points. Starting from the last finalized checkpoint, the algorithm follows at each fork the subtree that has accumulated the most stake weight.

Each attestation a validator submits contains three simultaneous votes: the head vote (for LMD-GHOST), the source vote (for Casper FFG), and the target vote (likewise for Casper FFG). The interweaving of both mechanisms in a single message is the central architectural decision of the Gasper protocol.

The empirical record of the consensus mechanism since the Merge is remarkably stable. Of 287,000 produced epochs, 13 were not finalized, a finality rate of over 99.99 percent.<a href="#fn-18" id="fnref-18"><sup>18</sup></a> All 13 non-finalized epochs occurred in May 2023. That incident was simultaneously the first and to date only Mainnet test of the Inactivity Leak, an automatic degradation mode activated when finalization is absent for more than four epochs. Self-healing took 96 minutes, without any external intervention being required.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-6-full.png" alt="The attestation — three votes in a single message entering two different consensus mechanisms" loading="lazy" />
<figcaption>Figure 4.6 — The attestation. Three votes in a single message entering two different consensus mechanisms. The head vote feeds into LMD-GHOST; source vote and target vote feed into Casper FFG.</figcaption>
</figure>

### Settlement and State Update

After finalization, the transaction is irreversibly written into the state of the network. The Base Fee is burned, and the Priority Fee and any MEV payments flow to the proposer of the block. The State Transition Function applies the changes triggered by the transaction to the World State Trie and computes a new State Root anchored in the block header.

### System Properties of the Lifecycle

The journey of a transaction through the system reveals four architectural properties. The modularity of the architecture enables fault isolation and independent further development of individual components, but creates complexity in the coordination between layers. The economically anchored security creates attack costs that protect the system but are coupled to the market value of ETH. The off-chain dependency of block production creates a structural vulnerability in the most critical path of the system. The cryptographically enforced finality offers an irreversibility guarantee stronger than probabilistic Proof-of-Work guarantees, but with a finalization time of 12.8 minutes slower than the instant finality of centralized systems.

## 4.3 The Security Economy

Why do 964,768 validators stake their capital in a system that can confiscate that capital upon misconduct, and what happens if they stop doing so? The economic logic behind this commitment carries the security architecture of the system.

### Economic Incentives and Consolidation

Validators receive rewards for correct behavior from two sources: protocol issuance and MEV rewards. The reward structure weights the correct target vote at 40.6 percent of total weight, source vote and head vote at 21.9 percent each, block production at 12.5 percent, and sync committee participation at 3.1 percent. Issuance scales inversely with the square root of the total staked ETH — the effective staking rate stands at approximately 2.6 percent, down from approximately 13 percent when the staking share was still low.<a href="#fn-19" id="fnref-19"><sup>19</sup></a> Between 30 and 31 percent of the ETH total supply of 120,693,582 ETH are staked.

The Pectra upgrade triggered a structural shift in the validator landscape. EIP-7251 raised the maximum effective balance per validator from 32 to 2,048 ETH, and large staking providers used this opportunity to consolidate many individual 32-ETH validators into a few high-balance validators.<a href="#fn-20" id="fnref-20"><sup>20</sup></a> The total number of active validators fell from 1.07 million to 964,768, without any change in the quantity of staked ETH.

### Attack Economics and Slashing

The central security threshold of the system is the 34-percent blocking minority: an attacker controlling more than one third of the staked ETH can block finalization.<a href="#fn-21" id="fnref-21"><sup>21</sup></a> The static capital requirement for a blocking attack amounts to approximately 26 billion US dollars. The attacker risks the complete loss of their stake through Slashing.

Slashing protects the consensus protocol against two specific forms of attack: equivocation (double-signing) and surround voting. The penalty structure scales with correlation: a single validator double-signing due to a configuration error is mildly penalized. A coordinated group slashed simultaneously experiences a penalty making the attack economically ruinous.

The empirical record confirms a system operating through deterrence. Over more than five years of the Beacon Chain, 525 validators have been slashed out of over 2.2 million ever created — a rate of 0.024 percent.<a href="#fn-22" id="fnref-22"><sup>22</sup></a> Malicious attacks are not documented in the entire Slashing history.

### Staking Distribution

Liquid Staking dominates with 31.1 percent of staked ETH. Staking through centralized exchanges accounts for 24 percent. Staking Pools hold 16 percent. Solo stakers hold less than 1 percent — the minimum deposit of 32 ETH corresponds at the reference date price to approximately 67,000 US dollars.

Lido, the largest Liquid Staking protocol, holds 22.8 to 23 percent of staked ETH, declining from approximately 32 percent in 2023.<a href="#fn-23" id="fnref-23"><sup>23</sup></a> The DVT integration of 547,968 ETH with a quarter-on-quarter growth of 57 percent reduces the single-point-of-failure risk in the operator set.<a href="#fn-24" id="fnref-24"><sup>24</sup></a> Lido currently stands below the critical 33-percent threshold. The cumulative staking concentration of the three largest providers — Lido, Coinbase, and Binance — stands at 40 to 45 percent of staked ETH.

### Three Tensions of the Security Economy

The first tension concerns the inflationary dynamics of the overall system. ETH is slightly inflationary in Q1 2026, with an annual supply change of approximately 0.5 percent. The L2 migration has absorbed more transaction activity from the base layer than Blob fees return in burn volume. After Dencun, L2 costs fell by 80 to 95 percent and with them the contribution of L2 activity to ETH burning.

The second tension concerns the procyclical risk of the security architecture. The attack costs of approximately 26 billion US dollars are a function of the ETH price. In the 2022 crypto winter, the ETH price fell by over 80 percent, and the economic attack costs fell proportionally. The system survived this stress test empirically.

The third tension concerns the long-term financing of network security. If Layer-2 systems absorb the bulk of transaction activity and L1 fee revenue remains permanently at low levels, the question arises whether network security must be progressively financed through new ETH issuance. The issuance reform debate within the Ethereum ecosystem is active and unresolved: none of the proposals under discussion has reached the status of a formal EIP.

## 4.4 The Scaling Architecture

The Gas Limit of 60,000,000 per block limits the transaction capacity of the base layer to 15 to 30 transactions per second. Visa processes over 65,000 transactions per second at peak times. The limitation is a consequence of the fundamental design requiring every node to trace every transaction.

### The Rollup-Centric Strategy

The answer that the Ethereum ecosystem has pursued since October 2020 is a division of labor between layers. Vitalik Buterin's blog post formulated the strategic course: the base layer concentrates on settlement and data availability, while independent Layer-2 systems take over transaction execution.<a href="#fn-25" id="fnref-25"><sup>25</sup></a> This shift fundamentally changes Ethereum's operational role: from a platform on which users directly execute transactions, the system becomes an infrastructure layer providing security and data availability for systems built on top of it.

Since early 2026, this division of labor has been supplemented by a strategic shift. Vitalik Buterin formulated the objective of scaling the base layer itself to a multiple of its current capacity, through parallel transaction processing (EIP-7928), a Gas Limit of 200,000,000, and in the long run a thousandfold capacity increase. The features intended to implement this shift carry status PLAN and are assessed in Chapter 5.

### Data Availability as a Prerequisite

Blobs, introduced through EIP-4844 in the Dencun upgrade of March 2024, are 128 KB temporary data packets held on Beacon nodes for approximately 18 days and then automatically deleted.<a href="#fn-26" id="fnref-26"><sup>26</sup></a> The cost reduction since the introduction of Blobs was substantial: transaction costs on leading Layer-2 systems fell after Dencun by 80 to 95 percent. In operational terms, a simple token transaction on Arbitrum, Base, or Optimism costs a median of less than 0.01 US dollars.

All five leading Layer-2 systems by total value secured — Arbitrum One, Base, OP Mainnet, Starknet, and zkSync Era — use Ethereum Blobs as their primary data availability layer, reflecting the preference for stronger security guarantees of the base layer even when cheaper alternatives are available.

### How a Rollup Works

A Rollup delegates transaction execution to an independent system but anchors the results and transaction data on the base layer. A sequencer collects transactions from L2 users, executes them on the L2 execution environment, bundles the results into batches, and posts compressed data as Blobs on Layer 1.

The verification of State Roots follows one of two approaches. Optimistic Rollups assume the submitted states are correct and grant a seven-day challenge period in which any participant can submit a Fraud Proof. Security rests on the 1-of-N honest verifier assumption. ZK-Rollups mathematically prove the correctness of the submitted state before its acceptance through a validity proof that a verifier contract on Layer 1 checks in constant time. Arbitrum One, Base, and OP Mainnet are Optimistic Rollups. Starknet and zkSync Era are ZK-based.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-7-full.png" alt="The rollup-centric architecture — Layer 1 carries settlement and data availability, Rollups carry execution" loading="lazy" />
<figcaption>Figure 4.7 — The rollup-centric architecture. Layer 1 carries settlement and data availability, Rollups carry execution. Two confirmation stages: the sequencer confirms in seconds without a finality guarantee; the full guarantees of the base layer are inherited only upon L1 finalization.</figcaption>
</figure>

### The L2 Ecosystem in Operational State

All leading Layer-2 systems operate with centralized sequencers. Sequencer control lies with the developer teams: Offchain Labs operates the Arbitrum sequencer, Coinbase the Base sequencer, the Optimism Foundation the OP Mainnet sequencer. This centralization creates a triple risk profile: single point of failure for liveness, arbitrary transaction exclusion, and MEV monopoly at the L2 level. Documented sequencer failures: 78 minutes at Arbitrum (December 2023), 33 minutes at Base (August 2025), and over five hours at Starknet (September 2025). The Linea incident of June 2024, in which the development team deliberately stopped the sequencer and censored attacker addresses, illustrates the censorship risk.

The L2BEAT Stage framework measures the degree of decentralization of Rollups on a three-tier scale.<a href="#fn-27" id="fnref-27"><sup>27</sup></a> Stage 0 requires self-identification as a Rollup, data availability on L1, and open-source software. Stage 1 requires a functioning proof system and a Security Council with at least eight participants. Stage 2 requires a permissionless proof system, at least 30-day exit windows, and restriction of the Security Council to on-chain-verifiable bugs.

Arbitrum One (Stage 1, 17.5 billion USD), Base (Stage 1, 11 billion USD), and OP Mainnet (Stage 1) share the Optimism proof infrastructure. Starknet has reached Stage 1 with the Stwo proof system. zkSync Era remains at Stage 0. Stage 2 exists only for immutable projects with minimal transaction volume such as Aztec v1 (2.95 million USD). Exit windows vary drastically: 17 days at Arbitrum, but zero days at Base and OP Mainnet.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-8-full.png" alt="The L2BEAT Stage Framework — the requirements of the three tiers and the Rollups that achieve them" loading="lazy" />
<figcaption>Figure 4.8 — The L2BEAT Stage Framework. The requirements of the three tiers and the Rollups that achieve them, with secured value. Stage 2 is reached only by an immutable project with a fraction of the value that Arbitrum One carries.</figcaption>
</figure>

### Broken Cross-L2 Composability

The atomic composability described in Section 4.1 as an emergent property of the EVM does not exist at the Layer-2 level. Over 50 active Layer-2 systems operate with isolated State, and a transaction on Arbitrum cannot interact atomically with a transaction on Base, even though both systems settle on the same base layer. Cross-L2 transfers require bridges that introduce their own trust assumptions. Cumulative damage from bridge hacks exceeds 2.8 billion US dollars.<a href="#fn-28" id="fnref-28"><sup>28</sup></a>

The Superchain initiative, which brings together 34 OP-Stack-based chains and represents approximately 66 percent of total L2 TVL, has made progress in intra-stack fungibility with the SuperchainERC20 standard. Cross-stack atomicity between an OP-Stack chain and an Arbitrum chain does not exist and is not foreseeable.

### Stablecoin Anchoring and Substitution Risk

Ethereum dominates global stablecoin issuance with a market share of 52 to 54 percent, corresponding to a volume of approximately 166 billion US dollars.<a href="#fn-29" id="fnref-29"><sup>29</sup></a> USDC, USDT, and DAI are primarily issued on Ethereum, and DeFi integration creates an anchoring depth that goes beyond mere issuance. Since December 2025, USDC transaction volume on Solana has been higher than on Ethereum — showing that transaction activity migrates wherever the user experience is most favorable and fastest.

The GENIUS Act, signed on 18 July 2025 as the first US federal law for stablecoins, regulates stablecoin issuers with regard to reserve requirements, transparency obligations, and licensing, but does not address the protocol layer.<a href="#fn-30" id="fnref-30"><sup>30</sup></a> The law regulates Circle and Tether as issuers, but regulates neither Ethereum as a protocol nor the smart contracts managing USDC and USDT on the base layer.

## 4.5 Governance and System Evolution

How does a system without central authority continue to develop? This section describes the processes through which this system is changed, the actors that carry these changes, and the tensions arising from the interplay of decentralized claim and operational reality.

### The EIP Process

Ethereum Improvement Proposals are the formal standardization mechanism for protocol changes, inspired by Python's PEP system and Bitcoin's BIPs.<a href="#fn-31" id="fnref-31"><sup>31</sup></a> The process follows a defined sequence: Draft, Review, Last Call, Final. In 2025, 230 EIPs were submitted, of which 37 were accepted — an acceptance rate of 16 percent.

EIP Editors check formal correctness. Substantive decisions are made in the AllCoreDevs Calls — biweekly video conferences of the client developer teams publicly streamed, recorded, and documented. The procedure is transparent, documented, and selective, but operates without formal authority: no body can force a decision, no voting mechanism can bind a majority. Ethereum has deliberately not implemented on-chain governance. The decision-making principle follows the model that the Internet has shaped: Rough Consensus and Running Code, a formulation of the Internet Engineering Task Force.<a href="#fn-32" id="fnref-32"><sup>32</sup></a>

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-9-full.png" alt="The Ethereum governance process — formal status of a proposal and the instances where decisions actually lie" loading="lazy" />
<figcaption>Figure 4.9 — The Ethereum governance process. The formal status of a proposal and the instances where decisions actually lie. No body can force a decision, no voting mechanism binds a majority. Ethereum has deliberately not implemented on-chain governance. In 2025, over 230 EIPs were submitted, 37 accepted.</figcaption>
</figure>

### The Ethereum Foundation and Decentralized Financing

The Ethereum Foundation, founded in 2014 as a Swiss foundation, is the oldest and financially most significant organization in the Ethereum ecosystem. Its treasury is estimated at 850 to 950 million US dollars, of which 70,000 ETH are staked and approximately 5,800 ETH are invested in DeFi vaults.<a href="#fn-33" id="fnref-33"><sup>33</sup></a> The Foundation finances research, development, education, and community initiatives, but has deliberately no protocol control: it cannot mandate protocol changes, cannot force upgrades, and cannot censor transactions.

The concentration of a substantial treasury in a single organization creates a centralization risk in tension with the protocol's decentralized claim, particularly because the Foundation in practice co-determines the direction of protocol development through its financing decisions.

Protocol Guild, a collective financing instrument for core developers with over 190 members, has received more than 50 million US dollars in voluntary donations from the ecosystem since its founding and represents a decentralized counterpoint to EF financing.<a href="#fn-34" id="fnref-34"><sup>34</sup></a> The financing through Protocol Guild is neither protocol-anchored nor long-term plannable, but dependent on the continuing willingness to donate of an ecosystem acting from economic self-interest.

### Upgrades as Risk and Evidence

The DAO fork of 2016 remains the only case in which the community undertook a state intervention, and it has never been repeated. The four post-Merge upgrades — Shapella, Dencun, Pectra, and Fusaka — all proceeded without chain splits.

Complexity accumulation is a growing risk: Pectra bundled 11 EIPs in a single release. Each EIP must be correctly implemented in ten independent implementations, and the December 2025 Prysm bug at Fusaka was a direct consequence of the interaction between new protocol elements and existing client implementations.

The governance system's capacity to respond to acute security incidents has historical precedents. In September 2016, a targeted denial-of-service attack against the Geth client forced two emergency hard forks within weeks — Tangerine Whistle and Spurious Dragon. The limit of this capacity lies in the absence of a pause mechanism: if a critical bug is deployed at the protocol level, no party can halt the network.

## 4.6 Emergent Properties: What the Architecture Enables

The properties that underpin the infrastructure claim cannot be located in any single component. They emerge from the interplay of architectural elements. Five such properties can be identified.

The first emergent property is **Permissionless Deployment**. From the interplay of the EVM as an open execution environment, permissionless access to the network, and the Gas market as the sole access requirement, a system emerges in which any actor can deploy code without having to seek authorization. Frischmann's argument that open access to infrastructure is economically more efficient than restriction through private property rights finds a technical implementation here.<a href="#fn-35" id="fnref-35"><sup>35</sup></a> The EVM generates an analogous dynamic to the end-to-end architecture of the Internet that van Schewick described: it lowers innovation barriers at the edges of the network.<a href="#fn-36" id="fnref-36"><sup>36</sup></a> The 31,869 active developers documented by the Electric Capital Developer Report for September 2025 and the DeFi Total Value Locked of approximately 100 billion US dollars on Ethereum L1 and L2 quantify the economic scope of productive activities built on this infrastructure.<a href="#fn-37" id="fnref-37"><sup>37</sup></a>

The second emergent property is **atomic composability**. Protocols can build on one another without needing to conclude bilateral agreements, because compatibility is established at the level of the shared execution environment. DeFi as an ecosystem is the result of this property — an emergent layer of productive activity that builds on the infrastructure without having been planned or anticipated by it. This is Frischmann's concept of the input character of infrastructure in its most precise form. The strength of composability lies in its permissionlessness. At the Layer-2 level, this composability is broken, as Section 4.4 documented.

The third emergent property is **independent verifiability of the system state**. From the interplay of the multi-client architecture, the Merkle Patricia Trie, and the peer-to-peer network, the possibility arises of verifying the entire system state without trusting an intermediary. Technically, this verification is possible on consumer hardware at a total cost of 500 to 1,500 US dollars. Operationally, approximately 70 percent of users rely on RPC providers such as Infura and Alchemy, which act as centralized intermediaries.

The fourth emergent property is **cryptographic ownership**. A user who controls their private key has unconditional control over their assets at the protocol level, without a bank, an exchange, or an authority being able to grant or revoke that control. Self-custody is the default. Delegation to an intermediary is a deliberate choice by the user, reversible at any time. The flip side is its irreconcilability: key loss is irreversible.

The fifth emergent property is **programmable enforceability**. From the interplay of smart contracts, the cryptographically enforced finality, and the Slashing mechanism, an enforcement layer for agreements emerges that operates without any external authority. Grimmelmann and Windawi have shown that blockchains function as semicommons in which private and shared resource use are intertwined and in which the rules are enforced through code.<a href="#fn-38" id="fnref-38"><sup>38</sup></a> Smart contracts enforce agreements automatically: a lending protocol liquidates an undercollateralized position without a court order. The limit lies in the expressive capacity of the code.

These five properties ground the infrastructure claim that the following sections examine. A system can enable Permissionless Deployment and still fail at the access threshold if Gas costs effectively restrict access. It can offer Trustless Verification and yet generate a high trust burden if the majority of users access it through centralized intermediaries.

## 4.7 Dimension I: Structural Foundation

The assessment applies the twelve criteria of the evaluation framework to the described subject. Two of the criteria in this dimension — Security and Trust Load (I.2) and Minimal Viable Guarantees (I.4) — are anchored as Critical Conditions.

### I.1 Functional Irreplaceability

The protocol does not produce its anchoring through technical lock-in mechanisms. In Frischmann's infrastructure terminology, Ethereum is a system that establishes its indispensability through the breadth and depth of productive activities built upon it, not through the access barriers it erects.<a href="#fn-39" id="fnref-39"><sup>39</sup></a>

The usage reality shows an anchoring that exceeds the threshold in three dimensions. The DeFi TVL dominance amounts to roughly 100 billion US dollars under Ethereum security, consistently representing over 60 percent of all on-chain-secured DeFi capital. Stablecoin issuance on Ethereum amounts to roughly 166 billion US dollars, representing 52 to 54 percent of the total market.<a href="#fn-40" id="fnref-40"><sup>40</sup></a> The developer ecosystem comprises 31,869 active developers (as of September 2025), the historical high and over 70 percent of all blockchain developers.<a href="#fn-41" id="fnref-41"><sup>41</sup></a>

The shock resilience of this anchoring is empirically documented: in the 2022 market cycle, DeFi TVL collapsed in absolute terms by more than 75 percent, yet Ethereum's relative dominance position remained intact. Constraints are nonetheless documented: the stablecoin volume migration to Solana, L2 autonomy, and the multi-chain drift of institutional actors qualify the exclusivity of the anchoring.

**Functional Irreplaceability: Fulfilled with qualification.** The anchoring exceeds all quantitative thresholds and has passed a stress test, but the emergent character of the anchoring, L2 autonomy, and multi-chain drift qualify the finding.

### I.2 Security and Trust Load

*This criterion is anchored as a Critical Condition: a finding of "Open" would cap the overall verdict at "Conditionally Suitable."*

The Casper FFG architecture anchors economic security in a mathematically binding way: validators who double-sign or attest to contradictory checkpoints lose their stake through Slashing. The three critical thresholds of BFT mathematics — 33 percent as the blocking minority, 51 percent for reorgs before finality, and 66 percent as the supermajority — are implemented in the protocol and not deactivatable.<a href="#fn-42" id="fnref-42"><sup>42</sup></a>

The data on the operational security profile are strong. With 964,768 active validators and approximately 30 percent of the ETH total supply staked, the static cost of a 34-percent attack amounts to roughly 26 billion US dollars. The finality rate exceeds 99.99 percent: of roughly 287,000 epochs since the Merge, only 13 were not finalized — all in May 2023.<a href="#fn-43" id="fnref-43"><sup>43</sup></a>

The residual trust burden reveals a discrepancy between protocol claim and usage reality. Wallets such as MetaMask operate as closed-source components with unilateral update mechanisms. Infura and Alchemy dominate approximately 70 percent of RPC traffic. 91.5 percent of L2 TVL operates on Stage 1 rollups with security council multisigs and centralized sequencers. Cross-L2 transfers require trust-based bridges with cumulative hack damages exceeding 2.8 billion US dollars, or seven-day challenge periods. A typical user accessing an L2 DeFi service via MetaMask traverses four trust layers, none of which is secured by the Ethereum protocol itself.

**Security and Trust Load: Fulfilled with qualification.** The economic security dimension satisfies all technical indicators. The residual trust dimension documents an operational discrepancy between protocol possibility and usage reality.

### I.3 Coordination Function

The protocol operationally implements three of the four coordination primitives: Settlement as finalized, irreversible transaction processing after approximately 12.8 minutes; Execution as deterministic smart contract processing with atomic composability; and Data Availability as KZG-commitment-based blob availability for L2 rollups since Dencun. The fourth primitive — protocol-side verification of arbitrary off-chain computations — has the status RES and is not part of the current-state assessment.<a href="#fn-44" id="fnref-44"><sup>44</sup></a>

Roughly 100 billion US dollars are coordinated in a permissionless system without an institutional trustee, around the clock, 365 days a year, without maintenance windows. All top-5 rollups by TVL settle on Ethereum and use blob transactions for Data Availability. Cross-L2 composability, however, is the qualitative constraint: atomic composability is structurally absent at the L2 level. Monthly bridge volumes of approximately 11.2 billion US dollars show the scale of coordination demand handled through intermediaries.

**Coordination Function: Fulfilled with qualification.** The coordination capacity is real, quantitatively substantial, and qualitatively unique, but L2 fragmentation undermines the coherence of coordination.

### I.4 Minimal Viable Guarantees

*This criterion is the second Critical Condition in this dimension.*

The time-to-finality is 12.8 minutes, calculated from two epochs of 32 slots at 12 seconds each, and thus falls below the threshold of 15 minutes.<a href="#fn-45" id="fnref-45"><sup>45</sup></a> Liveness is documented by a finality rate above 99.99 percent, with not a single failure occurring since May 2023.

The Degradation Mode is the property that distinguishes Ethereum from all seven reference infrastructures analyzed in Chapter 3. The Inactivity Leak was tested on Mainnet in May 2023: the protocol responded automatically, inactive validators progressively lost stake, and self-healing occurred after approximately 96 minutes — without manual intervention, without coordination outside the protocol, and without interruption to block production.<a href="#fn-46" id="fnref-46"><sup>46</sup></a> When DNS root server networks or SWIFT nodes fail, recovery depends on external coordination. Ethereum's Inactivity Leak requires none of this.

The fourth guarantee — censorship resistance under coordinated attack — does not reach the level of the first three. No protocol mechanism compels a block proposer or builder to include a specific valid transaction. FOCIL (EIP-7805) has the status PLAN. The OFAC compliance rate stands at approximately 15 percent — well below the 50-percent threshold — but this performance rests on market dynamics, not on a protocol guarantee.<a href="#fn-47" id="fnref-47"><sup>47</sup></a>

**Minimal Viable Guarantees: Fulfilled with qualification.** Three of four guarantees are protocol-anchored and operationally proven. The fourth is functionally given, but not secured by the protocol.

### Synthesis Dimension I

All four criteria stand at "Fulfilled with qualification." The two Critical Conditions (I.2 and I.4) pass the cascade threshold. The pattern characterizing the entire dimension: the architectural foundation is load-bearing, and the constraints lie consistently in the discrepancy between what the protocol enables and what operational reality delivers.

## 4.8 Dimension II: Qualitative Viability

The second dimension examines whether Ethereum possesses the qualitative properties that substantively carry the infrastructure claim. Neutrality and Censorship Resistance (II.1) is the third and final Critical Condition of the entire evaluation framework.

### II.1 Neutrality and Censorship Resistance

*This criterion is anchored as a Critical Condition and contains the only indicator standing at the level "Open."*

The protocol anchors neutrality through Permissionless Participation, content-neutral block validation through Casper FFG, and fork-choice neutrality without whitelist or blacklist. What the protocol does not anchor is an inclusion obligation: no mechanism compels a block proposer or builder to include any specific valid transaction.

The OFAC compliance rate of approximately 15 percent of blocks falls well below the 50-percent threshold and documents a positive trajectory from the 79-percent peak in November 2022. The Van Loon v. Treasury ruling of November 2024 and the OFAC delisting of Tornado Cash in March 2025 reduced regulatory pressure.<a href="#fn-48" id="fnref-48"><sup>48</sup></a>

The structural defect finding lies in builder concentration. Titan with 51.2 percent, BuilderNet with 25.7 percent, and Quasar with 16.4 percent together control 93.3 percent of all blocks at a Herfindahl-Hirschman Index of approximately 3,554 — substantially exceeding the DOJ threshold of 2,500.<a href="#fn-49" id="fnref-49"><sup>49</sup></a> If Titan and BuilderNet coordinate, they control 76.9 percent of block production — sufficient for de facto censorship of the majority of all MEV-Boost blocks. This indicator stands at "Open" and is the only Open finding of the entire current-state assessment.<a href="#fn-50" id="fnref-50"><sup>50</sup></a>

The geopolitical jurisdictional diversity shows moderate concentration: approximately 39 percent of nodes in the USA, approximately 53 percent in two countries.<a href="#fn-51" id="fnref-51"><sup>51</sup></a> The staking concentration indicators are within acceptable ranges: Lido holds 22.8 to 23 percent of staked ETH, well below the 33-percent blocking minority threshold.<a href="#fn-52" id="fnref-52"><sup>52</sup></a>

**Neutrality and Censorship Resistance: Conditionally fulfilled.** Fulfillment depends on conditions not secured in the current state — in particular the implementation of FOCIL or a functionally equivalent mechanism. This is the weakest single finding of the entire current-state assessment.

### II.2 Open Generativity

The architecture implements Permissionless Deployment in full: any Ethereum address can deploy smart contracts without a whitelist, approval requirement, or registration obligation. Atomic composability enables interaction patterns such as Flash Loans that have no equivalent in any traditional system. The ERC standard family has established itself as an emergent interoperability mechanism without any central authority.

The entire core development infrastructure stands under liberal open-source licenses (MIT, Apache 2.0): Foundry, Hardhat, Ethers.js, Slither, and Echidna. No single provider controls the toolchain or can restrict access. Van Schewick showed for the Internet that open tools and open protocols together generate the innovation dynamic — the same pattern holds for Ethereum at the smart contract layer.<a href="#fn-53" id="fnref-53"><sup>53</sup></a>

The constraint lies in L2 fragmentation: atomic composability that produced the DeFi ecosystem is not present at the L2 level. Flash Loans function only within a single block on a single chain and are structurally impossible across L2 boundaries.

**Open Generativity: Fulfilled with qualification.** The permissionless deployment model and the open toolchain constitute the system's structurally strongest property. L2 composability fragmentation is the documented constraint.

### II.3 Independent Verifiability

The deterministic EVM guarantees that every full node computes the identical state from identical input. The EVM specification is formally defined via the Yellow Paper and machine-verified through KEVM.<a href="#fn-54" id="fnref-54"><sup>54</sup></a> At least six productively used verification tools exceed the threshold: Certora Prover, Foundry/Forge, Echidna, Mythril, Slither, and KEVM.

The growing L2 verification complexity is a constraint: for Optimistic Rollups, security rests on the assumption that at least one honest prover submits a fraud proof within the seven-day deadline. For ZK-Rollups, creating and understanding the proofs requires cryptography expertise substantially beyond standard EVM verification. The Lazarus Group attacks of 2025, with damages of 2.02 billion US dollars, demonstrate that even audited systems remain vulnerable through attack vectors such as private key compromise and oracle manipulation.<a href="#fn-55" id="fnref-55"><sup>55</sup></a>

**Independent Verifiability: Fulfilled with qualification.** The verification offering is protocol-anchored and substantive on the tooling side, but L2 verification complexity is growing, specification gaps exist, and audit culture is not universal.

### II.4 Low-Threshold Inclusivity

Full-node hardware requirements are in the consumer range, with costs of 500 to 1,500 US dollars. The State growth problem is the central long-term threat: at a full-node size of 1,579 GB and weekly growth of approximately 14 GB, requirements rise progressively. At a Gas target of 200 million, projections yield 5 terabytes by 2028 and 9 terabytes by 2030.<a href="#fn-56" id="fnref-56"><sup>56</sup></a>

The 32-ETH minimum deposit for solo staking is the deficit shaping the entire inclusivity assessment. At the price level of Q1 2026, 32 ETH corresponds to approximately 67,000 US dollars, and solo staking has shrunk to less than one percent of total staking volume.<a href="#fn-57" id="fnref-57"><sup>57</sup></a> This deficit is the only one in the entire current-state assessment for which the roadmap contains no operational path: Rainbow Staking has the status RES without an implementation commitment.

L2 transaction costs document the strongest improvement. Median costs on the leading L2s have fallen below 0.01 US dollars per transaction after EIP-4844. Usability without cryptographic prior knowledge has improved substantially through EIP-7702 (Pectra), but the UX transformation is not yet complete.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-10-full.png" alt="Current-state assessment profile Dimensions I and II — the eight individual assessments with hierarchy level and assessment label" loading="lazy" />
<figcaption>Figure 4.10 — Current-state assessment profile Dimensions I and II. The eight individual assessments with hierarchy level and assessment label. Seven of eight criteria carry the same label. II.1 is the only outlier and simultaneously critical in the cascade.</figcaption>
</figure>

**Low-Threshold Inclusivity: Fulfilled with qualification.** Participation is substantially inclusive for transactional use on L2, possible but endangered by rising state size for full-node operation, and prohibitively constrained for solo staking by the 32-ETH barrier.

### Synthesis Dimension II

The assessment profile of the second dimension shows a pronounced asymmetry. The Critical Condition (II.1) stands at "Conditionally fulfilled," the three Qualitative Criteria (II.2, II.3, II.4) stand consistently at "Fulfilled with qualification." The dimension contains both the system's most critical vulnerability — the absent protocol-level neutrality guarantee — and one of its structurally strongest properties — open generativity. The tension between both findings reveals a system that produces maximum openness but leaves the neutrality of that openness operationally to market dynamics.

## 4.9 Dimension III: Resilience and Sovereignty

The third dimension shifts the time horizon: away from the question of whether Ethereum is suitable today, toward the question of whether it can remain suitable — stable across decades, adaptable without destabilization, free of proprietary dependencies, and operable on generic hardware. No Critical Condition lies in this dimension.

### III.1 Long-Term Stability

*This is the sole Structural Condition of this dimension.*

The protocol upgrade track record is the strongest indicator. Since the Merge, Ethereum has completed four successful hard forks at a cadence of approximately six to twelve months. None of these forks produced a chain split. Backward compatibility has been maintained throughout the entire runtime: contracts from 2017 run unchanged.

State growth is the critical long-term factor. The full-node size of 1,579 GB grows at approximately 14 GB per week, and the protocol has no native mechanism to limit this growth. Verkle Trees (EIP-6800, status RES, Stagnant) and History Expiry (EIP-4444, Phase 1 DEPL since July 2025, Phase 2 PLAN) address parts of the problem.<a href="#fn-58" id="fnref-58"><sup>58</sup></a> State Expiry itself has status RES without an implementation commitment.

Economic sustainability poses the second long-term question. The L2 migration has shifted the equilibrium between issuance and burning: as L2s absorb the majority of transaction activity, L1 fee revenue declines. The issuance reform debate is active and unresolved.

The post-quantum migration constitutes the third long-term question. The cryptographic foundations — ECDSA, BLS12-381, and KZG commitments — must be migrated to quantum-resistant algorithms in the long term. The migration has the status RES. In the current-state time horizon, the risk is not acute.

**Long-Term Stability: Fulfilled with qualification.** Short- and medium-term stability is operationally documented. Long-term stability depends on developments not secured in the current state.

### III.2 Adaptive Governance

The EIP process is transparent, selective, and public: of 230 EIPs submitted in 2025, 37 were accepted. The hard fork track record demonstrates operational capability: all post-Merge forks were completed without chain splits. Mayntz showed for large technical systems that the tension between steering and self-organization is a central research problem — in Ethereum's informal governance model it manifests as the tension between Rough Consensus and formal authority.<a href="#fn-59" id="fnref-59"><sup>59</sup></a>

The Ethereum Foundation as a governance actor is a documented centralization tension. Board-controlled, without protocol-level accountability, and with a treasury estimated at 850 to 950 million US dollars, the EF is the single most influential actor in the ecosystem.<a href="#fn-60" id="fnref-60"><sup>60</sup></a> The issuance reform debate is the active test case for the governance system's capacity to handle controversial decisions: the question has not produced consensus in the current state.

**Adaptive Governance: Fulfilled with qualification.** The governance system is operationally strong and has a track record that no comparable decentralized system can match, but the informality provides no mechanical guarantees for extreme conflicts, and EF centralization stands in tension with the decentralized claim.

### III.3 Sovereign Portability

The protocol layer is entirely open source and proprietary-free. All ten clients stand under liberal licenses, from LGPL-3.0 for Geth through Apache 2.0 for Besu to MIT for numerous tools. There is no Ethereum Inc. holding IP rights. The EVM standard has diffused into the broader blockchain ecosystem as a de facto standard without proprietary control: the OP Stack, Arbitrum, zkSync, Polygon, and BNB Chain have all adopted the EVM as an execution environment.

The historical Geth dominance above 70 percent (2020–2023) is the documented concentration risk of this dimension. The current state shows clear improvement: Geth has declined to approximately 42 percent, Nethermind holds approximately 24 percent, Besu approximately 16 percent, and no Consensus Layer client exceeds 34 percent.<a href="#fn-61" id="fnref-61"><sup>61</sup></a>

The operational infrastructure layer shows a different picture. The RPC concentration of 70 percent across Infura and Alchemy creates a de facto dependency at the access layer. The L2 proliferation has created new soft lock-ins: zkSync and Starknet use partially proprietary prover technologies.<a href="#fn-62" id="fnref-62"><sup>62</sup></a>

**Sovereign Portability: Fulfilled with qualification.** The protocol layer is proprietary-free to a degree that none of the reference infrastructures achieves. The operational layer shows concentrations and L2 lock-ins that qualify the claim at the usage level.

### III.4 Hardware Agnosticism

The transition from Proof of Work to Proof of Stake eliminated ASIC dependency and reduced energy consumption by 99.95 percent. A validator node requires approximately 100 watts. All ten clients run natively on ARM-64 and x86-64 architectures. The protocol has no hardware preference: a validator on consumer hardware has the same voting weight as a validator on a datacenter server.

Cloud concentration counteracts this protocol property. Approximately 59 percent of hosted Execution Layer nodes run on three cloud providers — AWS with 35.5 percent, Hetzner with 13.8 percent, and OVHcloud with 9.7 percent. The AWS outage of October 2025 demonstrated that the network could absorb the failure of an AWS region without losing finality, but the corridor between normal operation and finality loss narrowed temporarily. Home staking stands at under 15 percent of staked ETH.<a href="#fn-63" id="fnref-63"><sup>63</sup></a>

The geographic distribution: 39 percent of nodes in the USA, 14.5 percent in Germany, 14 percent in China. Beyond these three countries, more than ten jurisdictions — including Singapore, Canada, Japan, Australia, the Netherlands, and Switzerland — each hold over one percent of nodes. The geographic indicator of the criterion (at least ten countries each with over one percent) is thereby fulfilled.

**Hardware Agnosticism: Fulfilled with qualification.** Protocol-level hardware agnosticism is fully realized — without ASIC dependency, ARM-compatible, and consumer-energy-compatible — but the operational cloud concentration creates a physical dependency that undermines decentralization at the logical layer.

### Synthesis Dimension III

All four criteria stand at "Fulfilled with qualification." The third dimension shows the gap between current functionality and long-term viability. State growth, the open issuance question, and the pending post-quantum migration are not acute problems threatening today's operation but long-term vectors unfolding over years. The Structural Condition III.1 enters the third cascade step as a weak Structural Condition.

## 4.10 Overall Synthesis and Current-State Verdict

The twelve individual assessments of Sections 4.7 through 4.9 yield a profile that is as revealing in its consistency as in its single deviation. No criterion achieves "Fulfilled" without qualification. Eleven of twelve criteria stand at "Fulfilled with qualification." One — Neutrality and Censorship Resistance (II.1) — stands at "Conditionally fulfilled." None stands at "Open." The numerical profile 0-11-1-0 describes a system that addresses the infrastructure requirements in breadth, but in which operational reality has not yet fully delivered on the protocol-level possibilities.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-11-full.png" alt="Current-state profile of all twelve criteria — assessment label by hierarchy level and dimension" loading="lazy" />
<figcaption>Figure 4.11 — Current-state profile of all twelve criteria. Assessment label by hierarchy level and dimension. Zero times Fulfilled, eleven times Fulfilled with qualification, once Conditionally fulfilled, zero times Open.</figcaption>
</figure>

The M3 cascade defined in Chapter 2 determines the overall verdict on the basis of the hierarchical grading of the criteria. The three Critical Conditions form the first examination stage. Security and Trust Load (I.2) and Minimal Viable Guarantees (I.4) stand at "Fulfilled with qualification" and pass the cascade threshold. Neutrality and Censorship Resistance (II.1) does not pass the threshold unconditionally: the builder concentration of 93.3 percent among three actors marks a structural defect, and no protocol mechanism enforces transaction inclusion. The finding is "Conditionally fulfilled," not "Open" — meaning the path to fulfillment is discernible, but depends on the implementation of FOCIL or a functionally equivalent mechanism. No Critical Condition stands at "Open," which lifts the overall verdict above "Conditionally Suitable." One Critical Condition stands at "Conditionally fulfilled," which sets the cascade to the level "Suitable under substantial conditions."<a href="#fn-64" id="fnref-64"><sup>64</sup></a>

The three Structural Conditions — Functional Irreplaceability (I.1), Coordination Function (I.3), and Long-Term Stability (III.1) — all stand at "Fulfilled with qualification" and are thereby counted as weak, so the third cascade step sets the same cap as the second.

The six Qualitative Criteria differentiate the degree within the achieved suitability level. All six stand at "Fulfilled with qualification." The degree scale from Chapter 2 defines the degree as "Good" when all six Qualitative Criteria stand at least at "Fulfilled with qualification" — which is the case here.<a href="#fn-65" id="fnref-65"><sup>65</sup></a>

**The overall verdict is: Suitable under substantial conditions, degree Good.**

The central condition determining the label is the implementation of FOCIL (EIP-7805) or a functionally equivalent mechanism that transforms censorship resistance from an emergent market performance into a protocol guarantee. As long as transaction inclusion depends on the market structure of builders rather than being enforced by the protocol, the neutrality guarantee that the infrastructure claim asserts remains operationally delivered but structurally unsecured.

A pattern runs through all twelve assessments, and it can be stated in one sentence: the discrepancy between what the protocol enables and what operational reality delivers is the basic pattern of the current state. Ethereum offers, at the protocol level, the prerequisites of a fundamental infrastructure — from economic security through open generativity to cryptographic verifiability, from atomic coordination to automated self-healing. The operational usage reality has not fully realized these possibilities: the trust stack generates institutional dependencies, L2 fragmentation undermines composability, builder concentration threatens neutrality, state growth threatens long-term decentralization, and governance operates without mechanical guarantees for extreme conflicts.

The current-state verdict defines the starting point for the target-state assessment. Chapter 5 will examine whether the Ethereum roadmap addresses the identified constraints and whether the target-state profile can shift the overall verdict. The question is not whether Ethereum is suitable as infrastructure — the current-state verdict confirms fundamental suitability under conditions — but whether the roadmap can deliver on the conditions to which suitability is tied.

<div class="fn-list">
<ol>
<li id="fn-1">Buterin, Vitalik (2014): A Next-Generation Smart Contract and Decentralized Application Platform. Ethereum Whitepaper. URL: https://ethereum.org/en/whitepaper/ <a href="#fnref-1">â†©</a></li>
<li id="fn-2">Wood, Gavin (2014/2024): Ethereum: A Secure Decentralised Generalised Transaction Ledger (Yellow Paper). Current version: Berlin Version, 2024. <a href="#fnref-2">â†©</a></li>
<li id="fn-3">Ethereum Foundation Blog (2022): The Merge. URL: https://blog.ethereum.org/2022/09/15/the-merge. For the energy consumption comparison cf. Digiconomist: Ethereum Energy Consumption Index; Cambridge Centre for Alternative Finance (2022): Cambridge Blockchain Network Sustainability Index. <a href="#fnref-3">â†©</a></li>
<li id="fn-4">Etherscan: Ethereum Node Tracker. URL: https://etherscan.io/nodetracker (accessed 27 March 2026). <a href="#fnref-4">â†©</a></li>
<li id="fn-5">Cointelegraph (2025): Ethereum sees 25% validation drop post-Fusaka as Prysm bug affects network participation. December 2025. For historical client market shares cf. clientdiversity.org. <a href="#fnref-5">â†©</a></li>
<li id="fn-6">Ethernodes: Ethereum Node Distribution. URL: https://ethernodes.org (accessed early 2026). The cloud percentages refer to hosted EL nodes, not the totality of all nodes. <a href="#fnref-6">â†©</a></li>
<li id="fn-7">Wood, Gavin (2014/2024): Ethereum: A Secure Decentralised Generalised Transaction Ledger (Yellow Paper). Current version: Berlin Version, 2024. <a href="#fnref-7">â†©</a></li>
<li id="fn-8">Dune Analytics: ERC-4337 Account Abstraction Dashboard (accessed 27 March 2026). For EIP-7702 cf. Ethereum Foundation: Pectra Upgrade Specification. <a href="#fnref-8">â†©</a></li>
<li id="fn-9">Etherscan / YCharts: Ethereum Chain Data Size (accessed 27 March 2026). The figure of 1,579 GB refers to the full-node size; the state trie comprises 150 to 200 GB in compressed client storage. <a href="#fnref-9">â†©</a></li>
<li id="fn-10">Etherscan: Ethereum Average Gas Limit Chart. URL: https://etherscan.io/chart/gaslimit (accessed 27 March 2026). The increase occurred through gradual validator signaling over the course of 2025 without requiring a protocol upgrade. <a href="#fnref-10">â†©</a></li>
<li id="fn-11">Buterin, Vitalik / Conner, Eric / Dudley, Rick / Slipper, Matthew / Norden, Ian / Bakhta, Abdelhamid (2019): EIP-1559: Fee market change for ETH 1.0 chain. Ethereum Improvement Proposal. Activated in the London upgrade, August 2021. <a href="#fnref-11">â†©</a></li>
<li id="fn-12">Daian, Philip / Goldfeder, Steven / Kell, Tyler / Li, Yunqi / Zhao, Xueyuan / Bentov, Iddo / Breidenbach, Lorenz / Juels, Ari (2020): Flash Boys 2.0: Frontrunning in Decentralized Exchanges, Miner Extractable Value, and Consensus Instability. In: IEEE Symposium on Security and Privacy (S&P), 2020. DOI: 10.1109/SP40000.2020.00040. <a href="#fnref-12">â†©</a></li>
<li id="fn-13">Flashbots: MEV-Explore and MEV-Boost Dashboard (accessed 27 March 2026). <a href="#fnref-13">â†©</a></li>
<li id="fn-14">relayscan.io: Builder and relay market shares (accessed 27 March 2026). <a href="#fnref-14">â†©</a></li>
<li id="fn-15">relayscan.io: Builder and relay market shares; MEV Watch (accessed 27 March 2026). <a href="#fnref-15">â†©</a></li>
<li id="fn-16">beaconcha.in: Ethereum Beacon Chain Explorer (accessed 27 March 2026). The figure of 964,768 reflects the post-Pectra consolidation effect of EIP-7251. <a href="#fnref-16">â†©</a></li>
<li id="fn-17">Buterin, Vitalik / Griffith, Virgil (2019): Casper the Friendly Finality Gadget. arXiv:1710.09437. For the combined Gasper specification cf. Buterin, Vitalik et al. (2020): Combining GHOST and Casper. arXiv:2003.03052. <a href="#fnref-17">â†©</a></li>
<li id="fn-18">beaconcha.in: Epoch Finality Statistics. The 13 non-finalized epochs occurred on 11 and 12 May 2023. Cf. Etherscan Blog (2023): Battle-Testing Ethereum's Finality. <a href="#fnref-18">â†©</a></li>
<li id="fn-19">CoinDesk (18 February 2026): Ethereum Staking Rate Reaches 30.8% of Total Supply. The effective APR figure of approximately 2.6 percent reflects the decline arising from the growing validator base under inverse square-root scaling of issuance. <a href="#fnref-19">â†©</a></li>
<li id="fn-20">beaconcha.in: Ethereum Beacon Chain Explorer (accessed 27 March 2026). The figure of 964,768 reflects the post-Pectra consolidation effect of EIP-7251. <a href="#fnref-20">â†©</a></li>
<li id="fn-21">Buterin, Vitalik / Griffith, Virgil (2019): Casper the Friendly Finality Gadget. arXiv:1710.09437. For the combined Gasper specification cf. Buterin et al. (2020): Combining GHOST and Casper. arXiv:2003.03052. <a href="#fnref-21">â†©</a></li>
<li id="fn-22">beaconcha.in: Slashing Statistics (accessed 27 March 2026). Cf. Migalabs / CryptoSlate (11 September 2025) for the analysis of the SSV Network/Ankr slashing event. <a href="#fnref-22">â†©</a></li>
<li id="fn-23">Dune Analytics / CCN (5 March 2026): Lido Staking Market Share. The decline from 32 percent (2023) to 22.8 to 23 percent reflects relative market dynamics. <a href="#fnref-23">â†©</a></li>
<li id="fn-24">Lido DAO: Tokenholder Update (26 February 2026). DVT adoption and QoQ growth. For the governance decision on self-limitation cf. Lido DAO Snapshot Vote, June 2022. <a href="#fnref-24">â†©</a></li>
<li id="fn-25">Buterin, Vitalik (2020): A rollup-centric ethereum roadmap. Blogpost, October 2020. URL: https://vitalik.eth.limo/general/2020/10/08/rollup.html <a href="#fnref-25">â†©</a></li>
<li id="fn-26">EIP-4844: Shard Blob Transactions. Ethereum Improvement Proposal, activated in the Dencun upgrade, March 2024. For cost reduction data cf. L2BEAT: Transaction Costs Dashboard (accessed 27 March 2026). <a href="#fnref-26">â†©</a></li>
<li id="fn-27">L2BEAT: Stages Framework and Risk Analysis. URL: https://l2beat.com/scaling/summary (accessed 27 March 2026). For Vitalik Buterin's analysis of stage transitions cf. Buterin, Vitalik (2025): Stages as a framework for evaluating rollup maturity. Blogpost. <a href="#fnref-27">â†©</a></li>
<li id="fn-28">For cumulative bridge hack damages cf. DeFiLlama: Hacks Dashboard and Chainalysis: Crypto Crime Report 2025. <a href="#fnref-28">â†©</a></li>
<li id="fn-29">CoinGecko / DefiLlama: Stablecoin Market Cap by Chain (accessed 27 March 2026). The figure of 52 to 54 percent refers to Ethereum's share of the total stablecoin market including L2 issuance. <a href="#fnref-29">â†©</a></li>
<li id="fn-30">GENIUS Act: Guiding and Establishing National Innovation for U.S. Stablecoins Act. U.S. Congress (2025), signed 18 July 2025. <a href="#fnref-30">â†©</a></li>
<li id="fn-31">EIP-1: EIP Purpose and Guidelines. URL: https://eips.ethereum.org/EIPS/eip-1. For the 2025 EIP statistics cf. Ethereum Magicians Forum and EIPs.ethereum.org (accessed 27 March 2026). <a href="#fnref-31">â†©</a></li>
<li id="fn-32">The formulation "Rough Consensus and Running Code" originates with David Clark, who coined it at an IETF meeting in 1992. Cf. RFC 7282: On Consensus and Humming in the IETF. Internet Engineering Task Force, 2014. <a href="#fnref-32">â†©</a></li>
<li id="fn-33">Ethereum Foundation: Report 2024. URL: https://ethereum.foundation/report-2024.pdf. For current treasury estimates cf. Arkham Intelligence: Ethereum Foundation Wallet Tracking (accessed 18 March 2026). <a href="#fnref-33">â†©</a></li>
<li id="fn-34">Protocol Guild: Documentation and Membership. URL: https://protocol-guild.readthedocs.io (accessed 27 March 2026). <a href="#fnref-34">â†©</a></li>
<li id="fn-35">Cf. Frischmann 2012 and the presentation in Chapter 2, Section 2.1. <a href="#fnref-35">â†©</a></li>
<li id="fn-36">Van Schewick, Barbara (2010): Internet Architecture and Innovation. MIT Press. Cf. the reference in Chapter 3, Section 3.1.2. <a href="#fnref-36">â†©</a></li>
<li id="fn-37">Electric Capital: Developer Report, September 2025. DefiLlama: Ethereum DeFi TVL (accessed 27 March 2026). <a href="#fnref-37">â†©</a></li>
<li id="fn-38">Cf. Grimmelmann / Windawi 2023, pp. 1097–1129, and the presentation in Chapter 2, Section 2.1. <a href="#fnref-38">â†©</a></li>
<li id="fn-39">Cf. Frischmann 2012, pp. 61–96, on the characterization of infrastructure as an enabling structure whose value is realized in the activities it makes possible. <a href="#fnref-39">â†©</a></li>
<li id="fn-40">Data on stablecoin market capitalization on Ethereum: DefiLlama, Stablecoins Dashboard, accessed early 2026. <a href="#fnref-40">â†©</a></li>
<li id="fn-41">Electric Capital (2025): Developer Report, September 2025. The methodology counts active developers as persons who have contributed code to an Ethereum-related open-source repository within the past 30 days. <a href="#fnref-41">â†©</a></li>
<li id="fn-42">Buterin, Vitalik / Griffith, Virgil (2019): Casper the Friendly Finality Gadget. arXiv:1710.09437. The BFT thresholds are implemented in the Beacon Chain specification and have been operative since the Merge (September 2022). <a href="#fnref-42">â†©</a></li>
<li id="fn-43">Finality data: beaconcha.in, 27 March 2026. The 13 non-finalized epochs in May 2023 were the result of two consecutive attestation-handling bugs in Prysm and Teku. <a href="#fnref-43">â†©</a></li>
<li id="fn-44">For comparison of settlement speeds: SWIFT settlement takes 1–3 days, ACH 2–3 days, SEPA transfers typically 1 business day. Ethereum's 12.8-minute finality and atomic composability enable coordination patterns structurally impossible in these systems. <a href="#fnref-44">â†©</a></li>
<li id="fn-45">The Beacon Chain specification defines an epoch as 32 slots of 12 seconds each. Finality requires the justification and finalization of two consecutive checkpoints by more than two-thirds of the validator set. <a href="#fnref-45">â†©</a></li>
<li id="fn-46">The technical details of the May 2023 Inactivity Leak event are documented in Section 4.2. The assessment here concerns the infrastructural significance: automated self-healing without external coordination. <a href="#fnref-46">â†©</a></li>
<li id="fn-47">OFAC compliance data: MEV Watch / relayscan.io, 27 March 2026. The historical trajectory from the 79-percent peak documents the market-driven normalization. <a href="#fnref-47">â†©</a></li>
<li id="fn-48">Van Loon v. Department of the Treasury, 5th Circuit Court of Appeals, November 2024: immutable smart contracts are not "property" within the meaning of the IEEPA. OFAC delisting of Tornado Cash: 21 March 2025. <a href="#fnref-48">â†©</a></li>
<li id="fn-49">Builder market shares: relayscan.io, 27 March 2026. HHI calculated as the sum of squared market shares. The DOJ Horizontal Merger Guidelines of 2010 define an HHI above 2,500 as a highly concentrated market. <a href="#fnref-49">â†©</a></li>
<li id="fn-50">Daian, Philip et al. (2020): Flash Boys 2.0: Frontrunning in Decentralized Exchanges, Miner Extractable Value, and Consensus Instability. In: IEEE Symposium on Security and Privacy, pp. 910–927. <a href="#fnref-50">â†©</a></li>
<li id="fn-51">Node distribution data: Ethernodes, early 2026. Cloud concentration estimate: approximately 59 percent of hosted EL nodes on AWS (35.5%), Hetzner (13.8%), and OVHcloud (9.7%). <a href="#fnref-51">â†©</a></li>
<li id="fn-52">Lido Tokenholder Update, 26 February 2026: 547,968 ETH on DVT (Distributed Validator Technology), +57 percent QoQ. <a href="#fnref-52">â†©</a></li>
<li id="fn-53">Cf. Van Schewick, Barbara (2010): Internet Architecture and Innovation. MIT Press. Van Schewick's argument that the end-to-end architecture of the Internet enables innovation at the edges is transferable to Ethereum's permissionless smart contract layer. <a href="#fnref-53">â†©</a></li>
<li id="fn-54">The Yellow Paper (Wood 2014/2024) formally defines the EVM semantics. KEVM (Hildenbrandt et al. 2018) provides a machine-verified formalization in the K Framework. <a href="#fnref-54">â†©</a></li>
<li id="fn-55">Lazarus Group data: Chainalysis Report, February 2026. The attacks occurred primarily through private key compromise and cross-chain message spoofing at audited protocols. <a href="#fnref-55">â†©</a></li>
<li id="fn-56">Projections based on documented growth rates and the planned Gas target of 200 million. Cf. Section 4.8 for the data basis and scenario analysis. <a href="#fnref-56">â†©</a></li>
<li id="fn-57">L2BEAT documents the distribution of staking methods. Solo stakers under one percent: estimate based on Dune Analytics, Q1 2026. <a href="#fnref-57">â†©</a></li>
<li id="fn-58">Verkle Trees: EIP-6800, status RES, Stagnant. History Expiry: EIP-4444, Phase 1 DEPL since July 2025, Phase 2 PLAN. State Expiry: RES, without implementation commitment. <a href="#fnref-58">â†©</a></li>
<li id="fn-59">Cf. Mayntz 1993, pp. 97–108. The tension between steering and self-organization that Mayntz identifies as the central research problem manifests in Ethereum's informal governance model as the tension between Rough Consensus and formal authority. <a href="#fnref-59">â†©</a></li>
<li id="fn-60">Protocol Guild: 190+ members, >$50 million received (as of January 2026). EF treasury estimate: $850–950 million based on the Ethereum Foundation Report 2024 and ETH market developments. <a href="#fnref-60">â†©</a></li>
<li id="fn-61">Client diversity data: clientdiversity.org / supermajority.info, as of early 2026. Execution Layer distribution: Geth approximately 42 percent, Nethermind approximately 24 percent, Besu approximately 16 percent, Erigon approximately 11 percent, Reth approximately 7 percent. <a href="#fnref-61">â†©</a></li>
<li id="fn-62">On the L2 lock-in problem: OP Stack (Apache 2.0, Optimism Foundation), Arbitrum Nitro (MIT, Offchain Labs governance), zkSync Era and Starknet (partially proprietary provers). The fragmentation creates a new layer of soft lock-ins that does not exist at the base layer. <a href="#fnref-62">â†©</a></li>
<li id="fn-63">Cloud concentration estimate: Ethernodes, early 2026. The 59 percent refers to hosted EL nodes. The home-staking share of under 15 percent is an estimate based on the node and cloud distribution from Section 4.1. <a href="#fnref-63">â†©</a></li>
<li id="fn-64">The cascade logic in the second step was classified in Chapter 2 as a methodological supplement: "Conditionally fulfilled" at a Critical Condition is qualitatively a different state from "Fulfilled with qualification," because the core property of the infrastructure claim is not yet secured at the required level. Cf. Section 2.3 for the definition of verdict categories and the M3 cascade logic. <a href="#fnref-64">â†©</a></li>
<li id="fn-65">Cf. Section 2.3.3 for the definition of the five verdict categories and the M3 cascade logic. "Suitable under substantial conditions" is the middle category of the spectrum and was defined generically in Chapter 2, independent of which criterion is affected and which system is being assessed. <a href="#fnref-65">â†©</a></li>
</ol>
</div>
