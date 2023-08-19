
import dogsData from "../dogsData";

function dogIndex (index: number) {

    let dogWeight = 4;
 
    for (let index = 0; index < dogsData.length; index++) {
      console.log(`Element[${index}] - Waga psa: ${dogWeight}`);
      dogWeight + 1;
    }

if(index == 0){
    console.log(dogWeight);
}else if (index == 2) {
    console.log('siema');
}
    
}

export default dogIndex