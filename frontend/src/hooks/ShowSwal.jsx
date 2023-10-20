import Swal from "sweetalert2";

const useSwal = () => {
  const showSwal = (icon, title, text, background, timer) => {
    Swal.fire({
      position: "top-end",
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: false,
      background: background,
      timer: timer,
    });
  };

  return { showSwal };
};

export default useSwal;
