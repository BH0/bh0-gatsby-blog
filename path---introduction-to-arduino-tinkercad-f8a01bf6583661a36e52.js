webpackJsonp([0xe63e3352dc4c],{374:function(e,t){e.exports={data:{markdownRemark:{html:'<hr>\n<p>path: "/introduction-to-arduino-&#x26;-tinkercad"\ntitle: "Introduction To Arduino &#x26; Tinkercad"\npublished: true\ndate: "12-05-2018" </p>\n<hr>\n<p>The Arduino is a platform for a programmable board which allows for customizable circuits that react based on the [easy-to-understand] code. </p>\n<p>Tinkercad; more specifically Tinkercad Circuits is a cloud web-app that allows for Arduino programming and circuit building using a simple drag &#x26; drop interface. </p>\n<p>Tinkercad will allow us to learn the basics of Arduino without having to own an Arduino. </p>\n<h1>Set up</h1>\n<p>Navigate to <a href="https://www.tinkercad.com/circuits">https://www.tinkercad.com/circuits</a> - if you have not yet registered; you will likely be prompted to do so. I use a Google account but its all down to personal preference. You might have to redirect back to that hyperlink after regressing. Scroll down and click "Launch Tinkercad Circuits". </p>\n<p>This will take you to a blank project. To the right, we have our components - these are little devices our circuit will be composed of. </p>\n<p>Drag a resister on to the center of the page. Then drag an Arduino [Uno], a Piezo buzzer and a breadboard (any size) onto the page near your resister in a similar fashion - use the search bar to find the components quickly. </p>\n<p>Frustratingly; the positive leg of the piezo buzzer is at an inconvenient side, (you can rotate it but in m opinion, it will just get in the way) so we will not be connecting it directly to the breadboard but instead use wires to connect it to the breadboard (this will not be done using a physical component). </p>\n<p>Make sure the red line (positive) on the breadboard is closest to your Arduino board and that the longer side is also closest to the breadboard. To rotate something - ensure it is selected and click the upper left corner [To the left of the trash-can icon]. And to delete something: ensure it selected and click the trash can icon. </p>\n<p>You can see if the piezo buzzer\'s leg is positive or negative by hovering your mouse over it. To connect it to the breadboard: click + drag from your positive leg to a whole that is inline with the "e". This will create a [green] wire. Do the same with the negative leg and put it to the left of the positive leg.  Put one end of another wire below the buzzer\'s positive leg\'s wire and connect the other end into the 8th Pin on the Arduino. (by clicking and dragging). </p>\n<p>Place the resistor from the "b" line and ensure one leg is vertically aligned with the wire that connects the negative leg of the piezo buzzer to the breadboard, and that the other leg goes into any hole that is nearest the black line on the side which is closest to the red line. </p>\n<p>Then connect a hole from the same line that the resistor\'s leg is in (near the black line) with a wire to the ground "GND" pin on the Arduino. </p>\n<p>We should now have a grounded circuit which we can program. One other advantage of Tinkercad is that it allows you to simulate code (sketches). We are going to make our piezo buzzer beep repeatedly. If you are aware of Scratch - Tinkercad allows a "visual" programming interface that is similar to Scratch. But, I prefer textual code so that is what we will be using. </p>\n<p>To open the code editor, click on the "Code" button near the top right corner , make sure the code editor is set to "Text" - if it is not, click where it either says "Blocks + Text" or just "Blocks" and select "Text" from the drop-down menu. You may see code already within the editor so just delete this. pre-typed code </p>\n<p>We should now be ready to insert the following code into the editor. </p>\n<div class="gatsby-highlight" data-language="c">\n      <pre class="language-c"><code class="language-c"><span class="token keyword">int</span> time<span class="token punctuation">;</span> <span class="token comment">// how long the buzzer will beep for </span>\n<span class="token keyword">int</span> freq<span class="token punctuation">;</span> <span class="token comment">// frequency </span>\n<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// this code runs once (initialization) </span>\n  Serial<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token number">9600</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n  time <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> <span class="token comment">// milliseconds  </span>\n  freq <span class="token operator">=</span> <span class="token number">2500</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span> \n\n<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// this code will be repeatedd forever (until the Arduino loges power) </span>\n  <span class="token function">tone</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> freq<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// beep </span>\n  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">+</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// wait </span>\n<span class="token punctuation">}</span> </code></pre>\n      </div>\n<p>When we click "Start Simulation" we should hear a beeping noise - it might not be the most pleasant sound in the world, but it is pretty awesome. Note: you cannot edit the code when the simulation is running so to stop it just press "Stop simulation". And if you wish to see the components menu, just click that "Code" button again. </p>\n<p>Congratulations. You made your first circuit which you instructed using code that the Arduino device read. </p>\n<h1>Enter The Physical World</h1>\n<p>After you have made some pretty neat circuits, you might think - I really want a physical Arduino. I will not cover details regarding purchasing (or making) an Arduino but be aware that you have been using an Arduino Uno (also known as a Genuino Uno for European countries). </p>\n<p>The Code Editor in Tinkercad is rather minimal, the Arduino creators have much better tools available on their website for producing code - for example, the Arduino IDE comes as both downloadable software and a cloud-based web-app. </p>\n<p>There are also many different types of Arduino boards as well as extensions that allow you to do very interesting (yet simplified) stuff. </p>\n<h1>Rename Our Project</h1>\n<p>Tinkercad automatically saves our project every so often - but it does not rename it to a sensible name for us. We will learn how to do that now for future reference. </p>\n<p>To get to our list of projects, click on the "Tinkercad" logo in the top left corner. Click on your project (such as the circuit you just made) Click the gear icon at the upper right within the popup modal that says "properties". And insert what you want the project to be called into the input-field underneath the "Design name", feel free to change other fields too. Then click "save changes". </p>\n<p>I hope you noticed the "Tinker this" button, this is what you would click anytime you want to edit the project. </p>\n<h1>Why I Typed This Blog Post</h1>\n<p>As with many activities regarding programming, getting started can feel intimidating, so I typed this blog post in an effort to change that. It is also Arduino day - A worldwide celebration of Arduino so happy Arduino day. </p>\n<h1>The End</h1>\n<p>If this is of an interest to you - I strongly recommend you begin exploring and making your own projects as well as researching the Arduino. Feel free to check-out my existing projects. And for help: there is a great Discord community called "Electronicity". </p>',frontmatter:{path:"/introduction-to-arduino-&-tinkercad",title:"Introduction To Arduino & Tinkercad"}}},pathContext:{}}}});
//# sourceMappingURL=path---introduction-to-arduino-tinkercad-f8a01bf6583661a36e52.js.map