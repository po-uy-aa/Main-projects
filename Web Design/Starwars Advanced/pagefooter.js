import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement {

    static properties = {
        name: {type: String},
        year: {type: Number}
    };

    constructor() {
        super();
        this.year = new Date().getFullYear();
    }

    static styles = css`
        :host {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: block;
        }

        footer {
            background: linear-gradient(to right, #2c3e50, #4ca1af);
            color: white;
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin-top: 20px;
        }

        p {
            margin: 0;
            font-size: 1rem;
            text-align: center;
            letter-spacing: 1px;
        }
    `;

    render() {
        return html`
            <footer>
                <p>Copyright ${this.year} &copy; ${this.name}</p>
            </footer>`
    }
}
customElements.define('page-footer', PageFooter);