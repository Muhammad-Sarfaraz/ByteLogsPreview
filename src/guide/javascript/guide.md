# Hands on Note for Javascript

#### Data-Types: 
There are 7 data-types as of ECMAScript 2020.
| Data Types  | Examples                                                              |
| ----------- | --------------------------------------------------------------------- |
| `undefined` | A variable that has not been assigned a value is of type `undefined`. |
| `null`      | no value.                                                             |
| `string`    | `'a', 'aa', 'aaa', 'Hello!', '11 cats'`                               |
| `number`    | `12, -1, 0.4`                                                         |
| `boolean`   | `true, false`                                                         |
| `object`    | A collection of properties.                                           |
| `symbol`    | Represents a unique identifier.                                       |

####  ES6 var, let and const:
* Unlike var, let throws an error if you declare the same variable twice.
* Variables declared with const are read-only and cannot be reassigned.
* Objects (including arrays and functions) assigned to a variable using const are still mutable and only prevents the reassignment of the variable identifier.


* Object freeze:
```
let obj = {
  name: "john Abraham Khan",
age: "40",
};

Object.freeze(obj);
```

#### String:
* Concatenation:
  ```
  var str = "One. " + "Two.";
  ```
* Length of a string:
   ```
  "Abraham Khan".length;
  ```

#### Template Literals:
```
var name="John Khan"
const greeting = `Hello, my name is ${name}!
```

#### Array:

###### Declaration and Initialization:
An array can be declared and initialized using square brackets ([]) and can contain any type of values, including other arrays.
Example: ``` let numbers = [1, 2, 3, 4];```

###### Accessing Array Elements:
Array elements can be accessed using zero-based indexing. The index of the first element is 0.
Example: ``` let firstElement = numbers[0];
Array Length:```

###### The length property of an array returns the number of elements in the array.
Example: ```let length = numbers.length;```

###### Modifying Array Elements:
Array elements can be modified by assigning new values to specific indices.
Example: ```numbers[2] = 5;```

###### Array Methods:
* push(): Adds one or more elements to the end of an array.
* pop(): Removes and returns the last element of an array.
* shift(): Removes and returns the first element of an array.
* unshift(): Adds one or more elements to the beginning of an array.
* splice(): Modifies an array by adding, removing, or replacing elements.
* concat(): Joins two or more arrays and returns a new array.
* slice(): Returns a shallow copy of a portion of an array.
* forEach(): Executes a provided function once for each array element.
* map(): Creates a new array by performing a function on each array element.
* filter(): Creates a new array with elements that pass a provided condition.
* find(): Returns the first element in an array that satisfies a provided condition.
* sort(): Sorts the elements of an array in place.
* reverse(): Reverses the order of elements in an array.
Many more methods are available for arrays in JavaScript.

###### Array Iteration:
Arrays can be iterated over using various looping constructs like for, for...of, or array methods like forEach(), map(), etc.
Example using forEach():
```
numbers.forEach(function(element) {
  console.log(element);
});
```
###### Multidimensional Arrays:
Arrays in JavaScript can contain other arrays, allowing the creation of multidimensional arrays.
Example: ``` let matrix = [[1, 2], [3, 4], [5, 6]]; ```


#### Delete a Apecific Item:
* Using splice():
```
let array = [1, 2, 3, 4, 5];
array.splice(indexToDelete, 1); // (Index,number of element to delete)
```
* Using filter():
If it is true (condition) then it will add that item into new array:

```
let array = [
     { id: 1, name: 'Hasan' },
    { id: 2, name: 'Abdul' },
    { id: 3, name: 'Karim' },
];
const specificId = 1;
let filter = array.filter(item => item.id === specificId); // result only a single item will be new array.
```

###### Using map():

```
var watchList = [
  {
    Title: "Inception",
    imdbRating: "8.8",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    imdbRating: "8.6",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    imdbRating: "9.0",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    imdbRating: "7.9",
    Type: "movie",
  },
];

const rating = watchList.map(function (movie) {
  return { title: movie.Title, rating: movie.imdbRating };
});
/* [ { title: 'Inception', rating: '8.8' }, 
  { title: 'Interstellar', rating: '8.6' }, 
  { title: 'The Dark Knight', rating: '9.0' }, 
  { title: 'Batman Begins', rating: '7.9' } ]  */

// or...
const rating = watchList.map((movie) => ({
  title: movie.Title,
  rating: movie.imdbRating,
}));
/* [ { title: 'Inception', rating: '8.8' }, 
  { title: 'Interstellar', rating: '8.6' }, 
  { title: 'The Dark Knight', rating: '9.0' }, 
  { title: 'Batman Begins', rating: '7.9' } ]  */
  
```

* filter() vs map():
The purpose of the map() method is to create a new array by transforming each element of the original array based on a provided function.
Map creates a new array by transforming every element in an array individually. filter creates a new array by removing elements that don't belong.

* Using reduce():
```
const count = [10,20,30];
const sum = count.reduce((oldValue,newValue) => oldValue+newValue); // 60

```
* Copy a object or array to another variable:
```
  let modifiedNames = JSON.parse(JSON.stringify(names)); 
```

* Using find():
It immediately returns the value of that element (that satisfies the condition) if found. Otherwise, returns undefined.
```
const greaterThanZero = numbers.find(function(n) {
  return n > 0;
});
console.log(greaterThanZero);
```


* Objects for Lookups:
```
let name = {
  1:"ABdul",
  2:"Karim",
}
console.log(name[value];
```

* Test Object Properties:
 ```
var myObj = {
  top: "hat",
  bottom: "pants",
};

myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false
  ```

* Accessing Nested Objects:

```
var ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};

ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"
```

* ES6 Destructuring:
```
// destructure the object in a function argument itself.
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
};

// this can also be done in-place:
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
};
```

* ES6 for-of:
```
for (let value of myArray) {
  console.log(value);
}
```

* Immediately Invoked Function Expression or IIFE
```
(function() {
  console.log("Hello! I am a magic car!");
})();
```

* Spread operator "..."
The spread operator ... has been introduced with ES2015 and is used to expand elements of an iterable (like an array) into places where multiple elements can fit.
```
const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e", "f"]; // ["a", "b", "c", "d", "e", "f"]

function myFunc(x, y, ...params) {
  console.log(x);
  console.log(y);
  console.log(params)
}

myFunc("a", "b", "c", "d", "e", "f")
```

* Object properties spreading:
```
const myObj = { x: 1, y: 2, a: 3, b: 4 };
const { x, y, ...z } = myObj; // object destructuring here
console.log(x); // 1
```
* Object property shorthand:
```
const x = 10;
const myObj = { x };
console.log(myObj.x) // 10
```
* Using push():
arr1.push(...arr2) // Adds arr2 items to end of array
arr1.unshift(...arr2) //Adds arr2 items to beginning of array

* using math in array:
let numbers = [9, 4, 7, 1];
Math.min(...numbers); // 1

#### Scope
The context in which values and expressions are "visible," or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use.

#### Localstorage:
LocalStorage is synchronous,localStorage is a type of web storage that allows JavaScript sites and apps to store and access data right in the browser with no expiration date.
* setItem(key, value) – store key/value pair. 
* getItem(key) – get the value by key. 
* removeItem(key) – remove the key with its value.
* clear() – delete everything. 
* key(index) – get the key on a given position. 
* length – the number of stored items. 

#### Module:

###### Export:
```
// Type 01:
const score = function(){
    return 100;
}

export default score;

// Type 02:
const score = 100;
const time = 40s;

export {score, time};
```

###### Import:
* Type 01: Import multiple function:
```
import {score,time} from "./script/top.js";
```
* Type 02: Only import the default function:

 ```
import score from "./script/bar.js";
```
* Type 03: Import every public function from module:

```
import * as board from './score';
```

* Use case:
```
alert(score,time);
alert(score());
```

#### Async-Await:
Async and Await are extensions of promises.
Async: Async functions enable us to write promise based code as if it were synchronous, but without blocking the execution thread.
```
async function firstAsync() {
  return 23;
}

firstAsync().then(alert); // 23
```

Await: The await operator is used to wait for a Promise to complete.
```
async function firstAsync() {
  const data = await getNames();
}

firstAsync();
```

#### ES5:

#### ES6:

#### Util Function:

###### Array to String:
```
arrayToString(value) {
  var string = Object.entries(value);
  var arrayToString = string.map((entry) => entry[1]).join(",");
  return arrayToString;
},
```

###### Scroll To Top:
```
 scrollTop(x = 0, y = 0) {
      window.scrollTo(x, y)
},
```

###### Breadcrum Format [routePate -> Route Path]:
```
// Make pascal to breadcrumb format.
breadcrumbFormat(str) {
      return str.replace(/([A-Z])/g, ' $1').trim();
},
```

###### Ucfirst:
```
// Alternative of php's ucfirst.
ucfirst(str) {
      if (typeof str !== 'string' || str.length === 0) {
          return str;
      }

      return str.charAt(0).toUpperCase() + str.slice(1);
},

```


#### The Array Loop Hole:


###### Push:
```
types() {
  const types = [];
  if (Object.keys(this.designationTypes).length > 0) {
    this.designationTypes.forEach(function (type) {
      types.push({
        name: type.name,
        value: type.value,
      });
    });
  }
  return types;
},
```

#### Networking:

###### xhr :
```
const url = 'https://api.example.com/data';
const data = { username: 'JohnDoe', password: 'secretpassword' };

const xhr = new XMLHttpRequest();
xhr.open('POST', url);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function() {
  if (xhr.status === 200) {
    const responseData = JSON.parse(xhr.responseText);
    // Handle the response data
    console.log(responseData);
  } else {
    // Handle the error
    console.error('Error:', xhr.status);
  }
};

xhr.onerror = function() {
  // Handle any network errors
  console.error('Network Error');
};

xhr.send(JSON.stringify(data));

```

###### Post:
```
const url = 'https://api.example.com/data';
const data = { username: 'JohnDoe', password: 'secretpassword' };

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(responseData => {
    // Handle the response data
    console.log(responseData);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
``` 

###### Get:
```
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the data received from the server
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
```
