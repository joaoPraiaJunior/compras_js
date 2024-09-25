function dataHora(paragrafoData, data, horas) {
  const dataAgora = new Date();
  const dataISO = dataAgora.toISOString();
  const dataFormatada = dataISO.split("T")[0];
  const opcoesHora = {
    hour: "numeric",
    minute: "numeric",
  };

  const opcoesDiaMesAno = {
    weekday: "long",
  };

  data.textContent = `${new Date().toLocaleDateString()}`;
  data.setAttribute("datetime", `${dataFormatada}`);
  horas.textContent = `${dataAgora.toLocaleTimeString("pt-BR", opcoesHora)}`;
  paragrafoData.textContent = `${
    dataAgora
      .toLocaleDateString("pt-BR", opcoesDiaMesAno)
      .charAt(0)
      .toUpperCase() +
    dataAgora.toLocaleDateString("pt-BR", opcoesDiaMesAno).slice(1)
  } `;
  paragrafoData.appendChild(data);
  paragrafoData.innerHTML += " às ";
  paragrafoData.appendChild(horas);

  return paragrafoData;
}

export default dataHora;
