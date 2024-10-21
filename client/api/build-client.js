import axios from "axios";

export default ({ req }) => {
  // console.log(req.headers);
  
  if (typeof window === "undefined") {
    // we are on the server
    // console.log(req.headers);
    
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseURL: "/",
    });
  }
};


