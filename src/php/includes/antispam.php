<?php
	add_filter('gform_validation_1', 'validate_captcha');

	function validate_captcha($validation_result){

	    // 2 - Get the form object from the validation result
	    $form = $validation_result["form"];

	    // 3 - Get the current page being validated
	    $current_page = rgpost('gform_source_page_number_' . $form['id']) ? rgpost('gform_source_page_number_' . $form['id']) : 1;
		//print_r($validation_result); exit;
	    // 4 - Loop through the form fields
	    foreach($form['fields'] as &$field){

	        // 5 - If the field does not have our designated CSS class, skip it
	        if(strpos($field['cssClass'], 'validate-anti-spam') === false)
	            continue;

	        // 6 - Get the field's page number
	        $field_page = $field['pageNumber'];

	        // 7 - Check if the field is hidden by GF conditional logic
	        $is_hidden = RGFormsModel::is_field_hidden($form, $field, array());

	        // 8 - If the field is not on the current page OR if the field is hidden, skip it
	        if($field_page != $current_page || $is_hidden)
	            continue;

	        // 9 - Get the submitted value from the $_POST
	        $field_value = rgpost("input_{$field['id']}");

	        // 10 - Make a call to your validation function to validate the value
	        $is_valid = is_valid_captcha($field_value);

	        // 11 - If the field is valid we don't need to do anything, skip it
	        if($is_valid)
	            continue;

	        // 12 - The field failed validation, so first we'll need to fail the validation for the entire form
	        $validation_result['is_valid'] = false;

	        // 13 - Next we'll mark the specific field that failed and add a custom validation message
	        $field['failed_validation'] = true;
	        $field['validation_message'] = 'Vul het antwoord op de vraag in, het antwoord is het getal nul (0).';

	    }

	    // 14 - Assign our modified $form object back to the validation result
	    $validation_result['form'] = $form;

	    // 15 - Return the validation result
	    return $validation_result;
}

	function is_valid_captcha($v){
		return $v == "0";
	}
?>
