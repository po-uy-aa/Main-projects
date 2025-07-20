import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWarsCharacter extends LitElement {
    static properties = {
        url: { type: String },
        character: { type: Object }
    };

    constructor() {
        super();
        this.url = '';
        this.character = null;
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchCharacter();
    }

    updated(changedProperties) {
        if (changedProperties.has('url') && this.url) {
            this.fetchCharacter();
        }
    }

    fetchCharacter() {
        if (!this.url) return;

        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.character = data;
            })
            .catch(error => {
                console.error('Error fetching character data:', error);
            });
    }

    static styles = css`
        :host {
            display: inline-block;
            margin: 10px;
            width: calc(33.33% - 20px);
            min-width: 250px;
        }
        
        .character-card {
            background: linear-gradient(to bottom right, #34495e, #2c3e50);
            border-radius: 8px;
            padding: 15px;
            color: white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
            height: 100%;
        }
        
        .character-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.3);
        }
        
        h3 {
            margin-top: 0;
            color: #ffd700;
            border-bottom: 1px solid rgba(255,255,255,0.2);
            padding-bottom: 8px;
        }
        
        .info-row {
            display: flex;
            margin: 8px 0;
        }
        
        .label {
            font-weight: bold;
            width: 100px;
            color: #f0f0f0;
        }
        
        .loading {
            text-align: center;
            padding: 15px;
            font-style: italic;
            color: #ccc;
        }
    `;

    render() {
        if (!this.character) {
            return html`<div class="character-card loading">Loading character...</div>`;
        }

        return html`
            <div class="character-card">
                <h3>${this.character.name}</h3>
                
                <div class="info-row">
                    <span class="label">Gender:</span>
                    <span>${this.character.gender}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">Height:</span>
                    <span>${this.character.height} cm</span>
                </div>
                
                <div class="info-row">
                    <span class="label">Birth Year:</span>
                    <span>${this.character.birth_year}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">Eye Color:</span>
                    <span>${this.character.eye_color}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">Hair Color:</span>
                    <span>${this.character.hair_color}</span>
                </div>
            </div>
        `;
    }
}

customElements.define('sw-character', StarWarsCharacter);