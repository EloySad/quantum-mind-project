import Swal from 'sweetalert2'

export function showAlertSuccess ()  {
    Swal.fire({
        title: "Done!",
        text: "We have generated your class!",
        icon: "success"
      });
}