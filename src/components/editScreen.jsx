import { useState } from "react";

export default function DeleteScreen({ isOpen, setModalOpen }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isInputFilled, setIsInputFilled] = useState(false);

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
    if (isOpen) {
    return (
      <div className="min-h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-cinza-escuro opacity-80"></div>
        <div className="bg-white z-50 w-178 min-h-95 flex flex-col rounded-2xl shadow-lg p-6 border-1 border-border-color">
          <h1 className="text-title font-bold mb-6">Edit item</h1>
          <form action="#" className="flex flex-col gap-2">
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
            <div className="flex justify-end gap-2">
              <button
                onClick={setModalOpen}
                className="text-subtitle font-bold mb-4 bg-white self-end w-28 h-8 rounded-lg border-1 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={setModalOpen}
                className={`text-subtitle font-bold mb-4 self-end w-28 h-8 rounded-lg transition duration-300 ease-in-out
                    ${isInputFilled ? "bg-button-save border-0 text-white cursor-pointer" : "bg-white border-1"}`}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
}
