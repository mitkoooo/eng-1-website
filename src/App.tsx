import MarkDown from "./markdown/MarkDown.mdx";
import PlantUmlDiagram from "./components/PlantUmlDiagram";

const App = (): React.JSX.Element => {
  return (
    <div>
      <div className="mb-3">
        <MarkDown />
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
