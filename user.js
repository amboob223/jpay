import React, { useRef } from "react";
import "../App.css";

function User() {


    const nameRef = useRef()
    const phoneRef = useRef()
    const bagRef = useRef()
    const photoRef = useRef()
    const addressRef = useRef()
    const originRef = useRef()
    const destinationRef = useRef()
    const costRef = useRef()



    const handleUpload = async (event) => {
        event.preventDefault();
        // try {
        //     // const body = {
        //     //     name: nameRef.current.value,
        //     //     phone: phoneRef.current.value,
        //     //     bag: bagRef.current.value,
        //     //     photo: photoRef.current.value,
        //     //     address: addressRef.current.value,
        //     //     origin: originRef.current.value,
        //     //     destination: destinationRef.current.value,
        //     //     cost: costRef.current.value
        //     // }

        //     // const response = await fetch("http://localhost:5000/users",
        //     //     {
        //     //         method: "POST",
        //     //         headers: { "Content-type": "application/json" },
        //     //         body: JSON.stringify(body)
        //     //     })
        // } catch (error) {
        //     console.log(error)
        // }
    }
    return (<div>
        <form
            id="form"
            onSubmit={handleUpload}
            encType="multipart/form-data"
        >
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="name"
                    ref={nameRef}
                    className="form-control"
                />
                <label htmlFor="phone">phone</label>
                <input
                    type="text"
                    id="phone"
                    placeholder="phone"
                    ref={phoneRef}
                    className="form-control"
                />
                <label htmlFor="bag">bags</label>
                <input
                    type="text"
                    id="bag"
                    placeholder="bag"
                    ref={bagRef}
                    className="form-control"
                />
                <label htmlFor="address">address</label>
                <input
                    type="text"
                    id="address"
                    placeholder="address"
                    ref={addressRef}
                    className="form-control"
                />
                <label htmlFor="origin">origin</label>
                <input
                    type="text"
                    id="origin"
                    placeholder="origin"
                    ref={originRef}
                    className="form-control"
                />
                <label htmlFor="destination">destination</label>
                <input
                    type="text"
                    id="destination"
                    placeholder="destination"
                    ref={destinationRef}
                    className="form-control"
                />
                <label htmlFor="cost">cost</label>
                <input
                    type="text"
                    id="cost"
                    placeholder="cost"
                    ref={costRef}
                    className="form-control"
                />

                <label htmlFor="image">photo</label>
                <input
                    type="file"
                    id="photo"
                    name="image"
                    accept=".jpg,.jpeg,.png"
                    placeholder="photo"
                    ref={photoRef}
                    className="form-control"

                />
                <button
                    type="submit"
                    id="btn"
                >
                    upload
                </button>

            </div>
        </form>
    </div>)
}

export default User;