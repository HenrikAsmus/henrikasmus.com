---
titel: Implikationen
nummer: 7
befund: "Was folgt aus dem Urteil für jene, die auf dem System aufbauen, ihm vertrauen oder es regulieren? Der letzte Teil tritt aus der bewertenden Rolle heraus und denkt die Antwort zu ihren Konsequenzen weiter."
sprache: de
---

## 7.1 Drei Lesarten des Urteils

### 7.1-A Das qualifizierte Ja

Das Gesamturteil dieser Arbeit lautet: Im IST-Zustand ist Ethereum als fundamentale digitale Infrastruktur geeignet unter erheblichen Bedingungen, Grad Gut. Im SOLL-Zustand — bei vollständig umgesetzter Roadmap — lautet es: Geeignet mit Bedingungen, Grad Gut.<a href="#fn-1" id="fnref-1"><sup>1</sup></a> Das ist ein qualifiziertes Ja, kein Freifahrtschein und kein Ausschlusskriterium. Die Qualifikation — "unter erheblichen Bedingungen" im IST, "mit Bedingungen" im SOLL — ist keine Abschwächung, die das Urteil relativiert. Sie ist der Inhalt des Urteils.

Für einen technischen Architekten, einen institutionellen Kapitalgeber und einen regulatorischen Entscheider bedeutet dieses Urteil dasselbe und drei verschiedene Dinge. Es bedeutet dasselbe: Das System erfüllt die technischen Voraussetzungen einer fundamentalen digitalen Infrastruktur in der Breite — mit explizit benannten, monitoringfähigen Bedingungen. Es bedeutet drei verschiedene Dinge, weil die Bedingungen für jeden Adressatentyp andere operative Konsequenzen haben: Für Aufbauende übersetzen sich die Bedingungen in Designparameter. Für Vertrauende übersetzen sie sich in ein Risikoprofil. Für Regulierende übersetzen sie sich in eine Kategorisierungsfrage.

### 7.1-B Die methodische Grenze des Kapitels

Das Rahmenwerk ist technisch-strukturell, nicht politisch-präskriptiv.<a href="#fn-2" id="fnref-2"><sup>2</sup></a> Die Implikationen, die folgen, sind Konsequenzen aus dem Befund — keine Handlungsempfehlungen, die über den Befund hinausgehen. Konkret: Das Urteil sagt nicht, ob eine Institution Ethereum adopten sollte. Es sagt, unter welchen technischen Bedingungen die Infrastruktur geeignet ist und welche Eigenschaften bei einer Adoptionsentscheidung technisch relevant sein sollten. Preisrisiko, regulatorischer Kontext und Wettbewerbspositionierung — die drei Variablen, die das Rahmenwerk nicht quantifiziert und nicht quantifizieren soll — bleiben in der Verantwortung der Entscheider.

## 7.2 Für Aufbauende: Design unter Bedingungen

### 7.2-A Die IST-Bedingung als Designparameter

Die zentrale Bedingung des IST-Urteils ist die Implementierung eines protokollären Mechanismus, der die Transaktionsinklusion von der Marktstruktur der Block Builder entkoppelt. Im IST-Zustand existiert dieser Mechanismus nicht. Drei Block Builder kontrollierten im März 2026 rund 68 Prozent der Blockproduktion.<a href="#fn-3" id="fnref-3"><sup>3</sup></a> Exclusive Order Flow machte etwa 54 Prozent des Blockwerts aus.<a href="#fn-4" id="fnref-4"><sup>4</sup></a> Die Neutralität ist operativ vorhanden, aber protokollär ungesichert.

Für Aufbauende übersetzt sich dieser Befund in einen konkreten Designparameter: Applikationen, die Zensurresistenz als Kernanforderung haben — also Anwendungen, bei denen die Garantie des Transaktionseinschlusses entscheidungskritisch ist —, müssen im IST-Zustand mit einem Residualrisiko kalkulieren. Das ist kein Ausschlusskriterium. Es ist ein Planungsparameter: Entweder wird die Neutralitätslücke durch zusätzliche Schichten adressiert — etwa durch private Mempools mit Escape-Hatch-Mechanismen —, oder sie wird als bekanntes Restrisiko akzeptiert und in die Systemarchitektur eingepreist. Welche Entscheidung die richtige ist, hängt vom Anwendungsfall ab, nicht vom Urteil.

### 7.2-B Roadmap-Monitoring als strukturelle Planungsaufgabe

Die IST-Bedingung ist temporär — sie ist an konkrete Roadmap-Meilensteine geknüpft, die monitoring-fähig sind. FOCIL (EIP-7805, SFI Hegotá Headliner) erzwingt die protokolläre Transaktionsinklusion durch ein 2.000-köpfiges Committee mit 1-of-N-Honesty-Modell.<a href="#fn-5" id="fnref-5"><sup>5</sup></a> ePBS (EIP-7732, SFI Glamsterdam) eliminiert die Relay-Trust-Annahme und trennt Proposer und Builder protokollär.<a href="#fn-6" id="fnref-6"><sup>6</sup></a> Die L1-zkEVM (EIP-8025, CFI post-Glamsterdam) macht L1-Blöcke leichtgewichtig verifizierbar und erweitert die Verifizierbarkeitsreichweite.<a href="#fn-7" id="fnref-7"><sup>7</sup></a>

Aufbauende, die Ethereum als Infrastrukturschicht nutzen, können diese Meilensteine in ihren Planungshorizont integrieren. Das Halbjahres-Upgrade-Modell — Fusaka ist der erste dokumentierte Fall, bei dem Ethereum eine selbst gesetzte Upgrade-Deadline eingehalten hat<a href="#fn-8" id="fnref-8"><sup>8</sup></a> — gibt erstmals eine strukturierte Planungsgrundlage für die Anpassung von Systemarchitekturen an veränderte Protokollgarantien. Aufbauende sind dabei nicht passive Beobachter dieser Meilensteine: Die Core-Developer-Koordination ist für substantielle Beiträge aus dem Anwendungsentwickler-Ökosystem zugänglich, und die ACD-Prozesse sind öffentlich.

### 7.2-C Die Kontinuitätsstärke als operative Garantie

Neben den Bedingungen benennt das Urteil Stärken, die für Aufbauende operative Garantien darstellen. Die stärkste ist die Backward Compatibility: Contracts von 2017 laufen in Ethereum unverändert. Vier erfolgreiche Hard Forks seit dem Merge — Shanghai, Dencun, Pectra, Fusaka — haben den EVM-Zustand nicht gebrochen.<a href="#fn-9" id="fnref-9"><sup>9</sup></a>

Das ist ein seltenes Merkmal in der Technologiegeschichte. Eine Investition in Ethereum-native Architektur hat eine weitaus längere Halbwertszeit als eine Investition in proprietäre Infrastruktur, deren API-Stabilität von einem einzelnen Unternehmen kontrolliert wird. Der EVM-Standard bindet alle Top-10-L2s — wer auf EVM baut, baut auf einem Standard, nicht auf einer Plattform.<a href="#fn-10" id="fnref-10"><sup>10</sup></a> Native Rollups (EIP-8079) verstärken diese Bindung im SOLL-Zustand strukturell: Ein Rollup, das die EXECUTE-Verifikation nutzt, kann nicht auf eine andere L1 migrieren, ohne das Sicherheitsmodell fundamental zu wechseln.

## 7.3 Für Vertrauende: Risikoprofil einer Infrastruktur

### 7.3-A Was "Grad Gut" bedeutet

Das Urteil enthält zwei Komponenten: Kategorie (Eignung) und Grad (Gut). Für diejenigen, die Ethereum als Infrastrukturschicht vertrauen — als institutionelle Nutzer, als Gegenpartei, als Custody- oder Settlement-Schicht —, ist der Grad die relevante Information für die Vertrauensarchitektur.

"Grad Gut" bedeutet: Alle sechs Qualitativen Kriterien — Sicherheits- und Vertrauenslast (I.2), Neutralität und Zensurresistenz (II.1), Offene Generativität (II.2), Unabhängige Verifizierbarkeit (II.3), Niedrigschwellige Inklusivität (II.4), Hardware-Agnostik (III.4) — stehen mindestens auf "Erfüllt mit Einschränkung".<a href="#fn-11" id="fnref-11"><sup>11</sup></a> Das bedeutet: Die Qualitativen Eigenschaften der Infrastruktur funktionieren — sie haben benennbare Einschränkungen, aber keine strukturellen Defekte.

Die Kategorie "Geeignet unter erheblichen Bedingungen" (IST) trägt hingegen eine strukturelle Bedingung: Die Neutralitätsgarantie ist operativ vorhanden, aber protokollär ungesichert.<a href="#fn-12" id="fnref-12"><sup>12</sup></a> Der Übergang zum SOLL-Urteil "Geeignet mit Bedingungen" ist kein gradueller Anstieg — er markiert die Ablösung einer Kritischen Bedingung auf "Bedingt erfüllt" durch ein vollständiges Protokollmechanismus-Set. Das ist der kategorial relevante Unterschied für alle, die institutionelle Commitments in Ethereum-Infrastruktur halten.

### 7.3-B Die drei Konzentrationsrisiken als systemisches Risikoprofil

Das SOLL-Profil benennt drei Konzentrationsrisiken, die durch die Roadmap nicht vollständig aufgelöst werden: Builder-Konzentration (Top-3 rund 68–80 Prozent der Blockproduktion),<a href="#fn-13" id="fnref-13"><sup>13</sup></a> Liquid-Staking-Konzentration (Lido rund 23 Prozent des gestakten ETH)<a href="#fn-14" id="fnref-14"><sup>14</sup></a> und Cloud-Konzentration (rund 59 Prozent der gehosteten Nodes auf drei Providern).<a href="#fn-15" id="fnref-15"><sup>15</sup></a>

Diese drei Risiken werden in der Regel als separate Befunde behandelt. Sie haben aber eine gemeinsame Struktur: Es sind ökonomische Konzentrationen auf der Betriebsebene in einem System, dessen protokolläre Sicherheitsarchitektur auf Dezentralisierung auf der Protokollebene ausgelegt ist. Protokollsicherheit und Betriebssicherheit sind nicht äquivalent. Das Netzwerk kann eine robuste Slashing-Architektur haben und gleichzeitig eine Cloud-Konzentration aufweisen, die im Fall eines koordinierten Ausfalls mehrerer Provider die Netzwerkpartizipation erheblich reduzieren würde.

Für Vertrauende, die Ethereum als systemkritische Infrastruktur betreiben, ist das die strukturell offene Frage: Ist die operative Resilienz dem protokollären Sicherheitsversprechen äquivalent? Die ehrliche Antwort aus dem Rahmenwerk: teilweise. Die ökonomische Sicherheit und die protokolläre Architektur sind stark. Die operative Resilienz gegen einen koordinierten Angriff auf die Betriebsinfrastruktur ist benannt, aber nicht protokollär gesichert — die Koordination erfolgt durch informelle Netzwerke, deren Effektivität dokumentiert, aber nicht erzwingbar ist.

### 7.3-C Der Post-Quantum-Risikohorizont

Die Post-Quantum-Lücke hat für Vertrauende eine besondere Struktur: Sie ist die einzige Grenze, bei der eine exogene Zeitvariable — die Verfügbarkeit eines kryptographisch relevanten Quantencomputers — mit der endogenen Umsetzungsgeschwindigkeit interferiert. Alle anderen Grenzen des SOLL-Profils sind endogene Zustände, die graduelle Veränderungen erfahren.

Die Metaculus-Prognose gibt der Verfügbarkeit eines kryptographisch relevanten Quantencomputers bis 2030 eine Wahrscheinlichkeit von rund 20 Prozent.<a href="#fn-16" id="fnref-16"><sup>16</sup></a> Die Beam Chain hat keinen Delivery-Termin vor 2029.<a href="#fn-17" id="fnref-17"><sup>17</sup></a> Das Fenster zwischen CRQC-Verfügbarkeit und abgeschlossener Migration ist unbekannt. Für langfristige Commitments in Ethereum-native Vermögenswerte oder Infrastruktur ist das ein nicht-ignorierbarer Risikofaktor — nicht, weil der Eintritt wahrscheinlich ist, sondern weil der Schaden im Fall des Eintritts systemisch wäre.

Das bedeutet nicht, dass das Risiko das Vertrauen negiert. Es bedeutet, dass die PQ-Migration als exogener Monitoringpunkt in das Risikomanagement integriert werden sollte: als Trigger-Ereignis, das spezifische Überprüfungen auslöst, wenn sich der Quantencomputing-Horizont verändert — nicht als tägliche Risikoprüfung.

## 7.4 Für Regulierende: Infrastruktur oder Finanzprodukt

### 7.4-A Was der Rahmen für Regulierung liefert

Der Bewertungsrahmen liefert für Regulierende etwas, das in der aktuellen Regulierungsdiskussion selten explizit ist: eine technisch-strukturelle Einordnung, die unabhängig von der Marktdynamik ist. Der GENIUS Act und die EU-MiCA-Verordnung regulieren primär Stablecoins und Crypto-Assets als Finanzprodukte.<a href="#fn-18" id="fnref-18"><sup>18</sup></a> Das Rahmenwerk dieser Arbeit klassifiziert Ethereum als Infrastruktur — als Medium, nicht als Produkt — und tut das methodisch, nicht normativ.<a href="#fn-19" id="fnref-19"><sup>19</sup></a>

Diese Unterscheidung ist nicht trivial. Wenn Ethereum die Bedingungen einer fundamentalen Infrastruktur erfüllt, dann sollten die regulatorischen Instrumente, die auf Infrastruktur angewendet werden, analytisch vom Instrumentenkoffer für Finanzprodukte getrennt werden. Das ist keine regulatorische Empfehlung. Es ist eine methodische Konsequenz des Befundes.

### 7.4-B Die Neutralitätseigenschaft als regulatorische Kategorie

Im IST-Zustand ist die Transaktionsneutralität von Ethereum operativ vorhanden, aber protokollär ungesichert. Im SOLL-Zustand ist sie durch ein dreischichtiges Mechanismus-Set protokollär implementiert: FOCIL erzwingt Inklusion über ein 2.000-köpfiges Committee mit 1-of-N-Honesty-Modell,<a href="#fn-20" id="fnref-20"><sup>20</sup></a> ePBS trennt Proposer und Builder protokollär, der Encrypted Mempool adressiert Pre-Inclusion-Privacy.

Diese Verschiebung ist für Regulierende relevant, weil Neutralität in Regulierungsdiskussionen häufig als binäre Eigenschaft behandelt wird: Ein System ist entweder neutral oder nicht neutral. Das Urteil zeigt, dass Neutralität graduiert und mechanismenabhängig ist. Protokolläre Neutralität — durch FOCIL erzwungen — hat eine strukturell andere Robustheit als marktbasierte Neutralität, die von der Dezentralisierung der Block-Builder-Industrie abhängt.<a href="#fn-21" id="fnref-21"><sup>21</sup></a> Regulierende, die Neutralitätsanforderungen für Settlement-Infrastruktur formulieren, sollten zwischen diesen Mechanismustypen unterscheiden.

### 7.4-C Die Kategorienfrage

Das Rahmenwerk schlägt keine Regulierung vor. Es zeigt aber, welche Frage regulatorisch gestellt werden sollte: Ist Ethereum eher dem Modell einer Netzinfrastruktur ähnlich — Telekommunikation, Zahlungsinfrastruktur, Internet — oder eher dem Modell eines Finanzmarktprodukts?

Die Antwort aus dem Befund: Ethereum erfüllt die technischen Kriterien einer Infrastruktur deutlicher als die eines Finanzprodukts. Protokolläre Offenheit, Backward Compatibility, permissionless Smart-Contract-Layer und Nicht-Diskriminierung der Transaktionsaufnahme — im SOLL-Zustand protokollär garantiert — sind Infrastruktureigenschaften im Sinne der Infrastrukturforschung.<a href="#fn-22" id="fnref-22"><sup>22</sup></a> Regulierungen, die auf Infrastrukturneutralität abzielen — Zugangspflichten, Nicht-Diskriminierungsgebote, Open-Access-Anforderungen —, sind konzeptuell präziser auf Ethereum anwendbar als Regulierungen, die auf Produktqualität, Emittentenhaftung oder klassischen Wertpapier-Kundenschutz abzielen.

## 7.5 Was nach dieser Arbeit bleibt

### 7.5-A Die eine offene Frage

Die Arbeit schließt mit einer Antwort und einer offenen Frage.

Die Antwort lautet: Ethereum erfüllt im IST-Zustand die technischen Voraussetzungen einer fundamentalen digitalen Infrastruktur unter erheblichen Bedingungen, und die Roadmap ist so strukturiert, dass diese Bedingungen bei vollständiger Umsetzung auf das Niveau von Bedingungen ohne das Attribut "erheblich" reduziert werden — bei gleichbleibendem Qualitätsniveau.

Die offene Frage ist nicht inhaltlicher, sondern zeitlicher Natur: Mit welcher Geschwindigkeit und in welcher Vollständigkeit wird die Roadmap umgesetzt? Das Rahmenwerk kann diese Frage nicht beantworten, weil Umsetzungsgeschwindigkeit von Faktoren abhängt, die das technisch-strukturelle Modell nicht enthält: Koordinationsdynamiken im Core-Developer-Prozess, Ressourcenallokation der Ethereum Foundation, externe Schocks — Regulierungswechsel, Marktbewegungen, Sicherheitsereignisse —, die Prioritäten verschieben. Diese Frage ist die Frage, die nach der Lektüre dieser Arbeit bleibt.

### 7.5-B Das Rahmenwerk als Monitoring-Instrument

Das M3-Rahmenwerk ist nicht nur für eine einmalige Bewertung geeignet — es ist als periodisches Monitoring-Instrument konzipierbar.<a href="#fn-23" id="fnref-23"><sup>23</sup></a> Die zwölf Kriterien, die dreistufige Hierarchie und die M3-Kaskade bilden ein strukturiertes Protokoll, das bei jedem Upgrade-Zyklus neu durchgeführt werden kann.

Ein solches Monitoring würde drei Fragen strukturieren: Hat sich der EIP-Status eines Kritischen Kriteriums verändert — von PLAN auf DEPL, von DEPL auf PROD? Haben sich quantitative Messwerte — Builder-Konzentration, Staking-Konzentration, Cloud-Konzentration — über Schwellenwerte bewegt? Hat die Governance-Kapazität sich verändert — ein Fork-Split, eine gescheiterte Upgrade-Koordination, ein Paradigmenwechsel ohne Konsens? Die Frequenz, mit der diese Fragen gestellt werden sollten, entspricht dem halbjährlichen Upgrade-Zyklus.<a href="#fn-24" id="fnref-24"><sup>24</sup></a> Ein Urteil, das sich über mehr als zwei Upgrade-Zyklen nicht verändert, ist entweder stabil — oder es wurde nicht aktualisiert.

### 7.5-C Die Grenzen des letzten Satzes

Jede Bewertungsarbeit endet mit einem Urteil, das kürzer ist als die Arbeit, die es trägt. Das Urteil "Geeignet mit Bedingungen, Grad Gut" trägt die Substanz von sechs Kapiteln. Es ist kein Freifahrtschein — die Bedingungen sind real, benannt und monitoringfähig. Es ist kein Ausschlusskriterium — das System erfüllt die Infrastrukturanforderungen in der Breite. Es ist eine qualifizierte Einschätzung: das Maximum, das ein technisch-struktureller Bewertungsrahmen leisten kann.

Was jenseits dieser Einschätzung liegt, ist die Entscheidung: ob gebaut, vertraut oder reguliert wird — und unter welchen Bedingungen. Diese Entscheidung gehört nicht in eine Bewertungsarbeit. Sie gehört denen, für die diese Arbeit geschrieben ist.

<div class="fn-list">
<ol>
<li id="fn-1">Vgl. Abschnitt 6.4-A: IST-Urteil (Geeignet unter erheblichen Bedingungen, Grad Gut) und SOLL-Urteil (Geeignet mit Bedingungen, Grad Gut). Die Urteilsverschiebung ruht auf dem Aufstieg von II.1 von "Bedingt erfüllt" auf "Erfüllt mit Einschränkung". <a href="#fnref-1">↩</a></li>
<li id="fn-2">Vgl. Abschnitt 6.3-A: Preisrisiko, regulatorisches Risiko und Wettbewerbspositionierung sind methodisch aus dem Bewertungsrahmen ausgegrenzt. Die Abkopplung ist Voraussetzung für zeitübergreifende Vergleichbarkeit, nicht Gleichgültigkeit gegenüber diesen Faktoren. <a href="#fnref-2">↩</a></li>
<li id="fn-3">relayscan.io: Builder-Marktanteile (abgerufen am 27.03.2026). Vgl. Abschnitt 6.2-A: Der Rückgang von >90% (Top-3, 2024) auf ~68–80% (2026) ist ein strukturelles Phänomen — die Ursachen (Latenzvorteile, Exclusive Order Flow) sind protokollär nicht vollständig adressierbar. <a href="#fnref-3">↩</a></li>
<li id="fn-4">Flashbots-Daten und Order-Flow-Analyse, März 2026. Vgl. Abschnitt 6.2-A: Exclusive Order Flow macht Latenz und Marktmacht zu selbstverstärkenden Vorteilen für incumbente Builder. <a href="#fnref-4">↩</a></li>
<li id="fn-5">FOCIL (EIP-7805): Fork-Choice Enforced Inclusion Lists. Status PLAN, SFI Hegotá Headliner. Das 1-of-N-Honesty-Modell erfordert, dass mindestens ein Mitglied des 2.000-köpfigen Committees ehrlich agiert, um Zensur zu verhindern. Vgl. Abschnitt 5.5-A und 6.1-B. <a href="#fnref-5">↩</a></li>
<li id="fn-6">ePBS (EIP-7732): Enshrined Proposer-Builder Separation. Status PLAN, SFI Glamsterdam. ePBS eliminiert die Relay-Trust-Annahme und ist gleichzeitig Voraussetzung für das Proving-Window der L1-zkEVM. Vgl. Abschnitt 5.5-A. <a href="#fnref-6">↩</a></li>
<li id="fn-7">L1-zkEVM (EIP-8025): L1 Block-Level ZK Proof. Status CFI, post-Glamsterdam. Macht L1-Blöcke leichtgewichtig verifizierbar und erschließt neue Nutzungskategorien, die im IST Full-Node-Participation erfordern. Vgl. Abschnitt 5.4-B. <a href="#fnref-7">↩</a></li>
<li id="fn-8">Vgl. Abschnitt 6.1-C (III.1): Der Fusaka-Upgrade-Zyklus ist erstmals im halbjährlichen Zeitplan geblieben — ein Reifegradindikator für die Upgrade-Koordination, der als Planungsgrundlage verwertbar ist. <a href="#fnref-8">↩</a></li>
<li id="fn-9">Vgl. Abschnitt 6.4-B: Vier erfolgreiche Hard Forks seit dem Merge (Shanghai, Dencun, Pectra, Fusaka), kein Chain-Split, vollständige Backward Compatibility. In der vergleichenden Infrastrukturforschung gilt die Kombination aus Open-Source-Protokoll und nachgewiesener Fork-Koordination ohne Split als Ausnahmezustand. <a href="#fnref-9">↩</a></li>
<li id="fn-10">Vgl. Abschnitt 6.1-C (I.1): Der EVM-Standard hat alle Top-10-L2s eingebunden und ist damit kein bloß nominaler Standard mehr. Vgl. Abschnitt 5.6-A: Native Rollups (EIP-8079) verstärken die strukturelle Bindung durch EXECUTE-Verifikation gegen L1-STF. <a href="#fnref-10">↩</a></li>
<li id="fn-11">Vgl. Abschnitt 2.3.3 zur Grad-Definition: "Gut", wenn alle sechs Qualitativen Kriterien (I.2, II.1, II.2, II.3, II.4, III.4) mindestens auf "Erfüllt mit Einschränkung". Vgl. Abschnitt 5.7-C für die vollständige SOLL-Grad-Durchführung. <a href="#fnref-11">↩</a></li>
<li id="fn-12">Vgl. Abschnitt 6.1-B: Der Aufstieg von II.1 (Neutralität und Zensurresistenz) von "Bedingt erfüllt" auf "Erfüllt mit Einschränkung" ist die entscheidende Urteilsverschiebung zwischen IST und SOLL — er entfernt die zweite Kaskaden-Deckelung in der M3-Logik. <a href="#fnref-12">↩</a></li>
<li id="fn-13">relayscan.io (März 2026). Vgl. Abschnitt 6.2-A: ePBS löst die protokolläre Relay-Abhängigkeit, nicht die ökonomischen Wurzeln der Builder-Konzentration. <a href="#fnref-13">↩</a></li>
<li id="fn-14">Dune Analytics / CCN (5. März 2026): Lido Staking Market Share ~22,8–23 Prozent. Die Lido DAO hat im Juni 2022 per Snapshot-Vote gegen eine selbst auferlegte Marktanteilsbegrenzung gestimmt. Vgl. Abschnitt 6.2-A. <a href="#fnref-14">↩</a></li>
<li id="fn-15">Ethernodes (Anfang 2026): ~59% auf AWS (35,5%), Hetzner (13,8%), OVHcloud (9,7%). Der AWS-Outage Oktober 2025 zeigte, dass das Netzwerk einen regionalen Ausfall absorbieren kann — der operative Korridor zwischen normalem Betrieb und Finalitätsverlust wurde dabei enger. Vgl. Abschnitt 6.2-C. <a href="#fnref-15">↩</a></li>
<li id="fn-16">Metaculus: Prognose zur Verfügbarkeit eines kryptographisch relevanten Quantencomputers (CRQC) bis 2030, Stand Frühjahr 2026: ~20 Prozent. Ein CRQC im Sinne dieser Prognose kann ECDSA-256-Bit-Schlüssel in einem sicherheitskritischen Zeitrahmen brechen. Vgl. Abschnitt 6.2-B. <a href="#fnref-16">↩</a></li>
<li id="fn-17">Beam Chain: Konzeptvorstellung von Justin Drake, Devcon 7, November 2024. Status RES, post-2029 ohne Delivery-Commitment. Vgl. Abschnitt 6.2-B: Die PQ-Architektur ist vollständig angelegt — leanXMSS für Consensus, KZG-zu-STARK für Data, NAA-Infrastruktur für Execution. Die Umsetzung ist strukturell ungesichert. <a href="#fnref-17">↩</a></li>
<li id="fn-18">GENIUS Act: Guiding and Establishing National Innovation for U.S. Stablecoins Act, unterzeichnet am 18. Juli 2025. EU MiCA: Markets in Crypto-Assets Regulation, vollständig in Kraft seit Dezember 2024. Vgl. Abschnitt 6.3-A. <a href="#fnref-18">↩</a></li>
<li id="fn-19">Frischmann 2012: Infrastructure: The Social Value of Shared Resources. Van Schewick 2010: Internet Architecture and Innovation. Die Infrastruktur-Klassifikation ist das Ergebnis der Bewertung, nicht ihre Voraussetzung — sie folgt aus dem Nachweis der drei Frischmann-Kriterien (shared resource, managed for use rather than consumption, positive externalities for downstream actors). Vgl. Abschnitt 2.1. <a href="#fnref-19">↩</a></li>
<li id="fn-20">Vgl. Abschnitt 6.1-B und 5.5-A: Das 1-of-N-Honesty-Modell macht Korruption strukturell unattraktiv — ein Angreifer müsste alle 2.000 Committee-Mitglieder korrumpieren, um Inklusion zu verhindern. <a href="#fnref-20">↩</a></li>
<li id="fn-21">Vgl. Abschnitt 6.1-B: Die Verschiebung von emergenter zu protokollärer Neutralität ist qualitativ, nicht quantitativ — sie verändert die Grundstruktur der Sicherheitsgarantie. Marktbasierte Neutralität kann durch ökonomische Anreizverschiebungen erodieren; protokolläre Neutralität erfordert einen protokollären Angriff. <a href="#fnref-21">↩</a></li>
<li id="fn-22">Frischmann 2012, S. 61–88: Infrastruktur-Ressourcen sind charakterisiert durch ihren Charakter als Input für nachgelagerte Produktion, durch Nicht-Rivalität oder verwaltete Gemeinsame Nutzung und durch die Erzeugung positiver Externalitäten. Alle drei Eigenschaften sind in der IST-Bewertung (Kapitel 4) für Ethereum nachgewiesen. Vgl. Abschnitt 2.1. <a href="#fnref-22">↩</a></li>
<li id="fn-23">Vgl. Abschnitt 2.3 zur M3-Kaskade und 2.3.3 zur Urteilslogik. Das Rahmenwerk enthält keine einmaligen Stichtagsannahmen — die Bewertungsstruktur ist wiederholbar, lediglich die Datengrundlage muss zum jeweiligen Stichtag aktualisiert werden. <a href="#fnref-23">↩</a></li>
<li id="fn-24">Vgl. Abschnitt 6.1-C (III.1): Der halbjährliche Upgrade-Rhythmus ist seit Fusaka als erste erfolgreiche Deadline nachgewiesen. Ein Hard-Fork-Abstand von sechs Monaten entspricht dem natürlichen Messintervall für Rahmenwerk-Updates — die Datenbasis (EIP-Status, Marktanteile, Netzwerkdaten) ist halbjährlich aktualisierbar. <a href="#fnref-24">↩</a></li>
</ol>
</div>
