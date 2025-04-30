import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router-dom";

const GlobalError = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const renderMessage = () => {
    if (isRouteErrorResponse(error)) {
      switch (error.status) {
        case 404:
          return {
            title: "Page Not Found",
            message: "Sorry, the page you are looking for doesn't exist.",
          };
        case 401:
          return {
            title: "Unauthorized",
            message: "You don't have permission to view this page.",
          };
        case 500:
          return {
            title: "Internal Server Error",
            message: "Oops! Something went wrong on our end.",
          };
        default:
          return {
            title: `Error ${error.status}`,
            message: error.statusText,
          };
      }
    }

    return {
      title: "Unexpected Error",
      message: error?.message || "An unknown error occurred.",
    };
  };

  const { title, message } = renderMessage();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{title}</h1>
      <p className="text-lg text-gray-700 mb-6">{message}</p>
      <button
        onClick={() => navigate("/", { replace: true })}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition hover:cursor-pointer"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default GlobalError;
