---
titel: Implications
nummer: 7
befund: "What does the assessment mean for those who build on the system, trust it, or regulate it? The final chapter steps outside the evaluative role and traces the consequences of the answer."
sprache: en
---

## 7.1 Three Readings of the Verdict

### 7.1-A The Qualified Yes

The overall verdict of this study reads as follows: In the current state, Ethereum is suitable as fundamental digital infrastructure under considerable conditions, grade Good. In the target state — upon full implementation of the roadmap — it reads: Suitable with Conditions, grade Good.<a href="#fn-1" id="fnref-1"><sup>1</sup></a> This is a qualified yes, neither a blank check nor a disqualification. The qualification — "under considerable conditions" in the current state, "with conditions" in the target state — is not a softening that relativizes the verdict. It is the content of the verdict.

For a technical architect, an institutional capital provider, and a regulatory decision-maker, this verdict means the same thing and three different things. It means the same thing: the system satisfies the technical prerequisites of fundamental digital infrastructure across the board — with explicitly named, monitorable conditions. It means three different things because the conditions carry different operational consequences for each audience type: for those who build, the conditions translate into design parameters; for those who trust, they translate into a risk profile; for those who regulate, they translate into a categorization question.

### 7.1-B The Methodological Boundary of This Chapter

The framework is technically structural, not politically prescriptive.<a href="#fn-2" id="fnref-2"><sup>2</sup></a> The implications that follow are consequences of the findings — not recommendations that extend beyond them. Concretely: the verdict does not say whether an institution should adopt Ethereum. It says under which technical conditions the infrastructure is suitable and which properties should be technically relevant when making an adoption decision. Price risk, regulatory context, and competitive positioning — the three variables the framework does not quantify and is not intended to quantify — remain the responsibility of decision-makers.

## 7.2 For Those Who Build: Design Under Conditions

### 7.2-A The Current-State Condition as a Design Parameter

The central condition of the current-state verdict is the implementation of a protocol mechanism that decouples transaction inclusion from the market structure of block builders. In the current state, this mechanism does not exist. Three block builders controlled approximately 68 percent of block production in March 2026.<a href="#fn-3" id="fnref-3"><sup>3</sup></a> Exclusive order flow accounted for approximately 54 percent of block value.<a href="#fn-4" id="fnref-4"><sup>4</sup></a> Neutrality is operationally present but not protocol-guaranteed.

For those who build, this finding translates into a concrete design parameter: applications that require censorship resistance as a core requirement — applications where the guarantee of transaction inclusion is decision-critical — must account for a residual risk in the current state. This is not a disqualifying factor. It is a planning parameter: either the neutrality gap is addressed through additional layers — for example, private mempools with escape-hatch mechanisms — or it is accepted as a known residual risk and priced into the system architecture. Which choice is correct depends on the use case, not the verdict.

### 7.2-B Roadmap Monitoring as a Structural Planning Task

The current-state condition is temporary — it is tied to concrete roadmap milestones that are monitorable. FOCIL (EIP-7805, SFI Hegotá Headliner) enforces protocol-level transaction inclusion through a 2,000-member committee with a 1-of-N honesty model.<a href="#fn-5" id="fnref-5"><sup>5</sup></a> ePBS (EIP-7732, SFI Glamsterdam) eliminates the relay trust assumption and separates proposers and builders at the protocol level.<a href="#fn-6" id="fnref-6"><sup>6</sup></a> The L1 zkEVM (EIP-8025, CFI post-Glamsterdam) makes L1 blocks lightweight-verifiable and opens new usage categories that currently require full-node participation.<a href="#fn-7" id="fnref-7"><sup>7</sup></a>

Those who build on Ethereum as an infrastructure layer can integrate these milestones into their planning horizon. The semi-annual upgrade model — Fusaka is the first documented case in which Ethereum met a self-imposed upgrade deadline<a href="#fn-8" id="fnref-8"><sup>8</sup></a> — provides, for the first time, a structured planning basis for adapting system architectures to evolving protocol guarantees. Builders are not passive observers of these milestones: the core developer coordination process is accessible for substantive contributions from the application developer ecosystem, and ACD proceedings are public.

### 7.2-C Continuity Strength as an Operational Guarantee

Beyond the conditions, the verdict identifies strengths that constitute operational guarantees for those who build. The strongest is backward compatibility: contracts from 2017 run on Ethereum unchanged. Four successful hard forks since the Merge — Shanghai, Dencun, Pectra, Fusaka — have not broken EVM state.<a href="#fn-9" id="fnref-9"><sup>9</sup></a>

This is a rare characteristic in the history of technology. An investment in Ethereum-native architecture has a far longer half-life than an investment in proprietary infrastructure whose API stability is controlled by a single company. The EVM standard binds all top-10 L2s — building on EVM means building on a standard, not a platform.<a href="#fn-10" id="fnref-10"><sup>10</sup></a> Native Rollups (EIP-8079) reinforce this binding structurally in the target state: a rollup using EXECUTE verification cannot migrate to another L1 without fundamentally changing its security model.

## 7.3 For Those Who Trust: The Risk Profile of an Infrastructure

### 7.3-A What "Grade Good" Means

The verdict contains two components: category (suitability) and grade (Good). For those who trust Ethereum as an infrastructure layer — as institutional users, as counterparties, as a custody or settlement layer — the grade is the relevant piece of information for the trust architecture.

"Grade Good" means: all six qualitative criteria — Security and Trust Load (I.2), Neutrality and Censorship Resistance (II.1), Open Generativity (II.2), Independent Verifiability (II.3), Low-Threshold Inclusivity (II.4), Hardware Agnosticism (III.4) — stand at minimum at "Satisfied with Reservation".<a href="#fn-11" id="fnref-11"><sup>11</sup></a> This means: the qualitative properties of the infrastructure function — they carry named reservations, but no structural defects.

The category "Suitable under Considerable Conditions" (current state) carries, by contrast, a structural condition: the neutrality guarantee is operationally present but not protocol-guaranteed.<a href="#fn-12" id="fnref-12"><sup>12</sup></a> The transition to the target-state verdict "Suitable with Conditions" is not a gradual increase — it marks the replacement of a Critical Condition at "Conditionally Satisfied" with a complete set of protocol mechanisms. That is the categorically relevant difference for all who hold institutional commitments in Ethereum infrastructure.

### 7.3-B The Three Concentration Risks as a Systemic Risk Profile

The target-state profile identifies three concentration risks that are not fully resolved by the roadmap: builder concentration (top-3 approximately 68–80 percent of block production),<a href="#fn-13" id="fnref-13"><sup>13</sup></a> liquid staking concentration (Lido approximately 23 percent of staked ETH),<a href="#fn-14" id="fnref-14"><sup>14</sup></a> and cloud concentration (approximately 59 percent of hosted nodes on three providers).<a href="#fn-15" id="fnref-15"><sup>15</sup></a>

These three risks are typically treated as separate findings. They share a common structure: they are economic concentrations at the operational layer of a system whose protocol security architecture is designed for decentralization at the protocol layer. Protocol security and operational security are not equivalent. The network can have a robust slashing architecture while simultaneously exhibiting a cloud concentration that would substantially reduce network participation in the event of a coordinated failure of multiple providers.

For those who operate Ethereum as mission-critical infrastructure, this is the structurally open question: is the operational resilience equivalent to the protocol security promise? The honest answer from the framework: partially. The economic security and the protocol architecture are strong. The operational resilience against a coordinated attack on the operational infrastructure is named, but not protocol-enforced — coordination occurs through informal networks whose effectiveness is documented but not compellable.

### 7.3-C The Post-Quantum Risk Horizon

The post-quantum gap has a particular structure for those who trust: it is the only boundary where an exogenous time variable — the availability of a cryptographically relevant quantum computer — interferes with endogenous implementation speed. All other boundaries of the target-state profile are endogenous conditions undergoing gradual change.

The Metaculus forecast assigns a probability of approximately 20 percent to the availability of a cryptographically relevant quantum computer by 2030.<a href="#fn-16" id="fnref-16"><sup>16</sup></a> The Beam Chain has no delivery commitment before 2029.<a href="#fn-17" id="fnref-17"><sup>17</sup></a> The window between CRQC availability and completed migration is unknown. For long-term commitments in Ethereum-native assets or infrastructure, this is a non-ignorable risk factor — not because occurrence is probable, but because the damage in the event of occurrence would be systemic.

This does not mean the risk negates trust. It means the post-quantum migration should be integrated into risk management as an exogenous monitoring point: as a trigger event that initiates specific reviews when the quantum computing horizon shifts — not as a daily risk check.

## 7.4 For Those Who Regulate: Infrastructure or Financial Product

### 7.4-A What the Framework Provides for Regulation

The framework provides regulators with something that is rarely made explicit in the current regulatory debate: a technically structural classification that is independent of market dynamics. The GENIUS Act and the EU MiCA Regulation primarily regulate stablecoins and crypto-assets as financial products.<a href="#fn-18" id="fnref-18"><sup>18</sup></a> The framework of this study classifies Ethereum as infrastructure — as the medium, not the product — and does so methodologically, not normatively.<a href="#fn-19" id="fnref-19"><sup>19</sup></a>

This distinction is not trivial. If Ethereum satisfies the conditions of fundamental infrastructure, then the regulatory instruments applied to infrastructure should be analytically separated from the toolbox for financial products. This is not a regulatory recommendation. It is a methodological consequence of the findings.

### 7.4-B Neutrality as a Regulatory Category

In the current state, Ethereum's transaction neutrality is operationally present but not protocol-guaranteed. In the target state, it is protocol-implemented through a three-layer mechanism set: FOCIL enforces inclusion via a 2,000-member committee with a 1-of-N honesty model,<a href="#fn-20" id="fnref-20"><sup>20</sup></a> ePBS separates proposers and builders at the protocol level, and the encrypted mempool addresses pre-inclusion privacy.

This shift is relevant for regulators because neutrality in regulatory discussions is frequently treated as a binary property: a system either is or is not neutral. The verdict shows that neutrality is graded and mechanism-dependent. Protocol-enforced neutrality — through FOCIL — has a structurally different robustness than market-based neutrality, which depends on the decentralization of the block builder industry.<a href="#fn-21" id="fnref-21"><sup>21</sup></a> Regulators formulating neutrality requirements for settlement infrastructure should distinguish between these mechanism types.

### 7.4-C The Categorization Question

The framework does not propose regulation. It does, however, reveal which question should be asked regulatorily: is Ethereum more similar to the model of a network infrastructure — telecommunications, payment infrastructure, internet — or to the model of a financial market product?

The answer from the findings: Ethereum satisfies the technical criteria of infrastructure more clearly than those of a financial product. Protocol openness, backward compatibility, a permissionless smart contract layer, and non-discrimination in transaction inclusion — guaranteed at the protocol level in the target state — are infrastructure properties in the sense of infrastructure research.<a href="#fn-22" id="fnref-22"><sup>22</sup></a> Regulations targeting infrastructure neutrality — access obligations, non-discrimination requirements, open access mandates — are conceptually more precisely applicable to Ethereum than regulations targeting product quality, issuer liability, or classical securities investor protection.

## 7.5 What Remains After This Study

### 7.5-A The One Open Question

The study closes with an answer and an open question.

The answer: Ethereum satisfies, in its current state, the technical prerequisites of fundamental digital infrastructure under considerable conditions, and the roadmap is structured such that these conditions, upon full implementation, will be reduced to conditions without the qualifier "considerable" — at an unchanged quality level.

The open question is not substantive but temporal: at what speed and to what degree of completeness will the roadmap be implemented? The framework cannot answer this question because implementation speed depends on factors that the technically structural model does not contain: coordination dynamics in the core developer process, resource allocation at the Ethereum Foundation, external shocks — regulatory shifts, market movements, security events — that displace priorities. This is the question that remains after reading this study.

### 7.5-B The Framework as a Monitoring Instrument

The M3 framework is not only suited for a one-time assessment — it is conceivable as a periodic monitoring instrument.<a href="#fn-23" id="fnref-23"><sup>23</sup></a> The twelve criteria, the three-tier hierarchy, and the M3 cascade form a structured protocol that can be re-run at each upgrade cycle.

Such monitoring would structure three questions: Has the EIP status of a Critical Criterion changed — from PLAN to DEPL, from DEPL to PROD? Have quantitative measurements — builder concentration, staking concentration, cloud concentration — crossed threshold values? Has governance capacity changed — a chain split, a failed upgrade coordination, a paradigm shift without consensus? The frequency at which these questions should be asked corresponds to the semi-annual upgrade cycle.<a href="#fn-24" id="fnref-24"><sup>24</sup></a> A verdict that does not change across more than two upgrade cycles is either stable — or has not been updated.

### 7.5-C The Limits of the Final Sentence

Every assessment study ends with a verdict shorter than the work that supports it. The verdict "Suitable with Conditions, grade Good" carries the substance of six chapters. It is not a blank check — the conditions are real, named, and monitorable. It is not a disqualification — the system satisfies the infrastructure requirements across the board. It is a qualified assessment: the maximum that a technically structural evaluation framework can deliver.

What lies beyond this assessment is the decision: whether to build, trust, or regulate — and under what conditions. That decision does not belong in an assessment study. It belongs to those for whom this study was written.

<div class="fn-list">
<ol>
<li id="fn-1">See Section 6.4-A: current-state verdict (Suitable under Considerable Conditions, grade Good) and target-state verdict (Suitable with Conditions, grade Good). The verdict shift rests on the elevation of II.1 from "Conditionally Satisfied" to "Satisfied with Reservation." <a href="#fnref-1">↩</a></li>
<li id="fn-2">See Section 6.3-A: price risk, regulatory risk, and competitive positioning are methodologically excluded from the evaluation framework. The exclusion is a prerequisite for cross-temporal comparability, not indifference to these factors. <a href="#fnref-2">↩</a></li>
<li id="fn-3">relayscan.io: builder market shares (accessed 27 March 2026). See Section 6.2-A: the decline from >90% (top-3, 2024) to ~68–80% (2026) is structural — the causes (latency advantages, exclusive order flow) are not fully addressable at the protocol level. <a href="#fnref-3">↩</a></li>
<li id="fn-4">Flashbots data and order flow analysis, March 2026. See Section 6.2-A: exclusive order flow makes latency advantages and market power self-reinforcing for incumbent builders. <a href="#fnref-4">↩</a></li>
<li id="fn-5">FOCIL (EIP-7805): Fork-Choice Enforced Inclusion Lists. Status PLAN, SFI Hegotá Headliner. The 1-of-N honesty model requires that at least one member of the 2,000-member committee acts honestly to prevent censorship. See Sections 5.5-A and 6.1-B. <a href="#fnref-5">↩</a></li>
<li id="fn-6">ePBS (EIP-7732): Enshrined Proposer-Builder Separation. Status PLAN, SFI Glamsterdam. ePBS eliminates the relay trust assumption and is simultaneously a prerequisite for the proving window of the L1 zkEVM. See Section 5.5-A. <a href="#fnref-6">↩</a></li>
<li id="fn-7">L1 zkEVM (EIP-8025): L1 Block-Level ZK Proof. Status CFI, post-Glamsterdam. Makes L1 blocks lightweight-verifiable and unlocks usage categories currently requiring full-node participation. See Section 5.4-B. <a href="#fnref-7">↩</a></li>
<li id="fn-8">See Section 6.1-C (III.1): the Fusaka upgrade cycle was, for the first time, completed within the semi-annual schedule — a maturity indicator for upgrade coordination that is operationally useful as a planning basis. <a href="#fnref-8">↩</a></li>
<li id="fn-9">See Section 6.4-B: four successful hard forks since the Merge (Shanghai, Dencun, Pectra, Fusaka), no chain split, full backward compatibility. In comparative infrastructure research, the combination of open-source protocol and demonstrated fork coordination without split is exceptional. <a href="#fnref-9">↩</a></li>
<li id="fn-10">See Section 6.1-C (I.1): the EVM standard has embedded all top-10 L2s and is no longer merely a nominal standard. See Section 5.6-A: Native Rollups (EIP-8079) reinforce the structural binding through EXECUTE verification against the L1 STF. <a href="#fnref-10">↩</a></li>
<li id="fn-11">See Section 2.3.3 on the grade definition: "Good" when all six qualitative criteria (I.2, II.1, II.2, II.3, II.4, III.4) stand at minimum at "Satisfied with Reservation." See Section 5.7-C for the complete target-state grade determination. <a href="#fnref-11">↩</a></li>
<li id="fn-12">See Section 6.1-B: the elevation of II.1 (Neutrality and Censorship Resistance) from "Conditionally Satisfied" to "Satisfied with Reservation" is the decisive verdict shift between current and target state — it removes the second cascade ceiling in the M3 logic. <a href="#fnref-12">↩</a></li>
<li id="fn-13">relayscan.io (March 2026). See Section 6.2-A: ePBS resolves the protocol-level relay dependency, not the economic roots of builder concentration. <a href="#fnref-13">↩</a></li>
<li id="fn-14">Dune Analytics / CCN (5 March 2026): Lido staking market share ~22.8–23 percent. The Lido DAO voted in June 2022 by Snapshot against a self-imposed market share cap. See Section 6.2-A. <a href="#fnref-14">↩</a></li>
<li id="fn-15">Ethernodes (early 2026): ~59% on AWS (35.5%), Hetzner (13.8%), OVHcloud (9.7%). The AWS outage in October 2025 showed the network can absorb a regional failure — the operational corridor between normal operation and finality loss narrowed in the process. See Section 6.2-C. <a href="#fnref-15">↩</a></li>
<li id="fn-16">Metaculus: forecast for availability of a cryptographically relevant quantum computer (CRQC) by 2030, as of spring 2026: ~20 percent. A CRQC in the sense of this forecast can break ECDSA 256-bit keys within a security-critical timeframe. See Section 6.2-B. <a href="#fnref-16">↩</a></li>
<li id="fn-17">Beam Chain: concept presentation by Justin Drake, Devcon 7, November 2024. Status RES, post-2029 without delivery commitment. See Section 6.2-B: the PQ architecture is fully laid out — leanXMSS for consensus, KZG-to-STARK for data, NAA infrastructure for execution. Implementation is structurally unsecured. <a href="#fnref-17">↩</a></li>
<li id="fn-18">GENIUS Act: Guiding and Establishing National Innovation for U.S. Stablecoins Act, signed 18 July 2025. EU MiCA: Markets in Crypto-Assets Regulation, fully in force since December 2024. See Section 6.3-A. <a href="#fnref-18">↩</a></li>
<li id="fn-19">Frischmann 2012: Infrastructure: The Social Value of Shared Resources. Van Schewick 2010: Internet Architecture and Innovation. The infrastructure classification is the result of the assessment, not its presupposition — it follows from demonstrating the three Frischmann criteria (shared resource, managed for use rather than consumption, positive externalities for downstream actors). See Section 2.1. <a href="#fnref-19">↩</a></li>
<li id="fn-20">See Sections 6.1-B and 5.5-A: the 1-of-N honesty model makes corruption structurally unattractive — an attacker would need to corrupt all 2,000 committee members to prevent inclusion. <a href="#fnref-20">↩</a></li>
<li id="fn-21">See Section 6.1-B: the shift from emergent to protocol-enforced neutrality is qualitative, not quantitative — it changes the fundamental structure of the security guarantee. Market-based neutrality can erode through economic incentive shifts; protocol-enforced neutrality requires a protocol-level attack. <a href="#fnref-21">↩</a></li>
<li id="fn-22">Frischmann 2012, pp. 61–88: infrastructure resources are characterized by their function as inputs for downstream production, by non-rivalry or managed shared use, and by generating positive externalities. All three properties are demonstrated for Ethereum in the current-state assessment (Chapter 4). See Section 2.1. <a href="#fnref-22">↩</a></li>
<li id="fn-23">See Section 2.3 on the M3 cascade and Section 2.3.3 on the verdict logic. The framework contains no one-time cut-off assumptions — the evaluation structure is repeatable; only the data basis needs to be updated to the respective reference date. <a href="#fnref-23">↩</a></li>
<li id="fn-24">See Section 6.1-C (III.1): the semi-annual upgrade rhythm has been demonstrated as the first successful deadline with Fusaka. A hard fork interval of six months constitutes the natural measurement interval for framework updates — the data basis (EIP status, market shares, network data) is updatable on a semi-annual cycle. <a href="#fnref-24">↩</a></li>
</ol>
</div>
