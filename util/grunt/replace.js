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
					match: 'projectName', //replaces @@projectName
					replacement: '<%= projectName %>'
				},
				{
					match: 'gravityform_xml_url',
					replacement: 'includes/gravityforms-contactform.xml'
				},
				{
					match: 'clientStreet',
					replacement: '<%= clientStreet %>'
				},
				{
					match: 'clientZipcode',
					replacement: '<%= clientZipcode %>'
				},
				{
					match: 'clientCity',
					replacement: '<%= clientCity %>'
				},
				{
					match: 'clientEmail',
					replacement: '<%= clientMail %>'
				},
				{
					match: 'clientPhone',
					replacement: '<%= clientPhone %>'
				}

			]
		},
		files: [
			{
				expand: true, 
				flatten: false, 
				src: [
					'dev/php/includes/gravityforms-contactform.xml',
					'dev/php/templates/functions.php',
					'dev/php/templates/template-contact.php',
					'dev/php/templates/header.php',
					'dev/js/google-maps.js'
				]
			}
		]
	}
};

