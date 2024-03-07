
fetch('http://localhost:3000/admin_list')
.then(response => response.json())
.then(data => {
  // Xử lý dữ liệu ở đây, ví dụ in ra console
  console.log('Dữ liệu từ API:', data);

  // Hiển thị dữ liệu trên trang web
  displayData(data);
})
.catch(error => console.error('Lỗi khi tải dữ liệu:', error));

// Hàm hiển thị dữ liệu trên trang web
function displayData(data) {

// Lặp qua mỗi bài viết và hiển thị thông tin
data.forEach(prod => {
  const postElement = document.querySelectorAll("admin_prod_list");
  postElement.innerHTML = `
  <td>{{$index + 1}}</td>
  <td><img src="img/${prod.img}" alt=""></td>
  <td>
      ${prod.title}
  </td>
  <td>${prod.price}đ</td>
  <td>${prod.view}</td>
  <td>
      <button ng-click="edit($index)" class="btn" data-bs-toggle="modal" data-bs-target="#myModal"><i class="bi bi-arrow-repeat"></i> Sửa</button>
      <button class="btn" ng-click="delete($index)"><i class="bi bi-trash3"></i> Xoá</button>
  </td>
  `;
});
}
