import { useState } from "react";

import dogsData from "../dogsData";

function dogIndex (index: number) {



    let dogWeight:number = 0;
 

    if(index == 0){
        dogWeight = 4;
    }else if (index == 1) {
        console.log('piwo');
    }else if (index == 2) {
        dogWeight = 6;
        console.log(dogsData);
    }else if (index == 3) {
        dogWeight = 7;
    }else if (index == 4) {
        dogWeight = 8;
    }
    
}

export default dogIndex