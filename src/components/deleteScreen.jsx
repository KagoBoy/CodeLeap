export default function DeleteScreen({ isOpen, setModalOpen }) {

  if (isOpen) {
    return (
      <div className="min-h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-cinza-escuro opacity-80"></div>
        <div className="bg-white z-50 w-175 h-47 flex flex-col rounded-2xl shadow-lg justify-between p-6 border-1 border-border-color">
          <h1 className="text-title font-bold">
            Are you sure you want to delete this item?
          </h1>
          <div className="flex justify-end gap-2">
            <button
              onClick={setModalOpen}
              className="text-subtitle font-bold mb-4 bg-white self-end w-28 h-8 rounded-lg border-1 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={setModalOpen}
              className="text-subtitle font-bold text-white mb-4 bg-button-delete self-end w-28 h-8 rounded-lg cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
