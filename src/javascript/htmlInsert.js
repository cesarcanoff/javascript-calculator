document.querySelector("main").innerHTML = `
<div class="calculator">
<header class="screen">
  <div class="result">
    <p id="full-result"></p>
  </div>
</header>
<section class="buttons">
  <div class="container-buttons">
    <button id="history">CE</button>
    <button id="clear">C</button>
    <button id="backspace">Del</button>
    <button id="key">/</button>
    <button id="key7">7</button>
    <button id="key8">8</button>
    <button id="key9">9</button>
    <button id="key">*</button>
    <button id="key4">4</button>
    <button id="key5">5</button>
    <button id="key6">6</button>
    <button id="key">-</button>
    <button id="key1">1</button>
    <button id="key2">2</button>
    <button id="key3">3</button>
    <button id="key">+</button>
    <button id="key0">0</button>
    <button id="key-dot">.</button>
    <button id="equals" class="equals">=</button>
  </div>
</section>
</div>
`;
