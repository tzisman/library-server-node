export const addRequestDate = (req, res, next) => {    
    req.currentDate = new Date();
    next();
};

export const printDate = (req, res, next) => {    
    if (req.method === "GET" && req.currentDate != null) {
        print(req.currentDate);
      }
    next();
};