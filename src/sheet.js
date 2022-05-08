const hash = (s) =>
  `hash${s.split("").reduce((num, t) => {
    num = (num << 5) - num + t.charCodeAt(0);

    return num & num;
  }, 0)}`;

class Sheet {
  constructor() {
    document.head.appendChild((this.ele = document.createElement("style")));
  }

  generateClassName(style) {
    console.log(style);
    const styledClassName = hash(style);

    const rule = `.${styledClassName} { ${style} }`;

    !this.ele.innerText.includes(rule) &&
      this.ele.appendChild(document.createTextNode(rule));

    return styledClassName;
  }
}

export default Sheet;
