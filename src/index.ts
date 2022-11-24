function handleRequest (url:string,method:"GET"|"POST") {
    
}

let req = { url: "https://example.com", method: "GET" };
// the below line will lead to an error once uncommented
// handleRequest(req.url, req.method);
// To bypass the above matter, you can either aplpy change 1 or change 2
// Change 1:
// req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
// We can also proceed as follows
const reqBis = { url: "https://example.com", method: "GET" } as const;
handleRequest(reqBis.url, reqBis.method);