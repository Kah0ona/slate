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
			remoteBase: "/var/www/wp-content/themes/slate-<%= package.version %>_<%= package.name %>"
		}
	},
	deploy_parent: {
		files: "deploy/parent/",
		options: {
			host: "vps8063.xlshosting.net",
			port: "1023",
			user: "ftpsecure",
			remoteBase: "/var/www/wp-content/themes/slate-<%= package.version %>"
		}
	},
	init_deploy_child: {
		files: "deploy/child/",
		options: {
			host: "vps8063.xlshosting.net",
			port: "1023",
			user: "ftpsecure",
			remoteBase: "/var/www/wp-content/themes/slate-<%= package.version %>_<%= projectName %>"
		}
	},

};
