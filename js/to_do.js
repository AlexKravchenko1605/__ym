export const to_do_add = function () {
  const out1 = document.querySelector(".out-1");
  const add = document.querySelector(".add_1");
  const inputOnThePage = document.querySelector(".input_field");

  const inputOnThePage2 = document.querySelector(".input_field_2");
  const add2 = document.querySelector(".add_2");
  const out2 = document.querySelector(".out-2");

  const inputOnThePage3 = document.querySelector(".input_field_3");
  const add3 = document.querySelector(".add_3");
  const out3 = document.querySelector(".out-3");

  const inputOnThePage4 = document.querySelector(".input_field_4");
  const add4 = document.querySelector(".add_4");
  const out4 = document.querySelector(".out-4");

  const ul_Do = document.createElement("ol");
  ul_Do.innerHTML = localStorage.getItem("to_Do");
  out1.append(ul_Do);

  const ul_Call = document.createElement("ol");
  ul_Call.innerHTML = localStorage.getItem("to_Call");
  out2.append(ul_Call);

  const ul_Write = document.createElement("ol");
  ul_Write.innerHTML = localStorage.getItem("to_Write");
  out3.append(ul_Write);

  const ul_Ideas = document.createElement("ol");
  ul_Ideas.innerHTML = localStorage.getItem("to_Ideas");
  out4.append(ul_Ideas);

  add.addEventListener("click", () =>
    addToList(inputOnThePage, "to_Do", ul_Do)
  );
  add2.addEventListener("click", () =>
    addToList(inputOnThePage2, "to_Call", ul_Call)
  );
  add3.addEventListener("click", () =>
    addToList(inputOnThePage3, "to_Write", ul_Write)
  );
  add4.addEventListener("click", () =>
    addToList(inputOnThePage4, "to_Ideas", ul_Ideas)
  );

  function addToList(input, name, list) {
    if (input.value !== "") {
      let li = document.createElement("li");
      li.textContent = `${input.value}`;
      li.className = "boom";
      list.append(li);
      input.value = "";
      localStorage.setItem(`${name}`, list.innerHTML);
    }
  }

  ul_Do.addEventListener("click", (event) => deleteLi(event, "to_Do", ul_Do));
  ul_Call.addEventListener("click", (event) =>
    deleteLi(event, "to_Call", ul_Call)
  );
  ul_Write.addEventListener("click", (event) =>
    deleteLi(event, "to_Write", ul_Write)
  );
  ul_Ideas.addEventListener("click", (event) =>
    deleteLi(event, "to_Ideas", ul_Ideas)
  );

  function deleteLi(event, name, list) {
    event.preventDefault();
    let li = event.target.closest("li");
    if (!li) return;
    if (!list.contains(li)) return;
    li.remove();
    localStorage.setItem(`${name}`, list.innerHTML);
  }
};
