const week = document.getElementById("week");
const divDias = document.getElementById("divdias");
const divhoras = document.getElementById("divhoras");
const btnDone = document.getElementById("done");

//variables
var dia2 = "";
var hora2 = "";

//cuando cambie el calendario
week.addEventListener("change", async () => {
  dia2 = "";
  hora2 = "";

  week.disabled = true;
  divDias.innerHTML = "";
  divhoras.innerHTML = "";
  divDias.style = "pointer-events:auto";

  try {
    //obtener los dias disponibles para esa semana
    const query = await fetch(
      "http://localhost:4000/api/schedule/" + week.value,
      { method: "GET" }
    );

    const req = await query.json();
    week.disabled = false;

    req.forEach((day) => {
      divDias.innerHTML += `<input class="btn2" type="button" value="${day}" onClick="">`;
    });

    if (req[0] == "NO HAY DIAS DISPONIBLES")
      divDias.style = "pointer-events:none";

    const getHours = async (data) => {
      var dia = data.toLowerCase();
      dia2 = dia;

      const quer = await fetch(
        "http://localhost:4000/api/schedule/" + week.value + "/" + dia,
        { method: "GET" }
      );

      const resp2 = await quer.json();
      return resp2;
    };

    var buttons = document.getElementsByClassName("btn2");
    var buttonsCount = buttons.length;
    for (var i = 0; i < buttonsCount; i += 1) {
      buttons[i].onclick = async function (e) {
        divhoras.innerHTML = "";
        this.style.color = "red";
        const hous = await getHours(this.value);

        hous.forEach((hora) => {
          divhoras.innerHTML += `<input class="btnhora" type="radio" value="${hora} " id="${hora}" name="hora">
        <label for="${hora}">${hora}</label>
        `;
        });

        var buttonsHour = document.getElementsByClassName("btnhora");
        var buttonsHourCount = buttonsHour.length;

        for (var i = 0; i < buttonsHourCount; i += 1) {
          buttonsHour[i].onclick = async function (e) {
            hora2 = this.value;
            this.style.color = "red";
          };
        }
      };
    }
  } catch (e) {
    console.log(e);
  }
});

btnDone.addEventListener("click", () => {
  console.log(dia2);

  console.log(hora2);
  const h1 = document.getElementById("diacita");
  const h2 = document.getElementById("horacita");
  h1.textContent = dia2;
  h2.textContent = hora2;
});
