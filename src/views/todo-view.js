import { LitElement, html } from 'lit-element';

class TodoView extends LitElement {
 
  static get properties() {
    return{
      url: {type: String}
    }
  }
  render() {
    return html`
      <style>
      .field-wrapper{
        padding-bottom: 20px;
      }
      </style>
        <div class="field-wrapper">
        <autocomplete-component
            url="https://jsonplaceholder.typicode.com/users"
            placeholder="Please select a client"
            width="200"
            @on-change="${this.onChanged}"
           >

        </autocomplete-component>
    </div>  
    <div class="field-wrapper">
    <dropdown-search-component
      url="${this.serviceUrl}"
      placeholder="Please select a service"
      width="200">

    </dropdown-search-component>
</div>
<div class="field-wrapper">
  <dropdown-search-component
    url="${this.recipientUrl}"
    placeholder="Please select a recipient"
    width="200">

  </dropdown-search-component>
    </div>
    `;
  }
  /*
   * TO Get value back from web component
   */
  onChanged($event) {
    console.log('Changed',$event);
    this.url = "https://jsonplaceholder.typicode.com/users"+$event.detail.address['city'];
    this.recipientUrl = "https://jsonplaceholder.typicode.com/users"+$event.detail.address['city'];
    this.serviceUrl = "https://jsonplaceholder.typicode.com/users"+$event.detail.address['city'];
    this.isSelected = true;
  }
}

customElements.define('todo-view', TodoView);
