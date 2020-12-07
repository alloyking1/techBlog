import httpsClient from "./httpClient";

/**
 * @function fetchCategories
 * @params NULL
 * @description Fetch all patients/elderly related to a sponsor
 *
 */

export async function fetchCategories(){
    const res = await httpsClient.get('/categories');
    return res;
}