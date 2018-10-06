webpackJsonp([40172022505595],{385:function(e,t){e.exports={data:{markdownRemark:{html:'<hr>\n<p>path: "/visual-basic-introduction-[guess-my-number]"\ntitle: "Visual Basic Introduction [Guess My Number]"\npublished: true\ndate: "08-09-2018" </p>\n<hr>\n<p>In this tutorial, we will learn how to program using Visual Basic, by making a Windows Forms application that allows the user to guess a randomly generated number. This tutorial is intended for people who have written less than a hundred lines of code (and anyone else who wishes to read). </p>\n<p>I assume you know how to create a Visual Basic Windows Forms application and run your project via Visual Studio. Windows Forms is tool programmers can use to make [desktop] applications that involve a graphical user interface. You may be aware that Visual Studio offers a Form Designer but I have deliberately chosen not to use that. </p>\n<p>You can view the code of your form by double-clicking on it from within the Form Designer. Immediately you will see: </p>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb">Public Class Form1\n    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load\n\t\n    End Sub\nEnd Class</code></pre>\n      </div>\n<h1>The Language Of Computers</h1>\n<p>Visual Basic is what is known as a high-level language - this means that it is close to English. The computer does not understand English, it only understands what is referred to as "1s" and "0s" [binary or machine code]. But since it is tedious to program using such machine code - we make use of three programs (a program is just a section of code). Program one is Visual Basic - the programming language that humans can interpret quickly, program two is a program which transforms our Visual Basic into the tedious code [machine code] that computers understand. And program three is the text-editor we use to produce the Visual Basic code - in our case: Visual Studio. Computer code is an instruction - and a program is a set of instructions. </p>\n<h1>Object Oriented</h1>\n<p>Visual Basic uses a coding style called "object-oriented". This simply just means that code can be split into components which are called "objects". To create an object, we need a class - a class is a template or blueprint for what an object should look like. </p>\n<p>Objects can control other objects, in our application, the master object is our form - this controls everything in our application. </p>\n<h1>Variables</h1>\n<p>A variable can be used to store information - we want our master object (the form) to have access to these variables so we must first tell the computer that they will be needed, note that we are not actually giving them information yet - this is called a "declaration". And looks something like the following in Visual Basic. </p>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb">Public Class Form1\n    Private textbox As TextBox\n    Private randomNumber As Integer\n    Private prevNumber As Integer\n    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load\n    End Sub\nEnd Class</code></pre>\n      </div>\n<p>The private keyword does not matter much here, but later on, if we only wanted the object we give the variable to have access to the given variable, then we would use the private keyword. Visual Basic makes use of something known as "types", a type is just a type of data - there are many different types of data, in our code, we make use of the integer (whole number) data type - this means that this variable expects an integer and no other type. We can also store objects in variables [here is an example of composition, but don\'t worry about this term yet], The TextBox is a Windows Forms object, and all it is is an input box that text can be entered into. </p>\n<h1>Sub Procedures</h1>\n<p>A sub procedure is just a miniature program inside our program. It accomplishes a precise task and is used to make code reusable. </p>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb">    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load\n\t&#39; I have loaded \nEnd SUb </code></pre>\n      </div>\n<h1>Events</h1>\n<p>We are using something called event-driven program (as well as object-0oriented). This just means that some of our code will only occur if specified events happen. An example of an event is a click of the mouse, a key press etcetera. Later on, we will use the "text-changed" event. </p>\n<p>Events are represented as subprocedures. The "Form1_Load" is an event, and thus a sub procedure, that will run code when the form has loaded. </p>\n<h1>Parameters / Arguments</h1>\n<p>Subprocedures can have data passed into them, this data can be anything so long as it is a valid data type (or abstract data type). In the case of our form load event, the data this event expects is a sender which is of type object - I will touch on this later. Variables can also be passed into subprocedures - the subprocedure can then use this variable to complete its task. </p>\n<h1>Storing Information In Variables</h1>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb">    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load\n        randomNumber = CInt(Math.Ceiling(Rnd() * 9))\n        prevNumber = randomNumber\n    End Sub</code></pre>\n      </div>\n<p>Here we are storing a random number between 1 and 9 inside our variable, and then we are storing our variable inside another variable which is called "prevNumber". Remember how we declared our variables earlier but had not yet given them information? This is us now giving those variables information - this is known as a definition. The reason they are called variables is that their values can vary and thus are not constant. </p>\n<h1>Creating More Objects [And Storing Them In Variables]</h1>\n<p>We need three more form controls - a form control is simply an object that can be interacted with. Put this code inside the form_load event [the same below our prevNumber variable]. </p>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb">Dim instructions As Label = New Label()\n        instructions.Location = New Point(150, 50)\n        instructions.Width = 300\n        instructions.Text = &quot;Please enter a number between 1 and 9 into the textbox.&quot;\n\n        textbox = New TextBox()\n        textbox.Location = New Point(170, 80)\n        textbox.Height = 60\n        AddHandler textbox.TextChanged, AddressOf textbox_TextChange\n\n        Me.Controls.Add(instructions)\n        Me.Controls.Add(textbox)</code></pre>\n      </div>\n<p>Here we are creating a label (a line of text) object and a textbox object. In order for our form to be able to control these, and for them to be displayed we use "Me.Controls.Add(textbox)", this is a sub procedure which belongs to the form that expects an object to be given to it, in our case we give it the label (which is called "instructions"), and the TextBox object. And lastly, we want to give our textbox an event, this event is the "text-changed" event, which will be triggered when we type something into our textbox. </p>\n<h1>Another Event</h1>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb"> AddHandler textbox.TextChanged, AddressOf textbox_TextChange</code></pre>\n      </div>\n<p>This line is what we use to give our code an event, but as of now, when that code runs - it does not know what event we are referring to, so let us fix that. note that nothing will happen when text is entered, we will come back to this. </p>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb">    Public Sub textbox_TextChange(sender As Object, e As EventArgs)\n\n    End Sub</code></pre>\n      </div>\n<h1>Properties</h1>\n<p>I hope you have noticed the following line: </p>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb">instructions.Text = &quot;Please enter a number between 1 and 9 into the textbox.&quot;</code></pre>\n      </div>\n<p>This is what is known as property, there are many properties, in our case, we use the "Text" property. A property is simply a variable specific to the object in question. We make use of properties to give our objects information specific to them; as well as retrieve such information. </p>\n<h1>Methods</h1>\n<p>A method is similar to a property, in that it belongs to an object, except a method is not a variable, but a sub procedure - that the object in question will use to represent behavior. For example, we could have a "car.Drive(5)" method, this could make our car object drive, "5" could be the miles per hour in which the car shall drive - we could also replace "5" with a variable called "speed", that would mean that we do not need remember what speed is, we just need to know that it exists - and thus speed could be "5", "10" or "10000". </p>\n<h1>Syntax</h1>\n<p>The "." is simply just a character that is used to link data and/or instructions together. This is an example of syntax, the syntax is simply how the could be structured, remember how I said that there is a program which transforms our code into a language the computer understands? Well, that program can only understand a minimal representation of English - it does not entirely understand English (as that would be a  lot of work). </p>\n<p>Note that there are cases when the "." is optional, but some people like to make use of it for clarity.. And other programming languages may require it </p>\n<p>A comment in Visual Basic is a line of code that the computer will ignore but can be used to inform the (human) reader of your code about the code. To make a comment simply put some text after a single quotation mark. </p>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb">&#39; this is garble that the computer will not read and is an example of a comment </code></pre>\n      </div>\n<h1>Control Structures</h1>\n<p>A control structure decides what code should be run depending on the criteria we tell it to check for, there are various control structures. Here we will make use of the "If Else" control structure. Inside our text-changed event, type this code. </p>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb">    Public Sub textbox_TextChange(sender As Object, e As EventArgs)\n        If (textbox.Text IsNot &quot;&quot;) Then\n            If (Convert.ToInt16(textbox.Text) = randomNumber) Then\n                MsgBox(&quot;Yes! You knew my number was &quot; &amp; textbox.Text &amp; vbNewLine &amp; &quot;I have chosen a new number&quot;)\n                randomNumber = CInt(Math.Ceiling(Rnd() * 9))\n                prevNumber = randomNumber\n                If (randomNumber = prevNumber) Then\n                    randomNumber = CInt(Math.Ceiling(Rnd() * 9))\n                    prevNumber = randomNumber\n                    MsgBox(randomNumber)\n                End If\n            Else\n                MsgBox(&quot;Sorry, &quot; &amp; textbox.Text &amp; &quot; was not my number, try again.&quot;)\n            End If\n        End If\n    End Sub</code></pre>\n      </div>\n<p>Yes, I know, there is a lot happening in this, one of the great techniques programmers make use of is breaking things down, this helps us to reason about things easier - so let\'s break down what this code does line by line. </p>\n<p>First, we tell the application to find out what the value of our textbox is, if it is empty, then we will not do anything. </p>\n<p>However ("else"), if the textbox has text, we then ask, if the text is the random number our program had generated and stored in a variable earlier. Notice the "ToInt16" method, this just means that we want to change the data type from text (string) to an integer because our random number is also an integer [commonly called type casting or conversion]. If the text the user has inputted is the same integer our program had generated. </p>\n<p>Then we create a message box which tells the user that they have guessed correctly, the "&#x26;" character is used to join text together, as we can not put our variable inside quotes because if we did, the computer we just output "textbox.Text", instead of the value of what textbox.Text is. </p>\n<p>We then go onto have our program generates a new random number (and ensure it is not the number that was previously generated). </p>\n<p>But what if the user inputted the wrong number? In that case, we simply tell them that they have inputted the wrong number - we leave the random number to what it currently is, and allow the user to try again. </p>\n<h1>Comparisons and Operators</h1>\n<p>An operator is simply a character or key-phrase that represents an instruction, for example, the "+" operator will allow us to do addition, example: "1 + 1". The "isNot" operator is used to check that the value expected is not the value that we specify, in our case we did not want our code to run if the textbox was empty - thus is value would simply be "". "&#x26;" is also an example of an operator - which is used to join text,  and allows us to mix text with the values of variables. This is known as "concatenation".  </p>\n<h1>Congratulations</h1>\n<div class="gatsby-highlight" data-language="vb">\n      <pre class="language-vb"><code class="language-vb">Public Class Form1\n    Private textbox As TextBox\n    Private randomNumber As Integer\n    Private prevNumber As Integer\n\n    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load\n        randomNumber = CInt(Math.Ceiling(Rnd() * 9))\n        prevNumber = randomNumber\n\n        Dim instructions As Label = New Label()\n        instructions.Location = New Point(150, 50)\n        instructions.Width = 300\n        instructions.Text = &quot;Please enter a number between 1 and 9 into the textbox.&quot;\n\n        textbox = New TextBox()\n        textbox.Location = New Point(170, 80)\n        textbox.Height = 60\n        AddHandler textbox.TextChanged, AddressOf textbox_TextChange\n\n        Me.Controls.Add(instructions)\n        Me.Controls.Add(textbox)\n    End Sub\n\n    Public Sub textbox_TextChange(sender As Object, e As EventArgs)\n        If (textbox.Text IsNot &quot;&quot;) Then\n            If (Convert.ToInt16(textbox.Text) = randomNumber) Then\n                MsgBox(&quot;Yes! You knew my number was &quot; &amp; textbox.Text &amp; vbNewLine &amp; &quot;I have chosen a new number&quot;)\n                randomNumber = CInt(Math.Ceiling(Rnd() * 9))\n                prevNumber = randomNumber\n                If (randomNumber = prevNumber) Then\n                    randomNumber = CInt(Math.Ceiling(Rnd() * 9))\n                    prevNumber = randomNumber\n                    MsgBox(randomNumber)\n                End If\n            Else\n                MsgBox(&quot;Sorry, &quot; &amp; textbox.Text &amp; &quot; was not my number, try again.&quot;)\n            End If\n        End If\n    End Sub\nEnd Class</code></pre>\n      </div>\n<p>This is how our final code should look like. If you were able to input all of the code correctly, then you now have a simple "guess my number" game. Otherwise, you will have to endure a process called "debugging". This is often a painstaking process that programmers spend a ton of time doing... And doing... And doing... Ah hell, I am still doing this for many of my applications. Just keep reading your code and my code - determine what you did wrong, and try to fix it - and try not to give up - if you are good at this skill, you are one step closer to being the programmer the world wants you to be. </p>\n<h1>Improvements</h1>\n<p>If we enter a value into our program that is not an integer, our program will "break", there are various approaches to this problem, the most obvious one, in my opinion, is using a "try" statement. I challenge you to fix this. </p>',frontmatter:{path:"/visual-basic-introduction-[guess-my-number]",title:"Visual Basic Introduction [Guess My Number]"}}},pathContext:{}}}});
//# sourceMappingURL=path---visual-basic-introduction-guess-my-number-dbfbb24b75be9fb8fa42.js.map