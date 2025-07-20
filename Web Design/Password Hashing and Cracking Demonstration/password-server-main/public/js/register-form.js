import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class RegisterForm extends LitElement {

    static properties = {
        _userName: {type: String},
        _message: {type: String},
    };

    constructor() {
        super();
        this.userInfo = null;
    };

    submitForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                this._userName = data.username;
                const event = new CustomEvent('user-registered');
                window.dispatchEvent(event);
            } else {
                this._message = "Error: " + data.error;
            }
        });
    }

    render() {
        if (this._userName) {
            return html`
            <h2>Register</h2><p>Registered new user ${this._userName}</p>`;
        } else {
        return html`
        <h2>Register</h2>
            <p>${this._message || ''}</p>
            <form @submit=${this.submitForm}>
                <input type="text" name="username" placeholder="Username">
                <input type="password" name="password" placeholder="Password">
                <input type="password" name="repeat" placeholder="Repeat Password">
                <button type="submit">Register</button>    
            </form>`
        }
    }
}

customElements.define('registration-form', RegisterForm);