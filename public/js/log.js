const loginForm = document.getElementById('loginForm');
    const failSound = document.getElementById('failSound');

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Ganti dengan login valid kamu
      const validUsername = "XOFizzx";
      const validPassword = "XoFizzx132";

      if (username === validUsername && password === validPassword) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Login berhasil, mengalihkan...',
          showConfirmButton: false,
          timer: 1500,
          background: '#e6fffa',
          color: '#0f5132'
        }).then(() => {
          window.location.href = '/XO';
        });
      } else {
        failSound.play();
        Swal.fire({
          icon: 'error',
          title: '<strong><i class="fa fa-ban"></i> Maaf !!</strong>',
          text: 'Username atau Password Salah',
          background: '#fddede',
          color: '#842029',
          confirmButtonColor: '#d33'
        });
      }
    });