function dataHora(paragrafoData, data, horas) {
  console.log(new Date().toUTCString(year, month, day));
  data.textContent = `${new Date().toLocaleDateString()}`;
  data.setAttribute(
    "datetime",
    `${new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })}`
  );
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
