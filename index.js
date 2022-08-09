//This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
var employee = {
  name: "Sam",
  address: "Oloo st",
};

function destructivelyUpdateEmployeeWithKeyAndValue() {
  var employee = {
    name: "Sam",
    streetAddressaddress: "Oloo st",
  };
  console.log(employee);
}
destructivelyUpdateEmployeeWithKeyAndValue();
//destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.'

function updateEmployeeWithKeyAndValue() {
  var clonedemployee = { ...employee };
  employee.address = "11 Broadway";

  console.log(employee.address);
}

updateEmployeeWithKeyAndValue();

//describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
//// it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
//   expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')).to.eql({
///    name: 'Sam',
//    streetAddress: '12 Broadway'
function updateEmployeeWithKeyAndValue() {
  var updatedemployee = { ...employee, streetaddress: "11 Broadway" };
  console.log(updatedemployee);
}
updateEmployeeWithKeyAndValue();

// deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!
function deleteFromEmployeeByKey() {
  var deleteemplotte = {
    ...employee,
    streetadrees: "12 broadway",
    name: "john",
  };
  console.log(deleteFromEmployeeByKey);
}
deleteFromEmployeeByKey();

//destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.

function deleteFromEmployeeByKey() {
  var newemployee = { ...employee };
  delete employee.name.streetAddressaddress;
  if (typeof employee.name.streetAddressaddress === "undefined")
    console.log("name , streetaddress is  undefined");
}
deleteFromEmployeeByKey();
