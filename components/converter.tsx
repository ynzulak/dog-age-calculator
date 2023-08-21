import { useState } from "react";
import dogSelect from "./pages/dogSelect";
import DogAgeConverter from "./calculations/dogAgeConverter";

function Converter() {
    const [selectedDogIndex, setSelectedDogIndex] = useState(0)
    return (
        <div>
          <dogSelect onIndexChange={setSelectedDogIndex} />
          <DogAgeConverter selectedDogIndex={selectedDogIndex} />
        </div>
      );
}

export default Converter