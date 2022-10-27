var container = document.createElement("div");
container.setAttribute("class", "container");
var row = document.createElement("div");
row.setAttribute("class", "row");
row.classList.add("row", "m-3");
container.append(row);

var res = fetch("https://anapioficeandfire.com/api/books");
res.then((data) => data.json()).then((data1) => foo(data1));


function foo(data1) {
   for (var i = 0; i < data1.length; i++) {
      row.innerHTML += `<div class="col-md-4">
 <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  
  <div class="card-body">


  <h5 class="card-title">${data1[i].name} </h5>
  
  
  <h4 class= style="card-title">ISBN:${data1[i].isbn}</h4>

  <h4 class="card-title">Pages:${data1[i].numberOfPages} </h4>

  <h4 class="card-title">Author:${data1[i].authors}</h4>

  <h4 class="card-title">Publisher:${data1[i].publisher}</h4>

  <h4 class="card-title">Release Date:${data1[i].released}<h4>

  
  </div>
</div>
  
   </div>`;

   row.innerHTML += `<div class="col-md-4">
 <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  
  <div class="card-body">


  <h5 class="card-title">${data1[i].name} </h5>
  
  
  <h4 class= style="card-title">ISBN:${data1[i].isbn}</h4>

  <h4 class="card-title">Pages:${data1[i].numberOfPages} </h4>

  <h4 class="card-title">Author:${data1[i].authors}</h4>

  <h4 class="card-title">Publisher:${data1[i].publisher}</h4>

  <h4 class="card-title">Release Date:${data1[i].released}<h4>


  
  </div>
</div>
  
   </div>`;


   row.innerHTML += `<div class="col-md-4">
 <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  
  <div class="card-body">


  <h5 class="card-title">${data1[i].name} </h5>
  
  
  <h4 class= style="card-title">ISBN:${data1[i].isbn}</h4>

  <h4 class="card-title">Pages:${data1[i].numberOfPages} </h4>

  <h4 class="card-title">Author:${data1[i].authors}</h4>

  <h4 class="card-title">Publisher:${data1[i].publisher}</h4>

  <h4 class="card-title">Release Date:${data1[i].released}<h4>


  
  </div>
</div>
  
   </div>`;

   row.innerHTML += `<div class="col-md-4">
 <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  
  <div class="card-body">


  <h5 class="card-title">${data1[i].name} </h5>
  
  
  <h4 class= style="card-title">ISBN:${data1[i].isbn}</h4>

  <h4 class="card-title">Pages:${data1[i].numberOfPages} </h4>

  <h4 class="card-title">Author:${data1[i].authors}</h4>

  <h4 class="card-title">Publisher:${data1[i].publisher}</h4>

  <h4 class="card-title">Release Date:${data1[i].released}<h4>


  
  </div>
</div>
  
   </div>`;


      document.body.append(container);
   }

}


