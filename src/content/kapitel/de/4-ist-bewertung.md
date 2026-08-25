---
titel: Der Istzustand â€” Ethereum im operativen Zustand Q1 2026
nummer: 4
befund: "Wie schlÃ¤gt sich Ethereum im Betrieb gegen die zwÃ¶lf Bewertungskriterien? Das Kapitel liefert die IST-Bewertung â€” Ausgangspunkt fÃ¼r den Zielzustands-Vergleich."
sprache: de
---

Die vorangegangenen Kapitel haben den theoretischen Rahmen dargelegt und die empirische Grundlage geschaffen, auf der die Bewertung des konkreten Gegenstands aufbauen kann. Kapitel 2 hat den Bewertungsrahmen mit seinen zwÃ¶lf Kriterien in drei Hierarchiestufen vorgestellt, die Bewertungslogik mit ihrer vierstufigen Skala und der M3-Kaskade dokumentiert und die Scope-Grenzen der Untersuchung definiert. Kapitel 3 hat die zwÃ¶lf Kriterien an sieben strukturell unterschiedlichen Referenzinfrastrukturen validiert. Sie kommen nun zur Anwendung.

Die Abschnitte 4.1 bis 4.6 beschreiben Ethereums Architektur, den Transaktionslebenszyklus, die SicherheitsÃ¶konomie, das Skalierungsmodell, die Governance-Strukturen und die institutionelle Einbettung des Systems im operativen Zustand des ersten Quartals 2026. Die Abschnitte 4.7 bis 4.10 wenden die zwÃ¶lf Kriterien auf diesen beschriebenen Gegenstand an und formulieren das M3-Gesamturteil.

Der Stichtag fÃ¼r alle Netzwerkdaten ist der 27. MÃ¤rz 2026, sofern nicht anders angegeben. SÃ¤mtliche quantitativen Kennzahlen bilden eine Momentaufnahme einer lebenden Infrastruktur. Die zugrunde liegende Architektur und die aus ihr abgeleiteten strukturellen Befunde besitzen eine erheblich grÃ¶ÃŸere BestÃ¤ndigkeit.

## 4.1 Architektonische Grundlagen

### Historische Einordnung und Entwicklungspfad

Ethereum wurde am 30. Juli 2015 als Ã¶ffentliches Netzwerk gestartet, finanziert durch einen Crowdsale im Jahr 2014, und unterschied sich von Beginn an durch eine zentrale Designentscheidung von der damals dominierenden Blockchain-Technologie Bitcoin: Es war nicht als Zahlungssystem konzipiert, sondern als programmierbare Plattform, auf der beliebiger Code ausgefÃ¼hrt werden konnte.<a href="#fn-1" id="fnref-1"><sup>1</sup></a> Das Whitepaper, das Vitalik Buterin 2014 verÃ¶ffentlichte, beschrieb ein System, in dem Smart Contracts als selbstausfÃ¼hrende Programme auf einer gemeinsamen Zustandsdatenbank operieren, die von einem dezentralen Netzwerk gleichberechtigter Nodes gepflegt wird. Die technische Spezifikation dieses Systems legte Gavin Wood im selben Jahr im Yellow Paper vor, das die Ethereum Virtual Machine formal definierte und bis heute, in seiner aktuellen Berlin-Version von 2024, als Referenzdokument fÃ¼r die Protokollmechanik dient.<a href="#fn-2" id="fnref-2"><sup>2</sup></a>

In den ersten sieben Jahren operierte Ethereum unter einem Proof-of-Work-Konsensmechanismus, bei dem Miner durch den Einsatz von Rechenleistung um das Recht konkurrierten, neue BlÃ¶cke zu produzieren. Am 15. September 2022 vollzog das Netzwerk mit dem sogenannten Merge den Ãœbergang zu Proof of Stake, einem Konsensmechanismus, bei dem Validatoren durch das Hinterlegen von Kapital die Berechtigung zur Blockproduktion erwerben. Die fundamentale Idee hinter Proof of Stake ist, Netzwerksicherheit durch Ã¶konomischen Einsatz statt durch Rechenleistung herzustellen: Validatoren hinterlegen Kapital als Sicherheit und riskieren dessen Verlust bei Fehlverhalten, sodass das Ã¶konomische Risiko den Energieaufwand als Sicherheitsmechanismus ersetzt. Der Merge reduzierte den Energieverbrauch des Netzwerks um 99,95 Prozent.<a href="#fn-3" id="fnref-3"><sup>3</sup></a>

Im Juni 2016, kaum ein Jahr nach dem Start, wurde die erste dezentrale autonome Organisation auf Ethereum, die schlicht als The DAO bekannt wurde, durch eine Schwachstelle im Smart-Contract-Code exploitet, wobei circa 60 Millionen US-Dollar an ETH abgezogen wurden. Die Community entschied sich fÃ¼r einen Hard Fork, der die Transaktion rÃ¼ckgÃ¤ngig machte â€” eine Entscheidung, die das Netzwerk in Ethereum und Ethereum Classic spaltete. Der DAO-Fork zeigt, dass Ethereums Community in einer existenziellen Krise handlungsfÃ¤hig war, und er markiert den historischen Moment, nach dem die Community faktisch entschied, dass eine soziale Intervention in den Zustand des Systems mÃ¶glich ist, auch wenn sie seither nie wiederholt wurde.

Seit dem Merge hat Ethereum vier Protokoll-Upgrades durchlaufen. Shapella (April 2023) ermÃ¶glichte erstmals die Entnahme von gestaktem ETH. Dencun (MÃ¤rz 2024) fÃ¼hrte Blob-Transactions ein, die Layer-2-Rollups ermÃ¶glichen, Daten zu einem Bruchteil der bisherigen Kosten auf der Basisschicht zu verankern. Pectra (7. Mai 2025) erhÃ¶hte die maximale Effective Balance pro Validator von 32 auf 2.048 ETH und fÃ¼hrte mit EIP-7702 die erste protokollnative Form von Account Abstraction ein. Fusaka (3. Dezember 2025) implementierte PeerDAS, ein Peer-to-Peer-basiertes Data Availability Sampling, das die Bandbreitenanforderungen an Validatoren um rund 85 Prozent reduziert.

### Die Zwei-Client-Architektur

Das Ethereum-Netzwerk besteht aus 14.339 Nodes, die Ã¼ber das Ã¶ffentliche Internet verteilt sind und gemeinsam den Zustand des Systems pflegen.<a href="#fn-4" id="fnref-4"><sup>4</sup></a> Jeder Node betreibt gleichzeitig zwei Software-Komponenten: einen Consensus Layer Client, der den Proof-of-Stake-Konsens verwaltet und Ã¼ber das libP2P-Netzwerkprotokoll mit anderen Consensus-Clients kommuniziert, und einen Execution Layer Client, der Smart Contracts ausfÃ¼hrt und den Zustand der Konten und VertrÃ¤ge pflegt. Beide Clients sind Ã¼ber die Engine API verbunden, eine interne Schnittstelle, die durch JWT-Token authentifiziert wird.

FÃ¼nf Consensus Layer Clients stehen zur VerfÃ¼gung: Lighthouse (Rust, Sigma Prime), Prysm (Go, Prysmatic Labs), Teku (Java, ConsenSys), Nimbus (Nim, Status) und Lodestar (TypeScript, ChainSafe). Ebenso fÃ¼nf Execution Layer Clients: Geth (Go), Nethermind (C#), Besu (Java), Erigon (Go) und Reth (Rust). Alle zehn Implementierungen sind Open Source, in unterschiedlichen Programmiersprachen geschrieben und von unabhÃ¤ngigen Teams entwickelt. Diese Multi-Client-Philosophie ist eine Kern-Sicherheitseigenschaft: Ein Bug in einer Software-Implementierung kann das Netzwerk nur dann gefÃ¤hrden, wenn der betroffene Client mehr als ein Drittel des Netzwerks bedient.

Der Dezember-2025-Vorfall bei Fusaka liefert eine empirische Validierung dieses Designprinzips. Ein Bug im Consensus Client Prysm fÃ¼hrte dazu, dass die Netzwerk-Partizipation auf 75 Prozent fiel, doch die Finalisierung blieb ununterbrochen, weil Prysms Marktanteil zu diesem Zeitpunkt bei 22 Prozent lag.<a href="#fn-5" id="fnref-5"><sup>5</sup></a> WÃ¤re derselbe Bug Anfang 2022 aufgetreten, als Prysm noch 68 Prozent des Netzwerks bediente, hÃ¤tte die Partizipation unter die kritische Zwei-Drittel-Schwelle fallen kÃ¶nnen.

39 Prozent der Nodes befinden sich in den USA, 14,5 Prozent in Deutschland und 14 Prozent in China. Von den gehosteten Execution Layer Nodes laufen 59 Prozent auf drei Cloud-Providern: AWS mit 35,5 Prozent, Hetzner mit 13,8 Prozent und OVHcloud mit 9,7 Prozent.<a href="#fn-6" id="fnref-6"><sup>6</sup></a>

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-1-full.png" alt="Ethereums Schichtenmodell â€” Consensus Layer, Execution Layer und Data Availability Layer" loading="lazy" />
<figcaption>Abbildung 4.1 â€” Ethereums Schichtenmodell. Consensus Layer und Execution Layer, verbunden Ã¼ber die Engine API, dazu die Schicht der DatenverfÃ¼gbarkeit. FÃ¼nf unabhÃ¤ngige Implementierungen je Schicht, in fÃ¼nf Sprachen, von fÃ¼nf Teams.</figcaption>
</figure>

### Die EVM als programmierbare AusfÃ¼hrungsumgebung

Was Ethereum von einer reinen Zahlungskette wie Bitcoin unterscheidet, ist die Ethereum Virtual Machine. Die EVM ist eine deterministische 256-Bit-Stack-Maschine: Jeder Node im Netzwerk fÃ¼hrt denselben Code mit denselben Eingaben aus und kommt zwingend zum selben Ergebnis.<a href="#fn-7" id="fnref-7"><sup>7</sup></a> Diese Determinismus-Eigenschaft ist konstitutiv fÃ¼r das Funktionieren des Systems, weil sie die Grundlage dafÃ¼r bildet, dass alle Nodes Ã¼ber den korrekten Zustand Ã¼bereinstimmen kÃ¶nnen.

Die EVM operiert mit einem dreistufigen Speichermodell: Der Stack ist eine volatile Datenstruktur nach dem Last-In-First-Out-Prinzip, der Memory ein volatiler byte-adressierbarer Arbeitsbereich und der Storage der persistente Speicher, dessen Inhalte im Merkle Patricia Trie verankert sind. Storage-Operationen sind die teuersten im gesamten Opcode-Set, weil jeder geschriebene Wert von allen Nodes auf unbestimmte Zeit gespeichert werden muss.

Smart Contracts sind Programme, die auf der EVM ausgefÃ¼hrt werden. Sie werden als Bytecode auf dem Netzwerk deployt und sind danach unverÃ¤nderbar. Das Deployment ist permissionless: Die einzige Voraussetzung sind Gas-GebÃ¼hren, die an das Netzwerk gezahlt werden. Die AusfÃ¼hrungsarchitektur ist sequentiell â€” alle Transaktionen innerhalb eines Blocks werden strikt in Reihenfolge abgearbeitet. Bei einer Slotzeit von 12 Sekunden und dem aktuellen Gas Limit von 60.000.000 verarbeitet Ethereum auf Layer 1 durchschnittlich 15 bis 30 Transaktionen pro Sekunde.

Innerhalb eines Blocks ermÃ¶glicht die EVM atomare Composability: Beliebig viele Smart-Contract-Interaktionen kÃ¶nnen in einer einzigen Transaktion verkettet werden, und die gesamte Kette wird entweder vollstÃ¤ndig ausgefÃ¼hrt oder vollstÃ¤ndig zurÃ¼ckgesetzt. Flash Loans illustrieren diese Eigenschaft: Ein Nutzer kann in einer einzigen Transaktion Millionen US-Dollar leihen, die geliehenen Mittel fÃ¼r eine Arbitrage-Operation einsetzen und den Kredit zurÃ¼ckzahlen â€” ohne Sicherheiten und ohne IntermediÃ¤r. Diese Eigenschaft bildet die Grundlage fÃ¼r das Ã–kosystem der Decentralized Finance.

### Account Abstraction

Ethereum kennt historisch zwei Typen von Accounts. Externally Owned Accounts werden durch einen einzelnen kryptographischen SchlÃ¼ssel kontrolliert. Contract Accounts werden durch Code kontrolliert, der auf der EVM lÃ¤uft. EIP-7702, aktiviert mit dem Pectra-Upgrade am 7. Mai 2025, adressiert die Nutzbarkeitsbarrieren des traditionellen Modells auf der Protokollebene: Es erlaubt Standard-Accounts, temporÃ¤r die Logik eines Smart Contracts zu Ã¼bernehmen. Session Keys, Social Recovery und Gas Sponsoring werden damit auf Protokollebene implementierbar. Der EIP ist deployt und auf dem Mainnet aktiv, die Integration in die groÃŸen Wallet-Anwendungen befindet sich in der Umsetzung. Die Ãœbernahmedynamik lÃ¤sst sich am Ã¤lteren ERC-4337-Standard ablesen: Ã¼ber 25,5 Millionen Smart Accounts und 132 Millionen UserOperations dokumentieren die Nachfrage nach programmierbaren Accounts.<a href="#fn-8" id="fnref-8"><sup>8</sup></a>

### State als Zustandsdatenbank

Alles, was Ethereum als System speichert, liegt in einer Datenstruktur namens Merkle Patricia Trie. Diese Struktur besteht aus vier verschachtelten Tries: dem World State Trie, der alle Accounts enthÃ¤lt, dem Account Storage Trie, der den persistenten Speicher jedes einzelnen Smart Contracts abbildet, sowie dem Transactions Trie und dem Receipts Trie. Der World State Root, ein 32-Byte-Hash, der den gesamten Zustand des Systems zusammenfasst, wird im Header jedes Blocks verankert. Ein Merkle Proof kann mit logarithmischem Aufwand belegen, dass ein bestimmter Zustandseintrag im Trie vorhanden ist oder fehlt.

Der State umfasst in der komprimierten Speicherform der Clients 150 bis 200 GB, die gesamte GrÃ¶ÃŸe eines Full Node betrÃ¤gt 1.579 GB.<a href="#fn-9" id="fnref-9"><sup>9</sup></a> Die Hardware-Anforderungen umfassen mindestens 2 TB SSD-Speicher, 16 GB RAM und eine stabile Internetverbindung mit mindestens 25 Megabit pro Sekunde. Das permanente Wachstum des State ist das zentrale Langzeitproblem der Ethereum-Architektur: Jeder deployte Contract, jedes neue Wallet, jeder gespeicherte Storage-Slot akkumuliert permanent auf allen Full Nodes, ohne dass inaktive EintrÃ¤ge verfallen oder komprimiert werden.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-2-full.png" alt="Die Merkle Patricia Trie â€” vier verschachtelte Tries und der World State Root" loading="lazy" />
<figcaption>Abbildung 4.2 â€” Die Merkle Patricia Trie. Vier verschachtelte Tries und der World State Root, der sie im Block-Header verankert. Ein Merkle Proof belegt mit logarithmischem Aufwand, dass ein Zustandseintrag vorhanden ist oder fehlt â€” darauf beruht die unabhÃ¤ngige Verifizierbarkeit des Systems.</figcaption>
</figure>

## 4.2 Der Transaktionslebenszyklus

Eine einzelne Transaktion durchquert auf ihrem Weg von der Erstellung bis zur Finalisierung das gesamte System. An jeder Station dieses Weges offenbart sich eine Komponente der Architektur, die im Zusammenspiel mit den anderen die Eigenschaften des Systems bestimmt.

### Erstellung und Gas

Der Lebenszyklus einer Transaktion beginnt beim Nutzer, der eine signierte Nachricht erstellt, die den gewÃ¼nschten ZustandsÃ¼bergang beschreibt: einen Transfer von ETH, einen Aufruf einer Smart-Contract-Funktion oder das Deployment eines neuen Contracts. Die Signatur erfolgt Ã¼ber den ECDSA-Algorithmus auf der secp256k1-Kurve und beweist kryptographisch, dass der Absender Ã¼ber den privaten SchlÃ¼ssel des sendenden Accounts verfÃ¼gt.

Jede Operation auf der EVM verbraucht eine definierte Menge Gas. Die Kostenstruktur spiegelt die tatsÃ¤chliche Belastung wider: Eine einfache Addition kostet 3 Gas, ein Keccak-256-Hash 36 Gas, das Laden eines Speicherwerts 2.100 Gas und ein Schreibvorgang in den persistenten Speicher 22.100 Gas. Das Gas Limit pro Block liegt bei 60.000.000 und wurde im Laufe des Jahres 2025 durch Validator-Signaling ohne Hard Fork verdoppelt.<a href="#fn-10" id="fnref-10"><sup>10</sup></a>

Das GebÃ¼hrenmodell EIP-1559, seit August 2021 aktiv, teilt die TransaktionsgebÃ¼hr in zwei Komponenten auf.<a href="#fn-11" id="fnref-11"><sup>11</sup></a> Die Base Fee wird algorithmisch bestimmt und passt sich dynamisch an die Blockauslastung an: Wenn der vorangegangene Block mehr als die HÃ¤lfte seines Gas Limits verbraucht hat, steigt die Base Fee um bis zu 12,5 Prozent. Liegt die Auslastung darunter, sinkt sie um denselben maximalen Faktor. Die Base Fee wird verbrannt â€” kumulativ sind seit August 2021 Ã¼ber 4,6 Millionen ETH dem Umlauf entzogen worden. Die Priority Fee wird vom Nutzer frei gewÃ¤hlt und flieÃŸt an den Proposer des Blocks.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-3-full.png" alt="Der GebÃ¼hrenmarkt nach EIP-1559 â€” Base Fee und Priority Fee, ihre Ziele und die Anpassungsregel" loading="lazy" />
<figcaption>Abbildung 4.3 â€” Der GebÃ¼hrenmarkt nach EIP-1559. Base Fee und Priority Fee, ihre Ziele und die Regel, nach der sich die Base Fee anpasst.</figcaption>
</figure>

### Propagation im Peer-to-Peer-Netzwerk

Die signierte Transaktion wird Ã¼ber das Peer-to-Peer-Netzwerk verbreitet. Es gibt keinen einzelnen zentralen Mempool â€” jeder Node pflegt eine lokale Sicht auf die Transaktionen, die er von seinen Peers empfangen hat. Diese dezentrale Mempool-Architektur erzeugt eine informationelle Asymmetrie, die fÃ¼r das MEV-PhÃ¤nomen konstitutiv ist: Builder, die Ã¼ber privilegierte Verbindungen zu mehr Nodes verfÃ¼gen oder private Order Flows empfangen, haben eine vollstÃ¤ndigere Sicht auf die ausstehenden Transaktionen als durchschnittliche Nodes.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-4-full.png" alt="Die Mempool-Sichten â€” jeder Node kennt eine andere Teilmenge der ausstehenden Transaktionen" loading="lazy" />
<figcaption>Abbildung 4.4 â€” Die Mempool-Sichten. Jeder Node pflegt eine eigene Sicht auf die ausstehenden Transaktionen. Welche er erkennt, hÃ¤ngt von der Netzwerktopologie, den Propagationszeiten und seinen Filterregeln ab. Aus dieser Ungleichheit der Sichten entsteht die informationelle Asymmetrie, die fÃ¼r das MEV-PhÃ¤nomen konstitutiv ist.</figcaption>
</figure>

### Block Building und MEV

Spezialisierte Block Builder sammeln Transaktionen aus Ã¶ffentlichen Mempools und privaten Order Flows und konstruieren BlÃ¶cke, die fÃ¼r die Extraktion von Maximal Extractable Value optimiert sind.<a href="#fn-12" id="fnref-12"><sup>12</sup></a> MEV entsteht aus der Tatsache, dass die Reihenfolge von Transaktionen innerhalb eines Blocks den wirtschaftlichen Ausgang beeinflusst: Arbitrage-Transaktionen zwischen dezentralen BÃ¶rsen, Liquidationen in Lending-Protokollen und Sandwich-Attacks sind die hÃ¤ufigsten MEV-Formen. Die kumulative MEV-Extraktion seit dem Merge wird auf 1,5 bis 2 Milliarden US-Dollar geschÃ¤tzt, wobei circa 93 Prozent dieser Werte als Gebote an die Validatoren flieÃŸen.<a href="#fn-13" id="fnref-13"><sup>13</sup></a>

Die Marktstruktur der Blockproduktion per 27. MÃ¤rz 2026 zeigt eine erhebliche Konzentration: Titan Builder kontrolliert 51,2 Prozent der BlÃ¶cke, BuilderNet 25,7 Prozent und Quasar 16,4 Prozent.<a href="#fn-14" id="fnref-14"><sup>14</sup></a> Drei Builder-Adressen kontrollieren damit 93,3 Prozent der Ethereum-Blockproduktion. Der Herfindahl-Hirschman-Index dieser Marktstruktur liegt bei 3.554, ein Wert, der die Schwelle von 2.500 deutlich Ã¼berschreitet, ab der das US-Justizministerium einen Markt als hochkonzentriert einstuft.

### Proposer-Builder Separation

Die Architekturantwort auf die Frage, wie Blockproduktion von Blockvalidierung getrennt werden kann, ist Proposer-Builder Separation. Builder senden fertige BlÃ¶cke mit Geboten an Relays â€” Off-Chain-IntermediÃ¤re wie Ultra Sound Relay, Titan Relay oder BloXroute â€”, die als vertrauenswÃ¼rdige Vermittler zwischen Buildern und Validatoren fungieren. Der fÃ¼r den jeweiligen Slot ausgewÃ¤hlte Proposer wÃ¤hlt blind das hÃ¶chste Gebot und schlÃ¤gt den zugehÃ¶rigen Block vor, ohne dessen Inhalt zu kennen. 90 Prozent der BlÃ¶cke nutzen MEV-Boost, die Sidecar-Software, die Validatoren mit diesem Builder-Marktplatz verbindet.

15 Prozent der BlÃ¶cke laufen Ã¼ber Relays, die explizit OFAC-konform operieren.<a href="#fn-15" id="fnref-15"><sup>15</sup></a> Im November 2022 liefen noch 79 Prozent der BlÃ¶cke Ã¼ber OFAC-konforme Relays â€” ein Wert, der in der Community erhebliche Besorgnis auslÃ¶ste. Der RÃ¼ckgang auf 15 Prozent erfolgte ohne protokollÃ¤re Intervention, getrieben durch Marktdynamik: Non-OFAC-compliant Builder gewannen Marktanteile, weil sie keine EinschrÃ¤nkungen beim Transaktions-Screening hatten. FOCIL (EIP-7805), ein Validator-Komitee-basiertes Inclusion-List-System, soll die emergente Zensurresistenz durch eine protokollÃ¤re Garantie ersetzen und hat den Status PLAN.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-5-full.png" alt="Proposer-Builder Separation â€” der Weg eines Blocks vom Builder Ã¼ber den Relay zum Proposer" loading="lazy" />
<figcaption>Abbildung 4.5 â€” Proposer-Builder Separation. Der Weg eines Blocks vom Builder Ã¼ber den Relay zum Proposer, der blind das hÃ¶chste Gebot wÃ¤hlt. Die Relays sind Off-Chain-IntermediÃ¤re und damit die einzige Stelle der Kette, die Vertrauen verlangt.</figcaption>
</figure>

### Konsens und Finality

Der fÃ¼r einen Slot ausgewÃ¤hlte Proposer schlÃ¤gt den Block dem Netzwerk vor, und die 964.768 aktiven Validatoren attestieren Ã¼ber das Gasper-Protokoll, ob sie den Block als gÃ¼ltig anerkennen.<a href="#fn-16" id="fnref-16"><sup>16</sup></a> Gasper ist eine Kombination aus zwei komplementÃ¤ren Mechanismen.<a href="#fn-17" id="fnref-17"><sup>17</sup></a>

Casper FFG, das Friendly Finality Gadget, ist ein Byzantine Fault Tolerant Finalization-Protokoll. Das Netzwerk ist in Epochs von je 32 Slots unterteilt, wobei jeder Slot 12 Sekunden dauert. Wenn Validatoren, die zusammen mehr als zwei Drittel des gestakten ETH reprÃ¤sentieren, einen Supermajority Link zwischen Source und Target attestieren, wird der Target-Checkpoint als justified markiert. Wenn der darauffolgende Checkpoint ebenfalls justified wird, wird der vorherige finalisiert. Diese Zwei-Epoch-Kaskade erklÃ¤rt die Finalisierungszeit von 12,8 Minuten: 64 Slots Ã  12 Sekunden. Ein finalisierter Block ist kryptographisch-Ã¶konomisch irreversibel, weil eine Reversion erfordern wÃ¼rde, dass mehr als ein Drittel des gestakten ETH geslasht wird â€” ein Betrag in der GrÃ¶ÃŸenordnung von 26 Milliarden US-Dollar.

LMD-GHOST handhabt die Echtzeit-Blockauswahl zwischen den Finalisierungspunkten. Ausgehend vom letzten finalisierten Checkpoint folgt der Algorithmus bei jeder Gabelung der Kette dem Subtree, der das meiste Stake-Gewicht akkumuliert hat.

Jede Attestation eines Validators enthÃ¤lt drei simultane Votes: den Head Vote (fÃ¼r LMD-GHOST), den Source Vote (fÃ¼r Casper FFG) und den Target Vote (ebenfalls fÃ¼r Casper FFG). Die VerschrÃ¤nkung beider Mechanismen in einer einzigen Nachricht ist die zentrale Architekturentscheidung des Gasper-Protokolls.

Die empirische Bilanz des Konsensmechanismus seit dem Merge ist bemerkenswert stabil. Von 287.000 produzierten Epochs wurden 13 nicht finalisiert, eine Finality-Rate von Ã¼ber 99,99 Prozent.<a href="#fn-18" id="fnref-18"><sup>18</sup></a> Alle 13 nicht-finalisierten Epochs traten im Mai 2023 auf. Der Mai-2023-Vorfall war gleichzeitig der erste und bislang einzige Mainnet-Test des Inactivity Leak, eines automatischen Degradation Mode, der aktiviert wird, wenn die Finalisierung fÃ¼r mehr als vier Epochs ausbleibt. Die Selbstheilung dauerte 96 Minuten, ohne dass ein externer Eingriff erforderlich war.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-6-full.png" alt="Die Attestation â€” drei Votes in einer Nachricht, die in zwei verschiedene Konsensmechanismen eingehen" loading="lazy" />
<figcaption>Abbildung 4.6 â€” Die Attestation. Drei Votes in einer Nachricht, die in zwei verschiedene Konsensmechanismen eingehen. Der Head Vote geht in LMD-GHOST ein, Source Vote und Target Vote in Casper FFG.</figcaption>
</figure>

### Settlement und State-Aktualisierung

Nach der Finalisierung ist die Transaktion irreversibel in den Zustand des Netzwerks eingeschrieben. Die Base Fee wird verbrannt, die Priority Fee und eventuelle MEV-Zahlungen flieÃŸen an den Proposer des Blocks. Die State Transition Function wendet die durch die Transaktion ausgelÃ¶sten Ã„nderungen auf den World State Trie an und berechnet einen neuen State Root, der im Header des Blocks verankert wird.

### Systemeigenschaften des Lebenszyklus

Der Weg einer Transaktion durch das System legt vier Architektur-Eigenschaften frei. Die ModularitÃ¤t der Architektur ermÃ¶glicht Fehlerisolierung und unabhÃ¤ngige Weiterentwicklung einzelner Komponenten, erzeugt dabei aber KomplexitÃ¤t in der Abstimmung zwischen den Schichten. Die Ã¶konomisch verankerte Sicherheit erzeugt Angriffskosten, die aber an den Marktwert von ETH gekoppelt sind. Die Off-Chain-AbhÃ¤ngigkeit der Blockproduktion erzeugt eine strukturelle Verwundbarkeit im kritischsten Pfad des Systems. Die kryptographisch erzwungene Finality bietet eine IrreversibilitÃ¤tsgarantie, die stÃ¤rker ist als die probabilistischen Garantien von Proof-of-Work-Systemen, aber mit einer Finalisierungszeit von 12,8 Minuten langsamer als die SofortfinalitÃ¤t zentralisierter Systeme.

## 4.3 Die SicherheitsÃ¶konomie

Warum staken 964.768 Validatoren ihr Kapital in einem System, das dieses Kapital bei Fehlverhalten konfiszieren kann, und was passiert, wenn sie aufhÃ¶ren es zu tun? Die Ã¶konomische Logik hinter diesem Einsatz trÃ¤gt die Sicherheitsarchitektur des Systems.

### Ã–konomische Anreize und Konsolidierung

Validatoren erhalten Belohnungen fÃ¼r korrektes Verhalten im Konsensprotokoll aus zwei Quellen: der Protokoll-Issuance und MEV-Rewards. Die Reward-Struktur gewichtet den korrekten Target Vote mit 40,6 Prozent des Gesamtgewichts, Source Vote und Head Vote mit jeweils 21,9 Prozent, die Blockproduktion mit 12,5 Prozent und das Sync Committee mit 3,1 Prozent. Die Issuance skaliert invers mit der Quadratwurzel des gestakten ETH â€” die effektive Staking-Rate liegt bei circa 2,6 Prozent, gesunken von circa 13 Prozent, als der Staking-Anteil noch niedrig war.<a href="#fn-19" id="fnref-19"><sup>19</sup></a> Zwischen 30 und 31 Prozent des ETH Total Supply von 120.693.582 ETH sind gestakt.

Das Pectra-Upgrade lÃ¶ste eine strukturelle Verschiebung in der Validator-Landschaft aus. EIP-7251 erhÃ¶hte die maximale Effective Balance pro Validator von 32 auf 2.048 ETH, und groÃŸe Staking-Anbieter nutzten diese MÃ¶glichkeit, um viele einzelne 32-ETH-Validatoren in wenige High-Balance-Validatoren zu konsolidieren.<a href="#fn-20" id="fnref-20"><sup>20</sup></a> Die Gesamtzahl der aktiven Validatoren sank von 1,07 Millionen auf 964.768, ohne dass sich die Menge des gestakten ETH verÃ¤nderte.

### AngriffsÃ¶konomie und Slashing

Die zentrale Sicherheitsschwelle des Systems ist die 34-Prozent-Blocking-Minority: Ein Angreifer, der mehr als ein Drittel des gestakten ETH kontrolliert, kann die Finalisierung blockieren.<a href="#fn-21" id="fnref-21"><sup>21</sup></a> Die statische Kapitalanforderung fÃ¼r einen Blocking-Angriff betrÃ¤gt rund 26 Milliarden US-Dollar â€” bei einem gestakten Volumen von 30 bis 31 Prozent des Total Supply und einem ETH-Preis von rund 2.100 US-Dollar am Stichtag. Der Angreifer riskiert dabei den vollstÃ¤ndigen Verlust seines Einsatzes durch Slashing.

Slashing schÃ¼tzt das Konsensprotokoll vor zwei spezifischen Angriffsformen: Equivocation (Doppelsignierung) und Surround Voting. Die Strafstruktur skaliert mit Korrelation: Ein einzelner Validator, der durch einen Konfigurationsfehler doppelt signiert, wird milde bestraft. Eine koordinierte Gruppe, die gleichzeitig geslasht wird, erfÃ¤hrt eine Strafe, die den Angriff Ã¶konomisch vernichtend macht.

Die empirische Bilanz bestÃ¤tigt ein System, das durch Abschreckung wirkt. In Ã¼ber fÃ¼nf Jahren Beacon Chain wurden 525 Validatoren geslasht â€” bei Ã¼ber 2,2 Millionen jemals erstellten, eine Quote von 0,024 Prozent.<a href="#fn-22" id="fnref-22"><sup>22</sup></a> BÃ¶swillige Angriffe sind in der gesamten Slashing-Historie nicht dokumentiert.

### Staking-Verteilung

Liquid Staking dominiert mit 31,1 Prozent des gestakten ETH: Nutzer delegieren ihr ETH an ein Protokoll wie Lido, Rocket Pool oder ether.fi und erhalten im Gegenzug einen handelbaren Token. Staking Ã¼ber zentralisierte BÃ¶rsen macht 24 Prozent aus. Staking Pools halten 16 Prozent. Solo-Staker halten weniger als 1 Prozent â€” die Mindesteinlage von 32 ETH entspricht beim Stichtagskurs rund 67.000 US-Dollar.

Lido, das grÃ¶ÃŸte Liquid-Staking-Protokoll, hÃ¤lt 22,8 bis 23 Prozent des gestakten ETH, rÃ¼cklÃ¤ufig von rund 32 Prozent im Jahr 2023.<a href="#fn-23" id="fnref-23"><sup>23</sup></a> Die DVT-Integration von 547.968 ETH mit einem Quartalszuwachs von 57 Prozent reduziert das Single-Point-of-Failure-Risiko im Operator-Set.<a href="#fn-24" id="fnref-24"><sup>24</sup></a> Lido liegt mit seinem aktuellen Anteil unter der kritischen 33-Prozent-Schwelle. Die kumulierte Staking-Konzentration der drei grÃ¶ÃŸten Anbieter, Lido, Coinbase und Binance, liegt bei 40 bis 45 Prozent des gestakten ETH.

### Drei Spannungen der SicherheitsÃ¶konomie

Die erste Spannung betrifft die inflationÃ¤re Dynamik des Gesamtsystems. ETH ist im operativen Zustand Q1 2026 leicht inflationÃ¤r, mit einer jÃ¤hrlichen Supply-Ã„nderung von circa 0,5 Prozent. Die L2-Migration hat mehr TransaktionsaktivitÃ¤t von der Basisschicht absorbiert, als die Blob-GebÃ¼hren an Verbrennungsvolumen zurÃ¼ckfÃ¼hren. Vor der EinfÃ¼hrung von Blob-Transactions zahlten Rollups fÃ¼r Calldata auf Layer 1, was zu substanziellen Base-Fee-BeitrÃ¤gen fÃ¼hrte. Nach Dencun fielen die L2-Kosten um 80 bis 95 Prozent und mit ihnen der Beitrag der L2-AktivitÃ¤t zur ETH-Verbrennung.

Die zweite Spannung betrifft das prozyklische Risiko der Sicherheitsarchitektur. Die Angriffskosten von rund 26 Milliarden US-Dollar sind eine Funktion des ETH-Preises. Im Krypto-Winter 2022 fiel der ETH-Preis um Ã¼ber 80 Prozent, und proportional fielen die Ã¶konomischen Angriffskosten. Das System Ã¼berlebte diesen Stresstest empirisch: Kein Angriff wurde versucht, die Validator-Zahlen stiegen weiter, und das Konsensprotokoll operierte durchgehend im Normalbetrieb.

Die dritte Spannung betrifft die langfristige Finanzierung der Netzwerksicherheit. Wenn Layer-2-Systeme den GroÃŸteil der TransaktionsaktivitÃ¤t absorbieren und die L1-Fee-Revenue dauerhaft auf niedrigem Niveau verbleibt, stellt sich die Frage, ob die Sicherheit des Netzwerks progressiv durch Neuausgabe von ETH finanziert werden muss. Die Issuance-Reform-Debatte im Ethereum-Ã–kosystem ist aktiv und ungelÃ¶st: Keiner der diskutierten VorschlÃ¤ge hat den Status eines formalen EIP erreicht.

## 4.4 Die Skalierungsarchitektur

Das in Abschnitt 4.2 beschriebene Gas Limit von 60.000.000 pro Block begrenzt die TransaktionskapazitÃ¤t der Basisschicht auf 15 bis 30 Transaktionen pro Sekunde. Um diese Zahlen einzuordnen: Visa verarbeitet in Spitzenzeiten Ã¼ber 65.000 Transaktionen pro Sekunde. Die Begrenzung ist eine Konsequenz des fundamentalen Designs, das jedem Node zumutet, jede Transaktion nachzuvollziehen.

### Die rollup-zentrische Strategie

Die Antwort, die das Ethereum-Ã–kosystem seit Oktober 2020 verfolgt, ist eine Arbeitsteilung zwischen Schichten. Vitalik Buterins Blogpost formulierte die strategische Weichenstellung: Die Basisschicht konzentriert sich auf Settlement und DatenverfÃ¼gbarkeit, wÃ¤hrend eigenstÃ¤ndige Layer-2-Systeme die TransaktionsausfÃ¼hrung Ã¼bernehmen.<a href="#fn-25" id="fnref-25"><sup>25</sup></a> Die Verschiebung verÃ¤ndert Ethereums operative Rolle grundlegend: Von einer Plattform, auf der Nutzer direkt Transaktionen ausfÃ¼hren, wird das System zu einer Infrastrukturschicht, die Sicherheit und DatenverfÃ¼gbarkeit fÃ¼r darauf aufbauende Systeme bereitstellt.

Die beschriebene Arbeitsteilung wird seit Anfang 2026 durch eine strategische Verschiebung ergÃ¤nzt. Vitalik Buterin formulierte in einem Blogpost die Zielsetzung, die Basisschicht selbst auf ein Vielfaches ihrer aktuellen KapazitÃ¤t zu skalieren, durch parallele Transaktionsverarbeitung (EIP-7928), ein Gas Limit von 200.000.000 und langfristig eine tausendfache KapazitÃ¤tssteigerung. Diese Verschiebung, die in der Community als L1-first Pivot diskutiert wird, verÃ¤ndert Ethereums Positionierung. Die Features, die diese Verschiebung umsetzen sollen, haben den Status PLAN und werden in Kapitel 5 bewertet.

### DatenverfÃ¼gbarkeit als Vorbedingung

Wenn ein Layer-2-System Transaktionen auÃŸerhalb der Basisschicht ausfÃ¼hrt, muss sichergestellt sein, dass die Transaktionsdaten fÃ¼r unabhÃ¤ngige PrÃ¼fer zugÃ¤nglich sind. Blobs, eingefÃ¼hrt durch EIP-4844 im Dencun-Upgrade (MÃ¤rz 2024), sind 128 KB groÃŸe temporÃ¤re Datenpakete, die circa 18 Tage auf Beacon Nodes vorgehalten und danach automatisch gelÃ¶scht werden.<a href="#fn-26" id="fnref-26"><sup>26</sup></a> Die Kostenreduktion seit EinfÃ¼hrung der Blobs war erheblich: Die Transaktionskosten auf fÃ¼hrenden Layer-2-Systemen fielen nach Dencun um 80 bis 95 Prozent. Im operativen Betrieb kostet eine einfache Token-Transaktion auf Arbitrum, Base oder Optimism im Median weniger als 0,01 US-Dollar.

Alle fÃ¼nf fÃ¼hrenden Layer-2-Systeme nach Total Value Secured â€” Arbitrum One, Base, OP Mainnet, Starknet und zkSync Era â€” nutzen Ethereum-Blobs als primÃ¤re DatenverfÃ¼gbarkeitsschicht, was die PrÃ¤ferenz fÃ¼r die stÃ¤rkeren Sicherheitsgarantien der Basisschicht reflektiert, selbst wenn gÃ¼nstigere Alternativen wie Celestia, EigenDA oder Avail verfÃ¼gbar sind.

### Wie ein Rollup funktioniert

Ein Rollup delegiert die TransaktionsausfÃ¼hrung an ein eigenstÃ¤ndiges System, verankert aber die Ergebnisse und die Transaktionsdaten auf der Basisschicht. Ein Sequencer sammelt Transaktionen der L2-Nutzer, fÃ¼hrt sie auf der L2-AusfÃ¼hrungsumgebung aus, bÃ¼ndelt die Ergebnisse zu Batches und postet komprimierte Daten als Blobs auf Layer 1.

Die Verifikation der State Roots folgt einem von zwei AnsÃ¤tzen. Optimistic Rollups gehen davon aus, dass die eingereichten ZustÃ¤nde korrekt sind, und gewÃ¤hren eine siebentÃ¤gige Challenge-Period, in der jeder Teilnehmer einen Fraud Proof einreichen kann. Die Sicherheit beruht auf der 1-of-N honest verifier assumption. ZK-Rollups beweisen die Korrektheit des eingereichten Zustands mathematisch vor dessen Akzeptanz durch einen Validity Proof, den ein Verifier-Contract auf Layer 1 in konstanter Zeit prÃ¼ft. Arbitrum One, Base und OP Mainnet sind Optimistic Rollups. Starknet und zkSync Era sind ZK-basiert.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-7-full.png" alt="Die rollup-zentrische Architektur â€” Layer 1 trÃ¤gt Settlement und DatenverfÃ¼gbarkeit, die Rollups die AusfÃ¼hrung" loading="lazy" />
<figcaption>Abbildung 4.7 â€” Die rollup-zentrische Architektur. Layer 1 trÃ¤gt Settlement und DatenverfÃ¼gbarkeit, die Rollups die AusfÃ¼hrung. Zwei BestÃ¤tigungsstufen: Der Sequencer bestÃ¤tigt in Sekunden ohne FinalitÃ¤tsgarantie, die vollen Garantien der Basisschicht erbt die Transaktion erst mit der L1-Finalisierung.</figcaption>
</figure>

### Das L2-Ã–kosystem im operativen Zustand

Alle fÃ¼hrenden Layer-2-Systeme operieren mit zentralisierten Sequencern. Die Sequencer-Kontrolle liegt bei den jeweiligen Entwicklerteams: Offchain Labs betreibt den Arbitrum-Sequencer, Coinbase den Base-Sequencer, die Optimism Foundation den OP-Mainnet-Sequencer. Diese Zentralisierung erzeugt ein dreifaches Risikoprofil: Single Point of Failure fÃ¼r die Liveness, willkÃ¼rliche Transaktionsexklusion und MEV-Monopol auf L2-Ebene. Dokumentierte Sequencer-AusfÃ¤lle: 78 Minuten bei Arbitrum (Dezember 2023), 33 Minuten bei Base (August 2025) und Ã¼ber fÃ¼nf Stunden bei Starknet (September 2025). Der Linea-Vorfall vom Juni 2024, bei dem das Entwicklerteam den Sequencer bewusst stoppte und Angreifer-Adressen zensierte, illustriert das Zensurrisiko.

Das L2BEAT-Stage-Framework misst den Dezentralisierungsgrad der Rollups auf einer dreistufigen Skala.<a href="#fn-27" id="fnref-27"><sup>27</sup></a> Stage 0 erfordert Selbstidentifikation als Rollup, DatenverfÃ¼gbarkeit auf L1 und Open-Source-Software. Stage 1 verlangt ein funktionierendes Proof-System und einen Security Council mit mindestens acht Teilnehmern. Stage 2 erfordert ein permissionless Proof-System, mindestens 30 Tage Exit Window und eine BeschrÃ¤nkung des Security Council auf onchain-nachweisbare Bugs.

Arbitrum One (Stage 1, 17,5 Mrd. USD), Base (Stage 1, 11 Mrd. USD) und OP Mainnet (Stage 1) teilen die Optimism-Proof-Infrastruktur. Starknet hat mit dem Stwo-Proof-System Stage 1 erreicht. zkSync Era verbleibt bei Stage 0. Stage 2 existiert nur bei immutablen Projekten mit minimalem Transaktionsvolumen wie Aztec v1 (2,95 Mio. USD). Die Exit Windows variieren drastisch: 17 Tage bei Arbitrum, aber null Tage bei Base und OP Mainnet.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-8-full.png" alt="Das L2BEAT Stage Framework â€” die Anforderungen der drei Stufen und die Rollups, die sie erreichen" loading="lazy" />
<figcaption>Abbildung 4.8 â€” Das L2BEAT Stage Framework. Die Anforderungen der drei Stufen und die Rollups, die sie erreichen, mit dem gesicherten Wert. Gesichert ist der Wert dort, wo die Dezentralisierung unvollstÃ¤ndig bleibt. Stage 2 erreicht bislang nur ein immutables Projekt mit einem Bruchteil des Werts, den Arbitrum One trÃ¤gt.</figcaption>
</figure>

### Gebrochene Cross-L2-Composability

Die atomare Composability, die Abschnitt 4.1 als emergente Eigenschaft der EVM beschrieben hat, existiert auf der Layer-2-Ebene nicht. Ãœber 50 aktive Layer-2-Systeme operieren mit isoliertem State, und eine Transaktion auf Arbitrum kann nicht atomar mit einer Transaktion auf Base interagieren, obwohl beide Systeme auf derselben Basisschicht settlen. Cross-L2-Transfers erfordern Bridges, die eigene Trust-Annahmen einfÃ¼hren. Der kumulative Schaden durch Bridge-Hacks Ã¼bersteigt 2,8 Milliarden US-Dollar.<a href="#fn-28" id="fnref-28"><sup>28</sup></a>

Die Superchain-Initiative, die 34 OP-Stack-basierte Chains zusammenfasst und rund 66 Prozent des gesamten L2-TVL reprÃ¤sentiert, hat mit dem SuperchainERC20-Standard Fortschritte bei der Intra-Stack-FungibilitÃ¤t erzielt. Cross-Stack-AtomizitÃ¤t zwischen einer OP-Stack-Chain und einer Arbitrum-Chain existiert nicht und ist auch nicht absehbar.

### Stablecoin-Verankerung und Substitutionsrisiko

Ethereum dominiert die globale Stablecoin-Emission mit einem Marktanteil von 52 bis 54 Prozent, was einem Volumen von circa 166 Milliarden US-Dollar entspricht.<a href="#fn-29" id="fnref-29"><sup>29</sup></a> USDC, USDT und DAI werden primÃ¤r auf Ethereum emittiert, und die DeFi-Integration erzeugt eine Verankerungstiefe, die Ã¼ber die bloÃŸe Emission hinausgeht. Seit Dezember 2025 liegt das USDC-Transaktionsvolumen auf Solana jedoch hÃ¶her als auf Ethereum â€” das zeigt, dass TransaktionsaktivitÃ¤t dorthin migriert, wo die Nutzererfahrung am gÃ¼nstigsten und schnellsten ist.

Der GENIUS Act, am 18. Juli 2025 als erstes US-Bundesgesetz fÃ¼r Stablecoins unterzeichnet, reguliert Stablecoin-Emittenten hinsichtlich Reserveanforderungen, Transparenzpflichten und Lizenzierung, adressiert aber die Protokollschicht nicht.<a href="#fn-30" id="fnref-30"><sup>30</sup></a> Das Gesetz reguliert Circle und Tether als Emittenten, aber weder Ethereum als Protokoll noch die Smart Contracts, die USDC und USDT auf der Basisschicht verwalten.

## 4.5 Governance und Systemevolution

Wie entwickelt sich ein System ohne zentrale AutoritÃ¤t weiter? Dieser Abschnitt beschreibt die Prozesse, durch die das System verÃ¤ndert wird, die Akteure, die diese VerÃ¤nderungen tragen, und die Spannungen, die aus dem Zusammenspiel von dezentralem Anspruch und operativer RealitÃ¤t entstehen.

### Der EIP-Prozess

Ethereum Improvement Proposals sind der formale Standardisierungsmechanismus fÃ¼r ProtokollÃ¤nderungen, inspiriert von Pythons PEP-System und Bitcoins BIPs.<a href="#fn-31" id="fnref-31"><sup>31</sup></a> Der Prozess folgt einer definierten Sequenz: Draft, Review, Last Call, Final. Im Jahr 2025 wurden 230 EIPs eingereicht, von denen 37 akzeptiert wurden â€” eine Akzeptanzrate von 16 Prozent.

EIP Editors prÃ¼fen die formale Korrektheit. Inhaltliche Entscheidungen fallen in den AllCoreDevs-Calls, zweiwÃ¶chentlichen Videokonferenzen der Client-Entwicklerteams, die Ã¶ffentlich gestreamt, aufgezeichnet und protokolliert werden. Das Verfahren ist transparent, dokumentiert und selektiv, operiert aber ohne formale AutoritÃ¤t: Kein Gremium kann eine Entscheidung erzwingen, kein Abstimmungsmechanismus kann eine Mehrheit binden. Ethereum hat bewusst keine On-Chain-Governance implementiert. Das Entscheidungsprinzip folgt dem Modell des Internets aus Kapitel 3: Rough Consensus and Running Code, eine Formulierung der Internet Engineering Task Force.<a href="#fn-32" id="fnref-32"><sup>32</sup></a>

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-9-full.png" alt="Der Ethereum-Governance-Prozess â€” formaler Status eines Vorschlags und die Instanzen, bei denen die Entscheidung tatsÃ¤chlich liegt" loading="lazy" />
<figcaption>Abbildung 4.9 â€” Der Ethereum-Governance-Prozess. Der formale Status eines Vorschlags und die Instanzen, bei denen die Entscheidung tatsÃ¤chlich liegt. Kein Gremium kann eine Entscheidung erzwingen, kein Abstimmungsmechanismus bindet eine Mehrheit. Ethereum hat bewusst keine On-Chain-Governance. 2025 wurden Ã¼ber 230 EIPs eingereicht, 37 akzeptiert.</figcaption>
</figure>

### Die Ethereum Foundation und dezentrale Finanzierung

Die Ethereum Foundation, gegrÃ¼ndet 2014 als Schweizer Stiftung, ist die Ã¤lteste und finanziell bedeutendste Organisation im Ethereum-Ã–kosystem. Ihr Treasury wird auf 850 bis 950 Millionen US-Dollar geschÃ¤tzt, wovon 70.000 ETH gestakt und circa 5.800 ETH in DeFi-Vaults angelegt sind.<a href="#fn-33" id="fnref-33"><sup>33</sup></a> Die Stiftung finanziert Forschung, Entwicklung, Bildung und Community-Initiativen, hat aber bewusst keine Protokollkontrolle: Sie kann keine ProtokollÃ¤nderungen anordnen, keine Upgrades erzwingen und keine Transaktionen zensieren.

Die Konzentration einer substanziellen Treasury in einer einzigen Organisation erzeugt ein Zentralisierungsrisiko, das mit dem dezentralen Anspruch des Protokolls in Spannung steht, insbesondere weil die Stiftung durch ihre Finanzierungsentscheidungen die Richtung der Protokollentwicklung faktisch mitbestimmt.

Protocol Guild, ein kollektives Finanzierungsinstrument fÃ¼r Core-Entwickler mit Ã¼ber 190 Mitgliedern, hat seit seiner GrÃ¼ndung mehr als 50 Millionen US-Dollar aus freiwilligen Spenden des Ã–kosystems erhalten und stellt einen dezentralen Gegenpol zur EF-Finanzierung dar.<a href="#fn-34" id="fnref-34"><sup>34</sup></a> Die Finanzierung durch Protocol Guild ist allerdings weder protokollÃ¤r verankert noch langfristig planbar, sondern abhÃ¤ngig von der fortgesetzten Spendenbereitschaft eines Ã–kosystems, das aus Ã¶konomischem Eigeninteresse handelt.

### Upgrades als Risiko und Beweis

Der DAO-Fork von 2016 bleibt der einzige Fall, in dem die Community einen Zustandseingriff vornahm, und er wurde seither nie wiederholt. Die vier Post-Merge-Upgrades â€” Shapella, Dencun, Pectra und Fusaka â€” verliefen alle ohne Kettenspaltung.

Die KomplexitÃ¤tsakkumulation ist ein steigendes Risiko: Pectra bÃ¼ndelte 11 EIPs in einem einzigen Release. Jeder EIP muss in zehn unabhÃ¤ngigen Implementierungen korrekt umgesetzt werden, und der Dezember-2025-Prysm-Bug bei Fusaka war eine direkte Folge der Interaktion zwischen neuen Protokollelementen und bestehenden Client-Implementierungen.

Die FÃ¤higkeit des Governance-Systems, auf akute SicherheitsvorfÃ¤lle zu reagieren, hat historische PrÃ¤zedenzfÃ¤lle. Im September 2016 erzwang eine gezielte Denial-of-Service-Attacke auf den Geth-Client zwei Emergency-Hard-Forks innerhalb weniger Wochen â€” Tangerine Whistle und Spurious Dragon â€” eine auÃŸergewÃ¶hnlich schnelle Reaktion. Die Grenze dieser HandlungsfÃ¤higkeit liegt im fehlenden Pause-Mechanismus: Wenn ein kritischer Bug auf Protokollebene deployt ist, kann niemand das Netzwerk anhalten.

## 4.6 Emergente Eigenschaften: Was die Architektur ermÃ¶glicht

Die Eigenschaften, die den Infrastrukturanspruch begrÃ¼nden, lassen sich in keiner einzelnen Komponente lokalisieren. Sie emergieren aus dem Zusammenspiel der Architekturelemente. FÃ¼nf solcher Eigenschaften lassen sich benennen.

Die erste emergente Eigenschaft ist **Permissionless Deployment**. Aus dem Zusammenspiel der EVM als offener AusfÃ¼hrungsumgebung, dem permissionless Zugang zum Netzwerk und dem Gas-Markt als einziger Zugangsvoraussetzung entsteht ein System, in dem jeder Akteur Code deployen kann, ohne eine Genehmigung einholen zu mÃ¼ssen. Frischmanns Argument, dass offener Zugang zu Infrastruktur Ã¶konomisch effizienter ist als die EinschrÃ¤nkung durch private Eigentumsrechte, findet hier eine technische Implementierung.<a href="#fn-35" id="fnref-35"><sup>35</sup></a> Die EVM erzeugt eine analoge Dynamik zur End-to-End-Architektur des Internets, die Van Schewick beschrieben hat: Sie senkt die Innovationsbarrieren an den RÃ¤ndern des Netzwerks.<a href="#fn-36" id="fnref-36"><sup>36</sup></a> Die 31.869 aktiven Entwickler, die der Electric Capital Developer Report fÃ¼r September 2025 dokumentiert, und das DeFi Total Value Locked von circa 100 Milliarden US-Dollar auf Ethereum L1 und L2 quantifizieren den Ã¶konomischen Umfang der produktiven AktivitÃ¤ten.<a href="#fn-37" id="fnref-37"><sup>37</sup></a>

Die zweite emergente Eigenschaft ist **atomare Composability**. Protokolle kÃ¶nnen aufeinander aufbauen, ohne bilaterale Vereinbarungen treffen zu mÃ¼ssen, weil die KompatibilitÃ¤t auf der Ebene der gemeinsamen AusfÃ¼hrungsumgebung hergestellt wird. DeFi als Ã–kosystem ist das Ergebnis dieser Eigenschaft â€” eine emergente Schicht produktiver AktivitÃ¤ten, die auf der Infrastruktur aufbaut, ohne von ihr geplant oder antizipiert worden zu sein. Das ist Frischmanns Konzept des Input-Charakters von Infrastruktur in seiner prÃ¤zisesten Form. Die StÃ¤rke der Composability liegt in ihrer Permissionlessness, die SchwÃ¤che in ihren Grenzen: Auf Layer-2-Ebene ist diese Composability gebrochen.

Die dritte emergente Eigenschaft ist die **unabhÃ¤ngige Verifizierbarkeit des Systemzustands**. Aus dem Zusammenspiel der Multi-Client-Architektur, des Merkle Patricia Trie und des Peer-to-Peer-Netzwerks entsteht die MÃ¶glichkeit, den gesamten Systemzustand ohne Vertrauen in einen IntermediÃ¤r zu Ã¼berprÃ¼fen. Technisch ist diese Verifikation auf Consumer-Hardware mit einer 2-TB-NVMe-SSD und 16 bis 32 GB RAM mÃ¶glich, bei Gesamtkosten von 500 bis 1.500 US-Dollar. Operativ nutzen circa 70 Prozent der Nutzer RPC-Provider wie Infura und Alchemy, die als zentralisierte Vermittler fungieren.

Die vierte emergente Eigenschaft ist **kryptographisches Eigentum**. Ein Nutzer, der seinen Private Key kontrolliert, hat unbedingte Kontrolle Ã¼ber seine Assets auf Protokollebene, ohne dass eine Bank, eine BÃ¶rse oder eine BehÃ¶rde diese Kontrolle erteilen oder entziehen kann. Selbstverwahrung ist der Default, die Delegation an einen IntermediÃ¤r eine bewusste Entscheidung des Nutzers. Die Kehrseite ist ihre UnversÃ¶hnlichkeit: SchlÃ¼sselverlust ist irreversibel.

Die fÃ¼nfte emergente Eigenschaft ist **programmierbare Verbindlichkeit**. Aus dem Zusammenspiel von Smart Contracts, der kryptographisch erzwungenen Finality und dem Slashing-Mechanismus entsteht eine Durchsetzungsschicht fÃ¼r Vereinbarungen, die ohne externe Instanz operiert. Grimmelmann und Windawi haben gezeigt, dass Blockchains als Semicommons funktionieren, in denen private und gemeinsame Ressourcennutzung verschrÃ¤nkt sind und in denen die Regeln durch den Code durchgesetzt werden.<a href="#fn-38" id="fnref-38"><sup>38</sup></a> Smart Contracts erzwingen Vereinbarungen automatisch: Ein Lending-Protokoll liquidiert eine unterbesicherte Position ohne Gerichtsbeschluss. Die Grenze liegt in der AusdrucksfÃ¤higkeit des Codes.

Diese fÃ¼nf Eigenschaften begrÃ¼nden den Infrastrukturanspruch, den die folgenden Abschnitte prÃ¼fen. Ein System kann Permissionless Deployment ermÃ¶glichen und trotzdem an der Zugangsschwelle scheitern, wenn die Gas-Kosten den Zugang faktisch beschrÃ¤nken. Es kann Trustless Verification anbieten und trotzdem eine hohe Vertrauenslast erzeugen, wenn die Mehrheit der Nutzer Ã¼ber zentralisierte IntermediÃ¤re zugreift.

## 4.7 Dimension I: Strukturelle Fundierung

Die Bewertung wendet die zwÃ¶lf Kriterien des Bewertungsrahmens auf den beschriebenen Gegenstand an und macht die Drei-Ebenen-Logik im Argumentationsfluss erkennbar: Was ermÃ¶glicht das Protokoll, was davon ist operativ realisiert, und reicht das Zusammenspiel fÃ¼r den Infrastrukturanspruch?

Zwei der Kriterien dieser Dimension â€” Sicherheits- und Vertrauenslast (I.2) und Minimale tragfÃ¤hige Garantien (I.4) â€” sind als Kritische Bedingungen verankert.

### I.1 Funktionale Unersetzbarkeit

Das Protokoll produziert seine Verankerung nicht durch technische Sperrmechanismen. In Frischmanns Infrastrukturterminologie ist Ethereum damit ein System, das seine Unersetzbarkeit durch die Breite und Tiefe der produktiven AktivitÃ¤ten herstellt, die auf ihm aufbauen, nicht durch die Zugangsschranke, die es errichtet.<a href="#fn-39" id="fnref-39"><sup>39</sup></a>

Die NutzungsrealitÃ¤t zeigt eine Verankerung, die in drei Dimensionen Ã¼ber den Schwellenwert hinausreicht. Die DeFi-TVL-Dominanz belÃ¤uft sich auf rund 100 Milliarden US-Dollar unter Ethereum-Sicherheit, konsistent Ã¼ber 60 Prozent des gesamten On-Chain-gesicherten DeFi-Kapitals. Die Stablecoin-Emission auf Ethereum betrÃ¤gt rund 166 Milliarden US-Dollar und macht 52 bis 54 Prozent des Gesamtmarkts aus.<a href="#fn-40" id="fnref-40"><sup>40</sup></a> Das Developer-Ã–kosystem umfasst 31.869 aktive Entwickler (Stand September 2025), den historischen HÃ¶chstwert und Ã¼ber 70 Prozent aller Blockchain-Entwickler.<a href="#fn-41" id="fnref-41"><sup>41</sup></a>

Die Schock-Resilienz dieser Verankerung ist empirisch belegt: Im Marktzyklus 2022 kollabierte der DeFi-TVL absolut um Ã¼ber 75 Prozent, doch Ethereums relative Dominanzposition blieb erhalten. EinschrÃ¤nkungen sind gleichwohl dokumentiert: Die Stablecoin-Volumenmigration auf Solana, die L2-Autonomie und der Multi-Chain-Drift institutioneller Akteure relativieren die ExklusivitÃ¤t der Verankerung.

**Funktionale Unersetzbarkeit: ErfÃ¼llt mit EinschrÃ¤nkung.** Die Verankerung Ã¼berschreitet alle quantitativen Schwellenwerte und hat einen Stresstest bestanden, aber die Emergenz der Verankerung, die L2-Autonomie und der Multi-Chain-Drift qualifizieren den Befund.

### I.2 Sicherheits- und Vertrauenslast

*Dieses Kriterium ist als Kritische Bedingung verankert: Ein Befund auf â€žOffen" wÃ¼rde das Gesamturteil auf â€žBedingt geeignet" deckeln.*

Die Casper-FFG-Architektur verankert Ã¶konomische Sicherheit mathematisch zwingend: Validatoren, die doppelt signieren oder widersprÃ¼chliche Checkpoints attestieren, verlieren ihren Stake durch Slashing. Die drei kritischen Schwellenwerte der BFT-Mathematik â€” 33 Prozent als Blocking Minority, 51 Prozent fÃ¼r Reorgs vor Finality und 66 Prozent als Supermajority â€” sind im Protokoll implementiert und nicht deaktivierbar.<a href="#fn-42" id="fnref-42"><sup>42</sup></a>

Die Daten zum operativen Sicherheitsprofil sind stark. Bei 964.768 aktiven Validatoren und rund 30 Prozent des ETH Total Supply im Staking belaufen sich die statischen Kosten einer 34-Prozent-Attacke auf rund 26 Milliarden US-Dollar. Die Finality-Rate liegt bei Ã¼ber 99,99 Prozent: Von rund 287.000 Epochs seit dem Merge wurden lediglich 13 nicht finalisiert, alle im Mai 2023.<a href="#fn-43" id="fnref-43"><sup>43</sup></a>

Die Restvertrauenslast zeigt eine Diskrepanz zwischen Protokollanspruch und NutzungsrealitÃ¤t. Wallets wie MetaMask operieren als Closed-Source-Komponenten mit unilateralen Update-Mechanismen. Infura und Alchemy dominieren rund 70 Prozent des RPC-Traffics. 91,5 Prozent des L2-TVL operieren auf Stage-1-Rollups mit Security-Council-Multisigs und zentralisierten Sequencern. Cross-L2-Transfers erfordern Trust-basierte Bridges mit kumulativen Hack-SchÃ¤den von Ã¼ber 2,8 Milliarden US-Dollar oder siebentÃ¤gige Challenge-Perioden. Ein typischer Nutzer, der Ã¼ber MetaMask auf einen L2-DeFi-Service zugreift, durchlÃ¤uft vier Vertrauensschichten, von denen keine durch das Ethereum-Protokoll selbst abgesichert ist.

**Sicherheits- und Vertrauenslast: ErfÃ¼llt mit EinschrÃ¤nkung.** Die Ã¶konomische Sicherheitsdimension erfÃ¼llt alle technischen Indikatoren. Die Restvertrauens-Dimension dokumentiert eine operative Diskrepanz zwischen ProtokollmÃ¶glichkeit und NutzungsrealitÃ¤t.

### I.3 Koordinationsfunktion

Das Protokoll implementiert drei der vier Koordinationsprimitive operativ: Settlement als finalisierte, irreversible Transaktionsverarbeitung nach rund 12,8 Minuten, Execution als deterministische Smart-Contract-AusfÃ¼hrung mit atomarer Composability, und Data Availability als KZG-Commitment-basierte Blob-VerfÃ¼gbarkeit fÃ¼r L2-Rollups seit Dencun. Das vierte Primitiv â€” die protokollseitige Verifikation beliebiger Off-Chain-Berechnungen â€” befindet sich im Status RES und ist nicht Teil der IST-Bewertung.<a href="#fn-44" id="fnref-44"><sup>44</sup></a>

Rund 100 Milliarden US-Dollar sind in einem permissionlosen System ohne institutionellen TreuhÃ¤nder koordiniert, rund um die Uhr, 365 Tage im Jahr, ohne Wartungsfenster. Alle Top-5-Rollups nach TVL settlen auf Ethereum und nutzen Blob-Transactions fÃ¼r Data Availability. Die Cross-L2-Composability ist allerdings die qualitative EinschrÃ¤nkung: Die atomare Composability ist auf L2-Ebene strukturell nicht vorhanden. Monatliche Bridge-Volumina von rund 11,2 Milliarden US-Dollar zeigen das AusmaÃŸ des Koordinationsbedarfs, der Ã¼ber IntermediÃ¤re abgewickelt wird.

**Koordinationsfunktion: ErfÃ¼llt mit EinschrÃ¤nkung.** Die Koordinationsleistung ist real, quantitativ substanziell und qualitativ einzigartig, aber die L2-Fragmentierung untergrÃ¤bt die KohÃ¤renz der Koordination.

### I.4 Minimale tragfÃ¤hige Garantien

*Dieses Kriterium ist die zweite Kritische Bedingung dieser Dimension.*

Die Time-to-Finality betrÃ¤gt 12,8 Minuten und liegt damit unter dem Schwellenwert von 15 Minuten.<a href="#fn-45" id="fnref-45"><sup>45</sup></a> Die Liveness ist durch eine Finality-Rate von Ã¼ber 99,99 Prozent belegt, wobei seit Mai 2023 kein einziger Ausfall aufgetreten ist.

Der Degradation Mode ist die Eigenschaft, die Ethereum von allen Referenzinfrastrukturen abhebt. Der Inactivity Leak wurde im Mai 2023 auf dem Mainnet getestet: Das Protokoll reagierte automatisch, inaktive Validatoren verloren progressiv Stake, und die Selbstheilung erfolgte nach rund 96 Minuten, ohne manuellen Eingriff, ohne Koordination auÃŸerhalb des Protokolls und ohne Unterbrechung der Block-Produktion.<a href="#fn-46" id="fnref-46"><sup>46</sup></a> Bei einem Ausfall des DNS-Root-Server-Netzwerks, von SWIFT-Knoten oder im Stromversorgungsnetz hÃ¤ngt die Wiederherstellung von externer Koordination ab. Ethereums Inactivity Leak benÃ¶tigt nichts davon.

Die vierte Garantie â€” Zensurresistenz unter koordiniertem Angriff â€” erreicht nicht das Niveau der ersten drei. Es gibt keinen Protokollmechanismus, der einen Block-Proposer oder Builder zwingt, eine spezifische valide Transaktion aufzunehmen. FOCIL (EIP-7805) hat den Status PLAN. Die OFAC-Compliance-Rate liegt bei rund 15 Prozent und damit deutlich unter dem 50-Prozent-Schwellenwert, aber diese Leistung beruht auf Marktdynamik, nicht auf einer protokollÃ¤ren Garantie.<a href="#fn-47" id="fnref-47"><sup>47</sup></a>

**Minimale tragfÃ¤hige Garantien: ErfÃ¼llt mit EinschrÃ¤nkung.** Drei von vier Garantien sind protokollÃ¤r verankert und operativ bewiesen. Die vierte ist funktional gegeben, aber nicht durch das Protokoll abgesichert.

### Synthese Dimension I

Alle vier Kriterien stehen auf â€žErfÃ¼llt mit EinschrÃ¤nkung". Die beiden Kritischen Bedingungen (I.2 und I.4) passieren die Kaskadenschwelle. Das Muster, das die gesamte Dimension charakterisiert, lÃ¤sst sich auf einen Satz bringen: Die architektonische Grundlage ist tragfÃ¤hig, die EinschrÃ¤nkungen liegen durchgehend in der Diskrepanz zwischen dem, was das Protokoll ermÃ¶glicht, und dem, was die operative RealitÃ¤t davon einlÃ¶st.

## 4.8 Dimension II: Qualitative TragfÃ¤higkeit

Die zweite Dimension prÃ¼ft, ob Ethereum die qualitativen Eigenschaften aufweist, die den Infrastrukturanspruch inhaltlich tragen. NeutralitÃ¤t und Zensurresistenz (II.1) ist die dritte und letzte Kritische Bedingung des gesamten Bewertungsrahmens.

### II.1 NeutralitÃ¤t und Zensurresistenz

*Dieses Kriterium ist als Kritische Bedingung verankert und enthÃ¤lt den einzigen Indikator, der auf der Stufe â€žOffen" steht.*

Das Protokoll verankert NeutralitÃ¤t durch Permissionless Participation, inhaltsneutrale Blockvalidierung durch Casper FFG und Fork-Choice-NeutralitÃ¤t ohne Whitelist oder Blacklist. Was das Protokoll nicht verankert, ist eine Inklusions-Obligation: Kein Mechanismus zwingt einen Block-Proposer oder Builder, eine spezifische valide Transaktion aufzunehmen.

Die OFAC-Compliance-Rate von rund 15 Prozent der BlÃ¶cke liegt deutlich unter dem 50-Prozent-Schwellenwert und dokumentiert eine positive Trajektorie vom 79-Prozent-Peak im November 2022. Der Van-Loon-v.-Treasury-Entscheid im November 2024 und das OFAC-Delisting von Tornado Cash im MÃ¤rz 2025 haben den regulatorischen Druck reduziert.<a href="#fn-48" id="fnref-48"><sup>48</sup></a>

Der strukturelle Defektbefund liegt in der Builder-Konzentration. Titan mit 51,2 Prozent, BuilderNet mit 25,7 Prozent und Quasar mit 16,4 Prozent kontrollieren zusammen 93,3 Prozent aller BlÃ¶cke bei einem Herfindahl-Hirschman-Index von rund 3.554.<a href="#fn-49" id="fnref-49"><sup>49</sup></a> Falls Titan und BuilderNet koordinieren, kontrollieren sie 76,9 Prozent der Blockproduktion â€” hinreichend fÃ¼r De-facto-Zensur des GroÃŸteils aller MEV-Boost-BlÃ¶cke. Dieser Indikator steht auf â€žOffen" und ist der einzige Offen-Befund der gesamten IST-Bewertung.<a href="#fn-50" id="fnref-50"><sup>50</sup></a>

Die geopolitische Jurisdiktions-DiversitÃ¤t zeigt eine gemÃ¤ÃŸigte Konzentration: rund 39 Prozent der Nodes in den USA, rund 53 Prozent in zwei LÃ¤ndern.<a href="#fn-51" id="fnref-51"><sup>51</sup></a> Die Staking-Konzentrationsindikatoren liegen in akzeptablen Bereichen: Lido hÃ¤lt 22,8 bis 23 Prozent des gestakten ETH, deutlich unter der 33-Prozent-Blocking-Minority-Schwelle.<a href="#fn-52" id="fnref-52"><sup>52</sup></a>

**NeutralitÃ¤t und Zensurresistenz: Bedingt erfÃ¼llt.** Die ErfÃ¼llung hÃ¤ngt von Bedingungen ab, die im IST-Zustand nicht gesichert sind, insbesondere der Implementierung von FOCIL oder eines funktional Ã¤quivalenten Mechanismus. Das ist der schwÃ¤chste Einzelbefund der gesamten IST-Bewertung.

### II.2 Offene GenerativitÃ¤t

Die Architektur implementiert Permissionless Deployment vollstÃ¤ndig: Jede Ethereum-Adresse kann Smart Contracts deployen, ohne Whitelist, Genehmigungspflicht oder Registrierungsanforderung. Die atomare Composability ermÃ¶glicht Interaktionsmuster wie Flash Loans, die in keinem traditionellen System ein Ã„quivalent haben. Die ERC-Standard-Familie hat sich als emergenter InteroperabilitÃ¤tsmechanismus ohne zentrale AutoritÃ¤t etabliert.

Die gesamte Kern-Entwicklungsinfrastruktur steht unter liberalen Open-Source-Lizenzen (MIT, Apache 2.0): Foundry, Hardhat, Ethers.js, Slither und Echidna. Kein einzelner Anbieter kontrolliert die Toolchain oder kann den Zugang einschrÃ¤nken. Van Schewick hat fÃ¼r das Internet gezeigt, dass offene Werkzeuge und offene Protokolle zusammen die Innovationsdynamik erzeugen â€” fÃ¼r Ethereum gilt dasselbe Muster auf der Smart-Contract-Schicht.<a href="#fn-53" id="fnref-53"><sup>53</sup></a>

Die EinschrÃ¤nkung liegt in der L2-Fragmentierung: Die atomare Composability, die das DeFi-Ã–kosystem hervorgebracht hat, ist auf L2-Ebene nicht vorhanden. Flash Loans funktionieren nur innerhalb eines einzelnen Blocks auf einer einzelnen Chain und sind Ã¼ber L2-Grenzen hinweg strukturell unmÃ¶glich.

**Offene GenerativitÃ¤t: ErfÃ¼llt mit EinschrÃ¤nkung.** Das Permissionless-Deployment-Modell und die offene Toolchain bilden die strukturell stÃ¤rkste Eigenschaft des Systems. Die L2-Composability-Fragmentierung ist die dokumentierte EinschrÃ¤nkung.

### II.3 UnabhÃ¤ngige Verifizierbarkeit

Die deterministische EVM garantiert, dass jeder Full Node bei identischem Input den identischen Zustand berechnet. Die EVM-Spezifikation ist Ã¼ber das Yellow Paper formal definiert und durch KEVM maschinenverifiziert.<a href="#fn-54" id="fnref-54"><sup>54</sup></a> Mindestens sechs produktiv genutzte Verifikations-Tools Ã¼berschreiten den Schwellenwert: Certora Prover, Foundry/Forge, Echidna, Mythril, Slither und KEVM.

Die wachsende L2-VerifikationskomplexitÃ¤t ist eine EinschrÃ¤nkung: Bei Optimistic Rollups beruht die Sicherheit auf der Annahme, dass mindestens ein ehrlicher PrÃ¼fer innerhalb der siebentÃ¤gigen Challenge-Period einen Fraud Proof einreicht. Bei ZK-Rollups setzt das VerstÃ¤ndnis der Proofs Kryptographie-Expertise voraus. Die Lazarus-Group-Angriffe von 2025 mit SchÃ¤den von 2,02 Milliarden US-Dollar belegen, dass auch auditierte Systeme Ã¼ber Angriffsvektoren wie Private Key Compromise und Oracle Manipulation verwundbar bleiben.<a href="#fn-55" id="fnref-55"><sup>55</sup></a>

**UnabhÃ¤ngige Verifizierbarkeit: ErfÃ¼llt mit EinschrÃ¤nkung.** Das Verifikationsangebot ist protokollÃ¤r verankert und toolseitig substanziell, aber die L2-VerifikationskomplexitÃ¤t steigt, SpezifikationslÃ¼cken bestehen, und die Audit-Kultur ist nicht universal.

### II.4 Niedrigschwellige InklusivitÃ¤t

Die Full-Node-Hardware-Anforderungen liegen im Consumer-Bereich, mit Kosten von 500 bis 1.500 US-Dollar. Die State-Growth-Problematik ist die zentrale Langzeitbedrohung: Bei einer Full-Node-GrÃ¶ÃŸe von 1.579 GB und einem wÃ¶chentlichen Wachstum von circa 14 GB steigen die Anforderungen progressiv. Bei einem Gas-Target von 200 Millionen ergeben Projektionen 5 Terabyte bis 2028 und 9 Terabyte bis 2030.<a href="#fn-56" id="fnref-56"><sup>56</sup></a>

Die 32-ETH-Mindesteinlage fÃ¼r Solo-Staking ist das Defizit, das die gesamte InklusivitÃ¤tsbewertung prÃ¤gt. Zum Kursniveau des ersten Quartals 2026 entsprechen 32 ETH rund 67.000 US-Dollar, und Solo-Staking ist auf unter 1 Prozent des Staking-Gesamtvolumens geschrumpft.<a href="#fn-57" id="fnref-57"><sup>57</sup></a> Dieses Defizit ist das einzige in der gesamten IST-Bewertung, fÃ¼r das die Roadmap keinen operativen Pfad enthÃ¤lt: Rainbow Staking befindet sich im Status RES ohne Implementierungscommitment.

Die L2-Transaktionskosten dokumentieren die stÃ¤rkste Verbesserung. Die Median-Kosten auf den fÃ¼hrenden L2s liegen nach EIP-4844 unter 0,01 US-Dollar pro Transaktion. Die Nutzbarkeit ohne kryptographisches Vorwissen hat sich durch EIP-7702 (Pectra) substanziell verbessert, aber die UX-Transformation ist noch nicht abgeschlossen.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-10-full.png" alt="IST-Bewertungsprofil Dimension I und II â€” die acht Einzelbewertungen mit Hierarchiestufe und Bewertungslabel" loading="lazy" />
<figcaption>Abbildung 4.10 â€” IST-Bewertungsprofil Dimension I und II. Die acht Einzelbewertungen mit Hierarchiestufe und Bewertungslabel. Sieben der acht Kriterien tragen dasselbe Label. II.1 ist der einzige AusreiÃŸer und zugleich kritisch in der Kaskade.</figcaption>
</figure>

**Niedrigschwellige InklusivitÃ¤t: ErfÃ¼llt mit EinschrÃ¤nkung.** Die Teilnahme ist fÃ¼r die transaktionale Nutzung auf L2 substanziell inklusiv, fÃ¼r den Full-Node-Betrieb mÃ¶glich aber durch steigende State-GrÃ¶ÃŸe gefÃ¤hrdet, und fÃ¼r Solo-Staking durch die 32-ETH-Barriere prohibitiv eingeschrÃ¤nkt.

### Synthese Dimension II

Das Bewertungsprofil der zweiten Dimension zeigt eine ausgeprÃ¤gte Asymmetrie. Die Kritische Bedingung (II.1) steht auf â€žBedingt erfÃ¼llt", die drei Qualitativen Kriterien (II.2, II.3, II.4) stehen konsistent auf â€žErfÃ¼llt mit EinschrÃ¤nkung". Die Dimension enthÃ¤lt sowohl die kritischste Schwachstelle des Systems â€” die fehlende protokollÃ¤re NeutralitÃ¤tsgarantie â€” als auch eine seiner strukturell stÃ¤rksten Eigenschaften â€” die offene GenerativitÃ¤t. Die Spannung zwischen beiden Befunden zeigt ein System, das maximale Offenheit produziert, die NeutralitÃ¤t dieser Offenheit aber operativ der Marktdynamik Ã¼berlÃ¤sst.

## 4.9 Dimension III: Resilienz und SouverÃ¤nitÃ¤t

Die dritte Dimension verschiebt den Zeithorizont: weg von der Frage, ob Ethereum heute geeignet ist, hin zur Frage, ob es geeignet bleiben kann â€” stabil Ã¼ber Jahrzehnte, anpassungsfÃ¤hig ohne Destabilisierung, frei von proprietÃ¤ren AbhÃ¤ngigkeiten und auf generischer Hardware betreibbar. Keine Kritische Bedingung liegt in dieser Dimension.

### III.1 Langfristige StabilitÃ¤t

*Dies ist die einzige Strukturelle Bedingung dieser Dimension.*

Der Protokoll-Upgrade-Track-Record ist der stÃ¤rkste Indikator. Seit dem Merge hat Ethereum vier erfolgreiche Hard Forks abgeschlossen, bei einer Kadenz von circa sechs bis zwÃ¶lf Monaten. Keiner dieser Forks hat einen Chain-Split erzeugt. Die Backward Compatibility ist Ã¼ber die gesamte Laufzeit gewahrt: Contracts von 2017 laufen unverÃ¤ndert.

Das State Growth ist der kritische Langzeitfaktor. Die Full-Node-GrÃ¶ÃŸe von 1.579 GB wÃ¤chst mit circa 14 GB pro Woche, und das Protokoll hat keinen nativen Mechanismus, der dieses Wachstum begrenzt. Verkle Trees (EIP-6800, Status RES, Stagnant) und History Expiry (EIP-4444, Phase 1 DEPL seit Juli 2025, Phase 2 PLAN) adressieren Teile des Problems.<a href="#fn-58" id="fnref-58"><sup>58</sup></a> State Expiry selbst befindet sich im Status RES ohne Implementierungscommitment.

Die Ã¶konomische Nachhaltigkeit stellt die zweite Langzeitfrage. Die L2-Migration hat das Gleichgewicht zwischen Issuance und Verbrennung verschoben: Wenn L2s den GroÃŸteil der TransaktionsaktivitÃ¤t absorbieren, sinkt die L1-Fee-Revenue, und damit verringert sich der deflationÃ¤re Gegenpart zur Issuance. Die Issuance-Reform-Debatte hat im IST-Zustand keinen LÃ¶sungspfad produziert.

Die Post-Quantum-Migration bildet die dritte Langzeitfrage. Die kryptographischen Grundlagen des Systems â€” ECDSA fÃ¼r Account-Signaturen, BLS12-381 fÃ¼r Validator-Attestationen und KZG-Commitments fÃ¼r Data Availability â€” mÃ¼ssen langfristig auf quantenresistente Algorithmen umgestellt werden. Die Migration befindet sich im Status RES, wobei Ã¼ber zehn Client-Teams Devnets fÃ¼r Post-Quantum-Kryptographie koordinieren. Im IST-Zeithorizont ist das Risiko nicht akut.

**Langfristige StabilitÃ¤t: ErfÃ¼llt mit EinschrÃ¤nkung.** Die Kurz- und MittelfriststabilitÃ¤t ist operativ belegt, die LangfriststabilitÃ¤t hÃ¤ngt von Entwicklungen ab, die im IST nicht gesichert sind.

### III.2 Adaptive Governance

Der EIP-Prozess ist transparent, selektiv und Ã¶ffentlich: Von 230 eingereichten EIPs im Jahr 2025 wurden 37 akzeptiert. Der Hard-Fork-Track-Record belegt die operative LeistungsfÃ¤higkeit: Alle Post-Merge-Forks wurden ohne Chain-Split durchgefÃ¼hrt. Mayntz hat fÃ¼r groÃŸe technische Systeme gezeigt, dass die Spannung zwischen Steuerung und Selbstorganisation ein zentrales Forschungsproblem ist â€” in Ethereums informellem Governance-Modell manifestiert sie sich als Spannung zwischen Rough Consensus und formaler AutoritÃ¤t.<a href="#fn-59" id="fnref-59"><sup>59</sup></a>

Die Ethereum Foundation als Governance-Akteur ist eine dokumentierte Zentralisierungsspannung. Board-kontrolliert, ohne protokollÃ¤re Rechenschaftspflicht und mit einem Treasury von geschÃ¤tzten 850 bis 950 Millionen US-Dollar ist die EF der einflussreichste Einzelakteur im Ã–kosystem.<a href="#fn-60" id="fnref-60"><sup>60</sup></a> Die Issuance-Reform-Debatte ist der aktive Testfall fÃ¼r die Governance-FÃ¤higkeit bei kontroversen Entscheidungen: Die Frage, ob und wie die ETH-Issuance angepasst werden soll, berÃ¼hrt direkte Ã¶konomische Interessen der Staker und hat im IST-Zustand keinen Konsens produziert.

**Adaptive Governance: ErfÃ¼llt mit EinschrÃ¤nkung.** Das Governance-System ist operativ stark und hat einen Track Record, den kein vergleichbares dezentrales System vorweisen kann, aber die InformalitÃ¤t bietet keine mechanischen Garantien fÃ¼r Extremkonflikte, und die EF-Zentralisierung steht in Spannung zum dezentralen Anspruch.

### III.3 SouverÃ¤ne PortabilitÃ¤t

Die Protokollschicht ist vollstÃ¤ndig Open Source und proprietÃ¤tsfrei. Alle zehn Clients stehen unter liberalen Lizenzen, von LGPL-3.0 fÃ¼r Geth Ã¼ber Apache 2.0 fÃ¼r Besu bis zu MIT fÃ¼r zahlreiche Tools. Es gibt kein Ethereum-Inc., das IP-Rechte hÃ¤lt, und die Ethereum Foundation als Schweizer Stiftung besitzt das Protokoll nicht. Der EVM-Standard ist als De-facto-Standard ohne proprietÃ¤re Kontrolle in das breitere Blockchain-Ã–kosystem diffundiert: OP Stack, Arbitrum, zkSync, Polygon und BNB Chain haben die EVM als AusfÃ¼hrungsumgebung Ã¼bernommen.

Die historische Geth-Dominanz von Ã¼ber 70 Prozent (2020â€“2023) ist das dokumentierte Klumpenrisiko dieser Dimension. Die IST-Situation zeigt eine deutliche Verbesserung: Geth ist auf circa 42 Prozent gesunken, Nethermind hÃ¤lt rund 24 Prozent, Besu rund 16 Prozent, und kein Consensus-Layer-Client Ã¼berschreitet 34 Prozent.<a href="#fn-61" id="fnref-61"><sup>61</sup></a>

Die operative Infrastrukturschicht zeigt ein anderes Bild. Die RPC-Konzentration von 70 Prozent Ã¼ber Infura und Alchemy erzeugt eine De-facto-AbhÃ¤ngigkeit auf der Zugriffsschicht. Die L2-Proliferation hat neue Soft-Lock-ins geschaffen: zkSync und Starknet nutzen teilweise proprietÃ¤re Prover-Technologien.<a href="#fn-62" id="fnref-62"><sup>62</sup></a>

**SouverÃ¤ne PortabilitÃ¤t: ErfÃ¼llt mit EinschrÃ¤nkung.** Die Protokollschicht ist proprietÃ¤tsfrei in einem AusmaÃŸ, das keine der Referenzinfrastrukturen erreicht. Die operative Schicht zeigt Konzentrationen und L2-Lock-ins, die den Anspruch auf der Nutzungsebene qualifizieren.

### III.4 Hardware-Agnostik

Der Ãœbergang von Proof of Work zu Proof of Stake hat die ASIC-AbhÃ¤ngigkeit eliminiert und den Energiebedarf um 99,95 Prozent reduziert. Ein Validator-Node benÃ¶tigt rund 100 Watt. Alle zehn Clients laufen nativ auf ARM-64 und x86-64-Architekturen. Das Protokoll hat keine Hardware-PrÃ¤ferenz: Ein Validator auf Consumer-Hardware hat dasselbe Stimmgewicht wie ein Validator auf einem Datacenter-Server.

Die Cloud-Konzentration konterkariert diese Protokolleigenschaft. Rund 59 Prozent der gehosteten Execution-Layer-Nodes laufen auf drei Cloud-Providern, wobei AWS 35,5 Prozent, Hetzner 13,8 Prozent und OVHcloud 9,7 Prozent halten. Der AWS-Outage im Oktober 2025 hat gezeigt, dass das Netzwerk den Ausfall einer AWS-Region absorbieren konnte, ohne FinalitÃ¤t zu verlieren, aber der Korridor zwischen normalem Betrieb und FinalitÃ¤tsverlust wurde kurzfristig enger. Home-Staking liegt bei unter 15 Prozent des gestakten ETH.<a href="#fn-63" id="fnref-63"><sup>63</sup></a>

Die geographische Verteilung: 39 Prozent der Nodes in den USA, 14,5 Prozent in Deutschland, 14 Prozent in China. Jenseits dieser drei LÃ¤nder verteilt sich der Ã¼brige Node-Anteil auf zahlreiche weitere Jurisdiktionen, von denen mehr als zehn â€” darunter Singapur, Kanada, Japan, Australien, die Niederlande und die Schweiz â€” jeweils Ã¼ber ein Prozent der Nodes halten. Der geographische Indikator des Kriteriums (mindestens zehn LÃ¤nder mit jeweils Ã¼ber einem Prozent) ist damit erfÃ¼llt.

**Hardware-Agnostik: ErfÃ¼llt mit EinschrÃ¤nkung.** Die protokollÃ¤re Hardware-Agnostik ist vollstÃ¤ndig realisiert â€” ohne ASIC-AbhÃ¤ngigkeit, ARM-kompatibel und Consumer-Energie-tauglich â€”, aber die operative Cloud-Konzentration erzeugt eine physische AbhÃ¤ngigkeit, die die Dezentralisierung auf der logischen Schicht unterlÃ¤uft.

### Synthese Dimension III

Alle vier Kriterien stehen auf â€žErfÃ¼llt mit EinschrÃ¤nkung". Die dritte Dimension zeigt den Abstand zwischen gegenwÃ¤rtiger FunktionsfÃ¤higkeit und langfristiger TragfÃ¤higkeit. Das State Growth, die offene Issuance-Frage und die Post-Quantum-Migration sind keine akuten Probleme, die den heutigen Betrieb gefÃ¤hrden, sondern Langzeitvektoren, die sich Ã¼ber Jahre entfalten. Die Strukturelle Bedingung III.1 geht als schwach in den dritten Kaskadenschritt ein.

## 4.10 Gesamtsynthese und IST-Urteil

Die zwÃ¶lf Einzelbewertungen der Abschnitte 4.7 bis 4.9 ergeben ein Profil, das in seiner Konsistenz ebenso aufschlussreich ist wie in seiner einzigen Abweichung. Kein Kriterium erreicht â€žErfÃ¼llt" ohne Qualifizierung. Elf der zwÃ¶lf Kriterien stehen auf â€žErfÃ¼llt mit EinschrÃ¤nkung". Eines â€” NeutralitÃ¤t und Zensurresistenz (II.1) â€” steht auf â€žBedingt erfÃ¼llt". Keines steht auf â€žOffen". Das numerische Profil 0-11-1-0 zeigt ein System, das die Infrastrukturanforderungen in der Breite adressiert, bei dem aber die operative RealitÃ¤t die protokollÃ¤ren MÃ¶glichkeiten noch nicht vollstÃ¤ndig einlÃ¶st.

<figure class="kapitel-figure">
<img src="/kapitel/abb-4-11-full.png" alt="IST-Profil aller zwÃ¶lf Kriterien â€” Bewertungslabeln nach Hierarchiestufe und Dimension" loading="lazy" />
<figcaption>Abbildung 4.11 â€” IST-Profil aller zwÃ¶lf Kriterien. Bewertungslabeln nach Hierarchiestufe und Dimension. 0-mal ErfÃ¼llt, elfmal ErfÃ¼llt mit EinschrÃ¤nkung, einmal Bedingt erfÃ¼llt, keinmal Offen.</figcaption>
</figure>

Die in Kapitel 2 definierte M3-Kaskade bestimmt das Gesamturteil anhand der hierarchischen Stufung der Kriterien. Die drei Kritischen Bedingungen bilden die erste PrÃ¼fungsstufe. Sicherheits- und Vertrauenslast (I.2) und Minimale tragfÃ¤hige Garantien (I.4) stehen auf â€žErfÃ¼llt mit EinschrÃ¤nkung" und passieren die Kaskadenschwelle. NeutralitÃ¤t und Zensurresistenz (II.1) passiert die Schwelle nicht uneingeschrÃ¤nkt: Die Builder-Konzentration von 93,3 Prozent bei drei Akteuren markiert einen strukturellen Defekt, und kein Protokollmechanismus erzwingt die Transaktionsinklusion. Der Befund ist â€žBedingt erfÃ¼llt", nicht â€žOffen", was bedeutet, dass der Pfad zur ErfÃ¼llung erkennbar ist, die ErfÃ¼llung aber von der Implementierung von FOCIL oder eines funktional Ã¤quivalenten Mechanismus abhÃ¤ngt. Keine Kritische Bedingung steht auf â€žOffen", was das Gesamturteil von â€žBedingt geeignet" abhebt. Eine Kritische Bedingung steht auf â€žBedingt erfÃ¼llt", was die Kaskade auf die Stufe â€žGeeignet unter erheblichen Bedingungen" setzt.<a href="#fn-64" id="fnref-64"><sup>64</sup></a>

Die drei Strukturellen Bedingungen â€” Funktionale Unersetzbarkeit (I.1), Koordinationsfunktion (I.3) und Langfristige StabilitÃ¤t (III.1) â€” stehen alle auf â€žErfÃ¼llt mit EinschrÃ¤nkung" und gelten damit als schwach, sodass der dritte Kaskadenschritt dieselbe Deckelung setzt wie der zweite.

Die sechs Qualitativen Kriterien differenzieren den Grad innerhalb der erreichten Eignungsstufe. Alle sechs stehen auf â€žErfÃ¼llt mit EinschrÃ¤nkung". Die Grad-Skala aus Kapitel 2 definiert den Grad als â€žGut", wenn alle sechs Qualitativen Kriterien mindestens auf â€žErfÃ¼llt mit EinschrÃ¤nkung" stehen â€” was hier der Fall ist.<a href="#fn-65" id="fnref-65"><sup>65</sup></a>

**Das Gesamturteil lautet: Geeignet unter erheblichen Bedingungen, Grad Gut.**

Die zentrale Bedingung, die das Label bestimmt, ist die Implementierung von FOCIL (EIP-7805) oder eines funktional Ã¤quivalenten Mechanismus, der die Zensurresistenz von einer emergenten Marktleistung in eine protokollÃ¤re Garantie transformiert. Solange die Transaktionsinklusion von der Marktstruktur der Builder abhÃ¤ngt und nicht vom Protokoll erzwungen wird, bleibt die NeutralitÃ¤tsgarantie, die der Infrastrukturanspruch erhebt, operativ eingelÃ¶st, aber strukturell ungesichert.

Ein Muster durchzieht alle zwÃ¶lf Bewertungen und lÃ¤sst sich in einem Satz formulieren: Die Diskrepanz zwischen dem, was das Protokoll ermÃ¶glicht, und dem, was die operative RealitÃ¤t einlÃ¶st, ist das Grundmuster des IST-Zustands. Ethereum bietet auf Protokollebene die Voraussetzungen einer fundamentalen Infrastruktur â€” von der Ã¶konomischen Sicherheit Ã¼ber die offene GenerativitÃ¤t bis zur kryptographischen Verifizierbarkeit, von der atomaren Koordination bis zur automatisierten Selbstheilung. Die operative NutzungsrealitÃ¤t hat diese MÃ¶glichkeiten nicht vollstÃ¤ndig realisiert: Der Trust-Stack erzeugt institutionelle AbhÃ¤ngigkeiten, die L2-Fragmentierung untergrÃ¤bt die Composability, die Builder-Konzentration gefÃ¤hrdet die NeutralitÃ¤t, der State Growth bedroht die langfristige Dezentralisierung, und die Governance operiert ohne mechanische Garantien fÃ¼r Extremkonflikte.

Das IST-Urteil definiert die Ausgangslage fÃ¼r die SOLL-Bewertung. Kapitel 5 wird prÃ¼fen, ob die Ethereum-Roadmap die identifizierten EinschrÃ¤nkungen adressiert und ob das SOLL-Profil das Gesamturteil verschieben kann. Die Frage ist dabei nicht, ob Ethereum als Infrastruktur geeignet ist â€” das IST-Urteil bestÃ¤tigt die grundsÃ¤tzliche Eignung unter Bedingungen â€”, sondern ob die Roadmap die Bedingungen einlÃ¶sen kann, an die die Eignung geknÃ¼pft ist.

<div class="fn-list">
<ol>
<li id="fn-1">Buterin, Vitalik (2014): A Next-Generation Smart Contract and Decentralized Application Platform. Ethereum Whitepaper. URL: https://ethereum.org/en/whitepaper/ <a href="#fnref-1">â†©</a></li>
<li id="fn-2">Wood, Gavin (2014/2024): Ethereum: A Secure Decentralised Generalised Transaction Ledger (Yellow Paper). Aktuelle Version: Berlin Version, 2024. <a href="#fnref-2">â†©</a></li>
<li id="fn-3">Ethereum Foundation Blog (2022): The Merge. URL: https://blog.ethereum.org/2022/09/15/the-merge. FÃ¼r den Energieverbrauchsvergleich vgl. Digiconomist: Ethereum Energy Consumption Index; Cambridge Centre for Alternative Finance (2022): Cambridge Blockchain Network Sustainability Index. <a href="#fnref-3">â†©</a></li>
<li id="fn-4">Etherscan: Ethereum Node Tracker. URL: https://etherscan.io/nodetracker (abgerufen am 27.03.2026). FÃ¼r die Ethereum Foundation Dokumentation der Client-Architektur vgl. https://ethereum.org/en/developers/docs/nodes-and-clients/ <a href="#fnref-4">â†©</a></li>
<li id="fn-5">Cointelegraph (2025): Ethereum sees 25% validation drop post-Fusaka as Prysm bug affects network participation. Dezember 2025. FÃ¼r historische Client-Marktanteile vgl. clientdiversity.org. <a href="#fnref-5">â†©</a></li>
<li id="fn-6">Ethernodes: Ethereum Node Distribution. URL: https://ethernodes.org (abgerufen Anfang 2026). Die Cloud-ProzentsÃ¤tze beziehen sich auf gehostete EL-Nodes, nicht auf die Gesamtheit aller Nodes, da ein Teil der Nodes auf privater Hardware betrieben wird. <a href="#fnref-6">â†©</a></li>
<li id="fn-7">Wood, Gavin (2014/2024): Ethereum: A Secure Decentralised Generalised Transaction Ledger (Yellow Paper). Aktuelle Version: Berlin Version, 2024. <a href="#fnref-7">â†©</a></li>
<li id="fn-8">Dune Analytics: ERC-4337 Account Abstraction Dashboard (abgerufen am 27.03.2026). FÃ¼r EIP-7702 vgl. Ethereum Foundation: Pectra Upgrade Specification. <a href="#fnref-8">â†©</a></li>
<li id="fn-9">Etherscan / YCharts: Ethereum Chain Data Size (abgerufen am 27.03.2026). Der Wert von 1.579 GB bezieht sich auf die Full-Node-GrÃ¶ÃŸe; der State Trie umfasst in komprimierter Client-Speicherung 150 bis 200 GB. Kapitel 5 misst demgegenÃ¼ber den unkomprimierten Gesamt-State (rund 430 GiB). <a href="#fnref-9">â†©</a></li>
<li id="fn-10">Etherscan: Ethereum Average Gas Limit Chart. URL: https://etherscan.io/chart/gaslimit (abgerufen am 27.03.2026). Die ErhÃ¶hung erfolgte durch graduelles Validator-Signaling im Lauf des Jahres 2025, ohne dass ein Protokoll-Upgrade erforderlich war. <a href="#fnref-10">â†©</a></li>
<li id="fn-11">Buterin, Vitalik / Conner, Eric / Dudley, Rick / Slipper, Matthew / Norden, Ian / Bakhta, Abdelhamid (2019): EIP-1559: Fee market change for ETH 1.0 chain. Ethereum Improvement Proposal. Aktiviert im London-Upgrade, August 2021. <a href="#fnref-11">â†©</a></li>
<li id="fn-12">Daian, Philip / Goldfeder, Steven / Kell, Tyler / Li, Yunqi / Zhao, Xueyuan / Bentov, Iddo / Breidenbach, Lorenz / Juels, Ari (2020): Flash Boys 2.0: Frontrunning in Decentralized Exchanges, Miner Extractable Value, and Consensus Instability. In: IEEE Symposium on Security and Privacy (S&P), 2020. DOI: 10.1109/SP40000.2020.00040. <a href="#fnref-12">â†©</a></li>
<li id="fn-13">Flashbots: MEV-Explore und MEV-Boost Dashboard (abgerufen am 27.03.2026). Die SchÃ¤tzung der kumulativen MEV-Extraktion basiert auf den Ã¼ber MEV-Boost dokumentierten Proposer-Zahlungen seit dem Merge. <a href="#fnref-13">â†©</a></li>
<li id="fn-14">relayscan.io: Builder und Relay-Marktanteile (abgerufen am 27.03.2026). <a href="#fnref-14">â†©</a></li>
<li id="fn-15">relayscan.io: Builder und Relay-Marktanteile; MEV Watch (abgerufen am 27.03.2026). <a href="#fnref-15">â†©</a></li>
<li id="fn-16">beaconcha.in: Ethereum Beacon Chain Explorer (abgerufen am 27.03.2026). Die Zahl 964.768 reflektiert den Post-Pectra-Konsolidierungseffekt durch EIP-7251; vor der Konsolidierung lag die Validator-Anzahl bei rund 1,07 Millionen. <a href="#fnref-16">â†©</a></li>
<li id="fn-17">Buterin, Vitalik / Griffith, Virgil (2019): Casper the Friendly Finality Gadget. arXiv:1710.09437. FÃ¼r die kombinierte Gasper-Spezifikation vgl. Buterin, Vitalik et al. (2020): Combining GHOST and Casper. arXiv:2003.03052. <a href="#fnref-17">â†©</a></li>
<li id="fn-18">beaconcha.in: Epoch Finality Statistics. Die 13 nicht-finalisierten Epochs traten am 11. und 12. Mai 2023 auf. Vgl. Etherscan Blog (2023): Battle-Testing Ethereum's Finality. <a href="#fnref-18">â†©</a></li>
<li id="fn-19">CoinDesk (18. Februar 2026): Ethereum Staking Rate Reaches 30.8% of Total Supply. Die effektive APR-Angabe von circa 2,6 Prozent reflektiert den RÃ¼ckgang, der durch die steigende Validator-Basis bei inverser Quadratwurzel-Skalierung der Issuance entsteht. <a href="#fnref-19">â†©</a></li>
<li id="fn-20">beaconcha.in: Ethereum Beacon Chain Explorer (abgerufen am 27.03.2026). Die Zahl 964.768 reflektiert den Post-Pectra-Konsolidierungseffekt durch EIP-7251. <a href="#fnref-20">â†©</a></li>
<li id="fn-21">Buterin, Vitalik / Griffith, Virgil (2019): Casper the Friendly Finality Gadget. arXiv:1710.09437. FÃ¼r die kombinierte Gasper-Spezifikation vgl. Buterin et al. (2020): Combining GHOST and Casper. arXiv:2003.03052. <a href="#fnref-21">â†©</a></li>
<li id="fn-22">beaconcha.in: Slashing Statistics (abgerufen am 27.03.2026). Vgl. Migalabs / CryptoSlate (11. September 2025) fÃ¼r die Analyse des SSV Network/Ankr Slashing-Events. <a href="#fnref-22">â†©</a></li>
<li id="fn-23">Dune Analytics / CCN (5. MÃ¤rz 2026): Lido Staking Market Share. Der RÃ¼ckgang von 32 Prozent (2023) auf 22,8 bis 23 Prozent reflektiert relative Marktdynamik, nicht notwendigerweise einen RÃ¼ckgang der absoluten Staking-Menge bei Lido. <a href="#fnref-23">â†©</a></li>
<li id="fn-24">Lido DAO: Tokenholder Update (26. Februar 2026). DVT-Adoption und QoQ-Wachstum. FÃ¼r den Governance-Entscheid zur SelbstbeschrÃ¤nkung vgl. Lido DAO Snapshot Vote, Juni 2022. <a href="#fnref-24">â†©</a></li>
<li id="fn-25">Buterin, Vitalik (2020): A rollup-centric ethereum roadmap. Blogpost, Oktober 2020. URL: https://vitalik.eth.limo/general/2020/10/08/rollup.html <a href="#fnref-25">â†©</a></li>
<li id="fn-26">EIP-4844: Shard Blob Transactions. Ethereum Improvement Proposal, aktiviert im Dencun-Upgrade, MÃ¤rz 2024. FÃ¼r die Kostenreduktionsdaten vgl. L2BEAT: Transaction Costs Dashboard (abgerufen am 27.03.2026). <a href="#fnref-26">â†©</a></li>
<li id="fn-27">L2BEAT: Stages Framework und Risk Analysis. URL: https://l2beat.com/scaling/summary (abgerufen am 27.03.2026). Die Stage-Klassifizierung folgt dem im Juni 2023 eingefÃ¼hrten Framework. FÃ¼r Vitalik Buterins Analyse der Stage-ÃœbergÃ¤nge vgl. Buterin, Vitalik (2025): Stages as a framework for evaluating rollup maturity. Blogpost. <a href="#fnref-27">â†©</a></li>
<li id="fn-28">FÃ¼r die kumulativen Bridge-Hack-SchÃ¤den vgl. DeFiLlama: Hacks Dashboard und Chainalysis: Crypto Crime Report 2025. Der Bybit-Hack vom Februar 2025 betraf eine Hot-Wallet-Infrastruktur und wird in der Branche als der grÃ¶ÃŸte Krypto-Diebstahl der Geschichte eingestuft. <a href="#fnref-28">â†©</a></li>
<li id="fn-29">CoinGecko / DefiLlama: Stablecoin Market Cap by Chain (abgerufen am 27.03.2026). Der Wert von 52 bis 54 Prozent bezieht sich auf den Anteil Ethereums am gesamten Stablecoin-Markt einschlieÃŸlich L2-Emission. <a href="#fnref-29">â†©</a></li>
<li id="fn-30">GENIUS Act: Guiding and Establishing National Innovation for U.S. Stablecoins Act. U.S. Congress (2025), unterzeichnet am 18. Juli 2025. <a href="#fnref-30">â†©</a></li>
<li id="fn-31">EIP-1: EIP Purpose and Guidelines. URL: https://eips.ethereum.org/EIPS/eip-1. FÃ¼r die EIP-Statistik 2025 vgl. Ethereum Magicians Forum und EIPs.ethereum.org (abgerufen am 27.03.2026). <a href="#fnref-31">â†©</a></li>
<li id="fn-32">Die Formulierung â€žRough Consensus and Running Code" geht auf David Clark zurÃ¼ck, der sie 1992 auf einem IETF-Meeting prÃ¤gte. Vgl. RFC 7282: On Consensus and Humming in the IETF. Internet Engineering Task Force, 2014. <a href="#fnref-32">â†©</a></li>
<li id="fn-33">Ethereum Foundation: Report 2024. URL: https://ethereum.foundation/report-2024.pdf. FÃ¼r aktuelle Treasury-SchÃ¤tzungen vgl. Arkham Intelligence: Ethereum Foundation Wallet Tracking (abgerufen am 18.03.2026). Die Angabe von 850 bis 950 Mio. ist eine SchÃ¤tzung auf Basis der verÃ¶ffentlichten BestÃ¤nde und der Marktentwicklung seit dem letzten Report. <a href="#fnref-33">â†©</a></li>
<li id="fn-34">Protocol Guild: Documentation and Membership. URL: https://protocol-guild.readthedocs.io (abgerufen am 27.03.2026). <a href="#fnref-34">â†©</a></li>
<li id="fn-35">Vgl. Frischmann 2012 sowie die Darstellung in Kapitel 2, Abschnitt 2.1. <a href="#fnref-35">â†©</a></li>
<li id="fn-36">Van Schewick, Barbara (2010): Internet Architecture and Innovation. MIT Press. Vgl. die Referenz in Kapitel 3, Abschnitt 3.1.2. <a href="#fnref-36">â†©</a></li>
<li id="fn-37">Electric Capital: Developer Report, September 2025. Die Zahl von 31.869 aktiven Entwicklern umfasst Ã¶ffentliche Repository-AktivitÃ¤t im Ethereum-Ã–kosystem. DefiLlama: Ethereum DeFi TVL (abgerufen am 27.03.2026). <a href="#fnref-37">â†©</a></li>
<li id="fn-38">Vgl. Grimmelmann / Windawi 2023, S. 1097â€“1129, sowie die Darstellung in Kapitel 2, Abschnitt 2.1. <a href="#fnref-38">â†©</a></li>
<li id="fn-39">Vgl. Frischmann 2012, S. 61â€“96, zur Abgrenzung von Infrastruktur als ErmÃ¶glichungsstruktur, deren Wert sich in den AktivitÃ¤ten realisiert, die sie ermÃ¶glicht. <a href="#fnref-39">â†©</a></li>
<li id="fn-40">Daten zur Stablecoin-Marktkapitalisierung auf Ethereum: DefiLlama, Stablecoins Dashboard, abgerufen Anfang 2026. <a href="#fnref-40">â†©</a></li>
<li id="fn-41">Electric Capital (2025): Developer Report, September 2025. Die Methodik zÃ¤hlt aktive Entwickler als Personen, die in den letzten 30 Tagen Code zu einem Ethereum-bezogenen Open-Source-Repository beigetragen haben. <a href="#fnref-41">â†©</a></li>
<li id="fn-42">Buterin, Vitalik / Griffith, Virgil (2019): Casper the Friendly Finality Gadget. arXiv:1710.09437. Die BFT-Schwellenwerte sind in der Beacon-Chain-Spezifikation implementiert und seit dem Merge (September 2022) operativ. <a href="#fnref-42">â†©</a></li>
<li id="fn-43">Finality-Daten: beaconcha.in, 27. MÃ¤rz 2026. Die 13 nicht-finalisierten Epochs im Mai 2023 waren die Folge zweier aufeinanderfolgender Attestation-Handling-Bugs in Prysm und Teku. <a href="#fnref-43">â†©</a></li>
<li id="fn-44">Zum Vergleich der Settlement-Geschwindigkeiten: SWIFT-Settlement dauert 1â€“3 Tage, ACH 2â€“3 Tage, SEPA-Ãœberweisungen typisch 1 Werktag. Ethereums 12,8-Minuten-FinalitÃ¤t und die atomare Composability ermÃ¶glichen Koordinationsmuster, die in diesen Systemen strukturell unmÃ¶glich sind. <a href="#fnref-44">â†©</a></li>
<li id="fn-45">Die Beacon-Chain-Spezifikation definiert eine Epoch als 32 Slots Ã  12 Sekunden. Finality erfordert die Justification und Finalization zweier aufeinanderfolgender Checkpoints durch Ã¼ber zwei Drittel des Validator-Sets. <a href="#fnref-45">â†©</a></li>
<li id="fn-46">Die technischen Details des Mai-2023-Inactivity-Leak-Ereignisses sind in Abschnitt 4.2 dokumentiert. Die Bewertung hier bezieht sich auf die infrastrukturelle Bedeutung: automatisierte Selbstheilung ohne externe Koordination. <a href="#fnref-46">â†©</a></li>
<li id="fn-47">OFAC-Compliance-Daten: MEV Watch / relayscan.io, 27. MÃ¤rz 2026. Die historische Trajektorie vom 79-Prozent-Peak dokumentiert die marktgetriebene Normalisierung. <a href="#fnref-47">â†©</a></li>
<li id="fn-48">Van Loon v. Department of the Treasury, 5th Circuit Court of Appeals, November 2024: Immutable Smart Contracts sind kein â€žProperty" im Sinne des IEEPA. OFAC-Delisting von Tornado Cash: 21. MÃ¤rz 2025. <a href="#fnref-48">â†©</a></li>
<li id="fn-49">Builder-Marktanteile: relayscan.io, 27. MÃ¤rz 2026. HHI berechnet als Summe der quadrierten Marktanteile. Die DOJ Horizontal Merger Guidelines von 2010 definieren einen HHI Ã¼ber 2.500 als hochkonzentrierten Markt. <a href="#fnref-49">â†©</a></li>
<li id="fn-50">Daian, Philip et al. (2020): Flash Boys 2.0: Frontrunning in Decentralized Exchanges, Miner Extractable Value, and Consensus Instability. In: IEEE Symposium on Security and Privacy, S. 910â€“927. <a href="#fnref-50">â†©</a></li>
<li id="fn-51">Node-Verteilungsdaten: Ethernodes, Anfang 2026. Cloud-KonzentrationsschÃ¤tzung: circa 59 Prozent gehosteter EL-Nodes auf AWS (35,5%), Hetzner (13,8%) und OVHcloud (9,7%). <a href="#fnref-51">â†©</a></li>
<li id="fn-52">Lido Tokenholder-Update, 26. Februar 2026: 547.968 ETH auf DVT (Distributed Validator Technology), +57 Prozent QoQ. <a href="#fnref-52">â†©</a></li>
<li id="fn-53">Vgl. Van Schewick, Barbara (2010): Internet Architecture and Innovation. MIT Press. Van Schewick hat gezeigt, dass die End-to-End-Architektur des Internets Innovation an den RÃ¤ndern ermÃ¶glicht â€” ein Argument, das auf Ethereums permissionless Smart-Contract-Layer Ã¼bertragbar ist. <a href="#fnref-53">â†©</a></li>
<li id="fn-54">Das Yellow Paper (Wood 2014/2024) definiert die EVM-Semantik formal. KEVM (Hildenbrandt et al. 2018) bietet eine im K-Framework maschinenverifizierte Formalisierung. <a href="#fnref-54">â†©</a></li>
<li id="fn-55">Lazarus-Group-Daten: Chainalysis-Report, Februar 2026. Die Angriffe erfolgten hauptsÃ¤chlich durch Private Key Compromise und Cross-Chain Message Spoofing an auditierten Protokollen. <a href="#fnref-55">â†©</a></li>
<li id="fn-56">Projektionen basierend auf dokumentierten Wachstumsraten und dem geplanten Gas-Target von 200 Millionen. Vgl. Abschnitt 4.8 fÃ¼r die Datengrundlage und die Szenario-Analyse. <a href="#fnref-56">â†©</a></li>
<li id="fn-57">L2BEAT dokumentiert die Verteilung der Staking-Methoden. Solo-Staker unter einem Prozent: SchÃ¤tzung auf Basis von Dune Analytics, Q1 2026. <a href="#fnref-57">â†©</a></li>
<li id="fn-58">Verkle Trees: EIP-6800, Status RES, Stagnant. History Expiry: EIP-4444, Phase 1 DEPL seit Juli 2025, Phase 2 PLAN. State Expiry: RES, ohne Implementierungscommitment. <a href="#fnref-58">â†©</a></li>
<li id="fn-59">Vgl. Mayntz 1993, S. 97â€“108. Die Spannung zwischen Steuerung und Selbstorganisation, die Mayntz als zentrales Forschungsproblem identifiziert, manifestiert sich in Ethereums informellem Governance-Modell als Spannung zwischen Rough Consensus und formaler AutoritÃ¤t. <a href="#fnref-59">â†©</a></li>
<li id="fn-60">Protocol Guild: 190+ Mitglieder, >50 Mio. USD empfangen (Stand Januar 2026). EF-Treasury-SchÃ¤tzung: 850â€“950 Mio. USD auf Basis des Ethereum Foundation Report 2024 und der ETH-Marktentwicklung. <a href="#fnref-60">â†©</a></li>
<li id="fn-61">Client-DiversitÃ¤ts-Daten: clientdiversity.org / supermajority.info, Stand Anfang 2026. Execution-Layer-Verteilung: Geth rund 42 Prozent, Nethermind rund 24 Prozent, Besu rund 16 Prozent, Erigon rund 11 Prozent, Reth rund 7 Prozent. <a href="#fnref-61">â†©</a></li>
<li id="fn-62">Zur L2-Lock-in-Problematik: OP Stack (Apache 2.0, Optimism Foundation), Arbitrum Nitro (MIT, Offchain Labs-Governance), zkSync Era und Starknet (teilweise proprietÃ¤re Prover). Die Fragmentierung erzeugt eine neue Schicht von Soft-Lock-ins, die auf der Basisschicht nicht existiert. <a href="#fnref-62">â†©</a></li>
<li id="fn-63">Cloud-KonzentrationsschÃ¤tzung: Ethernodes, Anfang 2026. Die 59 Prozent beziehen sich auf gehostete EL-Nodes; der Home-Staking-Anteil unter 15 Prozent ist eine SchÃ¤tzung auf Basis der Node- und Cloud-Verteilung aus Abschnitt 4.1. <a href="#fnref-63">â†©</a></li>
<li id="fn-64">Die Kaskadenlogik im zweiten Schritt wurde in Kapitel 2 als methodische ErgÃ¤nzung eingeordnet: â€žBedingt erfÃ¼llt" bei einer Kritischen Bedingung ist qualitativ ein anderer Zustand als â€žErfÃ¼llt mit EinschrÃ¤nkung", weil die Kerneigenschaft des Infrastrukturanspruchs noch nicht auf dem erforderlichen Niveau gesichert ist. Vgl. Abschnitt 2.3 zur Definition der Urteilskategorien und der M3-Kaskadenlogik. <a href="#fnref-64">â†©</a></li>
<li id="fn-65">Vgl. Abschnitt 2.3.3 zur Definition der fÃ¼nf Urteilskategorien und der M3-Kaskadenlogik. â€žGeeignet unter erheblichen Bedingungen" ist die mittlere Kategorie des Spektrums und wurde in Kapitel 2 generisch definiert, unabhÃ¤ngig davon, welches Kriterium betroffen ist und welches System bewertet wird. <a href="#fnref-65">â†©</a></li>
</ol>
</div>
