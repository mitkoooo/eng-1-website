import Markdown from "./components/Markdown.mdx";
import PlantUmlDiagram from "./components/PlantUmlDiagram";

const App = (): React.JSX.Element => {
  return (
    <div>
      <h1 className="text-center text-black mt-6 mb-3">Gantt chart</h1>
      <PlantUmlDiagram
        plantUmlCode="@startgantt
Project starts 2024-09-26

[Requirements] as [RE] starts on 2024-10-03 and is colored in hotpink
[Formulate questions for meet] happens on 2024-10-03 and is colored in hotpink
then [Requirements Elicitation] happens 2024-10-10 and is colored in hotpink
then [Requirements Report] on {James, Laina, Mansi} starts 2024-10-14 and is colored in hotpink
[Revise requirements report] on {Almira} starts at 2024-11-08 and is colored in hotpink
[Requirements Report] ends on 2024-11-08
[RE] ends on 2024-11-08

[Risk Assesment and Mitigation Report] as [RI] starts 2024-10-07 and is colored in greenyellow
[Draft risk managment process] on {Almira, James} starts on 2024-10-14 and ends at 2024-10-24 and is colored in greenyellow
[Create risk register] on {Almira, Mansi} starts at 2024-10-14 and ends at 2024-10-17 and is colored in greenyellow
then [Condense document to page limit] on {James} happens on 2024-11-07 and is colored in greenyellow
[RI] ends 2024-11-09

[Method Selection and Planning] as [P] starts 2024-10-17 and is colored in orange
[Method Selection write-up] on {Harry,Almira} starts at 2024-10-17 and ends at 2024-10-20 and is colored in orange
[Planning write-up] on {Mansi} starts at 2024-10-24 and ends at 2024-11-08 and is colored in orange
[P] ends at 2024-11-08

[Implementation] starts at 2024-10-14 and is colored in deepskyblue/dodgerblue
[Add Stretch Viewport] on {Harry} starts at 2024-10-15 and ends at  2024-10-25 and is colored in deepskyblue/dodgerblue
then [Update map and add textures] on {Harry} starts at 2024-10-25 and is colored in deepskyblue/dodgerblue
then [Add ability to build] on {Harry} starts at 2024-10-25 and ends at 2024-11-05 and is colored in deepskyblue/dodgerblue
then [Changed to Tiled system] on {Harry} happens at 2024-11-05 and is colored in deepskyblue/dodgerblue
then [Work on UI (Timer, Building Counter, End Screen] on {James} starts at 2024-11-05 and lasts 4 day and is colored in deepskyblue/dodgerblue
then [Implementation write-up] on {James} starts at 2024-11-07 and lasts 1 day and is colored in deepskyblue/dodgerblue
[Implementation] ends at 2024-11-07

[Architecture] as [A] starts on 2024-10-20 and is colored in yellow
[Initial Architecture write-up] on {Vadim} starts 2024-10-20 and ends 2024-10-25 and is colored in yellow
[Reiteration of architecture] on {Vadim} starts at [Add ability to build]'s end and ends 2024-11-07 and is colored in yellow
then [Add architecture to the website] on {Vadim} starts on 2024-11-07 and is colored in darkturquoise
[A] ends at 2024-11-07

[Website] as [W] starts 2024-10-03 and is colored in darkturquoise
[Develop website] on {Vadim} starts on 2024-10-03 and ends on 2024-10-10 and is colored in darkturquoise
then [Link deliverables on website] on {Vadim} starts on 2024-10-17 and is colored in darkturquoise
[Incorporate final weekly updates on website] on {Mansi} starts on 2024-10-24 and ends on 2024-11-07 and is colored in darkturquoise
[W] ends 2024-11-07 


@endgantt
"
        title="Gantt chart"
      />
      <div className="mb-3">
        <Markdown />
      </div>
      <h1 className="text-center text-black mt-6 mb-3">
        Interim versions of the game architecture
      </h1>
      <PlantUmlDiagram
        plantUmlCode="@startuml
package EntitySystems #DDDDDD {
 class BuildingSatisfactionCalculator
 class BuildingRenderer
 class TimeManager
 class ScoreCalculator
 class EventDispatcher

 
}

package Entities {


abstract class Building {
  int timeToBuild
  int[] position
  int buildingLevel
  fn canBeBuild()
}

class Accommodation {
  int population


}
class Cafe
class Pub
class LectureHall
class Map {
 int[] Grid
 int[] buildingLimits 
}
class BusStop {
 int[] position
}
class GameScore {
  int populationScore
  int satisfactionScore
}
abstract class Event {
 string impactType
 string description
}
class Timer {
 int timeRemaining
 fn pause()
 fn resume()
}
class Road {
 int[] position
}
class UserInterface {
 
 fn openBuildMenu()
}



Accommodation ..|> Building : implements
Cafe ..|> Building : implements
Pub ..|> Building : implements
LectureHall ..|> Building : implements
UserInterface *-- Timer
UserInterface *-- GameScore
Map *-- BusStop
Map *-- Road
Map *-- Building

BuildingSatisfactionCalculator --> Building
BuildingRenderer --> Building
ScoreCalculator --> GameScore
TimeManager --> Timer
EventDispatcher --> Event
}
@enduml"
        title="Entity Diagram"
      />
      <p className="text-center text-black text-opacity-50 italic">
        Initial Entity diagram (Week 5)
      </p>
      <PlantUmlDiagram
        plantUmlCode="@startuml
package Entities {


abstract class Building {
  int x
  int y
}

class AccommodationBuilding
class CafeBuilding
class RecreationalBuilding
class LectureBuilding
class AppPreferences {
 private string PREF_MUSIC_VOLUME
 private string PREF_MUSIC_ENABLED
 private string PREF_SOUND_ENABLED
 private string PREF_SOUND_VOL
 private string PREFS_NAME
}
class EndScreen {
}
abstract class Screen {

}
class LoadingScreen {
}
class Main {
  private LoadingScreen loadingScreen
  private PreferencesScreen preferencesScreen
  private MenuScreen menuScreen
  private MainScreen mainScreen
  private EndScreen endScreen
  private AppPreferences preferences
  private Music backgroundMusic
}
abstract class Game {

}
class MainScreen {
  private TiledMap campusMap

  private int progress
  private ProgressBar progressBar
  private int buildingCounter
  private int buildingType
  private boolean suspendedBuilding 
  private boolean buildMode
  private boolean isRunning
  private float elapsedTime
  private float countdowntime
}
class MenuScreen {

}

class PreferencesScreen {

}


AccommodationBuilding ..|> Building : extends
CafeBuilding ..|> Building : extends
RecreationalBuilding ..|> Building : extends
LectureBuilding ..|> Building : extends
EndScreen ..|> Screen : implements
MainScreen ..|> Screen : implements
LoadingScreen ..|> Screen : implements
MenuScreen ..|> Screen : implements
PreferencesScreen ..|> Screen : implements
Main ..|> Game : extends
Building *-- MainScreen : uses buildingGrid

Main o-- LoadingScreen
Main o-- PreferencesScreen
Main o-- MenuScreen
Main o-- EndScreen
Main o--  MainScreen 
Main *-- AppPreferences 

@enduml"
        title="Final Entity diagram"
      />
      <p className="text-center text-black text-opacity-50 italic">
        Final Assessment 1 Entity diagram (Week 6)
      </p>
    </div>
  );
};

export default App;
