// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { url, method } = req;
    res.statusCode = 200;
    res.json(Object.assign({ url, method }, req.headers));
};
