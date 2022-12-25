export const createDiagrams = function (cart) {
  let instagramm = [];
  let vk = [];
  let friends = [];
  let doctor = [];
  for (let i = 0; i < cart.users.length; i++) {
    switch (cart.users[i].know_about_us) {
      case "Instagramm":
        instagramm.push(1);
        break;
      case "VK":
        vk.push(1);
        break;
      case "Друзья":
        friends.push(1);
        break;
      case "Доктор":
        doctor.push(1);
        break;
      default:
        break;
    }
  }
  const ctx = document.getElementById("myChart");
  const config = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Instagram", "VK", "Друзья", "Доктора"],
      datasets: [
        {
          data: [],
          borderWidth: 1,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(54, 235, 62)",
          ],
        },
      ],
    },
  });

  config.config._config.data.datasets[0].data.push(
    instagramm.length,
    vk.length,
    friends.length,
    doctor.length
  );
  config.update();
};
