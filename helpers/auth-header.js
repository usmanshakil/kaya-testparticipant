import { Auth } from "aws-amplify";

export async function authHeader() {
    let token = (await Auth.currentSession()).getAccessToken().getJwtToken();
    if (token) {
        return {
            Authorization: token
        };
    } else {
        return {};
    }
}
