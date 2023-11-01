const d = document;

export default function resortJson(element, json) {
  const $whatIDo = d.getElementById(element);
  let skill = 0;

  setInterval(() => {
    $whatIDo.innerHTML = json[skill];
    skill++;
    if (skill >= json.length) {
      skill = 0;
    }
  }, 4000);
}
