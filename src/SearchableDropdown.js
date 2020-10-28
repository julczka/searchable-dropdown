import { LitElement, html, css } from 'lit-element';

export class SearchableDropdown extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-content: center;
        position: relative;
        font-family: inherit;
      }

      .label {
        background: var(--background, white);
        color: var(--primary-color, black);
        position: absolute;
        top: 0;
        transform: translateY(-50%);
        left: 1em;
        padding: 0 0.8em;
        font-size: 0.8em;
      }

      .input-btn {
        position: absolute;
        display: grid;
        place-items: center;
        top: 50%;
        transform: translateY(-50%) rotate(180deg);
        right: 1em;
        width: 10px;
        height: 10px;
        color: var(--primary-color, grey);
        transition: transform var(--animation-time, 0.3s) ease 0.1s;
      }

      .rotate {
        transform: translateY(-50%) rotate(0deg);
      }

      input {
        padding: 1em;
        font-size: 1rem;
        border: var(--border, solid 1px grey);
        background: inherit;
        color: var(--text-color, black);
      }

      input:focus {
        outline: 2px solid var(--active, pink);
      }

      input:disabled {
        background: var(--primary-color, black);
        cursor: not-allowed;
      }

      .options_container {
        position: absolute;
        top: 110%;
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        max-height: calc(2rem * var(--size, 5));
        overflow-y: scroll;
        transform: scaleY(0);
        transform-origin: 100% 0%;
        transition: all var(--animation-time, 0.3s) ease 0.1s;
        border: var(--border, solid 1px grey);
        color: var(--text-color, black);
      }

      input:focus ~ .options_container {
        transform: scaleY(1);
        transform-origin: 100% 0%;
      }

      .option {
        padding: 0.5em 1em;
        transition: all var(--animation-time, 0.3s) ease 0.1s;
        cursor: pointer;
      }

      .option:hover {
        background: var(--active, pink);
        color: var(--text-color, black);
      }

      ul {
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
      }
    `;
  }

  static get properties() {
    return {
      options: { type: Array },

      filter: { attribute: false },

      selected: { type: String, reflect: true },

      placeholder: { type: String },

      disabled: { type: Boolean },

      label: { type: String },

      size: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.filter = '';
    this.options = [];
    this.selected = '';
    this.disabled = false;
    this.label = 'Options';
  }

  render() {
    return html`
      <div class="input-btn" @click="${this.inputFocus}">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-up"
          class="svg-inline--fa fa-chevron-up fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
          ></path>
        </svg>
      </div>

      <span class="label">${this.label}</span>
      <input
        type="text"
        placeholder="${this.placeholder || 'Select option'}"
        ?disabled="${this.disabled}"
        .value="${this.filter}"
        @input="${this.filterOptions}"
        @focus="${this.rotateBtn}"
        @blur="${this.checkValue}"
      />

      <ul class="options_container hide">
        ${this.options.map(
          option =>
            html`<li
              class="option${this.options.indexOf(option)} option"
              @click="${this._selctOption}"
              value="${option}"
            >
              ${option}
            </li>`
        )}
      </ul>
    `;
  }

  _selctOption(e) {
    const container = this.shadowRoot.querySelector('.options_container');
    const selected = e.target.getAttribute('value');

    this.filter = selected;
    this.selected = selected;
    this.emmitValue(selected);

    container.classList.toggle('hide');
  }

  emmitValue(value) {
    const event = new CustomEvent('selected', {
      detail: value,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  filterOptions() {
    this.filter = this.shadowRoot.querySelector('input').value;
    this.options.forEach(option => {
      const index = this.options.indexOf(option);
      const el = this.shadowRoot.querySelector(`.option${index}`);

      if (option.toLowerCase().includes(this.filter.toLowerCase()))
        el.style.display = '';
      else el.style.display = 'none';
    });
  }

  checkValue() {
    const btn = this.shadowRoot.querySelector('.input-btn');

    if (this.options.includes(this.filter) && this.selected.hasChanged) {
      this.selected = this.filter;
      this.emmitValue(this.selected);
    } else {
      this.filter = '';
      this.selected = '';
    }

    btn.classList.remove('rotate');
    //
  }

  inputFocus() {
    const input = this.shadowRoot.querySelector('input');
    this.rotateBtn();
    input.focus();
  }

  rotateBtn() {
    const btn = this.shadowRoot.querySelector('.input-btn');
    btn.classList.add('rotate');
  }
}
