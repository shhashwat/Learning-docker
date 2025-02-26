function App() {
  return (
    <>
      <p>
        Damn man, how you been? This is the container running the react app.
        What is happenening?
      </p>
      <div className="font-bold">
        <p>
          docker run -p 5173:5173 -v "${"{PWD}"}:/app" -v /app/node_modules -e
          CHOKIDAR_USEPOLLING=true new-image
        </p>
      </div>
    </>
  );
}

export default App;
