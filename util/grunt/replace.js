/**
 * RUN THIS AFTER COPY TASK!
 * 
 * Replaces some strings in some files
 * - strings in the gravity form XML import file
 * - strings in header.php (phone number)
 * - functions.child (define) 
 */
module.exports = {
	gravityform: {
		options: {
			patterns: [
				{
					match: 'clientmail', //replaces @@clientmail
					replacement: '<%= projectName %>'
				},
				{
					match: 'gravityform_xml_url',
					replacement: 'includes/gravityforms-contactform.xml'
				}

			]
		},
		files: [
			{
				expand: true, 
				flatten: false, 
				src: [
					'dev/php/includes/gravityforms-contactform.xml',
					'dev/php/templates/functions.php'
				]
			}
		]
	}
};

