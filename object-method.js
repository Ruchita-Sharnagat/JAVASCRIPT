const personalDetails = {
    "name": "Ruchita",
    "mobile": 8585858585,
    "full_name": "Ruchita Nandalal Sharnagat",
    "address": "Bhandara tumsar"
}

const accountDetails = {
    accountNo: "74747474747",
    ifsc: "bkid1425"
}
const std = {
    ...personalDetails, ...accountDetails, enrollNo: "11222",
    marks: {
        maths: 50,
        phy: 55,
        getMarks: function () {
            const dataToReturn=this;
            delete dataToReturn.getMarks
            return dataToReturn
        }
    },
    getAccountNo: function () {
        console.log(this)
    }
}



console.log("get mark function call", std.marks.getMarks(),std.full_name);





