import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWarsMovie extends LitElement {

    static properties = {
        filmId: { type: Number, reflect: true },
        filmData: { type: Object }
    };

    constructor() {
        super();
        this.filmId = 1;
        this.filmData = null;
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchFilmData();
    }

    updated(changedProperties) {
        if (changedProperties.has('filmId')) {
            this.fetchFilmData();
        }
    }

    fetchFilmData() {
        fetch(`https://swapi.dev/api/films/${this.filmId}/`)
            .then(response => response.json())
            .then(data => {
                this.filmData = data;
            })
            .catch(error => {
                console.error('Error fetching Star Wars film data:', error);
            });
    }

    handleFilmChange(e) {
        this.filmId = e.target.value;
    }

    formatCrawl(text) {
        if (!text) return [];
        return text.split('\r\n').filter(line => line.trim() !== '');
    }

    static styles = css`
        :host {
            display: block;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 20px 0;
        }

        .movie-card {
            background: linear-gradient(to right, #2c3e50, #4ca1af);
            color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            max-width: 100%;
            margin: 0 auto;
        }

        h2 {
            color: #ffffff;
            margin-top: 0;
            font-size: 2rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            margin-bottom: 20px;
        }

        .info-row {
            margin: 10px 0;
            display: flex;
        }

        .label {
            font-weight: bold;
            margin-right: 10px;
            color: #f0f0f0;
            width: 100px;
        }

        .loading {
            text-align: center;
            font-style: italic;
            color: #888;
            padding: 20px;
            background: linear-gradient(to right, #2c3e50, #4ca1af);
            border-radius: 8px;
        }

        .opening-crawl {
            font-style: italic;
            line-height: 1.6;
            margin-top: 20px;
            padding: 15px;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            border-left: 3px solid #ffffff;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .crawl-text {
            transform: rotateX(20deg);
            transform-origin: top;
            color: #ffd700;
            font-size: 0.9rem; 
            text-align: center;
            max-width: 100%;
            word-wrap: break-word;
            padding: 0 15px;
        }

        .crawl-paragraph {
            margin-bottom: 10px; 
            line-height: 1.3; 
        }

        .crawl-container {
            perspective: 400px;
            margin-top: 20px;
            overflow-y: auto;
            overflow-x: hidden;
            max-height: 100%;
            max-width: 100%;
            padding: 15px 20px;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 8px;
        }

        select {
            background-color: #34495e;
            color: white;
            border: 2px solid #fff;
            border-radius: 4px;
            padding: 8px 12px;
            font-size: 1rem;
            margin-bottom: 20px;
            cursor: pointer;
            width: 100%;
            max-width: 300px;
        }

        select:focus {
            outline: none;
            border-color: #ffd700;
            box-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
        }
    `;

    render() {
        if (!this.filmData) {
            return html`
                <div class="loading">Loading Star Wars film data...</div>
            `;
        }

        const crawlParagraphs = this.formatCrawl(this.filmData.opening_crawl);

        return html`
            <div class="movie-card">
                <div>
                    <label for="film-select">Choose a film: </label>
                    <select id="film-select" @change=${this.handleFilmChange} .value=${this.filmId}>
                        <option value="1">Episode IV: A New Hope (1977)</option>
                        <option value="2">Episode V: The Empire Strikes Back (1980)</option>
                        <option value="3">Episode VI: Return of the Jedi (1983)</option>
                        <option value="4">Episode I: The Phantom Menace (1999)</option>
                        <option value="5">Episode II: Attack of the Clones (2002)</option>
                        <option value="6">Episode III: Revenge of the Sith (2005)</option>
                    </select>
                </div>

                <h2>${this.filmData.title}</h2>

                <div class="info-row">
                    <span class="label">Episode:</span>
                    <span>${this.filmData.episode_id}</span>
                </div>

                <div class="info-row">
                    <span class="label">Director:</span>
                    <span>${this.filmData.director}</span>
                </div>

                <div class="info-row">
                    <span class="label">Released:</span>
                    <span>${this.filmData.release_date}</span>
                </div>

                <div class="info-row">
                    <span class="label">Producer:</span>
                    <span>${this.filmData.producer}</span>
                </div>

                <div class="crawl-container">
                    <div class="crawl-text">
                        ${crawlParagraphs.map(paragraph => html`
                            <p class="crawl-paragraph">${paragraph}</p>
                        `)}
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('star-wars-movie', StarWarsMovie);