const d = document;

export default function carrousel(btn, $title, $image, $body, data, practice) {
  let tam = data.mainData.proyectsAndPractices.length;

  if (btn === "back") {
    practice <= 0 ? (practice = tam - 1) : practice--;
    let { type, name, image, description } =
      data.mainData.proyectsAndPractices[practice];
    $title.innerText = name + " (" + type + ")";
    $image.innerText = image;
    $body.innerText = description;
    return practice;
  } else {
    practice > tam - 2 ? (practice = 0) : practice++;
    let { type, name, image, description } =
      data.mainData.proyectsAndPractices[practice];
    $title.innerText = name + " (" + type + ")";
    $image.innerText = image;
    $body.innerText = description;
    return practice;
  }
}
