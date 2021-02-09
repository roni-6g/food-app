const searchFood = () => {
    const searchFood = document.getElementById('search-food').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`;
    //Load data form search api
    fetch(url)
        .then(response => response.json())
        .then(data => showFoods(data.meals))
        .catch(error => errorResult('We are sorry... This item is not found try again with another name!'));
}

const showFoods = (foods) => {
    const foodSection = document.getElementById("food-container");
    foodSection.innerHTML = '';
    foods.forEach(food => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "food-item col-4 food-content";
        const foodInfo = `
            <img src="${food.strMealThumb}">
            <h4> ${food.strMeal} </h4>
            <button onClick="showDetails('${food.idMeal}')" class="btn btn-primary"> See More </button>
        `;
        foodDiv.innerHTML = foodInfo;
        foodSection.appendChild(foodDiv)
    });
}

const showDetails = (foodDetails) => {
    const detailsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodDetails}`
    fetch(detailsUrl)
    .then(response => response.json())
    .then(data => displayFoodInfo(data.meals[0]))
}

const displayFoodInfo = foodsInfo => {
    const infoSection = document.getElementById('food-details');
    infoSection.innerHTML = '';
    const detailsInfoDiv = document.createElement("div");
    detailsInfoDiv.className = "show-details";
    const foodDetailsInfo = `
        <img src="${foodsInfo.strMealThumb}">
        <h3> <b> Name:</b> ${foodsInfo.strMeal} </h3>
        <h4> <b> ID: </b> ${foodsInfo.idMeal} </h4>
        <h5> <b> Ingredient:</b> ${foodsInfo.strIngredient1} </h5>
        <h5> ${foodsInfo.strIngredient2} </h5>
        <h5> ${foodsInfo.strIngredient3} </h5>
        <h5> ${foodsInfo.strIngredient4} </h5>
        <h5> ${foodsInfo.strIngredient5} </h5>
    `;
    detailsInfoDiv.innerHTML = foodDetailsInfo;
    infoSection.appendChild(detailsInfoDiv);
}

const errorResult = (error) => {
    const displayError = document.getElementById('error-text');
    const errorInfo = `
    <div class="alert alert-danger">
        <b>${error}</b>
    </div>
    `;
    displayError.innerHTML = errorInfo;
       
}

