import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageHeader extends LitElement {

    static properties = {
        title: {type: String},
        logo: {type: String}
    };

    static styles = css`
        :host {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: block;
        }
        header {
            background: linear-gradient(to right, #2c3e50, #4ca1af);
            color: white;
            padding: 1rem;
            display: flex;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin-bottom: 20px;
        }
        img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border: 3px solid #fff;
            margin-right: 20px;
            transition: transform 0.3s ease;
        }
        img:hover {
            transform: scale(1.1);
        }
        h1 {
            margin: 0;
            font-size: 2.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
    `;

    render() {
        return html`
            <header>
                <img src=${this.logo} alt="company logo">
                <h1>${this.title}</h1>
            </header>`
    }
}
customElements.define('page-header', PageHeader);

