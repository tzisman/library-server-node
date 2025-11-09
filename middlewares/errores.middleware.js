/**
 * error handling middleware
 * @param {{ status?: number, message?: string }} err error data
 * @param {import("express").Request} req request data
 * @param {import("express").Response} res response data
 * @param {import("express").NextFunction} next function to move to the next middleware
 */
export const errorHandler = (err, req, res, next) => {
    
    const stat = err.status ?? 500;
    const { message = 'Server Error!' } = err;

    res.status(stat).json({ error: stat, type: message });
};