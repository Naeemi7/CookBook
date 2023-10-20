import Swal from "sweetalert2";

const useSwal = () => {
  const showSwal = (icon, title, text, timer) => {
    Swal.fire({
      position: "top-end",
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: false,
      background: "#8b9094",
      timer: timer,
    });
  };

  return { showSwal };
};

export default useSwal;
