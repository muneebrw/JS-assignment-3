// // *****alerts*****

// // task 1
// alert("Hello Visitors")

// // task 2
// alert("Error! Please enter a valid password")

// // task 3
// alert("Helcome to Js land.. \nHappy coding!")

// // task 4
// alert("Welcome to JS Land..")

// // task 5
// alert("Happy Coding\nPrevent this page from creating additional dilogs")

// *****variables*****

// // task1
// var username

// // task 2
// var myName = "Muneeb Raza"

// // task 3
// var message = "Hello World!"
// alert(message)

// // task 4
// var bio = ["John Doe","15 years old","Certified Mobile Application Development"]
// for(i=0; i <= 2; i++)
// {
//     alert(bio[i])
// } 

// // task 5
// var j = 4;
// var p = "pizza";
// for(var i = 0; i <= 4; i++)
// {
//     alert(p);
//     p = p.slice(0, j);
//     j--;
// }

// // task 6
// var email = "razamuneeb902@gmail.com"
// alert("my email address is " + email)

// // task 7
// var book =  "A smarter way to learn JavaScript"
// alert("I'm trying to learn from the book " + book)

// // task 8
// document.write("Yah! i can write HTML content through javascript")

// // task 9
// alert(" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ");

// ******variables for numbers*******

// // task 1
// var age = 22;
// alert("I am " + age + " years old")

// // task 2
// var c = document.cookie("username = muneeb; expires=Thu, 5 Jun 2020 12:00:00 UTC; ")
// alert(c)

// // task 3
// var birthYear = 1998
// document.write("My birth year is " + String(birthYear) + " <br/> Data type of my declared variable is " + typeof birthYear)

// // task 4
// var name, prod, quant;
// name = prompt("Enter your name")
// prod = prompt("What product do you want to buy?")
// quant = prompt("Type in product quantity")

// var a = name.charAt(0).toUpperCase()
// var b = name.slice(1, name.length + 1)
// name = a + b
    
// document.write( "<br/><br/>" + name + " ordered " + quant + " " + prod + "(s) on XYZ Clothing Store" )

// ***** var names legal/illegal *****

// // task 1
// var var1, var2, var3;

// // task 2
// var Ali, Paki$tan, bookName, hello_brother, abc123;
// var alert, "Pakistan" , book Name, hello-brother, 123abc;

// // task 3
// document.write("<br> <h1> Rules for naming JS variables </h1><br> Variable names can only contain numbers, $, alphabets, and underscores. For example: $my_1stVariable <br> Variables must begin with a letter, $, or underscore.  For example $name, _name or name <br> Variable names are case sensitive. <br> Variable names should not be JS keywords")

// // ***** maths expression *****

// // task 1
// var a, b
// a = +prompt("Enter 1st number to add")
// b = +prompt("Enter 2nd number to add")
// c = a + b
// document.write("<br>The sum of " + a + " and " + b + " is " + c )

// // task 2

// d = a - b
// document.write("<br>The difference of " + a + " and " + b + " is " + d )


// e = a * b
// document.write("<br>The product of " + a + " and " + b + " is " + e )


// f = a / b
// document.write("<br>The quotient of " + a + " and " + b + " is " + f )


// g = a % b
// document.write("<br>The remainder of " + a + " and " + b + " is " + g )


// // task 3

// var m 
// document.write(" <br> Value after variable declaration is: " + m)

// m = 349
// document.write("<br>Initial value: " + m)

// m++
// document.write("<br>Value after increment is: " + m)

// m += 7
// document.write("<br>Value after addition is: " + m)

// m--
// document.write("<br>Value after decrement is: " + m)

// m = m % 3
// document.write("<br>The remainder is : " + m)

// // task 4

// var cost = 600
// tickets = +prompt("How many tickets do you wanna buy?")
// total = cost * tickets
// document.write("<br> Total cost to buy " + tickets + " tickets to a movie is " + total + " PKR")

// // task 5
// var a, i, m
// a = 9
// for(i = 1; i <= 10; i++){
//     m = a * i 
//     document.write("<br>" + a + " x " + i + " = " + m)
// }

// // task 6

// var c, f
// c = 40
// f = ((c * (9/5)) + 32)
// document.write("<br>" + c + "C is " + f + "F")

// var a,b
// a = 97
// b = ((a - 32) * (5/9))
// document.write("<br>" + a + "F is " + b + "C")

// // task 7

// document.write("<br> <h1> Shopping Cart </h1>")
// var item1 = 650, item2 = 100, qItem1 = 3, qItem2 = 7, sCharges = 100, total 
// total = ((item1*qItem1) + (item2*qItem2) + sCharges)

// document.write("<br>  Price of item 1 is " + item1)
// document.write("<br>  Quantity of item 1 is " + qItem1)
// document.write("<br>  Price of item 2 is " + item2)
// document.write("<br>  Quantity of item 2 is " + qItem2)
// document.write("<br>   Shipping charges " + sCharges)
// document.write("<br><br> Total cost of your order is " + total)

// // task 8
// document.write("<h1> <br> Marks Sheet </h1>")
// var total, obt, perc
// total = 980
// obt = 804
// perc = ((obt/total) * 100)

// document.write("<br> Total Marks: " + total)
// document.write("<br> Obtained Marks: " + obt)
// document.write("<br> Percentage: " + perc + " %")

// // task 9

// var usd = 10
// var usdToPkr = 104.80 * usd

// var r = 25
// var rToPkr = 28 * r

// var total = usdToPkr + rToPkr

// document.write("<br> Total Currency in PKR " + total)

// task 10

// var x = 2
// x = (((x + 5) * 10) / 2)
// document.write("<br>" + x)

// // task 11

// var year = 2020
// var bYear = 1998
// var age = year - bYear

// document.write("<br>" + age)j

// // task 12

// var rad, circ, area
// rad = 20
// circ = (2 * 3.142 * rad)
// area = 3.142 * Math.pow(rad, 2) 

// document.write("<br><h1> Geometrizer </h1> <br> ")
// document.write("<br> Radius of a circle is " + rad)
// document.write("<br> Tbe circumference is: " + circ)
// document.write("<br> The area is: " + area)

// // task 13

// var snk = "tringo"
// var age = 22
// var maxAge = 23
// var amnt = 2
// var x = (maxAge - age) * 365
// var y = x * amnt

// document.write("<br> <h1> Lifetime supply calculator </h1>")
// document.write("<br> Favourite snack: " + snk)
// document.write("<br> Current age: " + age)
// document.write("<br> Estimated maximum age: " + maxAge)
// document.write("<br> Amount of snacks per day: " + amnt)
// document.write("<br> You will need  " + y + " " + snk + " to last you until the ripe old age of " + maxAge)

// ***** maths exp *******

// // task 1

// var a
// a = prompt("Enter a number")

// document.write("<br> Result: ")
// document.write("<br> The value of a is: " + a)
// document.write("<br> .................................. ")
// ++a
// document.write("<br><br> The value of ++a is: " + a)
// document.write("<br> Now the value of a is: " + a)

// document.write("<br><br> The value of a++ is: " + a++)
// document.write("<br> Now the value of a is: " + a)
// --a
// document.write("<br><br> The value of --a is: " + a)
// document.write("<br> Now the value of a is: " + a)

// document.write("<br><br> The value of a-- is: " + a--)
// document.write("<br> Now the value of a is: " + a)

// // task 2

// var a = 2, b = 1
// var result = --a - --b + ++b + b--

// document.write("<br> a is " + a)
// document.write("<br> b is " + b)
// document.write("<br> result is " + result)

// ****** output *****

// --a;                    1
// --a - --b;              1 - 0 = 1
// --a - --b + ++b;        1 + 1 = 2
// --a - --b + ++b + b--;  2 + 1 = 3

// // task 3
// var name = prompt("Enter your username")
// alert("Hello " + name + " Have a good day")

// // task 5

// var num = prompt("Enter a number", 5)
// if(num != null)
// {
//     for(i=1; i <= 10; i++)
//     {
//         ans = num * i
//         document.write("<br>" + num + " X " + i + " = " + ans)
//     }
// }
// else{
//     for(i=1; i <= 10; i++)
//     {
//         ans = num * i
//         document.write("<br>" + num + " X " + i + " = " + ans)
//     }
    
// }

// // task 6

// var a = prompt("Enter 1st subject name")
// var b = prompt("Enter 2nd subject name")
// var c = prompt("Enter 3rd subject name")
// var eachMarks = 100
// var t = eachMarks * 3
// var obt1 = +prompt("Enter 1st subject obtained marks")
// var obt2 = +prompt("Enter 2nd subject obtained marks")
// var obt3 = +prompt("Enter 3rd subject obtained marks")
// var tObt = obt1 + obt2 + obt3
// var per1 = (obt1/eachMarks) * 100, per2 = (obt2/eachMarks) * 100, per3 = (obt3/eachMarks) * 100
// var per = (tObt/t) * 100


// document.write("<br><table>")
// document.write("<tr>")

// document.write("<th>Subject</th>")
// document.write("<th>Total Marks</th>")
// document.write("<th>Obtained Marks</th>")
// document.write("<th>Percentage</th>")

// document.write("</tr>")

// document.write("<tr>")

// document.write("<td>" + a + "</td>")
// document.write("<td>" + eachMarks + "</td>")
// document.write("<td>" + obt1 + "</td>")
// document.write("<td>" + per1 + "</td>")

// document.write("</tr>")

// document.write("<tr>")

// document.write("<td>" + b + "</td>")
// document.write("<td>" + eachMarks + "</td>")
// document.write("<td>" + obt2 + "</td>")
// document.write("<td>" + per2 + "</td>")

// document.write("</tr>")

// document.write("<tr>")

// document.write("<td>" + c + "</td>")
// document.write("<td>" + eachMarks + "</td>")
// document.write("<td>" + obt3 + "</td>")
// document.write("<td>" + per3 + "</td>")

// document.write("</tr>")

// document.write("<tr>")

// document.write("<th></th>")
// document.write("<th>" + t + "</th>")
// document.write("<th>" + tObt + "</th>")
// document.write("<th>" + per + "%</th>")

// document.write("</tr>")

// document.write("<br></table>")


// // ***** user input & conditional statement *****

// // task 1

// var city = prompt("Enter city name ")
// if(city === "Karachi" || city === "karachi")
// {
//     alert("Welcome to City of Lights")
// }

// // task 2

// var gender = prompt("What's your gender? ")
// if(gender === "male")
// {
//     document.write("<br> Good Morning Sir")
// }
// else if(gender === "female")
// {
//     document.write("<br> Good Morning Ma'am")
// }

// // task 3

// var color = prompt("Enter traffic signal color")
// if(color === "red")
// {
//     document.write("<br> Must Stop")
// }
// else if(color === "yellow")
// {
//     document.write("<br> Ready to move")
// }
// else if(color === "green")
// {
//     document.write("<br> Move now")
// }

// // task 4

// var fuel = prompt("Your remaining fuel?")
// if(fuel < 0.25)
// {
//     document.write("<br> Please refill the fuel in your car")

// }
// else{
//     document.write("<br> You have enough fuel")
// }

// // task 5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// // true

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
//  } 

// //  false

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// // 2, 4 true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// // true

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// //    true 

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//     // true

// // task 6
    
// var obt1, obt2, obt3, total, perc, grade, obt, remarks
// obt1 = 40
// obt2 = 40
// obt3 = 84
// obt = obt1 + obt2 + obt3
// total = 300
// perc = (obt/total) * 100
// if(perc >= 80){
//     grade = "A-one"
//     remarks = "Excellent"
// }
// else if(perc >= 70){
//     grade = "A"
//     remarks = "Good"
// }
// else if(perc >= 60){
//     grade = "B"
//     remarks = "You need to improve"
// }
// else if(perc < 60){
//     grade = "Fail"
//     remarks = "Sorry"
// }
// document.write("<br> <h1> Marks Sheet </h1>")
// document.write("<br> Total Marks: " + total)
// document.write("<br> Marks obtained: " + obt)
// document.write("<br> Percentage: " + perc)
// document.write("<br> Grade: " + grade)
// document.write("<br> Remarks: " + remarks)

// // task 7

// var num, a
// num = 7
// a = +prompt("Guess the secret number ")
// if(num === a)
// {
//     document.write("bingo")
// }
// else if(num === a+1 || num === a-1)
// {
//     document.write("Close enough to the correct answer")
// }
// else{
//     document.write("try again")   
// }

// // task 8

// var a, b
// a = prompt("enter number")
// if(a % 3 == 0)
// {
//     document.write("<br>" + a + " is divisible by 3 ")
// }
// else{
//     document.write("<br>" + a + " is not divisible by 3 ")   
// }

// // task 9

// var a
// a = prompt("enter number")
// if(a % 2 == 0)
// {
//     document.write("<br> Even number")
// }
// else{
//     document.write("<br> Odd number")
// }

// // task 10

// var t
// t = prompt("enter temperature ")
// if(t > 40)
// {
//     document.write("<br> It is too hot outside ")
// }
// else if(t > 30)
// {
//     document.write("<br> The Weather today is Normal ")   
// }
// else if(t > 20)
// {
//     document.write("<br> Today’s Weather is cool ")      
// }
// else if(t > 10)
// {
//     document.write("<br> OMG! Today’s weather is so Cool ")   
// }

// // task 11

// var a, b , c
// a = +prompt("Enter 1st number")
// b = +prompt("Enter 2nd number")
// c = prompt("Enter operator")
// if(c === "+")
// {
//     ans = a + b
//     document.write("<br> " + ans)
// }
// if(c === "-")
// {
//     ans = a - b
//     document.write("<br> " + ans)
// }
// if(c === "*")
// {
//     ans = a * b
//     document.write("<br> " + ans)
// }
// if(c === "/")
// {
//     ans = a / b
//     document.write("<br> " + ans)
// }
// if(c === "%")
// {
//     ans = a % b
//     document.write("<br> " + ans)
// }

// // chap 12-13

// // task 1

// var ch,code, i
// ch = prompt("enter something ")
// code = ch.charCodeAt(0)
// document.write("<br>ASCII Code is " + code)
// for(i = 65; i <= 90; i++)
// {
//     if(Number(code) == Number(i))
//    { document.write("<br> Character is uppercase " )}
   
// }
// for(i = 97; i <= 122; i++)
// {
//     if(Number(code) == Number(i))
//     {document.write("<br> Character is lowercase " )}
    
// }

// task 2

// var a,b
// a = +prompt("Enter 1st number ")
// b = +prompt("Enter 2nd number ")

// if(a > b)
// {
//     document.write("<br>" + a + " is larger")
// }

// else if(a < b)
// {
//     document.write("<br>" + b + " is larger")
// }

// else if(a = b)
// {
//     document.write("<br>" + a + " and " + b + " are equal")
// }

// // task 3

// var a
// a = +prompt("enter number ")

// if(a < 0)
// {
//     document.write("<br>" + a + " is negative")
// }

// else if(a > 0)
// {
//     document.write("<br>" + a + " is positive")
// }

// if(a == 0)
// {
//     document.write("<br>" + a + " is zero")
// }

// // task 4

// var v = prompt("enter an alphabet ")
// if(v === 'a')
// {
//     document.write("<br> it is a vowel")
// }
// else if(v === 'e')
// {
//     document.write("<br> it is a vowel")
// }
// else if(v === 'i')
// {
//     document.write("<br> it is a vowel")
// }
// else if(v === 'o')
// {
//     document.write("<br> it is a vowel")
// }
// else if(v === 'u')
// {
//     document.write("<br> it is a vowel")
// }
// else
// {
//     document.write("<br> it's not a vowel")
// }

// // task 5

// var a, b
// b = "789HelloDear$99"
// a = prompt("enter password ",)
// if(a === b)
// {
//     document.write("<br> correct password")
// }
// else if(a !== b && a !== "")
// {
//     document.write("<br> wrong password")
// }

// else if(a === "")
// {
//     document.write("<br> please enter password")
// }

// // task 6

// var greetingDay = 'Good Day', greetingEve = 'Good Evening'
// var hour = 19;
// if (hour < 18) 
// {
//     document.write("<br>" + greetingDay)
// }
// else
// {
//     document.write("<br>" + greetingEve)
// }

// // task 7

// var t
// t = prompt("enter time ")
// if(t >= 0000 && t < 1200)
// {
//     document.write("<br>Good Morning " )
// }
// else if(t >= 1200 && t < 1700)
// {
//     document.write("<br>Good Afternoon " )
// }
// else if(t >= 1700 && t < 2100)
// {
//     document.write("<br>Good Evening " )
// }
// else if(t >= 2100 && t <= 2359)
// {
//     document.write("<br>Good Night " )
// }

// // chap 14-16

// // task 1

// var arr = []

// // task 2

// var arr = {}

// // task 3

// var words = ["hello", "knowledge", "bug bounty", "bitcoin"]

// // task 4

// var numb = [786, 555, 007, 2020]

// // task 5

// var bool = [true, false]

// // task 6

// var mixx = ["bond", 007, true, 'access granted']

// // task 7

// var qual = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'], a = 1

// document.write("<br> <h1> Qualifications: </h1>")
// for(i = 0; i < qual.length; i++)
// {
//     document.write("<br>" + a + ") " + qual[i])   
//     a++
// }

// // task 8

// var std, scr, t, i
// std = ['Muneeb', 'Brian', 'Harry']
// scr = [320, 230, 480]
// t = 500
// for(i = 0; i < 3; i++)
// {
//     document.write("<br>Score of " + std[i] + " is " + scr[i] + ".Percentage: " + (scr[i]/t)*100 + "%")
// }

// // task 9

// var col, col2, col3
// col = ["yellow", "green", "blue"]
// document.write("<br>" + col)

// col2 = prompt("add color to beginning")
// col.unshift(col2)
// document.write("<br>" + col)

// col3 = prompt("add color to end")
// col.push(col3)
// document.write("<br>" + col)

// col.unshift('orange', 'brown')
// document.write("<br>" + col)

// col.shift()
// document.write("<br>" + col)

// col.pop()
// document.write("<br>" + col)

// col[2] = prompt("enter color to specific index ")
// document.write("<br>" + col)

// ind = prompt("enter specific index to del color ")
// delete col[ind]
// document.write("<br>" + col)

// // task 10

// var score, 
// score = [320, 230, 480, 120]
// document.write("<br> Scores of students " + score)
// for(i = 0; i < score.length; i++)
// {
//     for(j = i+1; j < score.length; j++)
//     {
//         if(score[i] > score[j])
//         {
//             temp = score[j]
//             score[j] = score[i]
//             score[i] = temp
//         }
//     }   
// }
// document.write("<br> Ordered Scores of students " + score)

// // task 11

// var cities, sCit
// cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// sCit = cities.slice(2, 4)
// document.write("<br> Cities list <br>" + cities)
// document.write("<br> Selected cities list <br>" + sCit)

// task 12

// var arr
// arr = ['This ', ' is ', ' my ', ' cat ']

// document.write("<br>array <br>" + arr)
// document.write("<br>string <br>" + arr[0] + arr[1] + arr[2] + arr[3])

// // task 13

// var d = ['keyboard', 'mouse', 'printer', 'monitor']
// document.write("<br>devices: <br>" + d + "<br>")
// for(i = 0; i < d.length; i++)
// document.write("<br>out: <br>" + d[i])

// // task 14

// var d = ['keyboard', 'mouse', 'printer', 'monitor']
// document.write("<br>devices: <br>" + d + "<br>")
// for(i = (d.length-1); i >= 0; i--)
// document.write("<br>out: <br>" + d[i])

// // task 15

// var ph
// ph = ['Apple', 'Samsung', 'Motorolla', 'Nokia', 'Sony', 'Haier']

// document.write('<br> <select name="company"')

// for(i = -1; i < ph.length; i++)
// {
// document.write('<option value="' + ph[i] + '">')
// document.write(ph[i]) 
// document.write('</option>')
// }

// document.write('</select>')

// chap 17-20

// // task 1

// var arr
// arr = [
//     [],
//     [],
//     []
// ]

// // task 2

// var ar
// ar = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// for(i = 0; i < 3; i++)
// {
//     for(j = 0; j <= 3; j++)
//     {
//         document.write(ar[i][j] + " ")
//     }
//     document.write('<br>')
// }

// // task 3

// for(var i = 1; i<=10; i++)
// {
//     document.write("<br>" + i)
// }

// // task 4

// var len, num
// num = +prompt("enter number of which you want table ")
// len = +prompt("enter length of table ")
// for(i = 1; i <= len ; i++)
// {
//     document.write("<br>" + num + " x " + i + " = " + num*i)   
// }

// // task 5

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for(i = 0; i < fruits.length; i++)
// {
//     document.write("<br>" + fruits[i])
// }

//     document.write("<br>")

// for(i = 0; i < fruits.length; i++)
// {
//     document.write("<br>Element at index " + i + " is " + fruits[i])
// }

// // task 6

// document.write("<br>Counting: <br><br>")
// for(i = 1; i <= 15; i++)
// {
//     document.write(i + ", ")   
// }

// document.write("<br><br>Reverse Counting: <br><br>")
// for(i = 10; i >= 1; i--)
// {
//     document.write(i + ", ")   
// }

// document.write("<br><br>Even: <br><br>")
// for(i = 0; i <= 20; i++)
// {
//     if(i%2==0)
//     document.write(i + ", ")   
// }

// document.write("<br><br>Odd: <br><br>")
// for(i = 0; i <= 20; i++)
// {
//     if(i%2!=0)
//     document.write(i + ", ")   
// }

// document.write("<br><br>Series: <br><br>")
// for(i = 2; i <= 20; i++)
// {
//     if(i%2==0)
//     document.write(i + "k, ")   
// }

// // task 7

// var a,b,i, m = 'no'
// a = ["cake", "apple pie", "cookie", "chips", "patties"]
// b = prompt("search your item ")
// for(i = 0; i < a.length; i++)
// {
//     if(a[i] == b)
//     {
//         m = 'yes'
//         document.write("<br>" + b + " is available at index " + i + " in our bakery")
//         break
//     }
    
// }
// if(m === 'no')
// document.write("<br>sorry! " + b + " is not available in our bakery")
        
// // task 8

// var A, max, i, j
// A = [24, 53, 78, 91, 12]
// for(i=0; i<A.length; i++)
// {
//     for(j = i+1; j < A.length; j++ )
//     {
//         if(A[i] < A[j] || max < A[j])
//         {
//             max = A[j]
//         }
//     }
// }    
//     document.write("<br>Array items: " + A) 
//     document.write("<br>Largest number: " + max)

// // task 9

// var A, min, i, j
// A = [24, 53, 78, 91, 12]
// for(i=0; i<A.length; i++)
// {
//     for(j = i+1; j < A.length; j++ )
//     {
//         if(A[i] > A[j] || min > A[j])
//         {
//             min = A[j]
//         }
//     }
// }   
//     document.write("<br>Array items: " + A) 
//     document.write("<br>Smallest number: " + min)

// // task 10

// var n = 5
// for(i = 1; i <= 20; i++)
// {
//     a = n*i
//     document.write(a + ", ")
// }
