import { LitElement, html, css } from 'lit';

class EspeDatePicker extends LitElement {
  static properties = {
    value: { type: String }
  };

  constructor() {
    super();
    this.value = '';
  }

  static styles = css`
    input {
      padding: 8px;
      font-size: 16px;
      border: 2px solid #003C71;
      border-radius: 4px;
      font-family: Arial;
    }
  `;

  render() {
    return html`
      <label>Seleccione una fecha:</label><br />
      <input
        type="date"
        .value=${this.value}
        @input=${this._handleInput}
      />
    `;
  }

  _handleInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('fecha-seleccionada', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('espe-date', EspeDatePicker);
