const userDetailsConfig = {
    "api": {
        "uri": `https://twitter154.p.rapidapi.com/user/details?username=`,
        "method": "GET",
        "headers": {

            'X-RapidAPI-Key': '4e69dee007mshcfabb20ed8cdd44p19151fjsn3734b4f2793f',
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    }
}
async function getUserDetails(username) {
    const url = `${userDetailsConfig.api.uri}${username}`;
    console.log(url);
    const options = {
        method: userDetailsConfig.api.method,
        headers: userDetailsConfig.api.headers
    };
    const response = await fetch(url, options);
    return addClientGeneratedProperties(await response.json());
};
function addClientGeneratedProperties(data) {
    data.twitter_link = `https://twitter.com/${data.username}`;
    return data;
}