
const { readFileSync } = require("fs");
const { renderToString } = require("react-dom/server");
const { parse } = require("url");

// server.js
const http = require("http");
const React = require("react");

const htmltemplate=readFileSync("./index.html", "UTF-8");
const clientjs=readFileSync("./client.js", "UTF-8");


function App() {
  return (
    <div>
      <Home />
      <h1>❤️Hello from JSX SSR!</h1>
      <p>This is rendered on the server using JSX.</p>
    </div>
  );
}


function Home(){
  const[count, setCount] = React.useState(0);
  console.log("Home component rendered with count:", count);
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple server-side rendered page.</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}




const server = http.createServer((req, res) => {

  const pathname=parse(req.url,true).pathname;

  if(pathname==="/"){
    const renderreact = renderToString(React.createElement(App));
  
  
    const html =htmltemplate.replace("%%%CONTENT%%%", renderreact);
  
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    res.end(html);

  }

  else if(pathname==="/client.js"){
    res.writeHead(200, { "Content-Type": "application/javascript; charset=utf-8" });
    res.end(clientjs);
  }

  else{
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 Not Found");
  }




});

server.listen(3000, () => console.log("✅ Server running at http://localhost:3000"));
