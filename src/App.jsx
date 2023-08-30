import code from "../src/assets/image-qr-code.png";

const App = () => {
  return (
    <section className="bg-sky-100 h-screen">
      <div className="flex flex-col text-center justify-center items-center h-screen">
        <div className="w-96 bg-white rounded-2xl p-4 flex flex-col justify-center items-center">
          <img
            src={code}
            alt="Qr code to frontend mentors"
            className="w-82 object-cover rounded-2xl"
          />
          <article className="p-4">
            <h1 className="font-bold text-gray-700 text-2xl">
              Improve your front-end skills by building projects
            </h1>
            <p className="text-slate-400 mt-4 text-lg">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
export default App;
