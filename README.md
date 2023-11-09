# EPWS2324_Zellmann_Runde

# Anwendung zur Verwaltung eigener/privater Finanzen (Finanzmanager)

# Einleitung

Gerade in Anbetracht der aktuellen Inflation, des demographischen Wandels und der rasant steigenden Preise in fast allen Bereichen des alltäglichen Lebens, steht es schlecht um eine entspannte Rente. Der demographische Wandel, insbesondere der Anstieg der Lebenserwartung und die schrumpfende Zahl an jungen Erwerbstätigen im Verhältnis zu älteren Menschen, hat weitreichende Auswirkungen auf die Altersvorsorge. Traditionelle Modelle der gesetzlichen Rente sind unter dem Druck dieser demographischen Verschiebungen zunehmend unsicher geworden. Eine alternde Bevölkerung bedeutet nicht nur höhere Gesundheitskosten, sondern auch eine steigende finanzielle Belastung für zukünftige Generationen, einschließlich unserer.

In diesem Kontext wird die private Altersvorsorge immer entscheidender. Junge Erwachsene, die heute in den Arbeitsmarkt eintreten, stehen vor der Herausforderung, sich selbstständig um ihre finanzielle Zukunft kümmern zu müssen. Dabei fehlt es ihnen oft an Wissen und Ressourcen, um kluge finanzielle Entscheidungen zu treffen. Es ist nicht nur wichtig, früh mit der Altersvorsorge zu beginnen, sondern auch die richtigen Instrumente und Strategien zu kennen, um sich unabhängig von staatlichen Rentensystemen abzusichern.

Frühzeitige Finanzplanung und Altersvorsorge sind angesichts sich ändernder Bedingungen, insbesondere für junge Erwachsene, entscheidend. In jungen Jahren stehen spezielle Studentenvorteile wie niedrigere Zinsen und vergünstigte Versicherungen zur Verfügung. Frühzeitige finanzielle Planung maximiert diese Vorteile und ermöglicht es, Geld zu sparen. Der frühe Beginn der Altersvorsorge schafft ein langfristiges finanzielles Sicherheitsnetz durch den Zinseszinseffekt und fördert Flexibilität, Unabhängigkeit und besseres Risikomanagement. Er entwickelt auch ein Bewusstsein für langfristige Ziele, inklusive Altersvorsorge und große Lebensereignisse wie Hauskauf oder Familiengründung. Diese frühe Auseinandersetzung fördert die finanzielle Bildung und ermöglicht fundierte Entscheidungen, unabhängig von unsicheren staatlichen Rentensystemen. Ein frühzeitiger Start legt den Grundstein für eine stabilere finanzielle Zukunft, bietet Kontrolle über finanzielle Unabhängigkeit und eröffnet Optionen, die im späteren Leben möglicherweise nicht verfügbar sind.


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

Die Relevanz unseres Projekts liegt in der zentralen Bedeutung der Sicherheit im Alter, insbesondere angesichts der wachsenden Herausforderungen im Zusammenhang mit Altersarmut und dem Rentenproblem. Hier sind einige Punkte, die die Relevanz des Projekts unterstreichen:
1. Altersarmut verhindern: Die finanzielle Sicherheit im Alter ist von entscheidender Bedeutung, um Altersarmut zu verhindern. Viele Menschen haben nicht ausreichend für ihren Ruhestand vorgesorgt, was zu erheblichen finanziellen Schwierigkeiten im Alter führen kann. Ihr Projekt trägt dazu bei, diese Unsicherheit zu bekämpfen, indem es junge Erwachsene dazu ermutigt, frühzeitig mit der Altersvorsorge zu beginnen.
2. Rentenlücken schließen: In vielen Ländern reichen staatliche Rentensysteme nicht mehr aus, um den Lebensstandard im Alter aufrechtzuerhalten. Rentenlücken entstehen, die es zu schließen gilt. Ihre Webanwendung kann jungen Erwachsenen dabei helfen, zusätzliche Einkommensquellen und Altersvorsorgepläne zu entwickeln, um diese Lücken zu minimieren.
3. Finanzielle Bildung fördern: Ein wesentlicher Teil der Sicherheit im Alter besteht darin, finanzielle Bildung zu fördern. Viele Menschen haben begrenzte Kenntnisse über Altersvorsorge und finanzielle Planung. Ihr Projekt trägt dazu bei, dieses Bildungsdefizit zu beseitigen, indem es leicht verständliche Ressourcen und Werkzeuge zur Verfügung stellt.
4. Frühzeitiges Handeln fördern: Die jungen Erwachsenen von heute haben den Vorteil der Zeit auf ihrer Seite. Indem sie frühzeitig finanzielle Verantwortung übernehmen und Altersvorsorgepläne entwickeln, können sie die Vorteile des Zinseszinseffekts nutzen und eine solide finanzielle Grundlage für die Zukunft aufbauen.
5. Gesellschaftliche Entlastung: Eine starke Altersvorsorgekultur kann die Belastung der Gesellschaft durch die finanzielle Unterstützung älterer Menschen verringern. Individuelle finanzielle Vorbereitung im jungen Erwachsenenalter kann dazu beitragen, die soziale Sicherheit zu entlasten.
   
Insgesamt ist die Relevanz des Projekts in einer Zeit, in der Altersarmut und das Rentenproblem weltweit wachsende Herausforderungen darstellen, von großer Bedeutung. Es trägt dazu bei, junge Erwachsene auf die Notwendigkeit der frühzeitigen Altersvorsorge aufmerksam zu machen, ihnen die Werkzeuge zur Verfügung zu stellen, um langfristige finanzielle Pläne zu entwickeln, und so dazu beizutragen, eine sicherere und finanziell stabilere Zukunft für die kommenden Generationen zu schaffen.

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
