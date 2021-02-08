function searchFood() {
    const foodName = document.getElementById('input-food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(response => response.json())
        .then(data => showFood(data)) //console.log(data.meals))    
}

const foodGalllery = document.getElementById('food-bank');
function showFood(foodList) {
    const foodItem = foodList.meals;
    foodItem.forEach(food => {
        const foodImg = food.strMealThumb;
        const foodName = food.strMeal;
        const foodResult = `
             <div class="gallery-box" onclick="foodDetails()">
                 <img class="food-img" src="${foodImg}">
                 <h5 class="food-name"> ${foodName} </h5>
                 <button> See More </button>
             </div>
         `;
        const div = document.createElement('div');
        div.innerHTML = foodResult;
        foodGalllery.appendChild(div);
    });
}

//Showing Food Details Informations
function foodDetails() {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        .then(response => response.json())
        .then(data => showFoodInfo(data))
       
}

const foodInfoContainer = document.getElementById('food-details');

function showFoodInfo(foodItem) {
    const foodInfo = foodItem.meals[0];
    const foodImg = foodInfo.strMealThumb;
    const foodTitle = foodInfo.strMeal;
    const foodIt = foodInfo.idMeal;
    const foodArea = foodInfo.strArea;
    const foodInstractions = foodInfo.strInstructions;
    // console.log(foodInstractions);
    const showFoodInstractions = `
    <div class="details-info"> 
        <img src="${foodImg}">
        <h3> Food Name: ${foodTitle} </h3>
        <h4> Food ID: ${foodIt} </h4>
        <h5> Avaialble In: ${foodArea} </h5>
        <p>
            <b> Instractions: </b>
            ${foodInstractions}
        </p>
    </div>
`;
    const foodDetailsDiv = document.createElement('div');
    foodDetailsDiv.innerHTML = showFoodInstractions;
    foodInfoContainer.appendChild(foodDetailsDiv);

}


