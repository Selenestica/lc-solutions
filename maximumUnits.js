const maximumUnits = (boxTypes, truckSize) => {
    let unitsOnTruck = 0;

    boxTypes.sort((a, b) => a[1] - b[1]).reverse();
    for (let i = 0; i < boxTypes.length; i++) {
        let numOfBoxes = boxTypes[i][0];
        let unitsPerBox = boxTypes[i][1];
        if (numOfBoxes >= truckSize) {
            unitsOnTruck += truckSize * unitsPerBox;
            return unitsOnTruck;
        }
        truckSize -= numOfBoxes;
        unitsOnTruck += numOfBoxes * unitsPerBox;
    }
    return unitsOnTruck;
};
