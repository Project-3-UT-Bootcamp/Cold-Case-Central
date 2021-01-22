import React, { useState } from "react";
import { ADD_USER } from "../utils/mutation";
import { useMutation } from '@apollo/react-hooks';

function Signup() {
    const [formState, setFormState] = useState(
        { email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);
}