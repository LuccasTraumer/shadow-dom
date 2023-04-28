class MeuComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        const raiz = document.createElement('span');
        raiz.setAttribute('class', 'raiz');

        const style = document.createElement('style');
        style.textContent = `
            .raiz {           
                width: 200px;
                height: 200px;
                border-radius: 100px;
                background-color: ${this.getAttribute("cor") || "red"};
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
            
            .texto {
                font-size: 2rem;
            }
        `;

        const textContent = document.createElement('p');
        textContent.setAttribute('class', 'texto');
        textContent.textContent = this.getAttribute('texto');

        raiz.appendChild(textContent);

        shadow.appendChild(style);
        shadow.appendChild(raiz);
    }
}

customElements.define('meu-component', MeuComponent);
