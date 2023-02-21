export const serviceTypes = [{ name: "Select", value: "" }, { name: "Special", value: "Special" }, { name: "No Passengers", value: "NoPassengers" }, { name: "Normal", value: "Normal" }, { name: "Unknown", value: "Unknown" }];
export const lineCodeTypes = [{ name: "Select", value: "" }, { name: "null", value: null }, { name: "Red", value: "RD" }, { name: "Blue", value: "BL" }, { name: "yellow", value: "YL" }, { name: "Orange", value: "OR" }, { name: "Green", value: "GR" }, { name: "Silver", value: "SV" }];
export const carCounts = [{ name: "Select", value: "" }, { name: "0", value: "0" }, { name: "1", value: "1" }, { name: "2", value: "2" }, { name: "3", value: "3" }, { name: "4", value: "4" }, { name: "5", value: "5" }, { name: "6", value: "6" }, { name: "7", value: "7" }, { name: "8", value: "8" }, { name: "9", value: "9" }]
export const getBackgroundColor = (value) => {
    let color;
    if (value == "") {
        color = '';
    } else if (value == null) {
        color = 'white';
    } else if (value == "RD") {
        color = 'red';
    } else if (value == "OR") {
        color = 'orange';
    } else if (value == "YL") {
        color = 'yellow';
    } else if (value == "GR") {
        color = 'lightGreen';
    }
    else if (value == "BL") {
        color = 'lightBlue';
    }
    else if (value == "SV") {
        color = 'lightGrey';
    }
    return color;
};
export const getBorderRadius = (value) => {
    let borderRadius;
    if (value == "Normal") {
        borderRadius = "15px"
    } else if (value == "NoPassengers") {
        borderRadius = "5px 90px"
    } else if (value == "Special") {
        borderRadius = "15px 50px 30px 5px"
    } else if (value == "Unknown") {
        borderRadius = ""
    }
    return borderRadius;
};