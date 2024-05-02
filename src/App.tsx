function App() {
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center gap-5 ">
      <div className="h-40 w-100 bg-gray-300 rounded-2 xl p-5 mt-40 flex gap-3">
        <button className="h-10 w-20 bg-red-400 font-bold rounded-md text-gray-500 p-2 item-center text-black">
          bonjour{" "}
        </button>
        <button className="h-10 w-20 bg-green-300 font-bold rounded-lg text-cyan-400 text-blue-700">
          bonjour
        </button>
      </div>
    </div>
  );
}

export default App;
