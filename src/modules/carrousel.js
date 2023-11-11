const d = document;

export default function carrousel(
  btn,
  $title,
  $image,
  $body,
  $link,
  data,
  practice
) {
  let tam = data.mainData.proyectsAndPractices.length;

  if (btn === "back") {
    practice <= 0 ? (practice = tam - 1) : practice--;
    let { type, name, image, description, url } =
      data.mainData.proyectsAndPractices[practice];
    $title.innerText = name + " (" + type + ")";
    $image.src = image;
    $body.innerText = description;
    $link.href = url;
    return practice;
  } else {
    practice > tam - 2 ? (practice = 0) : practice++;
    let { type, name, image, description, url } =
      data.mainData.proyectsAndPractices[practice];
    $title.innerText = name + " (" + type + ")";
    $image.src = image;
    $body.innerText = description;
    $link.href = url;
    return practice;
  }
}
