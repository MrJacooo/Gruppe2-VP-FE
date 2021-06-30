# Readme

## Sebastian

### 23.6
#### 9:43 Task Wechsel, Ich wechsle ins frontend

Es ist schnell aufgefallen, dass Ich mich nicht in Anes's Backend zurechtfinden kann und Anes sich nicht im Frontend zurechtfindet.
Das ist passiert da wir die Sachen mit verschiedenen Ansichten designt haben.

Deshalb wechsle ich die Task mit Anes.

#### 10:28 Nie wieder Backend mit Frontend Mischen

Wie ich gerade erkannt habe ist es eine Grausame Idee Backend mit Frontend zu mischen, man sollte immer eine Stabile version des Backends für das Frontend bereistellen und das development der beiden nicht mischen. Sollte nämlich dann ein Fehler passieren wie zb. (https statt http) ist man sich nicht sicher wann und warum das passiert ist. 

Auch wichtig ist es Backenddeveloper nicht ans Frontend zu lassen und umgekehrt.

#### Reflexion

Vorheriger Stand:
Ich arbeitete daran dass man Items bearbeiten kann, was gut funktioniert.

Heutiger Stand:
Heute arbeitete ich wieder im Frontend, mein erstes Task war die Ordnerstruktur anzupassen. Das funktionierte gut, da wir die Commits schön abpassten. Meine zweite Task war items aktivieren und deaktivieren zu können, dass stellte ich heute auch fertig.

Zukunft:
Wichtig wäre es die Personenliste anzupassen, evl. kümmere ich mich nächstes mal darum.

### Sprint Review

Heute wurde von Tobias am Hinzufügen von Tasks gearbeitet. Das Design dafür ist fertig.

Von Anes wurde am Backend zum Thema Personen gearbeitet und vorallem verbessert.

Von Sebastian wurde im Frontend die Funktionaliltät Acive & NotActive für Items hinzugefügt, ausserdem verschiedene hotfixes, ausserdem hat er die Ordnerstruktur verbessert

Mathoolika hat heute weiter an der Dringlichkeitsfunktion gearbeitet.


### Sprint Retrospective

Es gab Probleme damit das Frontend mit dem Backend zum Thema Personen zu verbinden. Anes konnte nicht gut im Frontend arbeiten, Sebastian kam im Backend nicht zurecht.

Ein weiteres Problem war, dass der Letzte Commit von Nicola nicht vorhanden war. Das löste gewisse Probleme aus.

Gewisse Github aktualitätsprobleme enstanden aufgrund von der neuen Ordnerstruktur, Mathoolika musste ihre änderungen unkonventionell aktualisieren.



### 30.6
#### 9:00 Ende Kickoff

Wir haben die Aufgaben letzer woche besprochen und neue verteilt. Ich habe die aufgabe bekommen bei den Personen ein Dropdown hinzuzufügen und nach offen/gekauft zu sortieren.

#### 9:23 Ende Task Person Dropdown

Gerade habe ich die Task Person Dropdown abgeschlossen und fange jetzt mit der nächsten Task, Sortieren nach Offen / Gekauft.

#### 9:52 Ende Task Sort Offen/Gekauft

Die Task items zu sortieren habe ich ohne komplikationen implementiert.

#### 10:58 Ende hilfe für Mathoolika

Mathoolika hatte hilfe mit ihrem Projekt, wo ich ihr deshalb bis jetzt half. Ausserdem machte ich noch einige kleine hotfixes.



## Tobo
23.06.2021 <br>
1.
Problem:<br> Auf branch develop wurde eine Änderung gemacht, welche ich auf branch design brauche, jedoch habe ich branch design schon vor 
der essenziellen Änderung auf dem brach develop gemacht.<br><br>
Lösung: <br>Mache vom aktuellen develop branch, auf dem die essenzielle
Änderung vorhanden ist, einen neuen branch newDesign und merge den branch mit dem branch design und dem branch develop,
so das ich beide Änderungen in meinem newDesign branch habe.
2.
Button AddItem hinzugefügt mit react-bootstrap component. Mit der componente
Modal und Forms habe ich ein Feld erstellt, in dem man das neue Produkt erfassen
kann. Mit der Logik bin ich noch nicht ganz fertig geworden, aber das Design sitzt.
<br><br>
Zukunft: Logik für AddItem hinzufügen

30.06.2021 <br>

1.
Neunen branch AddItemLogik erstellt. Problem das jetzt besteht
ist, dass ein Item zwar hinzugefügt wird, wenn ich das Formular 
ausfülle und abschicke, jedoch geht das Erfassungsformular beim Abschicken 
nicht zu und das Item wird erst hinzugefügt, wenn die Seite neu geladen wurde.
Die function reload sollte eigentlich das Problem beheben, jedoch 
funktioniert es immer noch nicht.

Lösung: Mit der Funktion windows.location.reload(false) konnte das 
Problem behoben werden

Weiteres wurde der Branch newDesign mit dem develop Branch 
gemerged. 

Jedoch gibt es noch kleine Fehler und Verbesserungen, die behoben
werden müssten. Aber nach dem Ausfüllen und Abschicken des AddItemFormular
geht das Fenster automatisch zu und wird der Liste hinzugefügt, 
ohne selber die Seite nochmals neu zu laden.

Die neuen Items können aber nicht deactivatet werden und 
die Mengenangabe wird beim neuen Item nicht angegeben.



## Anes
### 23.06
Ich und Sebastian tauschten Rollen im Frontend und Backend, da unser Verständnis für das andere jeweils besser ist.  
Meine Arbeit im Frontend für heute ist getan, denn ich blicke hier nicht ganz durch. Ich bin in dieser Arbeit ein Backend developer
und bleibe möglichst dort.  
Was ich aber gemacht habe, ist die Personen Liste. Man kann Personen Löschen, und dessen Items anzeigen. Die werden nach Person gefiltert
#### Reflexion
Von mir wurde hier nicht viel Arbeit verrichtet. Ich fing an das Feature zu implementieren, doch es passte nicht mit dem Rest des Projekt-Codes, weshalb ich und Sebastian wieder änderten.  
Was ich aber erfolgreich implementierte, war die Personen Liste. Man kann jetzt in einem anderen Tab die Items nach Personen filtrieren.

### 30.06
Ich machte heute ein bisschen von allem im Frontend. Ich half vor allem Mathoolika mit den Dringlichkeits Knöpfen. Dort sind wir aber auf das Problem gestossen, dass ``props.item`` _undefined_ zurück gibt, obwohl es drei Zeilen weiter unten genau gleich geschrieben ist, aber funktioniert. Es gint dann aber. Der Fehler war, dass die Methode nicht alle Parameter annahm  
Ich half auch anderen Gruppen, welche noch weiter hinten sind, zum Beispiel der Gruppe von Herrn Ratirajan.
#### Reflexion
Ich verstehe mich nicht so gut mit dem Frontend, da ich beim ganzen Aufbau des Frontends nicht dabei war. Dennoch konnte ich Mathoolika mit der Dringlichkeit helfen. Ich brachte es hin, dass die Flammen je nach Dringlichkeit orange aufleuchten.

## Mathoolika
### 16.06.21
Heute habe ich den Aufrag bekommen die Urgency buttons zu machen.
Ich habe das ReactIcons kennengelernt und festgestellt, das Sie unveränderbar sind. 
### 23.06.21
Ich habe das ReactIcon heute als Button formatiert und versucht die Button farbe zu ändern. Ich habe den einzelnen Buttons ihre ID zugewiesen.
### 30.06.21
