const person = {
    name: 'pan',
    school: { class: "1班" }
}
function clone(obj) {
    let newObj = {}
    // 遍历对象
    for (const key in obj) {
        newObj[key] = obj[key];
    }
    return newObj;
}

let newPerson = clone(person);
console.log(newPerson);//{ name: 'pan', school: { class: '1班' } }

newPerson.name = "zhang";
newPerson.school.class = "2班";

console.log(person); //{ name: 'pan', school: { class: '2班' } }
console.log(newPerson); //{ name: 'zhang', school: { class: '2班' } }
