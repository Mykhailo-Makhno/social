import React from "react";
import {StoreType} from "./redux/store";

const StoreContext= React.createContext({}as StoreType)
export default StoreContext;

export type ProviderType={
    store:StoreType
    children:React.ReactNode
}