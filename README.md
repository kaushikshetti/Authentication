

<head>
    <title>Project Name Readme</title>
</head>

<body>

    <h1>Project Name</h1>

    <p>This is a README file for the Project Name application. Below are the instructions to run the frontend and backend parts of the project:</p>

    <h2>Frontend</h2>

    <p>To run the frontend, you can use the Vite application. Use the following command:</p>

    <pre><code>npm run dev</code></pre>

    <p>This will start the development server for the frontend of your project.</p>

    <h2>Backend</h2>

    <p>To run the backend application, you can use the following command:</p>

    <pre><code>npm start</code></pre>

    <p>This will start the backend server for your application.</p>

    <h2>Creating the Project</h2>

    <p>If you need to create a new Vite application, you can use the following command:</p>

    <pre><code>npm create vite@latest</code></pre>

    <p>This command will create a new Vite project for you to work on.</p>

</body>




<h2>API Endpoints</h2>

<h3>Register User</h3>

<p><strong>URL:</strong> <code>POST localhost:8800/api/auth/register</code></p>

<p><strong>Request Body:</strong></p>
<pre>
{
    "username": "Nirav",
    "email": "kaushikshetti8@gmail.com",
    "country": "frgaer",
    "img": "frgaer",
    "city": "frgaer",
    "phone": "7264801734",
    "password": "frgaer"
}
</pre>

<h3>Login User</h3>

<p><strong>URL:</strong> <code>POST localhost:8800/api/auth/login</code></p>

<p><strong>Request Body:</strong></p>
<pre>
{
    "username": "Nirav",
    "password": "frgaer"
}
</pre>
</html>
