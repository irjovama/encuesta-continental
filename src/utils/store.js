async function easyFetch(enpoint, options){
    const BASE_URI = "http://127.0.0.1:3000/api/v1/";
    try{
        const response = await fetch(BASE_URI+enpoint, options);
        return await response.json();
    } catch(error){
        console.log(error);
        return {errors: error};
    }
}
export async function getReport(test_id, leader_id, page){
    const options = {method: 'GET'};
    return await easyFetch(`report/test/${test_id}/leader/${leader_id}/page/${page}`, options)
}
