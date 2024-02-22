const person = {
    name: 'pan',
    school: { class: "1班" }
}

function clone(obj) {
    if (typeof (obj) === "object") {

        let newObj = {}
        // 遍历对象
        for (const key in obj) {
            newObj[key] = clone(obj[key]);
        }
        return newObj;
    } else {
        return obj;
    }
}

let newPerson = clone(person);
console.log(newPerson);
newPerson.name = "zhang";
newPerson.school.class = "2班";
