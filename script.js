const menuCategoriesEl = document.getElementById("menuCategories");
const foodItemsEl = document.getElementById("foodItems");

let selectedCategory = window.menu_list[0]?.menu_name || "";

function renderMenuCategories() {
  menuCategoriesEl.innerHTML = "";
  window.menu_list.forEach(menu => {
    const div = document.createElement("div");
    
    div.className = "menu-category" + (menu.menu_name === selectedCategory ? " active" : "");
    div.innerHTML = `
      <img src="${menu.menu_image}" alt="${menu.menu_name}" />
      <p>${menu.menu_name}</p>
    `;
      div.addEventListener("click", () => {
      if (selectedCategory === menu.menu_name) {
        // If clicked category is already selected, reset filter
        selectedCategory = "";  // empty means show all
      } else {
        selectedCategory = menu.menu_name;
      }
      renderMenuCategories();
      renderFoodItems();
    });

    menuCategoriesEl.appendChild(div);
  });
}


function renderFoodItems() {
  foodItemsEl.innerHTML = "";

  const filteredItems = selectedCategory
    ? window.food_list.filter(item => item.category === selectedCategory)
    : window.food_list;

  filteredItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "food-item";

    div.innerHTML = `
      <div class="food-item-img-container">
        <img class="food-item-image" src="${item.image}" alt="${item.name}" />
      </div>
      <div class="food-item-info">
        <div class="food-item-name-rating">
          <p>${item.name}</p>
          <img src="assets/rating_starts.png" alt="rating" />
        </div>
        <p class="food-item-descreption">${item.description}</p>
        <p class="food-item-price">$${item.price}</p>
      </div>
    `;

    foodItemsEl.appendChild(div);
  });
}


// Initial render
renderMenuCategories();
renderFoodItems();


  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove active from all
      navItems.forEach(i => i.classList.remove("active"));
      // Add active to clicked
      item.classList.add("active");
    });
  });
