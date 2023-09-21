const dogYearsInput = (e: { target: { value: any; }; }, ageStage: (arg0: number) => void) => {
    const inputValue = e.target.value;
    if (inputValue.trim() !== '') {
      const parsedValue = parseFloat(inputValue);
      if (!isNaN(parsedValue)) {
        ageStage(parsedValue);
      } else {
        ageStage(0);
      }
    } else {
      ageStage(0);
    }
  }

  export default dogYearsInput