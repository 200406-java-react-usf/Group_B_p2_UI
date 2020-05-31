import { projectClient } from "./project-client";


async function getInventory() {
    let response = await projectClient.get('/inventory');
    return await response.data;
}

export {
    getInventory
}