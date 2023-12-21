document.getElementById('loginForm').addEventListener('login', function(event) {
    event.preventDefault(); // menghentikan aksi default (submit) form

    let username = document.getElementById('loginUser').value;
    let password = document.getElementById('loginPassword').value;

    // Simulasi autentikasi dan pengambilan role dari server
    fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.role === 'admin') {
            // arahkan ke tampilan admin
            window.location.href = 'admin-dashboard.html';
        } else if (data.role === 'retana') {
            // arahkan ke tampilan user
            window.location.href = 'login-retana.html';
        } else if (data.role === 'kabid') {
            // arahkan ke tampilan user
            window.location.href = 'login-kabid.html';
        } else {
            // tampilkan pesan error
            alert('Username atau password salah. Silakan coba lagi.');
        }
    })
    .catch(error => {
        // tampilkan pesan error
        alert('Terjadi kesalahan saat melakukan login. Silakan coba lagi.');
    });
});