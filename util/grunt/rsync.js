// -------------------------------------
// Grunt RSYNC way of deploying
// -------------------------------------

module.exports = {
	deploy_child: {
		files: "deploy/child/",
		options: {
			host: "vps8063.xlshosting.net",
			port: "1023",
			user: "ftpsecure",
			remoteBase: "/home/rsynctest/slate-<%= package.version %>_<%= package.name %>"
		}
	},
	deploy_parent: {
		files: "deploy/parent/",
		options: {
			host: "vps8063.xlshosting.net",
			port: "1023",
			user: "ftpsecure",
			remoteBase: "/home/rsynctest/slate-<%= package.version %>"
		}
	},
	init_deploy_child: {
		files: "deploy/child/",
		options: {
			host: "vps8063.xlshosting.net",
			port: "1023",
			user: "ftpsecure",
			remoteBase: "/home/rsynctest/slate-<%= package.version %>_<%= projectName %>"
		}
	},

};
