import { data } from "./data.js";

function getStudentData(stdName) {
    const filterData = data.filter((ele, index) => ele.age === stdName)
    console.log(filterData);
}

getStudentData(21)
