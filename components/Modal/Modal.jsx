const Modal = ({ isVisible, onClose, children, className }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="min-h-screen w-full fixed inset-0 bg-[#222C3B] bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50 flex-wrap overflow-scroll"
      id="wrapper"
      onClick={handleClose}
    >
      <div
        className={`${className} mx-auto flex flex-col justify-center items-center py-20`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
