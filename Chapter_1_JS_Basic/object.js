// ví dụ object
var person = {
    firstName: 'Linh',
    lastName: 'Hoang Thuy',
    showName: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

console.log(person);


// Khởi tạo object
// Cách 1 : Object literal
var person1 = {
    firstName: 'Linh',
    lastName: 'Hoang Thuy',
    showName: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

console.log(person1);

// Cách 2 : Object constructor
var psn = new Object();
psn.firstName = 'Linh';
psn.lastName = 'Hoang Thuy';
psn.showName = function() {
    console.log(this.firstName + ' ' + this.lastName);
};

console.log(psn);
