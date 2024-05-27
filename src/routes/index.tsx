import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { useAuth } from "../hooks/useAuth";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
    const { user } = useAuth();

    return(
        <NavigationContainer> 
            { user.id ? <StackRoutes/> : <AuthRoutes/> }
        </NavigationContainer>
    )
}

