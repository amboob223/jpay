import React from "react";
import "../App.css";

function User() {

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const bag = document.getElementById("bag");
    const photo = document.getElementById("photo");
    const address = document.getElementById("address");
    const origin = document.getElementById("origin");
    const destination = document.getElementById("destination");
    const cost = document.getElementById("name");
    const button = document.getElementById("btn");


    button.addEventListener("click", async () => {
        try {
            const body = {
                name: name.value,
                phone: phone.value,
                bag: bag.value,
                photo: photo.value,
                address: address.value,
                origin: origin.value,
                destination: destination.value,
                cost: cost.value
            }

            const response = await fetch("http://localhost:5000/users",
                {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(body)
                })
        } catch (error) {
            console.log(error)
        }
    })
    return (<div>

    </div>)
}

export default User;