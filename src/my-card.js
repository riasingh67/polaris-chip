import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.fancy = false;
    this.title
  }
  
static get properties() {
  return {
    fancy: { type: Boolean, reflect: true }
  }
}

  static get styles() {
    return css`
      
    a {
    text-decoration: none;
  }

  .btn-wrapper {
    background-color: orange;
    padding: 20px;   
    margin: 10px auto; 
    max-width: 400px;   
    border-radius: 12px; 
    text-align: center; 
  }

  .btn {
    background-color: blue;
    color: white;
    font-size: 20px;
    border-radius: 10%;
    padding: 16px 16px 16px 16px;
    margin: 4px 4px 4px 32px;
    border: 6pc solid orange;
  }

  .btn:focus,
    .btn:hover {
      background-color: green;
    }

    h1 {
      color: blue;
      font-size: 40px;
      text-align: center;
    }

  h1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: blue;
    font-size: 40px;
    text-align: center;
    background: white; 
  }

  p {
    font-size: 20px;
    color: gray;
    text-align: center;
    margin-top: 10px; /* space between heading and description */
  }

  .description {
    text-align: center;
    color: #555;
    font-size: 18px;
    margin-bottom: 20px; 
    font-family: Arial, sans-serif;
  }
  
  .my-image {
    display: block;         
    margin: 0 auto;
    width: 300px;           
    border-radius: 12px;    
    box-shadow: 0 4px 10px rgba(0,0,0,0.2); 
  }

    a {
    text-decoration: none;
  }

  .btn-wrapper {
    background-color: orange;
    padding: 40px;
    margin: 20px;
  }

  .btn {
    background-color: blue;
    color: white;
    font-size: 20px;
    border-radius: 20%;
    padding: 16px 16px 16px 16px;
    margin: 4px 4px 4px 32px;
    border : 4pc solid orange; 
  }

  .btn:focus,
  .btn:hover {
    background-color: green;
  }

  h1 {
    color: blue;
    font-size: 40px;
    text-align: center;
  }

  h1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: blue;
    font-size: 40px;
    text-align: center;
    background: white; 
  }

  .description {
    text-align: center;
    color: #555;
    font-size: 18px;
    margin-bottom: 20px; 
    font-family: Arial, sans-serif;
  }

  .my-image {
    display: block;         
    margin: 0 auto;
    width: 300px;           
    border-radius: 12px;    
    box-shadow: 0 4px 10px rgba(0,0,0,0.2); 
  }
  
  .main-heading {
    font-size: 24px;   
    color: blue;       
    margin: 10px 0;    
  }

  .main-heading {
    font-size: 35px;   
    color: blue;
    margin: 10px 0;
    text-align: left;  
  }

  .fancy {
    background-color: lightblue; 
    border: 3px solid navy;
  }

    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`<div>${this.title}</div>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
