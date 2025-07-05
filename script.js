const insertDiv = document.getElementById("insert");
window.addEventListener("keydown", (e) => {
    insertDiv.innerHTML=`
    <div class="container">
  <table>
  <tr>
    <th>key</th>
    <th>keycode </th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </td>
  </tr>
</table>
</div>
`;
});

