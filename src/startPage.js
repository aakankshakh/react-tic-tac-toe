function playerButton(label, name) {
  return (
    <>
      <label className="text-2xl">
        {label}:{"  "}
        <input
          className="border-2 border-[#882f13] bg-inherit rounded-md"
          name={name}
        />
      </label>
    </>
  );
}

export default function teehee() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f1f0ea] text-[#882f13]">
      <h1 className="text-7xl font-bold underline underline-offset-4 mb-5">
        Tic Tac Toe
      </h1>
      <h1 className="text-xl font-medium mb-10">
        Made by{" "}
        <a
          className="hover:underline decoration-dotted
        underline-offset-4"
          href="https://aakanksha.ca"
        >
          Aakanksha
        </a>
      </h1>

      <div className="flex flex-col mt-7 font-semibold items-center">
        <playerButton label="Player One" name="playerOne" />

        <label className="text-2xl mb-7">
          Player One:{"  "}
          <input
            className="border-2 border-[#882f13] bg-inherit rounded-md font-normal text-center"
            name="playerOne"
            defaultValue="Amy"
          />
        </label>
        <label className="text-2xl">
          Player Two:{"  "}
          <input
            className="border-2 border-[#882f13] bg-inherit rounded-md font-normal text-center"
            name="playerTwo"
            defaultValue="Dan"
          />
        </label>

        <button class="h-12 px-6 text-xl text-[#882f13] m-5 transition-colors duration-150 border-2 border-[#882f13] rounded-lg focus:shadow-outline hover:bg-[#882f13] hover:text-[#f1f0ea]">
          Start Game!
        </button>
      </div>
    </div>
  );
}
