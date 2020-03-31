class Auth {
    constructor() {
        this.authenticated = false;  // Change this.authenticated to true for development
    }

    login(callback) {
        // Async operation here
        this.authenticated = true;
        callback();
    }

    logout(callback) {
        // Async operation here
        this.authenticated = false;
        callback();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();