console.log("Root element found:");

ReactDOM.hydrateRoot(document.getElementById("root"), <App />); // we need to Download the same react tree that we have on the server side  

// We Need to create a REACT TRY ON cleint side But we already have react tree Because we pre-rendered html tree that is coming from the server 





// In reality we are not Gonna copy paste the same thing that our server.js does but in Practcal it will Bundle up 
// serving in the client sidr Internalluy by react and Other frontend Liberary 


/////////////////////////////////////

    // indexedDB.html 

/////////////////////////////////

// ```react & jsx
    
//     In Our frontend we dont have babl

//     // <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//     // <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
//     // <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

// ```


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


