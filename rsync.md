Guide to be able to use rsync from your local computer. RSYNC will upload the files to the server.
This is a bit more stable than FTP, which hanged now and then.

Mac OS X
========

The step below has to be done only once. 

* Add SSH keys to ~/.ssh/lmd (more info: http://www.serverwatch.com/tutorials/article.php/3846546/Saving-ssh-Keys-on-Mac-OS-X-Leopard.htm)

* Run `ssh-keygen -t rsa -f ~/.ssh/lokaalgevonden` (press enter until it is done)
* Run (ask marten for password): `scp ~/.ssh/lokaalgevonden.pub ftpsecure@vps8063.xlshosting.net:/var/www` 
* Run `ssh-add -K ~/.ssh/lokaalgevonden`
* Tell Marten you have done this, so he can give you access on the server.
* Run `ssh ftpsecure@vps8063.xlshosting.net`, it should give you access. If it does, type exit.



Migrating a project from FTPUSH to RSYNC usage
===============================================

If an existing project still uses ftpush, it has to be migrated. To do this, do the following.
NOTE: this will not work for the very old grunt projects, since they do not have a deploy directory yet.

* Run `npm install grunt-rsync-2 --save-dev`
* In your Gruntfile.js, comment out all the notions of ftpush, by adding a // in front of it
* Add a new file called rsync.js to /util/grunt, and put in the following contents:

```javascript
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

```
