var category_menu = document.getElementById('category-menu');
var category_grid = document.getElementById('category-table');
var category_arr = {};

for(var i = 0 ; i < 80 ; i++){
    category_arr[i] = "Category "+i;
}

function open_category(){
    category_menu.style.display ='block';
}

function close_category(){
    category_menu.style.display ='none';
}

function init(){
    //add element to category_grid
    var lenght_Arr = Object.keys(category_arr).length;
    for(var i = 0 ; i < lenght_Arr ; i = i+5 ){
        const tr = document.createElement("tr");
        if( i + 5 > lenght_Arr){
            for(var j = 0 ; j <= lenght_Arr - i ; j++){
                const td = document.createElement("td");
                td.textContent = category_arr[i+j];
                tr.appendChild(td);
            }
            category_grid.appendChild(tr);
        }
        else {
            for (var j = 0; j < 5; j++) {
                const td = document.createElement("td");
                td.textContent = category_arr[i + j];
                tr.appendChild(td);
            }
            category_grid.appendChild(tr);
        }
    }
}