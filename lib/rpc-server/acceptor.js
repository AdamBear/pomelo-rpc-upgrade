const acceptor = require('./acceptors/mqtt2-acceptor');

module.exports.create = function(opts, cb)
{
	return acceptor.create(opts, cb);
};