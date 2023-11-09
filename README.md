# EPWS2324_Zellmann_Runde

# Anwendung zur Verwaltung eigener/privater Finanzen (Finanzmanager)

# Einleitung

Die Verwaltung persönlicher Finanzen ist eine weitverbreitete Herausforderung, die viele Menschen in ihrem Alltag betrifft. Die mangelnde Transparenz bei Ausgaben, die Schwierigkeiten bei der Einnahmen- und Ausgabenverfolgung, der Bedarf an finanzieller Planung und Zielfestlegung, das gezielte Sparen in verschiedenen Ausgabenkategorien und der Bedarf an Finanzbildung sind dabei wichtige Problembereiche. In diesem Kontext zielt das geplante Web-Entwicklungsprojekt darauf ab, eine Lösung anzubieten, die Benutzern ermöglicht, ihre finanzielle Gesundheit zu optimieren, ihre Finanzen effizient zu verwalten und ihre finanziellen Ziele somit einfacher zu erreichen. Es strebt an, die aufgezählten Problemfelder zu adressieren und infolgedessen eine benutzerfreundliche Plattform zur Verbesserung der persönlichen Finanzverwaltung bereitzustellen.

# Projektidee

Unsere Projektidee besteht darin, einen Finanzratgeber in Form von einer Webanwendung zu entwickeln, welcher junge Menschen dazu motivieren soll, sich mit frühzeitiger Altersvorsorge auseinanderzusetzen und zu beschäftigen. Außerdem nimmt unsere Anwendung jungen Menschen die Angst sich auch mal mit einem Thema vertraut zu machen, welches erst in weitliegender Zukunft relevant sein wird. Der Finanzratgeber bietet dem Anwender zu Beginn Eingabemöglichkeiten für persönliche Daten (Name, Alter, Bildungsstand, finanzielle Ziele bis zur Rente) für das eigene Alter und Ziele, an. Des Weiteren werden reele Kontoauszüge in elektronischer Form als CSV-Datei importiert, sodass sowohl Ein- als auch Ausgaben einsehbar sind. Zudem besteht die Möglichkeit Einnahmen und Ausgaben auch manuell einzutragen. Aus den Einnahmen und Ausgaben errechnet sich ein Einsparpotenzial, welches graphisch, in Form von verschiedenen Diagrammen, veranschaulicht wird. Dabei beziehen sich die verwendeten Diagramme auf die Entwicklung des heutigen Stands bis hin zur Rente. Um diese Zeitspanne noch besser im Detail ansehen zu können, wird ein Schieberegler eingebaut. Darüber hinaus bietet die Anwendung dem Benutzer die Gelegenheit Einsparziele zu definieren, woraus unsere Anwendung erste Prognosen erstellt. Diese können zum einen rein konservativ durch den Einsatz von Bankzinsen, Tagesgelder und Festgelder aufgestellt werden, was nur mit einem geringen Risiko verbunden ist. Andererseits können Prognosen rein progressiv durch den Einsatz von Aktien, Fonds und ETF`s aufgestellt werden, wobei man hier ein gewisses Risiko auf sich nehmen müsste. Im Allgemeinen berechnen Prognosen hierbei die Dauer bis zum Erreichen des definierten Ziels. 

# Vorhaben 

Das Projektvorhaben besteht darin, sowohl eine Desktop- als auch eine mobile Version einer Finanzberater-Webseite zu entwickeln. Diese Plattform soll den Benutzern durch deren visuelle Darstellung dazu animieren, sich  eine klare Übersicht über ihre finanziellen Einnahmen und Ausgaben bieten und dabei , visualisieren. Darüber hinaus sollen auch monatliche, jährliche und längerfristige Einnahmen ebenso visualisiert werden. Die Plattform ermöglicht es Benutzern, finanzielle Zukunftspläne und Ziele zu definieren und gibt ihnen die Möglichkeit, in verschiedenen Ausgabenkategorien gezielt zu sparen, ohne dabei die finanzielle Stabilität zu gefährden. Ebenfalls ist eine Verbindung zu Finanztipps auf Websites vorgesehen. Die Zielsetzung besteht also darin, eine umfassende Lösung zur Verbesserung der finanziellen Gesundheit und Planung der Benutzer anzubieten.

# Umsetzung

1. Stakeholderidentifizierung, Anforderungsermittlung und Problemanalyse : Zuallererst werden passende Stakeholder identitifiziert, in unserem Fall Benutzer, System, Entwickler. Im nächsten Schritt werden deren Anforderungen bzw. Erwartungen an das System ermittelt und mögliche, auftretende Probleme aufgegriffen (Benutzerfreundlichkeit, Übersichtlichkeit, intuitive Benutzung)
2. Modellierung: Basierend auf unseren Erkenntnissen aus früheren Semestern erstellen wir Domänen-, Klassen- und Zustandsdiagramme.
3. Proof of concept: Bankkontodaten eines Benutzers werden importiert oder können alternativ auch manuell verwaltet werden. Zusätzlich werden Formeln zur Zins- und Zinseszinsberechnung definiert. Es werden  zudem auch Möglichkeiten herausgearbeitet, eine Kontobuchung einer bestimmten Kategorie zuzuordnen. Des Weiteren wird geprüft, ob ein ausgewähltes Framework für unsere Lösung notwendige, visuelle Elemente (Balkendiagramme, Kreisdiagramme, usw.) darstellen kann und ob eine mobile Ansicht ohne zusätzlichen Aufwand realisierbar ist.
4. Realisierung: Es wird eine Webanwendung auf Grundlage von Vue.js und Bootstrap Frameworks entwickelt. Dabei wird Vue.js für die Interaktion mit dem Anwender, zur Datenaufbereitung und Darstellung von visuellen Elementen genutzt. Bootstrap Frameworks ermöglicht eine effiziente Nutzung von HTML- und CSS-Elementen und unterstützt nicht nur die Desktop-Ansicht, sondern auch eine mobile Ansicht unserer Anwendung.

# Relevanz

Die Relevanz zeigt sich in der Bewältigung weitverbreiteter finanzieller Herausforderungen, darunter mangelnde Transparenz bei den Ausgaben, Schwierigkeiten bei der Einnahmen- und Ausgabenverfolgung, die Notwendigkeit der finanziellen Planung und gezieltes Sparen in verschiedenen Ausgabenkategorien. Das Projekt hat das Potenzial, die finanzielle Bildung zu fördern und Benutzern dabei zu helfen, fundierte, finanzielle Entscheidungen zu treffen. Insgesamt trägt es zur Verbesserung der finanziellen Gesundheit, der Disziplin bei der eigenen Finanzverwaltung und zur Verwirklichung finanzieller Ziele bei, was in der heutigen Zeit von großer Bedeutung ist.
(Altersvorsorge vor dem Hintergrund der Inflation und der Ungewissheit durch das Rentenproblem)

# Domänenmodelle

Präskriptives Domänenmodell:

![DomainModelEP drawio](https://github.com/HendrikRunde/EPWS2324_Zellmann_Runde/assets/92305681/9c3d3579-6aad-4ffb-9dcd-1e6c4c657919)


# Artefakte und Themen bis Audit 1.

- Zielsetzungen und Vorgehen
- Abwägung von Methoden
- Domänenmodelle
- Zielhierchie & Projektplan
- Anforderungen und Risiken
- Erste architekturellen PoC`s
- Folien
