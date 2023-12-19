// array with all the items needed( title, color, description, price, image)
var hoodies = [
    ['UCLan Hoodie','Purple','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (1).jpg'],
    ['UCLan Hoodie','Light Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (2).jpg'],
    ['UCLan Hoodie','Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (3).jpg'],
    ['UCLan Hoodie','Dark Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (4).jpg'],
    ['UCLan Hoodie','Black','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (5).jpg'],
    ['UCLan Hoodie','Salmon','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (6).jpg'],
    ['UCLan Hoodie','Burgundy','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (7).jpg'],
    ['UCLan Hoodie','Light Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (8).jpg'],
    ['UCLan Hoodie','Slate Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (9).jpg'],
    ['UCLan Hoodie','Orange','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (10).jpg'],
    ['UCLan Hoodie','Teal','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (11).jpg'],
    ['UCLan Hoodie','Navy','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (12).jpg'],
    ['UCLan Hoodie','Orange','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (13).jpg'],
    ['UCLan Hoodie','Creame','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (14).jpg'],
    ['UCLan Hoodie','Lime','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (15).jpg'],
    ['UCLan Hoodie','Off Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (16).jpg'],
    ['UCLan Hoodie','Red','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (17).jpg'],
    ['UCLan Hoodie','Charcoal','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (18).jpg'],
    ['UCLan Hoodie','Navy Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (19).jpg'],
    ['UCLan Hoodie','Lighter Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (20).jpg'],
    ['UCLan Hoodie','New Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (21).jpg'],
    ['UCLan Hoodie','Forest Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (22).jpg'],
    ['UCLan Hoodie','Ocean Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (23).jpg'],
    ['UCLan Hoodie','Pink','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (24).jpg'],
    ['UCLan Hoodie','Orange New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (25).jpg'],
    ['UCLan Hoodie','Black','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (26).jpg'],
    ['UCLan Hoodie','Light Off Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (27).jpg'],
    ['UCLan Hoodie','Rusty Red','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (28).jpg'],
    ['UCLan Hoodie','Slate Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (29).jpg'],
    ['UCLan Hoodie','Bright Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (30).jpg'],
    ['UCLan Hoodie','Bright Pink','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (31).jpg'],
    ['UCLan Hoodie','Burgundy New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (32).jpg'],
    ['UCLan Hoodie','Navy New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (33).jpg'],
    ['UCLan Hoodie','Bright Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',39.99,'images/items/hoodies/hoodie (34).jpg'],
    ['UCLanLogoJumper','Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (1).jpg'],
    ['UCLanLogoJumper','RustyRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (2).jpg'],
    ['UCLanLogoJumper','WaterBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (3).jpg'],
    ['UCLanLogoJumper','White','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (4).jpg'],
    ['UCLanLogoJumper','Pink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (5).jpg'],
    ['UCLanLogoJumper','Black','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (6).jpg'],
    ['UCLanLogoJumper','OldBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (7).jpg'],
    ['UCLanLogoJumper','DarkGrey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (8).jpg'],
    ['UCLanLogoJumper','Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (9).jpg'],
    ['UCLanLogoJumper','Brown','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (10).jpg'],
    ['UCLanLogoJumper','Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (11).jpg'],
    ['UCLanLogoJumper','DarkRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (12).jpg'],
    ['UCLanLogoJumper','Yellow','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (13).jpg'],
    ['UCLanLogoJumper','LightGrey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (14).jpg'],
    ['UCLanLogoJumper','LightGreen','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (15).jpg'],
    ['UCLanLogoJumper','OldRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (16).jpg'],
    ['UCLanLogoJumper','LightPurple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (17).jpg'],
    ['UCLanLogoJumper','SlateBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (18).jpg'],
    ['UCLanLogoJumper','RealRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (19).jpg'],
    ['UCLanLogoJumper','OldPink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (20).jpg'],
    ['UCLanLogoJumper','SlateGrey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (21).jpg'],
    ['UCLanLogoJumper','BrightGreen','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (22).jpg'],
    ['UCLanLogoJumper','Teal','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (23).jpg'],
    ['UCLanLogoJumper','SkyBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (24).jpg'],
    ['UCLanLogoJumper','SunshinePink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (25).jpg'],
    ['UCLanLogoJumper','Bronze','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (26).jpg'],
    ['UCLanLogoJumper','OliveGreen','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (27).jpg'],
    ['UCLanLogoJumper','BrightWhiteGreen','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (28).jpg'],
    ['UCLanLogoJumper','NavyBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (29).jpg'],
    ['UCLanLogoJumper','RustyOrange','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (30).jpg'],
    ['UCLanLogoJumper','BrightOrange','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (31).jpg'],
    ['UCLanLogoJumper','SkyPurple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (32).jpg'],
    ['UCLanLogoJumper','ReallyRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (33).jpg'],
    ['UCLanLogoJumper','PlumPurple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (34).jpg'],
    ['UCLanLogoJumper','DarkPurple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (35).jpg'],
    ['UCLanLogoJumper','VibrantRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (36).jpg'],
    ['UCLanLogoJumper','OceanBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (37).jpg'],
    ['UCLanLogoJumper','Creame','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (38).jpg'],
    ['UCLanLogoJumper','LighterBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (39).jpg'],
    ['UCLanLogoJumper','LightGrey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',29.99,'images/items/jumpers/jumper (40).jpg'],
    ['UCLanLogoTshirt','NavyBlueNew','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (1).jpg'],
    ['UCLanLogoTshirt','RustyRedNew','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (2).jpg'],
    ['UCLanLogoTshirt','Burgundy','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (3).jpg'],
    ['UCLanLogoTshirt','Pink','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (4).jpg'],
    ['UCLanLogoTshirt','Teal','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (5).jpg'],
    ['UCLanLogoTshirt','Black','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (6).jpg'],
    ['UCLanLogoTshirt','OldRed','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (7).jpg'],
    ['UCLanLogoTshirt','Grey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (8).jpg'],
    ['UCLanLogoTshirt','Red','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (9).jpg'],
    ['UCLanLogoTshirt','Brown','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (10).jpg'],
    ['UCLanLogoTshirt','PdarkPurple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (11).jpg'],
    ['UCLanLogoTshirt','Yellow','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (12).jpg'],
    ['UCLanLogoTshirt','MustardYellow','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (13).jpg'],
    ['UCLanLogoTshirt','DarkGrey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (14).jpg'],
    ['UCLanLogoTshirt','DarkGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (15).jpg'],
    ['UCLanLogoTshirt','BrightGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (16).jpg'],
    ['UCLanLogoTshirt','OliveGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (17).jpg'],
    ['UCLanLogoTshirt','DarkGrey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (18).jpg'],
    ['UCLanLogoTshirt','Orange','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (19).jpg'],
    ['UCLanLogoTshirt','Purple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (20).jpg'],
    ['UCLanLogoTshirt','SlateBlue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (21).jpg'],
    ['UCLanLogoTshirt','BrightPink','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (22).jpg'],
    ['UCLanLogoTshirt','BrightlyGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (23).jpg'],
    ['UCLanLogoTshirt','LimeGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (24).jpg'],
    ['UCLanLogoTshirt','OceanBlue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (25).jpg'],
    ['UCLanLogoTshirt','DarkRed','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (26).jpg'],
    ['UCLanLogoTshirt','AnotherGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (27).jpg'],
    ['UCLanLogoTshirt','SlateGrey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (28).jpg'],
    ['UCLanLogoTshirt','BrightOrange','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (29).jpg'],
    ['UCLanLogoTshirt','AnotherPurple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (30).jpg'],
    ['UCLanLogoTshirt','RealRed','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (31).jpg'],
    ['UCLanLogoTshirt','BrilliantBlue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (32).jpg'],
    ['UCLanLogoTshirt','Creame','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (33).jpg'],
    ['UCLanLogoTshirt','TealBlue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (34).jpg'],
    ['UCLanLogoTshirt','White','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',19.99,'images/items/tshirt/tshirt (35).jpg'],

];
var Cartproducts=[];
// pushes the elements information into the html

function run() {
    var main = document.getElementById('products');

    for (var i = 0; i < hoodies.length; i++) {

        var element = document.createElement('div');
        var hoodie = document.createElement('img');
        var price = document.createElement('price');
        var color = document.createElement('color');
        var description1 = document.createElement('description1');
        var description2 = document.createElement('description2');
        var addbutton = document.createElement('button');
        var type = document.createElement('input');
        var read= document.createElement('a');
        read.textContent = 'Read Here';
        read.href= 'item.html';

        element.style.display = "inline-block";
        element.style.width = "400px";
        element.style.border = "2px solid black";
        element.style.textAlign = 'center';


// edit pushed elements information from the array

        main.appendChild(element);
        element.appendChild(hoodie);
        element.appendChild(description1);
        element.appendChild(color);
        element.appendChild(description2);
        element.appendChild(price);
        element.appendChild(addbutton);
        element.appendChild(type);
        element.appendChild(read);



//get the internal html content of element as a string
        description1.innerHTML = hoodies[i][0];
        color.innerHTML = hoodies[i][1];
        description2.innerHTML = hoodies[i][2];
        price.innerHTML = "$" + hoodies[i][3];
        hoodie.src = hoodies[i][4];
        addbutton.innerHTML = 'Buy Now!';
        type.type = 'number';
// code to add buy button
        type.setAttribute("id", 'input' + i);
        type.value = 1;

        addbutton.dataset.cartIndex = i;
        addbutton.addEventListener('click', adding, false);

    }
}
    function adding(event) {
        const NUM = event.currentTarget.dataset.cartIndex;
        Cartproducts.push([hoodies[NUM]]);
        Cartproducts[Cartproducts.length - 1][1] = //document.getElementById('input' + NUM).value;
        Number(document.getElementById('input' + NUM).value);
        updateCart();
    }//function to add items in the cart
    var totalItems = 0;
//function to update the card when products are added

    function updateCart(){
                var itemCounter = document.getElementById('itemCount');

                totalItems= 0;
                window.sessionStorage.setItem('Cartproducts', JSON.stringify(Cartproducts));

                 var data= sessionStorage.getItem('Cartproducts');
                data = JSON.parse(data);

                 Cartproducts = data;

                for(var i = 0; i< Cartproducts.length; i++){
                    totalItems += Cartproducts[i][1]
                }
                  itemCounter.innerHTML= totalItems;

            }




function loadCart(){ // to load products on the cart page
    var main = document.getElementById('cartload');

    var data= sessionStorage.getItem('Cartproducts');
    data = JSON.parse(data);

    Cartproducts = data;

    updateCart();

    for(var i=0; i<Cartproducts.length; i++){

        var element= document.createElement('div');
        var hoodie= document.createElement('img');
        var price= document.createElement('price');
        var color= document.createElement('color');
        var description1= document.createElement('description1');
        var description2= document.createElement('description2');
        var deleteproduct= document.createElement('button');
        var amount= document.createElement('h2');
        var total= document.createElement('h3');



// pushes the elements information into the html

        main.appendChild(element);
        element.appendChild(hoodie);
        element.appendChild(description1);
        element.appendChild(color);
        element.appendChild(description2);
        element.appendChild(price);
        element.appendChild(deleteproduct);
        element.appendChild(amount);
        element.appendChild(total);


// edit pushed elements information from the array


        description1.innerHTML= Cartproducts[i][0][0];
        price.innerHTML=  "$" +Cartproducts[i][0][3];
        hoodie.src= Cartproducts[i][0][4];

        deleteproduct.innerHTML= 'Delete';
        deleteproduct.dataset.cartIndex = i;
        deleteproduct.addEventListener('click', deleteMe, false);

        amount.innerHTML= Cartproducts[i][1];
        total.innerHTML= '$' + Cartproducts[i][1] * Cartproducts[i][0][3];
        }
    function deleteMe(){
        const NUM = event.currentTarget.dataset.cartIndex;
        delete Cartproducts[NUM];
        Cartproducts = Cartproducts.filter(item => item !== undefined);

        updateCart();
        loadCart();
        window.location.reload(true)
        // function to be able to delete items in the cart

    }
}
// resources:
//https://www.youtube.com/watch?v=Baisem-rmAI&t=3s
//https://www.youtube.com/watch?v=flItyHiDm7E
//https://www.youtube.com/watch?v=LxmEb_MD21A
//https://www.youtube.com/watch?v=Baisem-rmAI
//https://www.youtube.com/watch?v=YEzwJNqfMuE


