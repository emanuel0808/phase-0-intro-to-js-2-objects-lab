// Write your solution in this file!
const employee = {}


function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newEmployee = {...employee,};
   newEmployee[key] = value;
   return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {employee};
   employee[key] =`Sam`;
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
  delete employee[key]
  return employee 
}
