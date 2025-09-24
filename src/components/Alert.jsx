function Alert({ message, type = "error" }) {
  if (!message) return null;

  const baseClasses = "w-full rounded-md border p-3 text-center text-sm mb-4";
  const typeClasses = {
    error: "border-red-400 bg-red-100 text-red-700",
    success: "border-green-400 bg-green-100 text-green-700",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`} role="alert">
      {message}
    </div>
  );
}

export default Alert;
