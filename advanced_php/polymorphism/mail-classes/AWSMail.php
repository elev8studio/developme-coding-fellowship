<?php

namespace App;

class AWSMail extends Mail
{
	public function mail()
	{
		// ... sends a mail
		dump("Sending using AWSMail: \"{$this->subject}\" to {$this->to}, from {$this->from}, saying {$this->message}");
	}

	public function from($address)
	{
		return parent::from("2+{$address}");
	}
}
