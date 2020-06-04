function populateUfs() {
  const ufSelect = document.querySelector("select[name=uf");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      }
    });
}

populateUfs();

function getCities(event) {
  const citySelect = document.querySelector("[name=city]");
  const stateInput = document.querySelector("[name=state]");
  const ufValue = event.target.value;
  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  // Lipando as cidades
  citySelect.innerHTML = "";
  citySelect.disabled = true;

  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (city of cities) {
        console.log("for");
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
      }
      citySelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);

// Itens de Coleta
// Pegando todos os Li's
const itemsToCollect = document.querySelectorAll(".items-grid li");

for (item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

const collectedItems = document.querySelector("input[name=items");
let selectedItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;

  // Add or Remove class with JavaScript
  itemLi.classList.toggle("selected");

  const itemId = itemLi.dataset.id;

  // Verificar se Existe itens selecionados,
  // Se sim pegar os itens selecionados
  const alreadySelected = selectedItems.findIndex((item) => {
    const itemFound = item == itemId;
    return itemFound;
  });

  // Se já estiver selecionado;
  if (alreadySelected >= 0) {
    // remover da seleção
    const filteredItems = selectedItems.filter((item) => {
      const itemIsDifferent = item != itemId;
      return itemIsDifferent;
    });
    selectedItems = filteredItems;
  } else {
    // Se não tiver seleionado, adicione
    selectedItems.push(itemId);
  }
  // Atualizar o campo escondido com os itens selecionados
  collectedItems.value = selectedItems;
}
