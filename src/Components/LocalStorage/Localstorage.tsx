
import { useEffect, useState } from "react";

function LocalStorage() {
  // 1. Get saved theme from LocalStorage
  const [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === null ? true : savedTheme === "dark";
  });

  // 2. Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  // 3. Toggle theme
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className={`${
        darkTheme
          ? "bg-blue-950 text-white"
          : "bg-gray-100 text-gray-900"
      } flex flex-col gap-3 w-full min-h-screen items-start justify-start p-3 transition-colors duration-300`}
    >
      {/* Header */}
      <div
        className={`${
          darkTheme ? "bg-blue-600" : "bg-white"
        } flex flex-row items-center w-full gap-3 justify-between p-4 rounded-xl shadow`}
      >
        <div>
          <h1 className="text-2xl font-bold">Local Storage</h1>
          <p>We are Learning the LocalStorage in React</p>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition"
        >
          {darkTheme ? "☀️ Light Theme" : "🌙 Dark Theme"}
        </button>
      </div>

      {/* Main Content */}
      <div
        className={`${
          darkTheme ? "bg-blue-900" : "bg-white"
        } w-full p-5 rounded-xl shadow`}
      >
        <h2 className="text-xl font-semibold">
          Welcome to React LocalStorage
        </h2>

        <p className="mt-2">
          Current Theme: {darkTheme ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </div>
  );
}

export default LocalStorage;
