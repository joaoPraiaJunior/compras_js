function dataHora(paragrafoData, data, horas) {
  const dataAgora = new Date().toISOString();
  const dataFormatada = dataAgora.split("T")[0];

  data.textContent = `${new Date().toLocaleDateString()}`;
  data.setAttribute("datetime", `${dataFormatada}`);
  horas.textContent = `${new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  })}`;
  paragrafoData.textContent = `${
    new Date()
      .toLocaleDateString("pt-BR", { weekday: "long" })
      .charAt(0)
      .toUpperCase() +
    new Date().toLocaleDateString("pt-BR", { weekday: "long" }).slice(1)
  } `;
  paragrafoData.appendChild(data);
  paragrafoData.innerHTML += " às ";
  paragrafoData.appendChild(horas);

  return paragrafoData;
}

export default dataHora;
