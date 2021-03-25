// GET
fetch('https://api.thecatapi.com/v1/images/search')
.then(response => response.json())
.then(data => {
    let catImage = document.createElement("img");
    let imageContainer = document.querySelector(".image-container");
    catImage.src = data[0].url;
    imageContainer.append(catImage);
    console.log(data);
});

// POST
let newProfileData = { 
    username: "Ice T",
    email: "iceT@gmail.com",
    password: "iceTlovesicedTea"
}
fetch('https://social-media-api.com/newUser', {
    method: "POST",
    body: JSON.stringify(newProfileData),
    headers: { 
        "Content-type" : "application/json"
    }
})
.then(response => response.json())
.then(returnData => console.log(returnData));

// DELETE
fetch(`http://fake-instagram-site.com/myPictures/${24}`, {
    method: "DELETE",
    headers: {
        "Content-Type" : "application/json"
    }
})
.then(response => response.json())
.then(deleteResponse => console.log(deleteResponse));

// PATCH
fetch(`http://google.com/account/edit/${481}`, {
    method: "PATCH",
    body: JSON.stringify({
        newPhoneNumber: "555-555-5555"
    }),
    headers: {
        "Content-Type" : "application/json"
    }
})
.then(response => response.json())
.then(updatedProfile => console.log(updatedProfile));

// PUT
fetch(`http://delicious-sushi.com/placeNewOrder${34}`, {
    method: "PUT",
    body: JSON.stringify({
        sushi: "all of it"
    }),
    headers: { 
        "Content-Type" : "application/json"
    }
})
.then(response => response.json())
.then(orderConfirmation => console.log(orderConfirmation));

// CREDENTIALS => GET 
fetch('http://list-of-cities.com/allCities', {
    credentials: 'include',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({ newUserInfo })
})