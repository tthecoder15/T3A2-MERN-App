const customErrors = {
    loginError: {
        code: 400, 
        message: {
            "error/s": ["login-error"], 
            "login-error": "Incorrect email or password provided. Please try again"
        }
    },
    authError: {
        code: 403,
        message: {
            "error/s": ["auth-error"], 
            "auth-error": "You are not authorised to access this resource."
        }
    },
    noInst: {
        code: 404,
        message: {
            "error/s": ["no-instance"],
            "no-instance": "Instance not found."
        }
    },
    userExists: {
        code: 400,
        message: {
            "error/s": ["user-exists"],
            "user-exists": "Cannot register user, a user is already registered with that email."
        }
    },
    noUser: {
        code: 404,
        message: {
            "error/s": ["no-user"],
            "no-user": "No user with that ID found."
        }
    },
    noPet: {
        code: 404,
        message: {
            "error/s": ["no-pet"],
            "no-user": "No pet with that ID found."
        }
    },
    noVet: {
        code: 404,
        message: {
            "error/s": ["no-vet"],
            "no-user": "No vet with that ID found."
        }
    },
    noAppt: {
        code: 404,
        message: {
            "error/s": ["no-appointment"],
            "no-user": "No appointment with that ID found."
        }
    },

}

export default customErrors