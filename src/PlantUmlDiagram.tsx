import PlantUMLEncoder from "plantuml-encoder";

type PlantUmlDiagramProps = {
  plantUmlCode: string;
  title: string;
}; /* use `interface` if exporting so that consumers can extend */

const PlantUmlDiagram = ({
  plantUmlCode,
  title,
}: PlantUmlDiagramProps): React.JSX.Element => {
  const encoded = PlantUMLEncoder.encode(plantUmlCode);
  const url = "http://www.plantuml.com/plantuml/svg/" + encoded;
  return <img src={url} alt={title} />;
};

export default PlantUmlDiagram;
