---
titel: Delta, Limits, and Overall Judgment
nummer: 6
befund: "The gap between the current and the target state, the persistent limits of the system, and the limits of the evaluation framework itself. The chapter answers the research question."
sprache: en
---

## 6.1 The Delta

### 6.1-A The Profile Comparison

The current-state assessment from Chapter 4 and the target-state assessment from Chapter 5 yield two numerical profiles that differ substantially in composition but must be read with precision in their implications.

The current-state profile reads 0-11-1-0: no criterion at "Met," eleven criteria at "Met with Qualification," one criterion at "Conditionally Met" (Neutrality and Censorship Resistance, II.1), no criterion at "Open."<a href="#fn-1" id="fnref-1"><sup>1</sup></a> The target-state profile reads 6-6-0-0: six criteria at "Met," six at "Met with Qualification," no criterion at "Conditionally Met," no criterion at "Open."<a href="#fn-2" id="fnref-2"><sup>2</sup></a>

| Criterion | Current State | Target State | Change |
|---|---|---|---|
| I.1 Functional Irreplaceability | Met with Qualification | Met | ↑ |
| I.2 Security and Trust Load | Met with Qualification | Met with Qualification | — |
| I.3 Coordination Function | Met with Qualification | Met | ↑ |
| I.4 Minimal Load-Bearing Guarantees | Met with Qualification | Met | ↑ |
| II.1 Neutrality and Censorship Resistance | Conditionally Met | Met with Qualification | ↑↑ |
| II.2 Open Generativity | Met with Qualification | Met with Qualification | — |
| II.3 Independent Verifiability | Met with Qualification | Met with Qualification | — |
| II.4 Low-Threshold Inclusivity | Met with Qualification | Met with Qualification | — |
| III.1 Long-Term Stability | Met with Qualification | Met | ↑ |
| III.2 Adaptive Governance | Met with Qualification | Met | ↑ |
| III.3 Sovereign Portability | Met with Qualification | Met | ↑ |
| III.4 Hardware Agnosticism | Met with Qualification | Met with Qualification | — |

Seven criteria improve, five remain unchanged, none deteriorate.

### 6.1-B The Leap at II.1

The most important individual change between the current and target states is the rise of Neutrality and Censorship Resistance (II.1) from "Conditionally Met" to "Met with Qualification." This rise is not gradual. It marks the transition from a structural defect to a qualified strength.

In the current state, neutrality is emergent: no protocol mechanism enforces transaction inclusion. Transaction uptake depends on the market structure of block builders, whose concentration among three actors stood at 93.3 percent.<a href="#fn-3" id="fnref-3"><sup>3</sup></a> That is "Conditionally Met" in the M3 cascade: the core property of a protocol-level neutrality guarantee is recognizably targeted but not yet realized.

In the target state, a three-layer system forms the protocol foundation. FOCIL (EIP-7805) enforces inclusion through a 2,000-member committee whose 1-of-N honesty model makes corruption structurally unattractive.<a href="#fn-4" id="fnref-4"><sup>4</sup></a> ePBS (EIP-7732) eliminates relay dependency and separates proposers and builders into distinct, protocol-coordinated roles.<a href="#fn-5" id="fnref-5"><sup>5</sup></a> The Encrypted Mempool addresses pre-inclusion privacy as a research reserve and closes the remaining disclosure channel.<a href="#fn-6" id="fnref-6"><sup>6</sup></a>

The rise is structurally significant because it removes the second cascade cap in the M3 logic. In the current state, one Critical Condition pushed the verdict to "Suitable under Substantial Conditions." In the target state, no Critical Condition remains at "Conditionally Met": the cap falls away, and the overall verdict can rise by one level.

### 6.1-C The Six Improvements at Structural and Qualitative Level

Six criteria rise from "Met with Qualification" to "Met." These rises follow different drivers.

**I.1 Functional Irreplaceability.** The target-state improvement rests on two mutually reinforcing mechanisms. Native Rollups (EIP-8079) bind L2 execution to L1 at the protocol level: a rollup using native verification cannot migrate to another L1 without fundamentally altering its security model.<a href="#fn-7" id="fnref-7"><sup>7</sup></a> At the same time, reach expands: the L1-zkEVM (EIP-8025) makes L1 blocks lightweight-verifiable, opening usage categories that are structurally inaccessible in the current state. The EVM standard has incorporated all top-10 L2s and is therefore no longer merely a nominal standard.

**I.3 Coordination Function.** The layered finality stack (Based Preconfirmations, Fast Confirmation Rule, Three-Slot Finality) delivers in the target state a coordination infrastructure across all time horizons that does not exist in the current state.<a href="#fn-8" id="fnref-8"><sup>8</sup></a> Native Rollups structurally raise switching costs: tokenized values secured through EXECUTE verification are systemically anchored in Ethereum.

**I.4 Minimal Load-Bearing Guarantees.** The rise rests on three independent mechanisms that operate redundantly. FOCIL guarantees censorship resistance at the protocol level. The Inactivity Leak ensures automated self-healing without external coordination. The layered finality stack delivers economic finalization within two seconds, faster than any clearing infrastructure in the traditional financial system.<a href="#fn-9" id="fnref-9"><sup>9</sup></a>

**III.1 Long-Term Stability.** The Tiered State (Active, Hibernated, Dead) addresses the state growth problem structurally, not merely through accelerated decommissioning.<a href="#fn-10" id="fnref-10"><sup>10</sup></a> History Expiry (EIP-4444, Phase 1 DEPL) reduces node storage requirements. The Fusaka upgrade cycle kept to a semi-annual schedule for the first time, a maturity indicator for upgrade coordination.

**III.2 Adaptive Governance.** The strategic pivot (February 2026) is the strongest evidence: a paradigmatic change of direction, from rollup-centric to L1-first, was executed without crisis, without fork, and without any authority yielding control.<a href="#fn-11" id="fnref-11"><sup>11</sup></a> That is operational proof of governance capacity beyond the track record of tactical forks. The Lean Ethereum process demonstrates the ability to pare itself down, not only to add.

**III.3 Sovereign Portability.** The target-state roadmap resolves three documented current-state dependencies: relay dependency through ePBS, L2 proof-system dependency through Native Rollups, and RPC dependency through Stateless Clients and Trustless RPC.<a href="#fn-12" id="fnref-12"><sup>12</sup></a> These three resolutions transform operative soft lock-ins into dependencies eliminated at the protocol level.

### 6.1-D The Five Continuities

Five criteria remain at "Met with Qualification." In four of the five cases, the substance of fulfillment improves without crossing the threshold.

**I.2 Security and Trust Load.** ePBS and the L1-zkEVM address trust minimization substantially. The remaining qualification lies at two residual factors: the proving conjecture (the security of the SNARK system depends on soundness assumptions that have no formal verification equivalent to ECDSA) and the access layer (Helios and Trustless RPC are DEPL and PLAN respectively, not broadly deployed).

**II.2 Open Generativity.** The target-state roadmap expands generative capacity at three levels: compute (RISC-V as an alternative execution environment, RES), UX (NAA and Passkeys, DEPL), and L2 creation (Native Rollups). The qualification remains because RISC-V has no governance anchoring and EOF (the most significant EVM extension package) was withdrawn from Fusaka.<a href="#fn-13" id="fnref-13"><sup>13</sup></a>

**II.3 Independent Verifiability.** The Execution Layer Specification (ELS) as an executable reference implementation is a substantial advance. The qualification lies at a methodological boundary: the formal verification of a complete zkEVM prover exceeds the state of current methods.<a href="#fn-14" id="fnref-14"><sup>14</sup></a> That is not a roadmap gap. It is a limit of the field.

**II.4 Low-Threshold Inclusivity.** The NAA transformation (EIP-7702, EIP-8141) and the PeerDAS bandwidth model substantially improve inclusivity at the user and verifier level. The 32-ETH solo-staking threshold remains unchanged. Rainbow Staking (the only conceptual resolution path) is Research Reserve with no implementation commitment. This is the only criterion for which the current-state deficit goes unaddressed by the target-state roadmap.

**III.4 Hardware Agnosticism.** Protocol-level hardware agnosticism is further improved in the target state by PeerDAS (bandwidth reduction ~85%) and Stateless Clients. Cloud concentration (~59% across three providers) remains unchanged. ePBS and the zkEVM address the protocol layer, not the physical infrastructure layer.

### 6.1-E The Verdict Shift

The M3 cascade in the target state runs through five steps.<a href="#fn-15" id="fnref-15"><sup>15</sup></a> No Critical Condition stands at "Open": the cascade passes the first step. No Critical Condition stands at "Conditionally Met": the second cap that in the current state pushed the verdict to "Suitable under Substantial Conditions" falls away. The three Structural Conditions (I.1, I.3, III.1) all stand at "Met": the third step sets no cap. I.2 and II.1 stand at "Met with Qualification," not at full "Met": the verdict remains below the unqualified "Suitable." The result is "Suitable with Conditions."

The grade is determined separately. The six Qualitative Criteria (II.2, II.3, II.4, III.2, III.3, III.4) all stand at least at "Met with Qualification": the grade remains "Good."<a href="#fn-16" id="fnref-16"><sup>16</sup></a>

The shift lies in the foundation of suitability, not in its quality. The grade does not change: the system satisfies the Qualitative Criteria at the same strength as in the current state. What changes is the security of the foundation: the transition from "Suitable under Substantial Conditions" to "Suitable with Conditions" means that the core functions of the infrastructure rest on a more protocol-foundational basis in the target state.

## 6.2 Persistent Limits of the System

### 6.2-A The Crisis-Response Gap

A pattern runs through three criteria of the target-state profile and forms a cross-cutting gap that is not localized in any single criterion of the target-state verdict but carries systemic relevance.

**Builder concentration.** ePBS resolves the protocol-level relay dependency and enforces correct payment settlement between proposers and builders. What ePBS does not address are the economic roots of builder concentration: latency advantages from geographic proximity to exchange systems, cross-domain arbitrage capacity, and exclusive order flow that accounts for approximately 54 percent of block value.<a href="#fn-17" id="fnref-17"><sup>17</sup></a> Even with ePBS fully activated, three to five builders can control more than 70 percent of block production through economic superiority. Attested Program Sequencing (APS) and MEV Burn are Research Reserve and offer no operative resolution path.<a href="#fn-18" id="fnref-18"><sup>18</sup></a>

**Liquid staking.** Lido holds approximately 23 percent of staked ETH, down from over 32 percent. A protocol-level cap that sets a structural feedback limit at a given market share does not exist.<a href="#fn-19" id="fnref-19"><sup>19</sup></a> DVT (Obol, SSV) is growing, with 547,968 ETH under DVT at Lido alone and 57 percent QoQ growth, but DVT is a decentralization measure at the validator level, not a substitute for a staking cap at the operator level. Rainbow Staking (RES) could offer a structural resolution but has no implementation commitment.

**Emergency Response Plan.** The Ethereum ecosystem demonstrated in the response to the Prysm bug in December 2025 that rapid coordination is possible, but the coordination occurred through informal networks and EF communication channels, not through a protocol-anchored mechanism.<a href="#fn-20" id="fnref-20"><sup>20</sup></a> The Emergency Response Plan is documented, but the coordination obligation is not enforceable. In a system that presents itself as sovereignty-resistant infrastructure, informal crisis coordination is a structural gap between claim and reality.

These three findings cut across II.1, III.1, and III.2. The target-state verdict is "Suitable with Conditions, Grade Good": the Crisis-Response Gap does not push any of these findings to a lower level, but qualifies each of them. The question of whether Ethereum can, in a systemic crisis (a coordinated staker exit, a critical bug in a dominant client, a simultaneous attack across multiple layers) demonstrate the resilience that a fundamental infrastructure claim requires remains answered within the target-state framework, but under qualification.

### 6.2-B The Post-Quantum Gap

The post-quantum migration is the only limit in the target-state profile for which an exogenous time dimension determines relevance.

The architecture is fully laid out. For the consensus layer, the Beam Chain (RES, post-2029) delivers SNARK-based consensus proofs with leanXMSS as a hash-based, PQ-secure signature layer.<a href="#fn-21" id="fnref-21"><sup>21</sup></a> For the data layer, the KZG-to-STARK migration in the Full Danksharding end state resolves the commitment problem.<a href="#fn-22" id="fnref-22"><sup>22</sup></a> For the execution layer, the combination of EIP-7702, EIP-8141 (Validation Frames, CFI Hegotá), and NAA provides an ECDSA exit path.<a href="#fn-23" id="fnref-23"><sup>23</sup></a>

Implementation is structurally unsecured. The Beam Chain is Research Reserve, with no fork date and no implementation deadline. Validation Frames (EIP-8141) is CFI Non-Headliner, under observation in consensus but not in the delivery path. ML-DSA signatures are 2.4 to 4.6 kilobytes, compared to 64 bytes for ECDSA, with a state-bloat factor at full migration of approximately 59 times.<a href="#fn-24" id="fnref-24"><sup>24</sup></a>

The time dimension is non-trivial. The Metaculus forecast assigns a probability of approximately 20 percent to the availability of a cryptographically relevant quantum computer by 2030.<a href="#fn-25" id="fnref-25"><sup>25</sup></a> The Beam Chain has no delivery target before 2029. The window between the emergence of a relevant quantum computer and the completion of the PQ migration is unknown. This finding qualifies the target-state verdict in I.2 and III.1 but does not change it: the risk is priced in, not externalized.

### 6.2-C Residual Infrastructure Risks

Three further limits of the target-state profile are not addressed by the roadmap but qualify the existing qualifications on existing criteria.

**Cloud concentration.** Approximately 59 percent of hosted execution-layer nodes run on three cloud providers. The AWS outage in October 2025 showed that the network absorbed the situation without finality loss, but the operative corridor between normal operation and finality loss narrowed.<a href="#fn-26" id="fnref-26"><sup>26</sup></a> The target-state roadmap does not directly address cloud concentration. Stateless Clients lower the access threshold for home staking, but home staking also depends on the 32-ETH barrier and network latency.

**Solo-staking barrier.** The 32-ETH minimum deposit corresponds to approximately 67,000 USD at Q1 2026 price levels. Rainbow Staking (the only conceptual resolution path) has no implementation commitment in the current roadmap. This is the only one of the twelve criteria for which the current-state deficit remains unchanged in the target state.

**L2 Stage-2 deficit.** No major rollup had reached Stage 2 in early 2026. Stage 2 is the level at which the Security Council holds no veto position and the system runs purely on protocol rules. Native Rollups and Based Sequencing address the structural L2 security architecture, but reaching Stage 2 depends not only on protocol technology, but on the decision of individual rollup operators to relinquish control.<a href="#fn-27" id="fnref-27"><sup>27</sup></a>

## 6.3 Limits of the Evaluation Framework

The crisis-response gap of the preceding section is a limit that the evaluation framework still captures, because it cuts across three of its criteria and enters as their shared finding. A second limit concerns the reach of the instrument rather than the system, because four properties of Ethereum lie outside what any of the twelve criteria targets. The assessment of suitability as infrastructure has not rated them weakly. It has not addressed them at all, and it can say nothing about what no criterion measures.

**Permissionless Composability** appears in the evaluation framework, but only in a narrowed form. The second criterion of the second dimension (II.2) tests atomic composability as a binary indicator: whether Smart Contracts can interact with one another within a single transaction. The criterion supplements the indicator with permissionless deployment and open tooling. Outside the measurement lies composability as a combinatorial system property: the exponential and permissionless interplay of arbitrarily many contracts producing constructions that no one foresaw. In the so-called Money Legos of DeFi protocols this interplay takes concrete form. The criterion captures whether contracts can interact, not the generative power of their open combinability as a quality in its own right. The assessment makes no statement about this power, because the criterion reduces it to a yes-or-no question that presupposes its existence without measuring its extent.

**Cryptographic system-state verification** stands closer to the evaluation framework and yet remains beyond its reach. The third criterion of the second dimension (II.3) tests whether verification is possible at all. The criterion reads this from formal verification tools, a formal EVM specification, and the prevalence of audits, as the supply side of the trust load (I.2). Beyond the bare possibility lies the proof-based form of verification, in which the system mathematically proves its own aggregate state, via zkEVM and Stateless Clients, rather than securing it through institutional trust. The criterion measures whether a contract can be audited, not that the system carries a cryptographic proof of its own correctness. The assessment says nothing about the shift from institutional to mathematical trust, because the criterion captures the possibility of verification and not the ground on which it rests.

**Decentralized self-development** finds in the evaluation framework a criterion that reaches past it. The second criterion of the third dimension (III.2) tests whether governance is adaptive, whether the system can evolve and respond to new requirements. Outside adaptivity lies self-development without a center: evolution through rough consensus without any instance that could direct changes. Every change must be voluntarily adopted by a majority of node operators. Chapter 2 itself calls this model an extreme case of the Mayntz tension between steering and self-organization, because the system evolves without a central authority directing it. The criterion captures whether adaptive governance is present, not centerless self-development, so the assessment does not bring the absence of a directing authority into view.

**Privacy** falls outside the evaluation framework, and unlike the preceding three limits, no criterion narrows it, because none targets it at all. None of the three dimensions, neither Structural Foundation nor Qualitative Load-Bearing Capacity nor Resilience and Sovereignty, contains a question about confidentiality. With the first three limits, a criterion narrows the property to an indicator. Here the measurement point is entirely absent. The gap means there is simply no criterion. Outside the evaluation framework lies confidentiality as a protocol property, built into the architecture through Encrypted Mempool and pre-inclusion privacy. Privacy is the only one of the four limits that has a correlate in the examined roadmap, anchored in the Lean Ethereum program. The assessment nonetheless says nothing about a property that is genuinely being built into the target state, because the instrument provides no measurement point for it.

The four properties are not a scattered remainder that the criteria happened to miss. They share a common position, each lying outside what the evaluation targets at all. Each of them lies where the system carries a property and the instrument asks no question. That there are four and not a single isolated case reveals a pattern whose interpretation points beyond the reach of this assessment and is taken up by Chapter 7.

## 6.4 Synthesis and Answer to the Research Question

Ethereum today, as a Settlement and data availability layer, secures capital on the order of 100 billion US dollars, representing more than 60 percent of all on-chain-secured DeFi capital. On the same infrastructure, Stablecoins worth approximately 166 billion US dollars are issued, more than half of the global Stablecoin market, and roughly 65 percent of all new Smart Contracts are deployed on the Layer-2 systems whose Settlement and data availability the base layer carries. The system binds more than 31,000 active developers, representing more than 70 percent of all blockchain developers worldwide. This is the concrete substance at stake in the evaluation, before the question of its suitability can be answered. Does this architecture meet the requirements that must be placed on fundamental digital infrastructure? The answer is yes, in both examined states, but in both only conditionally.

Almost all requirements the system meets already today, each with qualifications, and the one that pulls it most sharply downward is censorship resistance at the level of block production. Currently, roughly 15 percent of blocks pass through Relays that exclude transactions from sanctioned addresses, while Titan as the largest Builder openly refrains from doing so. In November 2022 the share stood at 79 percent, meaning that a government sanctions list effectively controlled which transactions a permissionless system processed. This market-driven decline occurred without any intervention in the protocol, solely because non-censoring Builders operate more profitably and the market has shifted toward them. That is the substantial condition in a single image: censorship resistance functions, but it rests on market structure, and a market structure can reverse.

It is this condition that the roadmap addresses, and two proposals would resolve it at the protocol level. FOCIL, a validator-committee-based inclusion-list system, would enforce the inclusion of every named transaction at the protocol level. ePBS, the protocol-native anchoring of Proposer-Builder Separation, would remove the Relays as off-chain intermediaries through which OFAC filtering currently takes place at all. Both carry Plan status, designed but not delivered. Therein lies the actual change, because the nature of the condition itself shifts: today, suitability depends on how the Builder market behaves. After full implementation, it would depend on whether the planned mechanisms deliver what their design prescribes. The roadmap thereby exchanges a market dependency for an implementation dependency, and the condition does not become smaller. It becomes of a different kind.

**The Conditionality Cannot Be Discharged**

Even full implementation of the roadmap does not dissolve the conditionality, and a single missing mechanism makes this tangible: Ethereum has no pause button. As shown in 6.2, in the event of a critical bug no one can halt the network. The only answer remains a costly emergency hard fork. The missing pause button is not a feature that a later roadmap adds. It is the reverse side of centerlessness itself. Anyone wishing to dissolve the conditionality would have to introduce an authority capable of intervening, halting, or bearing liability in a crisis, and would thereby surrender precisely the property that the work has been evaluating Ethereum against. As long as the system remains without a center, its response to acute crises remains bound to social coordination. The conditionality is therefore not an incompleteness that a forthcoming roadmap corrects. It is a consequence of the architectural decision against a center.

**A Qualification Regarding the Instrument**

A qualification belongs to the assessment, and it concerns the instrument rather than the subject. The evaluation grid is constructed on a rule-based rather than an additive basis, so minor constraints below its thresholds do not propagate into the overall assessment. Two systems of very different substance can therefore carry the same assessment, and the baseline and target state demonstrate this against each other: far apart in substance, only one step apart in formal assessment. Anyone reading only the assessment misses how much substance lies between the two states. This is not a weakness of the assessment. It is a property of the instrument that the reader must carry alongside it.

The assessment therefore stands: Ethereum is suitable as fundamental digital infrastructure, today under considerable conditions, after full implementation of the roadmap with conditions, in neither state unconditionally. What conditional suitability means beyond the evaluation result, for the actors who build on the infrastructure, place their trust in it, or regulate it, is taken up by Chapter 7. The final word rests with the assessment, not with the qualification.

<div class="fn-list">
<ol>
<li id="fn-1">Cf. Section 4.10, overall synthesis and current-state verdict. The numerical profile 0-11-1-0 is the compressed representation of the twelve individual assessments from Sections 4.7 to 4.9. <a href="#fnref-1" class="fn-back">↩</a></li>
<li id="fn-2">Cf. Section 5.7-C, target-state overall profile. The profile 6-6-0-0 follows from the three-tier criterion structure and the target-state assessment of the twelve individual criteria in Section 5.7. <a href="#fnref-2" class="fn-back">↩</a></li>
<li id="fn-3">relayscan.io: Builder and relay market shares (retrieved 27 March 2026). Cf. Section 4.7, Dimension II synthesis: the HHI value exceeds the DOJ threshold for highly concentrated markets by a multiple. <a href="#fnref-3" class="fn-back">↩</a></li>
<li id="fn-4">FOCIL (EIP-7805): Fork-Choice Enforced Inclusion List. Status PLAN, SFI Hegotá Headliner. The 1-of-N honesty model requires that at least one member of the 2,000-member inclusion-list committee acts honestly. Cf. Section 5.5-A. <a href="#fnref-4" class="fn-back">↩</a></li>
<li id="fn-5">ePBS (EIP-7732): Enshrined Proposer-Builder Separation. Status PLAN, SFI Glamsterdam. Cf. Section 5.5-A: ePBS eliminates the relay trust assumption and is simultaneously a prerequisite for the proving window of the L1-zkEVM. <a href="#fnref-5" class="fn-back">↩</a></li>
<li id="fn-6">Encrypted Mempool: Status RES. The concept targets pre-inclusion privacy: transaction contents become known to the proposer only after inclusion in the block. Cf. Section 5.1-B. <a href="#fnref-6" class="fn-back">↩</a></li>
<li id="fn-7">Native Rollups (EIP-8079): EXECUTE precompile, Status RES. Cf. Section 5.6-A: the binding is structural because the security proof is tied to the L1 state transition function, and migrating to another L1 requires migration to a different STF framework. <a href="#fnref-7" class="fn-back">↩</a></li>
<li id="fn-8">The layered finality stack comprises Based Preconfirmations (~2s, DEPL, economically secured), Fast Confirmation Rule (~13s, PLAN), and Three-Slot Finality (~36s, RES). Cf. Section 5.6-C. <a href="#fnref-8" class="fn-back">↩</a></li>
<li id="fn-9">For comparison: SWIFT settlement takes 1–3 days, ACH 2–3 days, SEPA transfers typically 1 business day. Ethereum's Based Preconfirmations (~2s) are faster than any traditional clearing infrastructure. Cf. Section 4.8. <a href="#fnref-9" class="fn-back">↩</a></li>
<li id="fn-10">Tiered State (Active, Hibernated, Dead): Status RES. The critical difference from History Expiry (EIP-4444) is that the Tiered State does not delete state entries but transfers them to a state from which they can be restored with a witness. Cf. Section 5.4-A. <a href="#fnref-10" class="fn-back">↩</a></li>
<li id="fn-11">Buterin, Vitalik (X posts, 3 and 5 February 2026). Ethereum Foundation: Protocol Priorities, January/February 2026. The pivot from rollup-centric to L1-first fundamentally shifted resource allocation, roadmap priorities, and EIP evaluation criteria. Cf. Section 5.1-A. <a href="#fnref-11" class="fn-back">↩</a></li>
<li id="fn-12">ePBS → relay independence: Section 5.5-A. Native Rollups → proof independence: Section 5.6-A. Stateless Clients and Trustless RPC → RPC independence: Section 5.3-B. <a href="#fnref-12" class="fn-back">↩</a></li>
<li id="fn-13">EOF (Ethereum Object Format): discussed for the Fusaka upgrade and withdrawn in spring 2026. The decision reflects the Lean Ethereum prioritization. Cf. Section 5.2-C. <a href="#fnref-13" class="fn-back">↩</a></li>
<li id="fn-14">The formal verification of a complete zkEVM prover requires machine-verified correctness of a complex arithmetic circuit and exceeds the current state of formal verification methods. KEVM (Hildenbrandt et al. 2018) formally verified EVM semantics, but the step to verifying the prover that proves this semantics is qualitatively different. Cf. Section 5.7-B. <a href="#fnref-14" class="fn-back">↩</a></li>
<li id="fn-15">Cf. Section 2.3.3 on the M3 cascade and Section 5.8 for the complete target-state cascade execution. <a href="#fnref-15" class="fn-back">↩</a></li>
<li id="fn-16">Cf. Section 2.3.3 on grade definition: the grade is "Good" when all six Qualitative Criteria stand at least at "Met with Qualification." <a href="#fnref-16" class="fn-back">↩</a></li>
<li id="fn-17">Exclusive order flow: estimate ~54% of block value based on Flashbots data and order-flow analysis, March 2026. Cf. Section 5.5-B: builder concentration declined from >90% (top-3, 2024) to ~70–80% but remains structural. <a href="#fnref-17" class="fn-back">↩</a></li>
<li id="fn-18">APS (Attested Program Sequencing) and MEV Burn: Status RES. MEV Burn would limit MEV extraction using an EIP-1559-equivalent logic for the block-space market. Cf. Section 5.5-B. <a href="#fnref-18" class="fn-back">↩</a></li>
<li id="fn-19">Dune Analytics / CCN (5 March 2026): Lido staking market share, ~22.8–23 percent. The Lido DAO voted against a self-imposed market-share cap via Snapshot vote in June 2022. Cf. Section 5.5-C. <a href="#fnref-19" class="fn-back">↩</a></li>
<li id="fn-20">Cointelegraph (2025): Ethereum sees 25% validation drop post-Fusaka as Prysm bug affects network participation. December 2025. Coordination occurred via EF social-media channels, ACD Discord, and direct developer communication, functionally effective but not protocol-anchored. <a href="#fnref-20" class="fn-back">↩</a></li>
<li id="fn-21">Beam Chain: concept presented by Justin Drake, Devcon 7, November 2024. Status RES. leanXMSS: post-quantum-secure signature based on the eXtended Merkle Signature Scheme with lean optimization. Cf. Section 5.5-D. <a href="#fnref-21" class="fn-back">↩</a></li>
<li id="fn-22">KZG → STARK: in the Full Danksharding end state, KZG commitments are replaced by STARK-based polynomial commitments. STARKs require only collision-resistant hash functions and are thus quantum-resistant. Cf. Section 5.2-D. <a href="#fnref-22" class="fn-back">↩</a></li>
<li id="fn-23">EIP-7702 (DEPL, Pectra): temporary EOA delegation. EIP-8141 Validation Frames (CFI Hegotá, Non-Headliner): full NAA. The ECDSA exit path uses the account-abstraction infrastructure to switch signatures to PQ-secure algorithms without a hard fork. Cf. Sections 5.3-C and 5.3-E. <a href="#fnref-23" class="fn-back">↩</a></li>
<li id="fn-24">ML-DSA (CRYSTALS-Dilithium): signature sizes 2.4–4.6 KB depending on security level. ECDSA (secp256k1): 64 bytes. State-bloat factor: (2,400 B / 64 B) ≈ 37.5x to (4,600 B / 64 B) ≈ 72x, median ~59x. Cf. Section 5.3-D. <a href="#fnref-24" class="fn-back">↩</a></li>
<li id="fn-25">Metaculus: forecast on the availability of a cryptographically relevant quantum computer (CRQC) by 2030, as of spring 2026: ~20 percent. A CRQC in this forecast's terms is a quantum computer capable of breaking ECDSA 256-bit keys within a security-critical time frame. Cf. Section 5.7-A. <a href="#fnref-25" class="fn-back">↩</a></li>
<li id="fn-26">Ethernodes (early 2026): cloud concentration estimate ~59% on AWS (35.5%), Hetzner (13.8%), and OVHcloud (9.7%). AWS outage October 2025: the Ethereum network absorbed the failure of an AWS region without finality loss. Cf. Sections 4.9 and 5.7-B. <a href="#fnref-26" class="fn-back">↩</a></li>
<li id="fn-27">L2BEAT: stage classifications, as of early 2026. Stage 2 requires relinquishing the Security Council veto position and full dependence on on-chain proof systems. Cf. Section 5.6-A. <a href="#fnref-27" class="fn-back">↩</a></li>
</ol>
</div>
