
try {
    let result = await fetch('http://localhost:3000/login', {

        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(credentials)

    });

    result = await result.json();
    if (result.message === "LogIn Successfully") {
        console.log(1);
        // redirect

    }
    else if (result.message === "Invalid Password") {
        console.log(2);

    }
    else if (result.message === "User does not exist") {
        <Redirect to='/'></Redirect>
    }
} catch (err) {
    console.log("Error", err);
}