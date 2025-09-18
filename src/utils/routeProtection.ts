import { authClient } from "./authClient";

export const routeProtection = async () => {
    const { data } = await authClient.getSession();
    return data?.session;
};