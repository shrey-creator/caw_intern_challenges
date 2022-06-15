import { menuItems } from "../app.js";

function getCartItemDiv(menuItemDetail)
{
    let listNode=document.createElement("li");
    
    //get plate div
    let plateDiv=getPlateDiv(menuItemDetail);

    //content div
    let contentDiv=getContentDiv(menuItemDetail);
    //qty wrapper div
    let qtyWrapperDiv=getQuatityWrapper(menuItemDetail);
    listNode.appendChild(plateDiv)
    listNode.appendChild(contentDiv);
    listNode.appendChild(qtyWrapperDiv);
    return listNode;
    
}
function getMenuItemDiv(event)
{
    let menuItem=event.target.parentNode.parentNode;
    return menuItem;
}
function getMenuItemDetails(menuItemName)
{
    
    let selectedMenuItemDetail=false;
    menuItems.forEach((item)=>{
        if(item.name===menuItemName)
        {
            selectedMenuItemDetail=item;
        }
    })
    return selectedMenuItemDetail;

}

function getPlateDiv(menuItemDetail)
{
    let plateDiv=document.createElement("div");
    plateDiv.classList.add("plate")

    let dishImage = document.createElement("img");
    dishImage.src="images/"+menuItemDetail.image;

    let qtyPlateDiv=document.createElement("div");
    qtyPlateDiv.classList.add("quantity");

    qtyPlateDiv.appendChild(document.createTextNode(`${menuItemDetail.count+1}`));
    
    plateDiv.appendChild(dishImage);
    plateDiv.appendChild(qtyPlateDiv);

    return plateDiv;
}
function getContentDiv(menuItemDetail)
{
    let contentDivNode=document.createElement("div");
    contentDivNode.classList.add("content");

    let menuItemNode=document.createElement("p");
    menuItemNode.classList.add("menu-item");
    menuItemNode.appendChild(document.createTextNode(`${menuItemDetail.name}`));

    let priceNode=document.createElement("p");
    priceNode.classList.add("price")
    priceNode.appendChild(document.createTextNode("$"+`${menuItemDetail.price/100}`));

    contentDivNode.appendChild(menuItemNode);
    contentDivNode.appendChild(priceNode);

    return contentDivNode;
}
function getQuatityWrapper(menuItemDetail)
{
    let qtyWrapperDiv=document.createElement("div");
    qtyWrapperDiv.classList.add("quantity__wrapper");

    let decreaseBtn=document.createElement("button");
    decreaseBtn.classList.add("decrease");
    let decreaseImage = document.createElement("img");
    decreaseImage.src="images/chevron.svg";
    decreaseBtn.onclick=decreaseQtyInCart;
    decreaseBtn.appendChild(decreaseImage);

    let qtyDiv=document.createElement("div");
    qtyDiv.classList.add("quantity");
    qtyDiv.appendChild(document.createTextNode(`${menuItemDetail.count+1}`));

    let increaseBtn=document.createElement("button");
    increaseBtn.classList.add("increase");
    let increaseImage = document.createElement("img");
    increaseImage.src="images/chevron.svg";
    increaseBtn.onclick=increaseQtyInCart;
    increaseBtn.appendChild(increaseImage)

    let subtotalDiv=document.createElement("div");
    subtotalDiv.classList.add("subtotal");

    
    subtotalDiv.appendChild(document.createTextNode("$ "+`${menuItemDetail.price/100}`));

    qtyWrapperDiv.appendChild(decreaseBtn);
    qtyWrapperDiv.appendChild(qtyDiv);
    qtyWrapperDiv.appendChild(increaseBtn);
    qtyWrapperDiv.appendChild(subtotalDiv);
    return qtyWrapperDiv;
  
}

function increaseQtyInCart(event)
{   
    console.log(event.target)

}
function decreaseQtyInCart(event)
{
    console.log(event.target);
}
function getInCartButton()
{
    let inCartBtn=document.createElement("button");
    inCartBtn.classList.add("in-cart");
    let checkImg=document.createElement("img");
    checkImg.src="images/check.svg";
    inCartBtn.appendChild(checkImg);
    inCartBtn.appendChild(document.createTextNode("In Cart"));
}
{/* <button class="in-cart">
              <img src="images/check.svg" alt="Check" />
              In Cart
            </button> */}
export {getCartItemDiv,getContentDiv,getMenuItemDetails,getPlateDiv,getMenuItemDiv};