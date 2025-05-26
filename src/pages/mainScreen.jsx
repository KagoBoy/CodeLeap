import { useState } from "react";
import editIcon from "../assets/images/bx_bx-edit.svg";
import deleteIcon from "../assets/images/ic_baseline-delete-forever.svg";
import DeleteScreen from "../components/deleteScreen";
import EditScreen from "../components/editScreen";

export default function MainScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isInputFilled, setIsInputFilled] = useState(false);
  const [isDeleteScreenOpen, setIsDeleteScreenOpen] = useState(false);
  const [isEditScreenOpen, setIsEditScreenOpen] = useState(false);

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
    checkIfInputsAreFilled(value, content); // Verifica os dois campos
  };

  const handleContentChange = (event) => {
    const value = event.target.value;
    setContent(value);
    checkIfInputsAreFilled(title, value); // Verifica os dois campos
  };

  const checkIfInputsAreFilled = (titleValue, contentValue) => {
    setIsInputFilled(
      titleValue.trim().length > 0 && contentValue.trim().length > 0
    );
  };

  return (
    <div className="bg-cinza min-h-screen flex flex-col items-center justify-center">
      <h1 className="bg-button h-full w-211 text-white text-title font-bold pl-9 pb-7 pt-7">
        CodeLeap Network
      </h1>
      <main className="bg-white min-h-screen w-211 flex flex-col justify-between p-5 gap-6">
        <form
          action="#"
          className="flex flex-col gap-2 rounded-2xl shadow-lg justify-between p-5 border-1 border-border-color"
        >
          <h2 className="text-title font-bold">What's on your mind?</h2>
          <label for="helloWorld" className="text-subtitle">
            Title
          </label>
          <input
            type="text"
            name="World"
            id="helloWorld"
            placeholder="Hello World"
            className="shadow-lg rounded-lg p-3 border-1 border-border-color text-title mb-6"
            value={title}
            onChange={handleTitleChange}
          />
          <label for="content" className="text-subtitle">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="3"
            placeholder="Content here"
            className="min-h-31 resize-none shadow-lg rounded-lg p-3 border-1 border-border-color text-title mb-6"
            value={content}
            onChange={handleContentChange}
          ></textarea>
          <button
            disabled={!isInputFilled}
            className={`text-subtitle mb-6 bg-button self-end w-28 h-8 rounded-lg transition duration-300 ease-in-out
            ${isInputFilled ? "bg-button text-white cursor-pointer font-bold" : "bg-cinza"}
            `}
          >
            Create
          </button>
        </form>

        <section className="flex flex-col gap-2 rounded-2xl shadow-lg justify-between border-1 border-border-color">
          <nav className="w-full flex flex-row justify-between bg-button rounded-t-2xl p-4">
            <h2 className="text-white text-title font-bold">
              My First Post at CodeLeap Network!
            </h2>
            <div className="flex gap-6">
              <a href="#" onClick={() => setIsDeleteScreenOpen(true)}>
                <img src={deleteIcon} alt="Delete" />
              </a>
              <a href="#" onClick={() => setIsEditScreenOpen(true)}>
                <img src={editIcon} alt="Edit" />
              </a>
            </div>
          </nav>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between text-cinza-escuro">
              <small className="text-post">@Victor</small>
              <small>25 minutes ago</small>
            </div>

            <p className="text-post">
              Curabitur suscipit suscipit tellus. Phasellus consectetuer
              vestibulum elit. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Maecenas egestas arcu
              quis ligula mattis placerat. Duis vel nibh at velit scelerisque
              suscipit.
            </p>
            <p className="text-post">
              Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed
              cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna
              dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus
              lacinia erat.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-2 rounded-2xl shadow-lg justify-between border-1 border-border-color">
          <nav className="w-full flex flex-row justify-between bg-button rounded-t-2xl p-4">
            <h2 className="text-white text-title font-bold">
              My Second Post at CodeLeap Network!
            </h2>
            <div className="flex gap-6">
              <a href="#" onClick={() => setIsDeleteScreenOpen(true)}>
                <img src={deleteIcon} alt="Delete" />
              </a>
              <a href="#" onClick={() => setIsEditScreenOpen(true)}>
                <img src={editIcon} alt="Edit" />
              </a>
            </div>
          </nav>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between text-cinza-escuro">
              <small className="text-post">@Vini</small>
              <small>45 minutes ago</small>
            </div>

            <p className="text-post">
              Curabitur suscipit suscipit tellus. Phasellus consectetuer
              vestibulum elit. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Maecenas egestas arcu
              quis ligula mattis placerat. Duis vel nibh at velit scelerisque
              suscipit.
            </p>
            <p className="text-post">
              Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed
              cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna
              dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus
              lacinia erat.
            </p>
          </div>
        </section>
        <DeleteScreen isOpen={isDeleteScreenOpen} setModalOpen = {() => setIsDeleteScreenOpen(!isDeleteScreenOpen)} />
        <EditScreen isOpen={isEditScreenOpen} setModalOpen = {() => setIsEditScreenOpen(!isEditScreenOpen)} />
      </main>
    </div>
  );
}
