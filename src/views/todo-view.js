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
            width="400"
            @on-change="${this.onChanged}"
           >

        </autocomplete-component>
    </div>  
    <div class="field-wrapper">
    <dropdown-search-component
      url="${this.serviceUrl}"
      placeholder="Please select a service"
      width="400"
      @on-change="${this.onChangeService}">

    </dropdown-search-component>
</div>
<div class="field-wrapper">
  <dropdown-search-component
    url="${this.recipientUrl}"
    placeholder="Please select a recipient"
    width="400"
    @on-change="${this.onChangeRecipient}">

  </dropdown-search-component>
    </div>
    `;
  }
  /*
   * TO Get value back from web component
   */
  onChanged($event) {
    console.log('Changed',$event);
    this.url = "https://jsonplaceholder.typicode.com/users?id="+$event.detail.address['city'];
    this.recipientUrl = "https://jsonplaceholder.typicode.com/users";
    this.serviceUrl = "https://jsonplaceholder.typicode.com/users";
    this.isSelected = true;
  }
  /*
   * TO detect chnage of service
   */
  onChangeRecipient($event) {
    console.log('Changed',$event);
  }
   /*
   * TO deetct chnage of service
   */
  onChangeService($event) {
    console.log('Changed',$event);
  }
}

customElements.define('todo-view', TodoView);
