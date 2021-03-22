const {usersService} = require("../controllers");

const get = async (req, res, next)=> {
    const {query = {}} = req;
    try {
        const results = await usersService.getUsers(query);
        res.json({
            status: "success",
            code: 200,
            data: {
                users: results
            }
        })
    }
    catch(err){
        next(err)
    }
};

const getById = (req, res)=> {

};

const add = (req, res)=> {

};

const update = (req, res)=> {

};

const remove = (req, res)=> {

};

module.exports = {
    get,
    getById,
    add,
    update,
    remove
}
