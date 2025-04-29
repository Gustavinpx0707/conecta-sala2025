
function adicionarRecado() {
  const input = document.getElementById("novo-recado");
  const texto = input.value.trim();
  if (texto !== "") {
    const lista = document.getElementById("lista-recados");
    const item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item);
    input.value = "";
  }
}
