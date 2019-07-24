class Auth {
    login(email_address, password) {
        window.localStorage.setItem('email_address', email_address);
        window.location = '/planets';
    }

    logout() {
        window.localStorage.removeItem('email_address');
        window.location.reload();
    }

    isLoggedIn() {
        return window.localStorage.getItem('email_address') || false;
    }
}

export default Auth;
