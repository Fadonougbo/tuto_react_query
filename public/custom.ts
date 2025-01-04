class MyElement extends HTMLElement {
	public name = "init";

	connectedCallback() {
		console.log('okok',this.name);
	}

	disconnectedCallback() {
		console.log("okok");
	}

  
}

customElements.define("my-element", MyElement);

const res = customElements.get("my-element");


console.log(new res("doe"));
