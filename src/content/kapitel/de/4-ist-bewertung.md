---
titel: Der Istzustand — Ethereum im operativen Zustand Q1 2026
nummer: 4
befund: "Wie schlägt sich Ethereum im Betrieb gegen die zwölf Bewertungskriterien? Das Kapitel liefert die IST-Bewertung — Ausgangspunkt für den Zielzustands-Vergleich."
sprache: de
---

Die vorangegangenen Kapitel haben den theoretischen Rahmen dargelegt und die empirische Grundlage geschaffen, auf der die Bewertung des konkreten Gegenstands aufbauen kann. Kapitel 2 hat den Bewertungsrahmen mit seinen zwölf Kriterien in drei Hierarchiestufen vorgestellt, die Bewertungslogik mit ihrer vierstufigen Skala und der M3-Kaskade dokumentiert und die Scope-Grenzen der Untersuchung definiert. Kapitel 3 hat die zwölf Kriterien an sieben strukturell unterschiedlichen Referenzinfrastrukturen validiert. Sie kommen nun zur Anwendung.

Die Abschnitte 4.1 bis 4.6 beschreiben Ethereums Architektur, den Transaktionslebenszyklus, die Sicherheitsökonomie, das Skalierungsmodell, die Governance-Strukturen und die institutionelle Einbettung des Systems im operativen Zustand des ersten Quartals 2026. Die Abschnitte 4.7 bis 4.10 wenden die zwölf Kriterien auf diesen beschriebenen Gegenstand an und formulieren das M3-Gesamturteil.

Der Stichtag für alle Netzwerkdaten ist der 27. März 2026, sofern nicht anders angegeben. Sämtliche quantitativen Kennzahlen bilden eine Momentaufnahme einer lebenden Infrastruktur. Die zugrunde liegende Architektur und die aus ihr abgeleiteten strukturellen Befunde besitzen eine erheblich größere Beständigkeit.

## 4.1 Architektonische Grundlagen

### Historische Einordnung und Entwicklungspfad

Ethereum wurde am 30. Juli 2015 als öffentliches Netzwerk gestartet, finanziert durch einen Crowdsale im Jahr 2014, und unterschied sich von Beginn an durch eine zentrale Designentscheidung von der damals dominierenden Blockchain-Technologie Bitcoin: Es war nicht als Zahlungssystem konzipiert, sondern als programmierbare Plattform, auf der beliebiger Code ausgeführt werden konnte.<a href="#fn-1" id="fnref-1"><sup>1</sup></a> Das Whitepaper, das Vitalik Buterin 2014 veröffentlichte, beschrieb ein System, in dem Smart Contracts als selbstausführende Programme auf einer gemeinsamen Zustandsdatenbank operieren, die von einem dezentralen Netzwerk gleichberechtigter Nodes gepflegt wird. Die technische Spezifikation dieses Systems legte Gavin Wood im selben Jahr im Yellow Paper vor, das die Ethereum Virtual Machine formal definierte und bis heute, in seiner aktuellen Berlin-Version von 2024, als Referenzdokument für die Protokollmechanik dient.<a href="#fn-2" id="fnref-2"><sup>2</sup></a>

In den ersten sieben Jahren operierte Ethereum unter einem Proof-of-Work-Konsensmechanismus, bei dem Miner durch den Einsatz von Rechenleistung um das Recht konkurrierten, neue Blöcke zu produzieren. Am 15. September 2022 vollzog das Netzwerk mit dem sogenannten Merge den Übergang zu Proof of Stake, einem Konsensmechanismus, bei dem Validatoren durch das Hinterlegen von Kapital die Berechtigung zur Blockproduktion erwerben. Die fundamentale Idee hinter Proof of Stake ist, Netzwerksicherheit durch ökonomischen Einsatz statt durch Rechenleistung herzustellen: Validatoren hinterlegen Kapital als Sicherheit und riskieren dessen Verlust bei Fehlverhalten, sodass das ökonomische Risiko den Energieaufwand als Sicherheitsmechanismus ersetzt. Der Merge reduzierte den Energieverbrauch des Netzwerks um 99,95 Prozent.<a href="#fn-3" id="fnref-3"><sup>3</sup></a>

Im Juni 2016, kaum ein Jahr nach dem Start, wurde die erste dezentrale autonome Organisation auf Ethereum, die schlicht als The DAO bekannt wurde, durch eine Schwachstelle im Smart-Contract-Code exploitet, wobei circa 60 Millionen US-Dollar an ETH abgezogen wurden. Die Community entschied sich für einen Hard Fork, der die Transaktion rückgängig machte — eine Entscheidung, die das Netzwerk in Ethereum und Ethereum Classic spaltete. Der DAO-Fork zeigt, dass Ethereums Community in einer existenziellen Krise handlungsfähig war, und er markiert den historischen Moment, nach dem die Community faktisch entschied, dass eine soziale Intervention in den Zustand des Systems möglich ist, auch wenn sie seither nie wiederholt wurde.

Seit dem Merge hat Ethereum vier Protokoll-Upgrades durchlaufen. Shapella (April 2023) ermöglichte erstmals die Entnahme von gestaktem ETH. Dencun (März 2024) führte Blob-Transactions ein, die Layer-2-Rollups ermöglichen, Daten zu einem Bruchteil der bisherigen Kosten auf der Basisschicht zu verankern. Pectra (7. Mai 2025) erhöhte die maximale Effective Balance pro Validator von 32 auf 2.048 ETH und führte mit EIP-7702 die erste protokollnative Form von Account Abstraction ein. Fusaka (3. Dezember 2025) implementierte PeerDAS, ein Peer-to-Peer-basiertes Data Availability Sampling, das die Bandbreitenanforderungen an Validatoren um rund 85 Prozent reduziert.

### Die Zwei-Client-Architektur

Das Ethereum-Netzwerk besteht aus 14.339 Nodes, die über das öffentliche Internet verteilt sind und gemeinsam den Zustand des Systems pflegen.<a href="#fn-4" id="fnref-4"><sup>4</sup></a> Jeder Node betreibt gleichzeitig zwei Software-Komponenten: einen Consensus Layer Client, der den Proof-of-Stake-Konsens verwaltet und über das libP2P-Netzwerkprotokoll mit anderen Consensus-Clients kommuniziert, und einen Execution Layer Client, der Smart Contracts ausführt und den Zustand der Konten und Verträge pflegt. Beide Clients sind über die Engine API verbunden, eine interne Schnittstelle, die durch JWT-Token authentifiziert wird.

Fünf Consensus Layer Clients stehen zur Verfügung: Lighthouse (Rust, Sigma Prime), Prysm (Go, Prysmatic Labs), Teku (Java, ConsenSys), Nimbus (Nim, Status) und Lodestar (TypeScript, ChainSafe). Ebenso fünf Execution Layer Clients: Geth (Go), Nethermind (C#), Besu (Java), Erigon (Go) und Reth (Rust). Alle zehn Implementierungen sind Open Source, in unterschiedlichen Programmiersprachen geschrieben und von unabhängigen Teams entwickelt. Diese Multi-Client-Philosophie ist eine Kern-Sicherheitseigenschaft: Ein Bug in einer Software-Implementierung kann das Netzwerk nur dann gefährden, wenn der betroffene Client mehr als ein Drittel des Netzwerks bedient.

Der Dezember-2025-Vorfall bei Fusaka liefert eine empirische Validierung dieses Designprinzips. Ein Bug im Consensus Client Prysm führte dazu, dass die Netzwerk-Partizipation auf 75 Prozent fiel, doch die Finalisierung blieb ununterbrochen, weil Prysms Marktanteil zu diesem Zeitpunkt bei 22 Prozent lag.<a href="#fn-5" id="fnref-5"><sup>5</sup></a> Wäre derselbe Bug Anfang 2022 aufgetreten, als Prysm noch 68 Prozent des Netzwerks bediente, hätte die Partizipation unter die kritische Zwei-Drittel-Schwelle fallen können.

39 Prozent der Nodes befinden sich in den USA, 14,5 Prozent in Deutschland und 14 Prozent in China. Von den gehosteten Execution Layer Nodes laufen 59 Prozent auf drei Cloud-Providern: AWS mit 35,5 Prozent, Hetzner mit 13,8 Prozent und OVHcloud mit 9,7 Prozent.<a href="#fn-6" id="fnref-6"><sup>6</sup></a>

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-1-full.png" alt="Ethereums Schichtenmodell — Consensus Layer, Execution Layer und Data Availability Layer" loading="lazy" />
<figcaption>Abbildung 4.1 — Ethereums Schichtenmodell. Consensus Layer und Execution Layer, verbunden über die Engine API, dazu die Schicht der Datenverfügbarkeit. Fünf unabhängige Implementierungen je Schicht, in fünf Sprachen, von fünf Teams.</figcaption>
</figure>

### Die EVM als programmierbare Ausführungsumgebung

Was Ethereum von einer reinen Zahlungskette wie Bitcoin unterscheidet, ist die Ethereum Virtual Machine. Die EVM ist eine deterministische 256-Bit-Stack-Maschine: Jeder Node im Netzwerk führt denselben Code mit denselben Eingaben aus und kommt zwingend zum selben Ergebnis.<a href="#fn-7" id="fnref-7"><sup>7</sup></a> Diese Determinismus-Eigenschaft ist konstitutiv für das Funktionieren des Systems, weil sie die Grundlage dafür bildet, dass alle Nodes über den korrekten Zustand übereinstimmen können.

Die EVM operiert mit einem dreistufigen Speichermodell: Der Stack ist eine volatile Datenstruktur nach dem Last-In-First-Out-Prinzip, der Memory ein volatiler byte-adressierbarer Arbeitsbereich und der Storage der persistente Speicher, dessen Inhalte im Merkle Patricia Trie verankert sind. Storage-Operationen sind die teuersten im gesamten Opcode-Set, weil jeder geschriebene Wert von allen Nodes auf unbestimmte Zeit gespeichert werden muss.

Smart Contracts sind Programme, die auf der EVM ausgeführt werden. Sie werden als Bytecode auf dem Netzwerk deployt und sind danach unveränderbar. Das Deployment ist permissionless: Die einzige Voraussetzung sind Gas-Gebühren, die an das Netzwerk gezahlt werden. Die Ausführungsarchitektur ist sequentiell — alle Transaktionen innerhalb eines Blocks werden strikt in Reihenfolge abgearbeitet. Bei einer Slotzeit von 12 Sekunden und dem aktuellen Gas Limit von 60.000.000 verarbeitet Ethereum auf Layer 1 durchschnittlich 15 bis 30 Transaktionen pro Sekunde.

Ethereum operiert als vollständig transparentes System: Jede Transaktion, jeder Kontostand und jeder Smart-Contract-Zustand ist für jeden Netzwerkteilnehmer einsehbar. Es gibt keine nativen Privacy-Mechanismen auf Protokollebene, weder Sender noch Empfänger noch Transaktionsbetrag sind verschleiert. Diese Transparenz ist eine Konsequenz der Verifikationsarchitektur, die erfordert, dass alle Nodes denselben Zustand nachvollziehen können, und sie erzeugt eine Eigenschaft, die für manche Anwendungsfälle eine Stärke ist, vor allem Auditierbarkeit und Nachvollziehbarkeit, und für andere eine fundamentale Einschränkung, insbesondere für institutionelle Akteure mit Datenschutzanforderungen und Nutzer mit Privatsphärebedürfnis.

Innerhalb eines Blocks ermöglicht die EVM atomare Composability: Beliebig viele Smart-Contract-Interaktionen können in einer einzigen Transaktion verkettet werden, und die gesamte Kette wird entweder vollständig ausgeführt oder vollständig zurückgesetzt. Flash Loans illustrieren diese Eigenschaft: Ein Nutzer kann in einer einzigen Transaktion Millionen US-Dollar leihen, die geliehenen Mittel für eine Arbitrage-Operation einsetzen und den Kredit zurückzahlen — ohne Sicherheiten und ohne Intermediär. Diese Eigenschaft bildet die Grundlage für das Ökosystem der Decentralized Finance.

### Account Abstraction

Ethereum kennt historisch zwei Typen von Accounts. Externally Owned Accounts werden durch einen einzelnen kryptographischen Schlüssel kontrolliert. Contract Accounts werden durch Code kontrolliert, der auf der EVM läuft. EIP-7702, aktiviert mit dem Pectra-Upgrade am 7. Mai 2025, adressiert die Nutzbarkeitsbarrieren des traditionellen Modells auf der Protokollebene: Es erlaubt Standard-Accounts, temporär die Logik eines Smart Contracts zu übernehmen. Session Keys, Social Recovery und Gas Sponsoring werden damit auf Protokollebene implementierbar. Der EIP ist deployt und auf dem Mainnet aktiv, die Integration in die großen Wallet-Anwendungen befindet sich in der Umsetzung. Die Übernahmedynamik lässt sich am älteren ERC-4337-Standard ablesen: über 25,5 Millionen Smart Accounts und 132 Millionen UserOperations dokumentieren die Nachfrage nach programmierbaren Accounts.<a href="#fn-8" id="fnref-8"><sup>8</sup></a>

### State als Zustandsdatenbank

Alles, was Ethereum als System speichert, liegt in einer Datenstruktur namens Merkle Patricia Trie. Diese Struktur besteht aus vier verschachtelten Tries: dem World State Trie, der alle Accounts enthält, dem Account Storage Trie, der den persistenten Speicher jedes einzelnen Smart Contracts abbildet, sowie dem Transactions Trie und dem Receipts Trie. Der World State Root, ein 32-Byte-Hash, der den gesamten Zustand des Systems zusammenfasst, wird im Header jedes Blocks verankert. Ein Merkle Proof kann mit logarithmischem Aufwand belegen, dass ein bestimmter Zustandseintrag im Trie vorhanden ist oder fehlt.

Der State umfasst in der komprimierten Speicherform der Clients 150 bis 200 GB, die gesamte Größe eines Full Node beträgt 1.579 GB.<a href="#fn-9" id="fnref-9"><sup>9</sup></a> Die Hardware-Anforderungen umfassen mindestens 2 TB SSD-Speicher, 16 GB RAM und eine stabile Internetverbindung mit mindestens 25 Megabit pro Sekunde. Das permanente Wachstum des State ist das zentrale Langzeitproblem der Ethereum-Architektur: Jeder deployte Contract, jedes neue Wallet, jeder gespeicherte Storage-Slot akkumuliert permanent auf allen Full Nodes, ohne dass inaktive Einträge verfallen oder komprimiert werden.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-2-full.png" alt="Die Merkle Patricia Trie — vier verschachtelte Tries und der World State Root" loading="lazy" />
<figcaption>Abbildung 4.2 — Die Merkle Patricia Trie. Vier verschachtelte Tries und der World State Root, der sie im Block-Header verankert. Ein Merkle Proof belegt mit logarithmischem Aufwand, dass ein Zustandseintrag vorhanden ist oder fehlt — darauf beruht die unabhängige Verifizierbarkeit des Systems.</figcaption>
</figure>

## 4.2 Der Transaktionslebenszyklus

Eine einzelne Transaktion durchquert auf ihrem Weg von der Erstellung bis zur Finalisierung das gesamte System. An jeder Station dieses Weges offenbart sich eine Komponente der Architektur, die im Zusammenspiel mit den anderen die Eigenschaften des Systems bestimmt.

### Erstellung und Gas

Der Lebenszyklus einer Transaktion beginnt beim Nutzer, der eine signierte Nachricht erstellt, die den gewünschten Zustandsübergang beschreibt: einen Transfer von ETH, einen Aufruf einer Smart-Contract-Funktion oder das Deployment eines neuen Contracts. Die Signatur erfolgt über den ECDSA-Algorithmus auf der secp256k1-Kurve und beweist kryptographisch, dass der Absender über den privaten Schlüssel des sendenden Accounts verfügt.

Jede Operation auf der EVM verbraucht eine definierte Menge Gas. Die Kostenstruktur spiegelt die tatsächliche Belastung wider: Eine einfache Addition kostet 3 Gas, ein Keccak-256-Hash 36 Gas, das Laden eines Speicherwerts 2.100 Gas und ein Schreibvorgang in den persistenten Speicher 22.100 Gas. Das Gas Limit pro Block liegt bei 60.000.000 und wurde im Laufe des Jahres 2025 durch Validator-Signaling ohne Hard Fork verdoppelt.<a href="#fn-10" id="fnref-10"><sup>10</sup></a>

Das Gebührenmodell EIP-1559, seit August 2021 aktiv, teilt die Transaktionsgebühr in zwei Komponenten auf.<a href="#fn-11" id="fnref-11"><sup>11</sup></a> Die Base Fee wird algorithmisch bestimmt und passt sich dynamisch an die Blockauslastung an: Wenn der vorangegangene Block mehr als die Hälfte seines Gas Limits verbraucht hat, steigt die Base Fee um bis zu 12,5 Prozent. Liegt die Auslastung darunter, sinkt sie um denselben maximalen Faktor. Die Base Fee wird verbrannt — kumulativ sind seit August 2021 über 4,6 Millionen ETH dem Umlauf entzogen worden. Die Priority Fee wird vom Nutzer frei gewählt und fließt an den Proposer des Blocks.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-3-full.png" alt="Der Gebührenmarkt nach EIP-1559 — Base Fee und Priority Fee, ihre Ziele und die Anpassungsregel" loading="lazy" />
<figcaption>Abbildung 4.3 — Der Gebührenmarkt nach EIP-1559. Base Fee und Priority Fee, ihre Ziele und die Regel, nach der sich die Base Fee anpasst.</figcaption>
</figure>

### Propagation im Peer-to-Peer-Netzwerk

Die signierte Transaktion wird über das Peer-to-Peer-Netzwerk verbreitet. Es gibt keinen einzelnen zentralen Mempool — jeder Node pflegt eine lokale Sicht auf die Transaktionen, die er von seinen Peers empfangen hat. Diese dezentrale Mempool-Architektur erzeugt eine informationelle Asymmetrie, die für das MEV-Phänomen konstitutiv ist: Builder, die über privilegierte Verbindungen zu mehr Nodes verfügen oder private Order Flows empfangen, haben eine vollständigere Sicht auf die ausstehenden Transaktionen als durchschnittliche Nodes.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-4-full.png" alt="Die Mempool-Sichten — jeder Node kennt eine andere Teilmenge der ausstehenden Transaktionen" loading="lazy" />
<figcaption>Abbildung 4.4 — Die Mempool-Sichten. Jeder Node pflegt eine eigene Sicht auf die ausstehenden Transaktionen. Welche er erkennt, hängt von der Netzwerktopologie, den Propagationszeiten und seinen Filterregeln ab. Aus dieser Ungleichheit der Sichten entsteht die informationelle Asymmetrie, die für das MEV-Phänomen konstitutiv ist.</figcaption>
</figure>

### Block Building und MEV

Spezialisierte Block Builder sammeln Transaktionen aus öffentlichen Mempools und privaten Order Flows und konstruieren Blöcke, die für die Extraktion von Maximal Extractable Value optimiert sind.<a href="#fn-12" id="fnref-12"><sup>12</sup></a> MEV entsteht aus der Tatsache, dass die Reihenfolge von Transaktionen innerhalb eines Blocks den wirtschaftlichen Ausgang beeinflusst: Arbitrage-Transaktionen zwischen dezentralen Börsen, Liquidationen in Lending-Protokollen und Sandwich-Attacks sind die häufigsten MEV-Formen. Die kumulative MEV-Extraktion seit dem Merge wird auf 1,5 bis 2 Milliarden US-Dollar geschätzt, wobei circa 93 Prozent dieser Werte als Gebote an die Validatoren fließen.<a href="#fn-13" id="fnref-13"><sup>13</sup></a>

Die Marktstruktur der Blockproduktion per 27. März 2026 zeigt eine erhebliche Konzentration: Titan Builder kontrolliert 51,2 Prozent der Blöcke, BuilderNet 25,7 Prozent und Quasar 16,4 Prozent.<a href="#fn-14" id="fnref-14"><sup>14</sup></a> Drei Builder-Adressen kontrollieren damit 93,3 Prozent der Ethereum-Blockproduktion. Der Herfindahl-Hirschman-Index dieser Marktstruktur liegt bei 3.554, ein Wert, der die Schwelle von 2.500 deutlich überschreitet, ab der das US-Justizministerium einen Markt als hochkonzentriert einstuft.

### Proposer-Builder Separation

Die Architekturantwort auf die Frage, wie Blockproduktion von Blockvalidierung getrennt werden kann, ist Proposer-Builder Separation. Builder senden fertige Blöcke mit Geboten an Relays — Off-Chain-Intermediäre wie Ultra Sound Relay, Titan Relay oder BloXroute —, die als vertrauenswürdige Vermittler zwischen Buildern und Validatoren fungieren. Der für den jeweiligen Slot ausgewählte Proposer wählt blind das höchste Gebot und schlägt den zugehörigen Block vor, ohne dessen Inhalt zu kennen. 90 Prozent der Blöcke nutzen MEV-Boost, die Sidecar-Software, die Validatoren mit diesem Builder-Marktplatz verbindet.

15 Prozent der Blöcke laufen über Relays, die explizit OFAC-konform operieren.<a href="#fn-15" id="fnref-15"><sup>15</sup></a> Im November 2022 liefen noch 79 Prozent der Blöcke über OFAC-konforme Relays — ein Wert, der in der Community erhebliche Besorgnis auslöste. Der Rückgang auf 15 Prozent erfolgte ohne protokolläre Intervention, getrieben durch Marktdynamik: Non-OFAC-compliant Builder gewannen Marktanteile, weil sie keine Einschränkungen beim Transaktions-Screening hatten. FOCIL (EIP-7805), ein Validator-Komitee-basiertes Inclusion-List-System, soll die emergente Zensurresistenz durch eine protokolläre Garantie ersetzen und hat den Status PLAN.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-5-full.png" alt="Proposer-Builder Separation — der Weg eines Blocks vom Builder über den Relay zum Proposer" loading="lazy" />
<figcaption>Abbildung 4.5 — Proposer-Builder Separation. Der Weg eines Blocks vom Builder über den Relay zum Proposer, der blind das höchste Gebot wählt. Die Relays sind Off-Chain-Intermediäre und damit die einzige Stelle der Kette, die Vertrauen verlangt.</figcaption>
</figure>

### Konsens und Finality

Der für einen Slot ausgewählte Proposer schlägt den Block dem Netzwerk vor, und die 964.768 aktiven Validatoren attestieren über das Gasper-Protokoll, ob sie den Block als gültig anerkennen.<a href="#fn-16" id="fnref-16"><sup>16</sup></a> Gasper ist eine Kombination aus zwei komplementären Mechanismen.<a href="#fn-17" id="fnref-17"><sup>17</sup></a>

Casper FFG, das Friendly Finality Gadget, ist ein Byzantine Fault Tolerant Finalization-Protokoll. Das Netzwerk ist in Epochs von je 32 Slots unterteilt, wobei jeder Slot 12 Sekunden dauert. Wenn Validatoren, die zusammen mehr als zwei Drittel des gestakten ETH repräsentieren, einen Supermajority Link zwischen Source und Target attestieren, wird der Target-Checkpoint als justified markiert. Wenn der darauffolgende Checkpoint ebenfalls justified wird, wird der vorherige finalisiert. Diese Zwei-Epoch-Kaskade erklärt die Finalisierungszeit von 12,8 Minuten: 64 Slots à 12 Sekunden. Ein finalisierter Block ist kryptographisch-ökonomisch irreversibel, weil eine Reversion erfordern würde, dass mehr als ein Drittel des gestakten ETH geslasht wird — ein Betrag in der Größenordnung von 26 Milliarden US-Dollar.

LMD-GHOST handhabt die Echtzeit-Blockauswahl zwischen den Finalisierungspunkten. Ausgehend vom letzten finalisierten Checkpoint folgt der Algorithmus bei jeder Gabelung der Kette dem Subtree, der das meiste Stake-Gewicht akkumuliert hat.

Jede Attestation eines Validators enthält drei simultane Votes: den Head Vote (für LMD-GHOST), den Source Vote (für Casper FFG) und den Target Vote (ebenfalls für Casper FFG). Die Verschränkung beider Mechanismen in einer einzigen Nachricht ist die zentrale Architekturentscheidung des Gasper-Protokolls.

Die empirische Bilanz des Konsensmechanismus seit dem Merge ist bemerkenswert stabil. Von 287.000 produzierten Epochs wurden 13 nicht finalisiert, eine Finality-Rate von über 99,99 Prozent.<a href="#fn-18" id="fnref-18"><sup>18</sup></a> Alle 13 nicht-finalisierten Epochs traten im Mai 2023 auf. Der Mai-2023-Vorfall war gleichzeitig der erste und bislang einzige Mainnet-Test des Inactivity Leak, eines automatischen Degradation Mode, der aktiviert wird, wenn die Finalisierung für mehr als vier Epochs ausbleibt. Die Selbstheilung dauerte 96 Minuten, ohne dass ein externer Eingriff erforderlich war.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-6-full.png" alt="Die Attestation — drei Votes in einer Nachricht, die in zwei verschiedene Konsensmechanismen eingehen" loading="lazy" />
<figcaption>Abbildung 4.6 — Die Attestation. Drei Votes in einer Nachricht, die in zwei verschiedene Konsensmechanismen eingehen. Der Head Vote geht in LMD-GHOST ein, Source Vote und Target Vote in Casper FFG.</figcaption>
</figure>

### Settlement und State-Aktualisierung

Nach der Finalisierung ist die Transaktion irreversibel in den Zustand des Netzwerks eingeschrieben. Die Base Fee wird verbrannt, die Priority Fee und eventuelle MEV-Zahlungen fließen an den Proposer des Blocks. Die State Transition Function wendet die durch die Transaktion ausgelösten Änderungen auf den World State Trie an und berechnet einen neuen State Root, der im Header des Blocks verankert wird.

### Systemeigenschaften des Lebenszyklus

Der Weg einer Transaktion durch das System legt vier Architektur-Eigenschaften frei. Die Modularität der Architektur ermöglicht Fehlerisolierung und unabhängige Weiterentwicklung einzelner Komponenten, erzeugt dabei aber Komplexität in der Abstimmung zwischen den Schichten. Die ökonomisch verankerte Sicherheit erzeugt Angriffskosten, die aber an den Marktwert von ETH gekoppelt sind. Die Off-Chain-Abhängigkeit der Blockproduktion erzeugt eine strukturelle Verwundbarkeit im kritischsten Pfad des Systems. Die kryptographisch erzwungene Finality bietet eine Irreversibilitätsgarantie, die stärker ist als die probabilistischen Garantien von Proof-of-Work-Systemen, aber mit einer Finalisierungszeit von 12,8 Minuten langsamer als die Sofortfinalität zentralisierter Systeme.

## 4.3 Die Sicherheitsökonomie

Warum staken 964.768 Validatoren ihr Kapital in einem System, das dieses Kapital bei Fehlverhalten konfiszieren kann, und was passiert, wenn sie aufhören es zu tun? Die ökonomische Logik hinter diesem Einsatz trägt die Sicherheitsarchitektur des Systems.

### Ökonomische Anreize und Konsolidierung

Validatoren erhalten Belohnungen für korrektes Verhalten im Konsensprotokoll aus zwei Quellen: der Protokoll-Issuance und MEV-Rewards. Die Reward-Struktur gewichtet den korrekten Target Vote mit 40,6 Prozent des Gesamtgewichts, Source Vote und Head Vote mit jeweils 21,9 Prozent, die Blockproduktion mit 12,5 Prozent und das Sync Committee mit 3,1 Prozent. Die Issuance skaliert invers mit der Quadratwurzel des gestakten ETH — die effektive Staking-Rate liegt bei circa 2,6 Prozent, gesunken von circa 13 Prozent, als der Staking-Anteil noch niedrig war.<a href="#fn-19" id="fnref-19"><sup>19</sup></a> Zwischen 30 und 31 Prozent des ETH Total Supply von 120.693.582 ETH sind gestakt.

Das Pectra-Upgrade löste eine strukturelle Verschiebung in der Validator-Landschaft aus. EIP-7251 erhöhte die maximale Effective Balance pro Validator von 32 auf 2.048 ETH, und große Staking-Anbieter nutzten diese Möglichkeit, um viele einzelne 32-ETH-Validatoren in wenige High-Balance-Validatoren zu konsolidieren.<a href="#fn-20" id="fnref-20"><sup>20</sup></a> Die Gesamtzahl der aktiven Validatoren sank von 1,07 Millionen auf 964.768, ohne dass sich die Menge des gestakten ETH veränderte.

### Angriffsökonomie und Slashing

Die zentrale Sicherheitsschwelle des Systems ist die 34-Prozent-Blocking-Minority: Ein Angreifer, der mehr als ein Drittel des gestakten ETH kontrolliert, kann die Finalisierung blockieren.<a href="#fn-21" id="fnref-21"><sup>21</sup></a> Die statische Kapitalanforderung für einen Blocking-Angriff beträgt rund 26 Milliarden US-Dollar — bei einem gestakten Volumen von 30 bis 31 Prozent des Total Supply und einem ETH-Preis von rund 2.100 US-Dollar am Stichtag. Der Angreifer riskiert dabei den vollständigen Verlust seines Einsatzes durch Slashing.

Slashing schützt das Konsensprotokoll vor zwei spezifischen Angriffsformen: Equivocation (Doppelsignierung) und Surround Voting. Die Strafstruktur skaliert mit Korrelation: Ein einzelner Validator, der durch einen Konfigurationsfehler doppelt signiert, wird milde bestraft. Eine koordinierte Gruppe, die gleichzeitig geslasht wird, erfährt eine Strafe, die den Angriff ökonomisch vernichtend macht.

Die empirische Bilanz bestätigt ein System, das durch Abschreckung wirkt. In über fünf Jahren Beacon Chain wurden 525 Validatoren geslasht — bei über 2,2 Millionen jemals erstellten, eine Quote von 0,024 Prozent.<a href="#fn-22" id="fnref-22"><sup>22</sup></a> Böswillige Angriffe sind in der gesamten Slashing-Historie nicht dokumentiert.

### Staking-Verteilung

Liquid Staking dominiert mit 31,1 Prozent des gestakten ETH: Nutzer delegieren ihr ETH an ein Protokoll wie Lido, Rocket Pool oder ether.fi und erhalten im Gegenzug einen handelbaren Token. Staking über zentralisierte Börsen macht 24 Prozent aus. Staking Pools halten 16 Prozent. Solo-Staker halten weniger als 1 Prozent — die Mindesteinlage von 32 ETH entspricht beim Stichtagskurs rund 67.000 US-Dollar.

Lido, das größte Liquid-Staking-Protokoll, hält 22,8 bis 23 Prozent des gestakten ETH, rückläufig von rund 32 Prozent im Jahr 2023.<a href="#fn-23" id="fnref-23"><sup>23</sup></a> Die DVT-Integration von 547.968 ETH mit einem Quartalszuwachs von 57 Prozent reduziert das Single-Point-of-Failure-Risiko im Operator-Set.<a href="#fn-24" id="fnref-24"><sup>24</sup></a> Lido liegt mit seinem aktuellen Anteil unter der kritischen 33-Prozent-Schwelle. Die kumulierte Staking-Konzentration der drei größten Anbieter, Lido, Coinbase und Binance, liegt bei 40 bis 45 Prozent des gestakten ETH.

### Drei Spannungen der Sicherheitsökonomie

Die erste Spannung betrifft die inflationäre Dynamik des Gesamtsystems. ETH ist im operativen Zustand Q1 2026 leicht inflationär, mit einer jährlichen Supply-Änderung von circa 0,5 Prozent. Die L2-Migration hat mehr Transaktionsaktivität von der Basisschicht absorbiert, als die Blob-Gebühren an Verbrennungsvolumen zurückführen. Vor der Einführung von Blob-Transactions zahlten Rollups für Calldata auf Layer 1, was zu substanziellen Base-Fee-Beiträgen führte. Nach Dencun fielen die L2-Kosten um 80 bis 95 Prozent und mit ihnen der Beitrag der L2-Aktivität zur ETH-Verbrennung.

Die zweite Spannung betrifft das prozyklische Risiko der Sicherheitsarchitektur. Die Angriffskosten von rund 26 Milliarden US-Dollar sind eine Funktion des ETH-Preises. Im Krypto-Winter 2022 fiel der ETH-Preis um über 80 Prozent, und proportional fielen die ökonomischen Angriffskosten. Das System überlebte diesen Stresstest empirisch: Kein Angriff wurde versucht, die Validator-Zahlen stiegen weiter, und das Konsensprotokoll operierte durchgehend im Normalbetrieb.

Die dritte Spannung betrifft die langfristige Finanzierung der Netzwerksicherheit. Wenn Layer-2-Systeme den Großteil der Transaktionsaktivität absorbieren und die L1-Fee-Revenue dauerhaft auf niedrigem Niveau verbleibt, stellt sich die Frage, ob die Sicherheit des Netzwerks progressiv durch Neuausgabe von ETH finanziert werden muss. Die Issuance-Reform-Debatte im Ethereum-Ökosystem ist aktiv und ungelöst: Keiner der diskutierten Vorschläge hat den Status eines formalen EIP erreicht.

## 4.4 Die Skalierungsarchitektur

Das in Abschnitt 4.2 beschriebene Gas Limit von 60.000.000 pro Block begrenzt die Transaktionskapazität der Basisschicht auf 15 bis 30 Transaktionen pro Sekunde. Um diese Zahlen einzuordnen: Visa verarbeitet in Spitzenzeiten über 65.000 Transaktionen pro Sekunde. Die Begrenzung ist eine Konsequenz des fundamentalen Designs, das jedem Node zumutet, jede Transaktion nachzuvollziehen.

### Die rollup-zentrische Strategie

Die Antwort, die das Ethereum-Ökosystem seit Oktober 2020 verfolgt, ist eine Arbeitsteilung zwischen Schichten. Vitalik Buterins Blogpost formulierte die strategische Weichenstellung: Die Basisschicht konzentriert sich auf Settlement und Datenverfügbarkeit, während eigenständige Layer-2-Systeme die Transaktionsausführung übernehmen.<a href="#fn-25" id="fnref-25"><sup>25</sup></a> Die Verschiebung verändert Ethereums operative Rolle grundlegend: Von einer Plattform, auf der Nutzer direkt Transaktionen ausführen, wird das System zu einer Infrastrukturschicht, die Sicherheit und Datenverfügbarkeit für darauf aufbauende Systeme bereitstellt.

Die beschriebene Arbeitsteilung wird seit Anfang 2026 durch eine strategische Verschiebung ergänzt. Vitalik Buterin formulierte in einem Blogpost die Zielsetzung, die Basisschicht selbst auf ein Vielfaches ihrer aktuellen Kapazität zu skalieren, durch parallele Transaktionsverarbeitung (EIP-7928), ein Gas Limit von 200.000.000 und langfristig eine tausendfache Kapazitätssteigerung. Diese Verschiebung, die in der Community als L1-first Pivot diskutiert wird, verändert Ethereums Positionierung. Die Features, die diese Verschiebung umsetzen sollen, haben den Status PLAN und werden in Kapitel 5 bewertet.

### Datenverfügbarkeit als Vorbedingung

Wenn ein Layer-2-System Transaktionen außerhalb der Basisschicht ausführt, muss sichergestellt sein, dass die Transaktionsdaten für unabhängige Prüfer zugänglich sind. Blobs, eingeführt durch EIP-4844 im Dencun-Upgrade (März 2024), sind 128 KB große temporäre Datenpakete, die circa 18 Tage auf Beacon Nodes vorgehalten und danach automatisch gelöscht werden.<a href="#fn-26" id="fnref-26"><sup>26</sup></a> Die Kostenreduktion seit Einführung der Blobs war erheblich: Die Transaktionskosten auf führenden Layer-2-Systemen fielen nach Dencun um 80 bis 95 Prozent. Im operativen Betrieb kostet eine einfache Token-Transaktion auf Arbitrum, Base oder Optimism im Median weniger als 0,01 US-Dollar.

Alle fünf führenden Layer-2-Systeme nach Total Value Secured — Arbitrum One, Base, OP Mainnet, Starknet und zkSync Era — nutzen Ethereum-Blobs als primäre Datenverfügbarkeitsschicht, was die Präferenz für die stärkeren Sicherheitsgarantien der Basisschicht reflektiert, selbst wenn günstigere Alternativen wie Celestia, EigenDA oder Avail verfügbar sind.

### Wie ein Rollup funktioniert

Ein Rollup delegiert die Transaktionsausführung an ein eigenständiges System, verankert aber die Ergebnisse und die Transaktionsdaten auf der Basisschicht. Ein Sequencer sammelt Transaktionen der L2-Nutzer, führt sie auf der L2-Ausführungsumgebung aus, bündelt die Ergebnisse zu Batches und postet komprimierte Daten als Blobs auf Layer 1.

Die Verifikation der State Roots folgt einem von zwei Ansätzen. Optimistic Rollups gehen davon aus, dass die eingereichten Zustände korrekt sind, und gewähren eine siebentägige Challenge-Period, in der jeder Teilnehmer einen Fraud Proof einreichen kann. Die Sicherheit beruht auf der 1-of-N honest verifier assumption. ZK-Rollups beweisen die Korrektheit des eingereichten Zustands mathematisch vor dessen Akzeptanz durch einen Validity Proof, den ein Verifier-Contract auf Layer 1 in konstanter Zeit prüft. Arbitrum One, Base und OP Mainnet sind Optimistic Rollups. Starknet und zkSync Era sind ZK-basiert.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-7-full.png" alt="Die rollup-zentrische Architektur — Layer 1 trägt Settlement und Datenverfügbarkeit, die Rollups die Ausführung" loading="lazy" />
<figcaption>Abbildung 4.7 — Die rollup-zentrische Architektur. Layer 1 trägt Settlement und Datenverfügbarkeit, die Rollups die Ausführung. Zwei Bestätigungsstufen: Der Sequencer bestätigt in Sekunden ohne Finalitätsgarantie, die vollen Garantien der Basisschicht erbt die Transaktion erst mit der L1-Finalisierung.</figcaption>
</figure>

### Das L2-Ökosystem im operativen Zustand

Alle führenden Layer-2-Systeme operieren mit zentralisierten Sequencern. Die Sequencer-Kontrolle liegt bei den jeweiligen Entwicklerteams: Offchain Labs betreibt den Arbitrum-Sequencer, Coinbase den Base-Sequencer, die Optimism Foundation den OP-Mainnet-Sequencer. Diese Zentralisierung erzeugt ein dreifaches Risikoprofil: Single Point of Failure für die Liveness, willkürliche Transaktionsexklusion und MEV-Monopol auf L2-Ebene. Dokumentierte Sequencer-Ausfälle: 78 Minuten bei Arbitrum (Dezember 2023), 33 Minuten bei Base (August 2025) und über fünf Stunden bei Starknet (September 2025). Der Linea-Vorfall vom Juni 2024, bei dem das Entwicklerteam den Sequencer bewusst stoppte und Angreifer-Adressen zensierte, illustriert das Zensurrisiko.

Das L2BEAT-Stage-Framework misst den Dezentralisierungsgrad der Rollups auf einer dreistufigen Skala.<a href="#fn-27" id="fnref-27"><sup>27</sup></a> Stage 0 erfordert Selbstidentifikation als Rollup, Datenverfügbarkeit auf L1 und Open-Source-Software. Stage 1 verlangt ein funktionierendes Proof-System und einen Security Council mit mindestens acht Teilnehmern. Stage 2 erfordert ein permissionless Proof-System, mindestens 30 Tage Exit Window und eine Beschränkung des Security Council auf onchain-nachweisbare Bugs.

Arbitrum One (Stage 1, 17,5 Mrd. USD), Base (Stage 1, 11 Mrd. USD) und OP Mainnet (Stage 1) teilen die Optimism-Proof-Infrastruktur. Starknet hat mit dem Stwo-Proof-System Stage 1 erreicht. zkSync Era verbleibt bei Stage 0. Stage 2 existiert nur bei immutablen Projekten mit minimalem Transaktionsvolumen wie Aztec v1 (2,95 Mio. USD). Die Exit Windows variieren drastisch: 17 Tage bei Arbitrum, aber null Tage bei Base und OP Mainnet.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-8-full.png" alt="Das L2BEAT Stage Framework — die Anforderungen der drei Stufen und die Rollups, die sie erreichen" loading="lazy" />
<figcaption>Abbildung 4.8 — Das L2BEAT Stage Framework. Die Anforderungen der drei Stufen und die Rollups, die sie erreichen, mit dem gesicherten Wert. Gesichert ist der Wert dort, wo die Dezentralisierung unvollständig bleibt. Stage 2 erreicht bislang nur ein immutables Projekt mit einem Bruchteil des Werts, den Arbitrum One trägt.</figcaption>
</figure>

### Gebrochene Cross-L2-Composability

Die atomare Composability, die Abschnitt 4.1 als emergente Eigenschaft der EVM beschrieben hat, existiert auf der Layer-2-Ebene nicht. Über 50 aktive Layer-2-Systeme operieren mit isoliertem State, und eine Transaktion auf Arbitrum kann nicht atomar mit einer Transaktion auf Base interagieren, obwohl beide Systeme auf derselben Basisschicht settlen. Cross-L2-Transfers erfordern Bridges, die eigene Trust-Annahmen einführen. Der kumulative Schaden durch Bridge-Hacks übersteigt 2,8 Milliarden US-Dollar.<a href="#fn-28" id="fnref-28"><sup>28</sup></a>

Die Superchain-Initiative, die 34 OP-Stack-basierte Chains zusammenfasst und rund 66 Prozent des gesamten L2-TVL repräsentiert, hat mit dem SuperchainERC20-Standard Fortschritte bei der Intra-Stack-Fungibilität erzielt. Cross-Stack-Atomizität zwischen einer OP-Stack-Chain und einer Arbitrum-Chain existiert nicht und ist auch nicht absehbar.

### Stablecoin-Verankerung und Substitutionsrisiko

Ethereum dominiert die globale Stablecoin-Emission mit einem Marktanteil von 52 bis 54 Prozent, was einem Volumen von circa 166 Milliarden US-Dollar entspricht.<a href="#fn-29" id="fnref-29"><sup>29</sup></a> USDC, USDT und DAI werden primär auf Ethereum emittiert, und die DeFi-Integration erzeugt eine Verankerungstiefe, die über die bloße Emission hinausgeht. Seit Dezember 2025 liegt das USDC-Transaktionsvolumen auf Solana jedoch höher als auf Ethereum — das zeigt, dass Transaktionsaktivität dorthin migriert, wo die Nutzererfahrung am günstigsten und schnellsten ist.

Der GENIUS Act, am 18. Juli 2025 als erstes US-Bundesgesetz für Stablecoins unterzeichnet, reguliert Stablecoin-Emittenten hinsichtlich Reserveanforderungen, Transparenzpflichten und Lizenzierung, adressiert aber die Protokollschicht nicht.<a href="#fn-30" id="fnref-30"><sup>30</sup></a> Das Gesetz reguliert Circle und Tether als Emittenten, aber weder Ethereum als Protokoll noch die Smart Contracts, die USDC und USDT auf der Basisschicht verwalten.

## 4.5 Governance und Systemevolution

Wie entwickelt sich ein System ohne zentrale Autorität weiter? Dieser Abschnitt beschreibt die Prozesse, durch die das System verändert wird, die Akteure, die diese Veränderungen tragen, und die Spannungen, die aus dem Zusammenspiel von dezentralem Anspruch und operativer Realität entstehen.

### Der EIP-Prozess

Ethereum Improvement Proposals sind der formale Standardisierungsmechanismus für Protokolländerungen, inspiriert von Pythons PEP-System und Bitcoins BIPs.<a href="#fn-31" id="fnref-31"><sup>31</sup></a> Der Prozess folgt einer definierten Sequenz: Draft, Review, Last Call, Final. Im Jahr 2025 wurden 230 EIPs eingereicht, von denen 37 akzeptiert wurden — eine Akzeptanzrate von 16 Prozent.

EIP Editors prüfen die formale Korrektheit. Inhaltliche Entscheidungen fallen in den AllCoreDevs-Calls, zweiwöchentlichen Videokonferenzen der Client-Entwicklerteams, die öffentlich gestreamt, aufgezeichnet und protokolliert werden. Das Verfahren ist transparent, dokumentiert und selektiv, operiert aber ohne formale Autorität: Kein Gremium kann eine Entscheidung erzwingen, kein Abstimmungsmechanismus kann eine Mehrheit binden. Ethereum hat bewusst keine On-Chain-Governance implementiert. Das Entscheidungsprinzip folgt dem Modell des Internets aus Kapitel 3: Rough Consensus and Running Code, eine Formulierung der Internet Engineering Task Force.<a href="#fn-32" id="fnref-32"><sup>32</sup></a>

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-9-full.png" alt="Der Ethereum-Governance-Prozess — formaler Status eines Vorschlags und die Instanzen, bei denen die Entscheidung tatsächlich liegt" loading="lazy" />
<figcaption>Abbildung 4.9 — Der Ethereum-Governance-Prozess. Der formale Status eines Vorschlags und die Instanzen, bei denen die Entscheidung tatsächlich liegt. Kein Gremium kann eine Entscheidung erzwingen, kein Abstimmungsmechanismus bindet eine Mehrheit. Ethereum hat bewusst keine On-Chain-Governance. 2025 wurden über 230 EIPs eingereicht, 37 akzeptiert.</figcaption>
</figure>

### Die Ethereum Foundation und dezentrale Finanzierung

Die Ethereum Foundation, gegründet 2014 als Schweizer Stiftung, ist die älteste und finanziell bedeutendste Organisation im Ethereum-Ökosystem. Ihr Treasury wird auf 850 bis 950 Millionen US-Dollar geschätzt, wovon 70.000 ETH gestakt und circa 5.800 ETH in DeFi-Vaults angelegt sind.<a href="#fn-33" id="fnref-33"><sup>33</sup></a> Die Stiftung finanziert Forschung, Entwicklung, Bildung und Community-Initiativen, hat aber bewusst keine Protokollkontrolle: Sie kann keine Protokolländerungen anordnen, keine Upgrades erzwingen und keine Transaktionen zensieren.

Die Konzentration einer substanziellen Treasury in einer einzigen Organisation erzeugt ein Zentralisierungsrisiko, das mit dem dezentralen Anspruch des Protokolls in Spannung steht, insbesondere weil die Stiftung durch ihre Finanzierungsentscheidungen die Richtung der Protokollentwicklung faktisch mitbestimmt.

Protocol Guild, ein kollektives Finanzierungsinstrument für Core-Entwickler mit über 190 Mitgliedern, hat seit seiner Gründung mehr als 50 Millionen US-Dollar aus freiwilligen Spenden des Ökosystems erhalten und stellt einen dezentralen Gegenpol zur EF-Finanzierung dar.<a href="#fn-34" id="fnref-34"><sup>34</sup></a> Die Finanzierung durch Protocol Guild ist allerdings weder protokollär verankert noch langfristig planbar, sondern abhängig von der fortgesetzten Spendenbereitschaft eines Ökosystems, das aus ökonomischem Eigeninteresse handelt.

### Upgrades als Risiko und Beweis

Der DAO-Fork von 2016 bleibt der einzige Fall, in dem die Community einen Zustandseingriff vornahm, und er wurde seither nie wiederholt. Die vier Post-Merge-Upgrades — Shapella, Dencun, Pectra und Fusaka — verliefen alle ohne Kettenspaltung.

Die Komplexitätsakkumulation ist ein steigendes Risiko: Pectra bündelte 11 EIPs in einem einzigen Release. Jeder EIP muss in zehn unabhängigen Implementierungen korrekt umgesetzt werden, und der Dezember-2025-Prysm-Bug bei Fusaka war eine direkte Folge der Interaktion zwischen neuen Protokollelementen und bestehenden Client-Implementierungen.

Die Fähigkeit des Governance-Systems, auf akute Sicherheitsvorfälle zu reagieren, hat historische Präzedenzfälle. Im September 2016 erzwang eine gezielte Denial-of-Service-Attacke auf den Geth-Client zwei Emergency-Hard-Forks innerhalb weniger Wochen — Tangerine Whistle und Spurious Dragon — eine außergewöhnlich schnelle Reaktion. Die Grenze dieser Handlungsfähigkeit liegt im fehlenden Pause-Mechanismus: Wenn ein kritischer Bug auf Protokollebene deployt ist, kann niemand das Netzwerk anhalten.

## 4.6 Emergente Eigenschaften: Was die Architektur ermöglicht

Die Eigenschaften, die den Infrastrukturanspruch begründen, lassen sich in keiner einzelnen Komponente lokalisieren. Sie emergieren aus dem Zusammenspiel der Architekturelemente. Fünf solcher Eigenschaften lassen sich benennen.

Die erste emergente Eigenschaft ist **Permissionless Deployment**. Aus dem Zusammenspiel der EVM als offener Ausführungsumgebung, dem permissionless Zugang zum Netzwerk und dem Gas-Markt als einziger Zugangsvoraussetzung entsteht ein System, in dem jeder Akteur Code deployen kann, ohne eine Genehmigung einholen zu müssen. Frischmanns Argument, dass offener Zugang zu Infrastruktur ökonomisch effizienter ist als die Einschränkung durch private Eigentumsrechte, findet hier eine technische Implementierung.<a href="#fn-35" id="fnref-35"><sup>35</sup></a> Die EVM erzeugt eine analoge Dynamik zur End-to-End-Architektur des Internets, die Van Schewick beschrieben hat: Sie senkt die Innovationsbarrieren an den Rändern des Netzwerks.<a href="#fn-36" id="fnref-36"><sup>36</sup></a> Die 31.869 aktiven Entwickler, die der Electric Capital Developer Report für September 2025 dokumentiert, und das DeFi Total Value Locked von circa 100 Milliarden US-Dollar auf Ethereum L1 und L2 quantifizieren den ökonomischen Umfang der produktiven Aktivitäten.<a href="#fn-37" id="fnref-37"><sup>37</sup></a>

Die zweite emergente Eigenschaft ist **atomare Composability**. Protokolle können aufeinander aufbauen, ohne bilaterale Vereinbarungen treffen zu müssen, weil die Kompatibilität auf der Ebene der gemeinsamen Ausführungsumgebung hergestellt wird. DeFi als Ökosystem ist das Ergebnis dieser Eigenschaft — eine emergente Schicht produktiver Aktivitäten, die auf der Infrastruktur aufbaut, ohne von ihr geplant oder antizipiert worden zu sein. Das ist Frischmanns Konzept des Input-Charakters von Infrastruktur in seiner präzisesten Form. Die Stärke der Composability liegt in ihrer Permissionlessness, die Schwäche in ihren Grenzen: Auf Layer-2-Ebene ist diese Composability gebrochen.

Die dritte emergente Eigenschaft ist die **unabhängige Verifizierbarkeit des Systemzustands**. Aus dem Zusammenspiel der Multi-Client-Architektur, des Merkle Patricia Trie und des Peer-to-Peer-Netzwerks entsteht die Möglichkeit, den gesamten Systemzustand ohne Vertrauen in einen Intermediär zu überprüfen. Technisch ist diese Verifikation auf Consumer-Hardware mit einer 2-TB-NVMe-SSD und 16 bis 32 GB RAM möglich, bei Gesamtkosten von 500 bis 1.500 US-Dollar. Operativ nutzen circa 70 Prozent der Nutzer RPC-Provider wie Infura und Alchemy, die als zentralisierte Vermittler fungieren.

Die vierte emergente Eigenschaft ist **kryptographisches Eigentum**. Ein Nutzer, der seinen Private Key kontrolliert, hat unbedingte Kontrolle über seine Assets auf Protokollebene, ohne dass eine Bank, eine Börse oder eine Behörde diese Kontrolle erteilen oder entziehen kann. Selbstverwahrung ist der Default, die Delegation an einen Intermediär eine bewusste Entscheidung des Nutzers. Die Kehrseite ist ihre Unversöhnlichkeit: Schlüsselverlust ist irreversibel.

Die fünfte emergente Eigenschaft ist **programmierbare Verbindlichkeit**. Aus dem Zusammenspiel von Smart Contracts, der kryptographisch erzwungenen Finality und dem Slashing-Mechanismus entsteht eine Durchsetzungsschicht für Vereinbarungen, die ohne externe Instanz operiert. Grimmelmann und Windawi haben gezeigt, dass Blockchains als Semicommons funktionieren, in denen private und gemeinsame Ressourcennutzung verschränkt sind und in denen die Regeln durch den Code durchgesetzt werden.<a href="#fn-38" id="fnref-38"><sup>38</sup></a> Smart Contracts erzwingen Vereinbarungen automatisch: Ein Lending-Protokoll liquidiert eine unterbesicherte Position ohne Gerichtsbeschluss. Die Grenze liegt in der Ausdrucksfähigkeit des Codes.

DeFi-Protokolle nutzen für Preisinformationen externe Datenquellen, sogenannte Oracles, die außerhalb des Ethereum-Protokolls operieren. Oracle-Netzwerke wie Chainlink liefern Preisfeeds von externen Märkten an Smart Contracts und erzeugen damit eine zusätzliche Vertrauensschicht, die nicht durch das Konsensprotokoll abgesichert ist. Der Bewertungsrahmen schließt die Oracle-Schicht durch die in Kapitel 2 definierte Oracle-Grenze bewusst von der Bewertung aus, weil Oracles Anwendungsschicht-Komponenten sind, nicht Infrastrukturschicht.

Diese fünf Eigenschaften begründen den Infrastrukturanspruch, den die folgenden Abschnitte prüfen. Die Bewertung fragt, ob die aktuelle Ausprägung dieser Eigenschaften dem Anspruch einer fundamentalen digitalen Infrastruktur genügt, denn die Existenz einer Eigenschaft und die Angemessenheit ihrer Ausprägung sind zwei verschiedene Fragen, und die Antwort auf die zweite erfordert die systematische Prüfung gegen die zwölf Kriterien. Ein System kann Permissionless Deployment ermöglichen und trotzdem an der Zugangsschwelle scheitern, wenn die Gas-Kosten den Zugang faktisch beschränken. Es kann Trustless Verification anbieten und trotzdem eine hohe Vertrauenslast erzeugen, wenn die Mehrheit der Nutzer über zentralisierte Intermediäre zugreift. Es kann programmierbare Verbindlichkeit herstellen und trotzdem die Anforderungen an Koordination verfehlen, wenn die L2-Fragmentierung die Kohärenz des Systems untergräbt. Die Bewertung muss diese Spannungen zwischen Möglichkeit und Realität systematisch erfassen, und genau dafür wurden die zwölf Kriterien konzipiert.

Vier Eigenschaften, von denen zwei in diesem Abschnitt beschrieben wurden, lassen sich mit den Indikatoren des Bewertungsrahmens nicht vollständig operationalisieren. Die permissionless Composability, die Fähigkeit, beliebige Protokoll-Kombinationen ohne Genehmigung zu schaffen und atomar auszuführen, verlangte eine formale Modellierung der Interaktionsmöglichkeiten zwischen Smart Contracts. Die kryptographische Systemzustandsverifikation, die Möglichkeit jedes Nutzers, den gesamten Netzwerkzustand unabhängig zu prüfen, verlangte eine empirische Erhebung der tatsächlichen Verifikationspraxis. Die dezentrale Selbstentwicklungsfähigkeit, die Kapazität des Systems, sich ohne zentrale Autorität weiterzuentwickeln, verlangte über die hier dokumentierte Prozessbeschreibung hinaus eine langfristige institutionelle Analyse. Die Privacy schließlich ist auf Protokollebene nicht verankert, was Anwendungsfälle mit Vertraulichkeitsbedarf einschränkt, insbesondere institutionelle Akteure mit regulatorischen Datenschutzanforderungen. Diese vier Dimensionen erscheinen in der Synthese (Abschnitt 6.3) als Forschungsagenda, weil sie für eine vollständige Infrastrukturbewertung relevant sind, aber mit den Methoden und Indikatoren dieser Arbeit nicht hinreichend operationalisiert werden können.

## 4.7 Dimension I: Strukturelle Fundierung

Die Bewertung wendet die zwölf Kriterien des Bewertungsrahmens auf den beschriebenen Gegenstand an und macht die Drei-Ebenen-Logik im Argumentationsfluss erkennbar: Was ermöglicht das Protokoll, was davon ist operativ realisiert, und reicht das Zusammenspiel für den Infrastrukturanspruch?

Zwei der Kriterien dieser Dimension — Sicherheits- und Vertrauenslast (I.2) und Minimale tragfähige Garantien (I.4) — sind als Kritische Bedingungen verankert.

### I.1 Funktionale Unersetzbarkeit

Das Protokoll produziert seine Verankerung nicht durch technische Sperrmechanismen. In Frischmanns Infrastrukturterminologie ist Ethereum damit ein System, das seine Unersetzbarkeit durch die Breite und Tiefe der produktiven Aktivitäten herstellt, die auf ihm aufbauen, nicht durch die Zugangsschranke, die es errichtet.<a href="#fn-39" id="fnref-39"><sup>39</sup></a>

Die Nutzungsrealität zeigt eine Verankerung, die in drei Dimensionen über den Schwellenwert hinausreicht. Die DeFi-TVL-Dominanz beläuft sich auf rund 100 Milliarden US-Dollar unter Ethereum-Sicherheit, konsistent über 60 Prozent des gesamten On-Chain-gesicherten DeFi-Kapitals. Die Stablecoin-Emission auf Ethereum beträgt rund 166 Milliarden US-Dollar und macht 52 bis 54 Prozent des Gesamtmarkts aus.<a href="#fn-40" id="fnref-40"><sup>40</sup></a> Das Developer-Ökosystem umfasst 31.869 aktive Entwickler (Stand September 2025), den historischen Höchstwert und über 70 Prozent aller Blockchain-Entwickler.<a href="#fn-41" id="fnref-41"><sup>41</sup></a>

Die Schock-Resilienz dieser Verankerung ist empirisch belegt: Im Marktzyklus 2022 kollabierte der DeFi-TVL absolut um über 75 Prozent, doch Ethereums relative Dominanzposition blieb erhalten. Einschränkungen sind gleichwohl dokumentiert: Die Stablecoin-Volumenmigration auf Solana, die L2-Autonomie und der Multi-Chain-Drift institutioneller Akteure relativieren die Exklusivität der Verankerung.

**Funktionale Unersetzbarkeit: Erfüllt mit Einschränkung.** Die Verankerung überschreitet alle quantitativen Schwellenwerte und hat einen Stresstest bestanden, aber die Emergenz der Verankerung, die L2-Autonomie und der Multi-Chain-Drift qualifizieren den Befund.

### I.2 Sicherheits- und Vertrauenslast

*Dieses Kriterium ist als Kritische Bedingung verankert: Ein Befund auf „Offen" würde das Gesamturteil auf „Bedingt geeignet" deckeln.*

Die Casper-FFG-Architektur verankert ökonomische Sicherheit mathematisch zwingend: Validatoren, die doppelt signieren oder widersprüchliche Checkpoints attestieren, verlieren ihren Stake durch Slashing. Die drei kritischen Schwellenwerte der BFT-Mathematik — 33 Prozent als Blocking Minority, 51 Prozent für Reorgs vor Finality und 66 Prozent als Supermajority — sind im Protokoll implementiert und nicht deaktivierbar.<a href="#fn-42" id="fnref-42"><sup>42</sup></a>

Die Daten zum operativen Sicherheitsprofil sind stark. Bei 964.768 aktiven Validatoren und rund 30 Prozent des ETH Total Supply im Staking belaufen sich die statischen Kosten einer 34-Prozent-Attacke auf rund 26 Milliarden US-Dollar. Die Finality-Rate liegt bei über 99,99 Prozent: Von rund 287.000 Epochs seit dem Merge wurden lediglich 13 nicht finalisiert, alle im Mai 2023.<a href="#fn-43" id="fnref-43"><sup>43</sup></a>

Die Restvertrauenslast zeigt eine Diskrepanz zwischen Protokollanspruch und Nutzungsrealität. Wallets wie MetaMask operieren als Closed-Source-Komponenten mit unilateralen Update-Mechanismen. Infura und Alchemy dominieren rund 70 Prozent des RPC-Traffics. 91,5 Prozent des L2-TVL operieren auf Stage-1-Rollups mit Security-Council-Multisigs und zentralisierten Sequencern. Cross-L2-Transfers erfordern Trust-basierte Bridges mit kumulativen Hack-Schäden von über 2,8 Milliarden US-Dollar oder siebentägige Challenge-Perioden. Ein typischer Nutzer, der über MetaMask auf einen L2-DeFi-Service zugreift, durchläuft vier Vertrauensschichten, von denen keine durch das Ethereum-Protokoll selbst abgesichert ist.

**Sicherheits- und Vertrauenslast: Erfüllt mit Einschränkung.** Die ökonomische Sicherheitsdimension erfüllt alle technischen Indikatoren. Die Restvertrauens-Dimension dokumentiert eine operative Diskrepanz zwischen Protokollmöglichkeit und Nutzungsrealität.

### I.3 Koordinationsfunktion

Das Protokoll implementiert drei der vier Koordinationsprimitive operativ: Settlement als finalisierte, irreversible Transaktionsverarbeitung nach rund 12,8 Minuten, Execution als deterministische Smart-Contract-Ausführung mit atomarer Composability, und Data Availability als KZG-Commitment-basierte Blob-Verfügbarkeit für L2-Rollups seit Dencun. Das vierte Primitiv — die protokollseitige Verifikation beliebiger Off-Chain-Berechnungen — befindet sich im Status RES und ist nicht Teil der IST-Bewertung.<a href="#fn-44" id="fnref-44"><sup>44</sup></a>

Rund 100 Milliarden US-Dollar sind in einem permissionlosen System ohne institutionellen Treuhänder koordiniert, rund um die Uhr, 365 Tage im Jahr, ohne Wartungsfenster. Alle Top-5-Rollups nach TVL settlen auf Ethereum und nutzen Blob-Transactions für Data Availability. Die Cross-L2-Composability ist allerdings die qualitative Einschränkung: Die atomare Composability ist auf L2-Ebene strukturell nicht vorhanden. Monatliche Bridge-Volumina von rund 11,2 Milliarden US-Dollar zeigen das Ausmaß des Koordinationsbedarfs, der über Intermediäre abgewickelt wird.

**Koordinationsfunktion: Erfüllt mit Einschränkung.** Die Koordinationsleistung ist real, quantitativ substanziell und qualitativ einzigartig, aber die L2-Fragmentierung untergräbt die Kohärenz der Koordination.

### I.4 Minimale tragfähige Garantien

*Dieses Kriterium ist die zweite Kritische Bedingung dieser Dimension.*

Die Time-to-Finality beträgt 12,8 Minuten und liegt damit unter dem Schwellenwert von 15 Minuten.<a href="#fn-45" id="fnref-45"><sup>45</sup></a> Die Liveness ist durch eine Finality-Rate von über 99,99 Prozent belegt, wobei seit Mai 2023 kein einziger Ausfall aufgetreten ist.

Der Degradation Mode ist die Eigenschaft, die Ethereum von allen Referenzinfrastrukturen abhebt. Der Inactivity Leak wurde im Mai 2023 auf dem Mainnet getestet: Das Protokoll reagierte automatisch, inaktive Validatoren verloren progressiv Stake, und die Selbstheilung erfolgte nach rund 96 Minuten, ohne manuellen Eingriff, ohne Koordination außerhalb des Protokolls und ohne Unterbrechung der Block-Produktion.<a href="#fn-46" id="fnref-46"><sup>46</sup></a> Bei einem Ausfall des DNS-Root-Server-Netzwerks, von SWIFT-Knoten oder im Stromversorgungsnetz hängt die Wiederherstellung von externer Koordination ab. Ethereums Inactivity Leak benötigt nichts davon.

Die vierte Garantie — Zensurresistenz unter koordiniertem Angriff — erreicht nicht das Niveau der ersten drei. Es gibt keinen Protokollmechanismus, der einen Block-Proposer oder Builder zwingt, eine spezifische valide Transaktion aufzunehmen. FOCIL (EIP-7805) hat den Status PLAN. Die OFAC-Compliance-Rate liegt bei rund 15 Prozent und damit deutlich unter dem 50-Prozent-Schwellenwert, aber diese Leistung beruht auf Marktdynamik, nicht auf einer protokollären Garantie.<a href="#fn-47" id="fnref-47"><sup>47</sup></a>

**Minimale tragfähige Garantien: Erfüllt mit Einschränkung.** Drei von vier Garantien sind protokollär verankert und operativ bewiesen. Die vierte ist funktional gegeben, aber nicht durch das Protokoll abgesichert.

### Synthese Dimension I

Alle vier Kriterien stehen auf „Erfüllt mit Einschränkung". Die beiden Kritischen Bedingungen (I.2 und I.4) passieren die Kaskadenschwelle. Das Muster, das die gesamte Dimension charakterisiert, lässt sich auf einen Satz bringen: Die architektonische Grundlage ist tragfähig, die Einschränkungen liegen durchgehend in der Diskrepanz zwischen dem, was das Protokoll ermöglicht, und dem, was die operative Realität davon einlöst.

## 4.8 Dimension II: Qualitative Tragfähigkeit

Die zweite Dimension prüft, ob Ethereum die qualitativen Eigenschaften aufweist, die den Infrastrukturanspruch inhaltlich tragen. Neutralität und Zensurresistenz (II.1) ist die dritte und letzte Kritische Bedingung des gesamten Bewertungsrahmens.

### II.1 Neutralität und Zensurresistenz

*Dieses Kriterium ist als Kritische Bedingung verankert und enthält den einzigen Indikator, der auf der Stufe „Offen" steht.*

Das Protokoll verankert Neutralität durch Permissionless Participation, inhaltsneutrale Blockvalidierung durch Casper FFG und Fork-Choice-Neutralität ohne Whitelist oder Blacklist. Was das Protokoll nicht verankert, ist eine Inklusions-Obligation: Kein Mechanismus zwingt einen Block-Proposer oder Builder, eine spezifische valide Transaktion aufzunehmen.

Die OFAC-Compliance-Rate von rund 15 Prozent der Blöcke liegt deutlich unter dem 50-Prozent-Schwellenwert und dokumentiert eine positive Trajektorie vom 79-Prozent-Peak im November 2022. Der Van-Loon-v.-Treasury-Entscheid im November 2024 und das OFAC-Delisting von Tornado Cash im März 2025 haben den regulatorischen Druck reduziert.<a href="#fn-48" id="fnref-48"><sup>48</sup></a>

Der strukturelle Defektbefund liegt in der Builder-Konzentration. Titan mit 51,2 Prozent, BuilderNet mit 25,7 Prozent und Quasar mit 16,4 Prozent kontrollieren zusammen 93,3 Prozent aller Blöcke bei einem Herfindahl-Hirschman-Index von rund 3.554.<a href="#fn-49" id="fnref-49"><sup>49</sup></a> Falls Titan und BuilderNet koordinieren, kontrollieren sie 76,9 Prozent der Blockproduktion — hinreichend für De-facto-Zensur des Großteils aller MEV-Boost-Blöcke. Dieser Indikator steht auf „Offen" und ist der einzige Offen-Befund der gesamten IST-Bewertung.<a href="#fn-50" id="fnref-50"><sup>50</sup></a>

Die geopolitische Jurisdiktions-Diversität zeigt eine gemäßigte Konzentration: rund 39 Prozent der Nodes in den USA, rund 53 Prozent in zwei Ländern.<a href="#fn-51" id="fnref-51"><sup>51</sup></a> Die Staking-Konzentrationsindikatoren liegen in akzeptablen Bereichen: Lido hält 22,8 bis 23 Prozent des gestakten ETH, deutlich unter der 33-Prozent-Blocking-Minority-Schwelle.<a href="#fn-52" id="fnref-52"><sup>52</sup></a>

**Neutralität und Zensurresistenz: Bedingt erfüllt.** Die Erfüllung hängt von Bedingungen ab, die im IST-Zustand nicht gesichert sind, insbesondere der Implementierung von FOCIL oder eines funktional äquivalenten Mechanismus. Das ist der schwächste Einzelbefund der gesamten IST-Bewertung.

### II.2 Offene Generativität

Die Architektur implementiert Permissionless Deployment vollständig: Jede Ethereum-Adresse kann Smart Contracts deployen, ohne Whitelist, Genehmigungspflicht oder Registrierungsanforderung. Die atomare Composability ermöglicht Interaktionsmuster wie Flash Loans, die in keinem traditionellen System ein Äquivalent haben. Die ERC-Standard-Familie hat sich als emergenter Interoperabilitätsmechanismus ohne zentrale Autorität etabliert.

Die gesamte Kern-Entwicklungsinfrastruktur steht unter liberalen Open-Source-Lizenzen (MIT, Apache 2.0): Foundry, Hardhat, Ethers.js, Slither und Echidna. Kein einzelner Anbieter kontrolliert die Toolchain oder kann den Zugang einschränken. Van Schewick hat für das Internet gezeigt, dass offene Werkzeuge und offene Protokolle zusammen die Innovationsdynamik erzeugen — für Ethereum gilt dasselbe Muster auf der Smart-Contract-Schicht.<a href="#fn-53" id="fnref-53"><sup>53</sup></a>

Die Einschränkung liegt in der L2-Fragmentierung: Die atomare Composability, die das DeFi-Ökosystem hervorgebracht hat, ist auf L2-Ebene nicht vorhanden. Flash Loans funktionieren nur innerhalb eines einzelnen Blocks auf einer einzelnen Chain und sind über L2-Grenzen hinweg strukturell unmöglich.

**Offene Generativität: Erfüllt mit Einschränkung.** Das Permissionless-Deployment-Modell und die offene Toolchain bilden die strukturell stärkste Eigenschaft des Systems. Die L2-Composability-Fragmentierung ist die dokumentierte Einschränkung.

### II.3 Unabhängige Verifizierbarkeit

Die deterministische EVM garantiert, dass jeder Full Node bei identischem Input den identischen Zustand berechnet. Die EVM-Spezifikation ist über das Yellow Paper formal definiert und durch KEVM maschinenverifiziert.<a href="#fn-54" id="fnref-54"><sup>54</sup></a> Mindestens sechs produktiv genutzte Verifikations-Tools überschreiten den Schwellenwert: Certora Prover, Foundry/Forge, Echidna, Mythril, Slither und KEVM.

Die wachsende L2-Verifikationskomplexität ist eine Einschränkung: Bei Optimistic Rollups beruht die Sicherheit auf der Annahme, dass mindestens ein ehrlicher Prüfer innerhalb der siebentägigen Challenge-Period einen Fraud Proof einreicht. Bei ZK-Rollups setzt das Verständnis der Proofs Kryptographie-Expertise voraus. Die Lazarus-Group-Angriffe von 2025 mit Schäden von 2,02 Milliarden US-Dollar belegen, dass auch auditierte Systeme über Angriffsvektoren wie Private Key Compromise und Oracle Manipulation verwundbar bleiben.<a href="#fn-55" id="fnref-55"><sup>55</sup></a>

**Unabhängige Verifizierbarkeit: Erfüllt mit Einschränkung.** Das Verifikationsangebot ist protokollär verankert und toolseitig substanziell, aber die L2-Verifikationskomplexität steigt, Spezifikationslücken bestehen, und die Audit-Kultur ist nicht universal.

### II.4 Niedrigschwellige Inklusivität

Die Full-Node-Hardware-Anforderungen liegen im Consumer-Bereich, mit Kosten von 500 bis 1.500 US-Dollar. Die State-Growth-Problematik ist die zentrale Langzeitbedrohung: Bei einer Full-Node-Größe von 1.579 GB und einem wöchentlichen Wachstum von circa 14 GB steigen die Anforderungen progressiv. Bei einem Gas-Target von 200 Millionen ergeben Projektionen 5 Terabyte bis 2028 und 9 Terabyte bis 2030.<a href="#fn-56" id="fnref-56"><sup>56</sup></a>

Die 32-ETH-Mindesteinlage für Solo-Staking ist das Defizit, das die gesamte Inklusivitätsbewertung prägt. Zum Kursniveau des ersten Quartals 2026 entsprechen 32 ETH rund 67.000 US-Dollar, und Solo-Staking ist auf unter 1 Prozent des Staking-Gesamtvolumens geschrumpft.<a href="#fn-57" id="fnref-57"><sup>57</sup></a> Dieses Defizit ist das einzige in der gesamten IST-Bewertung, für das die Roadmap keinen operativen Pfad enthält: Rainbow Staking befindet sich im Status RES ohne Implementierungscommitment.

Die L2-Transaktionskosten dokumentieren die stärkste Verbesserung. Die Median-Kosten auf den führenden L2s liegen nach EIP-4844 unter 0,01 US-Dollar pro Transaktion. Die Nutzbarkeit ohne kryptographisches Vorwissen hat sich durch EIP-7702 (Pectra) substanziell verbessert, aber die UX-Transformation ist noch nicht abgeschlossen.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-10-full.png" alt="IST-Bewertungsprofil Dimension I und II — die acht Einzelbewertungen mit Hierarchiestufe und Bewertungslabel" loading="lazy" />
<figcaption>Abbildung 4.10 — IST-Bewertungsprofil Dimension I und II. Die acht Einzelbewertungen mit Hierarchiestufe und Bewertungslabel. Sieben der acht Kriterien tragen dasselbe Label. II.1 ist der einzige Ausreißer und zugleich kritisch in der Kaskade.</figcaption>
</figure>

**Niedrigschwellige Inklusivität: Erfüllt mit Einschränkung.** Die Teilnahme ist für die transaktionale Nutzung auf L2 substanziell inklusiv, für den Full-Node-Betrieb möglich aber durch steigende State-Größe gefährdet, und für Solo-Staking durch die 32-ETH-Barriere prohibitiv eingeschränkt.

### Synthese Dimension II

Das Bewertungsprofil der zweiten Dimension zeigt eine ausgeprägte Asymmetrie. Die Kritische Bedingung (II.1) steht auf „Bedingt erfüllt", die drei Qualitativen Kriterien (II.2, II.3, II.4) stehen konsistent auf „Erfüllt mit Einschränkung". Die Dimension enthält sowohl die kritischste Schwachstelle des Systems — die fehlende protokolläre Neutralitätsgarantie — als auch eine seiner strukturell stärksten Eigenschaften — die offene Generativität. Die Spannung zwischen beiden Befunden zeigt ein System, das maximale Offenheit produziert, die Neutralität dieser Offenheit aber operativ der Marktdynamik überlässt.

## 4.9 Dimension III: Resilienz und Souveränität

Die dritte Dimension verschiebt den Zeithorizont: weg von der Frage, ob Ethereum heute geeignet ist, hin zur Frage, ob es geeignet bleiben kann — stabil über Jahrzehnte, anpassungsfähig ohne Destabilisierung, frei von proprietären Abhängigkeiten und auf generischer Hardware betreibbar. Keine Kritische Bedingung liegt in dieser Dimension.

### III.1 Langfristige Stabilität

*Dies ist die einzige Strukturelle Bedingung dieser Dimension.*

Der Protokoll-Upgrade-Track-Record ist der stärkste Indikator. Seit dem Merge hat Ethereum vier erfolgreiche Hard Forks abgeschlossen, bei einer Kadenz von circa sechs bis zwölf Monaten. Keiner dieser Forks hat einen Chain-Split erzeugt. Die Backward Compatibility ist über die gesamte Laufzeit gewahrt: Contracts von 2017 laufen unverändert.

Das State Growth ist der kritische Langzeitfaktor. Die Full-Node-Größe von 1.579 GB wächst mit circa 14 GB pro Woche, und das Protokoll hat keinen nativen Mechanismus, der dieses Wachstum begrenzt. Verkle Trees (EIP-6800, Status RES, Stagnant) und History Expiry (EIP-4444, Phase 1 DEPL seit Juli 2025, Phase 2 PLAN) adressieren Teile des Problems.<a href="#fn-58" id="fnref-58"><sup>58</sup></a> State Expiry selbst befindet sich im Status RES ohne Implementierungscommitment.

Die ökonomische Nachhaltigkeit stellt die zweite Langzeitfrage. Die L2-Migration hat das Gleichgewicht zwischen Issuance und Verbrennung verschoben: Wenn L2s den Großteil der Transaktionsaktivität absorbieren, sinkt die L1-Fee-Revenue, und damit verringert sich der deflationäre Gegenpart zur Issuance. Die Issuance-Reform-Debatte hat im IST-Zustand keinen Lösungspfad produziert.

Die Post-Quantum-Migration bildet die dritte Langzeitfrage. Die kryptographischen Grundlagen des Systems — ECDSA für Account-Signaturen, BLS12-381 für Validator-Attestationen und KZG-Commitments für Data Availability — müssen langfristig auf quantenresistente Algorithmen umgestellt werden. Die Migration befindet sich im Status RES, wobei über zehn Client-Teams Devnets für Post-Quantum-Kryptographie koordinieren. Im IST-Zeithorizont ist das Risiko nicht akut.

**Langfristige Stabilität: Erfüllt mit Einschränkung.** Die Kurz- und Mittelfriststabilität ist operativ belegt, die Langfriststabilität hängt von Entwicklungen ab, die im IST nicht gesichert sind.

### III.2 Adaptive Governance

Der EIP-Prozess ist transparent, selektiv und öffentlich: Von 230 eingereichten EIPs im Jahr 2025 wurden 37 akzeptiert. Der Hard-Fork-Track-Record belegt die operative Leistungsfähigkeit: Alle Post-Merge-Forks wurden ohne Chain-Split durchgeführt. Mayntz hat für große technische Systeme gezeigt, dass die Spannung zwischen Steuerung und Selbstorganisation ein zentrales Forschungsproblem ist — in Ethereums informellem Governance-Modell manifestiert sie sich als Spannung zwischen Rough Consensus und formaler Autorität.<a href="#fn-59" id="fnref-59"><sup>59</sup></a>

Die Ethereum Foundation als Governance-Akteur ist eine dokumentierte Zentralisierungsspannung. Board-kontrolliert, ohne protokolläre Rechenschaftspflicht und mit einem Treasury von geschätzten 850 bis 950 Millionen US-Dollar ist die EF der einflussreichste Einzelakteur im Ökosystem.<a href="#fn-60" id="fnref-60"><sup>60</sup></a> Die Issuance-Reform-Debatte ist der aktive Testfall für die Governance-Fähigkeit bei kontroversen Entscheidungen: Die Frage, ob und wie die ETH-Issuance angepasst werden soll, berührt direkte ökonomische Interessen der Staker und hat im IST-Zustand keinen Konsens produziert.

**Adaptive Governance: Erfüllt mit Einschränkung.** Das Governance-System ist operativ stark und hat einen Track Record, den kein vergleichbares dezentrales System vorweisen kann, aber die Informalität bietet keine mechanischen Garantien für Extremkonflikte, und die EF-Zentralisierung steht in Spannung zum dezentralen Anspruch.

### III.3 Souveräne Portabilität

Die Protokollschicht ist vollständig Open Source und proprietätsfrei. Alle zehn Clients stehen unter liberalen Lizenzen, von LGPL-3.0 für Geth über Apache 2.0 für Besu bis zu MIT für zahlreiche Tools. Es gibt kein Ethereum-Inc., das IP-Rechte hält, und die Ethereum Foundation als Schweizer Stiftung besitzt das Protokoll nicht. Der EVM-Standard ist als De-facto-Standard ohne proprietäre Kontrolle in das breitere Blockchain-Ökosystem diffundiert: OP Stack, Arbitrum, zkSync, Polygon und BNB Chain haben die EVM als Ausführungsumgebung übernommen.

Die historische Geth-Dominanz von über 70 Prozent (2020–2023) ist das dokumentierte Klumpenrisiko dieser Dimension. Die IST-Situation zeigt eine deutliche Verbesserung: Geth ist auf circa 42 Prozent gesunken, Nethermind hält rund 24 Prozent, Besu rund 16 Prozent, und kein Consensus-Layer-Client überschreitet 34 Prozent.<a href="#fn-61" id="fnref-61"><sup>61</sup></a>

Die operative Infrastrukturschicht zeigt ein anderes Bild. Die RPC-Konzentration von 70 Prozent über Infura und Alchemy erzeugt eine De-facto-Abhängigkeit auf der Zugriffsschicht. Die L2-Proliferation hat neue Soft-Lock-ins geschaffen: zkSync und Starknet nutzen teilweise proprietäre Prover-Technologien.<a href="#fn-62" id="fnref-62"><sup>62</sup></a>

**Souveräne Portabilität: Erfüllt mit Einschränkung.** Die Protokollschicht ist proprietätsfrei in einem Ausmaß, das keine der Referenzinfrastrukturen erreicht. Die operative Schicht zeigt Konzentrationen und L2-Lock-ins, die den Anspruch auf der Nutzungsebene qualifizieren.

### III.4 Hardware-Agnostik

Der Übergang von Proof of Work zu Proof of Stake hat die ASIC-Abhängigkeit eliminiert und den Energiebedarf um 99,95 Prozent reduziert. Ein Validator-Node benötigt rund 100 Watt. Alle zehn Clients laufen nativ auf ARM-64 und x86-64-Architekturen. Das Protokoll hat keine Hardware-Präferenz: Ein Validator auf Consumer-Hardware hat dasselbe Stimmgewicht wie ein Validator auf einem Datacenter-Server.

Die Cloud-Konzentration konterkariert diese Protokolleigenschaft. Rund 59 Prozent der gehosteten Execution-Layer-Nodes laufen auf drei Cloud-Providern, wobei AWS 35,5 Prozent, Hetzner 13,8 Prozent und OVHcloud 9,7 Prozent halten. Der AWS-Outage im Oktober 2025 hat gezeigt, dass das Netzwerk den Ausfall einer AWS-Region absorbieren konnte, ohne Finalität zu verlieren, aber der Korridor zwischen normalem Betrieb und Finalitätsverlust wurde kurzfristig enger. Home-Staking liegt bei unter 15 Prozent des gestakten ETH.<a href="#fn-63" id="fnref-63"><sup>63</sup></a>

Die geographische Verteilung: 39 Prozent der Nodes in den USA, 14,5 Prozent in Deutschland, 14 Prozent in China. Jenseits dieser drei Länder verteilt sich der übrige Node-Anteil auf zahlreiche weitere Jurisdiktionen, von denen mehr als zehn — darunter Singapur, Kanada, Japan, Australien, die Niederlande und die Schweiz — jeweils über ein Prozent der Nodes halten. Der geographische Indikator des Kriteriums (mindestens zehn Länder mit jeweils über einem Prozent) ist damit erfüllt.

**Hardware-Agnostik: Erfüllt mit Einschränkung.** Die protokolläre Hardware-Agnostik ist vollständig realisiert — ohne ASIC-Abhängigkeit, ARM-kompatibel und Consumer-Energie-tauglich —, aber die operative Cloud-Konzentration erzeugt eine physische Abhängigkeit, die die Dezentralisierung auf der logischen Schicht unterläuft.

### Synthese Dimension III

Alle vier Kriterien stehen auf „Erfüllt mit Einschränkung". Die dritte Dimension zeigt den Abstand zwischen gegenwärtiger Funktionsfähigkeit und langfristiger Tragfähigkeit. Das State Growth, die offene Issuance-Frage und die Post-Quantum-Migration sind keine akuten Probleme, die den heutigen Betrieb gefährden, sondern Langzeitvektoren, die sich über Jahre entfalten. Die Strukturelle Bedingung III.1 geht als schwach in den dritten Kaskadenschritt ein.

## 4.10 Gesamtsynthese und IST-Urteil

Die zwölf Einzelbewertungen der Abschnitte 4.7 bis 4.9 ergeben ein Profil, das in seiner Konsistenz ebenso aufschlussreich ist wie in seiner einzigen Abweichung. Kein Kriterium erreicht „Erfüllt" ohne Qualifizierung. Elf der zwölf Kriterien stehen auf „Erfüllt mit Einschränkung". Eines — Neutralität und Zensurresistenz (II.1) — steht auf „Bedingt erfüllt". Keines steht auf „Offen". Das numerische Profil 0-11-1-0 zeigt ein System, das die Infrastrukturanforderungen in der Breite adressiert, bei dem aber die operative Realität die protokollären Möglichkeiten noch nicht vollständig einlöst.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-11-full.png" alt="IST-Profil aller zwölf Kriterien — Bewertungslabeln nach Hierarchiestufe und Dimension" loading="lazy" />
<figcaption>Abbildung 4.11 — IST-Profil aller zwölf Kriterien. Bewertungslabeln nach Hierarchiestufe und Dimension. 0-mal Erfüllt, elfmal Erfüllt mit Einschränkung, einmal Bedingt erfüllt, keinmal Offen.</figcaption>
</figure>

Die in Kapitel 2 definierte M3-Kaskade bestimmt das Gesamturteil anhand der hierarchischen Stufung der Kriterien. Die drei Kritischen Bedingungen bilden die erste Prüfungsstufe. Sicherheits- und Vertrauenslast (I.2) und Minimale tragfähige Garantien (I.4) stehen auf „Erfüllt mit Einschränkung" und passieren die Kaskadenschwelle. Neutralität und Zensurresistenz (II.1) passiert die Schwelle nicht uneingeschränkt: Die Builder-Konzentration von 93,3 Prozent bei drei Akteuren markiert einen strukturellen Defekt, und kein Protokollmechanismus erzwingt die Transaktionsinklusion. Der Befund ist „Bedingt erfüllt", nicht „Offen", was bedeutet, dass der Pfad zur Erfüllung erkennbar ist, die Erfüllung aber von der Implementierung von FOCIL oder eines funktional äquivalenten Mechanismus abhängt. Keine Kritische Bedingung steht auf „Offen", was das Gesamturteil von „Bedingt geeignet" abhebt. Eine Kritische Bedingung steht auf „Bedingt erfüllt", was die Kaskade auf die Stufe „Geeignet unter erheblichen Bedingungen" setzt.<a href="#fn-64" id="fnref-64"><sup>64</sup></a>

Die drei Strukturellen Bedingungen — Funktionale Unersetzbarkeit (I.1), Koordinationsfunktion (I.3) und Langfristige Stabilität (III.1) — stehen alle auf „Erfüllt mit Einschränkung" und gelten damit als schwach, sodass der dritte Kaskadenschritt dieselbe Deckelung setzt wie der zweite.

Die sechs Qualitativen Kriterien differenzieren den Grad innerhalb der erreichten Eignungsstufe. Alle sechs stehen auf „Erfüllt mit Einschränkung". Die Grad-Skala aus Kapitel 2 definiert den Grad als „Gut", wenn alle sechs Qualitativen Kriterien mindestens auf „Erfüllt mit Einschränkung" stehen — was hier der Fall ist.<a href="#fn-65" id="fnref-65"><sup>65</sup></a>

**Das Gesamturteil lautet: Geeignet unter erheblichen Bedingungen, Grad Gut.**

Die zentrale Bedingung, die das Label bestimmt, ist die Implementierung von FOCIL (EIP-7805) oder eines funktional äquivalenten Mechanismus, der die Zensurresistenz von einer emergenten Marktleistung in eine protokolläre Garantie transformiert. Solange die Transaktionsinklusion von der Marktstruktur der Builder abhängt und nicht vom Protokoll erzwungen wird, bleibt die Neutralitätsgarantie, die der Infrastrukturanspruch erhebt, operativ eingelöst, aber strukturell ungesichert.

Ein Muster durchzieht alle zwölf Bewertungen und lässt sich in einem Satz formulieren: Die Diskrepanz zwischen dem, was das Protokoll ermöglicht, und dem, was die operative Realität einlöst, ist das Grundmuster des IST-Zustands. Ethereum bietet auf Protokollebene die Voraussetzungen einer fundamentalen Infrastruktur — von der ökonomischen Sicherheit über die offene Generativität bis zur kryptographischen Verifizierbarkeit, von der atomaren Koordination bis zur automatisierten Selbstheilung. Die operative Nutzungsrealität hat diese Möglichkeiten nicht vollständig realisiert: Der Trust-Stack erzeugt institutionelle Abhängigkeiten, die L2-Fragmentierung untergräbt die Composability, die Builder-Konzentration gefährdet die Neutralität, der State Growth bedroht die langfristige Dezentralisierung, und die Governance operiert ohne mechanische Garantien für Extremkonflikte.

Das IST-Urteil definiert die Ausgangslage für die SOLL-Bewertung. Kapitel 5 wird prüfen, ob die Ethereum-Roadmap die identifizierten Einschränkungen adressiert und ob das SOLL-Profil das Gesamturteil verschieben kann. Die Frage ist dabei nicht, ob Ethereum als Infrastruktur geeignet ist — das IST-Urteil bestätigt die grundsätzliche Eignung unter Bedingungen —, sondern ob die Roadmap die Bedingungen einlösen kann, an die die Eignung geknüpft ist.

<div class="fn-list">
<ol>
<li id="fn-1">Buterin, Vitalik (2014): A Next-Generation Smart Contract and Decentralized Application Platform. Ethereum Whitepaper. URL: https://ethereum.org/en/whitepaper/ <a href="#fnref-1">â†©</a></li>
<li id="fn-2">Wood, Gavin (2014/2024): Ethereum: A Secure Decentralised Generalised Transaction Ledger (Yellow Paper). Aktuelle Version: Berlin Version, 2024. <a href="#fnref-2">â†©</a></li>
<li id="fn-3">Ethereum Foundation Blog (2022): The Merge. URL: https://blog.ethereum.org/2022/09/15/the-merge. Für den Energieverbrauchsvergleich vgl. Digiconomist: Ethereum Energy Consumption Index; Cambridge Centre for Alternative Finance (2022): Cambridge Blockchain Network Sustainability Index. <a href="#fnref-3">â†©</a></li>
<li id="fn-4">Etherscan: Ethereum Node Tracker. URL: https://etherscan.io/nodetracker (abgerufen am 27.03.2026). Für die Ethereum Foundation Dokumentation der Client-Architektur vgl. https://ethereum.org/en/developers/docs/nodes-and-clients/ <a href="#fnref-4">â†©</a></li>
<li id="fn-5">Cointelegraph (2025): Ethereum sees 25% validation drop post-Fusaka as Prysm bug affects network participation. Dezember 2025. Für historische Client-Marktanteile vgl. clientdiversity.org. <a href="#fnref-5">â†©</a></li>
<li id="fn-6">Ethernodes: Ethereum Node Distribution. URL: https://ethernodes.org (abgerufen Anfang 2026). Die Cloud-Prozentsätze beziehen sich auf gehostete EL-Nodes, nicht auf die Gesamtheit aller Nodes, da ein Teil der Nodes auf privater Hardware betrieben wird. <a href="#fnref-6">â†©</a></li>
<li id="fn-7">Wood, Gavin (2014/2024): Ethereum: A Secure Decentralised Generalised Transaction Ledger (Yellow Paper). Aktuelle Version: Berlin Version, 2024. <a href="#fnref-7">â†©</a></li>
<li id="fn-8">Dune Analytics: ERC-4337 Account Abstraction Dashboard (abgerufen am 27.03.2026). Für EIP-7702 vgl. Ethereum Foundation: Pectra Upgrade Specification. <a href="#fnref-8">â†©</a></li>
<li id="fn-9">Etherscan / YCharts: Ethereum Chain Data Size (abgerufen am 27.03.2026). Der Wert von 1.579 GB bezieht sich auf die Full-Node-Größe; der State Trie umfasst in komprimierter Client-Speicherung 150 bis 200 GB. Kapitel 5 misst demgegenüber den unkomprimierten Gesamt-State (rund 430 GiB). <a href="#fnref-9">â†©</a></li>
<li id="fn-10">Etherscan: Ethereum Average Gas Limit Chart. URL: https://etherscan.io/chart/gaslimit (abgerufen am 27.03.2026). Die Erhöhung erfolgte durch graduelles Validator-Signaling im Lauf des Jahres 2025, ohne dass ein Protokoll-Upgrade erforderlich war. <a href="#fnref-10">â†©</a></li>
<li id="fn-11">Buterin, Vitalik / Conner, Eric / Dudley, Rick / Slipper, Matthew / Norden, Ian / Bakhta, Abdelhamid (2019): EIP-1559: Fee market change for ETH 1.0 chain. Ethereum Improvement Proposal. Aktiviert im London-Upgrade, August 2021. <a href="#fnref-11">â†©</a></li>
<li id="fn-12">Daian, Philip / Goldfeder, Steven / Kell, Tyler / Li, Yunqi / Zhao, Xueyuan / Bentov, Iddo / Breidenbach, Lorenz / Juels, Ari (2020): Flash Boys 2.0: Frontrunning in Decentralized Exchanges, Miner Extractable Value, and Consensus Instability. In: IEEE Symposium on Security and Privacy (S&P), 2020. DOI: 10.1109/SP40000.2020.00040. <a href="#fnref-12">â†©</a></li>
<li id="fn-13">Flashbots: MEV-Explore und MEV-Boost Dashboard (abgerufen am 27.03.2026). Die Schätzung der kumulativen MEV-Extraktion basiert auf den über MEV-Boost dokumentierten Proposer-Zahlungen seit dem Merge. <a href="#fnref-13">â†©</a></li>
<li id="fn-14">relayscan.io: Builder und Relay-Marktanteile (abgerufen am 27.03.2026). <a href="#fnref-14">â†©</a></li>
<li id="fn-15">relayscan.io: Builder und Relay-Marktanteile; MEV Watch (abgerufen am 27.03.2026). <a href="#fnref-15">â†©</a></li>
<li id="fn-16">beaconcha.in: Ethereum Beacon Chain Explorer (abgerufen am 27.03.2026). Die Zahl 964.768 reflektiert den Post-Pectra-Konsolidierungseffekt durch EIP-7251; vor der Konsolidierung lag die Validator-Anzahl bei rund 1,07 Millionen. <a href="#fnref-16">â†©</a></li>
<li id="fn-17">Buterin, Vitalik / Griffith, Virgil (2019): Casper the Friendly Finality Gadget. arXiv:1710.09437. Für die kombinierte Gasper-Spezifikation vgl. Buterin, Vitalik et al. (2020): Combining GHOST and Casper. arXiv:2003.03052. <a href="#fnref-17">â†©</a></li>
<li id="fn-18">beaconcha.in: Epoch Finality Statistics. Die 13 nicht-finalisierten Epochs traten am 11. und 12. Mai 2023 auf. Vgl. Etherscan Blog (2023): Battle-Testing Ethereum's Finality. <a href="#fnref-18">â†©</a></li>
<li id="fn-19">CoinDesk (18. Februar 2026): Ethereum Staking Rate Reaches 30.8% of Total Supply. Die effektive APR-Angabe von circa 2,6 Prozent reflektiert den Rückgang, der durch die steigende Validator-Basis bei inverser Quadratwurzel-Skalierung der Issuance entsteht. <a href="#fnref-19">â†©</a></li>
<li id="fn-20">beaconcha.in: Ethereum Beacon Chain Explorer (abgerufen am 27.03.2026). Die Zahl 964.768 reflektiert den Post-Pectra-Konsolidierungseffekt durch EIP-7251. <a href="#fnref-20">â†©</a></li>
<li id="fn-21">Buterin, Vitalik / Griffith, Virgil (2019): Casper the Friendly Finality Gadget. arXiv:1710.09437. Für die kombinierte Gasper-Spezifikation vgl. Buterin et al. (2020): Combining GHOST and Casper. arXiv:2003.03052. <a href="#fnref-21">â†©</a></li>
<li id="fn-22">beaconcha.in: Slashing Statistics (abgerufen am 27.03.2026). Vgl. Migalabs / CryptoSlate (11. September 2025) für die Analyse des SSV Network/Ankr Slashing-Events. <a href="#fnref-22">â†©</a></li>
<li id="fn-23">Dune Analytics / CCN (5. März 2026): Lido Staking Market Share. Der Rückgang von 32 Prozent (2023) auf 22,8 bis 23 Prozent reflektiert relative Marktdynamik, nicht notwendigerweise einen Rückgang der absoluten Staking-Menge bei Lido. <a href="#fnref-23">â†©</a></li>
<li id="fn-24">Lido DAO: Tokenholder Update (26. Februar 2026). DVT-Adoption und QoQ-Wachstum. Für den Governance-Entscheid zur Selbstbeschränkung vgl. Lido DAO Snapshot Vote, Juni 2022. <a href="#fnref-24">â†©</a></li>
<li id="fn-25">Buterin, Vitalik (2020): A rollup-centric ethereum roadmap. Blogpost, Oktober 2020. URL: https://vitalik.eth.limo/general/2020/10/08/rollup.html <a href="#fnref-25">â†©</a></li>
<li id="fn-26">EIP-4844: Shard Blob Transactions. Ethereum Improvement Proposal, aktiviert im Dencun-Upgrade, März 2024. Für die Kostenreduktionsdaten vgl. L2BEAT: Transaction Costs Dashboard (abgerufen am 27.03.2026). <a href="#fnref-26">â†©</a></li>
<li id="fn-27">L2BEAT: Stages Framework und Risk Analysis. URL: https://l2beat.com/scaling/summary (abgerufen am 27.03.2026). Die Stage-Klassifizierung folgt dem im Juni 2023 eingeführten Framework. Für Vitalik Buterins Analyse der Stage-Übergänge vgl. Buterin, Vitalik (2025): Stages as a framework for evaluating rollup maturity. Blogpost. <a href="#fnref-27">â†©</a></li>
<li id="fn-28">Für die kumulativen Bridge-Hack-Schäden vgl. DeFiLlama: Hacks Dashboard und Chainalysis: Crypto Crime Report 2025. Der Bybit-Hack vom Februar 2025 betraf eine Hot-Wallet-Infrastruktur und wird in der Branche als der größte Krypto-Diebstahl der Geschichte eingestuft. <a href="#fnref-28">â†©</a></li>
<li id="fn-29">CoinGecko / DefiLlama: Stablecoin Market Cap by Chain (abgerufen am 27.03.2026). Der Wert von 52 bis 54 Prozent bezieht sich auf den Anteil Ethereums am gesamten Stablecoin-Markt einschließlich L2-Emission. <a href="#fnref-29">â†©</a></li>
<li id="fn-30">GENIUS Act: Guiding and Establishing National Innovation for U.S. Stablecoins Act. U.S. Congress (2025), unterzeichnet am 18. Juli 2025. <a href="#fnref-30">â†©</a></li>
<li id="fn-31">EIP-1: EIP Purpose and Guidelines. URL: https://eips.ethereum.org/EIPS/eip-1. Für die EIP-Statistik 2025 vgl. Ethereum Magicians Forum und EIPs.ethereum.org (abgerufen am 27.03.2026). <a href="#fnref-31">â†©</a></li>
<li id="fn-32">Die Formulierung „Rough Consensus and Running Code" geht auf David Clark zurück, der sie 1992 auf einem IETF-Meeting prägte. Vgl. RFC 7282: On Consensus and Humming in the IETF. Internet Engineering Task Force, 2014. <a href="#fnref-32">â†©</a></li>
<li id="fn-33">Ethereum Foundation: Report 2024. URL: https://ethereum.foundation/report-2024.pdf. Für aktuelle Treasury-Schätzungen vgl. Arkham Intelligence: Ethereum Foundation Wallet Tracking (abgerufen am 18.03.2026). Die Angabe von 850 bis 950 Mio. ist eine Schätzung auf Basis der veröffentlichten Bestände und der Marktentwicklung seit dem letzten Report. <a href="#fnref-33">â†©</a></li>
<li id="fn-34">Protocol Guild: Documentation and Membership. URL: https://protocol-guild.readthedocs.io (abgerufen am 27.03.2026). <a href="#fnref-34">â†©</a></li>
<li id="fn-35">Vgl. Frischmann 2012 sowie die Darstellung in Kapitel 2, Abschnitt 2.1. <a href="#fnref-35">â†©</a></li>
<li id="fn-36">Van Schewick, Barbara (2010): Internet Architecture and Innovation. MIT Press. Vgl. die Referenz in Kapitel 3, Abschnitt 3.1.2. <a href="#fnref-36">â†©</a></li>
<li id="fn-37">Electric Capital: Developer Report, September 2025. Die Zahl von 31.869 aktiven Entwicklern umfasst öffentliche Repository-Aktivität im Ethereum-Ökosystem. DefiLlama: Ethereum DeFi TVL (abgerufen am 27.03.2026). <a href="#fnref-37">â†©</a></li>
<li id="fn-38">Vgl. Grimmelmann / Windawi 2023, S. 1097–1129, sowie die Darstellung in Kapitel 2, Abschnitt 2.1. <a href="#fnref-38">â†©</a></li>
<li id="fn-39">Vgl. Frischmann 2012, S. 61–96, zur Abgrenzung von Infrastruktur als Ermöglichungsstruktur, deren Wert sich in den Aktivitäten realisiert, die sie ermöglicht. <a href="#fnref-39">â†©</a></li>
<li id="fn-40">Daten zur Stablecoin-Marktkapitalisierung auf Ethereum: DefiLlama, Stablecoins Dashboard, abgerufen Anfang 2026. <a href="#fnref-40">â†©</a></li>
<li id="fn-41">Electric Capital (2025): Developer Report, September 2025. Die Methodik zählt aktive Entwickler als Personen, die in den letzten 30 Tagen Code zu einem Ethereum-bezogenen Open-Source-Repository beigetragen haben. <a href="#fnref-41">â†©</a></li>
<li id="fn-42">Buterin, Vitalik / Griffith, Virgil (2019): Casper the Friendly Finality Gadget. arXiv:1710.09437. Die BFT-Schwellenwerte sind in der Beacon-Chain-Spezifikation implementiert und seit dem Merge (September 2022) operativ. <a href="#fnref-42">â†©</a></li>
<li id="fn-43">Finality-Daten: beaconcha.in, 27. März 2026. Die 13 nicht-finalisierten Epochs im Mai 2023 waren die Folge zweier aufeinanderfolgender Attestation-Handling-Bugs in Prysm und Teku. <a href="#fnref-43">â†©</a></li>
<li id="fn-44">Zum Vergleich der Settlement-Geschwindigkeiten: SWIFT-Settlement dauert 1–3 Tage, ACH 2–3 Tage, SEPA-Überweisungen typisch 1 Werktag. Ethereums 12,8-Minuten-Finalität und die atomare Composability ermöglichen Koordinationsmuster, die in diesen Systemen strukturell unmöglich sind. <a href="#fnref-44">â†©</a></li>
<li id="fn-45">Die Beacon-Chain-Spezifikation definiert eine Epoch als 32 Slots à 12 Sekunden. Finality erfordert die Justification und Finalization zweier aufeinanderfolgender Checkpoints durch über zwei Drittel des Validator-Sets. <a href="#fnref-45">â†©</a></li>
<li id="fn-46">Die technischen Details des Mai-2023-Inactivity-Leak-Ereignisses sind in Abschnitt 4.2 dokumentiert. Die Bewertung hier bezieht sich auf die infrastrukturelle Bedeutung: automatisierte Selbstheilung ohne externe Koordination. <a href="#fnref-46">â†©</a></li>
<li id="fn-47">OFAC-Compliance-Daten: MEV Watch / relayscan.io, 27. März 2026. Die historische Trajektorie vom 79-Prozent-Peak dokumentiert die marktgetriebene Normalisierung. <a href="#fnref-47">â†©</a></li>
<li id="fn-48">Van Loon v. Department of the Treasury, 5th Circuit Court of Appeals, November 2024: Immutable Smart Contracts sind kein „Property" im Sinne des IEEPA. OFAC-Delisting von Tornado Cash: 21. März 2025. <a href="#fnref-48">â†©</a></li>
<li id="fn-49">Builder-Marktanteile: relayscan.io, 27. März 2026. HHI berechnet als Summe der quadrierten Marktanteile. Die DOJ Horizontal Merger Guidelines von 2010 definieren einen HHI über 2.500 als hochkonzentrierten Markt. <a href="#fnref-49">â†©</a></li>
<li id="fn-50">Daian, Philip et al. (2020): Flash Boys 2.0: Frontrunning in Decentralized Exchanges, Miner Extractable Value, and Consensus Instability. In: IEEE Symposium on Security and Privacy, S. 910–927. <a href="#fnref-50">â†©</a></li>
<li id="fn-51">Node-Verteilungsdaten: Ethernodes, Anfang 2026. Cloud-Konzentrationsschätzung: circa 59 Prozent gehosteter EL-Nodes auf AWS (35,5%), Hetzner (13,8%) und OVHcloud (9,7%). <a href="#fnref-51">â†©</a></li>
<li id="fn-52">Lido Tokenholder-Update, 26. Februar 2026: 547.968 ETH auf DVT (Distributed Validator Technology), +57 Prozent QoQ. <a href="#fnref-52">â†©</a></li>
<li id="fn-53">Vgl. Van Schewick, Barbara (2010): Internet Architecture and Innovation. MIT Press. Van Schewick hat gezeigt, dass die End-to-End-Architektur des Internets Innovation an den Rändern ermöglicht — ein Argument, das auf Ethereums permissionless Smart-Contract-Layer übertragbar ist. <a href="#fnref-53">â†©</a></li>
<li id="fn-54">Das Yellow Paper (Wood 2014/2024) definiert die EVM-Semantik formal. KEVM (Hildenbrandt et al. 2018) bietet eine im K-Framework maschinenverifizierte Formalisierung. <a href="#fnref-54">â†©</a></li>
<li id="fn-55">Lazarus-Group-Daten: Chainalysis-Report, Februar 2026. Die Angriffe erfolgten hauptsächlich durch Private Key Compromise und Cross-Chain Message Spoofing an auditierten Protokollen. <a href="#fnref-55">â†©</a></li>
<li id="fn-56">Projektionen basierend auf dokumentierten Wachstumsraten und dem geplanten Gas-Target von 200 Millionen. Vgl. Abschnitt 4.8 für die Datengrundlage und die Szenario-Analyse. <a href="#fnref-56">â†©</a></li>
<li id="fn-57">L2BEAT dokumentiert die Verteilung der Staking-Methoden. Solo-Staker unter einem Prozent: Schätzung auf Basis von Dune Analytics, Q1 2026. <a href="#fnref-57">â†©</a></li>
<li id="fn-58">Verkle Trees: EIP-6800, Status RES, Stagnant. History Expiry: EIP-4444, Phase 1 DEPL seit Juli 2025, Phase 2 PLAN. State Expiry: RES, ohne Implementierungscommitment. <a href="#fnref-58">â†©</a></li>
<li id="fn-59">Vgl. Mayntz 1993, S. 97–108. Die Spannung zwischen Steuerung und Selbstorganisation, die Mayntz als zentrales Forschungsproblem identifiziert, manifestiert sich in Ethereums informellem Governance-Modell als Spannung zwischen Rough Consensus und formaler Autorität. <a href="#fnref-59">â†©</a></li>
<li id="fn-60">Protocol Guild: 190+ Mitglieder, >50 Mio. USD empfangen (Stand Januar 2026). EF-Treasury-Schätzung: 850–950 Mio. USD auf Basis des Ethereum Foundation Report 2024 und der ETH-Marktentwicklung. <a href="#fnref-60">â†©</a></li>
<li id="fn-61">Client-Diversitäts-Daten: clientdiversity.org / supermajority.info, Stand Anfang 2026. Execution-Layer-Verteilung: Geth rund 42 Prozent, Nethermind rund 24 Prozent, Besu rund 16 Prozent, Erigon rund 11 Prozent, Reth rund 7 Prozent. <a href="#fnref-61">â†©</a></li>
<li id="fn-62">Zur L2-Lock-in-Problematik: OP Stack (Apache 2.0, Optimism Foundation), Arbitrum Nitro (MIT, Offchain Labs-Governance), zkSync Era und Starknet (teilweise proprietäre Prover). Die Fragmentierung erzeugt eine neue Schicht von Soft-Lock-ins, die auf der Basisschicht nicht existiert. <a href="#fnref-62">â†©</a></li>
<li id="fn-63">Cloud-Konzentrationsschätzung: Ethernodes, Anfang 2026. Die 59 Prozent beziehen sich auf gehostete EL-Nodes; der Home-Staking-Anteil unter 15 Prozent ist eine Schätzung auf Basis der Node- und Cloud-Verteilung aus Abschnitt 4.1. <a href="#fnref-63">â†©</a></li>
<li id="fn-64">Die Kaskadenlogik im zweiten Schritt wurde in Kapitel 2 als methodische Ergänzung eingeordnet: „Bedingt erfüllt" bei einer Kritischen Bedingung ist qualitativ ein anderer Zustand als „Erfüllt mit Einschränkung", weil die Kerneigenschaft des Infrastrukturanspruchs noch nicht auf dem erforderlichen Niveau gesichert ist. Vgl. Abschnitt 2.3 zur Definition der Urteilskategorien und der M3-Kaskadenlogik. <a href="#fnref-64">â†©</a></li>
<li id="fn-65">Vgl. Abschnitt 2.3.3 zur Definition der fünf Urteilskategorien und der M3-Kaskadenlogik. „Geeignet unter erheblichen Bedingungen" ist die mittlere Kategorie des Spektrums und wurde in Kapitel 2 generisch definiert, unabhängig davon, welches Kriterium betroffen ist und welches System bewertet wird. <a href="#fnref-65">â†©</a></li>
</ol>
</div>
