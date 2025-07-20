import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class UserList extends LitElement {
    // https://css-tricks.com/complete-guide-table-element/
    static styles = css`
      table {
        border-collapse: collapse;
        width: 100%;
        }
        th, td {
        padding: 0.25rem;
        text-align: left;
        border: 1px solid #ccc;
        }
        tbody tr:hover {
        background: yellow;
        }
            `;

    static properties = {
        _users: {type: Array},
    };

    constructor() {
        super();
        this._users = [];
        this._loadUsers();
        window.addEventListener('user-registered', e => {
            console.log('user-registered event received');
            this._loadUsers();
        });
    };

    _loadUsers() {
        fetch('/users')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this._users = data;
        });
    }

    render() {
        if (this._users) {
            return html`
            <h2>Users</h2>
            <table>
                <thead>
                    <tr><th>Username</th><th>Password</th><th>Salt</th></tr>
                </thead>
                <tbody>
                ${this._users.map(user => html`<tr><td>${user.username}</td><td>${user.password}</td><td>${user.salt}</td></tr>`)}
                </tbody>
            </table>
            `
        } else {
            return html`
            <h2>Users</h2>
            <p>No users found</p>`;
        }
    }

};


customElements.define('user-list', UserList);