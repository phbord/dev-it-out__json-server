function handleClick() {
  document.getElementById('btn-data').addEventListener('click', (e) => {
    e.preventDefault();

    fetch("http://localhost:3004/users")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let listHtml = '';

        data.map(item => listHtml += `<li class="list-group-item"><b>${item.name}</b> : ${item.activity}</li>`);
        document.getElementById('list').innerHTML = listHtml;
      })
      .catch(err => console.log(err));
  });
}

function handleSubmit() {
  document.getElementById('form-create').addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputName = document.getElementById('name').value;
    const inputActivity = document.getElementById('activity').value;
    const data = { "name": inputName, "activity": inputActivity };

    await fetch("http://localhost:3004/users", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .catch(err => console.log(err));
  });
}


document.addEventListener('DOMContentLoaded', () => {
  handleClick();
  handleSubmit();
});