(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{296:function(e,a,t){"use strict";t.r(a);var n=t(14),r=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"a-hands-on-guide-to-python-programming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-hands-on-guide-to-python-programming"}},[e._v("#")]),e._v(" A Hands-On Guide to Python Programming")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Written by Sarfaraz Muhammad Sajib")])]),e._v(" "),a("li",[a("p",[e._v("Table of Contents")]),e._v(" "),a("ul",[a("li",[e._v("Python Basics")]),e._v(" "),a("li",[e._v("Working with Data")]),e._v(" "),a("li",[e._v("Object-Oriented Programming (OOP)")]),e._v(" "),a("li",[e._v("Python Libraries and Frameworks")]),e._v(" "),a("li",[e._v("Best Practices and Tips for Python Development")]),e._v(" "),a("li",[e._v("Resources for Further Learning")])])])]),e._v(" "),a("h4",{attrs:{id:"exception-handling-and-debugging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exception-handling-and-debugging"}},[e._v("#")]),e._v(" Exception Handling and Debugging:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Exception handling is done mostly with try-except blocks\ntry:\n    # Some code\nexcept <error_one>:\n    # Run this code ONLY if an exception for <error_one> is thrown\nexcept <error_two> as err:\n    print(err) # Print the error ONLY if <error_two> is thrown\nexcept:\n    # Wildcard error. Run this code ONLY if an exception unaccounted for is thrown\n    \n# You can also use else in try-except blocks!\ntry:\n    # Some code\nexcept:\n    # Wildcard error handler\nelse:\n    # Run if no errors were thrown AFTER running the code protected by the try block\n")])])]),a("h4",{attrs:{id:"strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strings"}},[e._v("#")]),e._v(" Strings:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Hello_string = "I am AN_Python, and while I can talk, I also Smile!"\n\n# Slice strings!\nHello_string[0:4] # Returns first 4 characters! "I am"\nHello_string[-5:] # Returns last 5 characters! "Smile!"\nHello_string[:-5] # Returns everything UNTIL the last 5 characters!\n\n# Join strings\nHello_string[:-5] + "Smile!"\n# Output: I am metyhlPython, and while I can talk, I also Smile!\n')])])]),a("h4",{attrs:{id:"print"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#print"}},[e._v("#")]),e._v(" Print:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('print("Hello")\n# Output: Hello\n\nprint("Hello","Rar") # Comma appends with a space between each by default!\n# Output: Hello Rar\n\nprint("Helloaw","Rar",sep=", ") # You can change this default though!\n# Output: Hello, Rar\n\nprint("Hello\\nRar") # \\n is a newline character!\n\'\'\' Output:\nHello\nRar\n\'\'\'\n\nprint("a" * 5) # You can multiply!\n# Output: aaaaa\n')])])]),a("h4",{attrs:{id:"using"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using"}},[e._v("#")]),e._v(" Using %:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# % example\n\nPython = "AN_Python"\nprint("%s %s %s" % ("Hi!", "I am", Python))\n# Output: Hi! I am AN_Python\n# %.<decimals>f - Floating point numbers with a fixed amount of digits to the right of the dot.\n\n# With dictionaries\nmy_dict = {"Pythons":"Pythons", "are":"are", "the":"the", "best":"best! Yeah!"}\nprint("%(Pythons)s %(are)s %(the)s %(best)s" % (my_dict))\n# Output: Pythons are the best! Yeah!\n')])])]),a("h4",{attrs:{id:"importing-a-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-a-module"}},[e._v("#")]),e._v(" Importing A Module")]),e._v(" "),a("ul",[a("li",[e._v("Importing a module:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import math\n")])])]),a("ul",[a("li",[e._v("Importing specific names from a module:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("from math import sqrt, pi\n")])])]),a("ul",[a("li",[e._v("Importing a module with an alias:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import numpy as np\n")])])]),a("ul",[a("li",[e._v("Importing all names from a module:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("from math import *\n")])])]),a("h4",{attrs:{id:"variables-and-data-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables-and-data-types"}},[e._v("#")]),e._v(" Variables and Data Types:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Integer variable\nage = 25\n\n# Float variable\ntemperature = 98.6\n\n# String variable\nname = "John Doe"\n\n# Boolean variable\nis_active = True\n\n# List variable\nfruits = ["apple", "banana", "orange"]\n\n# Tuple variable\npoint = (3, 4)\n\n# Dictionary variable\nperson = {"name": "Alice", "age": 30}\n\n')])])]),a("h4",{attrs:{id:"control-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#control-flow"}},[e._v("#")]),e._v(" Control flow:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# if-elif-else statement\nx = 10\nif x > 0:\n    print("Positive")\nelif x < 0:\n    print("Negative")\nelse:\n    print("Zero")\n\n# for loop\nfruits = ["apple", "banana", "orange"]\nfor fruit in fruits:\n    print(fruit)\n\n# while loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\n# break and continue\nfor i in range(10):\n    if i == 3:\n        break\n    if i == 1:\n        continue\n    print(i)\n\n')])])]),a("h4",{attrs:{id:"function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[e._v("#")]),e._v(" Function:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Function with parameters and return value\ndef add_numbers(a, b):\n    return a + b\n\nresult = add_numbers(3, 5)\nprint(result)  # Output: 8\n\n# Function with default parameter value\ndef greet(name="Guest"):\n    print("Hello, " + name)\n\ngreet()          # Output: Hello, Guest\ngreet("Alice")   # Output: Hello, Alice\n\n# Function with docstring\ndef square(number):\n    """\n    Returns the square of a number.\n    """\n    return number ** 2\n\nprint(square(4))  # Output: 16\nprint(square.__doc__)  # Output: Returns the square of a number.\n\n')])])]),a("h4",{attrs:{id:"modules-and-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-and-packages"}},[e._v("#")]),e._v(" Modules and Packages:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import math\n\nradius = 5\narea = math.pi * math.pow(radius, 2)\nprint(area)  # Output: 78.53981633974483\n")])])]),a("ul",[a("li",[e._v("File I/O:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('file_path = "my_file.txt"\n\nwith open(file_path, "r") as file:\n    content = file.read()\n    print(content)\n')])])]),a("h4",{attrs:{id:"object-oriented-programming-oop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-oriented-programming-oop"}},[e._v("#")]),e._v(" Object-Oriented Programming (OOP):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class Rectangle:\n    def __init__(self, length, width):\n        self.length = length\n        self.width = width\n\n    def area(self):\n        return self.length * self.width\n\n# Creating objects\nrectangle1 = Rectangle(5, 3)\nrectangle2 = Rectangle(4, 6)\n\n# Accessing object properties and methods\nprint(rectangle1.length)    # Output: 5\nprint(rectangle2.area())    # Output: 24\n")])])]),a("h4",{attrs:{id:"type-casting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-casting"}},[e._v("#")]),e._v(" Type casting:")]),e._v(" "),a("p",[e._v("Int:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('num_str = "123"\nnum_int = int(num_str)\n')])])]),a("p",[e._v("Float:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('num_str = "3.14"\nnum_float = float(num_str)\n')])])]),a("p",[e._v("String:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("num_int = 123\nnum_str = str(num_int)\n")])])]),a("h3",{attrs:{id:"advance-data-typs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advance-data-typs"}},[e._v("#")]),e._v(" Advance Data Typs:")]),e._v(" "),a("h4",{attrs:{id:"tupeles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tupeles"}},[e._v("#")]),e._v(" Tupeles:")]),e._v(" "),a("ul",[a("li",[e._v("Tuples are typically used to store a collection of related values as a single entity.")]),e._v(" "),a("li",[e._v("Tuples are ordered and immutable sequences of elements.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('person = ("John", 25, "New York")\n')])])]),a("h4",{attrs:{id:"dictionaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dictionaries"}},[e._v("#")]),e._v(" Dictionaries:")]),e._v(" "),a("ul",[a("li",[e._v("Dictionaries are unordered collections of key-value pairs.")]),e._v(" "),a("li",[e._v("Dictionaries are enclosed in curly braces { } or can be created using the dict() constructor.")]),e._v(" "),a("li",[e._v("Dictionaries provide efficient look-up based on keys.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('person = {"name": "John", "age": 25, "city": "New York"}\n')])])]),a("h4",{attrs:{id:"sets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sets"}},[e._v("#")]),e._v(" Sets:")]),e._v(" "),a("ul",[a("li",[e._v("Sets are unordered collections of unique elements.")]),e._v(" "),a("li",[e._v("Sets are enclosed in curly braces { } or can be created using the set() constructor.")]),e._v(" "),a("li",[e._v("Sets automatically remove duplicate elements, and they do not preserve the order of insertion.")]),e._v(" "),a("li",[e._v("Sets provide operations like union, intersection, difference, and more.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('fruits = {"apple", "banana", "orange"}\n')])])]),a("h4",{attrs:{id:"python-libraries-and-frameworks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-libraries-and-frameworks"}},[e._v("#")]),e._v(" Python Libraries and Frameworks:")]),e._v(" "),a("p",[e._v("Let us see some example with python module/framework:")]),e._v(" "),a("ul",[a("li",[e._v("Flask")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("from flask import Flask\n\napp = Flask(__name__)\n\n@app.route('/')\ndef hello_world():\n    return 'Hello, World!'\n\nif __name__ == '__main__':\n    app.run()\n")])])]),a("ul",[a("li",[e._v("NumPy")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import numpy as np\n\n# Create a NumPy array\narr = np.array([1, 2, 3, 4, 5])\n\n# Perform array operations\nprint("Original Array:", arr)\nprint("Array Shape:", arr.shape)\nprint("Array Size:", arr.size)\nprint("Array Data Type:", arr.dtype)\nprint("Array Sum:", arr.sum())\nprint("Array Mean:", arr.mean())\nprint("Array Max Value:", arr.max())\nprint("Array Min Value:", arr.min())\nprint("Array Square Root:", np.sqrt(arr))\nprint("Array Squared:", np.square(arr))\n\n# Perform mathematical computations\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\nprint("Element-wise Sum:", np.add(a, b))\nprint("Element-wise Product:", np.multiply(a, b))\nprint("Dot Product:", np.dot(a, b))\nprint("Cross Product:", np.cross(a, b))\n\n# Reshape an array\nc = np.array([1, 2, 3, 4, 5, 6])\nreshaped = c.reshape(2, 3)\nprint("Reshaped Array:")\nprint(reshaped)\n\n')])])]),a("h4",{attrs:{id:"best-practices-and-tips-for-python-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-and-tips-for-python-development"}},[e._v("#")]),e._v(" Best Practices and Tips for Python Development:")]),e._v(" "),a("ul",[a("li",[e._v("Coding Style:\n"),a("ul",[a("li",[e._v("Follow PEP 8")]),e._v(" "),a("li",[e._v("Use Meaningful Variable and Function Names")]),e._v(" "),a("li",[e._v("Handle Exceptions Properly")]),e._v(" "),a("li",[e._v("Write Modular and Reusable Code")]),e._v(" "),a("li",[e._v("Comment and Document Your Code")])])])]),e._v(" "),a("h4",{attrs:{id:"resources-for-further-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources-for-further-learning"}},[e._v("#")]),e._v(" Resources for Further Learning :")]),e._v(" "),a("ul",[a("li",[e._v("VScode Extension:\n"),a("ul",[a("li",[e._v("Python")]),e._v(" "),a("li",[e._v("Pylance")]),e._v(" "),a("li",[e._v("Visual Studio IntelliCode")]),e._v(" "),a("li",[e._v("AutoDocstring")])])])]),e._v(" "),a("h3",{attrs:{id:"total-data-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#total-data-types"}},[e._v("#")]),e._v(" Total Data Types:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Numeric Types:")]),e._v(" "),a("ul",[a("li",[e._v("int")]),e._v(" "),a("li",[e._v("float")]),e._v(" "),a("li",[e._v("complex")])])]),e._v(" "),a("li",[a("p",[e._v("Sequence Types:")]),e._v(" "),a("ul",[a("li",[e._v("str")]),e._v(" "),a("li",[e._v("bytes")]),e._v(" "),a("li",[e._v("bytearray")]),e._v(" "),a("li",[e._v("list")]),e._v(" "),a("li",[e._v("tuple")]),e._v(" "),a("li",[e._v("range")])])]),e._v(" "),a("li",[a("p",[e._v("Mapping Type:")]),e._v(" "),a("ul",[a("li",[e._v("dict")])])]),e._v(" "),a("li",[a("p",[e._v("Set Types:")]),e._v(" "),a("ul",[a("li",[e._v("set")]),e._v(" "),a("li",[e._v("frozenset")])])]),e._v(" "),a("li",[a("p",[e._v("Boolean Type:")]),e._v(" "),a("ul",[a("li",[e._v("bool")])])]),e._v(" "),a("li",[a("p",[e._v("None Type:")]),e._v(" "),a("ul",[a("li",[e._v("None")])])]),e._v(" "),a("li",[a("p",[e._v("Date and Time Types (modules):")]),e._v(" "),a("ul",[a("li",[e._v("datetime")]),e._v(" "),a("li",[e._v("time")]),e._v(" "),a("li",[e._v("calendar")])])]),e._v(" "),a("li",[a("p",[e._v("Mathematical Functions (module):")]),e._v(" "),a("ul",[a("li",[e._v("math")])])]),e._v(" "),a("li",[a("p",[e._v("Decimal Type (module):")]),e._v(" "),a("ul",[a("li",[e._v("decimal")])])]),e._v(" "),a("li",[a("p",[e._v("Fraction Type (module):")]),e._v(" "),a("ul",[a("li",[e._v("fractions")])])]),e._v(" "),a("li",[a("p",[e._v("Regular Expressions (module):")]),e._v(" "),a("ul",[a("li",[e._v("re")])])]),e._v(" "),a("li",[a("p",[e._v("File and Directory Access (modules):")]),e._v(" "),a("ul",[a("li",[e._v("os")]),e._v(" "),a("li",[e._v("os.path")]),e._v(" "),a("li",[e._v("glob")])])]),e._v(" "),a("li",[a("p",[e._v("Command Line Arguments (module):")]),e._v(" "),a("ul",[a("li",[e._v("sys")])])]),e._v(" "),a("li",[a("p",[e._v("Console Input and Output (module):")]),e._v(" "),a("ul",[a("li",[e._v("input")]),e._v(" "),a("li",[e._v("print")])])]),e._v(" "),a("li",[a("p",[e._v("Type Functions and Type Checking:")]),e._v(" "),a("ul",[a("li",[e._v("type")]),e._v(" "),a("li",[e._v("isinstance")])])]),e._v(" "),a("li",[a("p",[e._v("Iterator Types (module):")]),e._v(" "),a("ul",[a("li",[e._v("iter")]),e._v(" "),a("li",[e._v("next")])])]),e._v(" "),a("li",[a("p",[e._v("Enumerations (module):")]),e._v(" "),a("ul",[a("li",[e._v("enum")])])]),e._v(" "),a("li",[a("p",[e._v("Data Compression and Archiving (modules):")]),e._v(" "),a("ul",[a("li",[e._v("zlib")]),e._v(" "),a("li",[e._v("gzip")]),e._v(" "),a("li",[e._v("zipfile")])])]),e._v(" "),a("li",[a("p",[e._v("Cryptographic Services (module):")]),e._v(" "),a("ul",[a("li",[e._v("hashlib")])])]),e._v(" "),a("li",[a("p",[e._v("JSON Encoding and Decoding (module):")]),e._v(" "),a("ul",[a("li",[e._v("json")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);