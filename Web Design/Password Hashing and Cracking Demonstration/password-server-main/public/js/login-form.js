import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class LoginForm extends LitElement {

    static properties = {
        _userName: {type: String},
        _message: {type: String},
    };

    constructor() {
        super();
        this._userName = null;
        this._message = '';
    };

    submitForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        fetch('/login', {
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
            } else {
                this._message = "Error: " + data.error;
            }
        });
    }

    render() {
        if (this._userName) {
            return html`        <h2>Login</h2>
            <p>Logged in as ${this._userName}</p>`;
        } else {
        return html`
        <h2>Login</h2>
            <p>${this._message || ''}</p>
            <form @submit=${this.submitForm}>
                <input type="text" name="username" placeholder="Username">
                <input type="password" name="password" placeholder="Password">
                <button type="submit">Login</button>    
            </form>`
        }
    }
}

customElements.define('login-form', LoginForm);