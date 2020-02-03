class UserComponent extends HTMLElement {
    constructor(name, hobby) {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `
            article {  
                width: fit-content;
                min-width: 200px;      
                padding: 16px;
                background: white;
                border: 1px solid lightgrey;
                border-radius: 4px;
                font-family: Roboto, sans-serif;
                box-shadow: 0;
                transition: box-shadow 0.2s ease-out;
            }

            article:hover {
                cursor: pointer;
                box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
            }

            p {
                margin: 0;
            }
        `

        const article = document.createElement('article');
        const paragraph = document.createElement('p');
        const hobby = this.getAttribute('hobby');
        const name = this.getAttribute('name');

        paragraph.innerHTML = `${name}, <br> ${hobby}`
        article.appendChild(paragraph)

        article.addEventListener('click', this.handleClick, false)

        shadow.appendChild(style);
        shadow.appendChild(article);
    }

    disconnectedCallback() {
        article.removeEventListener('click', this.handleClick, false)
    }

    handleClick() {
        window.alert('demo component functionality')
    }
}

customElements.define('user-component', UserComponent)