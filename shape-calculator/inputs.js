function fields(idName, container, labelText) {
  const labelContent = document.createTextNode(labelText);
  container.appendChild(labelContent);
  var elementName = document.createElement("input");
  elementName.type = "text";
  elementName.name = "member";
  elementName.id = idName;
  container.appendChild(elementName);
}

export function inputs(doc) {
  const option = localStorage.getItem("option");
  if (option === "rectangle") {
    fields("height", doc, "Height :");
    fields("width", doc, "width :");
  } else if (option === "circle") {
    fields("diameter", doc, "Diameter");
  } else if (option === "square") {
    fields("number", doc, "number");
  } else if (option === "ellipse") {
    fields("majorAxis", doc, "Major Axis");
    fields("minorAxis", doc, "Minor Axis");
  }
}
