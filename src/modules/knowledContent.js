
const d = document;

const displayStars = (porcentage=>{
    let stars =Math.round( porcentage / 10);
    let starsDisplay = "";
    for (let i=0; i < 10; i++){
      if(i < stars){
        starsDisplay+= "⭐"
      }else{
        starsDisplay+= "★"
      }
    }

    return starsDisplay;
});

const getKnowled = (data, selectedTab, $knowleds)=>{

    $knowleds.innerHTML ="";

    const $fragment = document.createDocumentFragment();

    data = Array.from(data);

    data.forEach(el =>{
  
        if(el.type === selectedTab){

            let element =  d.createElement("li");
            element.innerHTML="<span>"+ el.name+"</span>" + "<span class='star'>" + displayStars(el.porcentage)+"</span>";
            $fragment.appendChild(element);
        }
    });

    $knowleds.appendChild($fragment);
}

export default getKnowled;