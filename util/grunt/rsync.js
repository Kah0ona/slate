// -------------------------------------
// Grunt RSYNC way of deploying
// -------------------------------------

module.exports = {
	deploy_child: {
		files: "dist/child/",
		options: {
			host: "vps8063.xlshosting.net",
			port: "1023",
			user: "ftpsecure",
			remoteBase: "/var/www/wp-content/themes/slate-<%= package.version %>_<%= package.name %>"
		}
	},
	deploy_parent: {
		files: "dist/parent/",
		options: {
			host: "vps8063.xlshosting.net",
			port: "1023",
			user: "ftpsecure",
			remoteBase: "/var/www/wp-content/themes/slate-<%= package.version %>"
		}
	},
	init_deploy_child: {
		files: "dist/child/",
		options: {
			host: "vps8063.xlshosting.net",
			port: "1023",
			user: "ftpsecure",
			remoteBase: "/var/www/wp-content/themes/slate-<%= package.version %>_<%= package.name %>"
		}
	},

};
