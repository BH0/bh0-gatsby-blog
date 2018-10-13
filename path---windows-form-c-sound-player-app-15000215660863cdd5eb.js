webpackJsonp([94139463393558],{393:function(e,n){e.exports={data:{markdownRemark:{html:'<hr>\n<p>path: "/windows-form-c#-sound-player-app"\ntitle: "Windows Form C# Sound Player App"\npublished: true\ndate: "27-04-2018" </p>\n<hr>\n<p>In this blog post, we will use C# and Windows Forms to make an application which plays the appropriate animal sound when the corresponding image is clicked.</p>\n<p>I assume you know the basics of C# (functions, conditional statements, classes). And that C# &#x26; Windows Forms is installed in your Visual Studio version (or whatever IDE you\'re using).</p>\n<p>Why Windows Forms\nMaking graphical user interfaces can often be a pain, thankfully with Windows Forms, it does not have to be - yes, for more complex applications Windows Forms may not be a good fit, but its good enough for our use case.</p>\n<p>Assets &#x26; Setup\nBecause I am lazy and used to HTML, I will be pulling my assets directly from the web, but you can use whatever assets you like [though the code may differ slightly]. The assets will be from Pexel and WavSource and you are free to use them in your projects. Using Visual Studio; go to "file" > "new" > "project" and select "Windows Forms App (.NET Framework)" [Visual C#], name your project and click "ok". Windows Forms &#x26; Visual Studio offers something called "Form Designer" which is a drag &#x26; drop graphical interface but we are going to be building our application using C#. Double click the form in the form1.cs[Design] file to get to the code. We should now see something along the lines of a form class inside a namespace. As far as I am aware only ".wav" files can be used for sounds.</p>\n<div class="gatsby-highlight" data-language="c#">\n      <pre class="language-c#"><code class="language-c#">/// Assets \n/* --Images: Lion: https://images.pexels.com/photos/36843/lion-panthera-leo-lioness-animal-world.jpg?auto=compress&amp;cs=tinysrgb&amp;h=350 Dog: https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350 Elephant: https://images.pexels.com/photos/925916/pexels-photo-925916.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350\n\n--Sounds: Lion: http://www.wavsource.com/snds_2018-01-14_3453803176249356/animals/lion_roar.wav Dog: http://www.wavsource.com/snds_2018-01-14_3453803176249356/animals/dog_bark_x.wav Elephant: http://www.wavsource.com/snds_2018-01-14_3453803176249356/animals/elephant.wav */ </code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="c#">\n      <pre class="language-c#"><code class="language-c#">using System; using System.Collections.Generic; using System.ComponentModel; using System.Data; using System.Drawing; using System.Linq; using System.Text; using System.Threading.Tasks; using System.Windows.Forms; using System.Media;\n\nnamespace animalSoundPlayer { public partial class Form1 : Form { public Form1() { InitializeComponent(); }\n\n    private void Form1_Load(object sender, EventArgs e)\n    {\n\n    }\n}\n}</code></pre>\n      </div>\n<p>What this code does\n"Form1_load" will be called when your form has loaded, here we will create our UI components (buttons etc), Form1 is a partial class which inherits from Form because on compilation this code will be combined with code that was generated by the form designer.</p>\n<p>Structure\nWe will be making one primary object which will act as our UI component - this is called "Animal". We will then be able to instantiate this each time we want a new component (and inherit from it / instantiate it within other classes to make more UI components, though this is out of this blog post\'s scope).</p>\n<p>Our Animal Class\nAbove our Form class (or wherever else is appropriate) we will put our Animal class. First, we instantiate the Windows Forms objects; "SoundPlayer" &#x26; "PictureBox" - it may be more suitable to call this something other than "image". Our "PictureBox" has to be public as the form class will need access to it. In our constructor, we give ourselves the ability to pass the path to our image, sound and our X and Y position.</p>\n<div class="gatsby-highlight" data-language="c#">\n      <pre class="language-c#"><code class="language-c#">public class Animal { public PictureBox image; protected SoundPlayer sound; public Animal(string image, string sound, int x, int y) { /// Instantiate Objects to compose our Animal object/class this.image = new PictureBox(); this.sound = new SoundPlayer();\n\n        // Get assets via URL/s for sound &amp; image \n        this.image.ImageLocation = image; \n        this.sound.SoundLocation = sound;\n\n        // Add a handler to which will call a method when image is clicked \n        this.image.Click += new EventHandler(image_Click);\n\n        // Position the image \n        this.image.Location = new Point(x, y);\n\n        // Resize image \n        this.image.SizeMode = PictureBoxSizeMode.StretchImage;\n    } \n\n    public void image_Click(object sender, EventArgs e)\n    {\n        // Play Sound \n        this.sound.Play(); \n    }\n} </code></pre>\n      </div>\n<p>I am going to hope the comments and code are self-explanatory; basically, when this component is clicked, a sound will be played.</p>\n<p>Bringing It Together\nInside our form\'s load method: we have to add our UI components as controls, otherwise, we will not see our components. We are using composition to create instances of our Animal component meaning our code will be DRY[er]. When instantiating your component do not forget to pass all appropriate parameters (image path, sound path, x position, y position).</p>\n<div class="gatsby-highlight" data-language="c#">\n      <pre class="language-c#"><code class="language-c#">public partial class Form1 : Form { /// Instantiate UI Components Animal lion = new Animal(&quot;https://images.pexels.com/photos/36843/lion-panthera-leo-lioness-animal-world.jpg?auto=compress&amp;cs=tinysrgb&amp;h=350&quot;, &quot;http://www.wavsource.com/snds_2018-01-14_3453803176249356/animals/lion_roar.wav&quot;, 100, 100); Animal elephant = new Animal(&quot;https://images.pexels.com/photos/925916/pexels-photo-925916.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350&quot;, &quot;http://www.wavsource.com/snds_2018-01-14_3453803176249356/animals/elephant.wav&quot;, 200, 100); Animal dog = new Animal(&quot;https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350&quot;, &quot;http://www.wavsource.com/snds_2018-01-14_3453803176249356/animals/dog_bark_x.wav&quot;, 300, 100);\n\n    public Form1()\n    {\n        InitializeComponent();\n    }\n\n    private void Form1_Load(object sender, EventArgs e) \n    { \n        /// Assign UI Compoents to Form (so they can be interacted with) \n        this.Controls.Add(lion.image);\n        this.Controls.Add(elephant.image);\n        this.Controls.Add(dog.image); \n    }\n}</code></pre>\n      </div>\n<h2>Full Code:</h2>\n<div class="gatsby-highlight" data-language="c#">\n      <pre class="language-c#"><code class="language-c#"> using System; using System.Collections.Generic; using System.ComponentModel; using System.Data; using System.Drawing; using System.Linq; using System.Text; using System.Threading.Tasks; using System.Windows.Forms; using System.Media;\n\nnamespace animalSoundPlayer {\n\npublic class Animal \n{\n    public PictureBox image;\n    protected SoundPlayer sound; \n    public Animal(string image, string sound, int x, int y)\n    {\n        /// Instantiate Objects to compose our Animal object/class \n        this.image = new PictureBox(); \n        this.sound = new SoundPlayer();\n\n        // Get assets via URL/s for sound &amp; image \n        this.image.ImageLocation = image; \n        this.sound.SoundLocation = sound;\n\n        // Add a handler to which will call a method when image is clicked \n        this.image.Click += new EventHandler(image_Click);\n\n        // Position the image \n        this.image.Location = new Point(x, y);\n\n        // Resize image \n        this.image.SizeMode = PictureBoxSizeMode.StretchImage;\n    } \n\n    public void image_Click(object sender, EventArgs e)\n    {\n        // Play Sound \n        this.sound.Play(); \n    }\n} \n\npublic partial class Form1 : Form\n{ \n    /// Instantiate UI Components \n    Animal lion = new Animal(&quot;https://images.pexels.com/photos/36843/lion-panthera-leo-lioness-animal-world.jpg?auto=compress&amp;cs=tinysrgb&amp;h=350&quot;, &quot;http://www.wavsource.com/snds_2018-01-14_3453803176249356/animals/lion_roar.wav&quot;, 100, 100);\n    Animal elephant = new Animal(&quot;https://images.pexels.com/photos/925916/pexels-photo-925916.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350&quot;, &quot;http://www.wavsource.com/snds_2018-01-14_3453803176249356/animals/elephant.wav&quot;, 200, 100);\n    Animal dog = new Animal(&quot;https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350&quot;, &quot;http://www.wavsource.com/snds_2018-01-14_3453803176249356/animals/dog_bark_x.wav&quot;, 300, 100);\n\n    public Form1()\n    {\n        InitializeComponent();\n    }\n\n    private void Form1_Load(object sender, EventArgs e) \n    { \n       /// Assign UI Compoents to Form (so they can be interacted with) \n        this.Controls.Add(lion.image);\n        this.Controls.Add(elephant.image);\n        this.Controls.Add(dog.image); \n    }\n}\n}</code></pre>\n      </div>\n<h2>What Next</h2>\n<p>You can now use the techniques demonstrates here to add more UI components such as text, buttons etcetera. You could also look into styling your application. And go onto make more interesting UI components. I hope this has been a simple yet fun introduction to Windows Forms using C#.</p>',frontmatter:{path:"/windows-form-c#-sound-player-app",title:"Windows Form C# Sound Player App"}}},pathContext:{}}}});
//# sourceMappingURL=path---windows-form-c-sound-player-app-15000215660863cdd5eb.js.map