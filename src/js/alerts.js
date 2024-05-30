import Swal from 'sweetalert2'

export function showAlertSuccess ()  {
    Swal.fire({
        title: "Done!",
        text: "We have generated your class!",
        icon: "success"
      });
}

export function showAlertSuccess2 ()  {
  Swal.fire({
      title: "Done!",
      text: "You are suscribed now to our newsletter",
      icon: "success"
    });
}
