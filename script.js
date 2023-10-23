document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const rememberCheckbox = document.querySelector('input[type="checkbox"]');
    const loginButton = document.querySelector('.button.is-primary');

    // Validasi email
    emailInput.addEventListener('blur', function() {
        if (!isValidEmail(this.value)) {
            alert('Masukkan alamat email yang valid.');
            this.focus();
        }
    });

    // Validasi password (minimal 8 karakter)
    passwordInput.addEventListener('blur', function() {
        if (this.value.length < 8) {
            alert('Kata sandi harus minimal 8 karakter.');
            this.focus();
        }
    });

    // Simpan data saat tombol login ditekan
    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberCheckbox.checked;

        // Lakukan sesuatu dengan data login (misalnya, kirim ke server)
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Ingat Saya:', rememberMe);
    });

    function isValidEmail(email) {
        // Gunakan regex atau metode validasi lainnya sesuai kebutuhan
        // Contoh sederhana untuk validasi email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
