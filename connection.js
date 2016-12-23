var env = process.env.NODE_ENV || 'developer';
var con = '';

if (env == 'developer')
{
    //con = 'mongodb://localhost:27017/appacademia';
    con = 'mongodb://jcarlosverase:jcarlosverase@ds139288.mlab.com:39288/appacademia';
}
else
{
    con = 'mongodb://jcarlosverase:jcarlosverase@ds139288.mlab.com:39288/appacademia';
}

console.log(con);
exports.connectionString = con;

