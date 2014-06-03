Guide to be able to use rsync from your local computer. RSYNC will upload the files to the server.
This is a bit more stable than FTP, which hanged now and then.

Mac OS X
========

The step below has to be done only once. 

* Add SSH keys to ~/.ssh/lmd (more info: [here](http://www.serverwatch.com/tutorials/article.php/3846546/Saving-ssh-Keys-on-Mac-OS-X-Leopard.htm)

* Run `ssh-keygen -t rsa -f ~/.ssh/lokaalgevonden`
* Run (ask marten for password): `scp ~/.ssh/lokaalgevonden.pub ftpsecure@vps8063.xlshosting.net:/var/www` 
* Run `ssh-add -K ~/.ssh/lokaalgevonden`
* Tell Marten you have done this, so he can set up the server.



