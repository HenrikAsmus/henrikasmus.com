---
titel: Delta, Grenzen und Gesamturteil
nummer: 6
befund: "Die Differenz zwischen IST- und SOLL-Zustand, die persistenten Grenzen des Systems und die Grenzen des Bewertungsrahmens selbst. Das Kapitel beantwortet die Forschungsfrage."
sprache: de
---

## 6.1 Das Delta

### 6.1-A Der Profil-Vergleich

Die IST-Bewertung aus Kapitel 4 und die SOLL-Bewertung aus Kapitel 5 ergeben zwei numerische Profile, die sich in ihrer Zusammensetzung deutlich unterscheiden, in ihrer Konsequenz aber präzise gelesen werden müssen.

Das IST-Profil lautet 0-11-1-0: kein Kriterium auf „Erfüllt", elf Kriterien auf „Erfüllt mit Einschränkung", ein Kriterium auf „Bedingt erfüllt" (Neutralität und Zensurresistenz, II.1), kein Kriterium auf „Offen".<a href="#fn-1" id="fnref-1"><sup>1</sup></a> Das SOLL-Profil lautet 6-6-0-0: sechs Kriterien auf „Erfüllt", sechs auf „Erfüllt mit Einschränkung", kein Kriterium auf „Bedingt erfüllt", kein Kriterium auf „Offen".<a href="#fn-2" id="fnref-2"><sup>2</sup></a>

| Kriterium | IST | SOLL | Änderung |
|---|---|---|---|
| I.1 Funktionale Unersetzbarkeit | Erfüllt mit Einschränkung | Erfüllt | ↑ |
| I.2 Sicherheits- und Vertrauenslast | Erfüllt mit Einschränkung | Erfüllt mit Einschränkung | — |
| I.3 Koordinationsfunktion | Erfüllt mit Einschränkung | Erfüllt | ↑ |
| I.4 Minimale tragfähige Garantien | Erfüllt mit Einschränkung | Erfüllt | ↑ |
| II.1 Neutralität und Zensurresistenz | Bedingt erfüllt | Erfüllt mit Einschränkung | ↑↑ |
| II.2 Offene Generativität | Erfüllt mit Einschränkung | Erfüllt mit Einschränkung | — |
| II.3 Unabhängige Verifizierbarkeit | Erfüllt mit Einschränkung | Erfüllt mit Einschränkung | — |
| II.4 Niedrigschwellige Inklusivität | Erfüllt mit Einschränkung | Erfüllt mit Einschränkung | — |
| III.1 Langfristige Stabilität | Erfüllt mit Einschränkung | Erfüllt | ↑ |
| III.2 Adaptive Governance | Erfüllt mit Einschränkung | Erfüllt | ↑ |
| III.3 Souveräne Portabilität | Erfüllt mit Einschränkung | Erfüllt | ↑ |
| III.4 Hardware-Agnostik | Erfüllt mit Einschränkung | Erfüllt mit Einschränkung | — |

Sieben Kriterien verbessern sich, fünf bleiben unverändert, keines verschlechtert sich.

### 6.1-B Der Sprung bei II.1

Die wichtigste Einzelveränderung zwischen IST und SOLL ist der Anstieg von Neutralität und Zensurresistenz (II.1) von „Bedingt erfüllt" auf „Erfüllt mit Einschränkung". Dieser Aufstieg ist nicht graduell — er markiert den Übergang von einem strukturellen Defekt zu einer qualifizierten Stärke.

Im IST-Zustand ist die Neutralität emergent: Kein Protokollmechanismus erzwingt die Transaktionsinklusion. Die Transaktionsaufnahme hängt von der Marktstruktur der Block Builder ab, deren Konzentration bei drei Akteuren 93,3 Prozent betrug.<a href="#fn-3" id="fnref-3"><sup>3</sup></a> Das ist „Bedingt erfüllt" in der M3-Kaskade: Die Kerneigenschaft der protokollären Neutralitätsgarantie ist erkennbar angesteuert, aber nicht realisiert.

Im SOLL-Zustand bildet ein dreischichtiges System die protokolläre Grundlage. FOCIL (EIP-7805) erzwingt die Inklusion über ein 2.000-köpfiges Committee, dessen 1-of-N-Honesty-Modell die Korruption strukturell unattrativ macht.<a href="#fn-4" id="fnref-4"><sup>4</sup></a> ePBS (EIP-7732) eliminiert die Relay-Abhängigkeit und trennt Proposer und Builder in getrennte, protokollär koordinierte Rollen.<a href="#fn-5" id="fnref-5"><sup>5</sup></a> Der Encrypted Mempool adressiert als Forschungsreserve Pre-Inclusion-Privacy und schließt den verbleibenden Offenbarungskanal.<a href="#fn-6" id="fnref-6"><sup>6</sup></a>

Der Aufstieg ist strukturell bedeutsam, weil er die zweite Kaskaden-Deckelung in der M3-Logik entfernt. Im IST hat eine Kritische Bedingung das Urteil auf „Geeignet unter erheblichen Bedingungen" gedrückt. Im SOLL existiert keine Kritische Bedingung mehr auf „Bedingt erfüllt" — die Deckelung fällt weg, und das Gesamturteil kann eine Stufe steigen.

### 6.1-C Die sechs Aufstiege auf der strukturellen und qualitativen Ebene

Sechs Kriterien steigen von „Erfüllt mit Einschränkung" auf „Erfüllt". Diese Aufstiege folgen unterschiedlichen Treibern.

**I.1 Funktionale Unersetzbarkeit.** Der SOLL-Aufstieg ruht auf zwei sich verstärkenden Mechanismen. Native Rollups (EIP-8079) binden L2-Execution protokollär an L1 — ein Rollup, das native Verifikation nutzt, kann nicht auf eine andere L1 migrieren, ohne das Sicherheitsmodell grundlegend zu wechseln.<a href="#fn-7" id="fnref-7"><sup>7</sup></a> Gleichzeitig expandiert die Reichweite: Die L1-zkEVM (EIP-8025) macht L1-Blöcke leichtgewichtig verifizierbar und erschließt neue Nutzungskategorien. Der EVM-Standard hat alle Top-10-L2s eingebunden und ist damit kein bloß nominaler Standard mehr.

**I.3 Koordinationsfunktion.** Der gestaffelte Finalitäts-Stack (Based Preconfirmations, Fast Confirmation Rule, Drei-Slot-Finalität) liefert im SOLL eine Koordinationsinfrastruktur über alle Zeithorizonte, die im IST nicht existiert.<a href="#fn-8" id="fnref-8"><sup>8</sup></a> Native Rollups erhöhen die Wechselkosten strukturell: Tokenisierte Werte, die über EXECUTE-Verifikation gesichert sind, sind systemisch in Ethereum verankert.

**I.4 Minimale tragfähige Garantien.** Der Aufstieg ruht auf drei unabhängigen Mechanismen. FOCIL garantiert Zensurresistenz protokollär. Der Inactivity Leak gewährleistet automatisierte Selbstheilung ohne externe Koordination. Der gestaffelte Finalitäts-Stack liefert ökonomische Finalisierung innerhalb von zwei Sekunden — schneller als jede Clearing-Infrastruktur des traditionellen Finanzsystems.<a href="#fn-9" id="fnref-9"><sup>9</sup></a>

**III.1 Langfristige Stabilität.** Das Tiered State (Active, Hibernated, Dead) adressiert das State-Growth-Problem strukturell, nicht nur durch beschleunigte Außerdienststellung.<a href="#fn-10" id="fnref-10"><sup>10</sup></a> History Expiry (EIP-4444, Phase 1 DEPL) reduziert die Node-Größenanforderungen. Der Fusaka-Upgrade-Zyklus ist erstmals im halbjährlichen Zeitplan geblieben — ein Reifegradindikator für die Upgrade-Koordination.

**III.2 Adaptive Governance.** Der strategische Pivot (Februar 2026) ist der stärkste Beleg: Ein paradigmatischer Richtungswechsel von Rollup-centric zu L1-first wurde ohne Krise, ohne Fork und ohne Autoritätsentzug vollzogen.<a href="#fn-11" id="fnref-11"><sup>11</sup></a> Das ist operativer Beweis für Governance-Kapazität über den Track Record taktischer Forks hinaus. Der Lean Ethereum Prozess zeigt die Fähigkeit zur Selbstverschlankung, nicht nur zur Addition.

**III.3 Souveräne Portabilität.** Die SOLL-Roadmap löst drei dokumentierte IST-Abhängigkeiten auf: die Relay-Abhängigkeit durch ePBS, die L2-Proof-Abhängigkeit durch Native Rollups und die RPC-Abhängigkeit durch Stateless Clients und Trustless RPC.<a href="#fn-12" id="fnref-12"><sup>12</sup></a> Diese drei Auflösungen transformieren operative Soft-Lock-ins in protokollär eliminierte Abhängigkeiten.

### 6.1-D Die fünf Kontinuitäten

Fünf Kriterien bleiben bei „Erfüllt mit Einschränkung". In vier von fünf Fällen verbessert sich die Substanz der Erfüllung, ohne die Stufengrenze zu überschreiten.

**I.2 Sicherheits- und Vertrauenslast.** ePBS und die L1-zkEVM adressieren die Trust-Minimierung substantiell. Die verbleibende Einschränkung liegt an zwei Residualfaktoren: der Proving-Konjektur (die Sicherheit des SNARK-Systems hängt von Soundness-Annahmen ab, die noch kein formales Verifikationsäquivalent zu ECDSA haben) und der Access-Schicht (Helios und Trustless RPC sind DEPL bzw. PLAN, nicht breit deployt).

**II.2 Offene Generativität.** Die SOLL-Roadmap erweitert die generative Kapazität auf drei Ebenen: Compute (RISC-V als alternative Execution-Umgebung, RES), UX (NAA und Passkeys, DEPL) und L2-Erzeugung (Native Rollups). Die Einschränkung bleibt, weil RISC-V keine Governance-Verankerung hat und EOF — das wichtigste EVM-Erweiterungspaket — aus Fusaka zurückgezogen wurde.<a href="#fn-13" id="fnref-13"><sup>13</sup></a>

**II.3 Unabhängige Verifizierbarkeit.** Die Execution Layer Specification (ELS) als ausführbare Referenzimplementierung ist ein substantieller Fortschritt. Die Einschränkung liegt an einem methodischen Grenzproblem: Die formale Verifikation eines vollständigen zkEVM-Provers übersteigt den Stand der aktuellen Methoden.<a href="#fn-14" id="fnref-14"><sup>14</sup></a> Das ist keine Roadmap-Lücke, sondern eine Grenze des Fachs.

**II.4 Niedrigschwellige Inklusivität.** Die NAA-Transformation (EIP-7702, EIP-8141) und das PeerDAS-Bandbreitenmodell verbessern Inklusivität auf Nutzer- und Verifizierer-Ebene substantiell. Die 32-ETH-Solo-Staking-Schwelle bleibt unverändert. Rainbow Staking — der einzige konzeptionelle Lösungspfad — befindet sich im Status RES ohne Implementierungscommitment. Das ist das einzige Kriterium, bei dem der IST-Defizit durch die SOLL-Roadmap nicht adressiert wird.

**III.4 Hardware-Agnostik.** Die protokolläre Hardware-Agnostik wird im SOLL durch PeerDAS (Bandbreitenreduktion ~85%) und Stateless Clients weiter verbessert. Die Cloud-Konzentration (~59% auf drei Providern) bleibt unverändert — ePBS und zkEVM adressieren die Protokollebene, nicht die physische Infrastrukturschicht.

### 6.1-E Die Urteilsverschiebung

Die M3-Kaskade im SOLL-Zustand durchläuft fünf Schritte.<a href="#fn-15" id="fnref-15"><sup>15</sup></a> Keine Kritische Bedingung steht auf „Offen" — die Kaskade passiert den ersten Schritt. Keine Kritische Bedingung steht auf „Bedingt erfüllt" — die zweite Deckelung, die im IST das Urteil auf „Geeignet unter erheblichen Bedingungen" gesetzt hat, fällt weg. Die drei Strukturellen Bedingungen (I.1, I.3, III.1) stehen alle auf „Erfüllt" — der dritte Schritt setzt keine Deckelung. I.2 und II.1 stehen auf „Erfüllt mit Einschränkung", nicht auf vollem „Erfüllt" — das Urteil bleibt unterhalb des schlichten „Geeignet". Das Ergebnis ist „Geeignet mit Bedingungen".

Der Grad wird separat bestimmt. Die sechs Qualitativen Kriterien (I.2, II.1, II.2, II.3, II.4, III.4) stehen alle auf mindestens „Erfüllt mit Einschränkung" — der Grad bleibt „Gut".<a href="#fn-16" id="fnref-16"><sup>16</sup></a>

Die Verschiebung liegt im Fundament der Eignung, nicht in der Feinqualität. Der Grad verändert sich nicht — das System erfüllt die Qualitativen Kriterien in derselben Stärke wie im IST. Was sich verändert, ist die Sicherheit der Grundlage: Der Übergang von „Geeignet unter erheblichen Bedingungen" zu „Geeignet mit Bedingungen" bedeutet, dass die Kernfunktionen der Infrastruktur im SOLL-Zustand auf einer protokollär fundierteren Basis stehen.

## 6.2 Persistente Grenzen des Systems

### 6.2-A Die Krisen-Reaktions-Lücke

Ein Muster durchzieht drei Kriterien des SOLL-Profils und bildet eine quer-schneidende Lücke, die im SOLL-Urteil nicht einzeln lokalisiert ist, aber systemische Relevanz hat.

**Builder-Konzentration.** ePBS löst die protokolläre Relay-Abhängigkeit und erzwingt die korrekte Zahlungsabwicklung zwischen Proposer und Builder. Was ePBS nicht adressiert, sind die ökonomischen Wurzeln der Builder-Konzentration: Latenzvorteile durch geographische Nähe zu Börsen-Systemen, Cross-Domain-Arbitrage-Kapazitäten und Exclusive Order Flow, der rund 54 Prozent des Blockwerts ausmacht.<a href="#fn-17" id="fnref-17"><sup>17</sup></a> Selbst bei vollständig aktiviertem ePBS können drei bis fünf Builder durch ökonomische Überlegenheit mehr als 70 Prozent der Block-Produktion kontrollieren. Attested Program Sequencing (APS) und MEV Burn befinden sich im Status RES und bieten keinen operativen Lösungspfad.<a href="#fn-18" id="fnref-18"><sup>18</sup></a>

**Liquid Staking.** Lido hält rund 23 Prozent des gestakten ETH — nach dem Rückgang von über 32 Prozent. Ein protokolläres Cap, das bei einem bestimmten Marktanteil eine strukturelle Rückkopplungsschranke setzt, existiert nicht.<a href="#fn-19" id="fnref-19"><sup>19</sup></a> DVT (Obol, SSV) wächst — 547.968 ETH unter DVT bei Lido allein, plus 57 Prozent QoQ-Wachstum — aber DVT ist eine Dezentralisierungsmaßnahme auf Validator-Ebene, kein Substitut für ein Staking-Cap auf Betreiberebene. Rainbow Staking (RES) könnte eine strukturelle Lösung bieten, hat aber kein Implementierungscommitment.

**Emergency Response Plan.** Das Ethereum-Ökosystem hat in der Reaktion auf den Prysm-Bug im Dezember 2025 demonstriert, dass schnelle Koordination möglich ist — aber die Koordination erfolgte durch informelle Netzwerke und EF-Kommunikationskanäle, nicht durch einen protokollär verankerten Mechanismus.<a href="#fn-20" id="fnref-20"><sup>20</sup></a> Der Emergency Response Plan ist dokumentiert, die Koordinationsverpflichtung ist nicht erzwingbar. In einem System, das sich als souveränitätsresistente Infrastruktur versteht, ist informelle Krisenkoordination eine strukturelle Lücke zwischen Anspruch und Realität.

Diese drei Befunde liegen quer über II.1, III.1 und III.2. Das SOLL-Urteil ist „Geeignet mit Bedingungen, Grad Gut" — die Krisen-Reaktions-Lücke drückt keinen dieser Befunde auf eine niedrigere Stufe, qualifiziert aber jeden. Die Frage, ob Ethereum in einer systemischen Krise — einem koordinierten Staker-Austritt, einem kritischen Fehler in einem dominierten Client, einem simultanen Angriff auf mehrere Ebenen — die Resilienz demonstrieren kann, die ein fundamentaler Infrastrukturanspruch erfordert, bleibt im SOLL-Rahmen beantwortet, aber unter Vorbehalt.

### 6.2-B Die Post-Quantum-Lücke

Die Post-Quantum-Migration ist die einzige Grenze im SOLL-Profil, für die eine exogene Zeitdimension die Relevanz bestimmt.

Die Architektur ist vollständig angelegt. Für die Consensus-Schicht liefert die Beam Chain (RES, post-2029) SNARK-basierte Consensus Proofs mit leanXMSS als hash-basierter, PQ-sicherer Signaturschicht.<a href="#fn-21" id="fnref-21"><sup>21</sup></a> Für die Data-Schicht löst die KZG-zu-STARK-Migration im Full-Danksharding-Endzustand das Commitment-Problem.<a href="#fn-22" id="fnref-22"><sup>22</sup></a> Für die Execution-Schicht bietet die Kombination aus EIP-7702, EIP-8141 (Validation Frames, CFI Hegotá) und NAA einen ECDSA-Ausstiegspfad.<a href="#fn-23" id="fnref-23"><sup>23</sup></a>

Die Umsetzung ist strukturell ungesichert. Beam Chain ist Research Reserve — kein Fork-Termin, keine Implementierungsdeadline. Validation Frames (EIP-8141) ist CFI Non-Headliner — im Consensus unter Beobachtung, aber nicht im Delivery-Pfad. ML-DSA-Signaturen sind 2,4 bis 4,6 Kilobyte groß, verglichen mit 64 Byte für ECDSA — der State-Bloat-Faktor bei vollständiger Migration beträgt rund das 59-fache.<a href="#fn-24" id="fnref-24"><sup>24</sup></a>

Die Zeitdimension ist nicht trivial. Die Metaculus-Prognose gibt der Verfügbarkeit eines kryptographisch relevanten Quantencomputers bis 2030 eine Wahrscheinlichkeit von rund 20 Prozent.<a href="#fn-25" id="fnref-25"><sup>25</sup></a> Die Beam Chain hat keinen Delivery-Termin vor 2029. Das Fenster zwischen dem Aufkommen eines relevanten Quantencomputers und dem Abschluss der PQ-Migration ist unbekannt. Dieser Befund qualifiziert das SOLL-Urteil in I.2 und III.1, verändert es aber nicht — das Risiko ist eingepreist, nicht externalisiert.

### 6.2-C Infrastrukturelle Restrisiken

Drei weitere Grenzen des SOLL-Profils sind nicht durch die Roadmap adressiert, qualifizieren aber die Einschränkungen auf bestehenden Kriterien.

**Cloud-Konzentration.** Rund 59 Prozent der gehosteten Execution-Layer-Nodes laufen auf drei Cloud-Providern. Der AWS-Outage im Oktober 2025 hat gezeigt, dass das Netzwerk die Situation ohne Finalitätsverlust absorbieren konnte — aber der operative Korridor zwischen normalem Betrieb und Finalitätsverlust wurde enger.<a href="#fn-26" id="fnref-26"><sup>26</sup></a> Die SOLL-Roadmap adressiert die Cloud-Konzentration nicht direkt. Stateless Clients verbessern die Zugangsschwelle für Home-Staking, aber Home-Staking hängt auch von der 32-ETH-Barriere und der Netzwerklatenz ab.

**Solo-Staking-Barriere.** Die 32-ETH-Mindesteinlage entspricht zum Kursniveau des ersten Quartals 2026 rund 67.000 US-Dollar. Rainbow Staking — der einzige konzeptionelle Lösungspfad — hat kein Implementierungscommitment. Das ist das einzige der zwölf Kriterien, bei dem der IST-Defizit im SOLL unverändert bleibt.

**L2-Stage-2-Defizit.** Kein großes Rollup hatte Anfang 2026 Stage 2 erreicht. Stage 2 ist die Stufe, bei der das Security Council keine Vetoposition mehr innehat und das System rein auf Protokollregeln läuft. Native Rollups und Based Sequencing adressieren die strukturelle L2-Sicherheitsarchitektur — aber die Stage-2-Erreichung hängt nicht nur von der Protokolltechnologie ab, sondern von der Entscheidung der jeweiligen Rollup-Betreiber, die Kontrolle abzugeben.<a href="#fn-27" id="fnref-27"><sup>27</sup></a>

## 6.3 Grenzen des Bewertungsrahmens

### 6.3-A Was der Rahmen nicht erfasst

Der in Kapitel 2 definierte Bewertungsrahmen ist ein technisch-struktureller Rahmen. Er prüft, ob Ethereum die Eigenschaften einer fundamentalen Infrastruktur aufweist — nicht, ob Ethereum in einem gegebenen Markt- oder Regulierungskontext adoptiert werden sollte. Diese Eingrenzung ist eine methodische Entscheidung, keine Lücke: Der Rahmen macht die Bewertung reproduzierbar und vergleichbar, indem er sie von kontextuell variablen Faktoren entkoppelt.<a href="#fn-28" id="fnref-28"><sup>28</sup></a>

**Preisrisiko.** Der ETH-Kurs beeinflusst die Validator-Ökonomie, die effektive Höhe der 32-ETH-Barriere und die ökonomische Sicherheit des Netzwerks. Ein starker Preisrückgang würde die ökonomische Sicherheitsschwelle verschieben, ohne dass ein technischer Defekt aufgetreten wäre. Das Rahmenwerk erfasst die strukturelle Sicherheitsarchitektur — Casper, Inactivity Leak, EIP-1559 — nicht aber die Marktvariable, die deren Effektivität skaliert.

**Regulatorisches Risiko.** Der GENIUS Act (Juli 2025) und die EU MiCA-Verordnung schaffen regulatorische Rahmenbedingungen, die den Stablecoin-Markt auf Ethereum direkt betreffen.<a href="#fn-29" id="fnref-29"><sup>29</sup></a> Das Rahmenwerk prüft die technische Compliance-Fähigkeit — nicht, ob aktuelle oder zukünftige Regulierung die Adoption einschränkt oder erzwingt.

**Wettbewerbs-Positionierung.** Die Bewertung ist absolut, nicht relativ. Sie stellt keine Rangliste zwischen Ethereum und konkurrierenden Settlement-Schichten auf. Entscheider, die eine relative Positionierung benötigen, müssen den Rahmen auf alternative Systeme anwenden und die Profile vergleichen.

### 6.3-B Datengrenzen und Reifegrad-Volatilität

Die IST-Bewertung hat einen Stichtag: März 2026. EIP-Status, Marktanteile und Netzwerkdaten sind Momentaufnahmen. Der Rückgang des Lido-Marktanteils von über 32 Prozent (2023) auf rund 23 Prozent (März 2026) illustriert die Dynamik: Eine Bewertung mit dem Stichtag 2023 hätte denselben Datenpunkt anders positioniert.<a href="#fn-30" id="fnref-30"><sup>30</sup></a>

Die SOLL-Bewertung hat einen strukturell anderen Unsicherheitscharakter. Sie prüft den Zustand bei vollständiger Roadmap-Umsetzung — nicht bis zu einem Datum, sondern unter einer Bedingung. Der Rückzug von EOF aus Fusaka zeigt das Reifegrad-Volatilitätsproblem: Ein EIP mit Status PLAN oder CFI kann im nächsten Upgrade-Zyklus zurückgezogen, verzögert oder neu gestaltet werden. Die SOLL-Bewertung ist deshalb nicht als Prognose zu lesen, sondern als kontrafaktische Analyse.

### 6.3-C Methodische Grenzen

Der Rahmen arbeitet mit einer Ordinalskala in vier Stufen und einer intervall-losen Urteilsskala in fünf Kategorien. Die Abstände zwischen Stufen sind nicht metrisch definiert: „Erfüllt mit Einschränkung" kann im Substanzgehalt sehr nahe an „Erfüllt" oder sehr nahe an „Bedingt erfüllt" sein. Diese Unschärfe ist in den Einzelbewertungen sichtbar — die Governance-Einschränkung in III.2 (fehlende mechanische Garantien für Extremkonflikte) ist von anderer Schwere als die Inklusivitäts-Einschränkung in II.4 (32-ETH-Barriere), obwohl beide dasselbe Label tragen.<a href="#fn-31" id="fnref-31"><sup>31</sup></a>

Die Kritischen, Strukturellen und Qualitativen Kriterien bilden eine implizite Gewichtung, die in der M3-Kaskade operativ wird. Diese Gewichtung ist methodisch begründet, aber nicht frei von Werturteilen: Das Framework setzt Neutralität (II.1) als kritischer ein als Generativität (II.2), weil die Neutralitätseigenschaft für die Infrastruktur-Definition konstitutiv ist.<a href="#fn-32" id="fnref-32"><sup>32</sup></a>

## 6.4 Gesamturteil und Forschungsfrage

### 6.4-A Antwort auf die Forschungsfrage

Die Arbeit stellt eine empirische Frage: Ist Ethereum als fundamentale digitale Infrastruktur geeignet? Die Antwort folgt aus der Bewertung in zwei Zuständen.

**Im IST-Zustand (Stand März 2026) lautet das Urteil: Geeignet unter erheblichen Bedingungen, Grad Gut.**

Die zentrale Bedingung ist die Implementierung eines protokollären Mechanismus, der die Transaktionsinklusion von der Marktstruktur der Block Builder entkoppelt. Ohne diese Bedingung bleibt die Neutralitätsgarantie operativ vorhanden, aber strukturell ungesichert. Alle anderen Kriterien stehen auf „Erfüllt mit Einschränkung" — das System adressiert die Infrastrukturanforderungen in der Breite, hat aber die operative Nutzungsrealität noch nicht vollständig mit den protokollären Möglichkeiten synchronisiert.

**Im SOLL-Zustand (vollständig umgesetzte Roadmap) lautet das Urteil: Geeignet mit Bedingungen, Grad Gut.**

Die Bedingungen, unter denen das Urteil gilt, sind im SOLL-Profil explizit: ePBS (EIP-7732) muss aktiviert sein, damit Relay-Neutralität protokollär wird; die L1-zkEVM (EIP-8025) muss in Produktion sein, damit unabhängige Verifikation ohne Re-Execution möglich ist; Stateless Clients müssen deployt sein, damit die Zugangsschwelle für unabhängige Verifikation sinkt; das Tiered State muss operativ sein, damit das State-Wachstum einen Gleichgewichtspfad findet. Diese Bedingungen sind keine spekulativen Wünsche, sondern aktiv entwickelte Protokollmechanismen mit dokumentierten Reifegrad-Pfaden.

### 6.4-B Was das Urteil trägt

Das Urteil „Geeignet mit Bedingungen, Grad Gut" ruht auf vier strukturellen Stärken, die im IST- und SOLL-Zustand unverändert gelten.

**Ökonomische Sicherheit.** Das Casper-Finality-Gadget mit 964.768 Validatoren (Post-Pectra-Konsolidierung) und einem gestakten ETH-Anteil von 30,8 Prozent liefert eine ökonomische Sicherheitsschwelle, die kein vergleichbares dezentrales System erreicht. Der Inactivity Leak ermöglicht automatisierte Selbstheilung ohne externe Koordination.<a href="#fn-33" id="fnref-33"><sup>33</sup></a>

**Offene Generativität.** Das permissionless Smart-Contract-Layer mit 31.869 aktiven Entwicklern und einem DeFi-TVL, der die aggregierte Marktkapitalisierung aller konkurrierenden L1s übersteigt, ist das stärkste empirische Signal für den Netzwerkeffekt, den die Infrastruktur erzeugt.<a href="#fn-34" id="fnref-34"><sup>34</sup></a>

**Upgrade-Track-Record.** Vier erfolgreiche Hard Forks seit dem Merge (Shanghai, Dencun, Pectra, Fusaka), kein Chain-Split, vollständige Backward Compatibility: Contracts von 2017 laufen unverändert. Die operative Governance-Leistung übertrifft die formale Institutionalisierung — in der vergleichenden Infrastrukturforschung gilt das als Ausnahmezustand.<a href="#fn-35" id="fnref-35"><sup>35</sup></a>

**Atomare Koordination.** Die Fähigkeit, Wertbewegungen über heterogene Pools, Protokolle und — im SOLL-Zustand — Rollup-Schichten hinweg in einem einzigen Transaktionsblock atomar zu koordinieren, ist in keiner anderen Infrastruktur realisiert — weder im traditionellen Finanzsystem noch in konkurrierenden Blockchain-Architekturen.<a href="#fn-36" id="fnref-36"><sup>36</sup></a>

### 6.4-C Belastbarkeit und Zeitdimension

Das Urteil ist beständig gegen die persistenten Grenzen, die Abschnitt 6.2 beschreibt — die Krisen-Reaktions-Lücke, die Post-Quantum-Lücke und die infrastrukturellen Restrisiken drücken das Urteil nicht aus der Kategorie „Geeignet mit Bedingungen" heraus. Sie qualifizieren die Bedingungen. Das ist der genaue Sinn des Urteilslabels: Eignung unter Bedingungen ist nicht Nicht-Eignung unter günstigeren Annahmen, sondern Eignung mit explizit benannten Voraussetzungen.

Die Zeitdimension ist die strukturell schwierigste Variable. Das SOLL-Profil ist keine Prognose, sondern eine kontrafaktische Bewertung: Es beschreibt den Zustand, der sich ergibt, wenn die Roadmap vollständig umgesetzt wird. Die Implementierungsreihenfolge, -geschwindigkeit und -vollständigkeit sind eigenständige Risikofaktoren, die das Rahmenwerk nicht quantifiziert. Die Post-Quantum-Migration ist die einzige Grenze, für die eine exogene Zeitvariable — die Verfügbarkeit eines kryptographisch relevanten Quantencomputers — mit der endogenen Umsetzungsgeschwindigkeit interferiert.

Für Entscheider in Unternehmen, Kapitalgebern, technischen Architekten und politischen Institutionen, für die diese Arbeit geschrieben ist, lässt sich der Befund in einem Satz formulieren: Ethereum erfüllt im IST-Zustand die technischen Voraussetzungen einer fundamentalen digitalen Infrastruktur unter erheblichen Bedingungen, und die Roadmap ist so strukturiert, dass diese Bedingungen bei vollständiger Umsetzung auf das Niveau von Bedingungen ohne das Attribut „erheblich" reduziert werden — bei gleichbleibendem Qualitätsniveau. Die Frage, die das Rahmenwerk nicht beantwortet, ist die Umsetzungsgeschwindigkeit. Sie ist die Frage, die nach der Lektüre dieser Arbeit bleibt.

<div class="fn-list">
<ol>
<li id="fn-1">Vgl. Abschnitt 4.10, Gesamtsynthese und IST-Urteil. Das numerische Profil 0-11-1-0 ist die komprimierte Darstellung der zwölf Einzelbewertungen aus den Abschnitten 4.7 bis 4.9. <a href="#fnref-1">↩</a></li>
<li id="fn-2">Vgl. Abschnitt 5.7-C, SOLL-Gesamtprofil. Das Profil 6-6-0-0 ergibt sich aus der dreistufigen Kriterienstruktur und der SOLL-Bewertung der zwölf Einzelkriterien in Abschnitt 5.7. <a href="#fnref-2">↩</a></li>
<li id="fn-3">relayscan.io: Builder und Relay-Marktanteile (abgerufen am 27.03.2026). Vgl. Abschnitt 4.7, Synthese Dimension II: Der HHI-Wert überschreitet den DOJ-Schwellenwert für hochkonzentrierte Märkte um ein Vielfaches. <a href="#fnref-3">↩</a></li>
<li id="fn-4">FOCIL (EIP-7805): Fork-Choice enforced Inclusion List. Status PLAN, SFI Hegotá Headliner. Das 1-of-N-Honesty-Modell erfordert, dass mindestens ein Mitglied des 2.000-köpfigen Inclusion-List-Committees ehrlich agiert. Vgl. Abschnitt 5.5-A. <a href="#fnref-4">↩</a></li>
<li id="fn-5">ePBS (EIP-7732): Enshrined Proposer-Builder Separation. Status PLAN, SFI Glamsterdam. Vgl. Abschnitt 5.5-A: ePBS eliminiert die Relay-Trust-Annahme und ist gleichzeitig Voraussetzung für das Proving-Window der L1-zkEVM. <a href="#fnref-5">↩</a></li>
<li id="fn-6">Encrypted Mempool: Status RES. Das Konzept zielt auf Pre-Inclusion-Privacy: Transaktionsinhalte werden dem Proposer erst nach der Aufnahme in den Block bekannt. Vgl. Abschnitt 5.1-B. <a href="#fnref-6">↩</a></li>
<li id="fn-7">Native Rollups (EIP-8079): EXECUTE-Precompile, Status RES. Vgl. Abschnitt 5.6-A: Die Bindung ist strukturell, weil der Sicherheitsnachweis an die L1-STF geknüpft ist — ein Wechsel auf eine andere L1 erfordert die Migration auf einen anderen STF-Rahmen. <a href="#fnref-7">↩</a></li>
<li id="fn-8">Der gestaffelte Finalitäts-Stack umfasst Based Preconfirmations (~2s, DEPL, ökonomisch besichert), Fast Confirmation Rule (~13s, PLAN) und Drei-Slot-Finalität (~36s, RES). Vgl. Abschnitt 5.6-C. <a href="#fnref-8">↩</a></li>
<li id="fn-9">Zum Vergleich: SWIFT-Settlement dauert 1–3 Tage, ACH 2–3 Tage, SEPA-Überweisungen typisch 1 Werktag. Ethereums Based Preconfirmations (~2s) sind schneller als jede traditionelle Clearing-Infrastruktur. Vgl. Abschnitt 4.8. <a href="#fnref-9">↩</a></li>
<li id="fn-10">Tiered State (Active, Hibernated, Dead): Status RES. Der entscheidende Unterschied zu History Expiry (EIP-4444) ist, dass Tiered State State-Einträge nicht löscht, sondern in einen Zustand überführt, aus dem sie mit einem Witness wiederhergestellt werden können. Vgl. Abschnitt 5.4-A. <a href="#fnref-10">↩</a></li>
<li id="fn-11">Buterin, Vitalik (X-Posts vom 3. und 5. Februar 2026); Ethereum Foundation: Protocol Priorities, Januar/Februar 2026. Der Pivot von Rollup-centric zu L1-first hat die Ressourcenallokation, die Roadmap-Prioritäten und die EIP-Bewertungsmaßstäbe grundlegend verschoben. Vgl. Abschnitt 5.1-A. <a href="#fnref-11">↩</a></li>
<li id="fn-12">ePBS → Relay-Unabhängigkeit: Abschnitt 5.5-A. Native Rollups → Proof-Unabhängigkeit: Abschnitt 5.6-A. Stateless Clients und Trustless RPC → RPC-Unabhängigkeit: Abschnitt 5.3-B. <a href="#fnref-12">↩</a></li>
<li id="fn-13">EOF (Ethereum Object Format): für das Fusaka-Upgrade diskutiert und im Frühjahr 2026 zurückgezogen. Die Entscheidung spiegelt die Lean-Ethereum-Priorisierung wider. Vgl. Abschnitt 5.2-C. <a href="#fnref-13">↩</a></li>
<li id="fn-14">Die formale Verifikation eines vollständigen zkEVM-Provers erfordert die maschinenverifizierte Korrektheit eines komplexen arithmetischen Schaltkreises und übersteigt den aktuellen Stand der formalen Verifikationsmethoden. KEVM (Hildenbrandt et al. 2018) hat die EVM-Semantik formal verifiziert — der Schritt zur Verifikation des Provers ist qualitativ anders. Vgl. Abschnitt 5.7-B. <a href="#fnref-14">↩</a></li>
<li id="fn-15">Vgl. Abschnitt 2.3.3 zur M3-Kaskade und Abschnitt 5.8 für die vollständige SOLL-Kaskaden-Durchführung. <a href="#fnref-15">↩</a></li>
<li id="fn-16">Vgl. Abschnitt 2.3.3 zur Grad-Definition: Der Grad ist „Gut", wenn alle sechs Qualitativen Kriterien mindestens auf „Erfüllt mit Einschränkung" stehen. <a href="#fnref-16">↩</a></li>
<li id="fn-17">Exclusive Order Flow: Schätzung ~54% des Blockwerts auf Basis von Flashbots-Daten und Order-Flow-Analyse, März 2026. Vgl. Abschnitt 5.5-B: Die Builder-Konzentration ist von >90% (Top-3, 2024) auf ~70–80% gesunken, bleibt aber strukturell. <a href="#fnref-17">↩</a></li>
<li id="fn-18">APS (Attested Program Sequencing) und MEV Burn: Status RES. MEV Burn würde MEV-Extraktion auf Basis einer EIP-1559-Äquivalentlogik für den Block-Space-Markt begrenzen. Vgl. Abschnitt 5.5-B. <a href="#fnref-18">↩</a></li>
<li id="fn-19">Dune Analytics / CCN (5. März 2026): Lido Staking Market Share, ~22,8–23 Prozent. Die Lido DAO hat im Juni 2022 per Snapshot-Vote gegen eine selbst auferlegte Marktanteilsbegrenzung gestimmt. Vgl. Abschnitt 5.5-C. <a href="#fnref-19">↩</a></li>
<li id="fn-20">Cointelegraph (2025): Ethereum sees 25% validation drop post-Fusaka as Prysm bug affects network participation. Dezember 2025. Die Koordination erfolgte über EF-Social-Media-Kanäle, ACD-Discord und direkte Entwickler-Kommunikation — funktional effektiv, aber nicht protokollär verankert. <a href="#fnref-20">↩</a></li>
<li id="fn-21">Beam Chain: Konzeptvorstellung von Justin Drake, Devcon 7, November 2024. Status RES. leanXMSS: Post-Quantum-sichere Signatur auf Basis von eXtended Merkle Signature Scheme mit lean-Optimierung. Vgl. Abschnitt 5.5-D. <a href="#fnref-21">↩</a></li>
<li id="fn-22">KZG → STARK: Im Full-Danksharding-Endzustand werden KZG-Commitments durch STARK-basierte Polynomial-Commitments ersetzt. STARKs erfordern nur kollisionsresistente Hash-Funktionen und sind damit quantenresistent. Vgl. Abschnitt 5.2-D. <a href="#fnref-22">↩</a></li>
<li id="fn-23">EIP-7702 (DEPL, Pectra): temporäre EOA-Delegation. EIP-8141 Validation Frames (CFI Hegotá, Non-Headliner): vollständige NAA. Der ECDSA-Ausstiegspfad nutzt die Account-Abstraktions-Infrastruktur, um Signaturen ohne Hard Fork auf PQ-sichere Algorithmen umzustellen. Vgl. Abschnitt 5.3-C und 5.3-E. <a href="#fnref-23">↩</a></li>
<li id="fn-24">ML-DSA (CRYSTALS-Dilithium): Signaturgrößen 2,4–4,6 KB je nach Sicherheitsstufe. ECDSA (secp256k1): 64 Byte. State-Bloat-Faktor: (2.400 B / 64 B) ≈ 37,5-fach bis (4.600 B / 64 B) ≈ 72-fach, Median ~59-fach. Vgl. Abschnitt 5.3-D. <a href="#fnref-24">↩</a></li>
<li id="fn-25">Metaculus: Prognose zur Verfügbarkeit eines kryptographisch relevanten Quantencomputers (CRQC) bis 2030, Stand Frühjahr 2026: ~20 Prozent. Ein CRQC im Sinne dieser Prognose ist ein Quantencomputer, der ECDSA-256-Bit-Schlüssel in einem sicherheitskritischen Zeitrahmen brechen kann. Vgl. Abschnitt 5.7-A. <a href="#fnref-25">↩</a></li>
<li id="fn-26">Ethernodes (Anfang 2026): Cloud-Konzentrationsschätzung ~59% auf AWS (35,5%), Hetzner (13,8%) und OVHcloud (9,7%). AWS-Outage Oktober 2025: Ethereum-Netzwerk absorbierte den Ausfall einer AWS-Region ohne Finalitätsverlust. Vgl. Abschnitt 4.9 und 5.7-B. <a href="#fnref-26">↩</a></li>
<li id="fn-27">L2BEAT: Stage-Klassifizierungen, Stand Anfang 2026. Stage 2 erfordert den Verzicht auf eine Security-Council-Veto-Position und die vollständige Abhängigkeit von On-Chain-Proof-Systemen. Vgl. Abschnitt 5.6-A. <a href="#fnref-27">↩</a></li>
<li id="fn-28">Die Methodik folgt dem in Kapitel 2 beschriebenen Ansatz: Frischmann (2012) für die Infrastruktur-Definition, Van Schewick (2010) für die Architecture-Innovation-Dimension, Mayntz (1993) für die Governance-Dimension. Die Abkopplung von Markt- und Regulierungsvariablen ist eine Voraussetzung für die zeitübergreifende Vergleichbarkeit. Vgl. Abschnitt 2.1. <a href="#fnref-28">↩</a></li>
<li id="fn-29">GENIUS Act: Guiding and Establishing National Innovation for U.S. Stablecoins Act. Unterzeichnet am 18. Juli 2025. EU MiCA: Markets in Crypto-Assets Regulation, vollständig in Kraft seit Dezember 2024. Vgl. Abschnitt 4.6. <a href="#fnref-29">↩</a></li>
<li id="fn-30">Dune Analytics / CCN (5. März 2026): Lido-Marktanteil ~22,8–23 Prozent; Vorjahres-Peak >32 Prozent (2023). Die Dynamik illustriert, dass strukturelle Befunde (kein Protokoll-Cap existiert) stabiler sind als quantitative Messwerte (aktueller Marktanteil). <a href="#fnref-30">↩</a></li>
<li id="fn-31">Vgl. Abschnitt 2.3 zur Definition der Urteilsstufen. Die Unschärfe der Ordinalskala ist ein bekanntes Problem in der empirischen Infrastrukturbewertung. Vgl. Mayntz 1993 für den Kontext technischer Systeme. <a href="#fnref-31">↩</a></li>
<li id="fn-32">Vgl. Abschnitt 2.2 zur Kriterien-Hierarchie: Die Kritischen Bedingungen (I.2, I.4, II.1) sind als konstitutiv für den Infrastrukturanspruch definiert — ein Ausfall in diesen Kriterien negiert die Grundeignung des Systems. Die Priorisierung ist begründet, aber nicht axiomatisch. <a href="#fnref-32">↩</a></li>
<li id="fn-33">beaconcha.in: Validator-Statistiken (abgerufen am 27.03.2026). Post-Pectra-Konsolidierung durch EIP-7251: 964.768 Validatoren bei 30,8% gestaktem ETH-Anteil. CoinDesk (18. Februar 2026): Ethereum Staking Rate Reaches 30.8% of Total Supply. Vgl. Abschnitt 4.8. <a href="#fnref-33">↩</a></li>
<li id="fn-34">Electric Capital: Developer Report, September 2025: 31.869 aktive Entwickler. DefiLlama: Ethereum DeFi TVL (abgerufen am 27.03.2026). Vgl. Abschnitt 4.7. <a href="#fnref-34">↩</a></li>
<li id="fn-35">Vgl. Van Schewick 2010 und Frischmann 2012 zur Infrastruktur-Governance-Forschung. Die Kombination aus Open-Source-Protokoll, dezentraler Entwicklerakteursstruktur und nachgewiesener Hard-Fork-Koordination ohne Fork-Split hat in der akademischen Infrastrukturforschung keinen direkten Präzedenzfall. <a href="#fnref-35">↩</a></li>
<li id="fn-36">Vgl. Abschnitt 4.8 (IST) und 5.6-C und 5.6-D (SOLL). Die atomare Koordination über heterogene Liquiditätspools ist das komparative Alleinstellungsmerkmal, das Ethereum von SWIFT, TARGET2 und konkurrierenden L1s unterscheidet. <a href="#fnref-36">↩</a></li>
</ol>
</div>
